'use strict';
let fateMusicGain=null;
const productionScenes=new Map(),presentationSeen=new Set();
function presentationNow(){if(typeof rollbackActive==='function'&&rollbackActive())return rb.clock;return typeof fatePresentation==='undefined'?0:fatePresentation.clock;}
function productionDialogue(hero,category,serial=fateController.state.serial){const keys=DIALOGUE_DATA.groups[['arjuna','karna','bhishma','drona','abhimanyu','ashwatthama','satyaki','ekalavya'][hero]+':'+category]||[];return keys.length?[keys[serial%keys.length]]:[];}
function productionEmit(i,category,ids){if(onlineGuest())return;fateController.event(i,'Dialogue',{dialogueIds:ids||productionDialogue(players[i].id,category),category});}
function productionRoundEnd(win){
 if(onlineGuest())return;
 const seats=win<0?[0,1]:[1-win,win],ids=[];
 for(const i of seats){const hero=players[i].id;if(i!==win){const death=DIALOGUE_DATA.fate[hero+':DEAD'];ids.push(...(death?.length?death:productionDialogue(hero,'defeat')));}else ids.push(...productionDialogue(hero,'victory'));}
 fateController.event(win<0?0:win,'Dialogue',{dialogueIds:ids,category:'round_end',sequence:'round-end'});
}
function productionObserve(){
 if(atHome||onlineGuest()||!started)return;
 const state=fateController.state;state.presentation??={};const flags=state.presentation;
 if(!flags.intro){flags.intro=true;for(const p of players){const name=['arjuna','karna','bhishma','drona','abhimanyu','ashwatthama','satyaki','ekalavya'][p.id],src='animation/'+name+'-fate.png';if(!fateAtlasCache.has(src)){const atlas=new Image();atlas.src=src;fateAtlasCache.set(src,atlas);}}const names=players.map(p=>['arjuna','karna','bhishma','drona','abhimanyu','ashwatthama','satyaki','ekalavya'][p.id]);const conversation=DIALOGUE_DATA.conversations[names.slice().sort().join(':')];productionEmit(0,'intro',round===1&&conversation?conversation:[...productionDialogue(players[0].id,'intro'),...productionDialogue(players[1].id,'intro')]);}
 players.forEach((p,i)=>{if(p.hp>0&&p.hp/p.maxHp<=.25&&!flags['low'+i]){flags['low'+i]=true;productionEmit(i,'low_health');}if(rageReady(i)&&elapsed>=45&&!flags['rage'+i]){flags['rage'+i]=true;productionEmit(i,'rage');}});
}
function productionEvent(e){
 if(presentationSeen.has(e.id))return;presentationSeen.add(e.id);if(presentationSeen.size>512)presentationSeen.delete(presentationSeen.values().next().value);
 if((e.trigger==='UltimateCollision'||e.trigger==='UltimateDirectHit')&&typeof playAstraMovie==='function')playAstraMovie(e);
 const key=e.cinematicKey||e.hero+':'+(e.trigger==='ArmourBreak'?'ArmourBreak':e.phase||e.trigger),definition=CINEMATIC_DATA[key],age=Math.max(0,presentationNow()-(e.presentationAt??presentationNow()));
 const ids=e.dialogueIds||DIALOGUE_DATA.fate[key]||(e.trigger==='UltimateActivation'?productionDialogue(e.hero,'ultimate',Number(e.id.split(':').at(-1))||0):e.trigger==='UltimateCounter'?productionDialogue(e.hero,'counter',Number(e.id.split(':').at(-1))||0):e.trigger==='AstraCounter'?productionDialogue(e.hero,'astra_counter',Number(e.id.split(':').at(-1))||0):e.trigger==='SpecialDeath'?productionDialogue(e.hero,'defeat',Number(e.id.split(':').at(-1))||0):e.trigger==='PassiveEnded'?productionDialogue(e.hero,'phase_change',Number(e.id.split(':').at(-1))||0):[]);
 if(e.sequence==='round-end'&&typeof beginRoundPresentation==='function')beginRoundPresentation(e,ids);
 if(e.film&&typeof queueFateFilm==='function')queueFateFilm(e);
 if(e.film&&ids.length&&e.phase!=='DEAD')voices.stop();
 if(ids.length&&e.trigger!=='SpecialDeath'&&e.phase!=='DEAD')voices.submit(ids,e);
 if(!e.film&&definition&&age<definition.duration){productionScenes.set(e.seat,{event:e,definition,start:e.presentationAt??presentationNow()});if(age<.3)productionSound(e,definition);}
 else if(EVENT_AUDIO_CUES[e.trigger]&&age<.3)productionSound(e,EVENT_AUDIO_CUES[e.trigger]);
 else if(['OBSERVED','UNDERSTOOD'].includes(e.phase)&&age<.3)tone(650+e.hero*20,.08,'sine');
}
function productionSound(e,d){if(!sound)return;unlockAudio();if(!audioContext)return;
 noise(.18,d.element==='dust'?200:1500,.13);tone(d.element==='dust'?55:170+e.hero*20,.35,'triangle');
 if(!fateMusicGain){fateMusicGain=audioContext.createGain();fateMusicGain.connect(audioContext.destination);}fateMusicGain.gain.value=options.volume*.1;
 const base=[196,146.83,98,164.81,220,110,246.94,174.61][e.hero];for(let n=0;n<3;n++){const o=audioContext.createOscillator(),g=audioContext.createGain(),t=audioContext.currentTime+n*.16;o.type='sine';o.frequency.value=base*[1,1.5,2][n];g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.3,t+.07);g.gain.exponentialRampToValueAtTime(.001,t+1.2);o.connect(g).connect(fateMusicGain);o.start(t);o.stop(t+1.3);o.onended=()=>{o.disconnect();g.disconnect();};}
}
function productionUpdate(){if(typeof updateFateFilms==='function')updateFateFilms();if(typeof updateAstraMovie==='function')updateAstraMovie();if(!(typeof rollbackActive==='function'&&rollbackActive()))productionObserve();for(const e of (typeof rollbackEvents==='function'?rollbackEvents():fateController.state.events))productionEvent(e);for(const [seat,s] of productionScenes)if(presentationNow()-s.start>s.definition.duration)productionScenes.delete(seat);document.body.classList.toggle('fate-death-scene',[...productionScenes.values()].some(s=>s.event.phase==='DEAD'));voices.update();}
function productionAnimation(p){const scene=productionScenes.get(players.indexOf(p));if(!scene)return null;const t=Math.max(0,presentationNow()-scene.start),d=scene.definition,phase=Math.min(d.animation.length-1,Math.floor(t/d.duration*d.animation.length));return {name:d.animation[phase],age:t-phase*d.duration/d.animation.length};}
function drawProductionCinematics(){
 productionUpdate();if(atHome)return;let index=0;
 for(const [seat,scene] of productionScenes){const d=scene.definition,t=presentationNow()-scene.start,progress=Math.min(1,t/d.duration),p=players[seat];if(progress>=1)continue;
 // Time remapping affects the inset animation only, never host physics or input timing.
 const localTime=t<.12?0:t<.65?(t-.12)*.45:.24+(t-.65)*1.2;
 const enter=Math.min(1,t/.15),exit=Math.min(1,(d.duration-t)/.25),alpha=Math.min(enter,exit),width=productionScenes.size>1?Math.min(390,W*.42):Math.min(460,W*.8),height=170,left=productionScenes.size>1?(seat===0?W*.04:W*.96-width):W/2-width/2,top=110;
 ctx.save();ctx.globalAlpha=alpha;ctx.fillStyle='#080d16e8';ctx.fillRect(left,top,width,height);ctx.strokeStyle=d.color;ctx.lineWidth=1;ctx.strokeRect(left,top,width,height);
 ctx.save();ctx.beginPath();ctx.rect(left+1,top+1,width-2,height-2);ctx.clip();ctx.translate(left+width/2,top+height*.63);
 const impact=Math.max(0,1-Math.abs(t-d.impact)/.14);if(!options.reduced){ctx.translate(Math.sin(t*95)*impact*5,Math.cos(t*79)*impact*3);const z=1+Math.sin(Math.PI*progress)*.12;ctx.scale(z,z);}
 ctx.globalAlpha=alpha*.35;ctx.fillStyle=d.color;ctx.beginPath();ctx.ellipse(0,0,105+progress*60,65,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=alpha;
 if(d.camera==='weapon'){ctx.scale(1.2,1.2);ctx.translate(0,20);}else if(d.camera==='wheel'){ctx.translate(-35,-12);ctx.strokeStyle='#977242';ctx.lineWidth=7;ctx.beginPath();ctx.arc(80,50+Math.min(20,t*15),32,0,Math.PI*2);ctx.stroke();for(let spoke=0;spoke<6;spoke++){const a=spoke*Math.PI/3;line(80,50+Math.min(20,t*15),80+Math.cos(a)*30,50+Math.min(20,t*15)+Math.sin(a)*30,'#cba875',3);}}else if(d.camera==='wide'){ctx.scale(.82,.82);}
 const selected=d.animation[Math.min(d.animation.length-1,Math.floor(progress*d.animation.length))];drawProductionSprite(selected,p,-90,-100,180,180,localTime);
 if(d.camera==='projectile'){drawProductionSprite('krishna_force_chariot_down',p,-175,-65,120,120,localTime);const x=180-progress*360;line(x,-45,x+70,-47,'#ffd991',3);}
 if(d.element==='dust')drawSpriteEffect('dust',0,65,200,localTime,1,true);else drawSpriteEffect(d.element,0,0,185,localTime,.9,true);
 if(impact>0){ctx.globalAlpha=alpha*impact*.55;ctx.strokeStyle=d.color;ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,0,30+impact*75,0,Math.PI*2);ctx.stroke();}
 ctx.restore();ctx.fillStyle=d.color;ctx.font='bold 16px Georgia';ctx.textAlign='center';ctx.fillText(d.title,left+width/2,top+22,width-20);ctx.font='10px sans-serif';ctx.fillStyle='#bcc7d2';ctx.fillText('FATE · COMBAT CONTINUES',left+width/2,top+height-9);ctx.restore();
 }
}
function drawProductionSprite(name,p,x,y,w,h,age){const slot=FATE_ASSET_SLOTS[name];if(slot?.src){let atlas=fateAtlasCache.get(slot.src);if(!atlas){atlas=new Image();atlas.src=slot.src;fateAtlasCache.set(slot.src,atlas);}if(atlas.complete&&atlas.naturalWidth){const frames=slot.sequence||[0],duration=slot.duration||1,position=Math.max(0,age)/duration,frame=Math.min(frames.length-1,Math.floor((slot.loop?position%1:Math.min(1,position))*frames.length)),f=frames[frame],columns=slot.columns||4,rows=slot.rows||4,cw=atlas.naturalWidth/columns,ch=atlas.naturalHeight/rows;const rect=slot.frameRects?.[f]||[(f%columns)*cw,Math.floor(f/columns)*ch,cw,ch];if(typeof drawCosmeticSprite==='function'&&!name.startsWith('krishna_'))drawCosmeticSprite(p,atlas,...rect,x,y,w,h);else ctx.drawImage(atlas,...rect,x,y,w,h);return true;}}
 const sheet=p.id<4?sprites:extraSprites;if(sheet.complete&&sheet.naturalWidth){const cell=sheet.naturalWidth/4;if(typeof drawCosmeticSprite==='function')drawCosmeticSprite(p,sheet,0,p.id%4*cell,cell,cell,x,y,w,h);else ctx.drawImage(sheet,0,p.id%4*cell,cell,cell,x,y,w,h);}return false;}
function productionReset(){if(typeof rb!=='undefined'&&rb.active&&rb.executing)return;voices.stop();if(typeof resetFateFilms==='function')resetFateFilms();if(typeof resetRoundPresentation==='function')resetRoundPresentation();productionScenes.clear();presentationSeen.clear();voices.cooldowns.clear();voices.seen.clear();document.body.classList.remove('fate-death-scene');}
