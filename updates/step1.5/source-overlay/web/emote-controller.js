'use strict';
// Cosmetic events live outside deterministic combat, rollback input and the referee.
function emoteDrawSigil(g,c,x,y,r,age){const progress=Math.max(0,Math.min(1,age/c.duration)),index=CosmeticCatalog.items.filter(x=>x.cosmeticType==='EMOTE').indexOf(c),alpha=Math.min(1,progress*7,(1-progress)*6);g.save();g.globalAlpha=alpha;g.translate(x,y);g.strokeStyle=c.color;g.fillStyle=c.color;g.lineWidth=2;g.beginPath();g.arc(0,0,r*(.8+.2*Math.sin(progress*Math.PI)),0,Math.PI*2);g.stroke();g.rotate(options.reduced?0:Math.sin(progress*Math.PI)*(index===3?1.5:.15));
 // Short ceremonial symbols: upright bow, joined palms, crossed arrows, sunburst, lotus, oath banner.
 g.beginPath();if(index===0){g.moveTo(-r*.2,-r*.55);g.quadraticCurveTo(r*.55,0,-r*.2,r*.55);g.lineTo(-r*.2,-r*.55);}else if(index===1){g.moveTo(0,-r*.55);g.lineTo(-r*.35,r*.3);g.lineTo(0,r*.05);g.lineTo(r*.35,r*.3);g.closePath();}else if(index===2){g.moveTo(-r*.4,-r*.4);g.lineTo(r*.4,r*.4);g.moveTo(r*.4,-r*.4);g.lineTo(-r*.4,r*.4);}else if(index===3){for(let i=0;i<8;i++){const a=i*Math.PI/4;g.moveTo(Math.cos(a)*r*.2,Math.sin(a)*r*.2);g.lineTo(Math.cos(a)*r*.6,Math.sin(a)*r*.6);}}else if(index===4){for(let i=-1;i<=1;i++){g.moveTo(0,r*.35);g.quadraticCurveTo(i*r*.8,-r*.6,0,-r*.4);g.quadraticCurveTo(-i*r*.2,0,0,r*.35);}}else{g.moveTo(-r*.3,r*.55);g.lineTo(-r*.3,-r*.55);g.lineTo(r*.4,-r*.45);g.lineTo(r*.1,-r*.1);g.lineTo(-r*.3,-r*.15);}g.stroke();g.restore();g.save();g.globalAlpha=alpha;g.textAlign='center';g.fillStyle='#ffe1a2';g.font='12px Georgia';g.fillText(c.displayName,x,y+r+20);g.restore();}
const EmoteController={
 cooldownMs:5000,last:[-Infinity,-Infinity],events:[null,null],seen:new Map(),
 allowed(){if(online.active)return !!service.connected&&(service.match?.status==='connecting'&&!online.started||service.match?.status==='complete'&&ended);return atHome||ended;},
 slots(){if(online.active)return service.match?.cosmetics?.[online.seat]?.emotes||service.profile?.cosmeticLoadout?.emotes||CosmeticCatalog.defaults().emotes;return service.profile?.cosmeticLoadout?.emotes||CosmeticCatalog.defaults().emotes;},
 async trigger(slot){const seat=online.active?online.seat:0,id=this.slots()[slot],c=CosmeticCatalog.byId[id];if(!this.allowed())throw Error('Emotes are available before or after a round.');if(!c||c.cosmeticType!=='EMOTE')throw Error('This emote slot is empty.');if(performance.now()-this.last[seat]<this.cooldownMs)throw Error('Please wait before using another emote.');this.last[seat]=performance.now();
  if(online.active){const r=await serviceAPI('match/emote',{matchId:service.connected,emoteId:id});this.show(seat,id,r.triggeredAt);}else this.show(seat,id,Date.now());
 },
 show(seat,id,stamp){if(!this.allowed()||!CosmeticCatalog.byId[id])return;if(online.active&&seat!==online.seat&&service.profile?.cosmeticLoadout?.hideOpponentEmotes)return;const key=seat+':'+stamp;if(this.seen.has(key))return;this.seen.set(key,true);if(this.seen.size>32)this.seen.delete(this.seen.keys().next().value);this.events[seat]={id,start:performance.now()};},
 sync(){if(!this.allowed()){this.events=[null,null];return;}for(const e of service.match?.emotes||[]){if(Date.now()-e.triggeredAt<5000)this.show(e.seat,e.emoteId,e.triggeredAt);}},
 cancel(){this.events=[null,null];}
};
// Poll only outside combat. Completed matches no longer appear in presence responses.
let emotePollBusy=false;
setInterval(async()=>{
 if(emotePollBusy||document.hidden||!online.active||!EmoteController.allowed())return;
 const id=service.connected;emotePollBusy=true;
 try{const r=await serviceAPI('match/status',{matchId:id});if(service.connected===id&&r.match){service.match=r.match;EmoteController.sync();}}
 catch{/* Cosmetic delivery must never interrupt a match. */}
 finally{emotePollBusy=false;}
},1000);
const emoteWheel=document.createElement('dialog');emoteWheel.id='emoteWheel';emoteWheel.setAttribute('aria-label','Equipped emotes');document.body.append(emoteWheel);
function emoteOpen(){emoteWheel.innerHTML='<h3>Warrior emotes</h3><p>Before or after a round · 5-second cooldown</p><div class="emote-slots">'+EmoteController.slots().map((id,i)=>`<button data-emote-slot="${i}" ${!id||!EmoteController.allowed()?'disabled':''}>${i+1} · ${CosmeticCatalog.byId[id]?.displayName||'Empty slot'}</button>`).join('')+'</div><p id="emoteStatus" role="status"></p><button id="emoteClose">Close · Esc</button>';emoteWheel.querySelectorAll('[data-emote-slot]').forEach(b=>b.onclick=()=>emoteTrigger(+b.dataset.emoteSlot));$('emoteClose').onclick=()=>emoteWheel.close();if(!emoteWheel.open)emoteWheel.showModal();}
async function emoteTrigger(slot){try{await EmoteController.trigger(slot);emoteWheel.close();}catch(e){$('emoteStatus').textContent=e.message;}}
for(const parent of [$('result'),$('characterSelect'),$('commands0')]){if(!parent)continue;const b=document.createElement('button');b.className='emote-trigger';b.textContent='Emotes · T';b.setAttribute('aria-label','Open emote wheel');b.onclick=emoteOpen;parent.append(b);}
document.addEventListener('keydown',e=>{if(e.repeat||['INPUT','TEXTAREA','SELECT'].includes(e.target?.tagName))return;if(emoteWheel.open&&['Digit1','Digit2','Digit3','Digit4'].includes(e.code)){e.preventDefault();emoteTrigger(+e.code.slice(-1)-1);return;}if(e.code==='KeyT'&&!document.querySelector('dialog[open]')){e.preventDefault();emoteOpen();}});
const emoteOverlay=document.createElement('div');emoteOverlay.id='emoteOverlay';emoteOverlay.setAttribute('aria-hidden','true');document.body.append(emoteOverlay);
const emoteCanvases=[0,1].map(seat=>{const c=document.createElement('canvas');c.width=c.height=180;c.className='emote-visual';c.dataset.seat=seat;emoteOverlay.append(c);return c;});
let emoteSyncAt=0;
function emoteFrame(){const now=performance.now();if(now-emoteSyncAt>200){EmoteController.sync();emoteSyncAt=now;}if(!EmoteController.allowed())EmoteController.cancel();for(let seat=0;seat<2;seat++){const g=emoteCanvases[seat].getContext('2d');g.clearRect(0,0,180,180);const e=EmoteController.events[seat];if(!e)continue;const c=CosmeticCatalog.byId[e.id],age=(now-e.start)/1000;if(age>=c.duration){EmoteController.events[seat]=null;continue;}emoteDrawSigil(g,c,90,70,46,age);}requestAnimationFrame(emoteFrame);}requestAnimationFrame(emoteFrame);
