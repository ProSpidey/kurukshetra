'use strict';
// Cosmetic signals never enter combat inputs, simulation hashes, or rollback state.
const emoteImages=new Map();
function emoteLoadSticker(c){
 const id=c.cosmeticId||c.id,old=emoteImages.get(id);if(old)return old.promise;
 const im=new Image(),entry={im,ready:false,promise:null};
 entry.promise=new Promise(resolve=>{im.onload=()=>{entry.ready=true;resolve(true)};im.onerror=()=>{emoteImages.delete(id);resolve(false)}});
 emoteImages.set(id,entry);im.src='emotes/'+id.replace('emote_','')+'.webp';return entry.promise;
}
function emoteDrawSigil(g,c,x,y,r,age){
 emoteLoadSticker(c);const entry=emoteImages.get(c.cosmeticId||c.id);if(!entry?.ready)return;
 const duration=c.duration||1.6,p=Math.max(0,Math.min(1,age/duration)),frame=options.reduced?1:Math.min(3,Math.floor(p*4));
 const alpha=Math.min(1,p*9,(1-p)*9),scale=options.reduced?1:Math.min(1,.7+p*3);
 g.save();g.globalAlpha=alpha;const h=r*2.8*scale,w=h*.75;
 g.drawImage(entry.im,frame*192,0,192,256,x-w/2,y-h/2,w,h);g.restore();
}
const EmoteController={
 cooldownMs:5000,last:[-Infinity,-Infinity],pending:false,events:[null,null],seen:new Map(),
 allowed(){
  if(online.active)return !!service.connected&&['connecting','active','complete'].includes(service.match?.status||'active');
  // Do not offer combat emotes on the home menu; retain availability through selection and match end.
  return !atHome||!!document.getElementById('characterSelect')?.open;
 },
 slots(){return (online.active?service.match?.cosmetics?.[online.seat]?.emotes:null)||service.profile?.cosmeticLoadout?.emotes||CosmeticCatalog.defaults().emotes},
 async trigger(slot){
  const seat=online.active?online.seat:0,id=this.slots()[slot],c=CosmeticCatalog.byId[id];
  if(!this.allowed())throw Error('Emotes are unavailable right now.');
  if(!c||c.cosmeticType!=='EMOTE')throw Error('This emote slot is empty.');
  if(this.pending||performance.now()-this.last[seat]<this.cooldownMs)throw Error('Please wait before using another emote.');
  this.pending=true;
  try{
   if(!await emoteLoadSticker(c))throw Error('Sticker could not load. Please try again.');
   if(!this.allowed())return;
   let stamp=performance.now();
   if(online.active){const id=service.connected,r=await serviceAPI('match/emote',{matchId:id,emoteId:c.cosmeticId});if(service.connected!==id)return;stamp=r.triggeredAt;}
   this.last[seat]=performance.now();this.show(seat,c.cosmeticId,stamp);
  }finally{this.pending=false;}
 },
 show(seat,id,stamp){
  if(!this.allowed()||!Number.isInteger(seat)||seat<0||seat>1||!CosmeticCatalog.byId[id])return;
  if(online.active&&seat!==online.seat&&service.profile?.cosmeticLoadout?.hideOpponentEmotes)return;
  const key=seat+':'+id+':'+stamp;if(this.seen.has(key))return;
  this.seen.set(key,true);if(this.seen.size>40)this.seen.delete(this.seen.keys().next().value);
  emoteLoadSticker(CosmeticCatalog.byId[id]);this.events[seat]={id,start:performance.now()};
 },
 sync(){
  if(!this.allowed()){this.events=[null,null];return;}
  if(!online.active)return;
  for(const e of service.match?.emotes||[])if(Date.now()-e.triggeredAt<5000)this.show(e.seat,e.emoteId,e.triggeredAt);
 },
 cancel(){this.events=[null,null];}
};
// Passive out-of-band polling. Never pause gameplay or send emotes as rollback inputs.
let emotePollBusy=false,emoteSyncAt=0;
setInterval(async()=>{
 if(emotePollBusy||document.hidden||!online.active||!EmoteController.allowed())return;
 const id=service.connected;emotePollBusy=true;
 try{const r=await serviceAPI('match/status',{matchId:id});if(service.connected===id&&r.match){service.match=r.match;EmoteController.sync();}}
 catch{/* Cosmetic delivery must not affect combat. */}
 finally{emotePollBusy=false;}
},1000);
const emoteWheel=document.createElement('dialog');emoteWheel.id='emoteWheel';emoteWheel.setAttribute('aria-label','Equipped warrior emotes');
document.body.append(emoteWheel);
const battleEmoteButton=document.createElement('button');battleEmoteButton.id='battleEmoteButton';battleEmoteButton.type='button';
battleEmoteButton.setAttribute('aria-label','Open warrior emotes');battleEmoteButton.setAttribute('aria-haspopup','dialog');
battleEmoteButton.setAttribute('aria-controls','emoteWheel');battleEmoteButton.setAttribute('aria-expanded','false');
battleEmoteButton.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 5.5h14a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-8l-5 3v-3H5A2.5 2.5 0 0 1 2.5 16V8A2.5 2.5 0 0 1 5 5.5Z"/><path d="m12 7 1.1 3.1L16 11l-2.9 1-1.1 3-1.1-3L8 11l2.9-.9Z"/></svg><small>EMOTE</small>';
document.body.append(battleEmoteButton);
function emoteClose(){if(emoteWheel.open)emoteWheel.close();battleEmoteButton.setAttribute('aria-expanded','false')}
function emotePositionWheel(){
 const rect=battleEmoteButton.getBoundingClientRect(),width=Math.min(310,innerWidth-24);
 const x=Math.min(innerWidth-width-12,rect.right+12);
 const headerBottom=document.querySelector('.battle .hud')?.getBoundingClientRect().bottom||0;
 const y=Math.max(12,Math.min(innerHeight-260,Math.max(headerBottom+8,rect.top-64)));
 emoteWheel.style.left=Math.max(12,x)+'px';emoteWheel.style.top=Math.max(12,y)+'px';
}
function emoteOpen(){
 if(!EmoteController.allowed())return;
 if(emoteWheel.open){emoteClose();return;}
 for(const id of EmoteController.slots())if(CosmeticCatalog.byId[id])emoteLoadSticker(CosmeticCatalog.byId[id]);
 const slots=EmoteController.slots();
 emoteWheel.innerHTML='<div class="emote-wheel-heading"><strong>WARRIOR EMOTES</strong><button id="emoteClose" type="button" aria-label="Close emotes">×</button></div><p>During battle · 5s cooldown</p><div class="emote-slots">'+slots.map((id,i)=>{
  const c=CosmeticCatalog.byId[id],icon=c?'<span class="emote-wheel-icon" style="background-image:url(\'emotes/'+id.replace('emote_','')+'.webp\')"></span>':'<span class="emote-wheel-empty">◇</span>';
  return '<button type="button" data-emote-slot="'+i+'" '+(!c?'disabled':'')+'>'+icon+'<span><b>'+(c?.displayName||'Empty slot')+'</b><small>'+(i+1)+' · Tap to use</small></span></button>';
 }).join('')+'</div><p id="emoteStatus" role="status" aria-live="polite"></p>';
 emoteWheel.querySelectorAll('[data-emote-slot]').forEach(b=>b.addEventListener('click',()=>emoteTrigger(Number(b.dataset.emoteSlot))));
 document.getElementById('emoteClose').addEventListener('click',emoteClose);
 emotePositionWheel();
 emoteWheel.show();battleEmoteButton.setAttribute('aria-expanded','true');
}
async function emoteTrigger(slot){
 try{await EmoteController.trigger(slot);emoteClose();}
 catch(e){const status=document.getElementById('emoteStatus');if(status)status.textContent=e.message;}
}
battleEmoteButton.addEventListener('click',emoteOpen);
// Existing intro/outro selection keeps its buttons and delegates to the same non-blocking picker.
for(const parent of [document.getElementById('result'),document.getElementById('characterSelect'),document.getElementById('commands0')]){
 if(!parent)continue;const b=document.createElement('button');b.className='emote-trigger';b.type='button';b.textContent='Emotes · T';b.setAttribute('aria-label','Open emote wheel');b.addEventListener('click',emoteOpen);parent.append(b);
}
// Pointer-up/click on an emote control should never be interpreted as a drag-release arrow.
for(const el of [battleEmoteButton,emoteWheel])for(const name of ['pointerdown','pointerup','touchstart','touchend','mousedown','mouseup','click']){
 el.addEventListener(name,e=>e.stopPropagation());
}
document.addEventListener('pointerdown',e=>{
 if(!emoteWheel.open||emoteWheel.contains(e.target)||battleEmoteButton.contains(e.target))return;
 emoteClose();e.preventDefault();e.stopImmediatePropagation();
},true);
emoteWheel.addEventListener('close',()=>battleEmoteButton.setAttribute('aria-expanded','false'));
document.addEventListener('keydown',e=>{
 if(e.repeat||['INPUT','TEXTAREA','SELECT'].includes(e.target?.tagName))return;
 if(emoteWheel.open&&['Digit1','Digit2','Digit3','Digit4'].includes(e.code)){
  e.preventDefault();e.stopImmediatePropagation();emoteTrigger(Number(e.code.slice(-1))-1);return;
 }
 if(e.code==='Escape'&&emoteWheel.open){e.preventDefault();e.stopImmediatePropagation();emoteClose();return;}
 if(e.code==='KeyT'&&!document.querySelector('dialog[open]:not(#emoteWheel)')){e.preventDefault();e.stopImmediatePropagation();emoteOpen();}
},true);
const emoteOverlay=document.createElement('div');emoteOverlay.id='emoteOverlay';emoteOverlay.setAttribute('aria-hidden','true');document.body.append(emoteOverlay);
const emoteCanvases=[0,1].map(seat=>{const c=document.createElement('canvas');c.width=c.height=180;c.className='emote-visual';c.dataset.seat=seat;emoteOverlay.append(c);return c;});
function emotePosition(seat){
 const el=emoteCanvases[seat],rect=canvas.getBoundingClientRect(),p=players[seat];if(!p)return;
 let x=rect.left+p.x/W*rect.width,y=rect.top+(p.y-(p.dismounted?45:110))/H*rect.height;
 const select=document.getElementById('characterSelect');
 if(select?.open){const target=seat===matchup.seat?document.getElementById('selectArt'):document.getElementById('matchupSeat'+seat);
  if(target){const r=target.getBoundingClientRect();x=r.left+r.width*(seat===matchup.seat?.22:.5);y=r.top+Math.min(60,r.height*.12);}}
 const size=Math.max(72,Math.min(110,rect.width*.09));el.style.width=el.style.height=size+'px';el.style.right='auto';
 el.style.left=Math.max(0,Math.min(innerWidth-size,x-size/2))+'px';el.style.top=Math.max(4,y-size-8)+'px';
}
function updateBattleEmoteButton(){
 const main=document.querySelector('main');
 if(!main||main.classList.contains('hidden')||!EmoteController.allowed()){
  battleEmoteButton.hidden=true;if(emoteWheel.open)emoteClose();return;
 }
 const rect=canvas.getBoundingClientRect(),size=innerWidth<=760?46:54;
 // Screenshot reference: button centered 6.2% from left, 28% from top of game view.
 const hud=document.querySelector('.battle .hud'),hudRect=hud?.getBoundingClientRect();
 const safeTop=hudRect&&hudRect.bottom>rect.top?hudRect.bottom+12:rect.top+8;
 const x=Math.max(rect.left+10,Math.min(rect.right-size-8,rect.left+rect.width*.062-size/2));
 const y=Math.max(safeTop,Math.min(rect.bottom-size-12,rect.top+rect.height*.28-size/2));
 battleEmoteButton.hidden=false;battleEmoteButton.style.left=Math.round(x)+'px';battleEmoteButton.style.top=Math.round(y)+'px';
 const otherModal=document.querySelector('dialog[open]:not(#emoteWheel)');
 battleEmoteButton.disabled=!!otherModal;
 if(otherModal&&emoteWheel.open)emoteClose();
 else if(emoteWheel.open)emotePositionWheel();
}
window.addEventListener('resize',updateBattleEmoteButton);
document.addEventListener('fullscreenchange',updateBattleEmoteButton);
setInterval(updateBattleEmoteButton,250);updateBattleEmoteButton();
function emoteFrame(){
 const now=performance.now();if(now-emoteSyncAt>250){EmoteController.sync();emoteSyncAt=now;}
 if(!EmoteController.allowed())EmoteController.cancel();
 for(let seat=0;seat<2;seat++){
  const g=emoteCanvases[seat].getContext('2d');g.clearRect(0,0,180,180);
  const e=EmoteController.events[seat];if(!e)continue;
  const c=CosmeticCatalog.byId[e.id],age=(now-e.start)/1000;
  if(!c||age>=(c.duration||1.6)){EmoteController.events[seat]=null;continue;}
  emotePosition(seat);emoteDrawSigil(g,c,90,90,56,age);
 }
 requestAnimationFrame(emoteFrame);
}
requestAnimationFrame(emoteFrame);
