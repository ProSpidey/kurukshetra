// Generated from shipped combat modules; no eval or client code execution.
export function referee(heroes,seed,counters,snapshot,pairs=[],quivers=null){
const Math=Object.create(globalThis.Math),nodes=new Map();function node(){return {style:{},classList:{add(){},remove(){},toggle(){}},textContent:'',dataset:{},addEventListener(){},setAttribute(){},querySelectorAll(){return []},querySelector(){return node()},appendChild(){},append(){},close(){},getContext(){return new Proxy({createLinearGradient(){return {addColorStop(){}}}}, {get(t,k){return t[k]||(()=>{})}})},scrollIntoView(){},getBoundingClientRect(){return {left:0,top:0,width:1400,height:680}}};}
const document={body:node(),createElement:node,querySelector:node,getElementById(id){if(['ultimateHUD','skyStatus'].includes(id))return null;if(!nodes.has(id))nodes.set(id,node());return nodes.get(id)},addEventListener(){}};
const window={addEventListener(){},scrollTo(){}},location={hostname:'referee'},localStorage={getItem(){return null},setItem(){}},sessionStorage={setItem(){},removeItem(){}},requestAnimationFrame=()=>{},Image=class{constructor(){this.complete=true;this.naturalWidth=1024;this.naturalHeight=1024;}};

// arsenal
'use strict';
// Exclusive character loadouts. Named variants and combat effects are fictional game adaptations.
const ASTRAS={
  "gandiva_gale": {
    "name": "Gandiva Gale",
    "element": "wind",
    "damage": 22,
    "uses": 3,
    "radius": 80,
    "speed": 1.13,
    "color": "#9ef5ee",
    "weather": 0,
    "tier": 0,
    "cost": 0,
    "description": "Fast flight; preview includes the speed boost."
  },
  "indra_storm": {
    "name": "Aindrastra",
    "element": "thunder",
    "damage": 13,
    "uses": 2,
    "radius": 65,
    "speed": 1,
    "color": "#a8d9ff",
    "weather": 2,
    "tier": 1,
    "cost": 20,
    "description": "Three-arrow attack. Lightning impact pierces shields.",
    "volley": 3
  },
  "pashupata": {
    "name": "Pashupata Radiance",
    "element": "cosmic",
    "damage": 62,
    "uses": 1,
    "radius": 160,
    "speed": 1,
    "color": "#e1c1ff",
    "weather": 0,
    "tier": 2,
    "cost": 65,
    "description": "Wide celestial impact burst."
  },
  "solar_shaft": {
    "name": "Surya Shaft",
    "element": "solar",
    "damage": 25,
    "uses": 3,
    "radius": 85,
    "speed": 1,
    "color": "#ffcc76",
    "weather": 1,
    "tier": 0,
    "cost": 0,
    "description": "Pierces most shield protection."
  },
  "naga": {
    "name": "Nagastra",
    "element": "venom",
    "damage": 29,
    "uses": 2,
    "radius": 90,
    "speed": 1,
    "color": "#b6f488",
    "weather": 0,
    "tier": 1,
    "cost": 20,
    "description": "Applies three seconds of venom."
  },
  "shakti": {
    "name": "Vasavi Shakti",
    "element": "solar",
    "damage": 66,
    "uses": 1,
    "radius": 135,
    "speed": 1.03,
    "color": "#fff2be",
    "weather": 1,
    "tier": 2,
    "cost": 65,
    "description": "Pierces most shield protection."
  },
  "ganga": {
    "name": "Ganga\u2019s Guard",
    "element": "water",
    "damage": 22,
    "uses": 3,
    "radius": 100,
    "speed": 1,
    "color": "#beeaff",
    "weather": 2,
    "tier": 0,
    "cost": 0,
    "description": "Extinguishes nearby fire and grants a brief guard."
  },
  "kuru_storm": {
    "name": "Kuru Thunder",
    "element": "thunder",
    "damage": 31,
    "uses": 2,
    "radius": 115,
    "speed": 1,
    "color": "#d1c7ff",
    "weather": 2,
    "tier": 1,
    "cost": 20,
    "description": "Lightning impact pierces shields."
  },
  "prabhasa": {
    "name": "Prabhasa Radiance",
    "element": "cosmic",
    "damage": 57,
    "uses": 1,
    "radius": 165,
    "speed": 0.98,
    "color": "#ede6ff",
    "weather": 0,
    "tier": 2,
    "cost": 65,
    "description": "Wide celestial impact burst."
  },
  "agni": {
    "name": "Agneya",
    "element": "fire",
    "damage": 24,
    "uses": 3,
    "radius": 100,
    "speed": 1,
    "color": "#ffad65",
    "weather": 3,
    "tier": 0,
    "cost": 0,
    "description": "Leaves burning ground for three seconds."
  },
  "brahma": {
    "name": "Brahmastra",
    "element": "cosmic",
    "damage": 36,
    "uses": 2,
    "radius": 135,
    "speed": 1,
    "color": "#fac9ff",
    "weather": 0,
    "tier": 1,
    "cost": 20,
    "description": "Wide celestial impact burst."
  },
  "acharya": {
    "name": "Acharya\u2019s Judgment",
    "element": "thunder",
    "damage": 20,
    "uses": 1,
    "radius": 80,
    "speed": 1.05,
    "color": "#dec9ff",
    "weather": 2,
    "tier": 2,
    "cost": 65,
    "description": "Three-arrow attack. Lightning impact pierces shields.",
    "volley": 3
  },
  "chakra": {
    "name": "Chakra Volley",
    "element": "wind",
    "damage": 10,
    "uses": 3,
    "radius": 45,
    "speed": 1.06,
    "color": "#abedbe",
    "weather": 0,
    "tier": 0,
    "cost": 0,
    "description": "Three-arrow attack. Fast flight; preview includes the speed boost.",
    "volley": 3
  },
  "raudh": {
    "name": "Raudra Rush",
    "element": "fire",
    "damage": 29,
    "uses": 2,
    "radius": 100,
    "speed": 1.08,
    "color": "#ffb17a",
    "weather": 3,
    "tier": 1,
    "cost": 20,
    "description": "Leaves burning ground for three seconds."
  },
  "saubhadra": {
    "name": "Saubhadra Tempest",
    "element": "thunder",
    "damage": 19,
    "uses": 1,
    "radius": 75,
    "speed": 1.06,
    "color": "#c5fff1",
    "weather": 2,
    "tier": 2,
    "cost": 65,
    "description": "Three-arrow attack. Lightning impact pierces shields.",
    "volley": 3
  },
  "raudra": {
    "name": "Raudra Ember",
    "element": "fire",
    "damage": 26,
    "uses": 3,
    "radius": 105,
    "speed": 0.98,
    "color": "#ee879d",
    "weather": 3,
    "tier": 0,
    "cost": 0,
    "description": "Leaves burning ground for three seconds."
  },
  "narayana": {
    "name": "Narayana Burst",
    "element": "solar",
    "damage": 38,
    "uses": 2,
    "radius": 130,
    "speed": 1,
    "color": "#f6d596",
    "weather": 1,
    "tier": 1,
    "cost": 20,
    "description": "Pierces most shield protection."
  },
  "brahmashira": {
    "name": "Brahmashira",
    "element": "cosmic",
    "damage": 65,
    "uses": 1,
    "radius": 170,
    "speed": 0.96,
    "color": "#f2a9f9",
    "weather": 0,
    "tier": 2,
    "cost": 65,
    "description": "Wide celestial impact burst."
  },
  "vrishni": {
    "name": "Vrishni Wind",
    "element": "wind",
    "damage": 23,
    "uses": 3,
    "radius": 85,
    "speed": 1.18,
    "color": "#8ce8ca",
    "weather": 0,
    "tier": 0,
    "cost": 0,
    "description": "Fast flight; preview includes the speed boost."
  },
  "satyaki_tide": {
    "name": "Varuna\u2019s Tide",
    "element": "water",
    "damage": 30,
    "uses": 2,
    "radius": 125,
    "speed": 1,
    "color": "#7ce7f5",
    "weather": 2,
    "tier": 1,
    "cost": 20,
    "description": "Extinguishes nearby fire and grants a brief guard."
  },
  "yuyudhana": {
    "name": "Yuyudhana Storm",
    "element": "thunder",
    "damage": 21,
    "uses": 1,
    "radius": 80,
    "speed": 1,
    "color": "#a8fbe5",
    "weather": 2,
    "tier": 2,
    "cost": 65,
    "description": "Three-arrow attack. Lightning impact pierces shields.",
    "volley": 3
  },
  "forest_fang": {
    "name": "Forest Fang",
    "element": "venom",
    "damage": 21,
    "uses": 3,
    "radius": 80,
    "speed": 1.03,
    "color": "#c9e591",
    "weather": 0,
    "tier": 0,
    "cost": 0,
    "description": "Applies three seconds of venom."
  },
  "nishada": {
    "name": "Nishada Flame",
    "element": "fire",
    "damage": 30,
    "uses": 2,
    "radius": 115,
    "speed": 1,
    "color": "#eab66e",
    "weather": 3,
    "tier": 1,
    "cost": 20,
    "description": "Leaves burning ground for three seconds."
  },
  "aranya": {
    "name": "Aranya Cyclone",
    "element": "wind",
    "damage": 20,
    "uses": 1,
    "radius": 80,
    "speed": 1.15,
    "color": "#e4f9b5",
    "weather": 0,
    "tier": 2,
    "cost": 65,
    "description": "Three-arrow attack. Fast flight; preview includes the speed boost.",
    "volley": 3
  }
};
const LOADOUTS=[["gandiva_gale", "indra_storm", "pashupata"], ["solar_shaft", "naga", "shakti"], ["ganga", "kuru_storm", "prabhasa"], ["agni", "brahma", "acharya"], ["chakra", "raudh", "saubhadra"], ["raudra", "narayana", "brahmashira"], ["vrishni", "satyaki_tide", "yuyudhana"], ["forest_fang", "nishada", "aranya"]];
const NEW_WARRIORS=[
{name:'Abhimanyu',weapon:'Prince’s bow',title:'The fearless prince',hp:100,damage:17,speed:1.1,cooldown:.62,color:'#89d8a3',role:'AGILITY & VOLLEYS',desc:'Quick releases and a three-arrow lightning volley. Keep pressure on your rival.',tag:'Indra Volley · Vayavya · Agneya'},
{name:'Ashwatthama',weapon:'Acharya’s legacy',title:'The relentless warrior',hp:120,damage:22,speed:1,cooldown:1.05,color:'#e69ac1',role:'CELESTIAL DESTRUCTION',desc:'Devastating limited-use Astras, balanced by a slower bow recovery.',tag:'Brahmashira · Narayana · Agneya'},
{name:'Satyaki',weapon:'Vrishni bow',title:'The steadfast ally',hp:110,damage:19,speed:1.08,cooldown:.8,color:'#76dccf',role:'VERSATILE & STEADY',desc:'Switch between lightning volleys, water protection, and swift wind arrows.',tag:'Indra Volley · Varuna · Vayavya'},
{name:'Ekalavya',weapon:'Forest bow',title:'The devoted archer',hp:105,damage:20,speed:1.05,cooldown:.76,color:'#cbce85',role:'PRECISION & VENOM',desc:'Serpent venom and burning ground reward well-placed shots.',tag:'Naga · Agneya · Vayavya'}
];


// lore
'use strict';
// Episode sources are linked in the guide. Timings, meters and targeting rules are game adaptations.
let ruleSet='arcade',episode='duel',clouds=[],wetZones=[],narayana=null,rescueSpent=[false,false],trialCompleted=false;
const rescueArt=new Image();rescueArt.src='krishna-rescue.png';
const LORE_SPELLS={
 lore_agni:{name:'Agneya',element:'fire',damage:25,uses:4,radius:105,speed:1,color:'#ff9b58',weather:3,tier:0,cost:0,description:'Ignites the ground. Varuna extinguishes the fire.'},
 lore_varuna:{name:'Varunastra',element:'water',damage:20,uses:4,radius:130,speed:1,color:'#8bdcff',weather:2,tier:0,cost:0,description:'Counters fire, leaves rain and obscuring steam. Wind clears the clouds.'},
 lore_vayu:{name:'Vayavyastra',element:'wind',damage:21,uses:4,radius:120,speed:1.1,color:'#c1f4d9',weather:0,tier:0,cost:0,description:'Disperses rain and steam. Counters Varuna in flight.'},
 lore_aindra:{name:'Aindra Barrage',element:'thunder',damage:9,uses:2,radius:55,speed:1,color:'#b3d9ff',weather:2,tier:1,cost:20,volley:5,description:'Five celestial arrows. Karna’s Bhargava barrage can sweep them away.'},
 lore_bhargava:{name:'Bhargava Barrage',element:'solar',damage:11,uses:2,radius:60,speed:1,color:'#ffcf91',weather:1,tier:1,cost:20,volley:4,description:'Four counter-arrows. A clash with Aindra clears nearby Aindra projectiles.'},
 lore_brahma:{name:'Brahmastra',element:'cosmic',damage:58,uses:1,radius:150,speed:1,color:'#d9c1ff',weather:0,tier:2,cost:65,description:'Late-round celestial burst. Pashupata is excluded from this human duel.'},
 lore_naga:{name:'Ashvasena’s Arrow',element:'venom',damage:60,uses:1,radius:70,speed:1,color:'#c0f696',weather:0,tier:2,cost:65,description:'Serpent-arrow episode. Arjuna can time Krishna’s one-use rescue.'},
 lore_narayana:{name:'Narayanastra',element:'solar',damage:0,uses:1,radius:0,speed:1,color:'#fff2ac',weather:1,tier:2,cost:65,description:'Skyborne weapons grow stronger against resistance. Defender: lower your bow and dismount.'}
};
Object.assign(ASTRAS,LORE_SPELLS);
function currentLoadout(id){if(ruleSet==='arcade')return LOADOUTS[id];if(id===0)return ['lore_agni','lore_varuna','lore_vayu','lore_aindra','lore_brahma'];if(id===1)return ['lore_varuna','lore_bhargava','lore_brahma','lore_naga'];return ['lore_agni','lore_narayana']}
function resetLore(){trialCompleted=false;clouds=[];wetZones=[];narayana=null;players.forEach(p=>Object.assign(p,{equipment:{bow:0,wheel:0,banner:0},equipmentRecovery:{bow:0,wheel:0,banner:0},repair:0,moveGoal:p.x,moveCool:0,rescue:0,rescueDodge:false,dismounted:false,dismountTime:0}));$('episodeNote').textContent=ruleSet==='arcade'?'ARCADE · Eight warriors, fictional exclusive loadouts.':episode==='duel'?'LORE ENCOUNTER · Arjuna vs Karna — fire, water, wind and celestial barrages.':'LORE ENCOUNTER · Narayanastra — at 45 seconds, watch for the dismount warning.';}
function blockedAction(i){let p=players[i];return countdownLocked()||(typeof fateFilmHolding==='function'&&fateFilmHolding())|| p.hp<=0||!!ultimate||!!impactCutscene||(p.dismounted&&!(typeof fateOnFoot==='function'&&fateOnFoot(i)))||(typeof fateAttack==='function'&&!fateAttack(i))||p.repair>0||p.equipment.bow>0||(narayana&&narayana.owner===i)}
// Physical arrow contacts, in mirrored warrior-local coordinates. No target selection.
const HIT_BALANCE={damage:{head:1.35,body:1,low:.6},equipment:{bow:2,wheel:2.5,banner:5},recovery:3};
function arrowContact(a,i){
 const p=players[i],sign=i?-1:1,lowered=p.fate?.chariot==='LOWERED'?22:p.rescue>0?Math.sin((.95-p.rescue)/.95*Math.PI)*22:0;
 const shift=(p.dismounted?65:0)+lowered,x0=(a.px-p.x)*sign,y0=a.py-p.y,x1=(a.x-p.x)*sign,y1=a.y-p.y;
 const zones=[{zone:'head',x:-18,y:-108+shift,w:36,h:37},{zone:'body',x:-23,y:-71+shift,w:46,h:43},{zone:'low',x:-24,y:-28+shift,w:48,h:51}];
 if(fateRanged(i))zones.push({zone:'bow',equipment:true,x:p.charging||p.release>0?34:26,y:-68+shift,w:typeof bowOpen==='function'&&bowOpen(i)?17:9,h:29});
 if(!p.dismounted&&p.fate?.chariot!=='DESTROYED')zones.push({zone:'wheel',equipment:true,x:46,y:67+lowered,r:30},{zone:'banner',equipment:true,x:23,y:-98+lowered,w:18,h:16});
 if(p.quiver&&!p.dismounted&&p.fate?.chariot!=='DESTROYED')zones.push({zone:'chariot',equipment:true,x:-42,y:24+lowered,w:68,h:24},{zone:'harness',equipment:true,x:94,y:8+lowered,w:24,h:10},{zone:'quiver',equipment:true,x:-34,y:-72+shift,w:10,h:28});
 let best=null;
 for(const z of zones){let t;
  if(z.r){const dx=x1-x0,dy=y1-y0,ox=x0-z.x,oy=y0-z.y,A=dx*dx+dy*dy,B=2*(ox*dx+oy*dy),C=ox*ox+oy*oy-z.r*z.r,D=B*B-4*A*C;t=C<=0?0:A>0&&D>=0?(-B-Math.sqrt(D))/(2*A):Infinity;if(t<0||t>1)continue;}
  else{let lo=0,hi=1;for(const [origin,delta,min,max]of [[x0,x1-x0,z.x,z.x+z.w],[y0,y1-y0,z.y,z.y+z.h]]){if(Math.abs(delta)<1e-9){if(origin<min||origin>max){hi=-1;break;}}else{const u=(min-origin)/delta,v=(max-origin)/delta;lo=Math.max(lo,Math.min(u,v));hi=Math.min(hi,Math.max(u,v));}}if(lo>hi)continue;t=lo;}
  if(Number.isFinite(t)&&(!best||t<best.t))best={zone:z.zone,equipment:!!z.equipment,t,x:a.px+(a.x-a.px)*t,y:a.py+(a.y-a.py)*t};
 }
 return best;
}
function equipmentHit(i,part,owner,source={}){
 const p=players[i],duration=HIT_BALANCE.equipment[part];if(!duration||p.equipment[part]>0||(p.equipmentRecovery?.[part]||0)>0)return false;
 p.equipmentRecovery??={bow:0,wheel:0,banner:0};p.equipment[part]=duration;p.equipmentRecovery[part]=duration+HIT_BALANCE.recovery;
 if(part==='bow'){hurt(i,typeof STAMINA_BALANCE!=='undefined'?STAMINA_BALANCE.bowDamage:6,owner,false,{...source,equipment:true,hitZone:'bowstring'});stopCharge(i);p.armed=false;p.tacticArmed=false;pendingShots=pendingShots.filter(q=>q.arrow.owner!==i);}
 if(part==='wheel'){p.moveGoal=p.x;p.knockVelocity=0;}
 if(typeof fateController!=='undefined')fateController.command(i,'equipment_'+part,fateController.state.units[i].id,players);
 announce(p.name+' · '+{bow:'BOWSTRING DAMAGED · 2s — repair or wait',wheel:'WHEEL JAMMED · 2.5s',banner:'STANDARD DAMAGED · Resolve gain reduced'}[part],2);
 players[owner].resolve=Math.min(100,players[owner].resolve+4);return true;
}
function repairEquipment(i){if(onlineAction('repair',i,{}))return;let p=players[i];if(ultimate||impactCutscene||atHome||paused||ended||p.repair>0||p.dismounted||!Object.values(p.equipment).some(v=>v>0))return;p.repair=1.2;p.armed=false;p.tacticArmed=false;keyboardDraw.delete(i);for(let [id,d]of drags)if(d.i===i)drags.delete(id);announce(p.name+' repairs equipment',1.3)}
function moveChariot(i,toward,delayed=false){if(!delayed&&onlineAction('move',i,{toward}))return;let p=players[i];if(countdownLocked()||fateFilmHolding()||ultimate||impactCutscene||atHome||paused||ended||p.hp<=0||!fateAttack(i)||p.moveCool>0||(p.equipment.wheel>0&&!fateOnFoot(i))||(p.dismounted&&!(typeof fateOnFoot==='function'&&fateOnFoot(i)))||p.repair>0)return;if((p.equipment.wheel>0&&!fateOnFoot(i))||(typeof astraLocked==='function'&&astraLocked(i)))return;if(!delayed&&bowDelayMove(i,toward))return;let dir=(i?-1:1)*(toward?1:-1);const foot=typeof fateOnFoot==='function'&&fateOnFoot(i),m=typeof fateMod==='function'?fateMod(i).movement:1;const b=FATE_BALANCE.abhimanyu,goal=p.x+dir*(foot?b.step:65*m);p.moveGoal=Math.max(foot?(i?players[0].x+b.separation:140):i?1040:140,Math.min(foot?(i?1260:players[1].x-b.separation):i?1260:360,goal));p.moveCool=foot?b.moveCooldown:1.5/m;started=true}
function triggerRescue(i){if(onlineAction('rescue',i,{}))return;let p=players[i];if(ultimate||impactCutscene||atHome||paused||ended||p.id!==0||rescueSpent[i]||p.rescue>0||!incomingSerpent(i))return false;rescueSpent[i]=true;if(typeof fateController!=='undefined')fateController.state.consumed[`${i}:krishna`]=true;p.rescue=.95;p.rescueDodge=false;p.armed=false;keyboardDraw.delete(i);for(let[id,d]of drags)if(d.i===i)drags.delete(id);announce('KRISHNA LOWERS THE CHARIOT · time slows',2);sfx('guard');return true}
function incomingSerpent(i){let p=players[i];return arrows.some(a=>a.alive&&a.owner!==i&&a.special&&a.element==='venom'&&Math.abs(a.x-p.x)<420&&((i===0&&a.vx<0)||(i===1&&a.vx>0)))}
function lowerArms(i){let p=players[i];if(ultimate||impactCutscene||atHome||paused||ended||!narayana||narayana.owner===i)return;p.dismounted=!p.dismounted;p.dismountTime=p.dismounted?.4:0;p.armed=false;p.tacticArmed=false;keyboardDraw.delete(i);for(let[id,d]of drags)if(d.i===i)drags.delete(id);pendingShots=pendingShots.filter(q=>q.arrow.owner!==i);refresh()}
function invokeNarayana(i){if(narayana)return false;let p=players[i];if(typeof staminaSpend==='function'){if(staminaValue(p)<65)return false;staminaSpend(i,65);}p.ammo[p.selected]--;p.resolve-=65;p.armed=false;p.focus=0;p.cool=1;shots[i]++;started=true;const callout=typeof ultimateCallout==='function'?ultimateCallout(i,p.selected):0;narayana={owner:i,age:-callout,duration:7,tick:0,anger:0};weather={type:1,time:7+callout};announce('NARAYANASTRA — LOWER YOUR BOW & DISMOUNT',7);sfx('invoke',1);buildArsenal();refresh();return true}
function elementalCounter(a,b){if(!a.special||!b.special)return false;let water=a.element==='water'&&b.element==='fire'?a:b.element==='water'&&a.element==='fire'?b:null;let wind=a.element==='wind'&&b.element==='water'?a:b.element==='wind'&&a.element==='water'?b:null;let bhargava=a.spell==='lore_bhargava'&&b.spell==='lore_aindra'?a:b.spell==='lore_bhargava'&&a.spell==='lore_aindra'?b:null;let winner=water||wind||bhargava;if(!winner)return false;if(typeof fateController!=='undefined')fateController.event(winner.owner,'AstraCounter');let x=(a.x+b.x)/2,y=(a.y+b.y)/2;players[winner.owner].resolve=Math.min(100,players[winner.owner].resolve+10);explode(x,y,winner.color,false);if(water){fires=fires.filter(f=>Math.abs(f.x-x)>250);clouds.push({x,life:5});wetZones.push({x,life:5});announce('VARUNA QUENCHES FIRE · +10 RESOLVE',2)}if(wind){clouds=[];wetZones=[];weather.time=0;announce('VAYAVYA DISPERSES THE CLOUDS · +10 RESOLVE',2)}if(bhargava){arrows.forEach(s=>{if(s.owner!==winner.owner&&s.spell==='lore_aindra'&&Math.abs(s.x-x)<250){s.alive=false;explode(s.x,s.y,s.color,false)}});announce('BHARGAVA BREAKS THE AINDRA BARRAGE',2)}return true}
function elementalImpact(a,x){if(a.element==='water'){wetZones.push({x,life:5});clouds.push({x,life:5});let extinguished=fires.some(f=>Math.abs(f.x-x)<250);fires=fires.filter(f=>Math.abs(f.x-x)>=250);if(extinguished){players[a.owner].resolve=Math.min(100,players[a.owner].resolve+6);announce('FIRE EXTINGUISHED · +6 RESOLVE',1.5)}}if(a.element==='wind'&&clouds.length){clouds=[];wetZones=[];weather.time=0;players[a.owner].resolve=Math.min(100,players[a.owner].resolve+6);announce('CLOUDS DISPERSED · +6 RESOLVE',1.5)}if(a.element==='fire'&&wetZones.some(z=>Math.abs(z.x-x)<200))fires=fires.filter(f=>Math.abs(f.x-x)>100)}
function updateLore(dt){clouds.forEach(c=>c.life-=dt);clouds=clouds.filter(c=>c.life>0);wetZones.forEach(c=>c.life-=dt);wetZones=wetZones.filter(c=>c.life>0);players.forEach((p,i)=>{p.moveCool=Math.max(0,p.moveCool-dt);let oldX=p.x,delta=p.moveGoal-p.x;advanceChariot(p,i,dt);updateChariotMotion(p,i,dt);if(fateOnFoot(i)){const b=FATE_BALANCE.abhimanyu,limit=players[1-i].x+(i?b.separation:-b.separation);p.x=i?Math.max(p.x,limit):Math.min(p.x,limit);p.moveGoal=i?Math.max(p.moveGoal,limit):Math.min(p.moveGoal,limit);}if(typeof astraMotion==='function')astraMotion(i,oldX,dt);if(typeof formationMotion==='function')formationMotion(i,oldX);let distance=p.x-oldX;p.moving=Math.abs(distance)>.001;if(!p.moving)p.moveVelocity=0;p.gait+=Math.abs(distance)*.09;p.wheelRotation+=distance/32;for(const k in p.equipmentRecovery)p.equipmentRecovery[k]=Math.max(0,p.equipmentRecovery[k]-dt);for(let k in p.equipment)p.equipment[k]=Math.max(0,p.equipment[k]-dt);if(p.repair>0){p.repair-=dt;if(p.repair<=0){for(let k in p.equipment)p.equipment[k]=0;announce(p.name+' · equipment restored',1)}}p.rescue=Math.max(0,p.rescue-dt);p.dismountTime=Math.max(0,p.dismountTime-dt)});
if(narayana){let n=narayana;n.age+=dt;let defender=1-n.owner,p=players[defender];if(mode==='ai'&&defender===1&&n.age>1.2&&!p.dismounted)lowerArms(1);if(n.age>2){n.tick+=dt;if(n.tick>=.55){n.tick=0;if(!p.dismounted||p.dismountTime>0){hurt(defender,5+n.anger*2,n.owner,true);explode(p.x,p.y-20,'#ffe6a0',false)}}}if(n.age>=n.duration){let safe=p.dismounted;trialCompleted=true;players.forEach(p=>p.dismounted=false);announce(safe?'NARAYANASTRA PACIFIED':'THE CELESTIAL STORM SUBSIDES',2);narayana=null}}
if(mode==='ai'){let p=players[1];if(p.id===0&&incomingSerpent(1)&&!rescueSpent[1])triggerRescue(1);if(p.equipment.bow>0&&!p.repair)repairEquipment(1);if(!fateMeleeProfile(1)&&p.moveCool<=0&&arrows.some(a=>a.owner===0&&a.x>850))moveChariot(1,Math.random()>.5);if(ruleSet==='lore'&&episode==='narayana'&&!trialCompleted&&elapsed>=45)p.resolve=Math.max(65,p.resolve);if(ruleSet==='lore'&&episode==='narayana'&&!narayana&&p.ammo.lore_narayana&&elapsed>=45&&p.resolve>=65&&!blockedAction(1)){p.selected='lore_narayana';shoot(1,true)}}}
function refreshLore(){players.forEach((p,i)=>{let ai=mode==='ai'&&i===1,disabled=atHome||paused||ended||ai;$('equipment'+i).textContent=Object.entries(p.equipment).filter(([k,v])=>v>0).map(([k,v])=>k.toUpperCase()+' '+v.toFixed(1)+'s').join(' · ')||(fateMeleeProfile(i)?'BOW DESTROYED · '+fateController.state.units[i].data.weapon:'EQUIPMENT INTACT');$('repair'+i).textContent=p.repair>0?'Repairing…':'Repair';$('repair'+i).disabled=disabled||p.repair>0||!Object.values(p.equipment).some(v=>v>0);$('advance'+i).disabled=$('retreat'+i).disabled=disabled||p.hp<=0||!fateAttack(i)||p.moveCool>0||(p.equipment.wheel>0&&!fateOnFoot(i))||(p.dismounted&&!(typeof fateOnFoot==='function'&&fateOnFoot(i)));$('rescue'+i).hidden=p.id!==0;$('rescue'+i).disabled=disabled||rescueSpent[i]||!incomingSerpent(i);$('rescue'+i).textContent=rescueSpent[i]?'Krishna · used':'Krishna’s rescue';$('dismount'+i).hidden=!narayana||narayana.owner===i;$('dismount'+i).disabled=disabled;$('dismount'+i).textContent=p.dismounted?'Remount (unsafe)':'Lower bow & dismount';if(blockedAction(i)||!fateRanged(i)){$('special'+i).disabled=true;$('tactic'+i).disabled=true}});$('threat').classList.toggle('hidden',!narayana);if(narayana)$('threat').textContent='NARAYANASTRA · '+Math.ceil(narayana.duration-narayana.age)+'s · Stop attacking. Use LOWER BOW & DISMOUNT.'}
function drawLore(){ctx.save();for(let z of wetZones){ctx.globalAlpha=.22;ellipse(z.x,GROUND+7,150,10,'#82c9f3')}for(let c of clouds){ctx.globalAlpha=Math.min(.27,c.life*.08);for(let j=0;j<6;j++)ellipse(c.x+(j-2.5)*45,385+Math.sin(visualTime+j)*10,65,43,'#c5d3db')}ctx.globalAlpha=1;for(let i=0;i<2;i++){let p=players[i];if(p.rescueDodge&&p.rescue>0){ctx.fillStyle='#f5ce79';ctx.font='20px serif';ctx.fillText('♛',p.x+45,p.y-150-(1-p.rescue)*60)}}if(narayana){let p=players[1-narayana.owner];ctx.globalAlpha=.25;ctx.fillStyle='#cda658';ctx.fillRect(0,0,W,H);ctx.globalAlpha=1;for(let j=0;j<24;j++){let x=(j*71+visualTime*25)%W,y=120+Math.sin(j)*40;if(!options.reduced)y+=(visualTime*80+j*17)%160;line(x,y,x+10,y+25,'#fff0b7',2)}ctx.strokeStyle='#ffe5a1';ctx.lineWidth=3;ctx.beginPath();ctx.arc(p.x,p.y,90,0,Math.PI*2);ctx.stroke()}ctx.restore()}
function launchLore(which){ruleSet='lore';episode=which;chosen=which==='duel'?[0,1]:[0,5];rescueSpent=[false,false];enterGame('ai')}
function initLore(){$('loreDuel').onclick=()=>launchLore('duel');$('loreTrial').onclick=()=>launchLore('narayana');$('arcadeReturn').onclick=()=>{ruleSet='arcade';rescueSpent=[false,false];setMode(mode)};[0,1].forEach(i=>{$('advance'+i).onclick=()=>moveChariot(i,true);$('retreat'+i).onclick=()=>moveChariot(i,false);$('repair'+i).onclick=()=>repairEquipment(i);$('rescue'+i).onclick=()=>triggerRescue(i);$('dismount'+i).onclick=()=>lowerArms(i)})}


// battle-effects
'use strict';
// Balanced, fictional sky-cast and regeneration rules, shared by every player.
const effectAtlas=new Image();effectAtlas.src='elemental-fx.png';
const extraEffectAtlas=new Image();extraEffectAtlas.src='elemental-fx-extra.png';
const horseGaits=new Image();horseGaits.src='horse-gaits.png';
const trotAtlas=new Image();trotAtlas.src='chariot-trot.png';
const FX_ROWS={fire:0,water:1,thunder:2,solar:3,wind:4,venom:5,cosmic:6,dust:7};
const SKY_TYPES={thunder:{name:'Thunderstorm',damage:2.5},solar:{name:'Sun Blaze',damage:2.5},fire:{name:'Ember Rain',damage:2},wind:{name:'Sky Tempest',damage:1.75},water:{name:'Monsoon',damage:1.5},venom:{name:'Venom Mist',damage:1.75},cosmic:{name:'Celestial Rain',damage:2.25}};
let skyHazards=[],spriteEffects=[];
function rechargeSeconds(key){return ASTRAS[key].tier===0?14:ASTRAS[key].tier===1?26:0;}
function resetBattleEffects(){skyHazards=[];spriteEffects=[];players.forEach(p=>{p.recharge=Object.fromEntries(p.loadout.map(k=>[k,0]));p.skyMode=false;p.knockVelocity=0;p.moveVelocity=0;p.gait=0;p.wheelRotation=0;p.moving=false;p.recoilTilt=0;});}
// Sky casting follows the release direction, never a sticky mode or charge state.
function astraSkyDirection(a){return a.angle>=65&&a.angle<=115;}
function effectiveAim(i,a=aims[i],special=players[i].armed){if(typeof bowAim==='function')a=bowAim(i,a);if(typeof astraAim==='function')a=astraAim(i,a);return special&&astraSkyDirection(a)?{...a,power:Math.max(typeof ASTRA_GLOBAL!=='undefined'?ASTRA_GLOBAL.skyPower:.7,a.power)}:a;}
function isSkyShot(i,special){return !!special&&astraSkyDirection(effectiveAim(i,aims[i],special));}
// Retained only to safely ignore legacy replay commands. No control toggles aim.
function toggleSkyAim(i){}
function spawnSpriteEffect(element,x,y,size=130,duration=.65){spriteEffects.push({element,x,y,size,duration,age:0});if(spriteEffects.length>50)spriteEffects.shift();}
function castSky(a){if(typeof astraSky==='function'&&astraSky(a))return;const enemy=skyHazards.find(h=>h.owner!==a.owner);a.alive=false;if(typeof fateCastHit==='function')fateCastHit(a);spawnSpriteEffect(a.element,a.x,130,190,.85);if(enemy){skyHazards=skyHazards.filter(h=>h!==enemy);players[a.owner].resolve=Math.min(100,players[a.owner].resolve+8);weather.time=0;explode(a.x,130,a.color,true);announce(players[a.owner].name+' DISPELS '+SKY_TYPES[enemy.element].name.toUpperCase(),3);return;}
 skyHazards=skyHazards.filter(h=>h.owner!==a.owner);skyHazards.push({owner:a.owner,spell:a.spell,element:a.element,age:0,remaining:10,tick:0,x:players[1-a.owner].x});weather={type:ASTRAS[a.spell].weather,time:10};sfx('invoke',weather.type);announce(SKY_TYPES[a.element].name.toUpperCase()+' · Fire a special arrow into the sky to dispel',4);
}
function knockChariot(i,strength=1){const p=players[i];p.knockVelocity=Math.max(-320,Math.min(320,(p.knockVelocity||0)+(i?1:-1)*170*strength*(typeof fateMod==='function'?fateMod(i).stagger:1)*(p.shield>0?.45:1)));p.recoilTilt=Math.min(.07,.04*strength);spawnSpriteEffect('dust',p.x,GROUND+3,130,.7);}
// Deterministic acceleration and braking; stored on the player for rollback.
function advanceChariot(p,i,dt){
 const foot=fateOnFoot(i),delta=p.moveGoal-p.x;
 const speed=(p.quiver?.harness>0?.75:1)*(foot?FATE_BALANCE.abhimanyu.walkSpeed:p.equipment.wheel>0?0:130)*(typeof fateMod==='function'?fateMod(i).movement:1)*(typeof astraMoveFactor==='function'?astraMoveFactor(i):1);
 if(speed<=0||Math.abs(delta)<.001){p.moveVelocity=0;return;}
 const target=Math.sign(delta)*Math.min(speed,Math.sqrt(2*800*Math.abs(delta)));
 const previous=p.moveVelocity||0,change=target-previous;
 p.moveVelocity=previous+Math.sign(change)*Math.min(Math.abs(change),650*dt);
 const step=(previous+p.moveVelocity)*.5*dt;
 if(Math.sign(step)===Math.sign(delta)&&Math.abs(step)>=Math.abs(delta)){p.x=p.moveGoal;p.moveVelocity=0;}else p.x+=step;
}
function updateChariotMotion(p,i,dt){const old=p.x,delta=p.equipment.wheel>0&&!fateOnFoot(i)?0:p.knockVelocity*dt,foot=typeof fateOnFoot==='function'&&fateOnFoot(i),lo=foot?120:i?1040:120,hi=foot?1280:i?1280:360;p.x=Math.max(lo,Math.min(hi,p.x+delta));p.moveGoal=Math.max(lo,Math.min(hi,p.moveGoal+p.x-old));p.knockVelocity*=Math.exp(-7*dt);if(Math.abs(p.knockVelocity)<.5)p.knockVelocity=0;p.recoilTilt*=Math.exp(-8*dt);}
function updateBattleEffects(dt){let changed=false;
 for(const p of players)for(const key of p.loadout){const seconds=rechargeSeconds(key)*(typeof fateMod==='function'?fateMod(players.indexOf(p),{spell:key}).cooldown:1);if(!seconds||p.ammo[key]>=ASTRAS[key].uses){p.recharge[key]=0;continue;}p.recharge[key]+=dt;while(p.recharge[key]>=seconds&&p.ammo[key]<ASTRAS[key].uses){p.recharge[key]-=seconds;p.ammo[key]++;changed=true;}}
 if(changed)buildArsenal();spriteEffects.forEach(e=>e.age+=dt);spriteEffects=spriteEffects.filter(e=>e.age<e.duration);
 for(const h of skyHazards){h.age+=dt;h.remaining-=dt;if(h.age<1.4)continue;h.tick+=dt;if(h.tick>=1){h.tick-=1;const p=players[1-h.owner];hurt(1-h.owner,SKY_TYPES[h.element].damage,h.owner,false,{spell:h.spell,element:h.element,dot:true});spawnSpriteEffect(h.element,p.x,p.y-25,170,.75);if(h.element==='thunder'){rings.push({x:p.x,y:p.y,color:ASTRAS[players[h.owner].selected].color,life:.35,max:.35,size:60,bolt:true});tone(70,.16);} }}
 skyHazards=skyHazards.filter(h=>h.remaining>0);
 if(mode==='ai'&&skyHazards.some(h=>h.owner===0&&h.age>1.8)&&!arrows.some(a=>a.owner===1&&a.sky)&&!blockedAction(1)&&players[1].cool<=0){const p=players[1],key=p.loadout.find(k=>ASTRAS[k].tier<2&&p.ammo[k]&&!lockReason(p,ASTRAS[k]));if(key){p.selected=key;p.skyMode=true;aims[1]={angle:76,power:.85};shoot(1,true);aiTimer=1.8;}}
}
function drawSpriteEffect(element,x,y,size,age=visualTime,duration=1,loop=false){const index=FX_ROWS[element]??6,atlas=index<4?effectAtlas:extraEffectAtlas;if(!atlas.complete||!atlas.naturalWidth)return;const row=index%4,w=atlas.naturalWidth/4,h=atlas.naturalHeight/4;const phase=loop?(age%duration)/duration:Math.min(.999,age/duration);const col=options.reduced?1:Math.floor(phase*4);ctx.save();ctx.globalAlpha=loop?1:Math.min(1,(1-phase)*3);ctx.drawImage(atlas,col*w,row*h,w,h,x-size/2,y-size/2,size,size);ctx.restore();}
function drawBattleEffects(){for(const h of skyHazards){const x=players[1-h.owner].x;drawSpriteEffect(h.element,x,130,210,h.age,1.2,true);if(!options.reduced&&h.age>1.4){ctx.save();ctx.globalAlpha=.32;for(let n=0;n<5;n++)drawSpriteEffect(h.element,x+(n-2)*32,200+(h.age*100+n*65)%290,62,h.age+n*.2,.8,true);ctx.restore();}}
 for(const f of fires)drawSpriteEffect('fire',f.x,GROUND-26,115,visualTime,1,true);for(const z of wetZones)drawSpriteEffect('water',z.x,GROUND-6,100,visualTime,1.4,true);for(const e of spriteEffects)drawSpriteEffect(e.element,e.x,e.y,e.size,e.age,e.duration);}
function refreshSkyHUD(){const root=document.getElementById('skyStatus');if(!root)return;root.hidden=!skyHazards.length;root.textContent=skyHazards.map(h=>SKY_TYPES[h.element].name+' · '+Math.ceil(h.remaining)+'s · '+players[1-h.owner].name+': AIM ASTRA UPWARD TO DISPEL').join(' | ');}


// ultimate
'use strict';
let battlefieldShattered=false;
let ultimate=null,impactCutscene=null,cutsceneSeen=new Set();
const fractureAtlas=new Image();fractureAtlas.src='ultimate-fracture.png';
const ELEMENT_ICONS={wind:'≋',thunder:'ϟ',cosmic:'✦',solar:'☀',water:'≈',fire:'♨',venom:'〰'};
const RUNES=['☀','☽','✦','◇','ϟ','≋'];
function rageReady(i){const u=typeof fateController!=='undefined'?balanceUnit(i):null;if(u?.phase==='FINAL_STAND'||u?.hero===5&&u.used.mani||u?.hero===1&&u.data.astraLocked&&u.data.ultimateRetained&&!u.data.ultimateSpent)return true;return players[1-i].hp<=players[1-i].maxHp*.35;}
// Release is host-timed from shipped clip metadata, never from client audio completion.
function ultimateCallout(i,key,trigger='UltimateActivation',delay=0){
 const id=typeof DIALOGUE_DATA!=='undefined'?DIALOGUE_DATA.ultimateCalls?.[players[i].id+':'+key]:null;
 const duration=id?DIALOGUE_DATA.entries[id].duration+.2:0;
 if(typeof fateController!=='undefined'&&!(typeof onlineGuest==='function'&&onlineGuest()))fateController.event(i,trigger,{spell:key,...(id?{dialogueIds:[id]}:{}),presentationAt:(typeof presentationNow==='function'?presentationNow():fateController.state.clock)+delay});
 return duration;
}
function beginUltimate(i){const p=players[i];if(lockReason(p,ASTRAS[p.selected])||!p.ammo[p.selected])return false;if(typeof fateController!=='undefined')fateController.launch(i,p.selected);const calloutDuration=ultimateCallout(i,p.selected);const windowBonus=typeof fateMod==='function'?fateMod(1-i,{spell:p.selected}).puzzle:0;ultimate={id:++ultimateSerial,calloutDuration,owner:i,key:p.selected,aim:{...aims[i]},focus:p.focus,time:4+windowBonus,duration:4+windowBonus,response:null,phase:'choose',age:0,progress:0,pattern:[],buttons:[],aiThink:0};cancelAllCharges();drags.clear();keyboardDraw.clear();players.forEach(p=>p.armed=false);started=true;sfx('invoke',ASTRAS[p.selected].weather);refresh();return true;}
let ultimateSerial=0;
function availableCounter(i,key){const p=players[i],a=ASTRAS[key];return (typeof staminaValue!=='function'||staminaValue(p)>=65)&&!balanceUltimateReason(i,true)&&(typeof fateMod!=='function'||(fateMod(i).attack&&fateMod(i).ultimate))&&!!a&&a.tier===2&&p.loadout.includes(key)&&key!=='lore_narayana'&&p.ammo[key]>0&&elapsed>=COMBAT_BALANCE.ultimateUnlock&&p.resolve>=a.cost&&!p.dismounted&&!p.repair&&!p.equipment.bow&&!(narayana&&narayana.owner===i);}
function releaseUncountered(reason){if(!ultimate)return;ultimate.response=null;ultimate.phase='release';ultimate.time=Math.max(.7,(ultimate.calloutDuration||0)-ultimate.age);ultimate.duration=ultimate.time;ultimate.message=reason;refresh();}
// Fisher–Yates consumes exactly five RNG draws on every JavaScript engine.
function shuffleRunes(values){for(let i=values.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[values[i],values[j]]=[values[j],values[i]];}return values;}
function selectCounter(i,key){if(onlineAction('counter',i,{key}))return false;if(!ultimate||ultimate.phase!=='choose'||i===ultimate.owner||paused||atHome||ended)return false;if(key==='skip'){releaseUncountered('NO COUNTER · INCOMING ULTIMATE');return true;}if(!availableCounter(i,key))return false;ultimate.response=key;ultimate.phase='puzzle';ultimate.time=5+(typeof fateMod==='function'?fateMod(i,{spell:ultimate.key}).puzzle:0);ultimate.duration=ultimate.time;ultimate.progress=0;ultimate.pattern=Array.from({length:3},()=>Math.floor(Math.random()*RUNES.length));ultimate.hint=typeof fateController!=='undefined'&&fateController.state.units[i]?.hero===3&&fateController.state.units[i].data.lessons[ultimate.key]>=FATE_BALANCE.drona.mastery;ultimate.buttons=shuffleRunes([0,1,2,3,4,5]);ultimate.aiThink=0;tone(550,.15);refresh();return true;}
function solveRune(i,rune,castId){if(onlineAction('rune',i,{rune,castId}))return false;const u=ultimate;if(!u||u.id!==castId||u.phase!=='puzzle'||i===u.owner||paused||atHome||ended||!Number.isInteger(rune)||rune<0||rune>=RUNES.length)return false;if(rune===u.pattern[u.progress]){u.progress++;tone(450+u.progress*160,.12);if(u.progress===u.pattern.length){u.phase='release';const delay=Math.max(0,(u.calloutDuration||0)-u.age);const callout=ultimateCallout(i,u.response,'UltimateCounter',delay);u.time=Math.max(.85*(typeof fateMod==='function'?fateMod(i,{spell:u.key}).cooldown:1),delay+callout);u.duration=u.time;u.message='RUNES ALIGNED · ULTIMATE COUNTER';sfx('guard');}}else{u.progress=0;tone(130,.12);u.message='Wrong rune · start the sequence again';}refresh();return true;}
function tickUltimate(dt){if(!ultimate||paused||atHome||ended||fateFilmHolding())return;const u=ultimate;u.age+=dt;u.time-=dt;
 if(u.phase==='choose'&&mode==='ai'&&u.owner===0&&u.age>1){const key=players[1].loadout.find(k=>availableCounter(1,k));selectCounter(1,key||'skip');}
 if(u.phase==='puzzle'&&mode==='ai'&&u.owner===0){u.aiThink+=dt;const delay={easy:1.4,normal:1.05,hard:.7}[(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)]||1.05;if(u.aiThink>=delay){u.aiThink=0;const chance={easy:.7,normal:.85,hard:.98}[(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)]||.85;solveRune(1,Math.random()<chance?u.pattern[u.progress]:(u.pattern[u.progress]+1)%6,u.id);}}
 if(u.time<=0){if(u.phase==='choose')releaseUncountered('NO COUNTER · INCOMING ULTIMATE');else if(u.phase==='puzzle')releaseUncountered('TIME EXPIRED · YOUR ULTIMATE IS RETAINED');else finishUltimate();}renderUltimateHUD();}
function finishUltimate(){const u=ultimate;if(!u)return;ultimate=null;const p=players[u.owner],d=players[1-u.owner],spell=ASTRAS[u.key];p.selected=u.key;aims[u.owner]={...u.aim};p.focus=u.focus;
 if(!u.response){const applying=online.applying;online.applying=true;shoot(u.owner,true,true);online.applying=applying;announce(u.message||'ULTIMATE RELEASED',3);}
 else {const counter=ASTRAS[u.response];if(!availableCounter(1-u.owner,u.response)){const applying=online.applying;online.applying=true;shoot(u.owner,true,true);online.applying=applying;}else{balanceSpendUltimate(u.owner);balanceSpendUltimate(1-u.owner);if(typeof staminaSpend==='function'){staminaSpend(u.owner,65);staminaSpend(1-u.owner,65);}p.ammo[u.key]--;p.resolve-=spell.cost;d.ammo[u.response]--;d.resolve-=counter.cost;p.cool=p.cooldown;d.cool=d.cooldown;shots[u.owner]++;shots[1-u.owner]++;const center=(p.x+d.x)/2,cy=230,T=1.15;
 for(const [i,key] of [[u.owner,u.key],[1-u.owner,u.response]]){const q=players[i],a=ASTRAS[key],x=q.x+(i?-32:32),y=q.y-55,castId=i+':'+round+':duel:'+u.id;if(typeof fateLaunch==='function')fateLaunch(i,key,castId,false,i!==u.owner);arrows.push({castId,projectileId:castId,stateVersion:1,at:elapsed,x,y,px:x,py:y,vx:(center-x)/T,vy:(cy-y-.5*G*T*T)/T,owner:i,special:true,spell:key,element:a.element,radius:a.radius,damage:0,color:a.color,trail:[],alive:true,age:0,duel:true,residual:0});q.armed=false;q.focus=0;q.release=.32;}
 weather={type:spell.weather,time:6};announce('ULTIMATE VS ULTIMATE · CELESTIAL CLASH',3);sfx('invoke',counter.weather);buildArsenal();}}
 const execution=arrows.find(a=>a.alive&&a.owner===u.owner&&a.execution);if(execution){execution.alive=false;if(typeof astraSpiritImpact==='function')astraSpiritImpact(execution,d.x,d.y-30,'player');hurt(1-u.owner,d.maxHp,u.owner,true,execution);beginImpactCutscene(execution,1-u.owner);}
 refresh();renderUltimateHUD();}
function ultimateClash(a,b){if(!(a.special&&b.special&&ASTRAS[a.spell]?.tier===2&&ASTRAS[b.spell]?.tier===2))return false;battlefieldShattered=true;impactCutscene={age:0,duration:4.55,target:a.owner,element:a.element,name:'ULTIMATE ASTRA COLLISION'};if(typeof fateController!=='undefined')fateController.event(a.owner,'UltimateCollision');clashBurst(a,b);spawnSpriteEffect('cosmic',(a.x+b.x)/2,(a.y+b.y)/2,310,1);return true;}
function beginImpactCutscene(a,i){const key=a.castId||a.owner+':'+a.spell+':'+shots[a.owner];if(cutsceneSeen.has(key))return;cutsceneSeen.add(key);battlefieldShattered=true;if(typeof fateController!=='undefined')fateController.event(i,'UltimateDirectHit');impactCutscene={age:0,duration:4.55,target:i,element:a.element,name:ASTRAS[a.spell].name};drags.clear();keyboardDraw.clear();sfx('blast');}
function tickImpactCutscene(dt){if(!impactCutscene||paused||atHome)return;impactCutscene.age+=dt;if(impactCutscene.age>=impactCutscene.duration)impactCutscene=null;}
function drawImpactCutscene(){if(!impactCutscene)return;const c=impactCutscene,t=c.age/c.duration,p=players[c.target];ctx.save();ctx.fillStyle='#050b14b8';ctx.fillRect(0,0,W,H);if(!options.reduced)ctx.translate(Math.sin(c.age*43)*(1-t)*8,Math.cos(c.age*37)*(1-t)*5);ctx.save();ctx.translate(W/2,H*.61);ctx.scale(1.6,1.6);ctx.translate(-p.x,-p.y);warrior(p,c.target);ctx.restore();if(fractureAtlas.complete&&fractureAtlas.naturalWidth){const frame=options.reduced?3:Math.min(7,Math.floor(t*8)),w=fractureAtlas.naturalWidth/4,h=fractureAtlas.naturalHeight/2;ctx.globalAlpha=Math.min(1,(1-t)*5);ctx.drawImage(fractureAtlas,frame%4*w,Math.floor(frame/4)*h,w,h,W/2-410,H*.65-330,820,660);ctx.globalAlpha=1;}ctx.fillStyle='#060910';ctx.fillRect(0,0,W,65);ctx.fillRect(0,H-65,W,65);ctx.fillStyle='#f8d795';ctx.textAlign='center';ctx.font='26px Georgia';ctx.fillText('EARTH-SHATTERING IMPACT',W/2,43);ctx.font='18px Georgia';ctx.fillText(c.name.toUpperCase(),W/2,H-27);ctx.restore();}
function drawUltimate(){if(!ultimate)return;const u=ultimate,p=players[u.owner],a=ASTRAS[u.key],t=options.reduced?0:u.age;ctx.save();ctx.fillStyle='#07101b99';ctx.fillRect(0,0,W,H);ctx.globalCompositeOperation='screen';ctx.strokeStyle=a.color;ctx.shadowColor=a.color;ctx.shadowBlur=options.reduced?0:24;for(let n=0;n<3;n++){ctx.lineWidth=3-n*.7;ctx.beginPath();ctx.ellipse(p.x,p.y-30,70+n*25,105+n*25,t*(n%2?-.5:.5),0,Math.PI*2);ctx.stroke();}if(!options.reduced)for(let n=0;n<22;n++){const angle=n*Math.PI*2/22+t*.8,r=100+(Math.sin(t*3+n)+1)*40;ellipse(p.x+Math.cos(angle)*r,p.y-30+Math.sin(angle)*r,2,5,a.color);}ctx.restore();if(typeof drawAstraSpiritUltimate==='function')drawAstraSpiritUltimate(u);}
function renderUltimateHUD(){const root=document.getElementById('ultimateHUD');if(!root)return;root.hidden=!ultimate;if(!ultimate)return;const u=ultimate,defender=1-u.owner,canAct=!(mode==='ai'&&u.owner===0)&&(!online.active||online.seat===defender);root.style.setProperty('--cast-color',ASTRAS[u.key].color);$('ultimateTitle').textContent=players[u.owner].name+' · '+ASTRAS[u.key].name;
 $('ultimatePrompt').textContent=u.phase==='puzzle'?'MATCH THE RUNES IN ORDER · '+Math.max(0,Math.ceil(u.time))+'s':u.phase==='release'?u.message||'ULTIMATE RELEASE':players[defender].name+': only an ultimate can counter · '+Math.max(0,Math.ceil(u.time))+'s';$('ultimateClock').style.transform='scaleX('+Math.max(0,u.time/u.duration)+')';const choices=$('counterChoices'),sig=u.id+':'+u.phase+':'+u.progress+':'+canAct;if(choices.dataset.sig===sig)return;choices.dataset.sig=sig;choices.replaceChildren();
 if(u.phase==='choose'&&canAct){const keys=players[defender].loadout.filter(k=>availableCounter(defender,k));for(const key of keys){const b=document.createElement('button');b.textContent=ELEMENT_ICONS[ASTRAS[key].element]+' '+ASTRAS[key].name;b.onclick=()=>selectCounter(defender,key);choices.append(b);}const b=document.createElement('button');b.textContent=keys.length?'Keep my ultimate':'No ultimate available · continue';b.onclick=()=>selectCounter(defender,'skip');choices.append(b);}
 if(u.phase==='puzzle'){const pattern=document.createElement('div');pattern.className='rune-pattern';pattern.setAttribute('aria-label','Match this rune sequence');u.pattern.forEach((r,j)=>{const s=document.createElement('span');s.textContent=RUNES[r];s.className=j<u.progress?'solved':'';pattern.append(s);});choices.append(pattern);if(canAct){for(const r of u.buttons){const b=document.createElement('button');b.className='rune-button'+(u.hint&&r===u.pattern[u.progress]?' fate-rune-hint':'');b.textContent=RUNES[r];b.setAttribute('aria-label','Rune '+(r+1));b.onclick=()=>solveRune(defender,r,u.id);choices.append(b);}}else{const s=document.createElement('span');s.textContent='Defender is aligning the runes…';choices.append(s);}}
}


// online
'use strict';
const ONLINE_PROTOCOL=51;
const online={active:false,seat:0,code:'',token:'',started:false,applying:false,queue:[],ack:0,busy:false,lastGood:0,peerAge:0,failed:false,revision:-1,frameAge:0,epoch:0,pending:null,timer:null,rtt:160,receivedAge:0,arrowSerial:0,guestAck:null,uiPending:[],hudAge:0,snapshotSerial:0,lastSnapshot:-1};
const ONLINE_API=location.hostname==='appassets.androidplatform.net'?'https://kurukshetra-astra-warfare.spidey245.chatgpt.site':'';
function onlineGuest(){return !(typeof rollbackActive==='function'&&rollbackActive())&&online.started&&online.seat===1;}
function onlineSeat(){return online.active?online.seat:0;}
function onlineAction(action,i,args={}){if(typeof rollbackActive==='function'&&rollbackActive()){if(rb.executing)return false;return rollbackQueue(action,i,args);}if(typeof countdownLocked==='function'&&countdownLocked()&&!['pause','choose'].includes(action))return true;if(!online.active||online.applying)return false;if(i!==online.seat||online.failed)return true;if(online.seat===0)return false;if(online.queue.length>=24||online.uiPending.length>=64){announce('Waiting for connection…',1);return true;}const command={nonce:crypto.randomUUID(),action,args};online.queue.push(command);online.uiPending.push(command);if(['choose','arm','sky'].includes(action)){previewOnlineControl(command);refresh();}if(action==='shoot'){players[i].release=.32;tone(280,.06);}clearTimeout(online.timer);online.timer=setTimeout(exchangeOnline,0);return true;}
// Preview only selection controls. Damage, ammo, hits and puzzle results stay host-authoritative.
function previewOnlineControl(c){const p=players[1];if(c.action==='choose'&&p.loadout.includes(c.args.key)){p.selected=c.args.key;p.armed=false;p.skyMode=false;}else if(c.action==='arm'&&!paused&&!ended&&!blockedAction(1)&&p.ammo[p.selected]&&!lockReason(p,ASTRAS[p.selected])){p.armed=!p.armed;p.tacticArmed=false;}else if(c.action==='sky')p.skyMode=!p.skyMode;}
async function roomAPI(path,body,token=online.token){const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),6000);try{const r=await fetch(ONLINE_API+'/api/'+path,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},body:JSON.stringify({...body,protocol:ONLINE_PROTOCOL,...(['signal','relay'].includes(path)&&typeof service!=='undefined'&&service.connected?{epoch:service.epoch}:{})}),signal:controller.signal,cache:'no-store'});let data;try{data=await r.json();}catch{throw Error('Online access is not enabled yet. The game owner must enable friend access.');}if(!r.ok){const e=Error(data.error||'Connection failed');e.terminal=[400,401,403,409,410].includes(r.status);e.code=data.code;e.status=r.status;throw e;}return data;}finally{clearTimeout(timer);}}
function snapshotOnline(){return {matchIntro,presentationClock:typeof presentationNow==='function'?presentationNow():0,stateSequence:++online.snapshotSerial,fate:typeof fateSnapshot==='function'?fateSnapshot():null,protocol:ONLINE_PROTOCOL,epoch:online.epoch,guestAck:online.guestAck,players,arrows:arrows.map(a=>({...a,netId:a.netId||(a.netId=++online.arrowSerial),trail:a.trail.slice(-6)})),particles:particles.slice(-60),rings,fires,damageTexts,skyHazards,spriteEffects,weather,ultimate,ultimateSerial,cutsceneSeen:[...cutsceneSeen],pendingShots,impactCutscene,battlefieldShattered,narayana,elapsed,round,score,matchOver,started,paused,ended,shots,hits,clashes,aims,rescueSpent,wetZones,clouds,notice:$('banner').textContent,winner:$('winner').textContent,recap:$('recap').textContent};}
function applyOnlineSnapshot(s){if(!s||s.protocol!==ONLINE_PROTOCOL||!Array.isArray(s.players)||s.players.length!==2)return;if(Number.isInteger(s.stateSequence)){if(onlineGuest()&&s.stateSequence<=online.lastSnapshot)return;online.lastSnapshot=s.stateSequence;online.snapshotSerial=Math.max(online.snapshotSerial,s.stateSequence);}const oldShots=shots.slice();const oldIntro=matchIntro.id;matchIntro=s.matchIntro||{id:0,left:-1};if(oldIntro===matchIntro.id&&s.shots?.some((n,i)=>n>oldShots[i]))sfx('bow');const ownCharge={charging:players[1]?.charging,chargeAge:players[1]?.chargeAge,chargeLease:players[1]?.chargeLease,chargeRest:players[1]?.chargeRest,skyFire:players[1]?.skyFire},ownAim={...aims[1]},ownFocus=players[1]?.focus||0,ownDrag=[...drags.values()].some(d=>d.i===1)||keyboardDraw.has(1);const oldArrows=new Map(arrows.filter(a=>a.netId).map(a=>[a.netId,a]));const sameRound=online.epoch===s.epoch;online.applying=true;if(typeof fatePresentation!=='undefined'&&Number.isFinite(s.presentationClock))fatePresentation.clock=s.presentationClock;players=s.players;chargeInputSeq=Math.max(chargeInputSeq,players[1].drawSequence||0);arrows=s.arrows||[];if(onlineGuest()&&sameRound&&!s.paused&&!s.ultimate&&!s.impactCutscene){const age=Math.min(.3,online.receivedAge);for(const a of arrows){if(a.rainDelay>0)continue;a.x+=a.vx*age;a.y+=a.vy*age+.5*G*age*age;a.vy+=G*age;const old=oldArrows.get(a.netId);if(old){a.smoothX=Math.max(-100,Math.min(100,old.x+(old.smoothX||0)-a.x));a.smoothY=Math.max(-100,Math.min(100,old.y+(old.smoothY||0)-a.y));}}}particles=s.particles||[];rings=s.rings||[];fires=s.fires||[];damageTexts=s.damageTexts||[];skyHazards=s.skyHazards||[];spriteEffects=s.spriteEffects||[];weather=s.weather;ultimate=s.ultimate;ultimateSerial=Math.max(ultimateSerial,s.ultimateSerial||0);cutsceneSeen=new Set(s.cutsceneSeen||[]);pendingShots=s.pendingShots||[];impactCutscene=s.impactCutscene||null;battlefieldShattered=!!s.battlefieldShattered;elapsed=s.elapsed;round=s.round;score=s.score;matchOver=s.matchOver;started=s.started;paused=s.paused;ended=s.ended;shots=s.shots;hits=s.hits;clashes=s.clashes;aims=s.aims;if(onlineGuest()&&sameRound){aims[1]=ownAim;if(ownDrag){players[1].focus=ownFocus;Object.assign(players[1],ownCharge);}}if(!sameRound)online.uiPending=[];const acknowledged=online.uiPending.findIndex(c=>c.nonce===s.guestAck);if(acknowledged>=0)online.uiPending.splice(0,acknowledged+1);for(const c of online.uiPending)previewOnlineControl(c);rescueSpent=s.rescueSpent;if(typeof fateRestore==='function')fateRestore(s.fate);wetZones=s.wetZones||[];clouds=s.clouds||[];narayana=s.narayana||null;online.epoch=s.epoch;online.frameAge=0;$('banner').textContent=s.notice||'';$('winner').textContent=s.winner||'';$('recap').textContent=s.recap||'';$('result').classList.toggle('hidden',!ended);$('pause').textContent=paused?'▶ Resume':'Ⅱ Pause';buildArsenal();refresh();online.applying=false;}
function applyGuestCommand(c){const a=c.args||{},i=1;online.applying=true;try{switch(c.action){case 'quiver':if(typeof choosePhysicalArrow==='function')choosePhysicalArrow(i,a.id);break;case 'draw':if(a.epoch===online.epoch&&a.round===round&&Number.isInteger(a.sequence)&&a.sequence>(players[i].drawSequence||0)&&typeof a.active==='boolean'){players[i].drawSequence=a.sequence;setChargeIntent(i,a.active,a);}break;case 'shoot':if(Number.isFinite(a.angle)&&Number.isFinite(a.power)){aims[i]={angle:Math.max(-25,Math.min(155,a.angle)),power:Math.max(.05,Math.min(1,a.power))};shoot(i);stopCharge(i);}break;case 'arm':armAstra(i);break;case 'choose':if(typeof a.key==='string')chooseAstra(i,a.key);break;case 'guard':guard(i);break;case 'tactic':activateTactic(i);break;case 'move':moveChariot(i,!!a.toward);break;case 'repair':repairEquipment(i);break;case 'rescue':triggerRescue(i);break;case 'sky':toggleSkyAim(i);break;case 'counter':if(typeof a.key==='string')selectCounter(i,a.key);break;case 'rune':solveRune(i,a.rune,a.castId);break;case 'fate':if(typeof fateCommand==='function'&&['repair','sacrifice','dodge','melee'].includes(a.op))fateCommand(i,a.op,a.id);break;case 'pause':if(!ended&&typeof a.value==='boolean'&&paused!==a.value)togglePause();break;}}finally{online.guestAck=c.nonce||null;online.applying=false;}}
function beginOnlineMatch(heroes,restore=null){online.lastSnapshot=-1;online.applying=true;ruleSet='arcade';chosen=[heroes[0],heroes[1]];mode='online';score=[0,0];round=1;rescueSpent=[false,false];reset();atHome=false;paused=false;document.body.classList.remove('home');$('homeScreen').classList.add('hidden');document.querySelector('main').classList.remove('hidden');document.querySelector('.battlefield-ui').dataset.playMode='online';document.querySelector('.battlefield-ui').dataset.onlineSeat=String(online.seat);online.started=true;online.epoch++;if(restore)applyOnlineSnapshot(restore);$('onlineLobby').close();$('battleWarriors').disabled=true;$('rematch').disabled=online.seat===1;$('change').disabled=true;online.applying=false;fitBattleCanvas();refresh();announce(online.seat===0?'YOU ARE THE LEFT WARRIOR':'YOU ARE THE RIGHT WARRIOR · Aim anywhere',4);}
async function exchangeOnline(){if(!online.active||online.busy)return;online.busy=true;const requestStarted=Date.now(),code=online.code,token=online.token,batch=online.queue.slice(0,24);try{const data=await roomAPI('exchange',{code,...(online.seat===0?{ack:online.ack,...(online.started?{snapshot:snapshotOnline()}:{})}:{commands:batch})},token);if(!online.active||online.code!==code)return;online.rtt=online.rtt*.7+(Date.now()-requestStarted)*.3;online.receivedAge=Math.min(.3,((data.peerAge||0)+online.rtt*.5)/1000);online.lastGood=Date.now();online.failed=false;online.peerAge=data.peerAge||0;if(online.seat===0){online.ack=Math.max(online.ack,data.ack||0);if(!online.started&&data.guestPresent)beginOnlineMatch(data.heroes,data.snapshot);for(const c of data.commands||[])if(c.id>online.ack){applyGuestCommand(c);online.ack=c.id;}}else{online.queue=online.queue.filter(c=>!batch.some(b=>b.nonce===c.nonce));if(data.snapshot){if(!online.started)beginOnlineMatch(data.heroes);if(data.revision!==online.revision){applyOnlineSnapshot(data.snapshot);online.revision=data.revision;}}}
 if(online.started&&online.peerAge>5000&&online.seat===0&&!paused){online.applying=true;togglePause();online.applying=false;announce('FRIEND DISCONNECTED · Duel paused',5);}renderOnlineStatus();
 }catch(e){if(online.code!==code)return;online.failed=Date.now()-online.lastGood>5000;if(online.failed&&online.seat===0&&online.started&&!paused){online.applying=true;togglePause();online.applying=false;}if(e.terminal){online.failed=true;online.active=false;paused=true;try{sessionStorage.removeItem('astra-room');}catch{}}$('onlineMessage').textContent=e.message;renderOnlineStatus(e.message);}finally{online.busy=false;if(online.active){clearTimeout(online.timer);online.timer=setTimeout(exchangeOnline,online.started?Math.max(0,100-(Date.now()-requestStarted)):800);}}}
function onlineGuestFrame(dt){if(!onlineGuest())return false;
 if(!paused&&!ended&&!online.failed&&online.peerAge<5000){if(matchIntro.left>-.65)matchIntro.left=Math.max(started?-1:.001,matchIntro.left-dt);visualTime+=dt;const limit=Math.min(.8,Math.max(.35,online.rtt/1000*2+.15)),step=Math.min(dt,Math.max(0,limit-online.frameAge));online.frameAge+=dt;
 if(ultimate){ultimate.age+=step;ultimate.time=Math.max(0,ultimate.time-step);renderUltimateHUD();}
 if(!ultimate&&!impactCutscene){for(const a of arrows){if(a.rainDelay>0){a.rainDelay=Math.max(0,a.rainDelay-step);continue;}a.x+=a.vx*step;a.y+=a.vy*step+.5*G*step*step;a.vy+=G*step;a.age+=step;a.smoothX=(a.smoothX||0)*Math.exp(-18*dt);a.smoothY=(a.smoothY||0)*Math.exp(-18*dt);a.trail.push({x:a.x,y:a.y});if(a.trail.length>14)a.trail.shift();}
 for(const p of particles){p.life-=step;p.x+=p.vx*step;p.y+=p.vy*step;p.vy+=90*step;}particles=particles.filter(p=>p.life>0);for(const r of rings)r.life-=step;rings=rings.filter(r=>r.life>0);for(const e of spriteEffects)e.age+=step;spriteEffects=spriteEffects.filter(e=>e.age<e.duration);for(const h of skyHazards){h.age+=step;h.remaining-=step;}for(const t of damageTexts){t.life-=step;t.y-=40*step;}damageTexts=damageTexts.filter(t=>t.life>0);
 players.forEach(p=>{p.release=Math.max(0,p.release-step);p.flash=Math.max(0,p.flash-step);});}
 }
 // Corrections affect drawing only; the host still decides collisions and health.
 for(const a of arrows){a.x+=a.smoothX||0;a.y+=a.smoothY||0;}draw();for(const a of arrows){a.x-=a.smoothX||0;a.y-=a.smoothY||0;}drawUltimate();drawImpactCutscene();return true;}
function renderOnlineStatus(error=''){if(typeof rb!=='undefined'&&rb.active){const b=$('onlineStatus');if(b){b.hidden=false;b.textContent=error||rb.halted||(rb.recovery?'P2P · SYNCHRONIZING BATTLEFIELD':rtc.started?(rb.engine.canAdvance()?(rtc.transport==='relay'?'RELAY · ROLLBACK · ':'P2P · ROLLBACK · ')+(online.seat===0?'LEFT':'RIGHT'):'P2P · WAITING FOR PEER'):'P2P · SYNCHRONIZING');}return;}const b=document.getElementById('onlineStatus');if(!b)return;b.hidden=!online.started&&!online.active;if(online.failed||error)b.textContent=error||'Connection lost · reconnecting. Use Home to leave.';else b.textContent=online.started?('ONLINE · '+(online.seat===0?'YOU: LEFT':'YOU: RIGHT')+(online.peerAge>5000?' · FRIEND OFFLINE':' · CONNECTED')):'ONLINE · Waiting for opponent';b.classList.toggle('connection-lost',online.failed);if(document.getElementById('onlineRoomCode'))$('onlineRoomCode').textContent=online.code;}
function leaveOnline(){const completedLocally=typeof service!=='undefined'&&service.connected&&service.finalFrame!==null;if(typeof serviceLeave==='function')serviceLeave();if(typeof rtcClose==='function')rtcClose();if(!online.active&&!online.started)return;const code=online.code,token=online.token;online.active=false;online.started=false;online.queue=[];online.uiPending=[];clearTimeout(online.timer);online.failed=false;if(!completedLocally)roomAPI('leave',{code},token).catch(()=>{});try{sessionStorage.removeItem('astra-room');}catch{};$('onlineStatus').hidden=true;$('battleWarriors').disabled=false;$('rematch').disabled=false;$('change').disabled=false;mode='ai';document.querySelector('.battlefield-ui').dataset.playMode='ai';}
function onlineRound(){if(typeof rollbackActive==='function'&&rollbackActive()){rollbackQueue('next',onlineSeat(),{});return true;}if(!online.active)return false;if(online.seat===1){announce('Waiting for the host to start the next round',3);return true;}online.epoch++;return false;}
function rememberRoom(){try{sessionStorage.removeItem('astra-room');}catch{}}
async function connectRoom(join=false,resume=null){if(resume){$('onlineMessage').textContent='Direct matches need a new room after closing the tab.';return;}unlockAudio();$('onlineMessage').textContent='Connecting…';$('createOnline').disabled=$('joinOnline').disabled=true;try{const hero=Number($('onlineHero').value);const r=resume||await roomAPI(join?'join':'create',{hero,code:$('joinCode').value.trim().toUpperCase()},'');Object.assign(online,{active:true,started:false,code:r.code,token:r.token,seat:r.seat,lastGood:Date.now(),queue:[],uiPending:[],guestAck:null,ack:0,failed:false,revision:-1,frameAge:0});rememberRoom();$('onlineMessage').textContent=join?'Waiting for host…':'Share this room code with your friend.';$('onlineRoomCode').textContent=r.code;$('copyRoom').hidden=false;renderOnlineStatus();rtcBegin();}catch(e){$('onlineMessage').textContent=e.message;}finally{$('createOnline').disabled=$('joinOnline').disabled=online.active;}}


// fate-config
'use strict';
const FATE_BALANCE={
 karna:{threshold:.30,armourDurability:.18,incoming:.4,criticalResistance:.4,repairDuration:7,wheelEnterDuration:.8,remountDuration:.6,repairWindow:.42,repairHits:4,repairTimeout:12,entryHealth:.08,heal:.20,comebackDuration:0,damage:1.225,draw:1.18,velocity:1.09,rage:1,postRepairPerfect:1.08,disableSpecialAstrasAfterRepair:true,retainReadyUltimate:true},
 bhishma:{threshold:.01,duration:8,damage:1.4,draw:1.25,velocity:1.15,cooldown:.8},
 arjuna:{lowerDuration:1.2,health:.13,duration:7,draw:1.12,puzzle:1.5,perfect:1.25},
 drona:{mastery:3,incoming:.8,puzzle:1.25,cooldown:.8},
 abhimanyu:{swordThreshold:.15,wheelThreshold:.08,threshold:.22,movement:1.35,draw:1.25,rage:1.25,dodge:1.3,minimumStage:2.5,transition:1, bowWear:.07,swordWear:.06,wheelHits:2,walkSpeed:240,step:110,moveCooldown:.22,separation:76,sword:{reach:170,windup:.23,recovery:.65,damage:1.45},wheel:{reach:195,windup:.42,recovery:1.05,damage:2.1}},
 ashwatthama:{floor:.01,duration:5,heal:.12,incoming:.9,elemental:.85,status:.65,rage:1,movement:1.25,charge:1.3,vulnerable:1.15,counterOnlyUltimateBeforeCurse:true,cursedUltimateExecution:true,cursedUltimateUses:1},
 satyaki:{maximum:5,duration:6,drawPerStack:.03,movementPerStack:.02,missLoss:2,velocityPerStack:.02,furyDraw:1.3,cooldown:.7,perfect:1.2},
 ekalavya:{gain:25,loss:20,duration:8,draw:1.25,perfect:1.35,penalty:.85,cooldown:.8,puzzle:1.5,decay:1,sacrificeDecay:.25}
};
const FATE_NAMES=['KRISHNA’S GUIDANCE','CURSE OF THE EARTH','ICCHAMRITYU','MASTER OF WEAPONS','THE LAST WARRIOR','MANI OF THE IMMORTAL','UNBROKEN PURSUIT','SELF-TAUGHT'];
const FATE_EVENT_CONFIG={duration:2.4,stages:['ENTER','PREPARE','CAMERA','ANIMATION','DIALOGUE','INTERACTION','RESOLVE','RETURN_TO_COMBAT','END'],camera:{default:'character',1:'wheel',3:'weapon',0:'charioteer'}};
const FATE_COMBAT_CONFIG={perfectDraw:1.5,dodgeDuration:.35,dodgeCooldown:3,dodgeIncoming:.4,meleeReach:180,meleeCooldown:.65,meleeDamage:1.4};

// Release 28: one roster balance table. Criticals are skill-triggered, never random.
const ROSTER_BALANCE=[
 {maxHp:160,baseArrowDamage:12.8,drawSpeedMultiplier:1.05,projectileSpeedMultiplier:1.12,accuracyModifier:1.15,criticalMultiplier:1.65,movementSpeedMultiplier:1.05,rageGainMultiplier:1,ultimateDamage:.82},
 {maxHp:160,baseArrowDamage:14,drawSpeedMultiplier:.93,projectileSpeedMultiplier:1.08,accuracyModifier:.90,criticalMultiplier:1.60,movementSpeedMultiplier:.95,rageGainMultiplier:1,ultimateDamage:.82},
 {maxHp:176,baseArrowDamage:14.4,drawSpeedMultiplier:.78,projectileSpeedMultiplier:1,accuracyModifier:1,criticalMultiplier:1.50,movementSpeedMultiplier:.80,rageGainMultiplier:.90,ultimateDamage:.72},
 {maxHp:163,baseArrowDamage:12.8,drawSpeedMultiplier:.96,projectileSpeedMultiplier:1,accuracyModifier:1.08,criticalMultiplier:1.60,movementSpeedMultiplier:.95,rageGainMultiplier:.95,ultimateDamage:.74},
 {maxHp:147,baseArrowDamage:11.8,drawSpeedMultiplier:1.20,projectileSpeedMultiplier:1.05,accuracyModifier:.93,criticalMultiplier:1.55,movementSpeedMultiplier:1.20,rageGainMultiplier:1.15,ultimateDamage:.70},
 {maxHp:160,baseArrowDamage:13.6,drawSpeedMultiplier:.96,projectileSpeedMultiplier:1,accuracyModifier:.92,criticalMultiplier:1.60,movementSpeedMultiplier:1,rageGainMultiplier:1.05,ultimateDamage:.74},
 {maxHp:154,baseArrowDamage:12,drawSpeedMultiplier:1.12,projectileSpeedMultiplier:1.08,accuracyModifier:.96,criticalMultiplier:1.60,movementSpeedMultiplier:1.12,rageGainMultiplier:1.10,ultimateDamage:.72},
 {maxHp:150,baseArrowDamage:11.6,drawSpeedMultiplier:1.05,projectileSpeedMultiplier:1.10,accuracyModifier:1.20,criticalMultiplier:1.90,movementSpeedMultiplier:1.05,rageGainMultiplier:1,ultimateDamage:.72}
];
const COMBAT_BALANCE={normalRecovery:.8,perfectFocus:.90,movingAccuracy:.88,ekalavyaInstinctCrit:2.15,ultimateUnlock:30,bhishmaUltimate:1.25};
function balanceStats(i){return ROSTER_BALANCE[players[i].id];}
function balanceUnit(i){return fateController.state.units[i];}
function balanceNormalDraw(i){return balanceStats(i).drawSpeedMultiplier*fateMod(i).draw*bowDrawFactor(i)*(players[i].quiver?.drawPenalty>0?.85:1);}
function balancePerfect(i,focus){const b=balanceStats(i),moving=players[i].moving?(players[i].id===4?COMBAT_BALANCE.movingAccuracy:1):1;return focus>=COMBAT_BALANCE.perfectFocus*(players[i].quiver?.accuracyPenalty>0?1.15:1)/(b.accuracyModifier*moving*fateMod(i).perfect);}
function balanceCritical(i){return players[i].id===7&&balanceUnit(i)?.phase==='INSTINCT'?COMBAT_BALANCE.ekalavyaInstinctCrit:balanceStats(i).criticalMultiplier;}
function balanceUltimateReason(i,counter=false){const u=balanceUnit(i);if(!u)return '';if(u.hero===1&&u.data.astraLocked&&(!u.data.ultimateRetained||u.data.ultimateSpent))return 'WHEEL FATE · No retained Ultimate';if(u.hero===5){if(u.data.executionUsed>=FATE_BALANCE.ashwatthama.cursedUltimateUses)return 'CURSED ULTIMATE SPENT';if(!counter&&!u.used.mani&&FATE_BALANCE.ashwatthama.counterOnlyUltimateBeforeCurse)return 'COUNTER ONLY · Unlocks when Mani breaks';}return '';}
function balanceSpecialReason(i,a){const u=balanceUnit(i);if(a.tier===2)return balanceUltimateReason(i);return u?.hero===1&&u.data.astraLocked?'SPECIAL ASTRAS DISABLED · Surya’s Last Stand':'';}
function balanceUltimateReadyAtWheel(i){const p=players[i];return p.loadout.some(k=>ASTRAS[k].tier===2&&p.ammo[k]>0&&elapsed>=COMBAT_BALANCE.ultimateUnlock&&p.resolve>=ASTRAS[k].cost&&rageReady(i));}
function balanceSpendUltimate(i){const u=balanceUnit(i);if(u.hero===1&&u.data.astraLocked)u.data.ultimateSpent=true;if(u.hero===5&&u.used.mani)u.data.executionUsed=(u.data.executionUsed||0)+1;}
function balanceUltimateArrow(a){if(!a.special||ASTRAS[a.spell]?.tier!==2||a.spell.startsWith('lore_'))return;const u=balanceUnit(a.owner);a.ultimateFraction=balanceStats(a.owner).ultimateDamage*(u.hero===2&&u.phase==='FINAL_STAND'?COMBAT_BALANCE.bhishmaUltimate:1);a.execution=u.hero===5&&u.phase==='CURSED'&&u.used.mani&&FATE_BALANCE.ashwatthama.cursedUltimateExecution;a.damage=players[1-a.owner].maxHp*a.ultimateFraction;a.critical=false;}
function balanceHUD(i){const u=balanceUnit(i);return u?.hero===5?u.used.mani?(u.data.executionUsed?'EXECUTION SPENT':'CURSED · EXECUTION READY WHEN CHARGED'):'COUNTER ONLY':u?.hero===1&&u.data.astraLocked?'PURE ARCHER · ASTRAS LOCKED':u?.phase==='FINAL_STAND'?'FINAL STAND · ENHANCED ULTIMATE':'';}

// Standard-health balance reference; HP differences and fate modifiers stay meaningful.
const DAMAGE_LADDER={referenceHp:160,normal:12.8,charged:25.6,signature:40,spirit:60.8};
function balancePhysicalDamage(i,focus,spirit,perfect){const p=players[i],m=fateMod(i);return (spirit?DAMAGE_LADDER.charged*(.9+.1*p.damage/12.8):p.damage*(.9+.1*focus))*(perfect?1.04:1)*m.normalDamage*m.damage;}
// One cast shares its damage allowance across projectile volleys, field ticks and boundaries.
// State stays on the target player, so rollback and the referee capture it automatically.
function balanceCastDamage(i,d,a){const phase=ASTRA_PHASES[a.spell];if(!phase||phase.tier===2||ruleSet==='lore')return d;const field=a.fieldId?astraState.fields.find(f=>f.fieldId===a.fieldId):null,cast=a.castId||field?.castId;if(!cast)return d;const p=players[i],spirit=a.spiritCast||field?.spirit;const records=p.castDamageBudget||(p.castDamageBudget=[]);let record=records.find(r=>r.id===cast);if(!record){record={id:cast,used:0,cap:spirit?DAMAGE_LADDER.spirit:DAMAGE_LADDER.signature};records.push(record);if(records.length>64)records.shift();}const allowed=Math.max(0,Math.min(d,record.cap-record.used));record.used+=allowed;return allowed;}

// Authored media timing is shared by both peers and the server referee.
const FATE_FILMS={
 '1:KAVACHA':{name:'Karna',duration:3.416667},
 '0:GUIDANCE':{name:'Arjuna',duration:2.583333},
 '4:LAST_WARRIOR':{name:'Abhimanyu',duration:3},
 '5:SHATTER':{name:'Ashwatthama',duration:3.125},
 '2:DEAD':{name:'Bhishma',duration:6.625},
 '3:DEAD':{name:'Drona',duration:8}
};
function fateFilmHolding(){return typeof fateController!=='undefined'&&(fateController.state.filmUntil||0)>(typeof presentationNow==='function'?presentationNow():fateController.state.clock);}


// fate-core
'use strict';
/* Pure, serializable authoritative passive simulation. Presentation never mutates this state. */
const LegendaryFate = (() => {
  const registry = new Map();
  const defaults = {damage:1, incoming:1, draw:1, movement:1, velocity:1, rage:1, cooldown:1, puzzle:0, perfect:1, normalDamage:1, heal:true, attack:true, ranged:true, ultimate:true, stagger:1, status:1};
  class PassiveController {
    constructor(state) { this.state = state || {schema:1, clock:0, serial:0, match:1, round:0, consumed:{}, events:[], units:[]}; }
    reset(heroes, match=false) {
      if(match){this.state.match++;this.state.consumed={};}
      this.state.round++; this.state.clock=0;this.state.events=[];this.state.presentation={};this.state.filmUntil=0;
      this.state.units=heroes.map((hero,seat)=>({hero,seat,phase:'NORMAL',version:0,id:`${this.state.match}:${this.state.round}:initial:${seat}`,since:0,until:0,used:{},data:{},chariot:'MOUNTED',animation:'idle',...registry.get(hero)?.initial?.()}));
    }
    definition(i){return registry.get(this.state.units[i]?.hero);}
    modifiers(i,context={}) { return {...defaults,...this.definition(i)?.modifiers?.(this.state.units[i],context,this)}; }
    event(i,trigger,data={}) { const s=this.state,u=s.units[i],e={id:`${s.match}:${s.round}:${++s.serial}`,version:++u.version,seat:i,hero:u.hero,trigger,at:s.clock,presentationAt:typeof presentationNow==='function'?presentationNow():s.clock,duration:FATE_EVENT_CONFIG.duration,...data};const film=FATE_FILMS[e.hero+':'+e.phase];if(film){e.film=film;e.presentationAt=Math.max(e.presentationAt,s.filmUntil||0);s.filmUntil=e.presentationAt+film.duration;}s.events.push(e);s.events=s.events.slice(-32);return e; }
    enter(i,phase,duration=0,trigger='PassiveActivate') {const u=this.state.units[i],fromPhase=u.phase;u.phase=phase;u.since=this.state.clock;u.until=duration?u.since+duration:0;u.id=this.event(i,trigger,{phase,fromPhase}).id;u.animation=phase.toLowerCase();u.presentationSince=typeof presentationNow==='function'?presentationNow():u.since;return u;}
    damage(i,amount,context,world) {
      const u=this.state.units[i],p=world[i];if(!u||p.hp<=0)return {damage:0,hp:p.hp};
      const def=this.definition(i),m=this.modifiers(i,context);let damage=Math.max(0,amount*((context.ultimateFraction||context.trueDamage)?1:u.phase==='KAVACHA'&&context.arrowTypeId?m.incoming+(1-m.incoming)*Math.max(0,Math.min(.8,context.armorPenetration||0)):m.incoming));
      if(context.critical&&!context.ultimateFraction&&!context.trueDamage)damage*=m.criticalResistance??1;
      let hp=Math.max(0,p.hp-damage);const result=def?.intercept?.(u,{hp,damage,context},this,world);
      if(result)hp=result.hp;
      p.hp=hp;def?.damaged?.(u,{hp,damage,context},this,world);
      if(hp<=0){this.enter(i,'DEAD',0,'SpecialDeath');}
      return {damage:Math.max(0,damage),hp,intercepted:!!result,miss:!!result?.miss};
    }
    heal(i,amount,world) {if(!this.modifiers(i).heal||world[i].hp<=0)return false;world[i].hp=Math.min(world[i].maxHp,world[i].hp+amount);return true;}
    tick(dt,world) {this.state.clock+=dt;this.state.units.forEach((u,i)=>{if(world[i].hp>0)this.definition(i)?.tick?.(u,dt,this,world);});}
    launch(i,key) {if(key)this.definition(1-i)?.observe?.(this.state.units[1-i],key,this);}
    result(i,hit,perfect) {this.definition(i)?.result?.(this.state.units[i],hit,perfect,this);}
    command(i,op,id,world) {const u=this.state.units[i];if(!u||u.id!==id||world[i].hp<=0)return false;return !!this.definition(i)?.command?.(u,op,this,world);}
    export(){return JSON.parse(JSON.stringify(this.state));}
    restore(state){if(state?.schema!==1||!Array.isArray(state.units)||state.units.length!==2)return false;this.state=JSON.parse(JSON.stringify(state));return true;}
  }
  class FateEventController {
    static sample(event,clock){const age=Math.max(0,clock-event.at),duration=event.duration||FATE_EVENT_CONFIG.duration;const progress=Math.min(1,age/duration);return {stage:FATE_EVENT_CONFIG.stages[Math.min(8,Math.floor(progress*9))],progress,complete:progress>=1,camera:event.camera||FATE_EVENT_CONFIG.camera[event.hero]||'character'};}
  }
  return {registry,PassiveController,FateEventController};
})();


// fate-characters
'use strict';
// Each definition owns its transitions; combat code only calls the controller contract.
{
const R=LegendaryFate.registry,B=FATE_BALANCE;
R.set(1,{
 modifiers(u){const b=B.karna;return u.phase==='KAVACHA'?{incoming:b.incoming,criticalResistance:b.criticalResistance,stagger:.1}:['WHEEL_STUCK','REPAIRING'].includes(u.phase)?{attack:false,ultimate:false,movement:.15}:u.phase==='COMEBACK'?{normalDamage:b.damage,draw:b.draw,velocity:b.velocity,rage:b.rage,perfect:b.postRepairPerfect}:{};},
 intercept(u,r,c,w){if(r.hp>0||u.used.wheel)return;u.data.ultimateRetained=B.karna.retainReadyUltimate&&typeof balanceUltimateReadyAtWheel==='function'&&typeof players!=='undefined'?balanceUltimateReadyAtWheel(u.seat):false;u.used.wheel=u.used.armour=true;u.chariot='WHEEL_STUCK';u.data.repair=0;u.data.lastBeat=-1;c.enter(u.seat,'WHEEL_STUCK',B.karna.wheelEnterDuration,'FateStart');return {hp:w[u.seat].maxHp*B.karna.entryHealth};},
 damaged(u,r,c,w){if(r.hp<=0)return;if(u.phase==='KAVACHA'&&r.damage>0&&r.context.attacker!==u.seat){const wear=r.damage/B.karna.incoming;u.data.armourRemaining=Math.max(0,(u.data.armourRemaining??w[u.seat].maxHp*B.karna.armourDurability)-wear);u.data.cracks=1-u.data.armourRemaining/(w[u.seat].maxHp*B.karna.armourDurability);c.event(u.seat,'ArmourHit');if(u.data.armourRemaining<=0){u.data.armourBroken=true;c.enter(u.seat,'NORMAL',0,'ArmourBreak');}}if(!u.used.armour&&r.hp/w[u.seat].maxHp<=B.karna.threshold){u.used.armour=true;u.data.armourRemaining=w[u.seat].maxHp*B.karna.armourDurability;u.data.cracks=0;c.enter(u.seat,'KAVACHA',0);}},
 tick(u,dt,c,w){if(!u.until||c.state.clock<u.until)return;if(u.phase==='WHEEL_STUCK'){u.chariot='REPAIRING';c.enter(u.seat,'REPAIRING',B.karna.repairTimeout,'RepairStart');}else if(u.phase==='REPAIRING'){w[u.seat].hp=0;c.enter(u.seat,'DEAD',0,'FateFailure');}else if(u.phase==='REMOUNT'){u.chariot='MOUNTED';u.data.astraLocked=B.karna.disableSpecialAstrasAfterRepair;w[u.seat].hp=w[u.seat].maxHp*B.karna.heal;c.enter(u.seat,'COMEBACK',B.karna.comebackDuration,'FateSuccess');}else c.enter(u.seat,'NORMAL',0,'PassiveEnded');},
 command(u,op,c){if(op!=='repair'||u.phase!=='REPAIRING')return false;const t=(c.state.clock-u.since)/(B.karna.repairDuration/B.karna.repairHits),beat=Math.floor(t+1e-8),fraction=Math.max(0,t-beat);if(beat===u.data.lastBeat)return false;u.data.lastBeat=beat;if(fraction>B.karna.repairWindow){u.data.repair=Math.max(0,u.data.repair-1);return true;}u.data.repair++;c.event(u.seat,'RepairProgress');if(u.data.repair>=B.karna.repairHits){u.chariot='REMOUNT';c.enter(u.seat,'REMOUNT',B.karna.remountDuration,'Remount');}return true;}
});
}
{
const B=FATE_BALANCE.bhishma;
LegendaryFate.registry.set(2,{
 modifiers(u){return u.phase==='FINAL_STAND'?{incoming:0,heal:false,normalDamage:B.damage,draw:B.draw,velocity:B.velocity,cooldown:B.cooldown,stagger:0}:{};},
 intercept(u,r,c,w){if(u.phase==='FINAL_STAND')return {hp:w[u.seat].maxHp*B.threshold};if(!u.used.stand&&r.hp<=w[u.seat].maxHp*B.threshold){u.used.stand=true;w[u.seat].resolve=100;c.enter(u.seat,'FINAL_STAND',B.duration,'FateStart');return {hp:w[u.seat].maxHp*B.threshold};}},
 tick(u,dt,c,w){if(u.phase==='FINAL_STAND'&&c.state.clock>=u.until){w[u.seat].hp=0;c.enter(u.seat,'DEAD',0,'SpecialDeath');}}
});
}
{
const B=FATE_BALANCE.arjuna;
LegendaryFate.registry.set(0,{
 modifiers(u){return u.phase==='GUIDANCE'?{draw:B.draw,puzzle:B.puzzle,perfect:B.perfect}:{};},
 intercept(u,r,c,w){const key=`${u.seat}:krishna`;if(r.hp>0||c.state.consumed[key])return;c.state.consumed[key]=true;u.used.rescue=true;u.chariot='LOWERED';c.enter(u.seat,'GUIDANCE',B.duration,'FateStart');return {hp:w[u.seat].maxHp*B.health,miss:true};},
 tick(u,dt,c){if(u.phase==='GUIDANCE'){if(c.state.clock-u.since>B.lowerDuration)u.chariot='MOUNTED';if(c.state.clock>=u.until)c.enter(u.seat,'NORMAL',0,'PassiveEnded');}}
});
}
{
const B=FATE_BALANCE.drona;
LegendaryFate.registry.set(3,{
 initial(){return {data:{lessons:{}}};},
 observe(u,key,c){const n=u.data.lessons[key]=Math.min(B.mastery,(u.data.lessons[key]||0)+1);u.data.last=key;c.enter(u.seat,n===B.mastery?'MASTERED':n===2?'UNDERSTOOD':'OBSERVED',1.5,n===B.mastery?'FateStart':'PassiveActivate');},
 modifiers(u,ctx){return u.data.lessons[ctx.spell]>=B.mastery?{incoming:B.incoming,puzzle:B.puzzle,cooldown:B.cooldown}:{};},
 tick(u,dt,c){if(u.until&&c.state.clock>=u.until)c.enter(u.seat,'NORMAL',0,'PassiveEnded');}
});
}
{
const B=FATE_BALANCE.abhimanyu;
const activate=(u,c,w)=>{u.used.last=true;u.chariot='DESTROYED';Object.assign(u.data,{weapon:'BOW',weaponSince:c.state.clock,wear:0,wreckX:w[u.seat].x});c.enter(u.seat,'LAST_WARRIOR',0,'FateStart');};
const advance=(u,c)=>{const weapon=u.data.weapon==='BOW'?'SWORD':'WHEEL';Object.assign(u.data,{weapon,weaponSince:c.state.clock,wear:0,breakPending:false,transitionUntil:c.state.clock+B.transition,melee:null});const e=c.event(u.seat,'WeaponChange',{weapon,cinematicKey:'4:'+weapon,dialogueIds:weapon==='SWORD'?['vo_abhimanyu_bow_break_01','vo_abhimanyu_sword_01']:['vo_abhimanyu_final_weapon_01']});u.id=e.id;u.data.weaponPresentationAt=e.presentationAt;};
LegendaryFate.registry.set(4,{
 modifiers(u,ctx,c){return u.phase==='LAST_WARRIOR'?{movement:B.movement,draw:B.draw,rage:B.rage,ultimate:false,ranged:u.data.weapon==='BOW',attack:!(u.data.transitionUntil>c.state.clock)}:{};},
 damaged(u,r,c,w){if(r.hp<=0)return;if(!u.used.last&&r.hp<=w[u.seat].maxHp*B.threshold){activate(u,c,w);return;}if(u.phase!=='LAST_WARRIOR'||u.data.weapon==='WHEEL'||u.data.transitionUntil>c.state.clock)return;u.data.wear=(u.data.wear||0)+r.damage;const bow=u.data.weapon==='BOW';if(r.hp/w[u.seat].maxHp<=(bow?B.swordThreshold:B.wheelThreshold)||u.data.wear>=w[u.seat].maxHp*(bow?B.bowWear:B.swordWear))u.data.breakPending=true;},
 tick(u,dt,c){if(u.phase==='LAST_WARRIOR'&&u.data.breakPending&&c.state.clock-u.data.weaponSince>=B.minimumStage)advance(u,c);},
 command(u,op,c,w){if(op==='destroy'&&!u.used.last){activate(u,c,w);return true;}if(op==='equipment_wheel'&&!u.used.last){u.data.wheelHits=(u.data.wheelHits||0)+1;if(u.data.wheelHits>=B.wheelHits)activate(u,c,w);return true;}if(op==='equipment_bow'&&u.phase==='LAST_WARRIOR'&&u.data.weapon==='BOW'){u.data.breakPending=true;return true;}return false;}
});
}
{
const B=FATE_BALANCE.ashwatthama;
LegendaryFate.registry.set(5,{
 initial(){return {phase:'MANI'};},
 modifiers(u,ctx){return u.phase==='MANI'?{incoming:ctx.element?B.elemental:ctx.spell?B.incoming:1,status:B.status,rage:B.rage}:u.phase==='SHATTER'?{incoming:0,heal:false,movement:B.movement,draw:B.charge}:u.phase==='CURSED'?{incoming:B.vulnerable}:{};},
 intercept(u,r,c,w){if(u.phase==='SHATTER')return {hp:w[u.seat].maxHp*B.floor};if(r.hp>0||u.used.mani)return;u.used.mani=true;c.enter(u.seat,'SHATTER',B.duration,'FateStart');return {hp:w[u.seat].maxHp*B.floor};},
 tick(u,dt,c,w){if(u.phase==='SHATTER'&&c.state.clock>=u.until){w[u.seat].hp=w[u.seat].maxHp*B.heal;c.enter(u.seat,'CURSED',0,'FateSuccess');}}
});
}
{
const B=FATE_BALANCE.satyaki;
LegendaryFate.registry.set(6,{
 initial(){return {data:{stacks:0}};},
 modifiers(u){return {draw:u.phase==='FURY'?B.furyDraw:1+u.data.stacks*B.drawPerStack,movement:1+u.data.stacks*B.movementPerStack,velocity:1+u.data.stacks*B.velocityPerStack,cooldown:u.phase==='FURY'?B.cooldown:1,perfect:u.phase==='FURY'?B.perfect:1};},
 result(u,hit,perfect,c){if(u.phase==='DEAD')return;u.data.stacks=hit?Math.min(B.maximum,u.data.stacks+1):Math.max(0,u.data.stacks-B.missLoss);if(!hit&&u.phase==='FURY'&&u.data.stacks<B.maximum)c.enter(u.seat,'NORMAL',0,'PassiveEnded');if(u.data.stacks===B.maximum&&u.phase!=='FURY')c.enter(u.seat,'FURY',B.duration,'FateStart');else c.event(u.seat,'Progress');},
 damaged(u,r,c){if(r.context.critical){u.data.stacks=0;if(u.phase==='FURY')c.enter(u.seat,'NORMAL',0,'PassiveEnded');}},
 tick(u,dt,c){if(u.phase==='FURY'&&c.state.clock>=u.until){u.data.stacks=0;c.enter(u.seat,'NORMAL',0,'PassiveEnded');}}
});
}
{
const B=FATE_BALANCE.ekalavya;
LegendaryFate.registry.set(7,{
 initial(){return {data:{focus:0}};},
 modifiers(u){return {normalDamage:u.used.sacrifice?B.penalty:1,draw:u.phase==='INSTINCT'?B.draw:1,perfect:u.phase==='INSTINCT'||u.used.sacrifice?B.perfect:1,cooldown:u.used.sacrifice?B.cooldown:1,puzzle:u.used.sacrifice?B.puzzle:0};},
 result(u,hit,perfect,c){if(u.phase==='DEAD')return;u.data.focus=Math.max(0,Math.min(100,u.data.focus+(hit?(perfect?B.gain:0):-B.loss)));if(u.data.focus>=100&&u.phase!=='INSTINCT')c.enter(u.seat,'INSTINCT',B.duration,'FateStart');else c.event(u.seat,'Progress');},
 command(u,op,c){if(op!=='sacrifice'||u.used.sacrifice)return false;u.used.sacrifice=true;c.event(u.seat,'Sacrifice');return true;},
 tick(u,dt,c){if(u.phase==='INSTINCT'&&c.state.clock>=u.until){u.data.focus=0;c.enter(u.seat,'NORMAL',0,'PassiveEnded');}else if(u.phase!=='INSTINCT')u.data.focus=Math.max(0,u.data.focus-dt*B.decay*(u.used.sacrifice?B.sacrificeDecay:1));}
});
}


// fate-game
'use strict';
const fateController=new LegendaryFate.PassiveController();
let fateCasts={};
function fateMod(i,context={}){const m=fateController.modifiers(i,context),u=fateController.state.units[i];const b=ROSTER_BALANCE[u?.hero];if(b){m.movement*=b.movementSpeedMultiplier;m.rage*=b.rageGainMultiplier;}if(u?.data.dodgeUntil>fateController.state.clock)m.incoming*=FATE_COMBAT_CONFIG.dodgeIncoming;return m;}
function fateReset(){if(typeof productionReset==='function')productionReset();fateController.reset(chosen,round===1&&score.every(n=>n===0));fateCasts={};if(typeof fatePresentation!=='undefined'&&!(typeof rb!=='undefined'&&rb.active&&rb.executing)){fatePresentation.scenes=[];fatePresentation.scene=null;fatePresentation.lastHUD=-1;fatePresentation.lastPulse={};}fateSyncPlayers();}
function fateSyncPlayers(){fateController.state.units.forEach((u,i)=>{const p=players[i];p.fate=u;if(u.hero===4&&u.used.last&&p.weaponStateId!==u.id){p.weaponStateId=u.id;p.moveGoal=p.x;p.repair=0;if(u.data.weapon!=='BOW')p.equipment.bow=0;}if((!fateMod(i).attack||!fateMod(i).ranged)&&p.fateInputLockId!==u.id){p.fateInputLockId=u.id;p.armed=false;p.tacticArmed=false;keyboardDraw.delete(i);for(const [key,drag] of drags)if(drag.i===i)drags.delete(key);pendingShots=pendingShots.filter(q=>q.arrow.owner!==i);}if(u.hero===0){rescueSpent[i]=!!fateController.state.consumed[`${i}:krishna`];}if(['WHEEL_STUCK','REPAIRING','REMOUNT','DESTROYED'].includes(u.chariot)){p.dismounted=true;if(u.chariot!=='DESTROYED')p.moveGoal=p.x;}else if(u.hero===1&&u.used.wheel)p.dismounted=false;});}
function fateTick(dt){if(typeof onlineGuest==='function'&&onlineGuest())return;fateController.tick(dt,players);fateResolveMelee();if(players.every(p=>p.hp>0&&p.hp/p.maxHp<.25)&&!fateController.state.units[0].used.criticalMusic){fateController.state.units[0].used.criticalMusic=true;fateController.event(0,'CriticalBattle');}fateSyncPlayers();if(mode==='ai'){const u=fateController.state.units[1];if(u?.phase==='REPAIRING')fateController.command(1,'repair',u.id,players);if(fateMeleeProfile(1)){if(Math.abs(players[1].x-players[0].x)>fateMeleeProfile(1).reach*.8)moveChariot(1,true);else fateCommand(1,'melee');}if(u.hero===7&&!u.used.sacrifice&&u.data.focus>50)fateController.command(1,'sacrifice',u.id,players);}}
function fateAttack(i){return fateMod(i).attack;}
function fateOnFoot(i){return fateController.state.units[i]?.chariot==='DESTROYED';}
function fateDamage(i,d,owner,context={}){
 if(onlineGuest())return {damage:0,hp:players[i].hp};
 if(rescueSpent[i])fateController.state.consumed[`${i}:krishna`]=true;
 const result=fateController.damage(i,d*(!context.trueDamage&&fateController.state.units[i]?.data.dodgeUntil>fateController.state.clock?FATE_COMBAT_CONFIG.dodgeIncoming:1),{...context,attacker:owner},players);if(result.miss&&context.vx!==undefined)fateController.event(i,'ProjectileEvaded',{projectile:{x:players[i].x,y:players[i].y-95,vx:context.vx,vy:context.vy,color:context.color},duration:1.2});if(typeof productionEmit==='function'&&players[i].hp>0&&d>players[i].maxHp*.08&&!result.intercepted)productionEmit(i,'damage');fateSyncPlayers();return result;
}
function fateLaunch(i,key,castId,perfect,observe=true){if(observe)fateController.launch(i,key);fateCasts[castId]={owner:i,hit:false,perfect};}
function fateCastHit(a){if(a.castId&&fateCasts[a.castId])fateCasts[a.castId].hit=true;}
function fateResolveCasts(){const live=new Set([...arrows.filter(a=>a.alive),...pendingShots.map(q=>q.arrow),...(astraState.beasts||[]),...(astraState.bleeds||[])].map(a=>a.castId));for(const [id,cast] of Object.entries(fateCasts)){if(!live.has(id)){fateController.result(cast.owner,cast.hit,cast.perfect);delete fateCasts[id];}}}
function fateCommand(i,op,id=fateController.state.units[i]?.id,delayed=false){if(!delayed&&onlineAction('fate',i,{op,id}))return false;if(countdownLocked()||fateFilmHolding()||atHome||paused||ended||ultimate||impactCutscene||players[i].hp<=0)return false;const u=fateController.state.units[i];if(id!==u.id)return false;let ok=false;if(op==='dodge'&&!delayed&&bowDelayDodge(i))return true;if(op==='dodge')stopCharge(i);if(op==='dodge'&&fateController.state.clock>=(u.data.dodgeReady||0)){u.data.dodgeUntil=fateController.state.clock+FATE_COMBAT_CONFIG.dodgeDuration;u.data.dodgeReady=fateController.state.clock+FATE_COMBAT_CONFIG.dodgeCooldown/fateMod(i).movement;fateController.event(i,'Dodge');ok=true;}else if(op==='melee'&&fateMeleeProfile(i)&&fateAttack(i)&&players[i].cool<=0){if(typeof astraRegisterAttack==='function')astraRegisterAttack(i);const m=fateMeleeProfile(i),event=fateController.event(i,'Melee',{weapon:u.data.weapon});u.data.melee={id:event.id,weapon:u.data.weapon,impactAt:fateController.state.clock+m.windup,presentationAt:event.presentationAt,resolved:false};players[i].release=m.recovery;players[i].cool=m.recovery;ok=true;}else ok=fateController.command(i,op,id,players);if(ok){started=true;fateSyncPlayers();refresh();}return ok;}
function fateSnapshot(){return {controller:fateController.export(),casts:fateCasts};}
function fateRestore(s){if(s?.controller&&fateController.restore(s.controller)){fateCasts=s.casts||{};fateSyncPlayers();}}

// The host schedules one impact per swing. The client only draws its replicated pose.
function fateRanged(i){return fateMod(i).ranged;}
function fateMeleeProfile(i){const u=fateController.state.units[i];return u?.phase==='LAST_WARRIOR'&&u.data.weapon!=='BOW'?FATE_BALANCE.abhimanyu[u.data.weapon.toLowerCase()]:null;}
function fateResolveMelee(){for(let i=0;i<2;i++){const u=fateController.state.units[i],a=u.data.melee;if(!a||a.resolved||a.impactAt>fateController.state.clock)continue;a.resolved=true;const m=fateMeleeProfile(i);if(!m||players[i].hp<=0||players[1-i].hp<=0||a.weapon!==u.data.weapon)continue;const hit=Math.abs(players[i].x-players[1-i].x)<=m.reach;if(hit){hurt(1-i,players[i].damage*m.damage,i,false,{melee:true});fateController.event(i,'MeleeImpact',{weapon:a.weapon});}else fateController.event(i,'MeleeMiss',{weapon:a.weapon});}}


// astra-config
'use strict';
// Release 24: deterministic balance data, shared by local and rollback simulation.
const ASTRA_GLOBAL={controlResistance:2,drWindow:12,hardControlDR:[1,.7,.4,0],fieldLimit:8,projectileLimit:100,eventLimit:96,mobileParticleMultiplier:.45,skyAngle:74,skyPower:.7,shieldIntegrity:12,shieldArrowWear:1,heavyInterrupt:16,precisionBonus:1.12,precisionWindow:2,readyHold:1.4,aiReaction:{easy:1.1,normal:.7,hard:.4}};
const ASTRA_AUDIO={AstraFlight:[240,.09,'sine'],CounterReady:[620,.1,'sine'],CounterSelect:[420,.08,'sine'],CounterRelease:[330,.18,'triangle'],CounterConsumed:[170,.08,'sine'],CounterSuccess:[780,.2,'sine'],CounterFailed:[120,.12,'triangle'],SpiritChargeStart:[220,.12,'triangle'],SpiritChargeLoop:[170,.06,'sine'],SpiritChargeReady:[880,.22,'sine'],SpiritRelease:[150,.25,'triangle'],GroundCast:[180,.1,'sine'],SkyCast:[420,.16,'sine'],FieldSpawn:[100,.2,'triangle'],FieldLoop:[90,.08,'sine'],FieldCounter:[650,.15,'sine'],FieldTransform:[520,.22,'triangle'],FieldExpire:[160,.08,'sine']};
const ASTRA_BLOCK={none:{normal:false,charged:false,astra:false,spirit:false,ultimate:false},arrows:{normal:true,charged:true,astra:false,spirit:false,ultimate:false}};
const ASTRA_FIELDS={};
function astraTemplate(id,name,tags,control,damage,interval,radius,duration,vfx,extra={}){ASTRA_FIELDS[id]={name,tags:tags.split(','),control,damage,interval,radius,duration,vfx,slow:1,push:0,pull:0,drift:0,lock:0,containment:0,blocks:ASTRA_BLOCK.none,...extra};}
astraTemplate('storm','Celestial Storm Zone','THUNDER,STORM',2,2.2,.8,155,6,'electric',{slow:.85,mode:'arrows'});
astraTemplate('wind','Wind Corridor','WIND',3,1.3,.9,160,5,'forest',{push:48,drift:100});
astraTemplate('divine','Divine Annihilation Field','DIVINE',1,4,.85,190,5,'electric',{mode:'pillars'});
astraTemplate('solar','Solar Flare Zone','RADIANCE,FIRE',2,2,.75,145,5,'embers',{slow:.88,visibility:.25});
astraTemplate('serpent','Serpent Bind','SERPENT',5,1.5,.8,115,5,'serpent',{lock:2,slow:.65,mode:'serpents'});
astraTemplate('crater','Radiant Crater','DIVINE,THUNDER',1,3,.75,155,3,'electric',{mode:'pillars'});
astraTemplate('river','Flowing River Circle','WATER,BARRIER',3,.7,1,180,6,'water',{push:35,blocks:ASTRA_BLOCK.arrows,defensive:true,wet:true});
astraTemplate('thunder','Thunder Field','THUNDER,STORM',2,2.2,.8,155,6,'electric',{slow:.8,movingDamage:1.3});
astraTemplate('radiance','Radiance Field','RADIANCE,DIVINE',1,2,.7,185,5,'electric',{reveal:true,mode:'pillars'});
astraTemplate('fireCircle','Fire Circle Prison','FIRE,BARRIER',5,2,.7,125,4.5,'fireCircle',{lock:4.5,blocks:ASTRA_BLOCK.arrows});
astraTemplate('fireTornado','Fire Tornado','FIRE,STORM',3,2.1,.65,180,7,'fireTornado',{pull:30,drift:120,blocks:ASTRA_BLOCK.arrows,mode:'fireballs'});
astraTemplate('shock','Brahma Shock Field','DIVINE',3,3,.85,160,5,'electric',{push:38});
astraTemplate('seal','Counter Seal Zone','DIVINE,BARRIER',2,1,1,175,6,'electric',{slow:.9,chargeRate:.7,mastery:true});
astraTemplate('ring','Rotating Arrow Ring','WIND,STORM',1,2,.8,135,5,'forest',{mode:'ring'});
astraTemplate('lane','Destruction Lane','FIRE',3,2,.65,180,5,'embers',{push:55,mode:'lane'});
astraTemplate('tempest','Tempest Prison','STORM,WIND',4,2,.75,180,6,'forest',{pull:42,drift:90,containment:1});
astraTemplate('curse','Cursed Flame Zone','FIRE,CURSE',1,2.2,.8,145,6,'fireCircle',{rageDrain:1.4});
astraTemplate('suppression','Narayana Suppression Field','DIVINE',1,1.3,.7,190,7,'electric',{behavior:true,mode:'arrows'});
astraTemplate('four','Four-Direction Annihilation','DIVINE',3,3.5,1,200,5,'electric',{push:30,mode:'pillars'});
astraTemplate('tunnel','High-Speed Wind Tunnel','WIND',3,1.4,.8,160,5,'forest',{push:55,drift:125,mobility:1.2});
astraTemplate('flood','Flood Zone','WATER',2,1,.8,190,6,'water',{slow:.55,push:15,wet:true});
astraTemplate('assault','Storm Assault Sphere','STORM,THUNDER,WATER',3,2.7,.7,185,6,'electric',{push:22,slow:.85,mode:'arrows'});
astraTemplate('thorns','Thorn Trap Zone','FOREST,SERPENT',4,1,1,100,5,'forest',{containment:3});
astraTemplate('wildfire','Wildfire Circle','FOREST,FIRE',2,1.8,.7,165,6,'embers',{slow:.9,mode:'leaves'});
astraTemplate('forest','Massive Forest Tempest','FOREST,WIND',4,2,.8,195,6,'forest',{pull:38,drift:130,containment:1,visibility:.35,precision:true});
astraTemplate('steam','Steam Cloud','WATER',0,0,1,185,3,'steam',{visibility:.65});
astraTemplate('electric','Electrified Water','WATER,THUNDER',2,2,.65,190,4,'electric',{slow:.65,both:true,wet:true});
astraTemplate('embers','Ember Storm','FIRE,WIND',1,.8,.6,235,3,'embers',{mode:'embers'});
astraTemplate('mist','Dispersed Mist','WATER,WIND',0,0,1,185,2.5,'steam',{visibility:.3});
const ASTRA_INTERACTIONS=[
{field:'FIRE',counter:'WATER',result:'TRANSFORM',to:'steam'},
{field:'WATER',counter:'THUNDER',result:'TRANSFORM',to:'electric'},
{field:'FIRE',counter:'WIND',result:'TRANSFORM',to:'embers',strength:2},
{field:'WATER',counter:'WIND',result:'TRANSFORM',to:'mist'},
{field:'SERPENT',counter:'DIVINE',result:'CANCEL'},
{field:'SERPENT',counter:'WIND',result:'SHORTEN_DURATION',factor:.35,strength:2},
{field:'STORM',counter:'WIND',result:'WEAKEN',factor:.5},
{field:'STORM',counter:'BARRIER',result:'SHORTEN_DURATION',factor:.45},
{field:'CURSE',counter:'DIVINE',result:'CANCEL'},
{field:'FOREST',counter:'DIVINE',result:'DISPLACE',distance:220},
{field:'RADIANCE',counter:'BARRIER',result:'WEAKEN',factor:.5},
{field:'DIVINE',counter:'DIVINE',result:'WEAKEN',factor:.5,strength:2}];
const ASTRA_PHASES={};
const ASTRA_ROWS=[
['gandiva_gale',1.5,'wind','Cyclone Dome','Fast wind arrow with pushback','Overhead wind burst'],
['indra_storm',2.1,'storm','Thunder Arrow Storm','Celestial three-arrow barrage','Luminous arrow rain'],
['pashupata',3,'divine','Celestial Annihilation Vortex','Massive divine projectile','Delayed celestial descent'],
['solar_shaft',1.7,'solar','Sun Disc','Piercing solar arrow','Radiant shaft rain'],
['naga',2.2,'serpent','Emerald Serpent Storm','Coils around the opponent; duration grows with charge','Green thundercloud rains biting snakes; sky Garuda clears it'],
['shakti',2.8,'crater','Heavenly Spear Descent','Divine spear impact','Descending divine spear'],
['ganga',1.6,'river','Divine Water Curtain','Protective water barrier','Falling water curtain'],
['kuru_storm',2.1,'thunder','Pursuing Thundercloud','Localized lightning','Small storm cloud'],
['prabhasa',2.7,'radiance','Celestial Light Spears','Radiant projectile','Radiant shaft descent'],
['agni',2,'fireCircle','Fire Tornado','Fire arrow and burn','Brief sky fire'],
['brahma',2.5,'shock','Celestial Shock Descent','Celestial explosion','Delayed shock strike'],
['acharya',2.8,'seal','Acharya Analysis Sigil','Learned-pattern projectile','Temporary analysis sigil'],
['chakra',1.5,'ring','Descending Arrow Formation','Rapid arrow spread','Circular arrow rain'],
['raudh',1.8,'lane','Descending Rudra Strikes','Fast projectile sequence','Descending Rudra bolts'],
['saubhadra',2.7,'tempest','Descending Spiral Storm','Arrow storm','Storm formation'],
['raudra',1.8,'curse','Dark Ember Cloud','Cursed ember projectile','Ember rain'],
['narayana',2.4,'suppression','Celestial Weapon Rain','Celestial weapon sequence','Celestial weapon rain'],
['brahmashira',3,'four','Celestial Rift','Catastrophic celestial strike','Delayed divine descent'],
['vrishni',1.5,'tunnel','Slicing Vortex','Fast wind arrow with pushback','Slicing wind burst'],
['satyaki_tide',2,'flood','Tidal Rainfall','Extinguishing water wave','Fire-suppressing rainfall'],
['yuyudhana',2.7,'assault','Cloudburst Barrage','Wind-water storm','Cloudburst'],
['forest_fang',1.6,'thorns','Spectral Thorn Descent','Precision weak-point arrow','Thorn arrow descent'],
['nishada',2,'wildfire','Flaming Leaf Storm','Green-orange flame arrow','Burning leaves'],
['aranya',2.8,'forest','Great Forest Cyclone','Forest cyclone projectile','Short aerial vortex']];
ASTRAS.raudh.name='Rudra Rush';ASTRAS.raudra.name='Rudra Ember';ASTRAS.saubhadra.name='Subhadra Tempest';ASTRAS.nishada.name='Nishada Flame';
ASTRAS.raudh.volley=1;ASTRAS.narayana.volley=3;
for(const [id,charge,field,sky,normal,normalSky] of ASTRA_ROWS){const a=ASTRAS[id],f=ASTRA_FIELDS[field];ASTRA_PHASES[id]={astraId:id,displayName:a.name,ownerCharacter:LOADOUTS.findIndex(l=>l.includes(id)),element:a.element,category:'astra',tier:a.tier,normalChargeTime:0,spiritChargeTime:charge,normalCooldown:.65+a.tier*.25,spiritCooldown:1.15+a.tier*.35,normalEnergyCost:a.cost,spiritEnergyCost:a.cost+(a.tier===2?15:12),normalDamage:35.2/(a.volley||1),spiritDamage:38.4,fieldEffectId:field,skyFieldId:id==='agni'?'fireTornado':field,normalDirectBehavior:normal,normalSkyBehavior:normalSky,spiritDirectBehavior:f.name,spiritSkyBehavior:sky,counterTags:id==='forest_fang'?['FOREST']:id==='ganga'?[...f.tags,'DIVINE']:f.tags,counterStrength:a.tier===2?3:1,weaknessTags:ASTRA_INTERACTIONS.filter(r=>f.tags.includes(r.field)).map(r=>r.counter),resistanceTags:a.tier===2?['NON_ULTIMATE']:[],radius:f.radius,duration:f.duration,damageOverTime:f.damage,pulseInterval:f.interval,movementControlType:f.control,movementModifier:f.slow,projectileBlockingRules:f.blocks,vfxId:f.vfx,sfxId:'SpiritRelease',musicId:null,cameraId:'brief-recoil',ai:{reaction:ASTRA_GLOBAL.aiReaction}};a.description=normal+'. Spirit: '+f.name+' · '+charge+'s · '+ASTRA_PHASES[id].spiritEnergyCost+' Resolve.';}

// Shared atlas geometry for the counter catalogue.
const astraCells={fireCircle:[0,0,260],fireTornado:[0,260,595],water:[0,595,915],steam:[0,915,1254],electric:[1,0,312],embers:[1,312,618],serpent:[1,618,940],forest:[1,940,1254]};


// astra-fx-config
'use strict';
const ENVIRONMENT_PROFILES={SERPENT_STORM:[28,0,0,.12,'#174b2d',5],NORMAL:[0,0,0,0,'#000000',0],CELESTIAL_STORM:[48,.75,0,.08,'#263c70',5],THUNDERSTORM:[60,1,0,.1,'#193960',5],MONSOON:[30,1,0,.15,'#315979',4],FIRE_SKY:[28,0,1,.08,'#a43d17',4],SOLAR_HEAT:[10,0,.8,0,'#bd842c',4],GALE:[95,0,0,.04,'#638b85',3],TEMPEST:[85,.45,0,.1,'#3f6478',5],MIST:[18,.2,0,.48,'#92a8b2',6],STEAM:[12,.15,.2,.62,'#b7b7bd',7],CURSED_SKY:[25,0,.35,.12,'#66264e',4],FOREST_CYCLONE:[80,.2,0,.2,'#376b4d',4],DIVINE_RADIANCE:[15,0,0,0,'#d0b767',4]};
const AstraFXPreset=Object.fromEntries([
['gandiva_gale','GALE','wind'],['indra_storm','CELESTIAL_STORM','thunder'],['pashupata','DIVINE_RADIANCE','divine'],['solar_shaft','SOLAR_HEAT','solar'],['naga','SERPENT_STORM','serpent'],['shakti','DIVINE_RADIANCE','divine'],['ganga','MONSOON','water'],['kuru_storm','THUNDERSTORM','thunder'],['prabhasa','DIVINE_RADIANCE','divine'],['agni','FIRE_SKY','fire'],['brahma','DIVINE_RADIANCE','divine'],['acharya','DIVINE_RADIANCE','divine'],['chakra','GALE','wind'],['raudh','FIRE_SKY','fire'],['saubhadra','TEMPEST','wind'],['raudra','CURSED_SKY','curse'],['narayana','CELESTIAL_STORM','divine'],['brahmashira','DIVINE_RADIANCE','divine'],['vrishni','GALE','wind'],['satyaki_tide','MONSOON','water'],['yuyudhana','THUNDERSTORM','thunder'],['forest_fang','FOREST_CYCLONE','forest'],['nishada','FIRE_SKY','fire'],['aranya','FOREST_CYCLONE','forest']
].map(([id,environment,family])=>[id,{id,environment,family,shockwave:'fx_sky_shockwave_divine',volley:['indra_storm','chakra','narayana','yuyudhana'].includes(id),color:({wind:'#b9e4ca',thunder:'#a2dfff',divine:'#ffe5a0',solar:'#ffce65',serpent:'#a8df8c',water:'#7cdcff',fire:'#ff9c52',curse:'#ec83dc',forest:'#8bdf9c'})[family]}]));
const ENVIRONMENT_AUDIO={SkyEntry:[880,.09,'sine'],SkyShockwave:[70,.25,'triangle'],EnvironmentBegin:[120,.12,'sine'],EnvironmentEnd:[200,.08,'sine'],EnvironmentStrike:[80,.08,'triangle']};
const ASTRA_FX_AUDIO_HOOKS={bow_charge:'SpiritChargeStart',arrow_release:'AstraFlight',sky_entry:'SkyEntry',sky_shockwave:'SkyShockwave',storm_begin:'EnvironmentBegin',thunder:'EnvironmentStrike',rain:'FieldLoop',wind:'FieldLoop',fire:'FieldLoop',divine_hum:'SpiritChargeLoop',field_loop:'FieldLoop',environment_end:'EnvironmentEnd'};


// battlefield-environment
'use strict';
// Bounded authoritative state is nested in the existing rollback snapshot.
const BattlefieldEnvironmentController={
 state(){return astraState.environment||(astraState.environment={environmentId:'NORMAL',sourceAstraId:null,startTimestamp:elapsed,duration:0,windVector:{x:0,y:0},windStrength:0,rainStrength:0,heatLevel:0,mistLevel:0,priority:0,skyProfile:'NORMAL',weatherProfile:'NORMAL',foregroundFX:[],backgroundFX:[],screenGrade:'#000000',invocations:[],strikeZones:[],gameplayFieldIDs:[]});},
 invoke(a){const s=this.state();if(s.invocations.some(v=>v.arrow.castId===a.castId))return true;if(s.invocations.length>=8)s.invocations.shift();s.invocations.push({arrow:{...a,trail:[],alive:false},x:a.x,y:a.y,startTimestamp:elapsed,phase:0});astraEmit('SkyEntry',a.owner,{spell:a.spell,x:a.x,y:a.y});return true;},
 profile(f){return ({steam:'STEAM',mist:'MIST',electric:'THUNDERSTORM',embers:'FIRE_SKY'})[f.kind]||AstraFXPreset[f.spell]?.environment||'NORMAL';},
 tick(dt){const s=this.state();for(const v of s.invocations){const age=elapsed-v.startTimestamp;if(age>=.16&&v.phase===0){v.phase=1;astraEmit('SkyShockwave',v.arrow.owner,{spell:v.arrow.spell,x:v.x,y:v.y});if(!options.reduced)shake=Math.max(shake,3);}if(age>=.85&&v.phase===1){v.phase=2;const a=v.arrow,f=astraSpawn(a,a.spell==='ganga'?players[a.owner].x:players[1-a.owner].x,true);if(f){Object.assign(f,(f.celestialSource||f.nagaStorm)?{}:{environmentOrigin:{x:v.x,y:v.y},cinematicSky:true,strikeIndex:0,nextStrike:.65,strikeBudget:8});if(f.front)f.cinematicSky=false;astraEmit('EnvironmentBegin',a.owner,{spell:a.spell,fieldId:f.fieldId});}if(ASTRAS[a.spell]?.tier===2)astraDescent(a,.35);}}
 s.invocations=s.invocations.filter(v=>elapsed-v.startTimestamp<1.8);
 const fields=astraState.fields.filter(f=>f.cinematicSky&&f.age<f.duration).sort((a,b)=>ENVIRONMENT_PROFILES[this.profile(b)][5]-ENVIRONMENT_PROFILES[this.profile(a)][5]||b.serial-a.serial),f=fields[0],id=f?this.profile(f):'NORMAL',p=ENVIRONMENT_PROFILES[id];if(s.environmentId!=='NORMAL'&&id==='NORMAL')astraEmit('EnvironmentEnd',0,{});
 Object.assign(s,{environmentId:id,sourceAstraId:f?.spell||null,startTimestamp:f?.at||elapsed,duration:f?Math.max(0,f.duration-f.age):0,windVector:{x:(f?.owner?-1:1)*p[0],y:0},windStrength:p[0],rainStrength:p[1],heatLevel:p[2],mistLevel:p[3],screenGrade:p[4],priority:p[5],skyProfile:id,weatherProfile:id,foregroundFX:p[1]?['rain']:p[2]?['embers']:[],backgroundFX:f?['clouds']:[],gameplayFieldIDs:fields.map(f=>f.fieldId)});
 if(s.rainStrength)players.forEach(p=>p.wetUntil=Math.max(p.wetUntil||0,elapsed+.25));
 for(const f of fields){if(!f.sky||!f.damage||f.strikeIndex>=f.strikeBudget||f.age<f.nextStrike)continue;const n=f.strikeIndex++,spread=[0,-.58,.58,-.28,.28,-.8,.8,0][n%8],x=Math.max(90,Math.min(W-90,f.x+spread*f.radius));s.strikeZones.push({id:f.fieldId+':strike:'+n,fieldId:f.fieldId,spell:f.spell,owner:f.owner,x,radius:Math.max(48,f.radius*.32),warnAt:elapsed,impactAt:elapsed+.7,expireAt:elapsed+1.1,hit:false});f.nextStrike+=f.nagaStorm?.8:f.celestialSource?.85:Math.max(.5,(f.duration-1.2)/f.strikeBudget);}
 for(const z of s.strikeZones){const f=astraState.fields.find(f=>f.fieldId===z.fieldId);if(!f||!f.sky){z.expireAt=elapsed;continue;}if(!z.hit&&elapsed>=z.impactAt){z.hit=true;astraEmit('EnvironmentStrike',z.owner,{spell:z.spell,x:z.x,y:GROUND,fieldId:z.fieldId});for(let i=0;i<2;i++)if(astraAffects(f,i)&&Math.abs(players[i].x-z.x)<=z.radius){let damage=(f.celestialSource||f.nagaStorm)?f.damage:f.damage*f.duration/f.interval/f.strikeBudget;if(f.behavior&&!f.celestialSource)damage*=.25+f.threat;hurt(i,damage,f.owner,false,{spell:f.spell,fieldId:f.fieldId,dot:true,spiritCast:true});}}}
 s.strikeZones=s.strikeZones.filter(z=>z.expireAt>elapsed).slice(-16);
 },
 susceptibility(id){return ({arrow_naracha:.3,arrow_shilimukha:1.4})[id]||.8;},
 projectile(a,dt){if(a.special)return;const s=this.state();a.vx+=s.windVector.x*this.susceptibility(a.arrowTypeId)*dt;if(s.rainStrength&&!a.environmentRainApplied){const scale=1-.065*s.rainStrength;a.vx*=scale;a.vy*=scale;a.environmentRainApplied=true;}},
 damage(d,c){const s=this.state(),element=c.element||ASTRAS[c.spell]?.element;return element==='fire'||element==='solar'?d*(1-.18*s.rainStrength)*(c.dot?1+.12*s.heatLevel:1):d;}
};


// astra-fields
'use strict';
let astraState={serial:0,eventSerial:0,fields:[],beasts:[],bleeds:[],events:[],ai:{noticed:'',since:0,next:0}};
const astraFieldPool=[];
function astraConfig(i){return players[i]?.armed?ASTRA_PHASES[players[i].selected]:null;}
function astraEmit(type,owner,data={}){astraState.events.push({id:round+':astra:'+ ++astraState.eventSerial,type,owner,at:elapsed,...data});if(astraState.events.length>ASTRA_GLOBAL.eventLimit)astraState.events.shift();const cue=(typeof ENVIRONMENT_AUDIO!=='undefined'&&ENVIRONMENT_AUDIO[type])||ASTRA_AUDIO[type]||(type==='SpriteImpact'?[110,.2,'triangle']:null);if(cue){const spell=data.spell||astraState.fields.find(f=>f.fieldId===data.fieldId)?.spell||players[owner]?.selected;const family=typeof ASTRA_SPIRITS!=='undefined'?ASTRA_SPIRITS[spell]?.family:null;const pitch={thunder:1.1,wind:1.45,divine:1.7,solar:1.3,serpent:.75,water:.9,fire:.8,forest:1.2,curse:.65}[family]||1;tone(cue[0]*pitch,cue[1],cue[2]);}}
function astraReset(){if(typeof astraSpiritReset==='function'&&(typeof rb==='undefined'||!rb.active))astraSpiritReset();for(const f of astraState.fields)if(astraFieldPool.length<ASTRA_GLOBAL.fieldLimit)astraFieldPool.push(f);astraState={serial:0,eventSerial:0,fields:[],beasts:[],bleeds:[],events:[],ai:{noticed:'',since:0,next:0}};players.forEach(p=>Object.assign(p,{beastStunUntil:0,beastPush:null,stability:null,stabilityAIAction:null,stabilitySerial:0,focusRecoveryUntil:0,stabilityRequireRelease:false,astraCharge:0,astraReady:false,astraChargeState:'AIMING',astraShield:0,precisionUntil:0,wetUntil:0,control:{lockUntil:0,lockField:null,resistUntil:0,lastLock:-100,chain:0,seen:[],slow:1}}));if(typeof BattlefieldEnvironmentController!=='undefined')BattlefieldEnvironmentController.state();}
function astraRoundEnd(){pendingShots=[];astraReset();players.forEach(p=>{p.charging=false;p.focus=0;p.venom=0;p.burn=0;});}
function astraChargeStart(i){if(!astraConfig(i))return;bowBeginCharge(i);Object.assign(players[i],{astraCharge:0,astraReady:false,astraShield:ASTRA_GLOBAL.shieldIntegrity,astraChargeState:'SPIRIT_CHARGING',astraLoopAt:elapsed});if(typeof stabilityStart==='function')stabilityStart(i);astraEmit('SpiritChargeStart',i);}
function astraChargeStop(i){bowEndCharge(i);const p=players[i];if(typeof stabilityStop==='function')stabilityStop(i);Object.assign(p,{astraCharge:0,astraReady:false,astraShield:0,astraChargeState:p.cool>0?'COOLDOWN':p.armed?'NORMAL_READY':'AIMING'});}
function astraChargeTick(i,dt){const c=astraConfig(i),p=players[i];if(!c)return false;let rate=fateMod(i).draw*bowDrawFactor(i)*(bowRetaliation(i)?1.35:1);for(const f of astraState.fields)if(astraAffects(f,i)&&astraInside(f,p.x))rate*=f.chargeRate||1;p.astraCharge=Math.min(c.spiritChargeTime,(p.astraCharge||0)+dt*rate);p.focus=1.5*p.astraCharge/c.spiritChargeTime;if(typeof stabilityTick==='function')stabilityTick(i,dt);if(p.focus>=1.5&&!p.astraReady){p.astraReady=true;p.astraChargeState='SPIRIT_READY';astraEmit('SpiritChargeReady',i);}if(elapsed-p.astraLoopAt>=1){p.astraLoopAt=elapsed;astraEmit('SpiritChargeLoop',i);}return true;}
function astraMaxHold(i){const c=astraConfig(i);return c?c.spiritChargeTime/Math.max(.1,fateMod(i).draw)*1.5+ASTRA_GLOBAL.readyHold:COMBAT_FEEL.maxHold;}
function astraReleaseAllowed(i,special){const p=players[i],c=special&&ASTRA_PHASES[p.selected];if(typeof stabilityReleaseAllowed==='function'&&!stabilityReleaseAllowed(i,special))return false;const release=typeof stabilityRelease==='function'?stabilityRelease(i):null,energy=c?c.normalEnergyCost+(c.spiritEnergyCost-c.normalEnergyCost)*(release?.damage||1):0;if(c&&!(typeof counterEquipped==='function'&&counterEquipped(p))&&(p.focus>=1.5||release)&&p.resolve<energy){announce('Spirit needs '+c.spiritEnergyCost+' Resolve · release early for Normal',1.5);return false;}return true;}
function astraDecorate(a,i,spirit){const c=ASTRA_PHASES[a.spell];Object.assign(a,{chargeFraction:Math.max(0,Math.min(1,(players[i].astraCharge||0)/c.spiritChargeTime)),spiritCast:spirit,castType:(spirit?'SPIRIT':'NORMAL')+(a.sky?'_SKY':'_DIRECT'),stateVersion:1,at:elapsed,groundCast:false,fieldCarrier:true});a.damage=(spirit?c.spiritDamage:c.normalDamage*(a.sky?(ASTRAS[a.spell].volley||1):1))*fateMod(i,{spell:a.spell}).damage;if(players[i].precisionUntil>elapsed){a.damage*=ASTRA_GLOBAL.precisionBonus;players[i].precisionUntil=0;}if(a.spell==='forest_fang'&&a.perfect)a.damage*=1.12;if(a.spell==='acharya')a.damage*=1+Math.min(.15,Object.values(players[i].fate?.data.lessons||{}).filter(n=>n>=FATE_BALANCE.drona.mastery).length*.03);if(typeof counterEquipped==='function'&&counterEquipped(players[i])){a.counterSlot=true;a.counterUser=players[i].id;a.signatureOwner=c.ownerCharacter;a.damage=(spirit?c.spiritDamage:c.normalDamage*(a.sky?(ASTRAS[a.spell].volley||1):1))*COUNTER_CONFIG.offenseScale;}if(typeof stabilityDecorate==='function')stabilityDecorate(a,i);}
function astraAfterRelease(i,c,spirit,castId){const p=players[i],sky=!!arrows.find(a=>a.castId===castId)?.sky;p.cool=(spirit?c.spiritCooldown:c.normalCooldown)/fateMod(i).draw;if(spirit){if(!(typeof counterEquipped==='function'&&counterEquipped(p)))p.resolve=Math.max(0,p.resolve-(c.spiritEnergyCost-c.normalEnergyCost)*(typeof stabilityRelease==='function'?(stabilityRelease(i)?.damage||1):1));astraEmit('SpiritRelease',i,{castId});}astraEmit(sky?'SkyCast':'GroundCast',i,{castId,spell:c.astraId});astraEmit('AstraFlight',i,{castId,spell:c.astraId});if(typeof stabilityAfterRelease==='function')stabilityAfterRelease(i,c,castId);if(c.astraId==='ganga'&&!sky){const a=arrows.find(a=>a.castId===castId);if(a){astraCounterNearby(a,p.x);astraSpawn(a,p.x,false);a.alive=false;if(typeof astraSpiritImpact==='function')astraSpiritImpact(a,p.x,p.y-30,'field');}}}
function astraRegisterAttack(i){for(const f of astraState.fields)if(f.spell==='narayana'&&f.owner!==i)f.lastAttack=elapsed;for(const f of astraState.fields)if(f.behavior&&astraAffects(f,i))f.threat=Math.min(4,f.threat+1);}
function astraAffects(f,i){return f.both||f.affectsBoth||i===f.owner?!!(f.both||f.affectsBoth||f.affectsOwner):f.affectsOpponent!==false;}
function astraInside(f,x){return Math.abs(f.x-x)<=f.radius;}
function astraUnlock(i){const c=players[i].control;if(c?.lockField){c.lockUntil=0;c.lockField=null;c.resistUntil=elapsed+ASTRA_GLOBAL.controlResistance;}}
function astraRemove(f){for(let i=0;i<2;i++)if(players[i].control?.lockField===f.fieldId)astraUnlock(i);const n=astraState.fields.indexOf(f);if(n<0)return;astraState.fields.splice(n,1);if(f.precision&&f.age>=f.duration*.8&&players[f.owner].hp>0)players[f.owner].precisionUntil=elapsed+ASTRA_GLOBAL.precisionWindow;astraEmit('FieldExpire',f.owner,{fieldId:f.fieldId});if(astraFieldPool.length<ASTRA_GLOBAL.fieldLimit)astraFieldPool.push(f);}
function astraCounterRule(f,a){if(f.spell==='naga'&&a.spell==='garuda_ward')return f.sky&&!a.sky?null:{result:'CANCEL'};if(f.celestialSource)return null;if(a.counterSlot)return counterFieldRule(f,a);const c=ASTRA_PHASES[a.spell];if(!c||f.ultimate&&c.tier!==2)return null;const strength=c.counterStrength+(a.spiritCast&&!a.partialSpirit?1:0);const rule=ASTRA_INTERACTIONS.find(r=>f.tags.includes(r.field)&&c.counterTags.includes(r.counter)&&strength>=(r.strength||1)&&!(f.kind==='fireTornado'&&r.counter==='WATER'&&!a.sky&&!a.spiritCast&&a.spell!=='ganga'));return rule&&a.partialSpirit&&f.spirit&&['CANCEL','TRANSFORM'].includes(rule.result)?{result:'WEAKEN',factor:.7}:rule;}
function astraCounter(f,a){const r=astraCounterRule(f,a);if(!r||f.counterCasts.includes(a.castId))return false;if(a.counterSlot)counterFeedback(a,r.result);f.counterCasts.push(a.castId);if(f.counterCasts.length>32)f.counterCasts.shift();astraEmit('FieldCounter',a.owner,{fieldId:f.fieldId,castId:a.castId,result:r.result});for(let i=0;i<2;i++)if(players[i].control?.lockField===f.fieldId)astraUnlock(i);f.lock=0;f.control=Math.min(3,f.control);f.stateVersion++;
if(r.result==='CANCEL'){if(a.spell==='garuda_ward')astraGarudaSweep(a,!!a.sky);else astraRemove(f);return true;}
if(r.result==='TRANSFORM'){const t=ASTRA_FIELDS[r.to];Object.assign(f,t,{tags:[...t.tags],kind:r.to,age:0,tick:0,lock:0,chargeRate:1,mastery:false,behavior:false,precision:false,defensive:false,movingDamage:0,rageDrain:0,mobility:1,reveal:false,ultimate:false,blocks:ASTRA_BLOCK.none,visibility:t.visibility||0,wet:!!t.wet,both:!!t.both,affectsOwner:!!t.both,affectsOpponent:true,sky:false});astraEmit('FieldTransform',a.owner,{fieldId:f.fieldId,to:r.to});}
else if(r.result==='SHORTEN_DURATION')f.duration=f.age+(f.duration-f.age)*r.factor;
else if(r.result==='WEAKEN'){f.damage*=r.factor;f.duration=f.age+(f.duration-f.age)*r.factor;f.drift*=r.factor;}
else if(r.result==='DISPLACE')f.x=Math.max(100,Math.min(1300,f.x+(a.owner?-1:1)*r.distance));
else if(r.result==='REFLECT')f.owner=a.owner;return true;}
function astraCounterNearby(a,x){if(a.spell==='satyaki_tide')return false;if(ASTRAS[a.spell]?.tier===2)return false;for(const f of [...astraState.fields].sort((a,b)=>a.serial-b.serial)){if(f.owner===a.owner&&a.counterSlot)continue;if(f.owner===a.owner&&!ASTRA_PHASES[a.spell]?.counterTags.includes('WATER'))continue;if((a.sky&&f.sky||astraInside(f,x))&&astraCounter(f,a))return true;}return false;}
function astraSpawn(a,x,sky){if(astraState.fields.some(f=>f.castId===a.castId))return null;const c=ASTRA_PHASES[a.spell];if(!c)return null;while(astraState.fields.length>=ASTRA_GLOBAL.fieldLimit)astraRemove(astraState.fields.find(f=>!f.celestialSource)||astraState.fields[0]);const kind=sky?c.skyFieldId:c.fieldEffectId,t=ASTRA_FIELDS[kind],spirit=!!a.spiritCast,f=astraFieldPool.pop()||{};for(const k of Object.keys(f))delete f[k];Object.assign(f,t,{tags:[...t.tags],serial:++astraState.serial,fieldId:round+':field:'+astraState.serial,castId:a.castId,owner:a.owner,spell:a.spell,kind,stateVersion:1,at:elapsed,x,sky,spirit,ultimate:c.tier===2,age:0,tick:0,loopAt:0,lastPulse:-10,threat:1,counterCasts:[],boundaryAt:[-10,-10],affectsOwner:false,affectsOpponent:true,name:sky?c.spiritSkyBehavior:t.name,radius:t.radius*(sky?1.2:1)*(spirit?1:.8),duration:t.duration*(spirit?1:.5),damage:c.tier===2||!t.damage?0:(spirit?22.4:4.8)/Math.max(1,Math.floor(t.duration*(spirit?1:.5)/t.interval)),control:spirit?(sky&&t.control===5?2:t.control):t.defensive?3:1,lock:spirit&&!sky?t.lock:0,push:t.push*(spirit?1:.4),pull:spirit?t.pull:0,containment:spirit?t.containment:0,blocks:spirit||t.defensive?t.blocks:ASTRA_BLOCK.none});if(a.counterSlot){f.counterSlot=true;f.damage*=COUNTER_CONFIG.offenseScale;f.containment*=COUNTER_CONFIG.offenseScale;f.mastery=false;f.precision=false;f.behavior=false;}if(typeof stabilityScaleField==='function')stabilityScaleField(f,a);astraRebuildField(f,a);astraState.fields.push(f);astraEmit('FieldSpawn',a.owner,{fieldId:f.fieldId,castId:a.castId});if(!options.reduced)shake=Math.max(shake,4);return f;}
function astraDescent(a,delay=.6){if(arrows.length+pendingShots.length>=ASTRA_GLOBAL.projectileLimit)return;const x=players[1-a.owner].x;pendingShots.push({delay,arrow:{...a,projectileId:(a.projectileId||a.castId)+':descent',spiritImpactDone:false,x,y:40,px:x,py:40,vx:0,vy:420,sky:false,skyDescended:true,groundCast:false,alive:true,age:0,trail:[]}});}
function astraSky(a){if(beastSpell(a.spell)){beastSpawn(a,true);return true;}if(!ASTRA_PHASES[a.spell])return false;a.alive=false;if(a.spell==='garuda_ward'){astraGarudaSweep(a,true);return true;}if(astraCounterNearby(a,players[1-a.owner].x))return true;if((a.spiritCast||ASTRAS[a.spell].tier===2||['naga','narayana','raudra','solar_shaft','brahma'].includes(a.spell))&&typeof BattlefieldEnvironmentController!=='undefined')return BattlefieldEnvironmentController.invoke(a);astraSpawn(a,a.spell==='ganga'?players[a.owner].x:players[1-a.owner].x,true);return true;}
function astraImpact(a,x,y,hit){if(beastSpell(a.spell)){beastSpawn(a,false);return true;}if(!ASTRA_PHASES[a.spell])return false;a.alive=false;if(a.spell==='garuda_ward'){astraGarudaSweep(a,false);return true;}const countered=astraCounterNearby(a,x);if(typeof astraSpiritImpact==='function')astraSpiritImpact(a,x,y,countered?'counter':hit?'player':'ground');if(countered)return true;const enemy=1-a.owner,p=players[enemy],dist=Math.hypot(x-p.x,(y-(p.y+20))*.8);if(hit||dist<a.radius){fateCastHit(a);const outcome=hurt(enemy,a.damage*(a.ultimateFraction||hit?1:1-dist/(a.radius*1.3)),a.owner,ASTRAS[a.spell].tier===2||['solar','thunder'].includes(a.element),a);if(a.element==='wind')knockChariot(enemy,1);if(a.spell==='naga'&&!a.spiritCast&&!outcome?.miss){p.venom=3;p.venomOwner=a.owner;}if(hit&&!outcome?.miss&&ASTRAS[a.spell].tier===2&&typeof beginImpactCutscene==='function')beginImpactCutscene(a,enemy);}
if((a.spiritCast||a.spell==='naga')&&!a.skyDescended){const f=astraSpawn(a,x,false);if(f&&a.spell==='naga'&&(hit||dist<a.radius))f.boundTarget=enemy;}else if(!a.skyDescended&&['fire','water','solar'].includes(a.element))astraSpawn(a,x,false);spawnSpriteEffect(a.element,x,y,a.radius*(a.spiritCast?1.8:1),.8);explode(x,y,a.color,true);return true;}
function astraProjectile(a,dt){if(beastBarrier(a))return;if(beastSpell(a.spell)&&!a.sky&&a.age>=.18){beastSpawn(a,false);return;}if(astraSourceCollision(a))return;if(a.spell==='naga'&&(!a.spiritCast||a.partialSpirit)&&a.age<.65){const p=players[1-a.owner];a.vy+=Math.max(-90,Math.min(90,(p.y-a.y)*.12))*dt;}if(a.special&&ASTRAS[a.spell]?.tier===2)return;for(const f of astraState.fields){if(!astraAffects(f,a.owner)&&f.owner===a.owner)continue;const intersects=Math.max(a.x,a.px)>=f.x-f.radius&&Math.min(a.x,a.px)<=f.x+f.radius;if(!intersects||a.y<100||a.y>GROUND+20)continue;if(a.special&&a.spell!=='satyaki_tide'&&astraCounter(f,a)){a.alive=false;if(typeof astraSpiritImpact==='function')astraSpiritImpact(a,a.x,a.y,'counter');return;}if((!a.special&&(a.spirit?f.blocks.charged:f.blocks.normal))||(a.special&&(a.spiritCast?f.blocks.spirit:f.blocks.astra))){a.alive=false;if(typeof astraSpiritImpact==='function')astraSpiritImpact(a,a.x,a.y,'field');return;}if(f.mastery&&a.special&&(players[f.owner].fate?.data.lessons?.[a.spell]||0)>=FATE_BALANCE.drona.mastery&&a.sealField!==f.fieldId){a.sealField=f.fieldId;a.damage*=.65;a.vx*=.85;}if(f.drift){a.vx+=Math.sign(f.x-a.x)*f.drift*dt;a.vy-=f.drift*.15*dt;}}}
function astraLocked(i){return players[i].beastStunUntil>elapsed||players[i].control?.lockUntil>elapsed;}
function astraMoveFactor(i){return astraLocked(i)?0:players[i].control?.slow||1;}
function astraMotion(i,oldX,dt){const p=players[i];if(astraLocked(i)){p.x=oldX;p.moveGoal=oldX;p.knockVelocity=0;return;}for(const f of astraState.fields){if(f.owner===i&&f.mobility&&astraInside(f,p.x))p.x+=(p.x-oldX)*(f.mobility-1);if(!astraAffects(f,i))continue;if(astraInside(f,p.x))p.x+=((f.owner?-1:1)*f.push+Math.sign(f.x-p.x)*f.pull)*dt;if(f.containment&&astraInside(f,oldX)&&!astraInside(f,p.x)&&elapsed-f.boundaryAt[i]>.7){f.boundaryAt[i]=elapsed;hurt(i,f.containment,f.owner,false,{spell:f.spell,dot:true,fieldId:f.fieldId});p.control.slow=Math.min(p.control.slow,.6);}}p.x=Math.max(fateOnFoot(i)?140:i?1040:140,Math.min(fateOnFoot(i)?1260:i?1260:360,p.x));}
function astraTick(dt){beastTick(dt);for(let i=0;i<2;i++){const c=players[i].control;if(!c)continue;c.slow=1;if(c.lockField&&elapsed>=c.lockUntil)astraUnlock(i);if(elapsed-c.lastLock>ASTRA_GLOBAL.drWindow)c.chain=0;}
for(const f of [...astraState.fields]){astraRebuildTick(f,dt);if(!astraState.fields.includes(f))continue;f.age+=dt;if(f.age>=f.duration){astraRemove(f);continue;}f.tick+=dt;const pulse=f.tick>=f.interval;if(pulse){f.tick-=f.interval;f.lastPulse=f.age;}if(f.age-f.loopAt>=2){f.loopAt=f.age;astraEmit('FieldLoop',f.owner,{fieldId:f.fieldId});}if(f.behavior){const p=players[1-f.owner];if(!p.charging&&!p.armed&&p.release<=0)f.threat=Math.max(0,f.threat-dt*.8);}
for(let i=0;i<2;i++){const p=players[i],c=p.control;if(!c||!astraAffects(f,i)||!astraInside(f,p.x)||p.hp<=0)continue;c.slow=Math.min(c.slow,f.slow);if(f.wet)p.wetUntil=elapsed+.5;if(f.lock&&!c.seen.includes(f.fieldId)&&elapsed>=c.resistUntil&&!astraLocked(i)){c.seen.push(f.fieldId);if(c.seen.length>16)c.seen.shift();const duration=f.lock*ASTRA_GLOBAL.hardControlDR[Math.min(3,c.chain++)];c.lastLock=elapsed;if(duration){c.lockUntil=elapsed+duration;c.lockField=f.fieldId;}else c.resistUntil=elapsed+ASTRA_GLOBAL.controlResistance;}
if(pulse&&f.damage&&!(f.cinematicSky&&f.sky)){let d=f.damage;if(f.behavior)d*=.25+f.threat;if(f.movingDamage&&Math.abs(p.moveGoal-p.x)>1)d*=f.movingDamage;if(f.mode==='ring'&&Math.abs(p.x-f.x)>f.radius*.75)continue;hurt(i,d,f.owner,false,{spell:f.spell,fieldId:f.fieldId,dot:true,spiritCast:f.spirit});if(f.rageDrain)p.resolve=Math.max(0,p.resolve-f.rageDrain);}}}}
function astraChargeInterrupt(i,d,c){if(typeof stabilityEligible==='function'&&stabilityEligible(i)){if(players[i].hp<=0)stopCharge(i);return;}if(!c.dot&&(d>=ASTRA_GLOBAL.heavyInterrupt||c.criticalStagger))stopCharge(i);if(players[i].hp<=0)stopCharge(i);}
function astraAim(i,a){if(typeof BattlefieldEnvironmentController!=='undefined')return a;let angle=a.angle;for(const f of astraState.fields)if(f.drift&&astraAffects(f,i)&&astraInside(f,players[i].x))angle+=(Math.floor(elapsed*4)%2?1:-1)*2;return {...a,angle:Math.max(-25,Math.min(155,angle))};}
function astraAI(dt){if(astraSourceAI())return true;if(mode!=='ai'||ruleSet==='lore'||ended||!started)return false;const ai=astraState.ai,p=players[1],enemy=players[0],f=astraState.fields.find(f=>astraAffects(f,1)),notice=f?.fieldId||(enemy.charging?'charge:'+enemy.selected:'');if(!notice)return false;if(ai.noticed!==notice){ai.noticed=notice;ai.since=elapsed;return true;}if(elapsed-ai.since<ASTRA_GLOBAL.aiReaction[(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)])return true;if(p.charging){p.aiCharge=true;if(p.astraReady){shoot(1);stopCharge(1);}return true;}if(f?.behavior){p.armed=false;stopCharge(1);return true;}if(f&&astraInside(f,p.x)&&!astraLocked(1))p.moveGoal=p.x<f.x?1040:1260;if(p.cool>0)return true;const candidates=p.loadout.filter(k=>ASTRAS[k].tier!==2&&!lockReason(p,ASTRAS[k])&&p.ammo[k]>0&&p.resolve>=ASTRA_PHASES[k]?.normalEnergyCost&&(!f||astraCounterRule(f,{spell:k,spiritCast:true,sky:true})));candidates.sort((a,b)=>Number(ASTRA_PHASES[b].counterTags.includes('WATER'))-Number(ASTRA_PHASES[a].counterTags.includes('WATER')));if(candidates.length&&elapsed>=ai.next){p.selected=candidates[0];p.armed=true;p.skyMode=!!f?.sky;aims[1]={angle:p.skyMode?75:42,power:.8};if(p.resolve>=ASTRA_PHASES[p.selected].spiritEnergyCost){p.aiCharge=true;setChargeIntent(1,true);}else shoot(1);ai.next=elapsed+2;return true;}return !!f?.blocks.normal;}

// Celestial sources and advancing elemental fronts are rollback-owned field data.
function astraRebuildField(f,a){
 if(f.spell==='naga'){
 const charge=Math.max(0,Math.min(1,a.chargeFraction??a.spiritPower??(a.spiritCast?1:0)));
 Object.assign(f,{chargeFraction:charge,duration:f.sky?3+charge*7:2.5+charge*4.5,damage:f.sky?1.6+charge*.8:1.25,interval:.8,lock:f.sky?0:Math.min(2,1+charge),slow:f.sky?.85:.65,control:3});
 if(f.sky)Object.assign(f,{nagaStorm:true,cinematicSky:true,environmentOrigin:{x:W/2,y:155},strikeIndex:0,nextStrike:.4,strikeBudget:Math.max(2,Math.floor((f.duration-.7)/.8))});
 }

 if(f.sky&&['narayana','raudra','solar_shaft'].includes(f.spell)){
  for(const old of [...astraState.fields])if(old.owner===f.owner&&old.spell===f.spell)astraRemove(old);
  Object.assign(f,{celestialSource:true,sourceX:W/2,sourceY:185,sourceRadius:66,duration:1e9,cinematicSky:true,strikeIndex:0,nextStrike:1,strikeBudget:1e9,lastAttack:elapsed,damage:f.spirit?3:1.8,environmentOrigin:{x:W/2,y:185}});
 }
 if(!f.sky&&f.spell==='agni')Object.assign(f,{front:'fire',originX:f.x,frontX:f.x,frontDirection:f.owner?-1:1,radius:35,lock:0,control:2,blocks:ASTRA_BLOCK.none,slow:.9});
 if(f.spell==='satyaki_tide')Object.assign(f,{front:'water',originX:players[f.owner].x,frontX:players[f.owner].x,frontDirection:f.owner?-1:1,push:95,slow:.65,blocks:ASTRA_BLOCK.none,cinematicSky:false});
}
function astraRebuildTick(f,dt){
 if(f.spell==='naga'&&!f.sky&&f.boundTarget!=null)f.x=players[f.boundTarget].x;
 if(f.celestialSource&&f.spell==='narayana'&&elapsed-f.lastAttack>=2.1){astraRemove(f);return;}
 if(!f.front)return;
 f.frontX=Math.max(80,Math.min(W-80,f.frontX+f.frontDirection*(f.front==='water'?450:360)*dt));
 f.x=(f.originX+f.frontX)/2;f.radius=Math.abs(f.frontX-f.originX)/2+45;
 if(f.front==='water'){
  for(const fire of [...astraState.fields])if(fire!==f&&fire.tags.includes('FIRE')&&!fire.celestialSource&&Math.abs(f.x-fire.x)<=f.radius+fire.radius){astraEmit('FieldTransform',f.owner,{fieldId:fire.fieldId,to:'steam'});astraRemove(fire);}
  for(const p of players)if(astraInside(f,p.x))p.burn=0;
 }
}
function astraSourceCollision(a){
 if(!a.special||!a.alive)return false;
 for(const f of [...astraState.fields]){
  if(!f.celestialSource||f.owner===a.owner||f.spell==='narayana')continue;
  const dx=a.x-a.px,dy=a.y-a.py,q=Math.max(0,Math.min(1,((f.sourceX-a.px)*dx+(f.sourceY-a.py)*dy)/(dx*dx+dy*dy||1)));
  if(Math.hypot(a.px+dx*q-f.sourceX,a.py+dy*q-f.sourceY)>f.sourceRadius)continue;
  a.alive=false;astraEmit('FieldCounter',a.owner,{fieldId:f.fieldId,castId:a.castId,result:'CANCEL'});astraRemove(f);
  if(typeof astraSpiritImpact==='function')astraSpiritImpact(a,f.sourceX,f.sourceY,'counter');return true;
 }return false;
}
function astraSourceAI(){
 if(mode!=='ai'||ruleSet==='lore'||ended||!started)return false;
 const f=astraState.fields.find(f=>f.celestialSource&&f.owner===0);if(!f)return false;
 const p=players[1];if(f.spell==='narayana'){stopCharge(1);p.armed=false;return true;}
 if(f.age<1||p.cool>0)return true;
 const k=p.loadout.find(k=>ASTRAS[k].tier<2&&p.ammo[k]>0&&!lockReason(p,ASTRAS[k])&&p.resolve>=ASTRA_PHASES[k].normalEnergyCost);
 if(!k)return false;
 stopCharge(1);p.selected=k;p.armed=true;
 const speed=860*p.speed*fateMod(1).velocity*ASTRAS[k].speed,dx=Math.abs(p.x-32-f.sourceX),rise=p.y-55-f.sourceY;
 const disc=speed**4-G*(G*dx*dx+2*rise*speed*speed);
 if(disc<0)return false;
 aims[1]={angle:Math.atan((speed*speed-Math.sqrt(disc))/(G*dx))*180/Math.PI,power:1};shoot(1,true);return true;
}

// Counter all serpent hazards atomically so delayed attacks cannot reappear after a sweep.
function astraGarudaSweep(a,sky){
 for(const f of [...astraState.fields])if(f.owner!==a.owner&&f.spell==='naga'&&(sky||!f.sky))astraRemove(f);
 const snake=b=>b.owner!==a.owner&&['naga','lore_naga'].includes(b.spell)&&(sky||!b.sky);
 for(const b of arrows)if(snake(b))b.alive=false;
 pendingShots=pendingShots.filter(p=>!snake(p.arrow));
 const e=astraState.environment;if(e){if(sky)e.invocations=e.invocations.filter(v=>!snake(v.arrow));e.strikeZones=e.strikeZones.filter(z=>z.owner===a.owner||z.spell!=='naga'||!sky);}
 players[a.owner].venom=0;
 astraEmit('GarudaSweep',a.owner,{spell:'garuda_ward',sky,x:players[a.owner].x,y:players[a.owner].y-40,duration:sky?2.8:1.3});
 if(a.counterSlot)counterFeedback(a,'CANCEL');
}

// Deterministic beast attacks: all phase, damage and animation clocks live in rollback state.
function beastSpell(spell){return spell==='nishada'||spell==='raudh';}
function beastSpawn(a,sky){
 a.alive=false;astraState.beasts||=[];astraState.bleeds||=[];
 if(astraState.beasts.some(b=>b.castId===a.castId))return;
 const owner=a.owner,dir=owner?-1:1;
 astraState.beasts.push({spell:a.spell,owner,castId:a.castId,arrow:{...a,trail:[]},sky,phase:sky?'invoke':'morph',age:0,life:0,x:sky?players[owner].x:a.x,y:sky?GROUND:a.y,startY:a.y,dir,hit:false});
}
function beastBarrier(a){
 if(a.special&&ASTRAS[a.spell]?.tier===2)return false;
 for(const b of astraState.beasts||[]){if(b.spell!=='raudh'||!b.sky||b.owner===a.owner||!['guard','run'].includes(b.phase))continue;
 if(Math.max(a.x,a.px??a.x)>=b.x-65&&Math.min(a.x,a.px??a.x)<=b.x+65&&Math.max(a.y,a.py??a.y)>=0&&Math.min(a.y,a.py??a.y)<=GROUND+20){a.alive=false;return true;}}
 return false;
}
function beastPhase(b,phase){b.phase=phase;b.age=0;}
function beastHit(b){
 if(b.hit)return;b.hit=true;const enemy=1-b.owner,p=players[enemy],ctx={...b.arrow,trueDamage:b.sky&&b.spell==='nishada',vx:undefined,vy:undefined};
 fateCastHit(b.arrow);const result=hurt(enemy,b.arrow.damage*(b.spell==='nishada'?.75:1),b.owner,true,ctx);
 if(result?.miss||p.hp<=0)return;
 if(b.spell==='nishada')astraState.bleeds.push({owner:b.owner,target:enemy,castId:b.castId,left:4,next:1,damage:b.arrow.damage*.25/4,context:{...ctx,dot:true}});
 else {stopCharge(enemy);p.beastStunUntil=elapsed+2;p.beastPush={from:p.x,to:enemy?1260:140,age:0};p.knockVelocity=0;}
}
function beastTick(dt){
 astraState.beasts||=[];astraState.bleeds||=[];
 for(const p of players)if(p.beastPush){const k=p.beastPush;k.age+=dt;const t=Math.min(1,k.age/.45);p.x=k.from+(k.to-k.from)*(1-(1-t)**3);p.moveGoal=p.x;p.knockVelocity=0;if(t===1)p.beastPush=null;}
 for(const d of astraState.bleeds){d.next-=dt;while(d.next<=0&&d.left>0){d.next+=1;d.left--;if(players[d.target].hp>0)hurt(d.target,d.damage,d.owner,true,d.context);}}
 astraState.bleeds=astraState.bleeds.filter(d=>d.left>0&&players[d.target].hp>0);
 for(const b of astraState.beasts){b.age+=dt;b.life+=dt;const p=players[1-b.owner];
 if(p.hp<=0||b.life>12){b.done=true;continue;}
 if(b.phase==='invoke'){
 b.x=players[b.owner].x+b.dir*40;b.y=GROUND;
 if(b.age>=.8){if(b.spell==='raudh')beastPhase(b,'guard');else{b.x=Math.max(60,Math.min(W-60,p.x+b.dir*170));b.dir=-b.dir;b.fromX=b.x;b.targetX=p.x;beastPhase(b,'pounce');}}}
 else if(b.phase==='guard'){if(b.age>=1)beastPhase(b,'run');}
 else if(b.phase==='morph'){b.y=b.startY+(GROUND-b.startY)*Math.min(1,b.age/.4);b.x+=b.dir*100*dt;if(b.age>=.4){b.y=GROUND;beastPhase(b,'run');}}
 else if(b.phase==='run'){
 b.y=GROUND;const before=b.x;b.x+=b.dir*(b.spell==='raudh'?650:470)*dt;
 if(b.spell==='nishada'&&(Math.abs(p.x-b.x)<170||(before-p.x)*(b.x-p.x)<=0)){b.fromX=b.x;b.targetX=p.x;beastPhase(b,'pounce');}
 else if(b.spell==='raudh'&&(Math.abs(p.x-b.x)<85||(before-p.x)*(b.x-p.x)<=0)){beastHit(b);beastPhase(b,'impact');}}
 else if(b.phase==='pounce'){const t=Math.min(1,b.age/.6);b.x=b.fromX+(b.targetX-b.fromX)*t;b.y=GROUND-Math.sin(t*Math.PI)*150;if(b.age>=.42)beastHit(b);if(t===1)beastPhase(b,'impact');}
 else if(b.phase==='impact'&&b.age>=.45)b.done=true;
 }
 astraState.beasts=astraState.beasts.filter(b=>!b.done);
}


// counter-config
'use strict';
// One independent tactical slot. Never append it to the signature loadout.
const COUNTER_CONFIG={counterUsesPerRound:1,usesByAstra:{},offenseScale:.85,selectionSeconds:10,timeoutChoice:'highlighted',keys:['c','h'],aiDelay:{easy:1.3,normal:.85,hard:.5},aiAccuracy:{easy:.5,normal:.75,hard:.9}};
const COUNTER_POOLS={
 arjuna:['satyaki_tide','agni','ganga','garuda_ward','vrishni','narayana'],
 karna:['satyaki_tide','gandiva_gale','agni','garuda_ward','ganga'],
 bhishma:['satyaki_tide','gandiva_gale','agni','garuda_ward','narayana'],
 drona:['satyaki_tide','ganga','gandiva_gale','garuda_ward','indra_storm','narayana'],
 abhimanyu:['satyaki_tide','ganga','agni','garuda_ward','vrishni'],
 ashwatthama:['satyaki_tide','ganga','gandiva_gale','garuda_ward','agni'],
 satyaki:['ganga','gandiva_gale','agni','garuda_ward','indra_storm'],
 ekalavya:['satyaki_tide','ganga','gandiva_gale','garuda_ward','agni']
};
const COUNTER_HERO_IDS=Object.keys(COUNTER_POOLS);
ASTRAS.garuda_ward={...ASTRAS.gandiva_gale,name:'Garuda Ward',damage:34,color:'#8ff2ea',description:'A counter-only avian wind ward. Intercept a serpent manifestation; cannot stop an Ultimate.',uses:1,tier:0,cost:0};
ASTRA_PHASES.garuda_ward={...ASTRA_PHASES.gandiva_gale,astraId:'garuda_ward',displayName:'Garuda Ward',ownerCharacter:null,normalDamage:14.28,spiritDamage:17.68,counterTags:['GARUDA','WIND'],counterStrength:1,normalDirectBehavior:'Avian wind ward: intercept a serpent arrow',spiritDirectBehavior:'Golden eagle cleanses serpent coils',normalSkyBehavior:'Great eagle clears enemy snakes from the sky',spiritSkyBehavior:'Great eagle clears serpent storms and bites'};
let counterLoadout=[null,null];
function counterEligible(hero,id){return !!COUNTER_POOLS[COUNTER_HERO_IDS[hero]]?.includes(id)&&!!ASTRAS[id]&&ASTRAS[id].tier!==2;}
function counterResetRound(){players.forEach((p,i)=>{const id=ruleSet==='arcade'&&counterEligible(p.id,counterLoadout[i])?counterLoadout[i]:null;p.counter={astraId:id,uses:id?(ASTRAS[id].counterUsesPerRound??COUNTER_CONFIG.counterUsesPerRound):0,revealed:false,notice:'',noticeUntil:0,aiNotice:'',aiSince:0,aiAttempted:false,promptId:''};if(id)p.ammo[id]=p.counter.uses;});}
function counterEquipped(p){return !!p?.counter?.astraId&&p.selected===p.counter.astraId;}
function counterReason(i){const p=players[i],c=p?.counter;if(!c||!counterEligible(p.id,c.astraId))return 'INVALID';if(c.uses<=0)return 'USED';if(ultimate||atHome||paused||ended||blockedAction(i)||!fateRanged(i)||balanceSpecialReason(i,ASTRAS[c.astraId]))return 'DISABLED';return '';}
function armCounterAstra(i){if(onlineAction('counterAstra',i))return;const p=players[i],reason=counterReason(i);if(reason){announce('COUNTER '+reason,1);return false;}stopCharge(i);const already=counterEquipped(p)&&p.armed;p.selected=p.counter.astraId;p.armed=!already;p.tacticArmed=false;p.skyMode=false;p.focus=0;astraEmit('CounterSelect',i);refresh();return true;}
function counterReleased(i){const p=players[i];if(!counterEquipped(p))return;p.counter.uses=Math.max(0,p.counter.uses-1);p.ammo[p.selected]=p.counter.uses;p.counter.revealed=true;astraEmit('CounterRelease',i,{astraId:p.selected,remaining:p.counter.uses});astraEmit('CounterConsumed',i,{astraId:p.selected});}
function counterFeedback(a,result){if(!a.counterSlot)return;const p=players[a.owner];p.counter.notice=result;p.counter.noticeUntil=elapsed+1.5;astraEmit(result==='FAILED'?'CounterFailed':'CounterSuccess',a.owner,{castId:a.castId,result});announce('COUNTER · '+result.replaceAll('_',' '),1.4);}
// Pure shared resolver. UI hints and deterministic collision use the same catalogue rules.
function resolveCounterAstra({sourceAstraId,counterAstraId,sourceTags,counterTags,chargeLevel=0,castType='NORMAL_DIRECT',state='FIELD',field=null,sourceSpirit=false}){
 const invalid=reason=>({valid:false,status:'INVALID',interactionType:'NO_SPECIAL_INTERACTION',strength:0,futureTransformId:null,reason});
 if(typeof AstraCodex==='undefined')return invalid('Database unavailable');const source=AstraCodex.get(sourceAstraId),counter=AstraCodex.get(counterAstraId);
 if(!source||!counter||!counter.isCounterEligible)return invalid('Invalid Astra');if(source.isUltimate||counter.isUltimate||field?.ultimate)return invalid('Ultimate protected');
 const c=ASTRA_PHASES[counterAstraId],st=sourceTags||field?.tags||source.tags,ct=counterTags||c?.counterTags||counter.tags,sky=castType.endsWith('_SKY'),strength=(c?.counterStrength||1)+(chargeLevel>=1?1:0);
 if(state==='FIELD'&&field?.sky&&!sky)return invalid('Sky cast required');
 const rule=[...AstraCodex.rules].sort((a,b)=>(b.priority||0)-(a.priority||0)).find(r=>r.status==='CURRENT'&&(r.scope===state||r.scope==='COUNTER_ANY')&&(!r.sourceAstraId||r.sourceAstraId===counterAstraId)&&(!r.targetAstraId||r.targetAstraId===sourceAstraId)&&(!r.sourceTag||ct.includes(r.sourceTag))&&(!r.targetTag||st.includes(r.targetTag))&&(!r.sourceElement||counter.element===r.sourceElement)&&(!r.targetElement||source.element===r.targetElement)&&strength>=(r.minimumCounterStrength||1));
 if(!rule)return invalid('No matching relationship');let type=rule.interactionType,factor=rule.factor??.5;
 if(sourceSpirit&&chargeLevel<1&&['CANCEL','HARD_COUNTER','TRANSFORM'].includes(type)&&!ct.includes('GARUDA'))type='WEAKEN';
 return {valid:true,status:'VALID',interactionType:type,strength,ruleId:rule.id,factor,distance:rule.displacement||220,futureTransformId:type==='TRANSFORM'?AstraCodex.recipes.find(r=>r.id===rule.recipeId)?.resultId:null};
}
function counterFieldRule(f,a){const r=resolveCounterAstra({sourceAstraId:f.spell,counterAstraId:a.spell,sourceTags:f.tags,chargeLevel:a.spiritPower??(a.spiritCast?1:0),castType:a.castType,state:'FIELD',field:f,sourceSpirit:f.spirit});return r.valid?{result:r.interactionType==='HARD_COUNTER'?'CANCEL':r.interactionType,to:r.futureTransformId,factor:r.factor,distance:r.distance}:null;}
function counterClash(a,b){if(!a.counterSlot&&!b.counterSlot)return false;const counter=a.counterSlot?a:b,source=counter===a?b:a;if(!source.special){source.alive=false;if(!source.arrowTypeId)counter.alive=false;return true;}const r=resolveCounterAstra({sourceAstraId:source.spell,counterAstraId:counter.spell,chargeLevel:counter.spiritPower??(counter.spiritCast?1:0),castType:counter.castType,state:'PROJECTILE',sourceSpirit:source.spiritCast});counter.alive=false;if(r.valid){if(['CANCEL','HARD_COUNTER'].includes(r.interactionType))source.alive=false;else source.damage*=r.factor;counterFeedback(counter,r.interactionType);}else counterFeedback(counter,'FAILED');return true;}
function counterOpportunity(i){const p=players[i];if(!p?.counter?.astraId||ultimate)return null;const key=p.counter.astraId,castType=(p.astraReady?'SPIRIT':'NORMAL')+(p.skyMode?'_SKY':'_DIRECT');for(const f of astraState.fields){if(f.owner===i)continue;const r=resolveCounterAstra({sourceAstraId:f.spell,counterAstraId:key,sourceTags:f.tags,chargeLevel:1,castType:'SPIRIT_'+(f.sky?'SKY':'DIRECT'),field:f,state:'FIELD',sourceSpirit:f.spirit});if(r.valid)return {id:f.fieldId,sky:f.sky,source:f.spell,result:r,field:f};}for(const a of arrows){if(!a.alive||a.owner===i||!a.special)continue;const r=resolveCounterAstra({sourceAstraId:a.spell,counterAstraId:key,state:'PROJECTILE',chargeLevel:1,castType});if(r.valid)return {id:a.castId,sky:false,source:a.spell,result:r};}return null;}
function counterRecommended(hero,enemy){return (COUNTER_POOLS[COUNTER_HERO_IDS[hero]]||[]).map(id=>({id,score:(LOADOUTS[enemy]||[]).filter(source=>!ASTRAS[source].isUltimate&&['PROJECTILE','FIELD'].some(state=>resolveCounterAstra({sourceAstraId:source,counterAstraId:id,state,chargeLevel:1,castType:'SPIRIT_SKY',sourceTags:state==='FIELD'?ASTRA_FIELDS[ASTRA_PHASES[source].fieldEffectId].tags:undefined}).valid)).length})).sort((a,b)=>b.score-a.score);}
function counterAI(){if(mode!=='ai'||ruleSet!=='arcade'||ultimate)return false;const p=players[1],c=p.counter;if(!c||counterReason(1))return false;if(counterEquipped(p)&&p.armed){p.aiCharge=true;setChargeIntent(1,true);if(p.astraReady){shoot(1);stopCharge(1);}return true;}const o=counterOpportunity(1);if(!o)return false;if(c.aiNotice!==o.id){c.aiNotice=o.id;c.aiSince=elapsed;c.aiAttempted=false;return false;}if(c.aiAttempted||elapsed-c.aiSince<COUNTER_CONFIG.aiDelay[(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)]||p.cool>0)return false;c.aiAttempted=true;if(Math.random()>COUNTER_CONFIG.aiAccuracy[(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)])return false;armCounterAstra(1);p.skyMode=o.sky;aims[1]={angle:o.sky?75:42,power:.8};p.aiCharge=true;setChargeIntent(1,true);return true;}
function validateCounterLoadouts(){const errors=[];for(const [hero,pool]of Object.entries(COUNTER_POOLS)){if(pool.length<3||pool.length>6||new Set(pool).size!==pool.length)errors.push(hero+': invalid pool');for(const id of pool){const a=AstraCodex.get(id);if(!a||!a.isCounterEligible||a.isUltimate||!a.counterEligibleCharacters.includes(hero))errors.push(hero+': invalid '+id);if(a&&!AstraCodex.counters(id).some(r=>r.status==='CURRENT'))errors.push(id+': missing relationship');}}return {valid:!errors.length,errors};}
function counterMatchLoadout(i){const p=players[i];return {characterId:COUNTER_HERO_IDS[p.id],signatureAstraIds:[...p.loadout],counterAstraId:p.counter?.astraId||null,ultimateId:p.loadout.find(id=>ASTRAS[id].tier===2)||null,counterUsesRemaining:p.counter?.uses||0};}
function counterTick(){for(let i=0;i<2;i++){const p=players[i];if(counterReason(i))continue;const o=counterOpportunity(i);if(o&&p.counter.promptId!==o.id){p.counter.promptId=o.id;astraEmit('CounterReady',i,{sourceAstraId:o.source});}}}


// astra-stability
'use strict';
// Simulation-only state lives on players/projectiles/fields and is captured by rollback.
const ASTRA_STABILITY={classes:{FRAGILE:{max:70,recovery:15},NORMAL:{max:100,recovery:12},STABLE:{max:125,recovery:10},VERY_STABLE:{max:150,recovery:8}},recoveryDelay:.65,borrowedAffinity:.95,shieldPressure:.5,hit:{normal:10,charged:30,special:40,counter:55},zone:{low:.7,body:1,head:1.6,precision:1.6},perfect:2,critical:1.15,elementBonus:1.25,reinforcementAt:.85,reinforcementReduction:.3,hardLockAt:.9,interruption:[.6,.75,.95],movementRecovery:.85,damagedRecovery:.8,criticalRecovery:.7,stages:[{min:1,name:'FULL',damage:1,radius:1,duration:1,dot:1,force:1,cooldown:1,control:5},{min:.75,name:'EMPOWERED',damage:.85,radius:.85,duration:.8,dot:.8,force:.85,cooldown:.95,control:4},{min:.5,name:'PARTIAL',damage:.65,radius:.65,duration:.5,dot:.6,force:.65,cooldown:.8,control:2},{min:.25,name:'MINOR',damage:.45,radius:.5,duration:.3,dot:.4,force:.4,cooldown:.65,control:1}]};
const ASTRA_STABILITY_CLASSES={indra_storm:'NORMAL',gandiva_gale:'STABLE',pashupata:'VERY_STABLE',solar_shaft:'NORMAL',naga:'FRAGILE',shakti:'VERY_STABLE',ganga:'VERY_STABLE',kuru_storm:'NORMAL',prabhasa:'STABLE',agni:'NORMAL',brahma:'VERY_STABLE',acharya:'STABLE',chakra:'FRAGILE',raudh:'STABLE',saubhadra:'NORMAL',raudra:'NORMAL',narayana:'VERY_STABLE',brahmashira:'VERY_STABLE',vrishni:'STABLE',satyaki_tide:'NORMAL',yuyudhana:'NORMAL',forest_fang:'STABLE',nishada:'NORMAL',aranya:'STABLE',garuda_ward:'STABLE'};
for(const [id,c]of Object.entries(ASTRA_PHASES)){c.stabilityClass=ASTRA_STABILITY_CLASSES[id]||'NORMAL';ASTRAS[id].stabilityClass=c.stabilityClass;}
Object.assign(ASTRA_AUDIO,{StabilityHit:[210,.05,'triangle'],StabilityCrack:[140,.09,'triangle'],StabilityCritical:[95,.12,'triangle'],AstraInterrupted:[65,.25,'triangle'],PartialReleased:[300,.12,'sine'],FullReleased:[440,.12,'sine'],FinalFormation:[680,.1,'sine']});
function stabilityEligible(i){return !!astraConfig(i)&&ASTRAS[players[i].selected]?.tier!==2;}
function stabilityActive(i){const p=players[i];return p.charging&&p.armed&&p.stability?.active&&p.stability.astraId===p.selected&&stabilityEligible(i);}
function stabilityRatio(i){const p=players[i],c=astraConfig(i);return c?Math.max(0,Math.min(1,(p.astraCharge||0)/c.spiritChargeTime)):0;}
function stabilityState(value,max){const t=value/max;return t<=0?'BROKEN':t<.25?'CRITICAL':t<.5?'UNSTABLE':t<.75?'SHAKING':'STABLE';}
function stabilityEvent(i,type,data={}){const s=players[i].stability;astraEmit(type,i,{castId:s?.castId,spell:s?.astraId,stateVersion:s?.stateVersion||1,authoritativeTimestamp:elapsed,...data});}
function stabilityStart(i){const p=players[i],c=astraConfig(i);if(!c)return;const klass=ASTRA_STABILITY.classes[c.stabilityClass],borrowed=typeof counterEquipped==='function'&&counterEquipped(p)&&c.ownerCharacter!==p.id,max=klass.max*(borrowed?ASTRA_STABILITY.borrowedAffinity:1)*(bowRetaliation(i)?1.2:1);p.stabilitySerial=(p.stabilitySerial||0)+1;p.stability={astraId:p.selected,castId:round+':charge:'+i+':'+p.stabilitySerial,max,current:max,class:c.stabilityClass,state:'STABLE',active:ASTRAS[p.selected].tier!==2,stateVersion:1,startedAt:elapsed,lastDamageAt:-100,lastCueAt:-100,lastSource:null,seen:[],formation:0};stabilityEvent(i,'ChargeStarted');}
function stabilityStop(i){if(players[i].stability)players[i].stability.active=false;}
function stabilityTick(i,dt){if(!stabilityActive(i))return;const p=players[i],s=p.stability,progress=stabilityRatio(i);if(elapsed-s.lastDamageAt>=ASTRA_STABILITY.recoveryDelay){let rate=ASTRA_STABILITY.classes[s.class].recovery;if(Math.abs((p.moveGoal||p.x)-p.x)>2||Math.abs(p.knockVelocity||0)>15)rate*=ASTRA_STABILITY.movementRecovery;if(p.equipment?.wheel>0||p.equipment?.bow>0)rate*=ASTRA_STABILITY.damagedRecovery;if(p.dismounted||p.fate?.chariot==='DESTROYED')rate*=ASTRA_STABILITY.criticalRecovery;s.current=Math.min(s.max,s.current+rate*dt);}const state=stabilityState(s.current,s.max);if(state!==s.state){s.state=state;s.stateVersion++;stabilityEvent(i,'StabilityStateChanged',{state});}const formation=progress>=.9?2:progress>=.75?1:0;if(formation>s.formation){s.formation=formation;stabilityEvent(i,'FinalFormation',{progress});}}
function stabilityInterrupt(i){if(!stabilityActive(i))return false;const p=players[i],s=p.stability,progress=stabilityRatio(i),recovery=ASTRA_STABILITY.interruption[progress>=.85?2:progress>=.5?1:0];s.current=0;s.state='BROKEN';s.stateVersion++;s.active=false;s.interruptedAt=elapsed;p.focusRecoveryUntil=elapsed+recovery;p.stabilityRequireRelease=true;p.cool=Math.max(p.cool,recovery);stabilityEvent(i,'AstraInterrupted',{progress,recovery});if(typeof astraSpiritImpact==='function')astraSpiritImpact({special:true,spell:p.selected,owner:i,castId:s.castId,projectileId:s.castId+':collapse',spiritCast:false},p.x,p.y-55,'interrupted');stopCharge(i);p.astraChargeState='INTERRUPTED';return true;}
function stabilityCounter(source,target){if(!source?.spell||ASTRAS[source.spell]?.tier===2||ASTRAS[target]?.tier===2)return false;const c=ASTRA_PHASES[target];if(!c)return false;if(typeof resolveCounterAstra==='function'&&typeof AstraCodex!=='undefined'){return ['PROJECTILE','FIELD'].some(state=>resolveCounterAstra({sourceAstraId:target,counterAstraId:source.spell,sourceTags:ASTRA_FIELDS[c.fieldEffectId].tags,chargeLevel:source.spiritPower??(source.spiritCast?1:0),castType:source.castType||'NORMAL_DIRECT',state,sourceSpirit:true}).valid);}const tags=ASTRA_PHASES[source.spell]?.counterTags||[];return ASTRA_INTERACTIONS.some(r=>ASTRA_FIELDS[c.fieldEffectId].tags.includes(r.field)&&tags.includes(r.counter));}
function ApplyAstraStabilityDamage({targetPlayerId,targetAstraId,sourcePlayerId,sourceAttackId,amount,damageType='normal',hitZone='body',elementalTags=[],eventId}){const i=targetPlayerId,p=players[i];if(!p||!stabilityActive(i)||targetAstraId&&p.selected!==targetAstraId||!Number.isFinite(amount)||amount<=0||!eventId)return false;const s=p.stability;if(s.seen.includes(eventId))return false;s.seen.push(eventId);if(s.seen.length>64)s.seen.shift();const reinforced=['pashupata','brahmashira','brahma','shakti'].includes(p.selected)&&stabilityRatio(i)>=ASTRA_STABILITY.reinforcementAt;amount*=reinforced?1-ASTRA_STABILITY.reinforcementReduction:1;if(bowRetaliation(i)&&damageType==='normal')amount*=.65;if(bowOpen(i)&&damageType==='charged')amount*=1.35;s.current=Math.max(0,s.current-amount);s.lastDamageAt=elapsed;s.lastSource={sourcePlayerId,sourceAttackId,damageType,hitZone,elementalTags};s.stateVersion++;const old=s.state;s.state=stabilityState(s.current,s.max);stabilityEvent(i,'StabilityDamaged',{eventId,amount,remaining:s.current,source:s.lastSource});if(s.current===0)return stabilityInterrupt(i);if(old!==s.state)stabilityEvent(i,'StabilityStateChanged',{state:s.state});if(elapsed-s.lastCueAt>.25){s.lastCueAt=elapsed;stabilityEvent(i,s.state==='CRITICAL'?'StabilityCritical':old!==s.state?'StabilityCrack':'StabilityHit');}return true;}
function stabilityHit(i,owner,a,shielded=false){if(!(a.projectileId||a.castId||a.special||a.spirit||a.hitZone)||!stabilityActive(i)||a.dot||a.execution||a.ultimateFraction||a.special&&ASTRAS[a.spell]?.tier===2)return false;const valid=stabilityCounter(a,players[i].selected),type=valid&&a.counterSlot?'counter':a.special?'special':a.spirit?'charged':'normal',zone=a.hitZone||'body';let amount=ASTRA_STABILITY.hit[type]*(ASTRA_STABILITY.zone[zone]||1)*(a.stabilityDamage||1)*(a.arrowTypeId==='arrow_shilimukha'&&['head','bow','quiver'].includes(zone)?1.4:1);if(a.perfect)amount*=ASTRA_STABILITY.perfect;else if(a.critical)amount*=ASTRA_STABILITY.critical;if(valid)amount*=ASTRA_STABILITY.elementBonus;if(shielded)amount*=ASTRA_STABILITY.shieldPressure;else if(players[i].astraShield>0)players[i].astraShield=Math.max(0,players[i].astraShield-(a.special?4:a.spirit?2:1));const id=a.projectileId||[a.castId,owner,a.x,a.y,a.age].join(':');return ApplyAstraStabilityDamage({targetPlayerId:i,targetAstraId:players[i].selected,sourcePlayerId:owner,sourceAttackId:id,amount,damageType:type,hitZone:zone,elementalTags:ASTRA_PHASES[a.spell]?.counterTags||[],eventId:players[i].stability.castId+':hit:'+id});}
function stabilityRelease(i){const p=players[i];if(!stabilityEligible(i))return null;const power=p.charging?stabilityRatio(i):p.focus>=1.5?1:0;if(!p.charging&&power<1)return null;const stage=ASTRA_STABILITY.stages.find(s=>power>=s.min);return stage?{...stage,power}:null;}
function stabilityReleaseAllowed(i,special){const p=players[i];if(p.stabilityRequireRelease||elapsed<(p.focusRecoveryUntil||0))return false;if(!special||!stabilityEligible(i))return true;if(p.charging&&stabilityRatio(i)<.25){stopCharge(i);p.cool=Math.max(p.cool,.2);return false;}return true;}
function stabilityDecorate(a,i){const r=stabilityRelease(i);if(!r||ASTRAS[a.spell]?.tier===2)return;a.spiritPower=r.power;a.releaseStage=r.name;a.partialSpirit=r.power<1;a.releaseScaling=r;a.stabilityCastId=players[i].stability?.castId||a.castId;a.damage*=r.damage;}
function stabilityScaleField(f,a){const r=a.releaseScaling;if(!r||f.ultimate)return;f.spiritPower=r.power;f.releaseStage=r.name;f.radius*=r.radius;f.duration*=r.duration;f.damage*=r.dot;f.push*=r.force;f.pull*=r.force;f.drift*=r.force;f.containment*=r.force;if(r.power<ASTRA_STABILITY.hardLockAt){f.lock=0;f.control=Math.min(f.control,r.control);if(r.control<3)f.blocks=ASTRA_BLOCK.none;}f.stateVersion++;}
function stabilityAfterRelease(i,c,castId){const p=players[i],r=stabilityRelease(i);if(!r)return;p.cool*=r.cooldown;stabilityEvent(i,r.power>=1?'FullReleased':'PartialReleased',{projectileCastId:castId,power:r.power,stage:r.name});}
// Reaction-delayed decisions use only visible current charge, health and hazards.
function stabilityAI(){if(mode!=='ai'||ruleSet!=='arcade'||ultimate||ended||!started)return false;const p=players[1],e=players[0],ai=astraState.ai;if(p.stabilityRequireRelease){setChargeIntent(1,false);return true;}if(stabilityActive(1)&&p.stability.current/p.stability.max<.35&&stabilityRatio(1)>=.25){shoot(1);return true;}if(p.stabilityAIAction==='charged'){if(!p.charging){p.stabilityAIAction=null;return false;}p.aiCharge=true;if(p.focus>=1.5){shoot(1,false);p.stabilityAIAction=null;}return true;}if(!stabilityActive(0)||astraState.fields.some(f=>astraAffects(f,1)))return false;const notice='pressure:'+e.stability.castId;if(ai.pressureNotice!==notice){ai.pressureNotice=notice;ai.pressureSince=elapsed;return false;}if(elapsed-ai.pressureSince<ASTRA_GLOBAL.aiReaction[options.difficulty]||p.cool>0||p.charging)return false;const ratio=e.stability.current/e.stability.max,progress=stabilityRatio(0);if(p.resolve>=90&&p.hp<p.maxHp*.35)return false;const useCounter=typeof counterReason==='function'&&!counterReason(1)&&stabilityCounter({spell:p.counter.astraId},e.selected)&&(p.id%2===0||ratio<.4)&&progress<.9;
 if(useCounter)armCounterAstra(1);else{p.armed=false;p.skyMode=false;}
 const angle=options.difficulty==='hard'?25:32,dist=Math.abs(p.x-e.x)-64,speed=Math.sqrt(Math.max(1,dist)*G/Math.sin(2*angle*Math.PI/180)),boost=useCounter?ASTRAS[p.selected].speed:1;aims[1]={angle,power:Math.max(.05,Math.min(1,(speed/(p.speed*boost)-420)/440))};
 if(useCounter){shoot(1);return true;}if(options.difficulty!=='easy'&&(ratio>.3||p.id%2)){if(setChargeIntent(1,true)){p.aiCharge=true;p.stabilityAIAction='charged';}return true;}shoot(1,false);return true;}


// astra-spirit-config
'use strict';
// Padded runtime atlases; rebuild with scripts/remap-astra-spirits.py.
const ASTRA_SPIRITS=Object.freeze({
  "indra_storm": {
    "astraId": "indra_storm",
    "assetId": "aindrastra",
    "imagePath": "effects/astra-remapped/aindrastra_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/aindrastra_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "thunder",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "gandiva_gale": {
    "astraId": "gandiva_gale",
    "assetId": "gandiva_gale",
    "imagePath": "effects/astra-remapped/gandiva_gale_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/gandiva_gale_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "wind",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "pashupata": {
    "astraId": "pashupata",
    "assetId": "pashupata_radiance",
    "imagePath": "effects/astra-remapped/pashupata_radiance_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/pashupata_radiance_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "divine",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "solar_shaft": {
    "astraId": "solar_shaft",
    "assetId": "surya_shaft",
    "imagePath": "effects/astra-remapped/surya_shaft_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/surya_shaft_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "fire",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "naga": {
    "astraId": "naga",
    "assetId": "nagastra",
    "imagePath": "effects/astra-remapped/nagastra_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/nagastra_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "serpent",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "shakti": {
    "astraId": "shakti",
    "assetId": "vasavi_shakti",
    "imagePath": "effects/astra-remapped/vasavi_shakti_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/vasavi_shakti_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "thunder",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "ganga": {
    "astraId": "ganga",
    "assetId": "gangas_guard",
    "imagePath": "effects/astra-remapped/gangas_guard_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/gangas_guard_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "water",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "kuru_storm": {
    "astraId": "kuru_storm",
    "assetId": "kuru_thunder",
    "imagePath": "effects/astra-remapped/kuru_thunder_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/kuru_thunder_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "thunder",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "prabhasa": {
    "astraId": "prabhasa",
    "assetId": "prabhasa_radiance",
    "imagePath": "effects/astra-remapped/prabhasa_radiance_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/prabhasa_radiance_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "divine",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "agni": {
    "astraId": "agni",
    "assetId": "agneya_astra",
    "imagePath": "effects/astra-remapped/agneya_astra_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/agneya_astra_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "fire",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "brahma": {
    "astraId": "brahma",
    "assetId": "brahmastra",
    "imagePath": "effects/astra-remapped/brahmastra_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/brahmastra_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "cataclysmic",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "acharya": {
    "astraId": "acharya",
    "assetId": "acharyas_judgment",
    "imagePath": "effects/astra-remapped/acharyas_judgment_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/acharyas_judgment_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "divine",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "chakra": {
    "astraId": "chakra",
    "assetId": "chakra_volley",
    "imagePath": "effects/astra-remapped/chakra_volley_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/chakra_volley_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "storm",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "raudh": {
    "astraId": "raudh",
    "assetId": "rudra_rush",
    "imagePath": "effects/astra-remapped/rudra_rush_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/rudra_rush_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "fire",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "saubhadra": {
    "astraId": "saubhadra",
    "assetId": "subhadra_tempest",
    "imagePath": "effects/astra-remapped/subhadra_tempest_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/subhadra_tempest_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "storm",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "raudra": {
    "astraId": "raudra",
    "assetId": "rudra_ember",
    "imagePath": "effects/astra-remapped/rudra_ember_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/rudra_ember_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "fire",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "narayana": {
    "astraId": "narayana",
    "assetId": "narayana_burst",
    "imagePath": "effects/astra-remapped/narayana_burst_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/narayana_burst_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "divine",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "brahmashira": {
    "astraId": "brahmashira",
    "assetId": "brahmashira",
    "imagePath": "effects/astra-remapped/brahmashira_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/brahmashira_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "cataclysmic",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "vrishni": {
    "astraId": "vrishni",
    "assetId": "vrishni_wind",
    "imagePath": "effects/astra-remapped/vrishni_wind_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/vrishni_wind_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "wind",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "satyaki_tide": {
    "astraId": "satyaki_tide",
    "assetId": "varunas_tide",
    "imagePath": "effects/astra-remapped/varunas_tide_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/varunas_tide_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "water",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "yuyudhana": {
    "astraId": "yuyudhana",
    "assetId": "yuyudhana_storm",
    "imagePath": "effects/astra-remapped/yuyudhana_storm_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/yuyudhana_storm_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "storm",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "forest_fang": {
    "astraId": "forest_fang",
    "assetId": "forest_fang",
    "imagePath": "effects/astra-remapped/forest_fang_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/forest_fang_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "forest",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "nishada": {
    "astraId": "nishada",
    "assetId": "nishada_flame",
    "imagePath": "effects/astra-remapped/nishada_flame_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/nishada_flame_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "forest_fire",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  },
  "aranya": {
    "astraId": "aranya",
    "assetId": "aranya_cyclone",
    "imagePath": "effects/astra-remapped/aranya_cyclone_spirit_sheet.png",
    "iconPath": "effects/astra-remapped/aranya_cyclone_spirit_sheet.png",
    "frameWidth": 384,
    "frameHeight": 256,
    "frameCount": 16,
    "summonFrames": [
      0,
      2
    ],
    "chargeFrames": [
      0,
      5
    ],
    "flightFrames": [
      6,
      9
    ],
    "impactFrames": [
      10,
      15
    ],
    "fps": 16,
    "loopFlight": false,
    "scale": 0.65,
    "pivot": [
      0.78125,
      0.5
    ],
    "rotationOffset": 0,
    "blendMode": "source-over",
    "family": "wind",
    "frameRects": [
      [
        0,
        0,
        384,
        256
      ],
      [
        384,
        0,
        384,
        256
      ],
      [
        768,
        0,
        384,
        256
      ],
      [
        1152,
        0,
        384,
        256
      ],
      [
        0,
        256,
        384,
        256
      ],
      [
        384,
        256,
        384,
        256
      ],
      [
        768,
        256,
        384,
        256
      ],
      [
        1152,
        256,
        384,
        256
      ],
      [
        0,
        512,
        384,
        256
      ],
      [
        384,
        512,
        384,
        256
      ],
      [
        768,
        512,
        384,
        256
      ],
      [
        1152,
        512,
        384,
        256
      ],
      [
        0,
        768,
        384,
        256
      ],
      [
        384,
        768,
        384,
        256
      ],
      [
        768,
        768,
        384,
        256
      ],
      [
        1152,
        768,
        384,
        256
      ]
    ],
    "sheetWidth": 1536,
    "sheetHeight": 1024,
    "iconRect": [
      36,
      296,
      280,
      176
    ],
    "frameSizes": [
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ],
      [
        384,
        256
      ]
    ],
    "frameOffsets": [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "impactPivot": [
      0.5,
      0.78
    ],
    "stableFlight": true,
    "impactScale": 2.4
  }
});
function astraSpiritImpact(a,x,y,kind){if(!a?.special||!ASTRA_SPIRITS[a.spell]||a.spiritImpactDone)return;a.spiritImpactDone=true;astraEmit('SpriteImpact',a.owner,{spell:a.spell,castId:a.castId,projectileId:a.projectileId||a.castId,kind,x,y,spirit:!!a.spiritCast,stateVersion:1});}
function astraSpiritClash(a,b,kind){const dx=(a.x-a.px)-(b.x-b.px),dy=(a.y-a.py)-(b.y-b.py),den=dx*dx+dy*dy,t=den?Math.max(0,Math.min(1,-((a.px-b.px)*dx+(a.py-b.py)*dy)/den)):1,x=(a.px+(a.x-a.px)*t+b.px+(b.x-b.px)*t)/2,y=(a.py+(a.y-a.py)*t+b.py+(b.y-b.py)*t)/2;for(const p of [a,b])if(!p.alive)astraSpiritImpact(p,x,y,kind);}

// Reuse the ready frame for collection/HUD art without modifying the uploaded PNG.
function astraSpiritIconHTML(id){const c=ASTRA_SPIRITS[id],[x,y,w,h]=c.iconRect;return '<span aria-hidden="true" style="display:inline-block;width:48px;height:30px;background-image:url('+c.imagePath+');background-size:'+(c.sheetWidth/w*100)+'% '+(c.sheetHeight/h*100)+'%;background-position:'+(x/(c.sheetWidth-w)*100)+'% '+(y/(c.sheetHeight-h)*100)+'%;background-repeat:no-repeat"></span>';}


// combat-stamina
"use strict";
// All combat resource state belongs to players, and is captured by rollback.
const STAMINA_BALANCE=Object.freeze({max:100,regen:12,delay:1.2,spirit:28,tiers:[25,45,65],counter:20,chargeDrain:8,skyDrain:18,shieldHit:9,bowDamage:6});
function staminaValue(p){return Number.isFinite(p.stamina)?p.stamina:100;}
function staminaCost(i,special=true){const p=players[i];if(!special&&typeof quiverTactical==='function'&&quiverTactical(i))return quiverDefinition(i).category==='TACTICAL_POWER_ARROW'?10:0;if(!special)return p.focus>=ARROW_BALANCE.focus?STAMINA_BALANCE.spirit:0;const a=ASTRAS[p.selected];return typeof counterEquipped==='function'&&counterEquipped(p)?STAMINA_BALANCE.counter:(STAMINA_BALANCE.tiers[a.tier]||25);}
function staminaReason(i,a){const p=players[i],cost=typeof counterEquipped==='function'&&p.counter?.astraId===a.id?20:(STAMINA_BALANCE.tiers[a.tier]||25);return staminaValue(p)+1e-6<cost?'NEED '+cost+' STAMINA':'';}
function staminaSpend(i,cost){const p=players[i];p.stamina=Math.max(0,staminaValue(p)-cost);if(cost>0)p.staminaDelay=STAMINA_BALANCE.delay;}
function staminaChargeAllowed(i){if(typeof quiverTactical==='function'&&quiverTactical(i))return staminaValue(players[i])>=staminaCost(i,false);return staminaValue(players[i])>= (players[i].armed?staminaCost(i):STAMINA_BALANCE.spirit)+1;}
function staminaTick(dt){players.forEach((p,i)=>{if(rageReady(i)&&!p.staminaRageFilled){p.staminaRageFilled=true;p.stamina=100;p.staminaDelay=0;}if(p.charging&&!(typeof quiverTactical==='function'&&quiverTactical(i))){staminaSpend(i,dt*(p.skyFire?STAMINA_BALANCE.skyDrain:STAMINA_BALANCE.chargeDrain));if(!staminaChargeAllowed(i)){stopCharge(i);p.chargeRest=.6;p.stabilityRequireRelease=true;}}else{p.staminaDelay=Math.max(0,(p.staminaDelay||0)-dt);if(!p.staminaDelay)p.stamina=Math.min(100,staminaValue(p)+dt*STAMINA_BALANCE.regen);}});}
function staminaShieldHit(i){staminaSpend(i,STAMINA_BALANCE.shieldHit);if(!staminaChargeAllowed(i)){stopCharge(i);players[i].chargeRest=.6;players[i].stabilityRequireRelease=true;}}
// A finisher is eligible only after the defender's survival sequence is exhausted.
function finisherPassivesExhausted(i){
 const u=typeof balanceUnit==='function'?balanceUnit(i):null;if(!u)return true;
 if(u.data.transitionUntil>fateController.state.clock||u.data.dodgeUntil>fateController.state.clock)return false;
 switch(u.hero){
 case 0:return !!fateController.state.consumed[i+':krishna']&&u.phase==='NORMAL';
 case 1:return !!u.used.wheel&&u.phase==='NORMAL';
 case 2:return !!u.used.stand&&u.phase!=='FINAL_STAND'&&u.phase!=='DEAD';
 case 4:return !!u.used.last&&u.data.weapon==='WHEEL'&&!u.data.breakPending;
 case 5:return !!u.used.mani&&u.phase==='CURSED';
 default:return u.phase!=='DEAD';
 }
}
function finisherArrowLethal(i,a){
 const p=players[i];if(!a.alive||a.owner===i||a.duel||a.rainDelay>0||a.groundCast||!a.vx)return false;
 const t=(p.x-a.x)/a.vx;if(t<=0||t>.4)return false;
 const y=a.y+a.vy*t+.5*G*t*t;
 let damage=a.damage;if(a.special){if(Math.abs(y-(p.y-40))>65)return false;}
 else {const c=arrowContact({...a,px:a.x,py:a.y,x:p.x,y},i);if(!c||c.equipment||chargingShield(i,a))return false;damage*=HIT_BALANCE.damage[c.zone]||1;}
 if(p.shield>0&&!a.ultimateFraction){const piercing=a.special&&(ASTRAS[a.spell]?.tier===2||['solar','thunder'].includes(a.element)||players[a.owner].id===1);damage*=piercing?.65:p.id===2?.1:.25;}
 const m=fateMod(i,a);if(!a.ultimateFraction){damage*=m.incoming;if(a.critical)damage*=m.criticalResistance??1;}
 return damage>=p.hp;
}
function finalShotScale(dt){let slow=false;players.forEach((p,i)=>{if(!p.finalSlowUsed&&p.hp>0&&finisherPassivesExhausted(i)&&arrows.some(a=>finisherArrowLethal(i,a))){p.finalSlowUsed=true;p.finalSlowTime=.65;}if(p.finalSlowTime>0){slow=true;p.finalSlowTime=Math.max(0,p.finalSlowTime-dt);}});return slow?.3:1;}

// Match totals are simulation state, including their round deduplication marker.
let battleStats={roundDamage:[0,0],rounds:[]};
function resetBattleStats(){if(round===1&&score.every(n=>n===0))battleStats.rounds=[];battleStats.roundDamage=[0,0];}
function recordBattleDamage(owner,amount){if(owner===0||owner===1)battleStats.roundDamage[owner]+=Math.max(0,amount);}
function recordBattleRound(win){if(battleStats.rounds.some(r=>r.round===round))return;battleStats.rounds.push({round,win,heroes:players.map(p=>p.id),shots:[...shots],hits:[...hits],damage:[...battleStats.roundDamage],clashes,seconds:elapsed});}


// quiver-config
'use strict';
// Shared PhysicalArrowDefinition data. Build copies this unchanged into the referee.
const QUIVER_VERSION=1,QUIVER_STANDARD='arrow_gopuccha';
const QUIVER_BASE={category:'PHYSICAL_ARROW',weightClass:'STRI_BANA',arrowheadClass:'point',damageMultiplier:1,projectileSpeedMultiplier:1,drawTimeMultiplier:1,accuracyMultiplier:1,gravityMultiplier:1,armorPenetration:.18,staggerPower:1,criticalChanceModifier:0,criticalDamageModifier:1,headshotModifier:1,equipmentDamage:1,bowDamage:1,chariotDamage:1,horseHarnessDamage:1,stabilityDamage:1,shieldDamage:1,bleedDamage:0,bleedDuration:0,effectiveRangeMin:0,effectiveRangeMax:1400,ammoPerRound:5,isUnlimited:false,cooldown:.5,allowedCharacters:[0,1,2,3,4,5,6,7],VFX:'physical',trailVFX:'subtle',impactVFX:'metal',SFX:260,aiUsageTags:[]};
function physicalArrow(id,displayName,asset,description,values={}){return Object.freeze({...QUIVER_BASE,id,displayName,asset:'quiver-art/'+asset,description,...values});}
const PhysicalArrowDefinition=Object.freeze({
 arrow_gopuccha:physicalArrow('arrow_gopuccha','Gopuccha','01_Gopuccha_Balanced_Arrow.png','Balanced archery. Unlimited arrows; overdraw still forms Spirit arrows.',{isUnlimited:true,ammoPerRound:0,cooldown:0,aiUsageTags:['general']}),
 arrow_naracha:physicalArrow('arrow_naracha','Naracha','02_Naracha_Heavy_Penetrator.png','Heavy armor and chariot pressure. Slower draw and flight.',{weightClass:'PUM_BANA',damageMultiplier:1.5,projectileSpeedMultiplier:.85,drawTimeMultiplier:1.25,accuracyMultiplier:.92,armorPenetration:.65,staggerPower:1.4,criticalChanceModifier:-.04,chariotDamage:1.5,stabilityDamage:1.65,shieldDamage:1.6,ammoPerRound:4,cooldown:1.1,SFX:150,aiUsageTags:['armor','charge','structure']}),
 arrow_shilimukha:physicalArrow('arrow_shilimukha','Shilimukha','03_Shilimukha_Precision_Piercer.png','Fast precision piercer. Strong headshots; weaker body impact.',{damageMultiplier:1.125,projectileSpeedMultiplier:1.2,drawTimeMultiplier:.95,accuracyMultiplier:1.25,armorPenetration:.45,staggerPower:.65,criticalChanceModifier:.08,headshotModifier:1.3,equipmentDamage:1.25,stabilityDamage:1.1,ammoPerRound:5,SFX:740,aiUsageTags:['range','precision']}),
 arrow_ardhachandra:physicalArrow('arrow_ardhachandra','Ardhachandra','04_Ardhachandra_Crescent_Arrow.png','Crescent equipment cutter. Disrupts bow draw and harness; low armor penetration.',{arrowheadClass:'crescent',damageMultiplier:.8,projectileSpeedMultiplier:.95,armorPenetration:.05,equipmentDamage:2,bowDamage:2,horseHarnessDamage:1.8,stabilityDamage:1.15,ammoPerRound:4,SFX:480,aiUsageTags:['equipment','harness']}),
 arrow_vatsadanta:physicalArrow('arrow_vatsadanta','Vatsadanta','05_Vatsadanta_Disruption_Arrow.png','Disrupts bow accuracy and perfect release. Low health damage.',{arrowheadClass:'tooth',damageMultiplier:.75,projectileSpeedMultiplier:1.05,accuracyMultiplier:1.15,armorPenetration:.1,equipmentDamage:2.2,bowDamage:2.2,stabilityDamage:1.15,ammoPerRound:4,SFX:580,aiUsageTags:['equipment']}),
 arrow_karnika:physicalArrow('arrow_karnika','Karnika','06_Karnika_Barbed_Arrow.png','Barbed pressure: 4 damage over 4 seconds. Lower direct damage; does not stack.',{arrowheadClass:'barbed',damageMultiplier:.8,projectileSpeedMultiplier:.95,armorPenetration:.12,bleedDamage:1,bleedDuration:4,stabilityDamage:.9,ammoPerRound:5,SFX:190,aiUsageTags:['pressure']}),
 arrow_vaitamhika:physicalArrow('arrow_vaitamhika','Vaitamhika','07_Vaitamhika_Quickshot_Arrow.png','Elite quickshot. Fast draw and critical potential; loses precision beyond 800 units.',{damageMultiplier:.95,projectileSpeedMultiplier:1.3,drawTimeMultiplier:.7,accuracyMultiplier:1.2,criticalChanceModifier:.1,criticalDamageModifier:1.08,effectiveRangeMax:800,stabilityDamage:1.3,ammoPerRound:4,cooldown:.28,allowedCharacters:[0,4,6],SFX:870,aiUsageTags:['close']}),
 power_arrow_rapid:physicalArrow('power_arrow_rapid','Rapid Volley','01_Gopuccha_Balanced_Arrow.png','Three successive arrows, 50% damage each. Increasing spread; one bundle per use.',{category:'TACTICAL_POWER_ARROW',damageMultiplier:.5,accuracyMultiplier:.8,stabilityDamage:.7,ammoPerRound:2,cooldown:3,SFX:390,aiUsageTags:['close','charge']}),
 power_arrow_fire_pot:physicalArrow('power_arrow_fire_pot','Fire-Pot','08_Fire_Pot_Bomb_Arrow.png','Small blast and a 3-second burning patch. Slow flight; two shots.',{category:'TACTICAL_POWER_ARROW',weightClass:'PUM_BANA',damageMultiplier:.9,projectileSpeedMultiplier:.78,drawTimeMultiplier:1.35,accuracyMultiplier:.9,chariotDamage:1.5,stabilityDamage:1.5,ammoPerRound:2,cooldown:4,SFX:110,VFX:'fire',aiUsageTags:['structure']}),
 power_arrow_flare:physicalArrow('power_arrow_flare','Flare','09_Flare_Arrow.png','Illuminates a small area for 4 seconds through mist and steam. Very low damage.',{category:'TACTICAL_POWER_ARROW',damageMultiplier:.1,stabilityDamage:.2,ammoPerRound:2,cooldown:5,SFX:1000,VFX:'light',aiUsageTags:['visibility']}),
 power_arrow_guard:physicalArrow('power_arrow_guard','Guard Arrow','10_Guard_Arrow.png','A 1.2-second physical projectile ward on release. Cannot block Astras or Spirit arrows.',{category:'TACTICAL_POWER_ARROW',damageMultiplier:.2,stabilityDamage:.2,ammoPerRound:1,cooldown:6,SFX:1200,VFX:'guard',aiUsageTags:['defense']})
});
const ArrowProficiencyModifier=Object.freeze({
 0:{arrow_shilimukha:{accuracy:1.1,velocity:1.05},arrow_vaitamhika:{drawSpeed:1.1,accuracy:1.05},power_arrow_rapid:{accuracy:1.1}},
 1:{arrow_naracha:{damage:1.1,equipmentDamage:1.1}},
 2:{arrow_naracha:{damage:1.1,stabilityDamage:1.1},arrow_gopuccha:{damage:1.05}},
 3:{arrow_ardhachandra:{equipmentDamage:1.15},arrow_vatsadanta:{equipmentDamage:1.1,accuracy:1.05}},
 4:{arrow_vaitamhika:{damage:1.05,drawSpeed:1.1},power_arrow_rapid:{drawSpeed:1.1}},
 5:{arrow_karnika:{damage:1.1},arrow_naracha:{stabilityDamage:1.1}},
 6:{arrow_gopuccha:{drawSpeed:1.08},power_arrow_rapid:{accuracy:1.08},arrow_vaitamhika:{velocity:1.05,drawSpeed:1.05}},
 7:{arrow_shilimukha:{accuracy:1.15,stabilityDamage:1.1}}
});
const QUIVER_LORE_HOOKS=Object.freeze({anjalika:{category:'LORE_SIGNATURE_SPECIAL',allowedCharacters:[0],sharedQuiver:false},training:{weightClass:'NAPUMSAKA_BANA',competitive:false}});
function quiverProficiency(hero,id){return {damage:1,drawSpeed:1,velocity:1,accuracy:1,equipmentDamage:1,stabilityDamage:1,...ArrowProficiencyModifier[hero]?.[id]};}
function quiverDefaultLoadout(hero){return [['arrow_shilimukha','arrow_vaitamhika'],['arrow_naracha','arrow_karnika'],['arrow_naracha','arrow_shilimukha'],['arrow_ardhachandra','arrow_vatsadanta'],['arrow_vaitamhika','arrow_ardhachandra'],['arrow_karnika','arrow_naracha'],['arrow_vaitamhika','arrow_shilimukha'],['arrow_shilimukha','arrow_ardhachandra']][hero]?.concat(hero===2?'power_arrow_guard':hero===7?'power_arrow_flare':hero===1?'power_arrow_fire_pot':'power_arrow_rapid')||quiverDefaultLoadout(0);}
function quiverValidLoadout(hero,list){return Number.isInteger(hero)&&hero>=0&&hero<8&&Array.isArray(list)&&list.length===3&&new Set(list).size===3&&list.every((id,i)=>{const a=PhysicalArrowDefinition[id];return a&&!a.isUnlimited&&a.allowedCharacters.includes(hero)&&a.category===(i===2?'TACTICAL_POWER_ARROW':'PHYSICAL_ARROW');});}
let quiverLoadout=[null,null];


// quiver
'use strict';
// One projectile path; all mutable tactical state stays on players/arrows/fires for rollback.
function quiverReset(){players.forEach((p,i)=>{const loadout=quiverValidLoadout(p.id,quiverLoadout[i])?[...quiverLoadout[i]]:quiverDefaultLoadout(p.id);quiverLoadout[i]=loadout;p.quiver={loadout:[QUIVER_STANDARD,...loadout],selected:QUIVER_STANDARD,ammo:Object.fromEntries(loadout.map(id=>[id,PhysicalArrowDefinition[id].ammoPerRound])),ready:{},drawPenalty:0,accuracyPenalty:0,barbed:0,barbedTick:0,barbedOwner:1-i,guard:0,flares:[],structure:100,harness:0,hitLog:[]};});}
function quiverDefinition(i){return PhysicalArrowDefinition[players[i]?.quiver?.selected]||PhysicalArrowDefinition[QUIVER_STANDARD];}
function quiverTactical(i){return !players[i].armed&&!!players[i].quiver&&players[i].quiver.selected!==QUIVER_STANDARD;}
function quiverDrawFactor(i){const q=players[i].quiver,a=quiverDefinition(i),f=q?.drawPenalty>0?.85:1;return players[i].armed?f:f*quiverProficiency(players[i].id,a.id).drawSpeed/a.drawTimeMultiplier;}
function quiverVelocityFactor(i,special=false){if(special||players[i].focus>=ARROW_BALANCE.focus&&!quiverTactical(i))return 1;const a=quiverDefinition(i);return a.projectileSpeedMultiplier*quiverProficiency(players[i].id,a.id).velocity;}
function quiverAvailable(i,id){const q=players[i].quiver,a=PhysicalArrowDefinition[id];return !!q&&!!a&&q.loadout.includes(id)&&(a.isUnlimited||q.ammo[id]>0)&&(q.ready[id]||0)<=elapsed;}
function choosePhysicalArrow(i,id){if(onlineAction('quiver',i,{id}))return false;if(!players[i]?.quiver?.loadout.includes(id)||atHome||ended||paused||ultimate||impactCutscene)return false;stopCharge(i);players[i].quiver.selected=id;players[i].armed=false;players[i].tacticArmed=false;return true;}
function quiverCanShoot(i,special){return special||players[i].focus>=ARROW_BALANCE.focus&&!quiverTactical(i)||quiverAvailable(i,quiverDefinition(i).id);}
function quiverDecorate(a,i){if(a.special||a.spirit)return;const p=players[i],d=quiverDefinition(i),f=quiverProficiency(p.id,d.id),q=p.quiver;if(!q)return;
 Object.assign(a,{arrowTypeId:d.id,shotId:a.projectileId,releaseTimestamp:elapsed,originX:a.x,gravityMultiplier:d.gravityMultiplier,armorPenetration:Math.min(.8,d.armorPenetration+(a.perfect&&d.weightClass==='PUM_BANA'?.1:0)),staggerPower:d.staggerPower,stabilityDamage:d.stabilityDamage*f.stabilityDamage,shieldDamage:d.shieldDamage,equipmentDamage:d.equipmentDamage*f.equipmentDamage,hitResult:null});
 a.damage*=d.damageMultiplier*f.damage;a.rainSeed=d.isUnlimited&&a.rainSeed;
 const dist=Math.abs(players[1-i].x-p.x),long=d.id==='arrow_vaitamhika'&&dist>d.effectiveRangeMax;
 let accuracy=d.accuracyMultiplier*f.accuracy*(q.accuracyPenalty>0?.75:1)*(long?.55:1);
 // Spread is seeded by rollback; preview does not consume RNG.
 const spread=(Math.random()-.5)*.022/accuracy*(a.perfect?.45:1)*(long?2:1),c=Math.cos(spread),s=Math.sin(spread),vx=a.vx;
 a.vx=vx*c-a.vy*s;a.vy=vx*s+a.vy*c;
 if(a.perfect){a.vx*=1.04;a.vy*=1.04;a.damage*=1.05;}
 const criticalChance=Math.max(0,.03+d.criticalChanceModifier)*(long?.35:1);if(!a.critical&&Math.random()<criticalChance){a.critical=true;a.damage*=1.2*d.criticalDamageModifier;}
 if(long){a.damage*=.7;a.stabilityDamage*=.65;}a.effectiveRangePenalty=long;
 if(d.id==='power_arrow_fire_pot')a.color='#eeb173';if(d.id==='power_arrow_flare')a.color='#fff0af';
}
function quiverAfterShot(i,first){if(!first?.arrowTypeId)return;const p=players[i],q=p.quiver,d=PhysicalArrowDefinition[first.arrowTypeId];if(!d.isUnlimited&&!q.debugInfinite)q.ammo[d.id]=Math.max(0,q.ammo[d.id]-1);q.ready[d.id]=elapsed+d.cooldown;p.cool*=d.drawTimeMultiplier/quiverProficiency(p.id,d.id).drawSpeed;
 if(d.id==='power_arrow_guard')q.guard=1.2;
 if(d.id==='power_arrow_rapid'&&bowEnabled())bowBurst(i,first,3);if(d.id==='power_arrow_rapid')for(let n=1;n<=2;n++){const angle=(n===1?-.045:.075),c=Math.cos(angle),s=Math.sin(angle),copy={...first,projectileId:first.projectileId+':volley:'+n,shotId:first.shotId+':volley:'+n,vx:first.vx*c-first.vy*s,vy:first.vx*s+first.vy*c,trail:[],hitResult:null};pendingShots.push({delay:n*.12,arrow:copy});}
 tone(d.SFX,.07,'triangle');if(!d.isUnlimited&&q.ammo[d.id]===0)q.selected=QUIVER_STANDARD;
}
function quiverHitScale(a){const d=PhysicalArrowDefinition[a.arrowTypeId];return d&&a.hitZone==='head'?d.headshotModifier:1;}
function quiverRecord(a,i,zone,damage=0){const q=players[i].quiver;if(!q)return;const result={shotId:a.shotId||a.projectileId,arrowTypeId:a.arrowTypeId,zone,damage,at:elapsed,x:a.x,y:a.y};a.hitResult=result;q.hitLog.push(result);q.hitLog=q.hitLog.slice(-12);if(typeof formationRecord==='function')formationRecord(a,i,zone,damage);}
function quiverBodyHit(a,i,outcome){const d=PhysicalArrowDefinition[a.arrowTypeId];if(!d||outcome?.miss)return;quiverRecord(a,i,a.hitZone||'body',outcome?.damage||0);if(d.bleedDuration){const q=players[i].quiver;q.barbed=d.bleedDuration;q.barbedTick=0;q.barbedOwner=a.owner;}if(d.staggerPower>1)knockChariot(i,.12*d.staggerPower);}
function quiverEquipmentHit(a,i,part){const p=players[i],q=p.quiver,d=PhysicalArrowDefinition[a.arrowTypeId];if(!d||!q)return false;const mult=a.equipmentDamage||1;let damage=part==='bow'?3:part==='chariot'?4:2;damage*=Math.min(2,mult);a.hitZone=part;a.equipment=true;
 const result=hurt(i,damage,a.owner,false,a);quiverRecord(a,i,part,result?.damage||0);if(result?.miss)return true;
 if(part==='bow'||part==='quiver'){q.drawPenalty=Math.max(q.drawPenalty,part==='bow'&&d.bowDamage>=2?4:2.5);if(d.id==='arrow_vatsadanta')q.accuracyPenalty=3.5;}
 if(part==='wheel'||part==='chariot'){q.structure=Math.max(0,q.structure-10*d.chariotDamage*mult);if(part==='wheel'&&(p.equipmentRecovery.wheel||0)<=0){p.equipment.wheel=1.2;p.equipmentRecovery.wheel=4.2;p.moveGoal=p.x;fateController.command(i,'equipment_wheel',p.fate.id,players);}if(q.structure===0)q.harness=Math.max(q.harness,2);}
 if(part==='harness')q.harness=Math.max(q.harness,Math.min(4,2*d.horseHarnessDamage));
 if(part==='banner'){p.equipment.banner=3;p.equipmentRecovery.banner=6;}
 announce(part==='bow'?'DRAW DISRUPTED · BOW STILL USABLE':part==='harness'?'HARNESS DISRUPTED':part==='chariot'?'CHARIOT STRUCTURE HIT':part.toUpperCase()+' HIT',1);return true;
}
function quiverImpact(a,x,y,hit){const d=PhysicalArrowDefinition[a.arrowTypeId];if(!d)return false;
 if(d.id==='power_arrow_flare'){players[a.owner].quiver.flares.push({x,y,life:4,radius:230});players[a.owner].quiver.flares=players[a.owner].quiver.flares.slice(-2);rings.push({x,y,color:'#fff3b9',life:.5,max:.5,size:70});}
 if(d.id==='power_arrow_fire_pot'){const enemy=1-a.owner,p=players[enemy],distance=Math.hypot(x-p.x,(y-(p.y+20))*.8);if(!hit&&distance<75&&!chargingShield(enemy,a)){hurt(enemy,a.damage*.45*(1-distance/75),a.owner,false,{...a,hitZone:'low'});if(p.quiver)p.quiver.structure=Math.max(0,p.quiver.structure-9*(1-distance/75));}fires.push({x,owner:a.owner,life:3,tick:0,radius:65,damage:.65,tactical:true});rings.push({x,y,color:'#ffaa60',life:.35,max:.35,size:65});
 // Small physical fire can evaporate local puddles, but cannot transform Spirit fields.
 wetZones=wetZones.filter(z=>Math.abs(z.x-x)>65);}
 return false;
}
function quiverGuardBlocks(i,a){const q=players[i].quiver;if(!q||q.guard<=0||bowOpen(i)||a.special||a.spirit||a.spiritCast||a.rain||a.rainSeed)return false;return swept(a.px-players[i].x,a.py-(players[i].y-30),a.x-players[i].x,a.y-(players[i].y-30),85);}
function quiverClash(a,b){if(!a.arrowTypeId&&!b.arrowTypeId||a.special||b.special||a.spirit||b.spirit||a.rain||b.rain||a.rainSeed||b.rainSeed)return false;
 const strength=x=>{const d=PhysicalArrowDefinition[x.arrowTypeId]||PhysicalArrowDefinition[QUIVER_STANDARD],mass=d.weightClass==='PUM_BANA'?1.25:1;return Math.hypot(x.vx,x.vy)*mass*(x.perfect?1.12:1);},sa=strength(a),sb=strength(b),angle=Math.abs((a.vx*b.vx+a.vy*b.vy)/(Math.hypot(a.vx,a.vy)*Math.hypot(b.vx,b.vy)||1));
 if(Math.max(sa,sb)/Math.max(1,Math.min(sa,sb))>1.4+angle*.2){const winner=sa>sb?a:b,loser=winner===a?b:a;loser.alive=false;winner.damage*=.65;winner.vx*=.85;winner.vy*=.85;}else a.alive=b.alive=false;clashes++;clashBurst(a,b);return true;
}
function quiverVisibility(i,x,base){return players[i]?.quiver?.flares.some(f=>f.life>0&&Math.abs(f.x-x)<f.radius)?Math.max(.8,base):base;}
function quiverTick(dt){players.forEach((p,i)=>{const q=p.quiver;if(!q)return;for(const key of ['drawPenalty','accuracyPenalty','harness','guard'])q[key]=Math.max(0,q[key]-dt);for(const f of q.flares)f.life-=dt;q.flares=q.flares.filter(f=>f.life>0);if(q.barbed>0){q.barbed=Math.max(0,q.barbed-dt);q.barbedTick+=dt;if(q.barbedTick>=1){q.barbedTick-=1;hurt(i,1,q.barbedOwner,false,{dot:true,hitZone:'barbed'});}}});}
function quiverAIChoice(i){const p=players[i],e=players[1-i],q=p.quiver;if(!q)return QUIVER_STANDARD;const dist=Math.abs(p.x-e.x),fog=typeof astraState!=='undefined'&&astraState.fields.some(f=>f.visibility&&astraInside(f,p.x));const candidates=q.loadout.filter(id=>quiverAvailable(i,id));let best=QUIVER_STANDARD,score=0;for(const id of candidates){const d=PhysicalArrowDefinition[id];let v=0;if(id==='power_arrow_guard'&&arrows.some(a=>a.alive&&a.owner!==i&&!a.special&&!a.spirit&&Math.abs(a.x-p.x)<350))v=9;else if(fog&&id==='power_arrow_flare')v=10;else if(e.charging)v=d.aiUsageTags.includes('charge')?8:0;else if(e.quiver?.structure<60&&d.aiUsageTags.includes('structure'))v=6;else if(dist>800&&d.aiUsageTags.includes('range'))v=5;else if(dist<=800&&d.aiUsageTags.includes('close'))v=6;else if(e.fate?.phase==='KAVACHA'&&id==='arrow_naracha')v=7;else if(d.aiUsageTags.includes('equipment')&&!e.quiver?.drawPenalty)v=3;else if(d.aiUsageTags.includes('pressure')&&!e.quiver?.barbed)v=2;if(v>score){score=v;best=id;}}return best;}
function quiverAI(){if(mode!=='ai'||!started||atHome||paused||ended||ultimate||impactCutscene)return false;const p=players[1];if(p.cool>0||p.charging||p.armed||blockedAction(1)||elapsed<(p.quiverAIAt||0))return false;p.quiverAIAt=elapsed+({easy:2.4,normal:1.5,hard:1}[(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)]||1.5);const id=quiverAIChoice(1);if(id===QUIVER_STANDARD){choosePhysicalArrow(1,id);return false;}choosePhysicalArrow(1,id);const angle=25,dist=Math.max(1,Math.abs(p.x-players[0].x)-64),boost=quiverVelocityFactor(1),targetY=id==='arrow_shilimukha'?-88:id==='arrow_naracha'&&players[0].quiver?.structure<60?36:-52,deltaY=targetY+55,speed=Math.sqrt(G*dist*dist/(2*Math.cos(angle*Math.PI/180)**2*(dist*Math.tan(angle*Math.PI/180)+deltaY))),error=(Math.random()-.5)*({easy:3,normal:1.5,hard:.6}[(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)]||1.5);aims[1]={angle:angle+error,power:Math.max(.05,Math.min(1,(speed/(p.speed*fateMod(1).velocity*boost)-420)/440))};p.focus=.75;shoot(1,false);return true;}


// formations
'use strict';
// Dhanur formations are deterministic physical combat. All mutable state lives on players/arrows.
const FORMATION_RULES=Object.freeze({gap:1.15,window:4.8,cooldown:9,limit:2,minAngle:-25,maxAngle:155});
const FORMATION_RECIPES=[
 {id:'cage',name:'Arrow Cage',pattern:'URBL',cost:22,life:3.4,kind:'cage'},
 {id:'net',name:'Skyfall Net',pattern:'UUUL',cost:18,life:2.6,kind:'net'},
 {id:'crossfire',name:'Crossfire Vyuha',pattern:'RLRL',cost:18,life:2.8,kind:'crossfire'},
 {id:'suppression',name:'Chariot Suppression',pattern:'FLFLF',cost:16,life:3,kind:'suppression'},
 {id:'volley',name:'Unbroken Volley',pattern:'FFFFF',cost:18,life:1.8,kind:'buff'},
 {id:'highvolley',name:'High Volley',pattern:'UUUUU',cost:18,life:1.8,kind:'buff'},
 {id:'piercing',name:'Piercing Line',pattern:'FFF',finisher:'arrow_naracha',cost:12,life:0,kind:'shot'},
 {id:'breaking',name:'Breaking Storm',pattern:'FFF',charged:true,cost:8,life:0,kind:'shot'},
 {id:'twin',name:'Twin Horizon',pattern:'FFF',finisher:'arrow_karnika',perfect:true,cost:12,life:0,kind:'shot'},
 {id:'rampart',name:'Arrow Rampart',pattern:'UUL',cost:16,life:3.6,kind:'rampart',window:2.5},
 {id:'snare',name:'Crescent Snare',pattern:'RLB',finisher:'arrow_ardhachandra',cost:16,life:3,kind:'snare'},
 {id:'wheel',name:'Wheel Breaker',pattern:'LFL',heavy:true,cost:12,life:3,kind:'buff'},
 {id:'canopy',name:'Deflecting Canopy',pattern:'URB',cost:14,life:3,kind:'canopy',defer:.85},
 {id:'serpent',name:'Serpent Path',pattern:'LRF',cost:14,life:2.5,kind:'buff'},
 {id:'rainbreaker',name:'Rain Breaker',pattern:'UU',charged:true,rain:true,cost:6,life:1.8,kind:'corridor'},
 {id:'hunter',name:"Hunter’s Mark",pattern:'',finisher:'arrow_shilimukha',cost:12,life:0,kind:'shot'}
];
const FORMATION_MASTERY=[['net','canopy'],['piercing','wheel'],['rampart','canopy'],['crossfire','cage'],['crossfire','twin'],['breaking','suppression'],['volley','serpent'],['hunter','snare']];
function formationFresh(){return {sequence:[],precision:[],zones:[],buff:null,cooldown:0,serial:0,pending:null,label:'',labelUntil:0,aiNext:12,aiPlan:null};}
function formationState(i){return players[i].formation||(players[i].formation=formationFresh());}
function formationDirection(angle){return angle>115?'B':angle>=65?'U':angle>=45?'R':angle>=-8?'F':'L';}
function formationRecipe(id){return FORMATION_RECIPES.find(r=>r.id===id);}
function formationHasRain(i){return arrows.some(a=>a.alive&&a.owner!==i&&(a.rain||a.rainSeed)&&!a.special)||players.some((p,j)=>j!==i&&p.formation?.zones.some(z=>z.id==='net'));}
function formationInterrupt(i){const f=formationState(i);f.sequence=[];f.precision=[];f.pending=null;f.aiPlan=null;if(f.buff?.id==='volley')f.buff=null;}
function formationEligible(i,r,a,seq){const f=formationState(i);if(typeof bowFormationAllowed==='function'&&!bowFormationAllowed(i,r))return false;if(r.kind!=='shot'&&r.kind!=='buff'&&f.zones.filter(z=>z.persistent&&z.sections.some(h=>h>0)).length>=FORMATION_RULES.limit)return false;if(['rampart','cage'].includes(r.id)&&f.zones.some(z=>z.id===r.id&&z.sections.some(h=>h>0)))return false;if(f.cooldown>elapsed||staminaValue(players[i])<r.cost)return false;if(r.finisher&&a.arrowTypeId!==r.finisher)return false;if(r.charged&&!a.spirit)return false;if(r.perfect&&(!a.perfect||a.spirit))return false;if(r.heavy&&a.arrowTypeId!=='arrow_naracha'&&!a.spirit)return false;if(r.rain&&!formationHasRain(i))return false;if(seq.length&&elapsed-seq[0].at>(r.window||FORMATION_RULES.window))return false;return true;}
function formationShot(i,a,angle){if(!a||a.formationChild||ruleSet==='lore')return;const p=players[i],f=formationState(i);if(a.special){formationInterrupt(i);return;}if(typeof bowConvertRampart==='function'&&bowConvertRampart(i,a,angle))return;if(typeof bowState==='function'&&bowEnabled()&&(bowState(i).shockUntil>elapsed||bowRecovering(i))){formationInterrupt(i);return;}
 const prior=f.sequence.at(-1);if(prior&&elapsed-prior.at>FORMATION_RULES.gap+(a.spirit?.7:0)){f.sequence=[];f.pending=null;}
 // Active volley pressure trades damage for cadence and cannot recursively build formations.
 if(f.buff&&f.buff.until>elapsed&&!a.spirit){
  if(f.buff.id==='volley'&&a.arrowTypeId===QUIVER_STANDARD){if(staminaValue(p)>=2){staminaSpend(i,2);a.rapid=true;a.damage=Math.min(a.damage*.45,6.4);p.cool=Math.max(.16,p.cool*.4);f.buff.shots=(f.buff.shots||0)+1;if(f.buff.shots>=5)f.buff=null;}else f.buff=null;}
  if(f.buff?.id==='wheel')a.equipmentDamage=(a.equipmentDamage||1)*1.45;
  if(f.buff?.id==='serpent'){a.formationCurve=true;a.formationCurveTime=.6;a.damage*=.85;}
 }
 if(f.cooldown>elapsed)return;
 if(!a.spirit&&a.arrowTypeId===QUIVER_STANDARD&&formationDirection(angle)==='F'&&f.sequence.at(-1)?.direction==='F'){a.damage=Math.min(a.damage,4.8);a.formationSetup=true;}
 const token={direction:formationDirection(angle),at:elapsed,perfect:!!a.perfect,shotId:a.projectileId,charged:!!a.spirit};f.sequence.push(token);f.sequence=f.sequence.slice(-5);
 const hunter=formationRecipe('hunter'),marks=f.precision.filter(h=>elapsed-h.at<4);
 if(marks.length>=2&&marks.at(-1).zone===marks.at(-2).zone&&formationEligible(i,hunter,a,[])){a.formationMarkedZone=marks.at(-1).zone;formationActivate(i,hunter,a,[...marks.slice(-2).map(h=>({at:h.at,perfect:h.perfect,direction:'F'})),token]);return;}
 const text=f.sequence.map(s=>s.direction).join('');
 for(const r of FORMATION_RECIPES){if(!r.pattern||!text.endsWith(r.pattern))continue;const seq=f.sequence.slice(-r.pattern.length);if(!formationEligible(i,r,a,seq))continue;
  if(r.defer){f.pending={id:r.id,at:elapsed+r.defer,sequence:seq};return;}
  formationActivate(i,r,a,seq);return;
 }
 // An unrelated shot cancels a pending prefix, rather than granting a hidden free formation.
 if(f.pending&&!text.endsWith('URB'))f.pending=null;
}
function formationActivate(i,r,a,seq){const p=players[i],f=formationState(i);if(!formationEligible(i,r,a||{},seq))return false;staminaSpend(i,r.cost);for(const anchor of seq){for(const arrow of arrows){if(arrow.owner===i&&(arrow.projectileId===anchor.shotId||arrow.projectileId?.startsWith(anchor.shotId+':rain:'))){if(arrow.rain)arrow.alive=false;arrow.rainSeed=false;arrow.spiritSky=false;}}}f.cooldown=elapsed+FORMATION_RULES.cooldown;f.serial++;f.sequence=[];f.pending=null;f.precision=[];
 const master=seq.length>=2&&seq.every(s=>s.perfect)&&FORMATION_MASTERY[p.id].includes(r.id),bonus=master?1.15:1;
 f.label=(master?'MASTER · ':'')+r.name;f.labelUntil=elapsed+2.5;announce(f.label,1.7);
 if(r.kind==='shot'){
  if(r.id==='piercing'){a.formationBreaker=true;a.shieldDamage=2.5;a.stabilityDamage=(a.stabilityDamage||10)*1.4;a.armorPenetration=.65;a.damage=Math.min(25.6,Math.max(a.damage,19.2)*bonus);}
  if(r.id==='breaking'){a.formationBreaker=true;a.shieldDamage=3;a.stabilityDamage=(a.stabilityDamage||12)*1.6;a.damage=Math.min(25.6,Math.max(a.damage,17.6)*bonus);}
  if(r.id==='hunter'){a.formationHunter=true;a.damage=Math.min(25.6,Math.max(a.damage,17.6)*bonus);}
  if(r.id==='twin'){a.damage*=.58*bonus;const vx=a.vx,vy=a.vy,theta=.045;for(const sign of [-1,1]){const shot=sign===-1?a:{...a,trail:[],formationChild:true,projectileId:a.projectileId+':twin',shotId:a.projectileId+':twin'};shot.vx=vx*Math.cos(theta)-vy*Math.sin(theta)*sign;shot.vy=vx*Math.sin(theta)*sign+vy*Math.cos(theta);if(sign===1&&arrows.length+pendingShots.length<ASTRA_GLOBAL.projectileLimit)arrows.push(shot);}}
 }else if(r.kind==='buff'){f.buff={id:r.id==='highvolley'?'volley':r.id,until:elapsed+r.life*bonus};if(['volley','highvolley'].includes(r.id)&&typeof bowState==='function'){const b=bowState(i);b.sector=aims[i].angle;b.openUntil=f.buff.until;p.shield=0;if(p.quiver)p.quiver.guard=0;}}
 else {const enemy=players[1-i],dir=i?-1:1;let x=['rampart'].includes(r.id)?p.x+dir*130:['canopy','corridor'].includes(r.id)?p.x:enemy.x;const z={id:r.id,serial:f.serial,owner:i,x,y:r.id==='canopy'?p.y-160:GROUND-100,born:elapsed,readyAt:elapsed+.8,until:['rampart','cage'].includes(r.id)?Number.MAX_SAFE_INTEGER:elapsed+r.life*bonus,persistent:['rampart','cage'].includes(r.id),shots:0,next:elapsed+.85,sections:[1,1,1].map(()=>['rampart','cage'].includes(r.id)?(p.id===2?40:100/3)*bonus:12*bonus),radius:r.id==='corridor'?105:110};if(r.id==='cage')z.sections=[50*bonus,0,50*bonus];f.zones.push(z);while(f.zones.length>FORMATION_RULES.limit){const disposable=f.zones.findIndex(z=>!z.persistent);if(disposable<0)break;f.zones.splice(disposable,1);}}
 return true;
}
function formationRecord(a,i,zone,damage){if(a.special||a.formationChild||damage<=0||ruleSet==='lore'||!(['head','bow','wheel'].includes(zone)||a.perfect))return;const f=formationState(a.owner);if(f.precision.at(-1)?.id===a.projectileId)return;f.precision.push({id:a.projectileId,zone,at:elapsed,perfect:!!a.perfect||zone==='head'});f.precision=f.precision.slice(-2);}
function formationDamage(a,zone){if(a?.formationHunter&&a.formationMarkedZone===zone)return 1.3;return 1;}
function formationSpawn(z,x,y,vx,vy){if(arrows.length+pendingShots.length>=ASTRA_GLOBAL.projectileLimit)return;const owner=z.owner,p=players[owner],id=owner+':'+round+':formation:'+z.serial+':'+z.shots++;arrows.push({owner,x,y,px:x,py:y,vx,vy,age:0,alive:true,trail:[],special:false,spirit:false,rain:z.id==='net',rainSeed:false,formationChild:true,arrowTypeId:QUIVER_STANDARD,projectileId:id,shotId:id,castId:id,color:p.color,damage:5.12,gravityMultiplier:1,stabilityDamage:3,shieldDamage:.3,equipmentDamage:.2});}
function formationTick(dt){for(let i=0;i<players.length;i++){const p=players[i],f=formationState(i);if(p.hp<=0||!fateRanged(i)||!fateMod(i).attack){formationInterrupt(i);if(p.hp<=0)f.zones=[];}
 if(f.sequence.length&&elapsed-f.sequence.at(-1).at>FORMATION_RULES.gap+.7){f.sequence=[];f.pending=null;}
 if(f.pending&&elapsed>=f.pending.at){const pending=f.pending;f.pending=null;formationActivate(i,formationRecipe(pending.id),{},pending.sequence);}
 if(f.buff?.until<=elapsed)f.buff=null;
 f.zones=f.zones.filter(z=>z.until>elapsed&&z.sections.some(h=>h>0));
 for(const z of f.zones){if(elapsed<z.readyAt||elapsed<z.next)continue;
  if(z.id==='net'&&z.shots<6){formationSpawn(z,z.x-90+z.shots*36,170,(z.shots-2.5)*-10,380);z.next+=.22;}
  if(z.id==='crossfire'&&z.shots<6){const left=z.shots%2===0;formationSpawn(z,z.x+(left?-120:120),GROUND-(left?150:40),left?260:-260,left?80:-220);z.next+=.25;}
 }
}}
function formationMotion(i,oldX){const p=players[i];for(const enemy of players){for(const z of enemy.formation?.zones||[]){if(z.owner===i||elapsed<z.readyAt||z.until<=elapsed||Math.abs(oldX-z.x)>z.radius)continue;if(['snare','suppression'].includes(z.id)){p.x=oldX+(p.x-oldX)*(z.id==='snare'?.6:.7);}
 if(z.id==='cage'){const left=z.x-z.radius,right=z.x+z.radius;if(p.x<left&&z.sections[0]>0)p.x=left;if(p.x>right&&z.sections[2]>0)p.x=right;}
 }}}
function formationProjectile(a,dt){if(a.formationCurve&&a.formationCurveTime>0){const span=Math.min(dt,a.formationCurveTime);a.vy-=span*260;a.formationCurveTime-=span;}}
function formationCollision(a){if(!a.alive||a.duel||a.special&&ASTRAS[a.spell]?.tier===2)return false;
 for(const p of players)for(const z of p.formation?.zones||[]){if(z.until<=elapsed)continue;const defensive=['rampart','canopy','corridor'].includes(z.id);if(defensive?a.owner===z.owner:a.owner!==1-z.owner)continue;
 let section=-1,contact=false;
 if(z.id==='corridor'){if(!a.special&&(a.rain||a.formationChild)&&Math.abs(a.x-z.x)<z.radius&&a.y>140&&a.y<GROUND){a.alive=false;return true;}continue;}
 if(z.id==='canopy'){contact=swept(a.px-z.x,(a.py-z.y)*4,a.x-z.x,(a.y-z.y)*4,130);section=Math.max(0,Math.min(2,Math.floor((a.x-z.x+130)/87)));}
 else if(z.id==='cage'){
  for(const side of [0,2])if(z.sections[side]>0&&swept((a.px-(z.x+(side===0?-z.radius:z.radius)))*5,a.py-z.y,(a.x-(z.x+(side===0?-z.radius:z.radius)))*5,a.y-z.y,110)){contact=true;section=side;break;}
 }else if(['rampart','snare','suppression','net','crossfire'].includes(z.id)){
  const y=['net'].includes(z.id)?170:['snare','suppression'].includes(z.id)?GROUND-35:z.y;
  contact=swept((a.px-z.x)*(['rampart'].includes(z.id)?5:1),a.py-y,(a.x-z.x)*(['rampart'].includes(z.id)?5:1),a.y-y,z.id==='rampart'?115:85);section=Math.max(0,Math.min(2,Math.floor((a.y-(y-115))/77)));
 }
 if(!contact||section<0||z.sections[section]<=0)continue;if(defensive&&typeof bowPressure==='function')bowPressure(z.owner,a,true);
 const heavy=a.spirit||a.formationBreaker||a.arrowTypeId==='arrow_naracha'||PhysicalArrowDefinition[a.arrowTypeId]?.category==='TACTICAL_POWER_ARROW';
 if(z.persistent){if(!a.special&&!heavy){z.sections[section]=Math.max(1,z.sections[section]-(a.rapid?5:8));a.alive=false;return true;}const anchorY=z.y;const precision=a.spirit&&a.perfect&&swept(a.px-z.x,a.py-anchorY,a.x-z.x,a.y-anchorY,18);const wear=a.special?150:precision?90:a.spirit?45:a.arrowTypeId==='arrow_naracha'?28:35;if(z.id==='cage'||a.arrowTypeId==='power_arrow_fire_pot')z.sections[section]=Math.max(0,z.sections[section]-wear);else z.sections=z.sections.map(h=>Math.max(0,h-wear/3));rings.push({x:a.x,y:a.y,color:players[z.owner].color,life:.35,max:.35,size:65});if(z.sections[section]>0){a.alive=false;return true;}if(!a.special)a.damage*=.8;return false;}
 if(a.special||heavy){rings.push({x:a.x,y:a.y,color:players[z.owner].color,life:.35,max:.35,size:65});if(z.id==='cage')z.sections[section]=0;else z.sections.fill(0);if(!a.special)a.damage*=.8;return false;}
 if(elapsed<z.readyAt||!defensive){z.sections[section]-=Math.max(3,a.damage||3);a.alive=false;return true;}
 z.sections[section]-=Math.max(2,(a.damage||3)*.6);a.alive=false;return true;
 }return false;
}
function formationAI(){if(mode!=='ai'||ruleSet==='lore'||!started||ended||ultimate||impactCutscene)return false;const i=1,p=players[i],f=formationState(i),difficulty=typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty;
 if(formationBreakAI(i))return true;
 if(difficulty==='easy')return false;
 if(!f.aiPlan&&elapsed>=f.aiNext&&elapsed>=f.cooldown&&p.cool<=0&&!p.charging){f.aiPlan={index:0,next:elapsed};f.aiNext=elapsed+18;}
 if(!f.aiPlan)return false;if(p.cool>0||elapsed<f.aiPlan.next)return true;
 const angle=[75,75,-12][f.aiPlan.index];choosePhysicalArrow(i,QUIVER_STANDARD);aims[i]={angle,power:.6};if(shoot(i,false)){if(f.aiPlan){f.aiPlan.index++;f.aiPlan.next=elapsed+.55;if(f.aiPlan.index>=3)f.aiPlan=null;}}return true;
}

// Target the actual blocking section. A maintained AI charge lease survives input sync.
function formationBlockingTarget(i){
 const p=players[i],enemy=players[1-i],dir=i?-1:1,source=p.x+dir*32;
 const candidates=[];
 for(const z of enemy.formation?.zones||[]){
  if(!z.persistent||z.until<=elapsed||!z.sections.some(n=>n>0))continue;
  if(z.id==='rampart'&&(z.x-source)*dir>0&&(enemy.x-z.x)*dir>0){
   const section=z.sections[1]>0?1:z.sections[0]>0?0:2;
   candidates.push({z,x:z.x,y:z.y+(section-1)*65});
  }
  if(z.id==='cage'){
   const side=i?0:2,x=z.x+(side===0?-z.radius:z.radius);
   if(z.sections[side]>0&&(x-source)*dir>0)candidates.push({z,x,y:Math.max(z.y-65,Math.min(z.y+65,p.y-55))});
  }
 }
 return candidates.sort((a,b)=>Math.abs(a.x-source)-Math.abs(b.x-source))[0]||null;
}
function formationAimAt(i,target,special){
 const p=players[i],x=p.x+(i?-32:32),y=p.y+(p.dismounted?15:-55),dx=Math.max(1,Math.abs(target.x-x)),dy=target.y-y;
 // Increase draw power only if the target is outside the current ballistic range.
 for(const power of [.6,.8,1]){
  const v=velocity(i,{angle:0,power},special),speed=Math.hypot(v.vx,v.vy),v2=speed*speed;
  const disc=v2*v2-G*(G*dx*dx-2*dy*v2);
  if(disc>=0){aims[i]={angle:Math.atan((v2-Math.sqrt(disc))/(G*dx))*180/Math.PI,power};return true;}
 }
 return false;
}
function formationBreakAI(i){
 const p=players[i],f=formationState(i),target=formationBlockingTarget(i);
 if(!target){if(f.breakingDefense){stopCharge(i);f.breakingDefense=false;}return false;}
 f.aiPlan=null;f.breakingDefense=true;p.tacticArmed=false;p.skyMode=false;
 if(p.stabilityRequireRelease){setChargeIntent(i,false);return true;}
 if(p.cool>0||blockedAction(i))return true;
 if(p.charging&&p.aiCharge&&!p.armed){
  if(p.focus>=1.5){if(formationAimAt(i,target,false))shoot(i,false);else moveChariot(i,true);stopCharge(i);}return true;
 }
 const signatures=p.loadout.filter(key=>ASTRAS[key].tier<2&&p.ammo[key]>0&&!lockReason(p,ASTRAS[key]));
 for(const signature of signatures){stopCharge(i);p.selected=signature;p.armed=true;p.focus=.5;if(formationAimAt(i,target,true)&&shoot(i,true))return true;}
 p.armed=false;
 if(quiverAvailable(i,'arrow_naracha')){choosePhysicalArrow(i,'arrow_naracha');p.focus=.75;if(formationAimAt(i,target,false)&&shoot(i,false))return true;}
 // Tactical arrows cannot become Spirit arrows: explicitly switch back to Gopuccha.
 if(p.quiver?.selected!==QUIVER_STANDARD)choosePhysicalArrow(i,QUIVER_STANDARD);
 if(!p.charging){p.focus=0;aims[i]={angle:25,power:1};if(setChargeIntent(i,true))p.aiCharge=true;}
 else p.aiCharge=true;
 return true;
}


// bow-combat
'use strict';
// Deterministic anti-spam state; all timers are simulation-time and rollback-owned.
const BOW_COMBAT={reserve:5,rapidDamage:5.6,renock:1.8,quiet:.8,retarget:.75,sector:20,normalStrain:5,rapidStrain:17,chargedStrain:12,decay:22,shock:1.8,restring:2.5,retaliationDecay:3,retaliationRate:25};
function bowFresh(){return {reserve:5,strain:0,lastShot:-100,chain:0,renockAt:0,openUntil:0,sector:0,shockUntil:0,regripUntil:0,retargetUntil:0,retaliation:0,lastPressure:-100,gainAt:-100,gained:0,seen:[],retaliationActive:false,retaliationSpell:null,moveAt:0,moveToward:false,dodgeAt:0};}
function bowState(i){return players[i].bowCombat||(players[i].bowCombat=bowFresh());}
function bowEnabled(){return ruleSet!=='lore';}
function bowOpen(i){if(!bowEnabled())return false;const b=bowState(i);return b.strain>=70||b.openUntil>elapsed||players[i].formation?.buff?.id==='volley';}
function bowRecovering(i){const b=bowState(i);return bowEnabled()&&Math.max(b.regripUntil,b.retargetUntil)>elapsed;}
function bowDrawFactor(i){return bowEnabled()&&bowState(i).shockUntil>elapsed?.7:1;}
function bowSignature(i){const p=players[i];return p.armed&&ASTRAS[p.selected]?.tier<2&&p.loadout.includes(p.selected)&&!(typeof counterEquipped==='function'&&counterEquipped(p));}
function bowRetaliation(i){const b=bowState(i);return bowEnabled()&&b.retaliationActive&&b.retaliationSpell===players[i].selected&&bowSignature(i);}
function bowBeginCharge(i){const b=bowState(i);b.retaliationActive=bowEnabled()&&bowSignature(i)&&b.retaliation>=100;b.retaliationSpell=b.retaliationActive?players[i].selected:null;}
function bowEndCharge(i){const b=bowState(i);b.retaliationActive=false;b.retaliationSpell=null;}
function bowCancelVolley(i,retarget=false){const p=players[i],b=bowState(i);if(p.formation?.buff?.id==='volley')p.formation.buff=null;pendingShots=pendingShots.filter(q=>q.arrow.owner!==i||!q.arrow.rapid);b.openUntil=Math.max(b.openUntil,elapsed+.3);b.renockAt=elapsed+BOW_COMBAT.quiet+BOW_COMBAT.renock;if(retarget){b.retargetUntil=elapsed+BOW_COMBAT.retarget;p.cool=Math.max(p.cool,BOW_COMBAT.retarget);announce('RETARGET · RE-NOCK',.8);}}
function bowCanShoot(i,special){if(!bowEnabled())return true;const p=players[i],b=bowState(i);if(bowRecovering(i))return false;if(special)return true;const d=quiverDefinition(i);if(bowOpen(i)&&d.id==='power_arrow_guard')return false;if(d.id==='power_arrow_rapid'&&(b.reserve<3||b.shockUntil>elapsed))return false;const volley=p.formation?.buff?.id==='volley';if(volley&&(b.reserve<=0||b.shockUntil>elapsed)){bowCancelVolley(i);return false;}if((volley||b.openUntil>elapsed)&&Math.abs(aims[i].angle-b.sector)>BOW_COMBAT.sector){bowCancelVolley(i,true);return false;}return true;}
function bowFormationAllowed(i,r){if(!bowEnabled())return true;const b=bowState(i);if(b.shockUntil>elapsed||bowRecovering(i))return false;if(bowOpen(i)&&['rampart','canopy','cage','corridor','volley','highvolley'].includes(r.kind==='buff'?r.id:r.kind))return false;return !['volley','highvolley'].includes(r.id)||b.reserve===5;}
function bowStrain(i,n){const b=bowState(i);b.strain=Math.min(100,b.strain+n);if(b.strain>=70){players[i].shield=0;if(players[i].quiver)players[i].quiver.guard=0;}if(b.strain>=100){b.regripUntil=elapsed+1.8;bowCancelVolley(i);players[i].cool=Math.max(players[i].cool,1.8);announce('BOW STRAIN · REGRIP',1.5);}}
function bowBurst(i,a,count=1){if(!bowEnabled())return;const b=bowState(i);a.rapid=true;a.bowAccounted=true;a.damage=BOW_COMBAT.rapidDamage;a.rainSeed=false;a.spiritSky=false;b.reserve=Math.max(0,b.reserve-count);if(b.openUntil<=elapsed&&players[i].formation?.buff?.id!=='volley')b.sector=aims[i].angle;players[i].shield=0;if(players[i].quiver)players[i].quiver.guard=0;b.openUntil=elapsed+1.8;b.lastShot=elapsed;b.renockAt=0;bowStrain(i,BOW_COMBAT.rapidStrain*count);}
function bowRelease(i,a){if(!bowEnabled()||!a)return;const b=bowState(i),p=players[i];if(a.special){if(ASTRAS[a.spell]?.tier<2&&bowSignature(i)&&b.retaliation>=100){b.retaliation=0;b.retaliationActive=false;p.cool*=.9;announce('ASTRA RETALIATION RELEASED',1);}return;}if(a.bowAccounted)return;if(a.rapid){bowBurst(i,a);return;}b.chain=elapsed-b.lastShot<.6?b.chain+1:1;const strain=a.spirit?12:b.chain>5?17:5;if(b.chain>5&&!a.spirit){a.damage=Math.min(a.damage,5.6);a.rapid=true;if(b.openUntil<=elapsed)b.sector=aims[i].angle;b.openUntil=elapsed+.55;}b.lastShot=elapsed;b.renockAt=0;bowStrain(i,strain);if(b.reserve===0)p.cool=Math.max(p.cool,.65);}
function bowPressure(i,a,formation=false){if(!bowEnabled()||a.special||a.owner===i||a.dot||!a.projectileId)return;const b=bowState(i);if(b.seen.includes(a.projectileId))return;b.seen.push(a.projectileId);if(b.seen.length>96)b.seen.shift();if(elapsed-b.gainAt>=1){b.gainAt=elapsed;b.gained=0;}const gain=Math.min(BOW_COMBAT.retaliationRate-b.gained,a.spirit?8:a.rapid?5:formation?4:3);b.gained+=gain;b.lastPressure=elapsed;const previous=b.retaliation;b.retaliation=Math.min(100,b.retaliation+gain);if(previous<100&&b.retaliation===100)announce('ASTRA RETALIATION READY',1.5);}
function bowPunish(i,a){if(!bowEnabled()||!a.spirit||a.special||a.rain||a.formationChild||!bowOpen(i))return;const b=bowState(i),p=players[i],precision=['bow','bowstring'].includes(a.hitZone);bowCancelVolley(i);formationInterrupt(i);b.shockUntil=elapsed+BOW_COMBAT.shock;b.strain=Math.min(99,b.strain+25);knockChariot(i,.45*1.35);stopCharge(i);if(precision){b.shockUntil=elapsed+BOW_COMBAT.restring;b.regripUntil=Math.max(b.regripUntil,b.shockUntil);p.equipment.bow=Math.max(p.equipment.bow,BOW_COMBAT.restring);p.equipmentRecovery.bow=Math.max(p.equipmentRecovery.bow,BOW_COMBAT.restring+3);announce('BOWSTRING DISRUPTED · 2.5s',1.8);}else announce('STRING SHOCK · DRAW −30%',1.5);}
function bowAim(i,a){if(!bowEnabled()||bowState(i).strain<40)return a;const b=bowState(i),amplitude=b.strain>=70?2.2:1;return {...a,angle:Math.max(-25,Math.min(155,a.angle+Math.sin(elapsed*6+i)*amplitude))};}
function bowDelayMove(i,toward){if(!bowOpen(i)||bowState(i).shockUntil>elapsed)return false;const b=bowState(i);if(!b.moveAt){b.moveAt=elapsed+.18;b.moveToward=toward;}return true;}
function bowDelayDodge(i){if(!bowOpen(i)||bowState(i).shockUntil>elapsed)return false;const b=bowState(i);if(!b.dodgeAt)b.dodgeAt=elapsed+.18;return true;}
function bowTick(dt){if(!bowEnabled())return;for(let i=0;i<players.length;i++){const p=players[i],b=bowState(i);if(elapsed-b.lastShot>=.8){b.strain=Math.max(0,b.strain-dt*22);b.chain=0;if(b.reserve<5&&!b.renockAt)b.renockAt=elapsed+1.8;}if(b.renockAt&&elapsed>=b.renockAt){b.reserve=5;b.renockAt=0;}if(elapsed-b.lastPressure>1.5&&!b.retaliationActive)b.retaliation=Math.max(0,b.retaliation-dt*3);if(b.moveAt&&elapsed>=b.moveAt){const toward=b.moveToward;b.moveAt=0;moveChariot(i,toward,true);}if(b.dodgeAt&&elapsed>=b.dodgeAt){b.dodgeAt=0;fateCommand(i,'dodge',p.fate.id,true);}if(p.hp<=0){b.moveAt=0;b.dodgeAt=0;b.retaliationActive=false;}}}
function bowConvertRampart(i,a,angle){if(!bowEnabled()||a.special||a.spirit||formationDirection(angle)!=='U'||bowOpen(i)||bowState(i).shockUntil>elapsed)return false;const f=formationState(i),z=f.zones.find(z=>z.id==='rampart'&&z.sections.some(h=>h>0));if(!z||elapsed<z.readyAt)return false;z.fromX=z.x;z.fromY=z.y;z.id='canopy';z.x=players[i].x;z.y=players[i].y-160;z.convertedAt=elapsed;z.readyAt=elapsed+.5;z.radius=130;a.rainSeed=false;a.spiritSky=false;f.sequence=[];f.pending=null;f.label='RAMPART → CANOPY';f.labelUntil=elapsed+2;announce('ARROW CANOPY · OVERHEAD DEFENSE',1.5);return true;}


// game
'use strict';
const $=id=>document.getElementById(id), canvas=$('game'),ctx=canvas.getContext('2d');
const W=1400,H=680,G=320,GROUND=556;
let options={difficulty:'normal',vfxQuality:'medium',volume:.65,sound:true,reverseAim:false,assist:true,reduced:window.matchMedia?.('(prefers-reduced-motion: reduce)').matches||false},career={wins:0,matches:0};
try{Object.assign(options,JSON.parse(localStorage.getItem('astra-settings')||'{}'));Object.assign(career,JSON.parse(localStorage.getItem('astra-career')||'{}'))}catch{}
let atHome=true,score=[0,0],matchOver=false,weather={type:-1,time:0},flash=0,damageTexts=[],audioMaster;
const sprites=new Image();sprites.src='warriors.png';const extraSprites=new Image();extraSprites.src='warriors-extra.png';const chariotArt=new Image();chariotArt.src='chariots.png';let pendingShots=[],clashSlow=0;let visualTime=0;const keyboardDraw=new Map();

// Match presentation and standard-arrow balance. Simulation remains host-owned.
const ARROW_BALANCE={focus:1.5,spiritSpeed:1.32,spiritDamage:1.05,quickCooldown:.22,skyAngle:65,rainCount:3,rainDamage:.22,rainCap:36,chargedRainCount:10,chargedRainDamage:.1,chargedRainWarning:.9,chargedRainStagger:.055};
let matchIntro={id:0,left:3},introSoundId=null;
const battleSounds={buffers:{},loading:{},activeArrows:0};
function loadBattleSound(key){if(!audioContext||battleSounds.loading[key])return;battleSounds.loading[key]=true;fetch('audio/sfx/'+key+'.mp3').then(r=>{if(!r.ok)throw Error('audio');return r.arrayBuffer()}).then(b=>audioContext.decodeAudioData(b)).then(b=>battleSounds.buffers[key]=b).catch(()=>{battleSounds.loading[key]=false});}
function playBattleSound(key){if(!sound)return;unlockAudio();const b=battleSounds.buffers[key];if(!b||!audioContext||!audioMaster)return;if(key==='arrow'&&battleSounds.activeArrows>=8)return;const s=audioContext.createBufferSource(),g=audioContext.createGain();s.buffer=b;g.gain.value=key==='arrow'?.4:1;s.connect(g).connect(audioMaster);if(key==='arrow')battleSounds.activeArrows++;s.start();s.onended=()=>{s.disconnect();g.disconnect();if(key==='arrow')battleSounds.activeArrows--;};}
function countdownLocked(){return !started&&matchIntro.left>0;}
function matchIntroFrame(){const node=document.getElementById('matchCountdown');if(node){node.hidden=atHome||ended||matchIntro.left<=-.65;node.textContent=matchIntro.left>0?String(Math.ceil(matchIntro.left)):'FIGHT';}if(!atHome&&!paused&&!ended&&matchIntro.left>0&&introSoundId!==matchIntro.id&&battleSounds.buffers.conch){introSoundId=matchIntro.id;playBattleSound('conch');}}
function tickMatchIntro(dt){if(started){matchIntro.left=Math.max(-1,matchIntro.left-dt);return false;}matchIntro.left-=dt;if(matchIntro.left<=0){started=true;drags.clear();keyboardDraw.clear();players.forEach(p=>p.focus=0);announce('FIGHT',.8);}return true;}
function arrowSkyEvent(a){
 if(!a.alive||(!a.rainSeed&&!a.spiritSky))return;if(a.spiritSky?(a.y>145&&a.vy<0):a.vy<0)return;
 a.alive=false;const charged=!!a.spiritSky;
 if(charged){burnRain(a.owner);rings.push({x:players[a.owner].x,y:120,color:a.color,life:.9,max:.9,size:1500});}
 const active=arrows.filter(b=>b.alive&&b.owner===a.owner&&b.rain).length,target=players[1-a.owner].x;
 const count=Math.min(charged?ARROW_BALANCE.chargedRainCount:ARROW_BALANCE.rainCount,ARROW_BALANCE.rainCap-active,(typeof ASTRA_GLOBAL==='undefined'?100:ASTRA_GLOBAL.projectileLimit)-arrows.length-pendingShots.length);
 for(let n=0;n<count;n++){const x=target+(n-(count-1)/2)*(charged?24:70);arrows.push({...a,projectileId:a.projectileId+':rain:'+n,shotId:(a.shotId||a.projectileId)+':rain:'+n,x,y:-35,px:x,py:-35,vx:0,vy:charged?340:260,age:0,rainSeed:false,spiritSky:false,rain:true,empoweredRain:charged,rainDelay:charged?ARROW_BALANCE.chargedRainWarning+n*ARROW_BALANCE.chargedRainStagger:COMBAT_FEEL.rainWarning,alive:true,damage:a.damage*(charged?ARROW_BALANCE.chargedRainDamage:ARROW_BALANCE.rainDamage),trail:[],netId:undefined});}
 rings.push({x:target,y:85,color:charged?a.color:'#ffb65c',life:charged?ARROW_BALANCE.chargedRainWarning:COMBAT_FEEL.rainWarning,max:charged?ARROW_BALANCE.chargedRainWarning:COMBAT_FEEL.rainWarning,size:charged?180:120});announce(charged?'SPIRIT BARRAGE · 10 ARROWS · SKYWARD CHARGE TO COUNTER':'ARROW RAIN · OVERDRAW SKYWARD FOR FIRE',1.8);
}
function standardArrowClash(a,b){if((a.arrowTypeId||b.arrowTypeId)&&!!a.special!==!!b.special){(a.special?b:a).alive=false;return true;}if(typeof quiverClash==='function'&&quiverClash(a,b))return true;if(a.spiritCast&&!b.special||b.spiritCast&&!a.special){(a.spiritCast?b:a).alive=false;return true;}
 if(a.spirit!==b.spirit&&(a.spirit||b.spirit)&&!a.special&&!b.special){const weak=a.spirit?b:a;weak.alive=false;spawnSpriteEffect('fire',weak.x,weak.y,50,.35);return true;}
 // Rain cannot be cancelled by low-charge arrows or ordinary Astras.
 if((a.rain||a.rainSeed||b.rain||b.rainSeed)&&!a.spirit&&!b.spirit)return true;
 return false;
}


const COMBAT_FEEL={chargeTime:.65,maxHold:2.4,rearm:.4,dragEnter:230,dragExit:190,skyWarmup:.12,fireInterval:.18,rainWarning:.65,remoteLease:.65};
let chargeInputSeq=0,chargeInputAge=0,chargeInputSignature='';
function chargeAllowed(i){return !atHome&&!paused&&!ended&&!countdownLocked()&&!blockedAction(i)&&!bowRecovering(i)&&fateRanged(i)&&players[i].cool<=0;}
function stopCharge(i,clearFocus=true){if(typeof rb!=='undefined'&&rb.active&&!rb.executing)return;const p=players[i];if(!p)return;if(p.charging)p.chargeRest=COMBAT_FEEL.rearm;p.charging=false;p.chargeAge=0;p.chargeLease=0;p.skyFire=false;p.aiCharge=false;if(typeof astraChargeStop==='function')astraChargeStop(i);if(clearFocus)p.focus=0;}
function cancelAllCharges(){players.forEach((_,i)=>stopCharge(i));chargeInputSignature='';}
function setChargeIntent(i,active,a=aims[i]){const p=players[i];if(!active)p.stabilityRequireRelease=false;if(active&&(p.stabilityRequireRelease||elapsed<(p.focusRecoveryUntil||0)))return false;if(!active||!chargeAllowed(i)){stopCharge(i);return false;}if(p.chargeRest>0||typeof staminaChargeAllowed==='function'&&!staminaChargeAllowed(i))return false;if(Number.isFinite(a.angle)&&Number.isFinite(a.power))aims[i]={angle:Math.max(-25,Math.min(155,a.angle)),power:Math.max(.05,Math.min(1,a.power))};if(!p.charging){p.charging=true;p.chargeAge=0;p.focus=0;p.fireTick=0;if(typeof astraChargeStart==='function')astraChargeStart(i);}p.chargeLease=COMBAT_FEEL.remoteLease;return true;}
function dragWantsCharge(d){const length=Math.hypot(d.now.x-d.start.x,d.now.y-d.start.y);d.chargeZone=length>=(d.chargeZone?COMBAT_FEEL.dragExit:COMBAT_FEEL.dragEnter);return d.chargeZone;}
function syncCombatInput(dt){
 if(atHome||paused||ended||countdownLocked())return;
 chargeInputAge+=dt;
 for(let i=0;i<2;i++){
  if(online.active&&i!==online.seat||mode==='ai'&&i===1)continue;
  const d=[...drags.values()].find(d=>d.i===i),active=!!(d?dragWantsCharge(d):keyboardDraw.has(i));
  if(onlineGuest()){
   const sig=String(active);if(sig!==chargeInputSignature||active&&chargeInputAge>=.12){chargeInputAge=0;chargeInputSignature=sig;onlineAction('draw',i,{active,...aims[i],sequence:++chargeInputSeq,epoch:online.epoch,round});}
   setChargeIntent(i,active);tickChargeUnit(i,dt,true);
  }else setChargeIntent(i,active);
 }
}
function burnRain(i){let count=0;for(const a of arrows)if(a.alive&&a.owner!==i&&(a.rain||a.rainSeed)){a.alive=false;if(count++<12)spawnSpriteEffect('fire',a.x,Math.max(60,a.y),80,.45);}if(count)announce('SKY FIRE · ARROW RAIN BURNED',1);}
function tickChargeUnit(i,dt,predict=false){
 const p=players[i];p.chargeRest=Math.max(0,(p.chargeRest||0)-dt);
 if(!p.charging)return;
 if(!chargeAllowed(i)){stopCharge(i);return;}
 p.chargeLease-=dt;p.chargeAge+=dt;
 if(p.chargeLease<=0||p.chargeAge>(typeof astraMaxHold==='function'?astraMaxHold(i):COMBAT_FEEL.maxHold)){stopCharge(i);return;}
 if(!(typeof astraChargeTick==='function'&&astraChargeTick(i,dt)))p.focus=Math.min(1.5,p.focus+dt*1.5/COMBAT_FEEL.chargeTime*fateMod(i).draw*bowDrawFactor(i)*balanceStats(i).drawSpeedMultiplier*(typeof quiverDrawFactor==='function'?quiverDrawFactor(i):1));
 p.skyFire=!p.armed&&!(typeof quiverTactical==='function'&&quiverTactical(i))&&aims[i].angle>=ARROW_BALANCE.skyAngle&&aims[i].angle<=115&&p.chargeAge>=COMBAT_FEEL.skyWarmup;
 if(p.skyFire&&!predict){burnRain(i);p.fireTick-=dt;if(p.fireTick<=0){p.fireTick=COMBAT_FEEL.fireInterval;spawnSpriteEffect('fire',p.x,140,170,.45);}}
}
function tickCombatCharges(dt){players.forEach((p,i)=>{if(p.aiCharge)p.chargeLease=COMBAT_FEEL.remoteLease;tickChargeUnit(i,dt);});}
function chargingShield(i,a){const p=players[i];return !bowOpen(i)&&!(typeof quiverTactical==='function'&&quiverTactical(i))&&p.charging&&chargeAllowed(i)&&p.chargeAge<=(typeof astraMaxHold==='function'?astraMaxHold(i):COMBAT_FEEL.maxHold)&&(!p.armed||!astraConfig(i)||p.astraShield>0)&&!a.special&&!a.spirit&&!a.rain&&!a.rainSeed&&!a.formationBreaker;}
function drawChargeSignals(){
 players.forEach((p,i)=>{if(!p.charging||!chargeAllowed(i))return;const amount=Math.min(1,p.focus/1.5),color=p.skyFire?'#ff9b50':p.armed?ASTRAS[p.selected].color:p.color;ctx.save();ctx.strokeStyle=color;ctx.fillStyle=color+'20';ctx.lineWidth=3;if(!(typeof quiverTactical==='function'&&quiverTactical(i))){ctx.beginPath();ctx.ellipse(p.x,p.y-32,84,105,0,0,Math.PI*2);ctx.fill();ctx.stroke();}ctx.fillStyle='#091221e8';ctx.fillRect(p.x-106,p.y-185,212,44);ctx.fillStyle=color;ctx.textAlign='center';ctx.font='bold 16px sans-serif';ctx.fillText(typeof quiverTactical==='function'&&quiverTactical(i)?(amount>=1?'PHYSICAL READY':'DRAW · '+Math.round(amount*100)+'%'):p.skyFire?'SKY FIRE':amount>=1?'SPIRIT READY':'CHARGING · '+Math.round(amount*100)+'%',p.x,p.y-163);ctx.fillRect(p.x-94,p.y-152,188*amount,4);ctx.restore();});
 // The ring marks the deliberate overdraw boundary; moving inside returns to normal aim.
 for(const d of drags.values()){ctx.save();ctx.strokeStyle=d.chargeZone?players[d.i].color:'#e9d7ab77';ctx.lineWidth=d.chargeZone?3:2;ctx.setLineDash([9,9]);ctx.beginPath();ctx.arc(d.start.x,d.start.y,COMBAT_FEEL.dragEnter,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);ctx.font='15px sans-serif';ctx.textAlign='center';ctx.fillStyle='#fff1ca';ctx.fillText(typeof quiverTactical==='function'&&quiverTactical(d.i)?'PHYSICAL DRAW · RELEASE TO FIRE':d.chargeZone?'SPIRIT CHARGE · RELEASE TO FIRE':'PULL PAST THE RING TO CHARGE',d.start.x,Math.max(28,d.start.y-COMBAT_FEEL.dragEnter-12));ctx.restore();}
}

function savePreferences(){try{localStorage.setItem('astra-settings',JSON.stringify(options));localStorage.setItem('astra-career',JSON.stringify(career))}catch{}}

const roster=[
{name:'Arjun',weapon:'Gandiva',title:'The peerless archer',hp:100,damage:18,speed:1.12,cooldown:.68,astra:'Brahmastra',charges:2,specialDamage:38,color:'#91d9ee',role:'SPEED & PRECISION',desc:'Swift Gandiva arrows. Strike first, then intercept the counterattack.',tag:'Brahmastra · celestial burst'},
{name:'Karna',weapon:'Vijaya',title:'Son of the sun',hp:115,damage:24,speed:1,cooldown:1.05,astra:'Vasavi Shakti',charges:1,specialDamage:60,color:'#f3b461',role:'POWER & PIERCING',desc:'Heavy arrows pierce guards. One Shakti can change the entire duel.',tag:'Vasavi Shakti · one decisive strike'},
{name:'Bhishma',weapon:'Kuru bow',title:'The grand patriarch',hp:145,damage:17,speed:.97,cooldown:1,astra:'Vajra',charges:2,specialDamage:34,color:'#c7b3ff',role:'ENDURANCE & DEFENCE',desc:'A resilient guardian with a stronger, longer-lasting shield.',tag:'Vajra · thunderburst (adapted)'},
{name:'Drona',weapon:'Acharya bow',title:'Master of arms',hp:105,damage:19,speed:1.04,cooldown:.9,astra:'Agneya',charges:2,specialDamage:32,color:'#ff855f',role:'CONTROL & FIRE',desc:'A master archer. Agneya ignites a lingering field of fire.',tag:'Agneya · burning ground'}];
roster.push(...NEW_WARRIORS);roster.forEach((c,i)=>{const b=ROSTER_BALANCE[i];c.hp=b.maxHp;c.damage=b.baseArrowDamage;c.speed=b.projectileSpeedMultiplier;c.cooldown=COMBAT_BALANCE.normalRecovery;c.desc='Exclusive arsenal: '+LOADOUTS[roster.indexOf(c)].map(k=>ASTRAS[k].name).join(', ')+'.'})
let started=false,hudElapsed=0;
let chosen=[0,1],players=[],arrows=[],particles=[],rings=[],fires=[],mode='ai',paused=false,ended=false,elapsed=0,round=1,shots=[0,0],hits=[0,0],clashes=0,aims=[{angle:42,power:.82},{angle:42,power:.82}],drags=new Map(),target=0,aiTimer=2.8,noticeTime=5,shake=0,last=0,acc=0,sound=options.sound,audioContext;
const bg=new Image();bg.src='battlefield.jpg';
function makePlayer(i){let c=roster[chosen[i]];return {...c,loadout:currentLoadout(chosen[i]),ammo:Object.fromEntries(currentLoadout(chosen[i]).map(k=>[k,ASTRAS[k].uses])),selected:currentLoadout(chosen[i])[0],armed:false,stamina:100,staminaDelay:0,staminaRageFilled:false,finalSlowUsed:false,finalSlowTime:0,resolve:0,tactic:null,tacticReady:false,tacticArmed:false,tacticTimer:10,focus:0,venom:0,venomTick:0,venomOwner:0,id:chosen[i],x:i?1230:170,y:456,hp:c.hp,maxHp:c.hp,charges:c.charges,cool:0,shield:0,guardCool:0,burn:0,flash:0,release:0};}
function reset(){if(round===1&&score.every(n=>n===0))battlefieldShattered=false;if(typeof resetBattleStats==='function')resetBattleStats();if(typeof astraReset==='function')astraReset();chargeInputSignature='';chargeInputAge=0;matchIntro={id:matchIntro.id+1,left:3};impactCutscene=null;cutsceneSeen.clear();ultimate=null;renderUltimateHUD();pendingShots=[];clashSlow=0;keyboardDraw.clear();weather={type:-1,time:0};flash=0;damageTexts=[];shake=0;started=false;players=[makePlayer(0),makePlayer(1)];if(typeof counterResetRound==='function')counterResetRound();aims=players.map(p=>({angle:42,power:Math.max(.05,Math.min(1,(Math.sqrt(1028*G/Math.sin(84*Math.PI/180))/p.speed-420)/440))}));arrows=[];particles=[];rings=[];fires=[];shots=[0,0];hits=[0,0];clashes=0;elapsed=0;aiTimer=2.8;ended=false;paused=false;drags.clear();$('result').classList.add('hidden');$('pause').textContent='Ⅱ Pause';announce('Draw your bow. Begin your legend.',5);resetLore();if(typeof quiverReset==='function')quiverReset();players.forEach(p=>{if(typeof formationFresh==='function')p.formation=formationFresh();p.bowCombat=bowFresh();});resetBattleEffects();if(typeof fateReset==='function')fateReset();if(typeof astraReset==='function')astraReset();buildArsenal();refresh();renderCards()}
function announce(text,time=2){if(typeof rollbackAnnounce==='function'&&rollbackAnnounce(text,time))return;$('banner').textContent=text;noticeTime=time}
function refresh(){if(typeof rb!=='undefined'&&rb.executing)return;players.forEach((p,i)=>{$('name'+i).textContent=p.name.toUpperCase();$('health'+i).textContent=Math.ceil(p.hp)+' / '+p.maxHp;$('bar'+i).style.width=(p.hp/p.maxHp*100)+'%';$('state'+i).textContent=p.weapon.toUpperCase()+' · '+p.title.toUpperCase();let spell=ASTRAS[p.selected];p.charges=p.ammo[p.selected];p.astra=spell.name;$('astra'+i).textContent=(p.armed?'ARMED · ':'ARM · ')+(typeof counterEquipped==='function'&&counterEquipped(p)&&!p.counter.revealed?'COUNTER ASTRA':spell.name.toUpperCase());$('charge'+i).textContent=p.charges?`${p.charges} uses · ${typeof counterEquipped==='function'&&counterEquipped(p)?0:spell.cost} Resolve · ${p.armed?'draw':'arm'}`:'Astra spent';$('special'+i).classList.toggle('armed',p.armed);$('astraSelect'+i).disabled=paused||ended||(i===1&&mode==='ai');$('astraSelect'+i).value=p.selected;$('astraInfo'+i).textContent=lockReason(p,spell)||(typeof counterEquipped==='function'&&counterEquipped(p)&&!p.counter.revealed?'Equipped Counter Astra · aim and release':spell.description);let unlock=!lockReason(p,spell);$('resolve'+i).textContent='RESOLVE '+Math.floor(p.resolve)+'/100 · '+(rageReady(i)?'RAGE READY':'RAGE · ENEMY HP ≤35%');$('resolveBar'+i).style.width=p.resolve+'%';$('tactic'+i).textContent=p.tacticReady?(p.tacticArmed?'ARMED · ':'')+TACTICS[p.tactic].name:'TACTIC IN '+Math.ceil(p.tacticTimer)+'s';$('tactic'+i).disabled=!p.tacticReady||paused||ended||(i===1&&mode==='ai');$('tactic'+i).title=p.tactic?TACTICS[p.tactic].description:'Random shared ability every 18 seconds';$('special'+i).disabled=ended||paused||p.charges===0||!unlock||p.cool>0||(i===1&&mode==='ai');$('guard'+i).disabled=ended||paused||p.guardCool>0||(i===1&&mode==='ai');$('guardText'+i).textContent=p.shield>0?'ACTIVE':p.guardCool>0?Math.ceil(p.guardCool)+'s cooldown':'Ready · '+(i?'O':'E');});$('clock').textContent=String(Math.floor(elapsed/60)).padStart(2,'0')+':'+String(Math.floor(elapsed%60)).padStart(2,'0');$('round').textContent='ROUND '+String(round).padStart(2,'0');$('modeLabel').textContent=ruleSet==='lore'?'LORE ENCOUNTER':mode==='ai'?'ARCADE · AI':mode==='online'?'ONLINE · FRIEND DUEL':'ARCADE · LOCAL';$('score').textContent=score[0]+' — '+score[1];$('angle').textContent=Math.round(effectiveAim(0).angle)+'°';$('power').textContent=Math.round(effectiveAim(0).power*100)+'%';$('aimMode').textContent=options.reverseAim?'AIM: DIRECT →':'AIM: PULL BACK ←';$('hint').textContent='AIM INSIDE RING · OVERDRAW TO CHARGE · SKYWARD FOR FIRE';refreshLore();if(typeof refreshOrbHUD==='function')refreshOrbHUD();renderUltimateHUD();refreshSkyHUD();if(typeof refreshAstraHUD==='function')refreshAstraHUD();if(typeof refreshCounterHUD==='function')refreshCounterHUD();if(typeof refreshQuiverHUD==='function')refreshQuiverHUD();if(typeof refreshFormationHUD==='function')refreshFormationHUD();if(typeof refreshBowCombatHUD==='function')refreshBowCombatHUD();}
function velocity(i,a=aims[i],special=players[i].armed){a=effectiveAim(i,a,special);let speed=(420+440*a.power)*players[i].speed*(typeof fateMod==='function'?fateMod(i).velocity:1)*(special?ASTRAS[players[i].selected].speed:players[i].focus>=ARROW_BALANCE.focus&&!(typeof quiverTactical==='function'&&quiverTactical(i))?ARROW_BALANCE.spiritSpeed:1)*(typeof quiverVelocityFactor==='function'?quiverVelocityFactor(i,special):1);return {vx:Math.cos(a.angle*Math.PI/180)*speed*(i?-1:1),vy:-Math.sin(a.angle*Math.PI/180)*speed}}
function buildArsenal(){players.forEach((p,i)=>{const select=$('astraSelect'+i),signature=p.loadout.map(k=>k+':'+p.ammo[k]).join(',');if(select.dataset.arsenal===signature)return;select.dataset.arsenal=signature;select.innerHTML=p.loadout.map(k=>`<option value="${k}">${ASTRAS[k].tier===2?'ULT · ':ASTRAS[k].tier===1?'II · ':'I · '}${ASTRAS[k].name} · ${p.ammo[k]} uses</option>`).join('')})}
function armAstra(i){if(onlineAction('arm',i))return;let p=players[i];if(atHome||paused||ended||blockedAction(i)||!fateRanged(i)||!p.ammo[p.selected]||lockReason(p,ASTRAS[p.selected])||(i===1&&mode==='ai'))return;stopCharge(i);p.armed=!p.armed;p.tacticArmed=false;p.focus=0;tone(p.armed?440:220,.12,'triangle');refresh()}
function chooseAstra(i,key){if(onlineAction('choose',i,{key}))return;let p=players[i];if(!p.loadout.includes(key))return;stopCharge(i);p.selected=key;p.skyMode=false;p.armed=false;p.focus=0;refresh()}
function shoot(i,special=players[i].armed,ultimateRelease=false){if(onlineAction('shoot',i,{...aims[i],focus:players[i].focus}))return false;let p=players[i],spell=ASTRAS[p.selected];if(atHome||ended||paused||blockedAction(i)||!fateRanged(i)||p.rescue>0||p.cool>0||!bowCanShoot(i,special)||(special&&(!p.ammo[p.selected]||lockReason(p,spell))))return false;if(typeof quiverCanShoot==='function'&&!quiverCanShoot(i,special))return false;if(typeof astraReleaseAllowed==='function'&&!astraReleaseAllowed(i,special))return false;if(typeof staminaCost==='function'&&staminaValue(p)<staminaCost(i,special))return false;if(arrows.length+pendingShots.length+(typeof quiverDefinition==='function'&&!special&&quiverDefinition(i).id==='power_arrow_rapid'?2:0)>=(typeof ASTRA_GLOBAL!=='undefined'?ASTRA_GLOBAL.projectileLimit:150))return false;if(special&&spell.tier===2&&p.selected!=='lore_narayana'&&!ultimateRelease)return beginUltimate(i);if(special&&p.selected==='lore_narayana')return invokeNarayana(i);if(narayana&&narayana.owner!==i)narayana.anger=Math.min(5,narayana.anger+1);started=true;p.release=.32;if(typeof astraRegisterAttack==='function')astraRegisterAttack(i);if(!special&&p.tacticArmed){useOffensiveTactic(i);return true}let spirit=!special&&p.focus>=ARROW_BALANCE.focus&&!(typeof quiverTactical==='function'&&quiverTactical(i)),rainSeed=!special&&!spirit&&!(typeof quiverTactical==='function'&&quiverTactical(i))&&aims[i].angle>=ARROW_BALANCE.skyAngle&&aims[i].angle<=115,spiritSky=spirit&&aims[i].angle>=ARROW_BALANCE.skyAngle&&aims[i].angle<=115;const phase=typeof ASTRA_PHASES!=='undefined'&&special?ASTRA_PHASES[p.selected]:null,spiritCast=!!phase&&(p.focus>=1.5||typeof stabilityRelease==='function'&&!!stabilityRelease(i));let sky=isSkyShot(i,special),v=velocity(i,aims[i],special),focus=Math.min(1,p.focus/1.5),count=Math.min(special&&spell.tier===2||sky||spiritCast?1:special?(spell.volley||1):1,(typeof ASTRA_GLOBAL!=='undefined'?ASTRA_GLOBAL.projectileLimit:150)-arrows.length-pendingShots.length),mods=typeof fateMod==='function'?fateMod(i,{spell:p.selected}):{damage:1,normalDamage:1,draw:1,perfect:1},perfect=special?focus>=1/mods.perfect:balancePerfect(i,focus);const quiverStart=arrows.length;if(typeof fateLaunch==='function')fateLaunch(i,special?p.selected:null,i+':'+round+':'+shots[i],perfect,!ultimateRelease);for(let n=0;n<count;n++){let offset=(n-(count-1)/2)*.025,c=Math.cos(offset),sn=Math.sin(offset);arrows.push({x:p.x+(i?-32:32),y:p.y+(p.dismounted?15:-55),px:0,py:0,vx:v.vx*c-v.vy*sn,vy:v.vx*sn+v.vy*c,owner:i,spirit,rainSeed,spiritSky,projectileId:i+':'+round+':'+shots[i]+':'+n,castId:i+':'+round+':'+shots[i],sky,special,spell:special?p.selected:null,element:special?spell.element:null,radius:special?spell.radius:0,perfect,critical:perfect,damage:special?spell.damage*.42*(1+.25*focus)*mods.damage*(perfect?mods.perfect:1):balancePhysicalDamage(i,focus,spirit,perfect),color:special?spell.color:p.color,trail:[],alive:true,age:0});if(phase)astraDecorate(arrows[arrows.length-1],i,spiritCast);balanceUltimateArrow(arrows[arrows.length-1]);if(typeof quiverDecorate==='function')quiverDecorate(arrows[arrows.length-1],i);}p.cool=(special||spirit?p.cooldown:ARROW_BALANCE.quickCooldown+focus*.35)/(special?mods.draw:balanceNormalDraw(i));if(special){if(typeof counterReleased==='function')counterReleased(i);if(spell.tier===2)balanceSpendUltimate(i);if(!(typeof counterEquipped==='function'&&counterEquipped(p)))p.ammo[p.selected]--;if(!(typeof counterEquipped==='function'&&counterEquipped(p)))p.resolve=Math.max(0,p.resolve-spell.cost);weather={type:spell.weather,time:sky&&spiritCast?0:6};flash=options.reduced?0:.16;shake=options.reduced?0:12;sfx('invoke',spell.weather);announce(p.name+(sky?' sends skyward ':' invokes ')+spell.name+(focus>=1?' · SPIRIT FOCUS':''),2.5);buildArsenal();if(phase)astraAfterRelease(i,phase,spiritCast,i+':'+round+':'+shots[i]);}if(typeof staminaSpend==='function')staminaSpend(i,staminaCost(i,special));if(typeof quiverAfterShot==='function')quiverAfterShot(i,arrows[quiverStart]);if(typeof formationShot==='function')formationShot(i,arrows[quiverStart],effectiveAim(i,aims[i],special).angle);bowRelease(i,arrows[quiverStart]);p.armed=false;p.skyMode=false;stopCharge(i);shots[i]++;if(rainSeed)announce('ARROW RAIN INCOMING · OVERDRAW SKYWARD FOR FIRE',2);else if(spirit)announce(spiritSky?'SPIRIT ARROW · SKY BARRAGE':'SPIRIT ARROW · FULL CHARGE',1.2);if(!special){p.resolve=Math.min(100,p.resolve+.5*fateMod(i).rage);sfx('bow')}refresh();return true}
function guard(i){if(onlineAction('guard',i))return;if(ultimate){selectCounter(i,'brace');return;}let p=players[i];if(countdownLocked()||atHome||ended||paused||impactCutscene||p.guardCool>0||bowOpen(i))return;p.shield=p.id===2?2.8:1.8;p.guardCool=7;sfx('guard');refresh()}
function unlockAudio(){if(!sound)return;try{audioContext??=new(window.AudioContext||window.webkitAudioContext)();audioContext.resume();loadBattleSound('arrow');loadBattleSound('conch');if(!audioMaster){audioMaster=audioContext.createGain();audioMaster.connect(audioContext.destination)}audioMaster.gain.value=options.volume*.6*(typeof voices!=='undefined'&&voices.active?.started?.valueOf()?.85:1)}catch{}}
function tone(f,d,type='sine',delay=0){if(typeof rollbackAudio==='function'&&rollbackAudio('tone',[f,d,type,delay]))return;if(!sound)return;unlockAudio();if(!audioContext||!audioMaster)return;let t=audioContext.currentTime+delay,o=audioContext.createOscillator(),g=audioContext.createGain();o.type=type;o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(Math.max(30,f*.6),t+d);g.gain.setValueAtTime(.14,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(audioMaster);o.start(t);o.stop(t+d);o.onended=()=>{o.disconnect();g.disconnect()}}
function noise(d,cutoff=800,volume=.3){if(typeof rollbackAudio==='function'&&rollbackAudio('noise',[d,cutoff,volume]))return;if(!sound)return;unlockAudio();if(!audioContext||!audioMaster)return;let buffer=audioContext.createBuffer(1,Math.ceil(audioContext.sampleRate*d),audioContext.sampleRate),data=buffer.getChannelData(0);for(let n=0;n<data.length;n++)data[n]=(Math.random()*2-1)*(1-n/data.length)**2;let src=audioContext.createBufferSource(),filter=audioContext.createBiquadFilter(),gain=audioContext.createGain();src.buffer=buffer;filter.type='lowpass';filter.frequency.value=cutoff;gain.gain.value=volume;src.connect(filter).connect(gain).connect(audioMaster);src.start();src.onended=()=>{src.disconnect();filter.disconnect();gain.disconnect()}}
function sfx(type,id=0){if(typeof rollbackAudio==='function'&&rollbackAudio('sfx',[type,id]))return;if(type==='bow'){if(battleSounds.buffers.arrow)playBattleSound('arrow');else{noise(.14,3300,.13);tone(260,.09,'triangle')}}if(type==='impact'){noise(.3,800,.45);tone(75,.2)}if(type==='blast'){noise(.9,550,.7);tone(48,.6);tone(92,.4,'triangle',.06)}if(type==='guard'){tone(800,.3);tone(1200,.2,'sine',.06)}if(type==='invoke'){noise(.65,1400,.25);[130,195,260].forEach((f,i)=>tone(f+id*25,.7,'triangle',i*.09))}if(type==='victory'){[262,330,392,523].forEach((f,i)=>tone(f,.5,'triangle',i*.15))}}
function explode(x,y,color,big=false){rings.push({x,y,color,life:big?.8:.4,max:big?.8:.4,size:big?125:50});for(let j=0;j<(big?60:20);j++){let a=Math.random()*Math.PI*2,s=30+Math.random()*(big?320:150);particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.3+Math.random()*.7,color})}shake=options.reduced?0:big?18:5;flash=big&&!options.reduced?.12:0;sfx(big?'blast':'impact')}
function hurt(i,d,owner,piercing=false,context={}){let p=players[i],hpBefore=p.hp;if(!context.trueDamage&&typeof formationDamage==='function')d*=formationDamage(context,context.hitZone);if(context.execution){if(typeof recordBattleDamage==='function')recordBattleDamage(owner,p.hp);const u=balanceUnit(i);p.hp=0;fateController.enter(i,'DEAD',0,'SpecialDeath');return {damage:p.maxHp,hp:0,execution:true};}if(!context.trueDamage&&typeof BattlefieldEnvironmentController!=='undefined')d=BattlefieldEnvironmentController.damage(d,context);d=balanceCastDamage(i,d,context);if(d<=0)return {damage:0,hp:p.hp};if(p.shield>0&&!context.ultimateFraction&&!context.trueDamage)bowPressure(i,context);if(p.shield>0&&!context.ultimateFraction&&!context.trueDamage)d*=piercing?.65:p.id===2?.1:.25;let outcome;if(ruleSet==='lore'&&episode==='narayana'&&i===1&&!trialCompleted)d=Math.min(d,Math.max(0,p.hp-1));if(typeof fateDamage==='function'){outcome=fateDamage(i,d,owner,context);d=outcome.damage;}else p.hp=Math.max(0,p.hp-d);if(typeof recordBattleDamage==='function'&&!outcome?.miss)recordBattleDamage(owner,Math.max(0,hpBefore-p.hp));p.resolve=Math.min(100,p.resolve+d*.3*(typeof fateMod==='function'?fateMod(i).rage:1)*(p.equipment.banner>0?.5:1));players[owner].resolve=Math.min(100,players[owner].resolve+d*.4*(typeof fateMod==='function'?fateMod(owner).rage:1)*(players[owner].equipment.banner>0?.5:1));p.flash=.3;damageTexts.push({x:p.x,y:p.y-100,text:Math.round(d)+(context.hitZone?' · '+context.hitZone.toUpperCase():''),life:1,color:p.shield>0?'#b7daee':'#ffe0b4'});hits[owner]++;if(!outcome?.miss&&d>0)bowPunish(i,context);if(typeof formationInterrupt==='function'&&!outcome?.miss&&d>=4&&!context.dot)formationInterrupt(i);if(typeof stabilityHit==='function'&&!outcome?.miss&&d>0)stabilityHit(i,owner,context);if(typeof astraChargeInterrupt==='function')astraChargeInterrupt(i,d,context);return outcome;}
function impact(a,x,y,hit=false){if(typeof astraEmit==='function'&&!a.special)astraEmit('PhysicalImpact',a.owner,{x,y,heavy:a.spirit,medium:a.arrowTypeId==='arrow_naracha'});if(typeof quiverImpact==='function')quiverImpact(a,x,y,hit);if(typeof astraImpact==='function'&&astraImpact(a,x,y,hit))return;a.alive=false;if(hit&&chargingShield(1-a.owner,a))return;if(a.special){spawnSpriteEffect(a.element,x,y,a.radius*1.5,.8);}explode(x,y,a.color,a.special);let enemy=1-a.owner,p=players[enemy];if(a.special){let dist=Math.hypot(x-p.x,(y-(p.y+20))*.8),connected=hit||dist<a.radius;if(connected){if(typeof fateCastHit==='function')fateCastHit(a);knockChariot(enemy,ASTRAS[a.spell].tier===2?1.8:1);const outcome=hurt(enemy,a.damage*(hit?1:1-dist/(a.radius*1.3)),a.owner,ASTRAS[a.spell]?.tier===2||a.element==='solar'||a.element==='thunder'||players[a.owner].id===1,a);if(hit&&ASTRAS[a.spell].tier===2&&!outcome?.miss)beginImpactCutscene(a,enemy);if(a.element==='venom'&&!outcome?.miss){p.venom=3*(typeof fateMod==='function'?fateMod(enemy).status:1);p.venomTick=0;p.venomOwner=a.owner}}
if(a.element==='fire')fires.push({x,owner:a.owner,life:3,tick:0});if(a.element==='water')players[a.owner].shield=Math.max(players[a.owner].shield,1.4);elementalImpact(a,x);if(a.element==='thunder')rings.push({x,y,color:a.color,life:.5,max:.5,size:120,bolt:true});
}else if(hit){if(typeof fateCastHit==='function')fateCastHit(a);const result=hurt(enemy,a.damage*(HIT_BALANCE.damage[a.hitZone]||1)*(typeof quiverHitScale==='function'?quiverHitScale(a):1),a.owner,players[a.owner].id===1,a);if(typeof quiverBodyHit==='function')quiverBodyHit(a,enemy,result);}}
// Continuous relative-motion collision: minimum distance along the two arrows' swept paths.
function swept(ax,ay,bx,by,r){let dx=bx-ax,dy=by-ay,t=Math.max(0,Math.min(1,-(ax*dx+ay*dy)/(dx*dx+dy*dy||1)));return (ax+t*dx)**2+(ay+t*dy)**2<=r*r}
function update(dt){if(atHome||paused||ended)return;if(tickMatchIntro(dt))return;if(fateFilmHolding()){cancelAllCharges();return;}if(ultimate||impactCutscene){cancelAllCharges();return;}if(typeof finalShotScale==='function')dt*=finalShotScale(dt);if(typeof staminaTick==='function')staminaTick(dt);tickCombatCharges(dt);elapsed+=dt;bowTick(dt);if(typeof formationTick==='function')formationTick(dt);if(typeof quiverTick==='function')quiverTick(dt);if(typeof fateTick==='function')fateTick(dt);players.forEach((p,i)=>{p.resolve=Math.min(100,p.resolve+dt*.8*fateMod(i).rage*(p.equipment.banner>0?.5:1));p.tacticTimer-=dt;if(p.tacticTimer<=0){rollTactic(p);p.tacticTimer=18}});for(let queued of pendingShots){queued.delay-=dt;if(queued.delay<=0){arrows.push(queued.arrow);sfx('bow');players[queued.arrow.owner].release=.18}}pendingShots=pendingShots.filter(q=>q.delay>0);weather.time=Math.max(0,weather.time-dt);flash=Math.max(0,flash-dt);damageTexts.forEach(t=>{t.life-=dt;t.y-=dt*40});damageTexts=damageTexts.filter(t=>t.life>0);$('weatherLabel').textContent='WEATHER · '+(weather.time>0?['CELESTIAL SKY','SOLAR HAZE','THUNDERSTORM','FIRE & ASH'][weather.type]:'CALM');noticeTime-=dt;if(noticeTime<=0){$('banner').textContent='';if(typeof rollbackNoticeExpired==='function')rollbackNoticeExpired();}players.forEach(p=>{p.release=Math.max(0,p.release-dt);p.cool=Math.max(0,p.cool-dt);p.shield=Math.max(0,p.shield-dt);p.guardCool=Math.max(0,p.guardCool-dt);p.flash=Math.max(0,p.flash-dt);if(p.venom>0){p.venom-=dt;p.venomTick+=dt;if(p.venomTick>=1){p.venomTick-=1;hurt(players.indexOf(p),1.25,p.venomOwner)}}});
updateBattleEffects(dt);if(typeof astraTick==='function')astraTick(dt);if(typeof BattlefieldEnvironmentController!=='undefined')BattlefieldEnvironmentController.tick(dt);if(typeof counterTick==='function')counterTick();updateLore(dt);const astraAIHandled=(typeof drona!=='undefined'&&drona.active)||typeof formationAI==='function'&&formationAI()||typeof quiverAI==='function'&&quiverAI()||typeof stabilityAI==='function'&&stabilityAI()||typeof counterAI==='function'&&counterAI()||typeof astraAI==='function'&&astraAI(dt);if(!astraAIHandled&&mode==='ai'&&!(ruleSet==='lore'&&episode==='narayana'&&elapsed<45)){
const enemyRain=arrows.some(a=>a.alive&&a.owner===0&&(a.rain||a.rainSeed));
if(!players[1].aiCharge&&chargeAllowed(1)&&(enemyRain||players[0].charging&&(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)!=='easy')){players[1].armed=false;aims[1]={angle:enemyRain?75:30,power:.55};if(setChargeIntent(1,true)){players[1].aiCharge=true;}}
if(players[1].aiCharge){if(enemyRain)aims[1].angle=75;if(players[1].focus>=1.5){if(!enemyRain){const v=velocity(1,aims[1],false),speed=Math.hypot(v.vx,v.vy);aims[1].angle=Math.max(5,Math.asin(Math.min(1,Math.abs(players[1].x-players[0].x-64)*G/(speed*speed)))*90/Math.PI);}shoot(1,false);stopCharge(1);aiTimer=.7/balanceNormalDraw(1);}}
else{aiTimer-=dt;if(aiTimer<=0){let skill=typeof arcadeSkill==='function'&&arcadeRun.active?arcadeSkill():({easy:2.8,normal:1.5,hard:.55}[(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)]||1.5);let p=players[1],angle=30+Math.random()*25,dist=players[1].x-players[0].x-64,speed=Math.sqrt(dist*G/Math.sin(2*angle*Math.PI/180));aims[1]={angle:angle+(Math.random()-.5)*4*skill/balanceStats(1).accuracyModifier,power:Math.max(.05,Math.min(1,(speed/p.speed-420)/440+(Math.random()-.5)*.055*skill/balanceStats(1).accuracyModifier))};let available=p.loadout.filter(k=>p.ammo[k]>0&&!lockReason(p,ASTRAS[k])&&!(p.id===5&&ASTRAS[k].tier===2&&players[0].loadout.some(c=>availableCounter(0,c)))),special=available.length>0&&elapsed>5&&Math.random()<.35;if(special){p.selected=available[Math.floor(Math.random()*available.length)];p.focus=.5+Math.random();let boost=ASTRAS[p.selected].speed;aims[1].power=Math.max(.05,Math.min(1,(speed/(p.speed*boost)-420)/440))}if(!special&&p.tacticReady&&Math.random()<.45)activateTactic(1);if(special&&ASTRAS[p.selected].tier<2&&elapsed>20&&!skyHazards.some(h=>h.owner===1)&&Math.random()<.18){p.skyMode=true;aims[1]={angle:76,power:.85};}if(!special&&!p.tacticArmed&&Math.random()<.3){aims[1].power=.55;if(setChargeIntent(1,true))p.aiCharge=true;}else shoot(1,special);aiTimer=(typeof arcadePace==='function'&&arcadeRun.active?arcadePace():({easy:2.7,normal:1.8,hard:1.1}[(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)]||1.8))/balanceNormalDraw(1)+Math.random()*.7}if(arrows.some(a=>a.owner===0&&a.special&&a.x>950)&&players[1].guardCool<=0&&(typeof combatAIDifficulty==='function'?combatAIDifficulty():options.difficulty)!=='easy')guard(1)}}
if(ultimate)return;for(let a of arrows){if(a.rainDelay>0){a.rainDelay=Math.max(0,a.rainDelay-dt);continue;}a.px=a.x;a.py=a.y;if(typeof formationProjectile==='function')formationProjectile(a,dt);if(typeof BattlefieldEnvironmentController!=='undefined')BattlefieldEnvironmentController.projectile(a,dt);a.x+=a.vx*dt;a.y+=a.vy*dt+.5*G*(a.gravityMultiplier||1)*dt*dt;a.vy+=G*(a.gravityMultiplier||1)*dt;a.age+=dt;a.trail.push({x:a.x,y:a.y});if(a.trail.length>(a.special?32:14))a.trail.shift();if(typeof astraProjectile==='function')astraProjectile(a,dt);if(!a.alive)continue;if(a.sky&&a.y<=145&&a.vy<0)castSky(a);arrowSkyEvent(a)}
for(let i=0;i<arrows.length;i++)for(let j=i+1;j<arrows.length;j++){let a=arrows[i],b=arrows[j];if(a.alive&&b.alive&&!(a.rainDelay>0)&&!(b.rainDelay>0)&&a.owner!==b.owner&&!!a.duel===!!b.duel&&swept(a.px-b.px,a.py-b.py,a.x-b.x,a.y-b.y,a.special||b.special?24:15)){const au=a.special&&ASTRAS[a.spell]?.tier===2,bu=b.special&&ASTRAS[b.spell]?.tier===2;if(au!==bu){const weak=au?b:a;weak.alive=false;if(typeof astraSpiritClash==='function')astraSpiritClash(a,b,'ultimate');explode(weak.x,weak.y,weak.color,false);announce('ULTIMATE OVERPOWERS THE ARROW',1);}else if(typeof counterClash==='function'&&counterClash(a,b)){if(typeof astraSpiritClash==='function')astraSpiritClash(a,b,'counter');clashes++;continue;}else if(standardArrowClash(a,b)){continue;}else{a.alive=b.alive=false;if(typeof astraSpiritClash==='function')astraSpiritClash(a,b,au?'ultimate':'astra');if(!ultimateClash(a,b)&&!elementalCounter(a,b))clashBurst(a,b);clashes++}}}
for(let a of arrows){if(!a.alive||a.rainDelay>0)continue;if(a.duel)continue;if(typeof formationCollision==='function'&&formationCollision(a))continue;let enemy=1-a.owner,p=players[enemy];if(p.rescue>0&&a.special&&a.element==='venom'&&Math.abs(a.x-p.x)<100){a.alive=false;p.rescueDodge=true;explode(a.x,p.y-95,'#f5d495',false);announce('KRISHNA’S RESCUE · THE SERPENT ARROW PASSES OVERHEAD',2);continue}
if(typeof quiverGuardBlocks==='function'&&quiverGuardBlocks(enemy,a)){bowPressure(enemy,a);a.alive=false;rings.push({x:a.x,y:a.y,color:'#e4c887',life:.2,max:.2,size:30});tone(1200,.05);continue;}if(chargingShield(enemy,a)&&swept(a.px-p.x,a.py-(p.y-32),a.x-p.x,a.y-(p.y-32),95)){bowPressure(enemy,a);a.alive=false;if(typeof staminaShieldHit==='function')staminaShieldHit(enemy);if(typeof stabilityHit==='function'){const shift=p.dismounted?65:0,zone=a.y<p.y-71+shift?'head':a.y>=p.y-28+shift?'low':'body';stabilityHit(enemy,a.owner,{...a,hitZone:a.hitZone||zone},true);}if(players[enemy].armed&&typeof ASTRA_GLOBAL!=='undefined')players[enemy].astraShield=Math.max(0,players[enemy].astraShield-ASTRA_GLOBAL.shieldArrowWear*(a.shieldDamage||1));rings.push({x:a.x,y:a.y,color:p.color,life:.3,max:.3,size:35});continue;}if(!a.special){const contact=arrowContact(a,enemy);if(contact){a.x=contact.x;a.y=contact.y;if(contact.equipment){a.alive=false;fateCastHit(a);if(!(typeof quiverEquipmentHit==='function'&&quiverEquipmentHit(a,enemy,contact.zone)))equipmentHit(enemy,contact.zone,a.owner,{...a,hitZone:contact.zone});if(typeof quiverImpact==='function')quiverImpact(a,a.x,a.y,true);explode(a.x,a.y,a.color,false);}else{a.hitZone=contact.zone;impact(a,a.x,a.y,true);}continue;}}
if(a.special&&!a.groundCast&&swept((a.px-p.x)/.65,a.py-(p.y+(p.dismounted?30:-35)),(a.x-p.x)/.65,a.y-(p.y+(p.dismounted?30:-35)),78))impact(a,a.x,a.y,true);else if(a.y>=GROUND)impact(a,a.x,GROUND);else if((!a.rainSeed&&!a.spiritSky&&(a.x< -100||a.x>W+100))||a.age>10)a.alive=false}if(typeof fateResolveCasts==='function')fateResolveCasts();arrows=arrows.filter(a=>a.alive);
for(let f of fires){f.life-=dt;f.tick+=dt;if(f.tick>.4){f.tick=0;let p=players[1-f.owner];if(Math.abs(p.x-f.x)<(f.radius||100))hurt(1-f.owner,f.damage??1.25,f.owner,false,{dot:true,element:'fire'});for(let k=0;k<7;k++)particles.push({x:f.x+(Math.random()-.5)*120,y:GROUND,vx:(Math.random()-.5)*30,vy:-50-Math.random()*100,life:.5,color:'#ff8d46'})}}fires=fires.filter(f=>f.life>0);
for(let p of particles){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=90*dt}particles=particles.slice(-300).filter(p=>p.life>0);for(let r of rings)r.life-=dt;rings=rings.slice(-120).filter(r=>r.life>0);shake*=.9;
if(!impactCutscene&&players.some(p=>p.hp<=0)){ended=true;cancelAllCharges();drags.clear();let win=players[0].hp<=0&&players[1].hp<=0?-1:players[0].hp>0?0:1;$('winner').textContent=win<0?'An equal reckoning':players[win].name+' is victorious';$('recap').textContent=`${Math.round(elapsed)} seconds · ${shots[0]+shots[1]} arrows released · ${clashes} mid-air clashes`;finishRound(win);$('result').classList.remove('hidden');sfx('victory');refresh()}hudElapsed+=dt;if(hudElapsed>=.1){hudElapsed=0;refresh()}}
function line(x1,y1,x2,y2,color,width=2){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()}
function ellipse(x,y,rx,ry,color){ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill()}
// Separate, registered poses: idle never borrows a bent running leg frame.
function horsePose(p,offset=0){
 if(options.reduced||!p.moving||Math.abs(p.moveVelocity||0)<2)return 0;
 return 1+Math.floor((((p.gait||0)/ (Math.PI*2)+offset)%1+1)%1*4);
}
function drawChariotHorses(p,rig){
 const frame=horsePose(p),brown=rig===1||rig===3;
 // Hand-registered source bounds, including the full extended hooves and tail.
 const bounds=[[0,390,190],[390,795,610],[795,1165,1000],[1165,1595,1405],[1595,1983,1810]];
 function horse(f,x,y,scale,shade){
  const [left,right,anchor]=bounds[f];ctx.save();ctx.globalAlpha=shade;
  ctx.drawImage(horseGaits,left,brown?425:70,right-left,320,x+(left-anchor)*scale,y-310*scale,(right-left)*scale,320*scale);ctx.restore();
 }
 horse(horsePose(p,.25),196,94,.53,1);
 horse(frame,218,100,.55,1);
 // Reins and rigid shaft link the new team to the existing carriage.
 line(109,-28,300,-28,'#79522a',1.5);line(109,-24,300,-23,'#b99859',1.2);
 line(104,47,225,22,rig===2?'#bdbacb':'#cba552',4);
}
function warrior(p,i){
 ctx.save();const fateLowered=p.fate?.chariot==='LOWERED',rescueDrop=fateLowered?22:p.rescue>0?Math.sin((.95-p.rescue)/.95*Math.PI)*22:0;
 ctx.translate(p.x,p.y+rescueDrop);ctx.scale(i?-1:1,1);
 if(!options.reduced)ctx.rotate(-p.recoilTilt);
 const col=p.flash>0?'#fff':p.color,isDrawing=[...drags.values()].some(d=>d.i===i)||keyboardDraw.has(i)||p.charging;
 const pose=p.flash>0?3:isDrawing?1:p.release>0?2:0,sheet=p.id<4?sprites:extraSprites,row=p.id%4;
 const rig=p.id===0?0:p.id===1?1:p.id===2||p.id===5?2:3;
 const animated=trotAtlas.complete&&trotAtlas.naturalWidth;
 const rescue=p.id===0&&(p.rescue>0||fateLowered)&&rescueArt.complete&&rescueArt.naturalWidth;
 let art=animated?trotAtlas:chariotArt,sx=0,sy=0,sw=art.naturalWidth/(animated?4:2),sh=animated?art.naturalHeight/4:sw;
 const frame=0; // Fixed registration: animate limbs, never swap the entire carriage.
 if(animated){sx=frame*sw;sy=rig*sh;}else{sx=(rig%2)*sw;sy=Math.floor(rig/2)*sh;}
 // Source registration: deck at local +35, axle +65, hooves at ground +100.
 let dx=-55,dy=animated?-100:-146,dw=390,dh=animated?200:290;
 if(rescue){art=rescueArt;sw=sh=art.naturalWidth/2;const f=Math.min(3,Math.floor((fateLowered?.65:(.95-p.rescue)/.95)*4));sx=f%2*sw;sy=Math.floor(f/2)*sh;dy=-146;dh=290;}
 const separateHorses=animated&&!rescue&&horseGaits.complete&&horseGaits.naturalWidth;
 const drawRig=()=>{if(art.complete&&art.naturalWidth){ctx.save();
 if(separateHorses){ctx.beginPath();ctx.rect(dx,dy,dw*.44,dh);ctx.clip();}
 else if(animated&&!rescue){ctx.beginPath();ctx.rect(dx,dy,dw*.5,dh);ctx.rect(dx+dw*.5,dy+dh*.2,dw*.5,dh*.8);ctx.clip();}
 if(typeof drawCosmeticSprite==='function')drawCosmeticSprite(p,art,sx,sy,sw,sh,dx,dy,dw,dh,'chariot');else ctx.drawImage(art,sx,sy,sw,sh,dx,dy,dw,dh);ctx.restore();}};
 if(separateHorses&&p.fate?.chariot!=='DESTROYED')drawChariotHorses(p,rig);
 if(p.fate?.chariot!=='DESTROYED')drawRig();drawSpirit(p,i,isDrawing&&fateRanged(i),sheet,row);
 if(sheet.complete&&sheet.naturalWidth){const cell=sheet.naturalWidth/4;ctx.save();if(typeof fatePose==='function')fatePose(p);
 // Feet stay planted on the deck. The front rail is composited over the lower legs.
 const bounce=options.reduced||!p.moving?0:Math.sin(p.gait*2)*Math.min(1,Math.abs(p.moveVelocity||0)/130)*.8;
 if(!p.dismounted){ctx.beginPath();ctx.moveTo(-200,-250);ctx.lineTo(200,-250);ctx.lineTo(200,5);ctx.lineTo(38,5);ctx.lineTo(38,50);ctx.lineTo(-24,50);ctx.lineTo(-24,5);ctx.lineTo(-200,5);ctx.closePath();ctx.clip();}if(!(typeof fateDrawSprite==='function'&&fateDrawSprite(p,pose,p.dismounted?-70:-63,p.dismounted?-45:-110+bounce,140,140)))(typeof drawCosmeticSprite==='function'?drawCosmeticSprite:(p,...args)=>ctx.drawImage(...args))(p,sheet,pose*cell,row*cell,cell,cell,p.dismounted?-70:-63,p.dismounted?-45:-110+bounce,140,140);ctx.restore();}
 if(!p.dismounted){ctx.save();ctx.beginPath();ctx.rect(-70,5,210,150);ctx.clip();drawRig();ctx.restore();}
 // Rotate the actual painted wheel hub, preserving its gold/silver texture.
 if(animated&&!rescue&&p.fate?.chariot!=='DESTROYED'){const hubX=sw*.26,hubY=sh*.835,r=sw*.083,wx=dx+hubX/sw*dw,wy=dy+hubY/sh*dh,wr=r/sw*dw;
 ctx.save();ctx.translate(wx,wy);if(!options.reduced)ctx.rotate(p.wheelRotation*(i?-1:1));ctx.beginPath();ctx.arc(0,0,wr*.94,0,Math.PI*2);ctx.clip();if(typeof drawCosmeticWheel==='function')drawCosmeticWheel(p,art,[sx,sy,sw,sh],hubX,hubY,r,wr);else ctx.drawImage(art,sx+hubX-r,sy+hubY-r,2*r,2*r,-wr,-wr,wr*2,wr*2);ctx.restore();}
 if(p.moving&&!options.reduced)drawSpriteEffect('dust',20,92,95,p.gait,.8,true);
 if(p.shield>0){ctx.shadowBlur=20;ctx.shadowColor=col;ctx.strokeStyle=col;ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(0,-25,80,110,0,-Math.PI/2,Math.PI/2);ctx.stroke();ctx.globalAlpha=.09;ctx.fillStyle=col;ctx.fill();}ctx.restore();
}
// Mounted teams first; dismounted warriors stay visible in either seat.
function battleDrawOrder(){return [0,1].sort((a,b)=>Number(!!players[a].dismounted)-Number(!!players[b].dismounted));}
function draw(){ctx.clearRect(0,0,W,H);ctx.save();if(shake&&!paused&&!options.reduced)ctx.translate((Math.random()-.5)*shake,(Math.random()-.5)*shake);if(bg.complete&&bg.naturalWidth){ctx.drawImage(bg,0,0,W,H)}else{let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1a2334');g.addColorStop(.8,'#86654d');g.addColorStop(1,'#252327');ctx.fillStyle=g;ctx.fillRect(0,0,W,H)}let shade=ctx.createLinearGradient(0,0,0,H);shade.addColorStop(0,'#0c131dda');shade.addColorStop(.3,'#0c131d16');shade.addColorStop(1,'#0c131d44');ctx.fillStyle=shade;ctx.fillRect(0,0,W,H);ctx.fillStyle='#1d1c2290';ctx.fillRect(0,GROUND+16,W,H-GROUND);line(0,GROUND+14,W,GROUND+14,'#b6996320',1);
if(typeof drawBattlefieldAftermath==='function')drawBattlefieldAftermath();if(typeof drawSpiritSurgeSky==='function')drawSpiritSurgeSky();if(typeof drawUltimateInvocationStorm==='function')drawUltimateInvocationStorm();drawWeather();if(typeof drawCelestialSky==='function')drawCelestialSky();if(typeof drawLegendarySky==='function')drawLegendarySky();if(typeof drawMythicSky==='function')drawMythicSky();if(typeof drawAstraFields==='function')drawAstraFields();if(typeof drawBeastSequences==='function')drawBeastSequences(false);battleDrawOrder().forEach(i=>{const p=players[i];ctx.save();const mist=typeof astraState!=='undefined'?astraState.environment?.mistLevel||0:0;if(i!==(online.active?online.seat:0))ctx.globalAlpha*=1-mist*.35;warrior(p,i);ctx.restore();});if(typeof drawMythicForeground==='function')drawMythicForeground();if(typeof drawBeastSequences==='function')drawBeastSequences(true);drawChargeSignals();if(typeof drawAstraStability==='function')drawAstraStability();drawLore();drawBattleEffects();if(typeof drawFates==='function')drawFates();
let previewDrags=new Map(drags);for(let i of keyboardDraw.keys()){let p=players[i];previewDrags.set('key'+i,{i,start:{x:p.x,y:p.y-55},now:{x:p.x,y:p.y-55}})}for(let [id,d] of (options.assist?previewDrags:new Map())){let i=d.i,p=players[i],v=velocity(i);ctx.fillStyle=p.color;for(let t=.06;t<(p.fate?.phase==='GUIDANCE'?3.5:2.7);t+=(p.fate?.phase==='GUIDANCE'?.045:.075)){let env=typeof astraState!=='undefined'?astraState.environment:null,physical=!p.armed,rain=physical&&env?.rainStrength?1-.065*env.rainStrength:1,weight=({arrow_naracha:.3,arrow_shilimukha:1.4})[p.quiver?.selected]||.8;let x=p.x+(i?-32:32)+v.vx*t*rain+(physical?.5*(env?.windVector.x||0)*weight*t*t:0),y=p.y+(p.dismounted?15:-55)+v.vy*t*rain+.5*G*(physical&&typeof PhysicalArrowDefinition!=='undefined'?(PhysicalArrowDefinition[p.quiver?.selected]?.gravityMultiplier||1):1)*t*t;if(y>GROUND||x<0||x>W)break;ctx.globalAlpha=Math.max(.12,.65-t*.2)*(clouds.some(c=>Math.abs(c.x-x)<170&&y>320)?.15:1)*(typeof astraVisibility==='function'?astraVisibility(i,x):1);ellipse(x,y,2.4,2.4,p.color)}ctx.globalAlpha=1;line(d.start.x,d.start.y,d.now.x,d.now.y,p.color,2);ctx.strokeStyle=p.color;ctx.lineWidth=1;ctx.beginPath();ctx.arc(d.start.x,d.start.y,20,0,Math.PI*2);ctx.stroke();ellipse(d.now.x,d.now.y,6,6,p.color)}
if(typeof drawQuiverEffects==='function')drawQuiverEffects();for(let a of arrows){if(typeof drawQuiverProjectile==='function'&&drawQuiverProjectile(a))continue;if(typeof drawAstraSpiritProjectile==='function'&&drawAstraSpiritProjectile(a))continue;ctx.save();if(a.special||a.element||a.spirit){ctx.shadowBlur=18;ctx.shadowColor=a.color}for(let k=1;k<a.trail.length;k++){ctx.globalAlpha=k/a.trail.length*(a.special?.7:a.spirit?.6:.25);line(a.trail[k-1].x,a.trail[k-1].y,a.trail[k].x,a.trail[k].y,a.color,a.special?6:a.spirit?4:2)}ctx.globalAlpha=1;ctx.translate(a.x,a.y);ctx.rotate(Math.atan2(a.vy,a.vx));if(a.spirit){ellipse(-10,0,25,5,a.color+'66');line(-35,0,10,0,a.color,3);}if(a.special||a.element){drawSpriteEffect(a.element,-14,0,52,a.age,.7,true);let kind={thunder:2,cosmic:0,solar:1,fire:3,water:4,venom:5,wind:6}[a.element];if(kind===2){ctx.strokeStyle='#dcd0ff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-45,-5);ctx.lineTo(-28,5);ctx.lineTo(-18,-8);ctx.lineTo(0,3);ctx.lineTo(20,-4);ctx.stroke()}if(kind===0){ctx.strokeStyle=a.color;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(0,0,15,15,0,0,Math.PI*2);ctx.stroke()}if(kind===1){line(-28,-5,8,0,'#fff1ab',2);line(-28,5,8,0,'#fff1ab',2)}if(kind===4||kind===6){ctx.strokeStyle=a.color;ctx.lineWidth=2;for(let z=0;z<3;z++){ctx.beginPath();ctx.ellipse(-z*10,0,8,12-z*2,0,0,Math.PI*2);ctx.stroke()}}if(kind===5){for(let z=0;z<8;z++)ellipse(-z*6,Math.sin(a.age*16+z)*5,4,3,a.color)}if(kind===3){ellipse(-9,0,22,9,'#ffad4866');ellipse(0,0,10,5,'#fff0c8')}}line(-31,0,8,0,a.special?a.color:'#f6dfae',a.special?4:2);ctx.fillStyle=a.special?'#fff':a.color;ctx.beginPath();ctx.moveTo(12,0);ctx.lineTo(2,-4);ctx.lineTo(2,4);ctx.closePath();ctx.fill();line(-25,0,-33,-5,a.color,2);line(-25,0,-33,5,a.color,2);ctx.restore()}
if(typeof drawFormations==='function')drawFormations();if(typeof drawBowCombat==='function')drawBowCombat();if(typeof drawSpiritSurgeGathering==='function')drawSpiritSurgeGathering();if(typeof drawAstraSpiritScene==='function')drawAstraSpiritScene();if(typeof drawCinematicForeground==='function')drawCinematicForeground();
for(let r of rings){let t=1-r.life/r.max;if(r.bolt&&!options.reduced){line(r.x-20,0,r.x+12,r.y*.35,r.color,3);line(r.x+12,r.y*.35,r.x-15,r.y*.65,r.color,3);line(r.x-15,r.y*.65,r.x,r.y,r.color,3)}ctx.globalAlpha=1-t;ctx.strokeStyle=r.color;ctx.lineWidth=(1-t)*8+1;ctx.beginPath();ctx.arc(r.x,r.y,t*r.size,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=(1-t)*.25;ellipse(r.x,r.y,t*r.size,t*r.size,r.color)}ctx.globalAlpha=1;for(let p of particles){ctx.globalAlpha=Math.min(1,p.life*2);ellipse(p.x,p.y,2.5,2.5,p.color)}ctx.globalAlpha=1;for(let t of damageTexts){ctx.globalAlpha=t.life;ctx.fillStyle=t.color;ctx.font='bold 24px Georgia';ctx.textAlign='center';ctx.fillText('−'+t.text,t.x,t.y)}ctx.globalAlpha=1;ctx.restore();if(flash>0&&!options.reduced){ctx.fillStyle='rgba(255,237,200,'+(flash*.7)+')';ctx.fillRect(0,0,W,H)}if(paused){ctx.fillStyle='#0a111c99';ctx.fillRect(0,0,W,H);ctx.fillStyle='#edcf98';ctx.textAlign='center';ctx.font='36px Georgia';ctx.fillText('DUEL PAUSED',W/2,H/2)}}
function frame(t){let dt=Math.min((t-last)/1000,.05);last=t;if(typeof gameAudioFrame==='function')gameAudioFrame();if(typeof presentationMediaFrame==='function')presentationMediaFrame();if(typeof matchupFrame==='function')matchupFrame(dt);if(typeof dronaTick==='function')dronaTick(dt);if(atHome&&!(typeof rollbackActive==='function'&&rollbackActive())){requestAnimationFrame(frame);return;}if(typeof rollbackFrame==='function'&&rollbackFrame(dt)){requestAnimationFrame(frame);return;}matchIntroFrame();syncCombatInput(dt);if(typeof fatePresentation!=='undefined'&&!paused&&!atHome)fatePresentation.clock+=dt;tickImpactCutscene(dt);if(onlineGuestFrame(dt)){requestAnimationFrame(frame);return;}tickUltimate(dt);if(players.some(p=>p.rescue>0)&&!paused&&!atHome)dt*=.65;if(clashSlow>0&&!paused&&!atHome){clashSlow=Math.max(0,clashSlow-dt);dt*=.4}if(!atHome&&!paused&&!ended){visualTime+=dt;}acc+=dt;while(acc>=1/120){update(1/120);acc-=1/120}draw();drawUltimate();drawImpactCutscene();requestAnimationFrame(frame)}
function point(e){let r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*W,y:(e.clientY-r.top)/r.height*H}}
canvas.addEventListener('pointerdown',e=>{if(atHome||ended||paused)return;unlockAudio();let pos=point(e),i=online.active?online.seat:pos.x<W/2?0:1;if(blockedAction(i)||i===1&&mode==='ai')return;if(!fateRanged(i)){fateCommand(i,'melee');return;}if([...drags.values()].some(d=>d.i===i))return;canvas.setPointerCapture(e.pointerId);if(!(typeof rollbackActive==='function'&&rollbackActive()))players[i].focus=0;drags.set(e.pointerId,{i,start:pos,now:pos});e.preventDefault()});
canvas.addEventListener('pointermove',e=>{let d=drags.get(e.pointerId);if(!d)return;d.now=point(e);aims[d.i]=dragAim(d.i,d.start,d.now,options.reverseAim);refresh()});
canvas.addEventListener('pointerup',e=>{let d=drags.get(e.pointerId);if(d){if(Math.hypot(d.now.x-d.start.x,d.now.y-d.start.y)>10)shoot(d.i);stopCharge(d.i);drags.delete(e.pointerId)}});function cancelDraw(e){let d=drags.get(e.pointerId);if(d)stopCharge(d.i);drags.delete(e.pointerId)}canvas.addEventListener('pointercancel',cancelDraw);canvas.addEventListener('lostpointercapture',cancelDraw);
function togglePause(){if(onlineAction('pause',onlineSeat(),{value:!paused}))return;if(ended)return;paused=!paused;cancelAllCharges();drags.clear();keyboardDraw.clear();$('pause').textContent=paused?'▶ Resume':'Ⅱ Pause';refresh()}
function setMode(m){if(m!=='ai'&&typeof arcadeEnd==='function')arcadeEnd();document.querySelector('.battle').dataset.playMode=m;rescueSpent=[false,false];score=[0,0];matchOver=false;mode=m;$('practice').classList.toggle('selected',m==='ai');$('local').classList.toggle('selected',m==='local');$('select1').textContent=m==='ai'?'Opponent':'Player 2';round=1;reset()}
function renderCards(){document.querySelector('.roster').hidden=ruleSet==='lore';$('cards').innerHTML=roster.map((p,n)=>`<button class="card ${chosen[target]===n?'active':''}" data-id="${n}" aria-pressed="${chosen[target]===n}"><span class="card-portrait" style="background-image:url(${n<4?'warriors.png':'warriors-extra.png'});background-position:0 ${(n%4)*100/3}%"></span><span class="number">0${n+1}</span><h3>${p.name}</h3><span class="role">${p.role}</span><p>${p.desc}</p><div class="stats"><span>HP <b>${p.hp}</b></span><span>DMG <b>${p.damage}</b></span><span>SPD <b>${p.speed.toFixed(2)}×</b></span></div><span class="tag">${chosen[target]===n?'◆ SELECTED · ':''}${LOADOUTS[n].map(k=>ASTRAS[k].name).join(' · ')}</span></button>`).join('');$('cards').querySelectorAll('button').forEach(b=>{b.disabled=ruleSet==='lore';b.onclick=()=>{rescueSpent=[false,false];chosen[target]=+b.dataset.id;score=[0,0];matchOver=false;round=1;reset()}})}
$('practice').onclick=()=>setMode('ai');$('local').onclick=()=>setMode('local');[0,1].forEach(i=>{$('tactic'+i).onclick=e=>{activateTactic(i);e.currentTarget?.blur()};$('special'+i).onclick=e=>{armAstra(i);e.currentTarget?.blur()};$('astraSelect'+i).onchange=e=>chooseAstra(i,e.target.value);$('guard'+i).onclick=()=>guard(i);$('select'+i).onclick=()=>{target=i;[0,1].forEach(j=>$('select'+j).classList.toggle('selected',i===j));renderCards()}});
$('pause').onclick=togglePause;$('reset').onclick=()=>{rescueSpent=[false,false];score=[0,0];matchOver=false;round=1;reset()};$('rematch').onclick=()=>{if(onlineRound())return;if(matchOver){rescueSpent=[false,false];score=[0,0];matchOver=false;round=1}else round++;reset()};$('change').onclick=()=>{rescueSpent=[false,false];score=[0,0];matchOver=false;round=1;reset();$('cards').scrollIntoView({behavior:'smooth',block:'center'})};let wasPaused=false;function openHelp(){wasPaused=paused;if(!ended&&!paused)togglePause();$('guide').showModal()}$('help').onclick=openHelp;function closeHelp(){$('guide').close()}$('closeGuide').onclick=closeHelp;$('go').onclick=closeHelp;$('guide').addEventListener('close',()=>{if(!wasPaused&&paused)togglePause()});$('sound').onclick=()=>{sound=!sound;options.sound=sound;savePreferences();$('sound').setAttribute('aria-pressed',sound);$('sound').textContent=sound?'♪':'♫';$('sound').style.color=sound?'#d6af69':'';tone(500,.1)};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&!paused&&!ended)togglePause()});window.addEventListener('keydown',e=>{if(atHome||$('guide').open||$('settings').open||e.target.closest('button,input,select'))return;let k=e.key.toLowerCase();if([' ','arrowleft','arrowright','arrowup','arrowdown','enter'].includes(k))e.preventDefault();if(k==='p'){togglePause();return}if(paused||ended)return;let i=online.active?online.seat:['a','d','w','s','enter','u','o','l'].includes(k)?1:0;if(i===1&&mode==='ai')return;if(blockedAction(i))return;if(!fateRanged(i)&&[' ','enter'].includes(k)){if(!e.repeat)fateCommand(i,'melee');return;}let a=aims[i];if(['arrowleft','a'].includes(k))a.angle=Math.min(155,a.angle+1);if(['arrowright','d'].includes(k))a.angle=Math.max(-25,a.angle-1);if(['arrowup','w'].includes(k))a.power=Math.min(1,a.power+.02);if(['arrowdown','s'].includes(k))a.power=Math.max(.05,a.power-.02);if([' ','enter'].includes(k)&&!e.repeat&&!keyboardDraw.has(i)){keyboardDraw.set(i,true);if(!(typeof rollbackActive==='function'&&rollbackActive()))players[i].focus=0;unlockAudio()}if(['q','u'].includes(k)&&!e.repeat)armAstra(i);if(['e','o'].includes(k))guard(i);if(['r','l'].includes(k)&&!e.repeat)activateTactic(i);refresh()});

window.addEventListener('keyup',e=>{let k=e.key.toLowerCase(),i=[' ','enter'].includes(k)?(online.active?online.seat:k===' '?0:1):-1;if(i>=0&&keyboardDraw.has(i)){keyboardDraw.delete(i);shoot(i);stopCharge(i)}});window.addEventListener('blur',()=>{keyboardDraw.clear();drags.clear();if(!(typeof rollbackActive==='function'&&rollbackActive()))players.forEach(p=>p.focus=0);if(!atHome&&!paused&&!ended)togglePause()});
function finishRound(win){if(typeof drona!=='undefined'&&drona.active)return;if(typeof recordBattleRound==='function')recordBattleRound(win);if(typeof astraRoundEnd==='function')astraRoundEnd();if(typeof productionRoundEnd==='function')productionRoundEnd(win);if(win>=0)score[win]++;matchOver=score.some(s=>s>=2);if(matchOver){$('winner').textContent=players[win].name+' wins the match';$('rematch').textContent='New match ↗';if(mode==='ai'){career.matches++;if(win===0)career.wins++;savePreferences()}}else{$('rematch').textContent='Next round ↗'}$('recap').textContent=`Score ${score[0]} — ${score[1]} · ${Math.round(elapsed)}s · ${shots[0]+shots[1]} arrows · ${clashes} clashes`;if(typeof arcadeRoundResult==='function')arcadeRoundResult(win);}
function drawWeather(){if(typeof drawCinematicEnvironment==='function'){drawCinematicEnvironment();if(astraState.environment?.environmentId!=='NORMAL'||astraState.environment?.invocations.length)return;}if(weather.time<=0)return;let intensity=Math.min(1,weather.time),t=elapsed,type=weather.type;ctx.save();ctx.globalAlpha=intensity;let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,['#273966b0','#b86b2855','#111b35ca','#7b27116f'][type]);g.addColorStop(1,'#00000000');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);if(!options.reduced){if(type===2){for(let n=0;n<110;n++){let x=(n*173+t*135)%W,y=(n*79+t*720)%H;line(x,y,x-9,y+24,'#b7d7f955',1)}if(Math.floor(t*5)%17===0){ctx.strokeStyle='#d6eaff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(850,0);ctx.lineTo(810,90);ctx.lineTo(860,80);ctx.lineTo(790,200);ctx.stroke()}}else{for(let n=0;n<55;n++){let x=(n*173+Math.sin(t+n)*20)%W,y=H-((n*89+t*(type===3?80:35))%H);ellipse(x,y,type===0?1.6:2,type===3?4:2,['#9ad9ff99','#f5c26388','#fff','#ff934f99'][type])}}}ctx.restore()}
function enterGame(m){atHome=false;document.body.classList.remove('home');$('homeScreen').classList.add('hidden');document.querySelector('main').classList.remove('hidden');setMode(m);unlockAudio();sfx('guard');window.scrollTo(0,0)}
function home(){if(typeof arcadeEnd==='function')arcadeEnd();if(typeof astraRoundEnd==='function')astraRoundEnd();if(typeof productionReset==='function')productionReset();leaveOnline();impactCutscene=null;skyHazards=[];spriteEffects=[];ultimate=null;renderUltimateHUD();atHome=true;paused=true;cancelAllCharges();drags.clear();keyboardDraw.clear();document.body.classList.add('home');$('homeScreen').classList.remove('hidden');$('career').textContent=career.matches?`YOUR SOLO RECORD · ${career.wins} wins / ${career.matches} matches`:'';window.scrollTo(0,0)}
$('playAI').onclick=()=>{ruleSet='arcade';enterGame('ai')};$('playLocal').onclick=()=>{ruleSet='arcade';enterGame('local')};$('homeButton').onclick=home;$('homeGuide').onclick=openHelp;$('fullscreen').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen?.();else document.documentElement.requestFullscreen?.().catch(()=>announce('Fullscreen is unavailable in this browser',3))};
let settingsPaused=false;$('settingsButton').onclick=()=>{settingsPaused=paused;if(!paused&&!ended&&!atHome)togglePause();$('difficulty').value=options.difficulty;if($('voiceLanguage'))$('voiceLanguage').value=options.voiceLanguage||'en';if($('vfxQuality'))$('vfxQuality').value=options.vfxQuality;$('volume').value=Math.round(options.volume*100);$('audioEnabled').checked=options.sound;if($('voiceEnabled'))$('voiceEnabled').checked=options.voiceEnabled!==false;if($('voiceVolume'))$('voiceVolume').value=(options.voiceVolume??.9)*100;$('aimAssist').checked=options.assist;$('reduceMotion').checked=options.reduced;$('reverseAim').checked=options.reverseAim;$('settings').showModal()};
function applySettings(){if($('voiceLanguage'))options.voiceLanguage=$('voiceLanguage').value==='hi'?'hi':'en';options.difficulty=$('difficulty').value;if($('vfxQuality'))options.vfxQuality=$('vfxQuality').value;options.volume=Number($('volume').value)/100;options.sound=$('audioEnabled').checked;if($('voiceEnabled'))options.voiceEnabled=$('voiceEnabled').checked;if($('voiceVolume'))options.voiceVolume=Number($('voiceVolume').value)/100;options.assist=$('aimAssist').checked;options.reduced=$('reduceMotion').checked;options.reverseAim=$('reverseAim').checked;sound=options.sound;unlockAudio();$('sound').setAttribute('aria-pressed',sound);savePreferences();$('settings').close()}
$('saveSettings').onclick=applySettings;$('closeSettings').onclick=applySettings;$('settings').addEventListener('close',()=>{if(!settingsPaused&&paused&&!atHome)togglePause()});
function drawSpirit(p,i,drawing,sheet,row){if(!drawing||!p.charging||typeof quiverTactical==='function'&&quiverTactical(i))return;let a=ASTRAS[p.selected],color=p.armed?a.color:p.color,charge=Math.min(1,p.focus/1.5),t=options.reduced?0:visualTime;ctx.save();ctx.shadowColor=color;ctx.shadowBlur=options.reduced?0:16+charge*18;
if(sheet.complete&&sheet.naturalWidth){let cell=sheet.naturalWidth/4;ctx.globalAlpha=.12+charge*.17;ctx.filter='brightness(1.6) saturate(.5)';(typeof drawCosmeticSprite==='function'?drawCosmeticSprite:(p,...args)=>ctx.drawImage(...args))(p,sheet,cell,row*cell,cell,cell,-155-charge*15,-230-charge*15,270+charge*25,270+charge*25);ctx.filter='none'}
ctx.globalAlpha=.5;ctx.strokeStyle=color;ctx.lineWidth=2;for(let ring=0;ring<2;ring++){ctx.beginPath();ctx.ellipse(-5,-40,68+ring*15+charge*10,90+ring*10,t*(ring?-.3:.3),0,Math.PI*2);ctx.stroke()}ctx.globalAlpha=1;
let ax=43,ay=-45;ctx.translate(ax,ay);ctx.rotate(-effectiveAim(i).angle*Math.PI/180);let pulse=options.reduced?1:1+Math.sin(t*8)*.12;ellipse(0,0,(7+charge*11)*pulse,(7+charge*11)*pulse,color+'55');
if(p.armed){drawSpriteEffect(a.element,0,0,70+charge*30,visualTime,.7,true);if(a.element==='thunder'){for(let j=0;j<3;j++){ctx.beginPath();ctx.moveTo(-18,-28+j*25);ctx.lineTo(6+Math.sin(t*18+j)*8,-18+j*18);ctx.lineTo(-8,-5+j*7);ctx.lineTo(30+charge*15,0);ctx.stroke()}}else if(a.element==='fire'){for(let j=0;j<14;j++){let phase=(t*1.5+j/14)%1;ellipse(-25+phase*55,Math.sin(j*2.7)*16*(1-phase),3+phase*3,7+phase*6,j%2?'#ffdf8c':'#ff6b30')}}else{for(let j=0;j<12;j++){let b=t*2+j*Math.PI/6,r=18+charge*10;ellipse(Math.cos(b)*r,Math.sin(b)*r,2.8,2.8,color)}if(a.element==='venom'){ctx.beginPath();for(let x=-40;x<30;x+=3){let y=Math.sin(x*.13+t*5)*9;x===-40?ctx.moveTo(x,y):ctx.lineTo(x,y)}ctx.stroke()}}
line(-20,0,40+charge*20,0,color,3);ellipse(10,0,5+charge*3,5+charge*3,'#fff6df')}
ctx.restore();ctx.save();ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillStyle=color;ctx.fillText(p.armed?(charge>=1?'SPIRIT FOCUS':'CHARGING '+Math.round(charge*100)+'%'):(charge>=1?'SPIRIT READY':'CHARGING'),0,-185);ctx.fillStyle='#151921';ctx.fillRect(-40,-176,80,3);ctx.fillStyle=color;ctx.fillRect(-40,-176,charge*80,3);ctx.restore()}

const TACTICS={volley:{name:'Arrow Volley',description:'Arm, then draw: three common arrows in a spread.'},rapid:{name:'Rapid Fire',description:'Arm, then draw: four flaming arrows in a quick burst.'},guard:{name:'Iron Guard',description:'Instantly grants a 3-second defensive shield.'},mend:{name:'Second Wind',description:'Instantly restores 10 health, up to your maximum.'}};
function lockReason(p,a){if(typeof staminaReason==='function'&&players.includes(p)){const r=staminaReason(players.indexOf(p),a);if(r)return r;}if(typeof counterEquipped==='function'&&p.counter?.astraId===a.id){const i=players.indexOf(p);return i<0?'INVALID':counterReason(i);}if(players.includes(p)){const reason=balanceSpecialReason(players.indexOf(p),a);if(reason)return reason;}if(typeof fateRanged==='function'&&players.includes(p)&&!fateRanged(players.indexOf(p)))return 'BOW BROKEN · Melee only';if(typeof fateMod==='function'&&players.includes(p)&&a.tier===2&&!fateMod(players.indexOf(p)).ultimate)return 'FATE · Ultimate unavailable on foot';if(a.tier===2&&a!==ASTRAS.lore_narayana&&players.includes(p)&&!rageReady(players.indexOf(p)))return 'RAGE LOCKED · Opponent must be at 35% health or lower';if(a.tier===1&&elapsed<15)return 'LOCKED · Battle technique opens at 15 seconds';if(a.tier===2&&elapsed<COMBAT_BALANCE.ultimateUnlock)return 'LOCKED · Ultimate opens at '+COMBAT_BALANCE.ultimateUnlock+' seconds + 65 Resolve';if(p.resolve<a.cost)return 'NEED '+a.cost+' RESOLVE · currently '+Math.floor(p.resolve);return ''}
function rollTactic(p){let keys=Object.keys(TACTICS).filter(k=>k!==p.tactic&&(!p.quiver||!['rapid','volley'].includes(k)));p.tactic=keys[Math.floor(Math.random()*keys.length)];p.tacticReady=true;p.tacticArmed=false}
function activateTactic(i){if(onlineAction('tactic',i))return false;let p=players[i];if(atHome||paused||ended||blockedAction(i)||!p.tacticReady)return false;if(p.tactic==='guard'){if(bowOpen(i))return false;p.shield=Math.max(p.shield,3);p.tacticReady=false;sfx('guard')}else if(p.tactic==='mend'){if(typeof fateController!=='undefined')fateController.heal(i,10,players);else p.hp=Math.min(p.maxHp,p.hp+10);p.tacticReady=false;tone(600,.3)}else{if(!fateRanged(i))return false;p.tacticArmed=!p.tacticArmed;p.armed=false}refresh();return true}
function useOffensiveTactic(i){if(!fateRanged(i)||bowEnabled()&&(bowState(i).reserve<4||bowState(i).shockUntil>elapsed||bowRecovering(i)))return false;let p=players[i],v=velocity(i,aims[i],false),rapid=p.tactic==='rapid',count=Math.min(rapid?4:3,(typeof ASTRA_GLOBAL!=='undefined'?ASTRA_GLOBAL.projectileLimit:150)-arrows.length-pendingShots.length),castId=i+':'+round+':'+shots[i];if(typeof fateLaunch==='function')fateLaunch(i,null,castId,false);for(let n=0;n<count;n++){let rot=rapid?0:(n-1)*.045,c=Math.cos(rot),sn=Math.sin(rot);let a={x:p.x+(i?-32:32),y:p.y+(p.dismounted?15:-55),px:0,py:0,vx:v.vx*c-v.vy*sn,vy:v.vx*sn+v.vy*c,owner:i,castId,special:false,spell:null,element:rapid?'fire':null,radius:0,damage:p.damage*(rapid?.55:.7)*(typeof fateMod==='function'?fateMod(i).damage*fateMod(i).normalDamage:1),color:rapid?'#ffb775':p.color,trail:[],alive:true,age:0};if(bowEnabled()){a.rapid=true;a.damage=BOW_COMBAT.rapidDamage;if(n===0)bowBurst(i,a,count);}if(rapid&&n>0)pendingShots.push({delay:n*.16,arrow:a});else arrows.push(a)}p.cool=1.3;p.tacticReady=false;p.tacticArmed=false;stopCharge(i);shots[i]++;p.resolve=Math.min(100,p.resolve+2);announce(p.name+' · '+TACTICS[p.tactic].name,1.5);sfx('bow');refresh()}
function clashBurst(a,b){let x=(a.x+b.x)/2,y=(a.y+b.y)/2,both=a.special&&b.special;explode(x,y,both?'#fff3d8':'#f4ddb0',both);if(both){for(let j=0;j<3;j++)rings.push({x,y,color:j%2?a.color:b.color,life:1.2+j*.15,max:1.2+j*.15,size:190+j*45,bolt:j===0});clashSlow=.5;shake=options.reduced?0:25;players.forEach(p=>p.resolve=Math.min(100,p.resolve+8));announce('MAHAASTRA CLASH · CELESTIAL DETONATION',2.6)}else if(a.spirit&&b.spirit){rings.push({x,y,color:a.color,life:.65,max:.65,size:190});clashSlow=.18;announce('SPIRIT CLASH · SHOCKWAVE',1.3);}else announce(a.special||b.special?'ASTRA INTERCEPTED':'ARROW CLASH',1)}
function dragAim(i,start,now,reverse){let sign=reverse?-1:1,dx=(start.x-now.x)*(i?-1:1)*sign,dy=(now.y-start.y)*sign;return{angle:Math.max(-25,Math.min(155,Math.atan2(dy,dx)*180/Math.PI)),power:Math.max(.05,Math.min(1,Math.hypot(dx,dy)/155))}}
$('aimMode').onclick=()=>{options.reverseAim=!options.reverseAim;drags.clear();keyboardDraw.clear();savePreferences();refresh()};



// fate-assets
'use strict';
const FATE_ASSET_SLOTS={"karna_kavacha_activate":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[0,1,2],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_kavacha_idle":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[1,2,1],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_kavacha_hit_light":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[0,3,0],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_kavacha_hit_heavy":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[4,5,4],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_kavacha_crack_01":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[4,5],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_kavacha_crack_02":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[5,6],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_kavacha_break":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[5,6,7],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_wheel_notice":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[0,7],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_dismount":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[7,8,9],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_land":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[9,10],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_approach_wheel":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[10,11],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_grab_wheel":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[11,12],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_pull_wheel_loop":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[12,13,12],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_repair_struggle":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[12,13,12],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_repair_hit_reaction":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[12,4,12],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_repair_success":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[13,14],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_stand":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[14,15],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_remount":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[14,15,0],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"karna_comeback_pose":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[15,2,15],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_icchamrityu_trigger":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[0,1,2],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_aura_awaken":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[2,3],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_final_stand_idle":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[3,4,3],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_final_draw":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[4,5],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_final_attack":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[5,6,4],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_final_hit_reaction":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[4,7,4],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_timer_end":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[4,8],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_lower_bow":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[8,9],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_accept_fate":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[9,10,11],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_arrow_bed_transition":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[11,12,13,14],"frames":4,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"bhishma_arrow_bed_idle":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[14,15,14],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"krishna_danger_notice":{"status":"GENERATED","src":"krishna-rescue.png","sequence":[0,1],"frames":2,"duration":0.65,"loop":false,"columns":2,"rows":2,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"krishna_turn":{"status":"GENERATED","src":"krishna-rescue.png","sequence":[0,1],"frames":2,"duration":0.65,"loop":false,"columns":2,"rows":2,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"krishna_force_chariot_down":{"status":"GENERATED","src":"krishna-rescue.png","sequence":[1,2],"frames":2,"duration":0.65,"loop":false,"columns":2,"rows":2,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"krishna_recover_control":{"status":"GENERATED","src":"krishna-rescue.png","sequence":[2,3,0],"frames":3,"duration":0.65,"loop":false,"columns":2,"rows":2,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"arjuna_notice_attack":{"status":"GENERATED","src":"animation/arjuna-fate.png","sequence":[0,1],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"arjuna_duck_reaction":{"status":"GENERATED","src":"animation/arjuna-fate.png","sequence":[1,2,3],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"arjuna_crown_hit":{"status":"GENERATED","src":"animation/arjuna-fate.png","sequence":[3,4,5],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"arjuna_recover":{"status":"GENERATED","src":"animation/arjuna-fate.png","sequence":[6,7,8,9],"frames":4,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"arjuna_guidance_activate":{"status":"GENERATED","src":"animation/arjuna-fate.png","sequence":[9,10,11],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"arjuna_guidance_combat_idle":{"status":"GENERATED","src":"animation/arjuna-fate.png","sequence":[11,14,15,14],"frames":4,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_observe":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[0,1],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_understand":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[1,2],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_mastery_activate":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[2,3,4],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_mastery_idle":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[3,4,3],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_counter_prepare":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[4,5,6],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_counter_release":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[6,7],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_defeat_realization":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[0,8],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_lower_weapon":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[8,9,10],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_sit_meditation":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[10,11,12],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_meditation_idle":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[12,13,14,13],"frames":4,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"drona_final_transition":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[13,14,15],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_chariot_hit":{"status":"GENERATED","src":"animation/abhimanyu-fate.png","sequence":[0,1],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_chariot_break":{"status":"GENERATED","src":"animation/abhimanyu-fate.png","sequence":[0,1,2],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_jump_from_chariot":{"status":"GENERATED","src":"animation/abhimanyu-fate.png","sequence":[2,3],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_land":{"status":"GENERATED","src":"animation/abhimanyu-fate.png","sequence":[3,4],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_last_warrior_activate":{"status":"GENERATED","src":"animation/abhimanyu-fate.png","sequence":[4,5],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_bow_attack":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[18,19,20,21,22,23],"frames":6,"duration":0.65,"loop":false,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_bow_break":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[36,37,38,39,40,41],"frames":6,"duration":1,"loop":false,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_draw_sword":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[36,37,38,39,40,41],"frames":6,"duration":1,"loop":false,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"abhimanyu_bow_break"},"abhimanyu_sword_idle":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[24],"frames":1,"duration":1,"loop":true,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_sword_attack":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[24,25,26,27,28,29],"frames":6,"duration":0.65,"loop":false,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_weapon_transition":{"status":"GENERATED","src":"animation/abhimanyu-fate.png","sequence":[11,12],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_draw_mace":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[42,43,44,45,46,47],"frames":6,"duration":1,"loop":false,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"abhimanyu_wheel_take"},"abhimanyu_mace_idle":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[30],"frames":1,"duration":1,"loop":true,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"abhimanyu_wheel_idle"},"abhimanyu_mace_attack":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[30,31,32,33,34,35],"frames":6,"duration":1.05,"loop":false,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"abhimanyu_wheel_attack"},"abhimanyu_final_stand":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[30],"frames":1,"duration":1,"loop":true,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"abhimanyu_wheel_idle"},"ashwatthama_mani_idle":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[0,1,0],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ashwatthama_mani_hit":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[0,1,0],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ashwatthama_mani_crack":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[1,2,3],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ashwatthama_mani_shatter":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[3,4,5],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ashwatthama_shatter_reaction":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[4,5,6],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ashwatthama_cursed_transform":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[6,7,8],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ashwatthama_cursed_idle":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[8,9,8],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ashwatthama_cursed_attack":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[9,10,11,12],"frames":4,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_pursuit_01":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[0,1,0],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_pursuit_02":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[1,2,1],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_pursuit_03":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[2,3,2],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_pursuit_04":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[3,4,3],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_pursuit_05":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[4,5,4],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_fury_activate":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[5,6,7],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_fury_idle":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[6,7,6],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_fury_draw":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[7,8,9],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_fury_rapid_shot":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[9,10,11,12],"frames":4,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"satyaki_fury_end":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[12,13,14,15],"frames":4,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_focus_begin":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[0,1,2],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_focus_idle":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[1,2,1],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_focus_high":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[2,3,2],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_instinct_activate":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[3,4],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_instinct_draw":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[4,5],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_instinct_shot":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[5,6,7],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_guru_dakshina_begin":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[7,8,9],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_guru_dakshina_sacrifice":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[9,10],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_guru_dakshina_recover":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[10,11,12],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_alternate_grip":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[11,12,13],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"ekalavya_mastered_stance":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[12,13,14,15],"frames":4,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"arjuna_duck":{"status":"GENERATED","src":"animation/arjuna-fate.png","sequence":[1,2,3],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"arjuna_duck_reaction"},"arjuna_passive_idle":{"status":"GENERATED","src":"animation/arjuna-fate.png","sequence":[11,14,15,14],"frames":4,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"arjuna_guidance_combat_idle"},"arjuna_fall":{"status":"GENERATED","src":"animation/arjuna-fate.png","sequence":[3,4,5],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"arjuna_crown_hit"},"krishna_warning":{"status":"GENERATED","src":"krishna-rescue.png","sequence":[0,1],"frames":2,"duration":0.65,"loop":false,"columns":2,"rows":2,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"krishna_danger_notice"},"krishna_chariot_press":{"status":"GENERATED","src":"krishna-rescue.png","sequence":[1,2],"frames":2,"duration":0.65,"loop":false,"columns":2,"rows":2,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"krishna_force_chariot_down"},"karna_passive_idle":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[1,2,1],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"karna_kavacha_idle"},"karna_kavacha_hit":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[0,3,0],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"karna_kavacha_hit_light"},"karna_kavacha_crack":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[5,6],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"karna_kavacha_crack_02"},"karna_pull_wheel":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[12,13,12],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"karna_pull_wheel_loop"},"karna_surya_return":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[15,2,15],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"karna_comeback_pose"},"karna_fall":{"status":"GENERATED","src":"animation/karna-fate.png","sequence":[12,4,12],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"karna_repair_hit_reaction"},"bhishma_icchamrityu_activate":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[0,1,2],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"bhishma_icchamrityu_trigger"},"bhishma_final_stand":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[3,4,3],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"bhishma_final_stand_idle"},"bhishma_arrow_bed":{"status":"GENERATED","src":"animation/bhishma-fate.png","sequence":[14,15,14],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"bhishma_arrow_bed_idle"},"drona_mastery":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[2,3,4],"frames":3,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"drona_mastery_activate"},"drona_meditate":{"status":"GENERATED","src":"animation/drona-fate.png","sequence":[12,13,14,13],"frames":4,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"drona_meditation_idle"},"abhimanyu_last_stand":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[18],"frames":1,"duration":1,"loop":true,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"abhimanyu_bow_idle"},"abhimanyu_sword_draw":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[36,37,38,39,40,41],"frames":6,"duration":1,"loop":false,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"abhimanyu_bow_break"},"ashwatthama_mani_glow":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[0,1,0],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"ashwatthama_mani_idle"},"ashwatthama_cursed_state":{"status":"GENERATED","src":"animation/ashwatthama-fate.png","sequence":[8,9,8],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"ashwatthama_cursed_idle"},"satyaki_combo_shot":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[9,10,11,12],"frames":4,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"satyaki_fury_rapid_shot"},"satyaki_pursuit_start":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[0,1,0],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"satyaki_pursuit_01"},"satyaki_vrishni_fury":{"status":"GENERATED","src":"animation/satyaki-fate.png","sequence":[6,7,6],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"satyaki_fury_idle"},"ekalavya_focus":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[1,2,1],"frames":3,"duration":1.2,"loop":true,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"ekalavya_focus_idle"},"ekalavya_perfect_draw":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[4,5],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"ekalavya_instinct_draw"},"ekalavya_instinctive_archery":{"status":"GENERATED","src":"animation/ekalavya-fate.png","sequence":[4,5],"frames":2,"duration":0.65,"loop":false,"columns":4,"rows":4,"pivot":[0.5,0.9],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43],"aliasOf":"ekalavya_instinct_draw"},"abhimanyu_bow_walk":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[0,1,2,3,4,5],"frames":6,"duration":0.72,"loop":true,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_bow_idle":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[18],"frames":1,"duration":1,"loop":true,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_sword_walk":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[6,7,8,9,10,11],"frames":6,"duration":0.72,"loop":true,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_wheel_walk":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[12,13,14,15,16,17],"frames":6,"duration":0.72,"loop":true,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_wheel_idle":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[30],"frames":1,"duration":1,"loop":true,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_wheel_attack":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[30,31,32,33,34,35],"frames":6,"duration":1.05,"loop":false,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]},"abhimanyu_wheel_take":{"status":"GENERATED","src":"animation/abhimanyu-combat.png","sequence":[42,43,44,45,46,47],"frames":6,"duration":1,"loop":false,"columns":6,"rows":8,"frameRects":[[0,0,181,190],[181,0,181,190],[362,0,181,190],[543,0,181,190],[724,0,181,190],[905,0,181,190],[0,192,181,181],[181,192,181,181],[362,192,181,181],[543,192,181,181],[724,192,181,181],[905,192,181,181],[0,376,181,172],[181,376,181,172],[362,376,181,172],[543,376,181,172],[724,376,181,172],[905,376,181,172],[0,549,181,184],[181,549,181,184],[362,549,181,184],[543,549,181,184],[724,549,181,184],[905,549,181,184],[0,734,181,180],[181,734,181,180],[362,734,181,180],[543,734,181,180],[724,734,181,180],[905,734,181,180],[0,915,181,179],[181,915,181,179],[362,915,181,179],[543,915,181,179],[724,915,181,179],[905,915,181,179],[0,1096,181,177],[181,1096,181,177],[362,1096,181,177],[543,1096,181,177],[724,1096,181,177],[905,1096,181,177],[0,1275,181,173],[181,1275,181,173],[362,1275,181,173],[543,1275,181,173],[724,1275,181,173],[905,1275,181,173]],"pivot":[0.5,0.94],"weaponOrigin":[0.68,0.45],"projectileOrigin":[0.73,0.43]}};


// fate-presentation
'use strict';
/* Generated Fate keypose atlases; normal combat retains the original warrior sheets. */
const FATE_ANIMATIONS={
 0:{GUIDANCE:'arjuna_duck',NORMAL:'arjuna_passive_idle',DEAD:'arjuna_fall'},
 1:{KAVACHA:'karna_kavacha_activate',WHEEL_STUCK:'karna_dismount',REPAIRING:'karna_pull_wheel',REMOUNT:'karna_remount',COMEBACK:'karna_surya_return',NORMAL:'karna_passive_idle',DEAD:'karna_fall'},
 2:{FINAL_STAND:'bhishma_final_stand',DEAD:'bhishma_arrow_bed'},
 3:{OBSERVED:'drona_observe',UNDERSTOOD:'drona_understand',MASTERED:'drona_mastery',DEAD:'drona_meditate'},
 4:{LAST_WARRIOR:'abhimanyu_last_stand',DEAD:'abhimanyu_fall'},
 5:{MANI:'ashwatthama_mani_glow',SHATTER:'ashwatthama_mani_shatter',CURSED:'ashwatthama_cursed_state',DEAD:'ashwatthama_fall'},
 6:{NORMAL:'satyaki_pursuit_start',FURY:'satyaki_vrishni_fury',DEAD:'satyaki_fall'},
 7:{NORMAL:'ekalavya_focus',INSTINCT:'ekalavya_instinctive_archery',DEAD:'ekalavya_fall'}
};
const fatePresentation={seen:new Set(),scene:null,scenes:[],clock:0,lastHUD:-1,lastPulse:{}};
function fatePose(p){const u=p.fate;if(!u)return;const name=FATE_ANIMATIONS[u.hero]?.[u.phase]||'idle';const prefix=['arjuna','karna','bhishma','drona','abhimanyu','ashwatthama','satyaki','ekalavya'][u.hero];p.fateAnimation=fateAnimationName(p,name==='idle'?prefix+'_passive_idle':name);if(p.flash>0&&typeof FATE_ASSET_SLOTS!=='undefined'&&FATE_ASSET_SLOTS[prefix+'_reaction'])p.fateAnimation=prefix+'_reaction';const t=options.reduced?0:visualTime-u.since;if(typeof drawProductionSprite==='function')return;
 if(u.phase==='REPAIRING'){ctx.translate(0,25);ctx.scale(1,.75);ctx.rotate(Math.sin(t*5)*.07);}
 if(u.phase==='GUIDANCE'&&fateController.state.clock-u.since<1.2)ctx.translate(0,25);
 if(u.phase==='SHATTER')ctx.rotate(Math.sin(t*12)*.025);if(u.phase==='MASTERED')ctx.translate(0,-2);if(u.phase==='FURY')ctx.rotate(Math.sin(t*8)*.015);if(u.phase==='INSTINCT')ctx.translate(0,Math.sin(t*2));if(u.phase==='FINAL_STAND')ctx.translate(0,-4+Math.sin(t*3)*2);
 if(u.phase==='DEAD'){if(u.hero===3){ctx.translate(0,32);ctx.scale(1,.7);}else{ctx.translate(0,50);ctx.rotate(-Math.PI/2);}}
}
function fatePresent(){
 const now=fateController.state.clock;
 for(const e of (typeof rollbackEvents==='function'?rollbackEvents():fateController.state.events)){if(fatePresentation.seen.has(e.id))continue;fatePresentation.seen.add(e.id);if(now-e.at>3)continue;
 const hooks={FateStart:'OnFateEventStarted',FateSuccess:'OnFateEventResolved',FateFailure:'OnFateEventResolved',SpecialDeath:'OnCharacterDeathSpecial',PassiveEnded:'OnPassiveEnded'};
 const detail={...e,animation:FATE_ANIMATIONS[e.hero]?.[e.phase],musicId:`fate.${e.hero}.${e.phase||e.trigger}`,sfxId:`fate.${e.trigger}`};
 if(typeof CustomEvent!=='undefined')for(const type of [hooks[e.trigger]||'OnPassiveTriggered',...(e.phase==='COMEBACK'?['OnComebackStarted']:e.phase==='FINAL_STAND'?['OnFinalStandStarted']:[]),'AnimationEvent','AudioEvent','MusicEvent'])window.dispatchEvent(new CustomEvent(type,{detail}));

 }
 if(fatePresentation.seen.size>128){const keep=new Set(fateController.state.events.map(e=>e.id));fatePresentation.seen=keep;}
 if(atHome)return;
 const pulse=fateController.state.units.find(u=>u.phase==='FINAL_STAND');if(pulse&&Math.floor(now)!==fatePresentation.lastPulse[pulse.id]){fatePresentation.lastPulse[pulse.id]=Math.floor(now);tone(pulse.until-now<3?180:90,.1,'triangle');}
 if(fatePresentation.clock-fatePresentation.lastHUD<.1)return;fatePresentation.lastHUD=fatePresentation.clock;
 for(let i=0;i<2;i++){const u=fateController.state.units[i],p=players[i];if(!u)continue;let box=$('fateHUD'+i);if(!box){box=document.createElement('div');box.id='fateHUD'+i;box.className='fate-panel fate-panel-'+i;document.querySelector('.battle').appendChild(box);box.innerHTML='<strong></strong><span></span><button type="button"></button>';box.querySelector('button').id='fateAction'+i;box.querySelector('button').onclick=()=>fateCommand(i,fateController.state.units[i].hero===7?'sacrifice':'repair');const dodge=document.createElement('button');dodge.id='fateDodge'+i;dodge.className='fate-dodge';dodge.textContent='↝ Dodge';dodge.onclick=()=>fateCommand(i,'dodge');box.appendChild(dodge);const melee=document.createElement('button');melee.id='fateMelee'+i;melee.className='fate-melee';melee.textContent='⚔ Strike';melee.onclick=()=>fateCommand(i,'melee');box.appendChild(melee);}
 const remaining=Math.max(0,u.until-now),labels={NORMAL:'READY',MANI:'MANI ACTIVE',CURSED:'MANI BROKEN',REPAIRING:`REPAIR ${Math.round((u.data.repair||0)/FATE_BALANCE.karna.repairHits*100)}% · TAP ON GOLD`,DEAD:'FATE ENDED'};
 let status=labels[u.phase]||u.phase.replaceAll('_',' ');if(u.hero===1&&u.phase==='KAVACHA')status='KAVACHA '+Math.round((1-(u.data.cracks||0))*100)+'%';if(u.hero===1&&u.phase==='NORMAL')status=u.used.wheel?'FATE CONSUMED':u.used.armour?'KAVACHA BROKEN · WHEEL READY':'KAVACHA + WHEEL READY';if(u.hero===0&&u.phase==='NORMAL'&&rescueSpent[i])status='RESCUE CONSUMED · THIS MATCH';
 if(u.hero===4&&u.phase==='LAST_WARRIOR')status=u.data.weapon==='BOW'?'ON FOOT · BOW':u.data.weapon==='SWORD'?'SWORD · ARROWS DISABLED':'CHARIOT WHEEL · FINAL WEAPON';if(u.hero===6)status=`PURSUIT ×${u.data.stacks} · ${status}`;if(u.hero===7)status=`FOCUS ${Math.floor(u.data.focus)}% · ${u.used.sacrifice?'SACRIFICE · ':''}${status}`;if(u.hero===3&&u.data.last)status=`${ASTRAS[u.data.last]?.name||u.data.last} · ${['','OBSERVED','UNDERSTOOD','MASTERED'][u.data.lessons[u.data.last]]}`;
 box.querySelector('strong').textContent='✦ '+FATE_NAMES[u.hero];box.querySelector('span').textContent=status+(remaining?' · '+remaining.toFixed(1)+'s':'');
 const local=!(mode==='ai'&&i===1||online.active&&online.seat!==i);const db=$('fateDodge'+i),mb=$('fateMelee'+i);db.hidden=!local;db.disabled=paused||ended||!!ultimate||!!impactCutscene||(u.data.dodgeReady||0)>now;mb.hidden=!local||!fateMeleeProfile(i);mb.textContent=u.data.weapon==='WHEEL'?'◉ Wheel strike':'⚔ Sword slash';mb.disabled=paused||ended||!!ultimate||!!impactCutscene||players[i].cool>0||!fateAttack(i);const b=$('fateAction'+i),repair=u.phase==='REPAIRING',sacrifice=u.hero===7&&!u.used.sacrifice;box.classList.toggle('repair-beat',repair&&((now-u.since)/(FATE_BALANCE.karna.repairDuration/FATE_BALANCE.karna.repairHits))%1<FATE_BALANCE.karna.repairWindow);b.hidden=!(repair||sacrifice)||mode==='ai'&&i===1||online.active&&online.seat!==i;b.disabled=paused||ended||!!ultimate||!!impactCutscene;b.textContent=repair?'⚒ Repair':'◇ Sacrifice';b.title=repair?'Tap during the gold pulse. Four accurate taps repair the wheel.':'Once per round: −15% normal damage for mastery benefits';
 }
}
function drawFates(){
 fatePresent();if(atHome)return;
 players.forEach((p,i)=>{const u=fateController.state.units[i];if(!u)return;ctx.save();const t=options.reduced?0:visualTime,color=['#b8ecff','#ffcd67','#d7c4ff','#ffac78','#ffcf95','#acffc4','#99eaff','#ecdaab'][u.hero];ctx.strokeStyle=color;ctx.fillStyle=color;ctx.lineWidth=2;
 if(u.phase!=='NORMAL'&&u.phase!=='DEAD'){ctx.globalAlpha=.45;ctx.beginPath();ctx.ellipse(p.x,p.y+(fateOnFoot(i)?25:-30),65+Math.sin(t*3)*4,fateOnFoot(i)?75:100,0,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;}
 if(u.phase==='KAVACHA'){for(let j=0;j<Math.ceil((u.data.cracks||0)*8);j++)line(p.x-30+j*9,p.y-90,p.x-15+j*9,p.y-35,color,2);}
 if(['WHEEL_STUCK','REPAIRING'].includes(u.phase)){ellipse(p.x,GROUND,90,8,'#372c24');line(p.x-35,GROUND-10,p.x+45,GROUND-10,color,3);}
 if(u.hero===5&&u.phase==='MANI')ellipse(p.x,p.y-101,5,7,color);
 if(u.hero===2&&u.phase==='DEAD')for(let j=0;j<10;j++)line(p.x-65+j*14,p.y+65,p.x-57+j*14,p.y+20,'#ddccaa',2);
 ctx.restore();});
 for(const event of fateController.state.events){if(event.trigger!=='ProjectileEvaded')continue;const age=fateController.state.clock-event.at;if(age<0||age>event.duration)continue;const a=event.projectile;line(a.x+a.vx*age,a.y+a.vy*age,a.x+a.vx*age-a.vx*.04,a.y+a.vy*age-a.vy*.04,a.color,3);}
 if(typeof drawProductionCinematics==='function')drawProductionCinematics();
}
document.addEventListener('keydown',e=>{if(e.repeat||atHome||['INPUT','SELECT','TEXTAREA'].includes(e.target?.tagName))return;const dodge=e.code==='KeyG'||e.code==='KeyK',strike=e.code==='KeyV'||e.code==='KeyB';const i=['KeyF','KeyG','KeyV'].includes(e.code)?0:['KeyJ','KeyK','KeyB'].includes(e.code)?1:-1;if(i<0||mode==='ai'&&i===1||online.active&&online.seat!==i)return;const u=fateController.state.units[i];fateCommand(i,dodge?'dodge':strike?'melee':u.hero===7?'sacrifice':'repair');});
// Final atlas replacement path. Null source entries intentionally fall back to existing four-pose sheets.
const fateAtlasCache=new Map();
function fateDrawSprite(p,pose,x,y,w,h){
 if(typeof drawProductionSprite!=='function'||!p.fate)return false;
 const foot=abhimanyuAnimation(p);if(foot){p.fateAnimation=foot.name;return drawProductionSprite(foot.name,p,x,y+8,w,h,foot.age);}
 // Kavacha is persistent protection, not a persistent replacement combat pose.
 if(p.fate.hero===1&&p.fate.phase==='KAVACHA'&&(pose!==0||presentationNow()-(p.fate.presentationSince??p.fate.since)>.6))return false;
 const active=productionAnimation(p);if(p.fate.hero===5&&p.fate.phase!=='DEAD'&&!active)return false;if(active)p.fateAnimation=active.name;
 if(p.fate.phase==='NORMAL'&&!active&&!(p.fate.hero===6&&p.fate.data.stacks>0)&&!(p.fate.hero===7&&p.fate.data.focus>0))return false;
 if(!FATE_ASSET_SLOTS[p.fateAnimation]?.src)return false;
 return drawProductionSprite(p.fateAnimation,p,x,y,w,h,active?active.age:Math.max(0,presentationNow()-(p.fate.presentationSince??p.fate.since)));
}

const FATE_ANIMATION_TRACKS={
 0:(p,u,t)=>u.phase==='GUIDANCE'?(t<1.2?'arjuna_duck':'arjuna_recover'):null,
 1:(p,u,t)=>u.phase==='KAVACHA'?(p.flash>0?'karna_kavacha_hit':t<.6?'karna_kavacha_activate':u.data.cracks>.5?'karna_kavacha_crack':'karna_passive_idle'):null,
 2:(p,u,t)=>u.phase==='FINAL_STAND'?(t<.6?'bhishma_icchamrityu_activate':p.release>0?'bhishma_final_attack':'bhishma_final_stand'):u.phase==='DEAD'&&t<.6?'bhishma_lower_bow':null,
 4:(p,u,t)=>u.phase==='LAST_WARRIOR'?(t<.4?'abhimanyu_chariot_break':t<.8?'abhimanyu_jump':u.data.weapon==='SWORD'?'abhimanyu_sword_draw':u.data.weapon==='MACE'&&p.release>0?'abhimanyu_mace_attack':'abhimanyu_last_stand'):null,
 5:(p,u,t)=>u.phase==='SHATTER'&&t<.3?'ashwatthama_mani_crack':null,
 6:(p,u,t)=>u.phase==='FURY'?(p.release>0?'satyaki_fury_rapid_shot':p.focus>0?'satyaki_fury_draw':'satyaki_fury_idle'):u.data.stacks>0?'satyaki_pursuit_0'+u.data.stacks:null,
 7:(p,u,t)=>u.used.sacrifice?'ekalavya_alternate_grip':u.phase==='INSTINCT'?(p.release>0?'ekalavya_instinct_shot':'ekalavya_instinct_draw'):u.data.focus>65?'ekalavya_focus_high':u.data.focus>0?'ekalavya_focus_idle':null
};
function fateAnimationName(p,fallback){const u=p.fate,t=Math.max(0,fateController.state.clock-u.since);return FATE_ANIMATION_TRACKS[u.hero]?.(p,u,t)||fallback;}

function abhimanyuAnimation(p){const u=p.fate;if(u.hero!==4||u.phase!=='LAST_WARRIOR')return null;const now=presentationNow(),stageAge=now-(u.data.weaponPresentationAt??u.presentationSince??u.since),weapon=u.data.weapon.toLowerCase();if(fateController.state.clock-u.since<.8)return {name:'abhimanyu_jump_from_chariot',age:(fateController.state.clock-u.since)*.8};if(u.data.weapon!=='BOW'&&stageAge<FATE_BALANCE.abhimanyu.transition)return {name:weapon==='sword'?'abhimanyu_bow_break':'abhimanyu_wheel_take',age:stageAge};const a=u.data.melee;if(a&&now-a.presentationAt<FATE_BALANCE.abhimanyu[weapon]?.recovery)return {name:'abhimanyu_'+weapon+'_attack',age:now-a.presentationAt};if(weapon==='bow'&&(p.release>0||p.focus>0))return {name:'abhimanyu_bow_attack',age:p.release>0?.48:Math.min(.38,p.focus*.26)};return {name:'abhimanyu_'+weapon+(p.moving?'_walk':'_idle'),age:p.moving?(p.gait||0)/7:stageAge};}
document.addEventListener('keydown',e=>{if(atHome||paused||ended||['INPUT','SELECT','TEXTAREA','BUTTON'].includes(e.target?.tagName))return;const controls={KeyZ:[0,false],KeyX:[0,true],KeyN:[1,true],KeyM:[1,false]},c=controls[e.code];if(!c)return;const i=online.active?online.seat:c[0];if(mode==='ai'&&i===1||!fateOnFoot(i))return;e.preventDefault();moveChariot(i,c[1]);});


// dialogue-data
'use strict';
const DIALOGUE_DATA={"entries":{"vo_arjuna_intro_01":{"id":"vo_arjuna_intro_01","speaker":"arjuna","trigger":"intro","target":null,"subtitle":"The bow is drawn. Let duty decide the rest.","audio":"voice/vo_arjuna_intro_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.239,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":3.239,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"833954cafb98cec373aeeda792ea49a2a41b2b823b34f7603f55ee6669bb5635"}},"vo_arjuna_intro_02":{"id":"vo_arjuna_intro_02","speaker":"arjuna","trigger":"intro","target":null,"subtitle":"I seek no glory here.","audio":"voice/vo_arjuna_intro_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.959,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":1.959,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"1b0b675efa27db7e4b4b4495544111bd0885236024567b85014dfeef6fa04200"}},"vo_krishna_passive_01":{"id":"vo_krishna_passive_01","speaker":"krishna","trigger":"passive","target":null,"subtitle":"Partha!","audio":"voice/vo_krishna_passive_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.127,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"krishna","duration":4.127,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"04a054591c66b54bbfdfeb2b29a7bdcd44652d7bdd9b3d34c0fe575a8f121aa6"}},"vo_arjuna_passive_01":{"id":"vo_arjuna_passive_01","speaker":"arjuna","trigger":"passive","target":null,"subtitle":"Madhava...","audio":"voice/vo_arjuna_passive_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.411,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":1.411,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e5071432a4d60cb30d0fe0f9b3d7bddcc212cd983bdc885426ff49af043893b5"}},"vo_krishna_passive_02":{"id":"vo_krishna_passive_02","speaker":"krishna","trigger":"passive","target":null,"subtitle":"Eyes on your enemy.","audio":"voice/vo_krishna_passive_02.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.676,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"krishna","duration":4.676,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"026a835cb1c3831955d2db2ad9df79a548769e19af8e6fc1740e3004915e8766"}},"vo_arjuna_low_health_01":{"id":"vo_arjuna_low_health_01","speaker":"arjuna","trigger":"low_health","target":null,"subtitle":"I have endured worse.","audio":"voice/vo_arjuna_low_health_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"3025360d5b676afb4fa1c411df25357fceed5cf51cecba8066ef934dd5246f2f"}},"vo_arjuna_low_health_02":{"id":"vo_arjuna_low_health_02","speaker":"arjuna","trigger":"low_health","target":null,"subtitle":"My hand remains steady.","audio":"voice/vo_arjuna_low_health_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":6.113,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":6.113,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"6dccc819983c2e3c8c855b2d84ea4788d9d3b39870e8603b357882c073606987"}},"vo_arjuna_rage_01":{"id":"vo_arjuna_rage_01","speaker":"arjuna","trigger":"rage","target":null,"subtitle":"Then restraint ends here.","audio":"voice/vo_arjuna_rage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.351,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.351,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"ea56d568ce0923e046fecc7ff37a557940128055502b845cb54496531b994a84"}},"vo_arjuna_ultimate_01":{"id":"vo_arjuna_ultimate_01","speaker":"arjuna","trigger":"ultimate","target":null,"subtitle":"Let the heavens witness this arrow.","audio":"voice/vo_arjuna_ultimate_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":5.799,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":5.799,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"19b622ccd89613a0ec0d7515ca8254883b37894322f7b33683a63fc9008111aa"}},"vo_arjuna_counter_01":{"id":"vo_arjuna_counter_01","speaker":"arjuna","trigger":"counter","target":null,"subtitle":"I know this weapon.","audio":"voice/vo_arjuna_counter_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.038,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.038,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"be49a8891ed493fe2f0543e105a55397c897b95605b2538dd981bb8459e84017"}},"vo_arjuna_counter_02":{"id":"vo_arjuna_counter_02","speaker":"arjuna","trigger":"counter","target":null,"subtitle":"Your Astra will not pass.","audio":"voice/vo_arjuna_counter_02.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d12d33090e867e6d5c09f4b4c12027cf49262b1e8cce578740bff948bfc063c4"}},"vo_arjuna_victory_01":{"id":"vo_arjuna_victory_01","speaker":"arjuna","trigger":"victory","target":null,"subtitle":"The battle is decided.","audio":"voice/vo_arjuna_victory_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":3.396,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":3.396,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e120b96145bb725e26a29ab689ee6704e03a95dd8e2f24cbf601d70a709cb9e8"}},"vo_arjuna_victory_02":{"id":"vo_arjuna_victory_02","speaker":"arjuna","trigger":"victory","target":null,"subtitle":"May this victory serve Dharma.","audio":"voice/vo_arjuna_victory_02.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":3.082,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":3.082,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"4e83d0614bbe3951878a7f17404c071e45b9f27d60d26ee42ce92712016ce47a"}},"vo_arjuna_defeat_01":{"id":"vo_arjuna_defeat_01","speaker":"arjuna","trigger":"defeat","target":null,"subtitle":"My bow... falls silent.","audio":"voice/vo_arjuna_defeat_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.206,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":4.206,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"395ae3d6496defc7c7a470156e90cec02d6cc6c19c8e18f4468e85d6122f5db0"}},"vo_karna_intro_01":{"id":"vo_karna_intro_01","speaker":"karna","trigger":"intro","target":null,"subtitle":"I have waited long enough for this field.","audio":"voice/vo_karna_intro_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.847,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.847,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"beb620f08b9e241b022c6f9115653d84fee08c006b9e0d7814d0c63953aac647"}},"vo_karna_intro_02":{"id":"vo_karna_intro_02","speaker":"karna","trigger":"intro","target":null,"subtitle":"Today, birth decides nothing.","audio":"voice/vo_karna_intro_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.769,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.769,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"0031d44d7b549a97d8b806589d9f4f0e05ec6ffc866ecf4eef45681608820fcf"}},"vo_karna_kavacha_01":{"id":"vo_karna_kavacha_01","speaker":"karna","trigger":"kavacha","target":null,"subtitle":"The Sun still guards me.","audio":"voice/vo_karna_kavacha_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.273,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.273,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e72e51f6eb3402685bc9361dd33e7cf4ce93aa1a935f0a93ffc2388ae26c3f4d"}},"vo_karna_kavacha_break_01":{"id":"vo_karna_kavacha_break_01","speaker":"karna","trigger":"kavacha_break","target":null,"subtitle":"Then I fight without it.","audio":"voice/vo_karna_kavacha_break_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.959,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":1.959,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"69baacde279e1599da506fa6e4cadb9c838e0ae0c9d65797b2e20fdcbc3039a6"}},"vo_karna_wheel_stuck_01":{"id":"vo_karna_wheel_stuck_01","speaker":"karna","trigger":"wheel_stuck","target":null,"subtitle":"Not now...","audio":"voice/vo_karna_wheel_stuck_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.567,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":1.567,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"00b0231c77cf12fe0533e13afdb06e3e47d35ecd95a20e0264cca2eac3b0d6e2"}},"vo_karna_wheel_stuck_02":{"id":"vo_karna_wheel_stuck_02","speaker":"karna","trigger":"wheel_stuck","target":null,"subtitle":"Earth itself turns against me.","audio":"voice/vo_karna_wheel_stuck_02.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":3.082,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":3.082,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"b2f75d05f1ffe7d60677d09a22a6466a5cc99fc7680ad731111f8718be698cc5"}},"vo_karna_repair_success_01":{"id":"vo_karna_repair_success_01","speaker":"karna","trigger":"repair_success","target":null,"subtitle":"Fate will not decide this battle.","audio":"voice/vo_karna_repair_success_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"2b5a068c1c29a1cdcf11d0b81c65ef3b437193270de9b278c33c3d57e76d08d5"}},"vo_karna_low_health_01":{"id":"vo_karna_low_health_01","speaker":"karna","trigger":"low_health","target":null,"subtitle":"I have carried heavier wounds than these.","audio":"voice/vo_karna_low_health_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.004,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":3.004,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"44588cbb24ec6e039a366f033e8bf164bd6edb81335e8b14fcbe63a9ed3ce870"}},"vo_karna_rage_01":{"id":"vo_karna_rage_01","speaker":"karna","trigger":"rage","target":null,"subtitle":"Enough.","audio":"voice/vo_karna_rage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.411,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":1.411,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"331d522e2d97adfdf7c6db4047dcc9e1b22d5d8d74074066cbe5523f9811ffc7"}},"vo_karna_ultimate_01":{"id":"vo_karna_ultimate_01","speaker":"karna","trigger":"ultimate","target":null,"subtitle":"Receive the wrath of the Sun.","audio":"voice/vo_karna_ultimate_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":5.486,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":5.486,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"5b5cb4cc1dddc05e16f7ee6f543595d54d6dfff97a4c8922da388ea5f525190e"}},"vo_karna_counter_01":{"id":"vo_karna_counter_01","speaker":"karna","trigger":"counter","target":null,"subtitle":"I will not fall to this.","audio":"voice/vo_karna_counter_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"1243e7e0e9e149a22eea4a974ff1282a132bf0026fc93db740ecb7f7ca447e15"}},"vo_karna_victory_01":{"id":"vo_karna_victory_01","speaker":"karna","trigger":"victory","target":null,"subtitle":"Remember the name you denied.","audio":"voice/vo_karna_victory_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"dba68dd996126eb2a7cfc21062c5282f4542f4f8cb04fbbd1954fd21069966f9"}},"vo_karna_defeat_01":{"id":"vo_karna_defeat_01","speaker":"karna","trigger":"defeat","target":null,"subtitle":"So... this is where the road ends.","audio":"voice/vo_karna_defeat_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":3.161,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":3.161,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e88805d187218976f3a2823e5b7466cd5ffbb45e8bc8813a3a656cfe4952c027"}},"vo_bhishma_intro_01":{"id":"vo_bhishma_intro_01","speaker":"bhishma","trigger":"intro","target":null,"subtitle":"I have watched generations learn the meaning of war.","audio":"voice/vo_bhishma_intro_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":6.609,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":6.609,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"6bad108e4c06292b8a798ad385e705f3eae6febd15392b7285c8678d8493bb88"}},"vo_bhishma_intro_02":{"id":"vo_bhishma_intro_02","speaker":"bhishma","trigger":"intro","target":null,"subtitle":"Come. Show me what your training has made of you.","audio":"voice/vo_bhishma_intro_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.553,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":3.553,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"475cc3f7e9738a96c1d7d9bfc4054c71bd4e829c47626e73600ffbd51c4973e9"}},"vo_bhishma_icchamrityu_01":{"id":"vo_bhishma_icchamrityu_01","speaker":"bhishma","trigger":"icchamrityu","target":null,"subtitle":"My life ends when I choose.","audio":"voice/vo_bhishma_icchamrityu_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.926,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":2.926,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e09c2a8bccec47a71870550f090f567dc67485ba5bb033285ed8c507f0dbbf01"}},"vo_bhishma_final_stand_01":{"id":"vo_bhishma_final_stand_01","speaker":"bhishma","trigger":"final_stand","target":null,"subtitle":"You cannot take what I have not surrendered.","audio":"voice/vo_bhishma_final_stand_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.082,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":3.082,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"01a4597dcd70ffbb4111a74c9a1c32a044768421126ef64c3b293608a285ca7a"}},"vo_bhishma_final_death_01":{"id":"vo_bhishma_final_death_01","speaker":"bhishma","trigger":"final_death","target":null,"subtitle":"The hour has come.","audio":"voice/vo_bhishma_final_death_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.441,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":4.441,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"6779370b5e8d877bab3ea31c2d4a936969a2af346343ced08ec6de8d46fffa63"}},"vo_bhishma_low_health_01":{"id":"vo_bhishma_low_health_01","speaker":"bhishma","trigger":"low_health","target":null,"subtitle":"Pain is an old companion.","audio":"voice/vo_bhishma_low_health_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.847,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":2.847,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"a87c1b034edcb76e4c0d7735f9126393bbcd452e99a07314c88697829c51a6d3"}},"vo_bhishma_ultimate_01":{"id":"vo_bhishma_ultimate_01","speaker":"bhishma","trigger":"ultimate","target":null,"subtitle":"Witness the strength of my vow.","audio":"voice/vo_bhishma_ultimate_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":5.721,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":5.721,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"07b9f6b501e455707fea6a71acb7444a7c08686659d85997f1d22a088795f0a7"}},"vo_bhishma_counter_01":{"id":"vo_bhishma_counter_01","speaker":"bhishma","trigger":"counter","target":null,"subtitle":"Too slow.","audio":"voice/vo_bhishma_counter_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.441,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":4.441,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"44a572ba6381f930a61953ec37692f7779be40454cb9431e76cbc99019c2434d"}},"vo_bhishma_victory_01":{"id":"vo_bhishma_victory_01","speaker":"bhishma","trigger":"victory","target":null,"subtitle":"Experience has spoken.","audio":"voice/vo_bhishma_victory_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.989,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":4.989,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"19aee61da288980bd26083164ece4516ade86c14f0634786a78ec3cd8331d929"}},"vo_bhishma_defeat_01":{"id":"vo_bhishma_defeat_01","speaker":"bhishma","trigger":"defeat","target":null,"subtitle":"I accept this moment.","audio":"voice/vo_bhishma_defeat_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":3.474,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":3.474,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"79106e63bb99e21556202d6f0048bc0e96c5c94b8fa2743848415b1747c3c3b7"}},"vo_drona_intro_01":{"id":"vo_drona_intro_01","speaker":"drona","trigger":"intro","target":null,"subtitle":"A warrior reveals himself with the first arrow.","audio":"voice/vo_drona_intro_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":6.609,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":6.609,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"6e86eadf31f70fb308c2597c3a4480f11defdecc204719a8cca5c53cc803ea59"}},"vo_drona_intro_02":{"id":"vo_drona_intro_02","speaker":"drona","trigger":"intro","target":null,"subtitle":"Show me what you have learned.","audio":"voice/vo_drona_intro_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.881,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":1.881,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"68489a574a64c92da1ca731abb1900b58449c8534d3441379cb384fcb16a4b8b"}},"vo_drona_observed_01":{"id":"vo_drona_observed_01","speaker":"drona","trigger":"observed","target":null,"subtitle":"Interesting.","audio":"voice/vo_drona_observed_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.228,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":1.228,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"3bb223711cae297867fefe059b3f32dc7b210ede86c461f8bde12c43db567a97"}},"vo_drona_understood_01":{"id":"vo_drona_understood_01","speaker":"drona","trigger":"understood","target":null,"subtitle":"I see your pattern.","audio":"voice/vo_drona_understood_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.646,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":1.646,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"01dfcd6c4deeca0fdb50f696806ac19f2908f1c72cff03609fb6d47cf1be38b8"}},"vo_drona_mastered_01":{"id":"vo_drona_mastered_01","speaker":"drona","trigger":"mastered","target":null,"subtitle":"You repeat the lesson.","audio":"voice/vo_drona_mastered_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.567,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":1.567,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e280cd2f2427a0e077b777e57ef0ed0513bfa9de1a2418218d65083d738d5518"}},"vo_drona_mastered_02":{"id":"vo_drona_mastered_02","speaker":"drona","trigger":"mastered","target":null,"subtitle":"Now learn from the teacher.","audio":"voice/vo_drona_mastered_02.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"90074ef709d194bade86a1aa69106a6101c104507ec04f7aa60d4f9bc2429a1c"}},"vo_drona_low_health_01":{"id":"vo_drona_low_health_01","speaker":"drona","trigger":"low_health","target":null,"subtitle":"A wounded teacher still remembers every lesson.","audio":"voice/vo_drona_low_health_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.553,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":3.553,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d6cc70f54e04e1adeca30b1e17d35cc4dbd10ad5dbf5b840652f853265965623"}},"vo_drona_ultimate_01":{"id":"vo_drona_ultimate_01","speaker":"drona","trigger":"ultimate","target":null,"subtitle":"Observe carefully.","audio":"voice/vo_drona_ultimate_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.754,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":4.754,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"ec6b721266d1c92f5e391b21a9b3064c7c0c41d4e0495c048332c67c51341c7d"}},"vo_drona_counter_01":{"id":"vo_drona_counter_01","speaker":"drona","trigger":"counter","target":null,"subtitle":"Predictable.","audio":"voice/vo_drona_counter_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.149,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":1.149,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"fb18a68ea22692d546398c71523ca29f467339491fe6329c740dc796b4341abe"}},"vo_drona_victory_01":{"id":"vo_drona_victory_01","speaker":"drona","trigger":"victory","target":null,"subtitle":"The lesson is complete.","audio":"voice/vo_drona_victory_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.038,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.038,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"a92ec160eac1b057dd253bd9ace7493c5038954d01816a9b56aef034b59dae6a"}},"vo_drona_defeat_01":{"id":"vo_drona_defeat_01","speaker":"drona","trigger":"defeat","target":null,"subtitle":"Even the teacher must one day lay down his weapon.","audio":"voice/vo_drona_defeat_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":3.317,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":3.317,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"28972f851353329dbf4fe7310090635d6559ff55940a982aefda03314409bc24"}},"vo_abhimanyu_intro_01":{"id":"vo_abhimanyu_intro_01","speaker":"abhimanyu","trigger":"intro","target":null,"subtitle":"I did not come here to retreat.","audio":"voice/vo_abhimanyu_intro_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"aab792dd19635368384525f5f8fe3ce807339ab8bd0510e038d2cb2361657787"}},"vo_abhimanyu_intro_02":{"id":"vo_abhimanyu_intro_02","speaker":"abhimanyu","trigger":"intro","target":null,"subtitle":"Open the path.","audio":"voice/vo_abhimanyu_intro_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.411,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":1.411,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"8aad24682cced55f1ed252347265f05cf05e10512fe62d64be68ffbd9dfaee70"}},"vo_abhimanyu_last_warrior_01":{"id":"vo_abhimanyu_last_warrior_01","speaker":"abhimanyu","trigger":"last_warrior","target":null,"subtitle":"So this is where you thought I would fall?","audio":"voice/vo_abhimanyu_last_warrior_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.769,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":2.769,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"f69ffd2b3762c3d43f0e7d933e681476e44e2b7382c54b9dee676954382f489b"}},"vo_abhimanyu_bow_break_01":{"id":"vo_abhimanyu_bow_break_01","speaker":"abhimanyu","trigger":"bow_break","target":null,"subtitle":"Then I need no bow.","audio":"voice/vo_abhimanyu_bow_break_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":4.362,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":4.362,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d56689722b39b2b24dd20d29d900f6b8d6cb131de0052bb9b9a051d0bd970b22"}},"vo_abhimanyu_sword_01":{"id":"vo_abhimanyu_sword_01","speaker":"abhimanyu","trigger":"sword","target":null,"subtitle":"Come closer.","audio":"voice/vo_abhimanyu_sword_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.646,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":1.646,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d00f95cd1e119e57907c80c8045046af479b48cce189ccf99bcc127a38e2c0a2"}},"vo_abhimanyu_final_weapon_01":{"id":"vo_abhimanyu_final_weapon_01","speaker":"abhimanyu","trigger":"final_weapon","target":null,"subtitle":"I still stand.","audio":"voice/vo_abhimanyu_final_weapon_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"08ed56cada33859b5ea8e4a9bcaa532beaf81fa4cf4f38fa37a307671f48883e"}},"vo_abhimanyu_low_health_01":{"id":"vo_abhimanyu_low_health_01","speaker":"abhimanyu","trigger":"low_health","target":null,"subtitle":"Not yet!","audio":"voice/vo_abhimanyu_low_health_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.646,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":1.646,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"3e4574a211832eafdcc8fc3ac984709abfa6007a49c0ebf06078614264e2b939"}},"vo_abhimanyu_rage_01":{"id":"vo_abhimanyu_rage_01","speaker":"abhimanyu","trigger":"rage","target":null,"subtitle":"Try to stop me!","audio":"voice/vo_abhimanyu_rage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.567,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":1.567,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"9e37fae5cc8e44d7b58ae1e403e14b887aec623dee975070298b827c36c491a7"}},"vo_abhimanyu_ultimate_01":{"id":"vo_abhimanyu_ultimate_01","speaker":"abhimanyu","trigger":"ultimate","target":null,"subtitle":"I will break through!","audio":"voice/vo_abhimanyu_ultimate_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.754,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":4.754,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"40bc99011ba3bdd983d5f0bbaf600e59924c3b6aff016d429b39253b6625f9ca"}},"vo_abhimanyu_victory_01":{"id":"vo_abhimanyu_victory_01","speaker":"abhimanyu","trigger":"victory","target":null,"subtitle":"Was that all?","audio":"voice/vo_abhimanyu_victory_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.306,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":1.306,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e155be6dbae6b0b5ccd2f9f8a8026d8ff9ddca44aa3b8aa427bad43f0835b28d"}},"vo_abhimanyu_defeat_01":{"id":"vo_abhimanyu_defeat_01","speaker":"abhimanyu","trigger":"defeat","target":null,"subtitle":"I fought to the end.","audio":"voice/vo_abhimanyu_defeat_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.049,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":4.049,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"49e661c9c1f5b797a18d3ffd06cb6e8fcb0ea73f2a5339a0de047f2bb56699e5"}},"vo_ashwatthama_intro_01":{"id":"vo_ashwatthama_intro_01","speaker":"ashwatthama","trigger":"intro","target":null,"subtitle":"Do not test what you cannot contain.","audio":"voice/vo_ashwatthama_intro_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.847,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.847,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"08b5279a38b4cb77a9c61e429cd2078029492c78634620206eaa38404063e84f"}},"vo_ashwatthama_intro_02":{"id":"vo_ashwatthama_intro_02","speaker":"ashwatthama","trigger":"intro","target":null,"subtitle":"My patience ended long ago.","audio":"voice/vo_ashwatthama_intro_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"11bb4582a21b1a35d4a64c720c3b9edda73c64cd4aafcfb1d00565558fbedaed"}},"vo_ashwatthama_mani_active_01":{"id":"vo_ashwatthama_mani_active_01","speaker":"ashwatthama","trigger":"mani_active","target":null,"subtitle":"The jewel sees what you cannot.","audio":"voice/vo_ashwatthama_mani_active_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.586,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.586,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"653e93124ddd7cff86a655673b275fc41e376d534e3f50fd9587f84f39be5db6"}},"vo_ashwatthama_mani_shatter_01":{"id":"vo_ashwatthama_mani_shatter_01","speaker":"ashwatthama","trigger":"mani_shatter","target":null,"subtitle":"You cannot give me the death I seek.","audio":"voice/vo_ashwatthama_mani_shatter_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":3.709,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":3.709,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"b89098d7bd86190bb3d27f975f88da4be3a6f67bf29ac6b411479255e86bd21d"}},"vo_ashwatthama_cursed_state_01":{"id":"vo_ashwatthama_cursed_state_01","speaker":"ashwatthama","trigger":"cursed_state","target":null,"subtitle":"Now you have awakened something worse.","audio":"voice/vo_ashwatthama_cursed_state_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.971,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":3.971,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"b5714e554f3bf622d7bd755861a1ca629d30ac9801b98586cf54a5941dae6b83"}},"vo_ashwatthama_low_health_01":{"id":"vo_ashwatthama_low_health_01","speaker":"ashwatthama","trigger":"low_health","target":null,"subtitle":"Pain changes nothing.","audio":"voice/vo_ashwatthama_low_health_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.351,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.351,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"ad9b4755a36afd420fc29ed411a25fc9704bda349bc445ebeabf6322b33cb355"}},"vo_ashwatthama_rage_01":{"id":"vo_ashwatthama_rage_01","speaker":"ashwatthama","trigger":"rage","target":null,"subtitle":"No more restraint.","audio":"voice/vo_ashwatthama_rage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.802,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":1.802,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"5a2e3aaa62044bf3a9d503832cb5927a4404ec6ef6ce7b6af79a428e81e69b2c"}},"vo_ashwatthama_ultimate_01":{"id":"vo_ashwatthama_ultimate_01","speaker":"ashwatthama","trigger":"ultimate","target":null,"subtitle":"Let everything burn.","audio":"voice/vo_ashwatthama_ultimate_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":5.172,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":5.172,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"de11539258d7dcf3064fb9474fdec80d6c84d69a7ffa24ac701f780cf5a84902"}},"vo_ashwatthama_counter_01":{"id":"vo_ashwatthama_counter_01","speaker":"ashwatthama","trigger":"counter","target":null,"subtitle":"Your weapon means nothing to me.","audio":"voice/vo_ashwatthama_counter_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"6658a6c4e2e6dcfa2e06e6d3dbf0a5808c39ff2815f65737fd3534b445b94791"}},"vo_ashwatthama_victory_01":{"id":"vo_ashwatthama_victory_01","speaker":"ashwatthama","trigger":"victory","target":null,"subtitle":"Remember this fear.","audio":"voice/vo_ashwatthama_victory_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.881,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":1.881,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"c6601be21f19ff62d327c70f14a296d93552b44947b8816668b5083e2ac27f15"}},"vo_ashwatthama_defeat_01":{"id":"vo_ashwatthama_defeat_01","speaker":"ashwatthama","trigger":"defeat","target":null,"subtitle":"This is not the end.","audio":"voice/vo_ashwatthama_defeat_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.959,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":1.959,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"95bc95ccab9a1c8abc6d3265a5448425c08416f3bae4c1a6e2b1160c3f4d4834"}},"vo_satyaki_intro_01":{"id":"vo_satyaki_intro_01","speaker":"satyaki","trigger":"intro","target":null,"subtitle":"Keep your distance while you still can.","audio":"voice/vo_satyaki_intro_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"844186101a0c454ca596d0036e017332d72d874d510bf1c10cf528b3d302198e"}},"vo_satyaki_intro_02":{"id":"vo_satyaki_intro_02","speaker":"satyaki","trigger":"intro","target":null,"subtitle":"I will not give you time to breathe.","audio":"voice/vo_satyaki_intro_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"0b225b0e38898ad11f4d18a1df1b3aefa89f5693955348e3c518317952dad9bf"}},"vo_satyaki_pursuit_01":{"id":"vo_satyaki_pursuit_01","speaker":"satyaki","trigger":"pursuit","target":null,"subtitle":"One.","audio":"voice/vo_satyaki_pursuit_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":0.993,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":0.993,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d29e4e622833b90712da247f05c5cc996e0610cace0c1fa042d7b873d13bcfba"}},"vo_satyaki_pursuit_02":{"id":"vo_satyaki_pursuit_02","speaker":"satyaki","trigger":"pursuit","target":null,"subtitle":"Again.","audio":"voice/vo_satyaki_pursuit_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":0.993,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":0.993,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"623ff77339782b3005c3cf56ee91459d3d2d06110dedf03c1815eb05601ec76b"}},"vo_satyaki_fury_01":{"id":"vo_satyaki_fury_01","speaker":"satyaki","trigger":"fury","target":null,"subtitle":"Run. I will still reach you.","audio":"voice/vo_satyaki_fury_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.351,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":2.351,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e7ead52c3ffd5f94d23f8527cbdebabb3f4f1069bc2313c19f4c22b107e19edb"}},"vo_satyaki_low_health_01":{"id":"vo_satyaki_low_health_01","speaker":"satyaki","trigger":"low_health","target":null,"subtitle":"Good. Now the fight is interesting.","audio":"voice/vo_satyaki_low_health_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.239,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":3.239,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"10db603946b1bacd45893bca898f1583706ee841ba499df401c37863328add02"}},"vo_satyaki_rage_01":{"id":"vo_satyaki_rage_01","speaker":"satyaki","trigger":"rage","target":null,"subtitle":"Keep up!","audio":"voice/vo_satyaki_rage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.071,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":1.071,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"72c710ba6d887f5ef3804aa44687ade8ae28fc4b64d53e44643e6d4e4b42fdd7"}},"vo_satyaki_ultimate_01":{"id":"vo_satyaki_ultimate_01","speaker":"satyaki","trigger":"ultimate","target":null,"subtitle":"This ends now!","audio":"voice/vo_satyaki_ultimate_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.676,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":4.676,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"ab3c4b196d26be3062559b6fb49373cf35feded57db39d990091cb2fe7b318cc"}},"vo_satyaki_counter_01":{"id":"vo_satyaki_counter_01","speaker":"satyaki","trigger":"counter","target":null,"subtitle":"Too obvious.","audio":"voice/vo_satyaki_counter_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.489,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":1.489,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"a73ee6cd0aa436244ce39e447595e7ae3f16da5b3139f7f2f460d60ade604800"}},"vo_satyaki_victory_01":{"id":"vo_satyaki_victory_01","speaker":"satyaki","trigger":"victory","target":null,"subtitle":"You gave me an opening.","audio":"voice/vo_satyaki_victory_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.646,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":1.646,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d260bed318e5d7c2e13065411415078d7bbc71149d42c999281f398ec8d74f7f"}},"vo_satyaki_defeat_01":{"id":"vo_satyaki_defeat_01","speaker":"satyaki","trigger":"defeat","target":null,"subtitle":"I was too slow.","audio":"voice/vo_satyaki_defeat_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.881,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":1.881,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"b60adf8dc904da74c6320146b0bd89c36f1d3d7cb7323e279f4e00f699b71ff0"}},"vo_ekalavya_intro_01":{"id":"vo_ekalavya_intro_01","speaker":"ekalavya","trigger":"intro","target":null,"subtitle":"I learned without invitation.","audio":"voice/vo_ekalavya_intro_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"0d3fc8b9fc09065842e3ec58529985f4576640530cc7ee1e2972749bf8d66ef1"}},"vo_ekalavya_intro_02":{"id":"vo_ekalavya_intro_02","speaker":"ekalavya","trigger":"intro","target":null,"subtitle":"My bow requires no approval.","audio":"voice/vo_ekalavya_intro_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.769,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.769,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"fec71570b34cd93c533fa7ce690a4eae07c35070f1e373934ce49825e6812c6e"}},"vo_ekalavya_focus_01":{"id":"vo_ekalavya_focus_01","speaker":"ekalavya","trigger":"focus","target":null,"subtitle":"Silence.","audio":"voice/vo_ekalavya_focus_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.411,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":1.411,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"33b5028dbd3bfbf42479d2802133def48b521aacbaf1dded1f7c8d2fa93039d0"}},"vo_ekalavya_instinct_01":{"id":"vo_ekalavya_instinct_01","speaker":"ekalavya","trigger":"instinct","target":null,"subtitle":"No master taught this hand.","audio":"voice/vo_ekalavya_instinct_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.351,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.351,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"59251be47271be7ffbeb4842da41d82b3e34ef4d63829977567dd429718393a7"}},"vo_ekalavya_guru_dakshina_01":{"id":"vo_ekalavya_guru_dakshina_01","speaker":"ekalavya","trigger":"guru_dakshina","target":null,"subtitle":"What was taken from me did not take my skill.","audio":"voice/vo_ekalavya_guru_dakshina_01.mp3","priority":100,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":3.317,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":3.317,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"6498ab887d448477ae33538d639af73f3999f3ac4c7080225c22a9015c10d701"}},"vo_ekalavya_low_health_01":{"id":"vo_ekalavya_low_health_01","speaker":"ekalavya","trigger":"low_health","target":null,"subtitle":"Pain is another teacher.","audio":"voice/vo_ekalavya_low_health_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.586,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.586,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"432bb1399dc3670a82ebb23acbf4d1aaaff558741b69a2c466745db1729c32ff"}},"vo_ekalavya_rage_01":{"id":"vo_ekalavya_rage_01","speaker":"ekalavya","trigger":"rage","target":null,"subtitle":"I have trained for harder moments.","audio":"voice/vo_ekalavya_rage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.351,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.351,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"3aae5af4e2e01de9719cdc474d97ed4f2afc009f74a57e137cefe531ab6b85ac"}},"vo_ekalavya_ultimate_01":{"id":"vo_ekalavya_ultimate_01","speaker":"ekalavya","trigger":"ultimate","target":null,"subtitle":"Watch closely.","audio":"voice/vo_ekalavya_ultimate_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":4.441,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":4.441,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"b536a16049742a46260331c2fecc19d03bbb7e201c9335a2ddcc3d2047e2286b"}},"vo_ekalavya_counter_01":{"id":"vo_ekalavya_counter_01","speaker":"ekalavya","trigger":"counter","target":null,"subtitle":"I learned by watching.","audio":"voice/vo_ekalavya_counter_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":1.959,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":1.959,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"dd16a595123734494390c4165738e016f03a717df50f5fa5d4dfc3127625ae2e"}},"vo_ekalavya_victory_01":{"id":"vo_ekalavya_victory_01","speaker":"ekalavya","trigger":"victory","target":null,"subtitle":"Skill speaks for itself.","audio":"voice/vo_ekalavya_victory_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d82779262f343a3a394b0d8886a05cd1a091841d5f619c0f91b34638498bbd82"}},"vo_ekalavya_defeat_01":{"id":"vo_ekalavya_defeat_01","speaker":"ekalavya","trigger":"defeat","target":null,"subtitle":"Then I will learn from defeat.","audio":"voice/vo_ekalavya_defeat_01.mp3","priority":75,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.847,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.847,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"060b46eb153f370a6dcde267ffb3ec11f0419cb134ed21cc3603d7787ef84555"}},"vo_arjuna_phase_change_01":{"id":"vo_arjuna_phase_change_01","speaker":"arjuna","trigger":"phase_change","target":null,"subtitle":"I see the path clearly.","audio":"voice/vo_arjuna_phase_change_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.194,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.194,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d45d8e048893538f2128c97091114a38fa55b9fd14cc1e6ab3bd581e2c267b24"}},"vo_arjuna_damage_01":{"id":"vo_arjuna_damage_01","speaker":"arjuna","trigger":"damage","target":null,"subtitle":"My guard must hold.","audio":"voice/vo_arjuna_damage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.866,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":3.866,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"623f1fa23930bb2e102a434475d9ef29e56ef3a0624d894a36c8a66778db33e7"}},"vo_arjuna_damage_02":{"id":"vo_arjuna_damage_02","speaker":"arjuna","trigger":"damage","target":null,"subtitle":"That wound will not command me.","audio":"voice/vo_arjuna_damage_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.004,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":3.004,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"b86bd8d89d212edf620f2b3aad48386a68023613f1d68fcd7db464c656597ef9"}},"vo_arjuna_astra_counter_01":{"id":"vo_arjuna_astra_counter_01","speaker":"arjuna","trigger":"astra_counter","target":null,"subtitle":"The opposing force is broken.","audio":"voice/vo_arjuna_astra_counter_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"1ece8778c3772e38f23e1fbac0329783f9a3cf14da1f813acfce7eb1771d28f6"}},"vo_arjuna_rivalry_01":{"id":"vo_arjuna_rivalry_01","speaker":"arjuna","trigger":"rivalry","target":null,"subtitle":"Let skill answer pride.","audio":"voice/vo_arjuna_rivalry_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.691,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.691,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"4b3898d38414bb2a2d661dc198f2c70227de4762e0b5eb2bb11c2f59d8676941"}},"vo_karna_phase_change_01":{"id":"vo_karna_phase_change_01","speaker":"karna","trigger":"phase_change","target":null,"subtitle":"Vijaya remains in my hands.","audio":"voice/vo_karna_phase_change_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.691,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.691,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"faba6d8cb9acfd8ed5a179b5824c173c0f01a0b2470d4e8f1231ac4aabb1aee0"}},"vo_karna_damage_01":{"id":"vo_karna_damage_01","speaker":"karna","trigger":"damage","target":null,"subtitle":"Strike again, if you dare.","audio":"voice/vo_karna_damage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e40eb4b0ca89319e1dfba97429cb31d8e1d11d1e941c348ea63d2adf6637a98b"}},"vo_karna_damage_02":{"id":"vo_karna_damage_02","speaker":"karna","trigger":"damage","target":null,"subtitle":"The Sun has not abandoned me.","audio":"voice/vo_karna_damage_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"da82551075537f8455ad6f822d0a7a7da4fbd5dc7367995a534c9984f3873252"}},"vo_karna_astra_counter_01":{"id":"vo_karna_astra_counter_01","speaker":"karna","trigger":"astra_counter","target":null,"subtitle":"Your celestial fire is spent.","audio":"voice/vo_karna_astra_counter_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.691,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.691,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"bb10e52b1cc7125f06f376020671e51288370c88e40e4ef2d17c828f4ee9791e"}},"vo_karna_rivalry_01":{"id":"vo_karna_rivalry_01","speaker":"karna","trigger":"rivalry","target":null,"subtitle":"My worth is mine to prove.","audio":"voice/vo_karna_rivalry_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"40d135c1ff5bd63acd3bed8977e93968548f87675db7e87973242df34fbe58c1"}},"vo_bhishma_rage_01":{"id":"vo_bhishma_rage_01","speaker":"bhishma","trigger":"rage","target":null,"subtitle":"My vow has not weakened.","audio":"voice/vo_bhishma_rage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.586,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":2.586,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"894e76e3f2ef3a667488165e5beb39b108c5ed19b7346d925b8f67af60297173"}},"vo_bhishma_phase_change_01":{"id":"vo_bhishma_phase_change_01","speaker":"bhishma","trigger":"phase_change","target":null,"subtitle":"Hold fast before the storm.","audio":"voice/vo_bhishma_phase_change_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"68c444c060eb528551a0e0cb8d98f6e006776df0125c989082cf09e4a6fe9fec"}},"vo_bhishma_damage_01":{"id":"vo_bhishma_damage_01","speaker":"bhishma","trigger":"damage","target":null,"subtitle":"These wounds shall pass.","audio":"voice/vo_bhishma_damage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"4e426827f90e06fa6d0b9db7174c7480245c3b10074d9a3021bc2adf76a8efc2"}},"vo_bhishma_damage_02":{"id":"vo_bhishma_damage_02","speaker":"bhishma","trigger":"damage","target":null,"subtitle":"Your arrow found its mark.","audio":"voice/vo_bhishma_damage_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"f80f4832ab65a3a191df2de115e5d44c67492b7edc8e33bd3a8458e74d8de3e2"}},"vo_bhishma_astra_counter_01":{"id":"vo_bhishma_astra_counter_01","speaker":"bhishma","trigger":"astra_counter","target":null,"subtitle":"Your weapon has met its answer.","audio":"voice/vo_bhishma_astra_counter_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.586,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":2.586,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"7d6319c871f8ad0d4a3ea97aa22923a1195bd87a05b07b59eddaaa44fad4f611"}},"vo_bhishma_rivalry_01":{"id":"vo_bhishma_rivalry_01","speaker":"bhishma","trigger":"rivalry","target":null,"subtitle":"Let your conduct honour your training.","audio":"voice/vo_bhishma_rivalry_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.847,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":2.847,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"1a352f9d7355b4b51285ab19a9d9bc08551e5094b1b70e6a7ebfe004ea15cea6"}},"vo_drona_rage_01":{"id":"vo_drona_rage_01","speaker":"drona","trigger":"rage","target":null,"subtitle":"Enough of this lesson.","audio":"voice/vo_drona_rage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.881,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":1.881,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"4d5e52b96d4a5a6b86baf7605179b212b8cc54ef13050072decf0eba0b4191fc"}},"vo_drona_phase_change_01":{"id":"vo_drona_phase_change_01","speaker":"drona","trigger":"phase_change","target":null,"subtitle":"I have measured your strength.","audio":"voice/vo_drona_phase_change_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.038,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.038,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"32890e3437f92688182f6da25775c8422c4b1cae137c05538fa12d94c55b80af"}},"vo_drona_damage_01":{"id":"vo_drona_damage_01","speaker":"drona","trigger":"damage","target":null,"subtitle":"A flaw in my guard.","audio":"voice/vo_drona_damage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.194,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.194,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"653b10c702466339fdbd1993feb6c4b7d6a999469d6f3e1220f0b99b5a91e2fb"}},"vo_drona_damage_02":{"id":"vo_drona_damage_02","speaker":"drona","trigger":"damage","target":null,"subtitle":"I shall account for that arrow.","audio":"voice/vo_drona_damage_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"9350307418b4f84022a885fa2f0b9529850056cb3f50f2e4b81c96a6cc7417cb"}},"vo_drona_astra_counter_01":{"id":"vo_drona_astra_counter_01","speaker":"drona","trigger":"astra_counter","target":null,"subtitle":"A correct answer to your weapon.","audio":"voice/vo_drona_astra_counter_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.194,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.194,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"5a46ef2fac9ea0d961dca404f348daa26c779cc335f6a53c0abb223a040dbabd"}},"vo_drona_rivalry_01":{"id":"vo_drona_rivalry_01","speaker":"drona","trigger":"rivalry","target":null,"subtitle":"Discipline shall decide this contest.","audio":"voice/vo_drona_rivalry_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.847,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.847,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"48113f96b76b55e812586d5dbe4c9b51c243174117ecf41d1e50f3c7861779c3"}},"vo_abhimanyu_counter_01":{"id":"vo_abhimanyu_counter_01","speaker":"abhimanyu","trigger":"counter","target":null,"subtitle":"You will not halt my advance.","audio":"voice/vo_abhimanyu_counter_01.mp3","priority":85,"cooldown":3,"interruptPolicy":"higher-priority","subtitleDuration":2.351,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":2.351,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"9c9e73182d9623152f9e5c42ee0757b623fffca07eaa7becbdd03f548756d840"}},"vo_abhimanyu_phase_change_01":{"id":"vo_abhimanyu_phase_change_01","speaker":"abhimanyu","trigger":"phase_change","target":null,"subtitle":"Another weapon. The same resolve.","audio":"voice/vo_abhimanyu_phase_change_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.926,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":2.926,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"ad6ac4af3856e95013d13ddf6133453d2b51abe8f2e1f34dbb5e29df7e58bc32"}},"vo_abhimanyu_damage_01":{"id":"vo_abhimanyu_damage_01","speaker":"abhimanyu","trigger":"damage","target":null,"subtitle":"I can still fight.","audio":"voice/vo_abhimanyu_damage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.567,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":1.567,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"7ecab452b2ccd1c8ff12c160c160cbb258c9b509c94347d9167793efcce33564"}},"vo_abhimanyu_damage_02":{"id":"vo_abhimanyu_damage_02","speaker":"abhimanyu","trigger":"damage","target":null,"subtitle":"You must strike harder.","audio":"voice/vo_abhimanyu_damage_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.881,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":1.881,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d1bb807498af036984951124d7bec752ba8a7a04c5d75605944b8812e7af65de"}},"vo_abhimanyu_astra_counter_01":{"id":"vo_abhimanyu_astra_counter_01","speaker":"abhimanyu","trigger":"astra_counter","target":null,"subtitle":"Your Astra is broken.","audio":"voice/vo_abhimanyu_astra_counter_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"9ef3bc29978ec330b6cdd57c4d4809d2108ef2da66a3c91bc12a4f5f1be84c38"}},"vo_abhimanyu_rivalry_01":{"id":"vo_abhimanyu_rivalry_01","speaker":"abhimanyu","trigger":"rivalry","target":null,"subtitle":"Test me without restraint.","audio":"voice/vo_abhimanyu_rivalry_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.959,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":1.959,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"c275fc68da103afe89d91444802fa9c02e371f5506dab88edc7d77f4041aeabf"}},"vo_ashwatthama_phase_change_01":{"id":"vo_ashwatthama_phase_change_01","speaker":"ashwatthama","trigger":"phase_change","target":null,"subtitle":"The jewel is gone. I remain.","audio":"voice/vo_ashwatthama_phase_change_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.082,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":3.082,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"76d6d5965984bb5a8dd112f9babe9343b3e2a4073b619480b3fc2a78549f3e47"}},"vo_ashwatthama_damage_01":{"id":"vo_ashwatthama_damage_01","speaker":"ashwatthama","trigger":"damage","target":null,"subtitle":"You deepen your own peril.","audio":"voice/vo_ashwatthama_damage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"a73fc10d584c35f9a12545aefd94ece1ad5867a1d9d08e6fe2758a55a68284df"}},"vo_ashwatthama_damage_02":{"id":"vo_ashwatthama_damage_02","speaker":"ashwatthama","trigger":"damage","target":null,"subtitle":"That pain will return to you.","audio":"voice/vo_ashwatthama_damage_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"4c0a6b2c279500a83939484e5cbdfa11426006c43a602995ac5fab86d7dd192f"}},"vo_ashwatthama_astra_counter_01":{"id":"vo_ashwatthama_astra_counter_01","speaker":"ashwatthama","trigger":"astra_counter","target":null,"subtitle":"Even the heavens cannot shelter you.","audio":"voice/vo_ashwatthama_astra_counter_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"6d7defc643632fb06a41c027a71a2e4fcba27dc2e9a2b1049f7acf40461d2f1d"}},"vo_ashwatthama_rivalry_01":{"id":"vo_ashwatthama_rivalry_01","speaker":"ashwatthama","trigger":"rivalry","target":null,"subtitle":"Choose your next arrow carefully.","audio":"voice/vo_ashwatthama_rivalry_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"092092f532bc93f71863189ea7c5ca07a158714739582789df49fec6c6d36279"}},"vo_satyaki_phase_change_01":{"id":"vo_satyaki_phase_change_01","speaker":"satyaki","trigger":"phase_change","target":null,"subtitle":"No pause. No retreat.","audio":"voice/vo_satyaki_phase_change_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d1f80da15696739d3d95e1015c4388bfbbb297e0c1f7f929e06e1ce22a335eb9"}},"vo_satyaki_damage_01":{"id":"vo_satyaki_damage_01","speaker":"satyaki","trigger":"damage","target":null,"subtitle":"A fair strike.","audio":"voice/vo_satyaki_damage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.489,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":1.489,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"b25de2be3718c530f1ebbfe69f11815ae755e10dcf85d918486d4a185f251fe8"}},"vo_satyaki_damage_02":{"id":"vo_satyaki_damage_02","speaker":"satyaki","trigger":"damage","target":null,"subtitle":"My next arrow will answer.","audio":"voice/vo_satyaki_damage_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"e2a759bcefd6d81c41dde3b6c8a994f908408278a646eb8ffa18b507dfca1466"}},"vo_satyaki_astra_counter_01":{"id":"vo_satyaki_astra_counter_01","speaker":"satyaki","trigger":"astra_counter","target":null,"subtitle":"Your opening is mine.","audio":"voice/vo_satyaki_astra_counter_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.116,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":2.116,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"2d120cda729108d8aae6e427a4cc09891fc59e9ab914a478d95391ce9122ac9e"}},"vo_satyaki_rivalry_01":{"id":"vo_satyaki_rivalry_01","speaker":"satyaki","trigger":"rivalry","target":null,"subtitle":"Let us see whose draw is swifter.","audio":"voice/vo_satyaki_rivalry_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"7373c994257897bf6f05e04d9f1375145f75fd1e386267010fee843e4f67a93d"}},"vo_ekalavya_phase_change_01":{"id":"vo_ekalavya_phase_change_01","speaker":"ekalavya","trigger":"phase_change","target":null,"subtitle":"My grip changes. My purpose does not.","audio":"voice/vo_ekalavya_phase_change_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.474,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":3.474,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"3930797749b87acf5f321be180fe08ae47771032027af6f079fd2b756a4c0fc6"}},"vo_ekalavya_damage_01":{"id":"vo_ekalavya_damage_01","speaker":"ekalavya","trigger":"damage","target":null,"subtitle":"I will correct that error.","audio":"voice/vo_ekalavya_damage_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.038,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.038,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"2614ed76e9d9b060f63278b0ccf6707f23f6415d67ec24e3a07c91a22b94ddab"}},"vo_ekalavya_damage_02":{"id":"vo_ekalavya_damage_02","speaker":"ekalavya","trigger":"damage","target":null,"subtitle":"The hand learns through pain.","audio":"voice/vo_ekalavya_damage_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.429,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.429,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"102ee5159c17509afd81a22d2c65bede4d0d77fb78ee6e9b13c119ee8ac6c300"}},"vo_ekalavya_astra_counter_01":{"id":"vo_ekalavya_astra_counter_01","speaker":"ekalavya","trigger":"astra_counter","target":null,"subtitle":"I have studied that path.","audio":"voice/vo_ekalavya_astra_counter_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.038,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.038,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"f46947cd6b7cb70b8c6be2b407844fffd82960a2f2694f6535574328cc8cfca2"}},"vo_ekalavya_rivalry_01":{"id":"vo_ekalavya_rivalry_01","speaker":"ekalavya","trigger":"rivalry","target":null,"subtitle":"Judge the arrow, not the archer.","audio":"voice/vo_ekalavya_rivalry_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.691,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.691,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"454c68f796a444875da41e77c2db9d09ca294469bb54ac122c045ec1c0483bff"}},"vo_karna_matchup_01":{"id":"vo_karna_matchup_01","speaker":"karna","trigger":"matchup","target":"arjuna","subtitle":"At last. No court. No titles. Only our bows.","audio":"voice/vo_karna_matchup_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":4.911,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":4.911,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"9f0a891bfbe7797e3fa38d3edb780edde59bef1fee81982be001fa7ab0e2eb73"}},"vo_arjuna_matchup_01":{"id":"vo_arjuna_matchup_01","speaker":"arjuna","trigger":"matchup","target":"karna","subtitle":"Then let your arrows speak for you.","audio":"voice/vo_arjuna_matchup_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.586,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.586,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"fdc2c1263d4b3355e056be9b07a9978cd2e99a601e7a0c043c5b2f7c183e76bf"}},"vo_karna_matchup_02":{"id":"vo_karna_matchup_02","speaker":"karna","trigger":"matchup","target":"arjuna","subtitle":"They always have.","audio":"voice/vo_karna_matchup_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.802,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"karna","duration":1.802,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"8ea84a8ec4b0c72352e5bcf56f94be04378193d6a79b6ffe46d377d9120a2ae5"}},"vo_arjuna_matchup_02":{"id":"vo_arjuna_matchup_02","speaker":"arjuna","trigger":"matchup","target":"karna","subtitle":"Then draw.","audio":"voice/vo_arjuna_matchup_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.881,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":1.881,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"309ffcdc025fedc95fb3ae8578cd40adc9a8fdfc9c48ed54d8f7f2c2d557d973"}},"vo_drona_matchup_01":{"id":"vo_drona_matchup_01","speaker":"drona","trigger":"matchup","target":"arjuna","subtitle":"Will you raise Gandiva against your teacher?","audio":"voice/vo_drona_matchup_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.769,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.769,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"96e6fb2e1e618ace939bb9123d28b363cb22e8a6ab312b23f01dd7fda95cefab"}},"vo_arjuna_matchup_03":{"id":"vo_arjuna_matchup_03","speaker":"arjuna","trigger":"matchup","target":"drona","subtitle":"You taught me never to abandon my duty.","audio":"voice/vo_arjuna_matchup_03.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.004,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":3.004,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"a77edd1f841d4f67a2ebb27e7ec430f1a0cf49d591bb650b66d5fdcf5aab361d"}},"vo_drona_matchup_02":{"id":"vo_drona_matchup_02","speaker":"drona","trigger":"matchup","target":"arjuna","subtitle":"Then show me whether the student surpassed the master.","audio":"voice/vo_drona_matchup_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.239,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":3.239,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"0f704f2c55fac5ccdd9aefdc660b41f74344cee7c86bab917896cbf007fe74b9"}},"vo_bhishma_matchup_01":{"id":"vo_bhishma_matchup_01","speaker":"bhishma","trigger":"matchup","target":"arjuna","subtitle":"Your hand hesitates, Partha.","audio":"voice/vo_bhishma_matchup_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"411ac8a21dfbcafe110d7d33453a11412be4ec8ab6f99c29bff21e78e0cdff07"}},"vo_arjuna_matchup_04":{"id":"vo_arjuna_matchup_04","speaker":"arjuna","trigger":"matchup","target":"bhishma","subtitle":"Respect is not hesitation.","audio":"voice/vo_arjuna_matchup_04.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.926,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.926,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"db92c82c7c2007d126effaa69ab06febda9da52a2c350df964a9ca02ec4c5334"}},"vo_bhishma_matchup_02":{"id":"vo_bhishma_matchup_02","speaker":"bhishma","trigger":"matchup","target":"arjuna","subtitle":"On this field, you must learn the difference.","audio":"voice/vo_bhishma_matchup_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.396,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"bhishma","duration":3.396,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"856b7a919d29b42358f94b4a2ea97ad6d5ca65a1f25740931da6d17d7f0e4f8f"}},"vo_ashwatthama_matchup_01":{"id":"vo_ashwatthama_matchup_01","speaker":"ashwatthama","trigger":"matchup","target":"arjuna","subtitle":"You were always his favourite.","audio":"voice/vo_ashwatthama_matchup_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.194,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":2.194,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"706b6e9040fefea73ab22671c7f2d6eb97c30abbb8f2e6a6bed32dc7955895a7"}},"vo_arjuna_matchup_05":{"id":"vo_arjuna_matchup_05","speaker":"arjuna","trigger":"matchup","target":"ashwatthama","subtitle":"This battle is not about Drona's favour.","audio":"voice/vo_arjuna_matchup_05.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.586,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":2.586,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"09a46940bc3d21ed394470a61dfccc92ff4e5d3ab22e34d0e6152536afd1fa4e"}},"vo_ashwatthama_matchup_02":{"id":"vo_ashwatthama_matchup_02","speaker":"ashwatthama","trigger":"matchup","target":"arjuna","subtitle":"For you, perhaps.","audio":"voice/vo_ashwatthama_matchup_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.724,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ashwatthama","duration":1.724,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d4f85c25fb7cc670e8f8ddf1ba2401a94acca85ba79fc85d0d802926cedbb523"}},"vo_ekalavya_matchup_01":{"id":"vo_ekalavya_matchup_01","speaker":"ekalavya","trigger":"matchup","target":"drona","subtitle":"I learned from a teacher who never accepted me.","audio":"voice/vo_ekalavya_matchup_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.396,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":3.396,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"50ecd29b4030fe85f3d2dc4bc933d150c7f20c916845deb85be56360a9c6d96b"}},"vo_drona_matchup_03":{"id":"vo_drona_matchup_03","speaker":"drona","trigger":"matchup","target":"ekalavya","subtitle":"And yet your discipline remained.","audio":"voice/vo_drona_matchup_03.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.508,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.508,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"27ab85fecc8689644a4bbcc9984a6ecc69b699209bd80b1445e4cb19b78ef08d"}},"vo_ekalavya_matchup_02":{"id":"vo_ekalavya_matchup_02","speaker":"ekalavya","trigger":"matchup","target":"drona","subtitle":"My discipline was always mine.","audio":"voice/vo_ekalavya_matchup_02.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.847,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"ekalavya","duration":2.847,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"806b6d4879abbefea2b7d5db2f1f60f15dad226c2bbdbbd25e4e334a2c89ecb7"}},"vo_drona_matchup_04":{"id":"vo_drona_matchup_04","speaker":"drona","trigger":"matchup","target":"abhimanyu","subtitle":"You carry your father's confidence.","audio":"voice/vo_drona_matchup_04.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.351,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.351,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"94d3c3744a4d3711f555c2c2e32b9811f38791e3a957698093562eafda6d3d66"}},"vo_abhimanyu_matchup_01":{"id":"vo_abhimanyu_matchup_01","speaker":"abhimanyu","trigger":"matchup","target":"drona","subtitle":"And his training.","audio":"voice/vo_abhimanyu_matchup_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":1.724,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"abhimanyu","duration":1.724,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"3e7a8e5729509773836382fccfa6b5456a44f0d464bfc7dafa6db1a73debf494"}},"vo_drona_matchup_05":{"id":"vo_drona_matchup_05","speaker":"drona","trigger":"matchup","target":"abhimanyu","subtitle":"Then I shall test both.","audio":"voice/vo_drona_matchup_05.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.351,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"drona","duration":2.351,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"1ddb6739cc35fa0437b74d147dc35139827eaa878d9828c56eaf3549fd737c1e"}},"vo_satyaki_matchup_01":{"id":"vo_satyaki_matchup_01","speaker":"satyaki","trigger":"matchup","target":"arjuna","subtitle":"Do not expect your student to hold back.","audio":"voice/vo_satyaki_matchup_01.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":2.769,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"satyaki","duration":2.769,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"13804a248af27a35c43da3ae93f9ad4ab19c411374cc71bcd17de5d4b8c88b47"}},"vo_arjuna_matchup_06":{"id":"vo_arjuna_matchup_06","speaker":"arjuna","trigger":"matchup","target":"satyaki","subtitle":"I would be disappointed if you did.","audio":"voice/vo_arjuna_matchup_06.mp3","priority":35,"cooldown":18,"interruptPolicy":"higher-priority","subtitleDuration":3.082,"animationEvent":null,"cameraEvent":null,"status":"IMPORTED","voiceProfile":"arjuna","duration":3.082,"provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"2ae2735d75a4d95c1bc81298eed4579028cc9c5102c3f420d95a7cbd2030976e"}},"vo_arjuna_invoke_pashupata":{"id":"vo_arjuna_invoke_pashupata","speaker":"arjuna","trigger":"ultimate_name","spell":"pashupata","subtitle":"Pashupata Radiance!","audio":"voice/vo_arjuna_invoke_pashupata.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":5.068,"subtitleDuration":5.068,"status":"IMPORTED","voiceProfile":"arjuna","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"90705b07fd211489316dbefb5dba8fd83bc5a35ab7ba53021f7becd93c69c44e"}},"vo_arjuna_invoke_lore_brahma":{"id":"vo_arjuna_invoke_lore_brahma","speaker":"arjuna","trigger":"ultimate_name","spell":"lore_brahma","subtitle":"Brahmastra!","audio":"voice/vo_arjuna_invoke_lore_brahma.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.362,"subtitleDuration":4.362,"status":"IMPORTED","voiceProfile":"arjuna","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"f17536703fa2ff016c398901907a503ce0f57267ac64972aa4291c893efeed63"}},"vo_karna_invoke_shakti":{"id":"vo_karna_invoke_shakti","speaker":"karna","trigger":"ultimate_name","spell":"shakti","subtitle":"Vasavi Shakti!","audio":"voice/vo_karna_invoke_shakti.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.754,"subtitleDuration":4.754,"status":"IMPORTED","voiceProfile":"karna","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"8ed1be4c8f179e110331877d2b7991a0499dd86134b0701b0c00f9cdce8ec183"}},"vo_karna_invoke_lore_brahma":{"id":"vo_karna_invoke_lore_brahma","speaker":"karna","trigger":"ultimate_name","spell":"lore_brahma","subtitle":"Brahmastra!","audio":"voice/vo_karna_invoke_lore_brahma.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.362,"subtitleDuration":4.362,"status":"IMPORTED","voiceProfile":"karna","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"79916bb58c28c1111d27700a99bea5cb3678719c31b3b571e07398c4c80b3100"}},"vo_karna_invoke_lore_naga":{"id":"vo_karna_invoke_lore_naga","speaker":"karna","trigger":"ultimate_name","spell":"lore_naga","subtitle":"Ashvasena\u2019s Arrow!","audio":"voice/vo_karna_invoke_lore_naga.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.362,"subtitleDuration":4.362,"status":"IMPORTED","voiceProfile":"karna","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"2e7aa2443706e336eff5d69556b114515cb7d13a02e1c5c47006c4cd6bb81a25"}},"vo_bhishma_invoke_prabhasa":{"id":"vo_bhishma_invoke_prabhasa","speaker":"bhishma","trigger":"ultimate_name","spell":"prabhasa","subtitle":"Prabhasa Radiance!","audio":"voice/vo_bhishma_invoke_prabhasa.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.754,"subtitleDuration":4.754,"status":"IMPORTED","voiceProfile":"bhishma","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"20da23fac4cc7ee55dd37345a4fdf13e06330795c6777db9eca8e6ce6de3b8e2"}},"vo_bhishma_invoke_lore_narayana":{"id":"vo_bhishma_invoke_lore_narayana","speaker":"bhishma","trigger":"ultimate_name","spell":"lore_narayana","subtitle":"Narayanastra!","audio":"voice/vo_bhishma_invoke_lore_narayana.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.676,"subtitleDuration":4.676,"status":"IMPORTED","voiceProfile":"bhishma","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"1ce59f5b02d35acc0bf7f554115a77f06307085d8c645b31635a0414209fceac"}},"vo_drona_invoke_acharya":{"id":"vo_drona_invoke_acharya","speaker":"drona","trigger":"ultimate_name","spell":"acharya","subtitle":"Acharya\u2019s Judgment!","audio":"voice/vo_drona_invoke_acharya.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.911,"subtitleDuration":4.911,"status":"IMPORTED","voiceProfile":"drona","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"5c29769d7211caac875b53a88563d2a6919ded10d3d05c50e6589c3780122f95"}},"vo_drona_invoke_lore_narayana":{"id":"vo_drona_invoke_lore_narayana","speaker":"drona","trigger":"ultimate_name","spell":"lore_narayana","subtitle":"Narayanastra!","audio":"voice/vo_drona_invoke_lore_narayana.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.676,"subtitleDuration":4.676,"status":"IMPORTED","voiceProfile":"drona","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"4a474c90969c62905a39e7ad99db508e8a7b9bcb5768d47ce6dffb32149d7df7"}},"vo_abhimanyu_invoke_saubhadra":{"id":"vo_abhimanyu_invoke_saubhadra","speaker":"abhimanyu","trigger":"ultimate_name","spell":"saubhadra","subtitle":"Saubhadra Tempest!","audio":"voice/vo_abhimanyu_invoke_saubhadra.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.911,"subtitleDuration":4.911,"status":"IMPORTED","voiceProfile":"abhimanyu","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"d255c6800657c7a31d0de66235b67c7ad1d11087f4b5a439e7a6345fefbf9388"}},"vo_abhimanyu_invoke_lore_narayana":{"id":"vo_abhimanyu_invoke_lore_narayana","speaker":"abhimanyu","trigger":"ultimate_name","spell":"lore_narayana","subtitle":"Narayanastra!","audio":"voice/vo_abhimanyu_invoke_lore_narayana.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.676,"subtitleDuration":4.676,"status":"IMPORTED","voiceProfile":"abhimanyu","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"dc4615d67b3c753fb39df518f31a67d9901cc337ab36381bd29a33c978039f0a"}},"vo_ashwatthama_invoke_brahmashira":{"id":"vo_ashwatthama_invoke_brahmashira","speaker":"ashwatthama","trigger":"ultimate_name","spell":"brahmashira","subtitle":"Brahmashira!","audio":"voice/vo_ashwatthama_invoke_brahmashira.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.362,"subtitleDuration":4.362,"status":"IMPORTED","voiceProfile":"ashwatthama","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"7500995d8e51a9719235f8f52309c3b467c8704bd9a82cf77e6e69ce062a0675"}},"vo_ashwatthama_invoke_lore_narayana":{"id":"vo_ashwatthama_invoke_lore_narayana","speaker":"ashwatthama","trigger":"ultimate_name","spell":"lore_narayana","subtitle":"Narayanastra!","audio":"voice/vo_ashwatthama_invoke_lore_narayana.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.833,"subtitleDuration":4.833,"status":"IMPORTED","voiceProfile":"ashwatthama","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"5d78379bd3fbc255372e3b7596a2f5d2255e22a6193c50c05b454a7a37bd3bf3"}},"vo_satyaki_invoke_yuyudhana":{"id":"vo_satyaki_invoke_yuyudhana","speaker":"satyaki","trigger":"ultimate_name","spell":"yuyudhana","subtitle":"Yuyudhana Storm!","audio":"voice/vo_satyaki_invoke_yuyudhana.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.833,"subtitleDuration":4.833,"status":"IMPORTED","voiceProfile":"satyaki","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"15af5dd7442425bf2725b90a260d07e996e191a465aa9027b6fb21b92494b7f3"}},"vo_satyaki_invoke_lore_narayana":{"id":"vo_satyaki_invoke_lore_narayana","speaker":"satyaki","trigger":"ultimate_name","spell":"lore_narayana","subtitle":"Narayanastra!","audio":"voice/vo_satyaki_invoke_lore_narayana.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.754,"subtitleDuration":4.754,"status":"IMPORTED","voiceProfile":"satyaki","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"dce8054134536a801ea818b701f3c5ec6865bcb387e49780c9887b2b00e13e5a"}},"vo_ekalavya_invoke_aranya":{"id":"vo_ekalavya_invoke_aranya","speaker":"ekalavya","trigger":"ultimate_name","spell":"aranya","subtitle":"Aranya Cyclone!","audio":"voice/vo_ekalavya_invoke_aranya.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.911,"subtitleDuration":4.911,"status":"IMPORTED","voiceProfile":"ekalavya","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"badacada3bb2a41e1164f1819d45384d43ff671dc050bfbf1c0c25a193768af6"}},"vo_ekalavya_invoke_lore_narayana":{"id":"vo_ekalavya_invoke_lore_narayana","speaker":"ekalavya","trigger":"ultimate_name","spell":"lore_narayana","subtitle":"Narayanastra!","audio":"voice/vo_ekalavya_invoke_lore_narayana.mp3","priority":110,"cooldown":0,"interruptPolicy":"invocation","duration":4.676,"subtitleDuration":4.676,"status":"IMPORTED","voiceProfile":"ekalavya","provider":"User supplied","audioSource":{"source":"user-supplied voice ZIP","archiveSha256":"2359f14658feef77a353dccc7b7bae9300022e5a298893f1930edd97a64f4d1a","sourceSha256":"92c7c0b2f23c3af6c12a2c82925856a330a3aebad2045bf5a3cb438bc514c29c"}}},"groups":{"arjuna:intro":["vo_arjuna_intro_01","vo_arjuna_intro_02"],"krishna:passive":["vo_krishna_passive_01","vo_krishna_passive_02"],"arjuna:passive":["vo_arjuna_passive_01"],"arjuna:low_health":["vo_arjuna_low_health_01","vo_arjuna_low_health_02"],"arjuna:rage":["vo_arjuna_rage_01"],"arjuna:ultimate":["vo_arjuna_ultimate_01"],"arjuna:counter":["vo_arjuna_counter_01","vo_arjuna_counter_02"],"arjuna:victory":["vo_arjuna_victory_01","vo_arjuna_victory_02"],"arjuna:defeat":["vo_arjuna_defeat_01"],"karna:intro":["vo_karna_intro_01","vo_karna_intro_02"],"karna:kavacha":["vo_karna_kavacha_01"],"karna:kavacha_break":["vo_karna_kavacha_break_01"],"karna:wheel_stuck":["vo_karna_wheel_stuck_01","vo_karna_wheel_stuck_02"],"karna:repair_success":["vo_karna_repair_success_01"],"karna:low_health":["vo_karna_low_health_01"],"karna:rage":["vo_karna_rage_01"],"karna:ultimate":["vo_karna_ultimate_01"],"karna:counter":["vo_karna_counter_01"],"karna:victory":["vo_karna_victory_01"],"karna:defeat":["vo_karna_defeat_01"],"bhishma:intro":["vo_bhishma_intro_01","vo_bhishma_intro_02"],"bhishma:icchamrityu":["vo_bhishma_icchamrityu_01"],"bhishma:final_stand":["vo_bhishma_final_stand_01"],"bhishma:final_death":["vo_bhishma_final_death_01"],"bhishma:low_health":["vo_bhishma_low_health_01"],"bhishma:ultimate":["vo_bhishma_ultimate_01"],"bhishma:counter":["vo_bhishma_counter_01"],"bhishma:victory":["vo_bhishma_victory_01"],"bhishma:defeat":["vo_bhishma_defeat_01"],"drona:intro":["vo_drona_intro_01","vo_drona_intro_02"],"drona:observed":["vo_drona_observed_01"],"drona:understood":["vo_drona_understood_01"],"drona:mastered":["vo_drona_mastered_01","vo_drona_mastered_02"],"drona:low_health":["vo_drona_low_health_01"],"drona:ultimate":["vo_drona_ultimate_01"],"drona:counter":["vo_drona_counter_01"],"drona:victory":["vo_drona_victory_01"],"drona:defeat":["vo_drona_defeat_01"],"abhimanyu:intro":["vo_abhimanyu_intro_01","vo_abhimanyu_intro_02"],"abhimanyu:last_warrior":["vo_abhimanyu_last_warrior_01"],"abhimanyu:bow_break":["vo_abhimanyu_bow_break_01"],"abhimanyu:sword":["vo_abhimanyu_sword_01"],"abhimanyu:final_weapon":["vo_abhimanyu_final_weapon_01"],"abhimanyu:low_health":["vo_abhimanyu_low_health_01"],"abhimanyu:rage":["vo_abhimanyu_rage_01"],"abhimanyu:ultimate":["vo_abhimanyu_ultimate_01"],"abhimanyu:victory":["vo_abhimanyu_victory_01"],"abhimanyu:defeat":["vo_abhimanyu_defeat_01"],"ashwatthama:intro":["vo_ashwatthama_intro_01","vo_ashwatthama_intro_02"],"ashwatthama:mani_active":["vo_ashwatthama_mani_active_01"],"ashwatthama:mani_shatter":["vo_ashwatthama_mani_shatter_01"],"ashwatthama:cursed_state":["vo_ashwatthama_cursed_state_01"],"ashwatthama:low_health":["vo_ashwatthama_low_health_01"],"ashwatthama:rage":["vo_ashwatthama_rage_01"],"ashwatthama:ultimate":["vo_ashwatthama_ultimate_01"],"ashwatthama:counter":["vo_ashwatthama_counter_01"],"ashwatthama:victory":["vo_ashwatthama_victory_01"],"ashwatthama:defeat":["vo_ashwatthama_defeat_01"],"satyaki:intro":["vo_satyaki_intro_01","vo_satyaki_intro_02"],"satyaki:pursuit":["vo_satyaki_pursuit_01","vo_satyaki_pursuit_02"],"satyaki:fury":["vo_satyaki_fury_01"],"satyaki:low_health":["vo_satyaki_low_health_01"],"satyaki:rage":["vo_satyaki_rage_01"],"satyaki:ultimate":["vo_satyaki_ultimate_01"],"satyaki:counter":["vo_satyaki_counter_01"],"satyaki:victory":["vo_satyaki_victory_01"],"satyaki:defeat":["vo_satyaki_defeat_01"],"ekalavya:intro":["vo_ekalavya_intro_01","vo_ekalavya_intro_02"],"ekalavya:focus":["vo_ekalavya_focus_01"],"ekalavya:instinct":["vo_ekalavya_instinct_01"],"ekalavya:guru_dakshina":["vo_ekalavya_guru_dakshina_01"],"ekalavya:low_health":["vo_ekalavya_low_health_01"],"ekalavya:rage":["vo_ekalavya_rage_01"],"ekalavya:ultimate":["vo_ekalavya_ultimate_01"],"ekalavya:counter":["vo_ekalavya_counter_01"],"ekalavya:victory":["vo_ekalavya_victory_01"],"ekalavya:defeat":["vo_ekalavya_defeat_01"],"arjuna:phase_change":["vo_arjuna_phase_change_01"],"arjuna:damage":["vo_arjuna_damage_01","vo_arjuna_damage_02"],"arjuna:astra_counter":["vo_arjuna_astra_counter_01"],"arjuna:rivalry":["vo_arjuna_rivalry_01"],"karna:phase_change":["vo_karna_phase_change_01"],"karna:damage":["vo_karna_damage_01","vo_karna_damage_02"],"karna:astra_counter":["vo_karna_astra_counter_01"],"karna:rivalry":["vo_karna_rivalry_01"],"bhishma:rage":["vo_bhishma_rage_01"],"bhishma:phase_change":["vo_bhishma_phase_change_01"],"bhishma:damage":["vo_bhishma_damage_01","vo_bhishma_damage_02"],"bhishma:astra_counter":["vo_bhishma_astra_counter_01"],"bhishma:rivalry":["vo_bhishma_rivalry_01"],"drona:rage":["vo_drona_rage_01"],"drona:phase_change":["vo_drona_phase_change_01"],"drona:damage":["vo_drona_damage_01","vo_drona_damage_02"],"drona:astra_counter":["vo_drona_astra_counter_01"],"drona:rivalry":["vo_drona_rivalry_01"],"abhimanyu:counter":["vo_abhimanyu_counter_01"],"abhimanyu:phase_change":["vo_abhimanyu_phase_change_01"],"abhimanyu:damage":["vo_abhimanyu_damage_01","vo_abhimanyu_damage_02"],"abhimanyu:astra_counter":["vo_abhimanyu_astra_counter_01"],"abhimanyu:rivalry":["vo_abhimanyu_rivalry_01"],"ashwatthama:phase_change":["vo_ashwatthama_phase_change_01"],"ashwatthama:damage":["vo_ashwatthama_damage_01","vo_ashwatthama_damage_02"],"ashwatthama:astra_counter":["vo_ashwatthama_astra_counter_01"],"ashwatthama:rivalry":["vo_ashwatthama_rivalry_01"],"satyaki:phase_change":["vo_satyaki_phase_change_01"],"satyaki:damage":["vo_satyaki_damage_01","vo_satyaki_damage_02"],"satyaki:astra_counter":["vo_satyaki_astra_counter_01"],"satyaki:rivalry":["vo_satyaki_rivalry_01"],"ekalavya:phase_change":["vo_ekalavya_phase_change_01"],"ekalavya:damage":["vo_ekalavya_damage_01","vo_ekalavya_damage_02"],"ekalavya:astra_counter":["vo_ekalavya_astra_counter_01"],"ekalavya:rivalry":["vo_ekalavya_rivalry_01"],"karna:matchup":["vo_karna_matchup_01","vo_karna_matchup_02"],"arjuna:matchup":["vo_arjuna_matchup_01","vo_arjuna_matchup_02","vo_arjuna_matchup_03","vo_arjuna_matchup_04","vo_arjuna_matchup_05","vo_arjuna_matchup_06"],"drona:matchup":["vo_drona_matchup_01","vo_drona_matchup_02","vo_drona_matchup_03","vo_drona_matchup_04","vo_drona_matchup_05"],"bhishma:matchup":["vo_bhishma_matchup_01","vo_bhishma_matchup_02"],"ashwatthama:matchup":["vo_ashwatthama_matchup_01","vo_ashwatthama_matchup_02"],"ekalavya:matchup":["vo_ekalavya_matchup_01","vo_ekalavya_matchup_02"],"abhimanyu:matchup":["vo_abhimanyu_matchup_01"],"satyaki:matchup":["vo_satyaki_matchup_01"]},"fate":{"0:GUIDANCE":["vo_krishna_passive_01","vo_arjuna_passive_01","vo_krishna_passive_02"],"1:KAVACHA":["vo_karna_kavacha_01"],"1:WHEEL_STUCK":["vo_karna_wheel_stuck_01"],"1:COMEBACK":["vo_karna_repair_success_01"],"1:ArmourBreak":["vo_karna_kavacha_break_01"],"2:FINAL_STAND":["vo_bhishma_icchamrityu_01"],"2:DEAD":["vo_bhishma_final_death_01"],"3:OBSERVED":["vo_drona_observed_01"],"3:UNDERSTOOD":["vo_drona_understood_01"],"3:MASTERED":["vo_drona_mastered_01","vo_drona_mastered_02"],"3:DEAD":["vo_drona_defeat_01"],"4:LAST_WARRIOR":["vo_abhimanyu_last_warrior_01"],"4:WeaponChange":["vo_abhimanyu_phase_change_01"],"5:SHATTER":["vo_ashwatthama_mani_shatter_01"],"5:CURSED":["vo_ashwatthama_cursed_state_01"],"6:FURY":["vo_satyaki_fury_01"],"7:INSTINCT":["vo_ekalavya_instinct_01"],"7:Sacrifice":["vo_ekalavya_guru_dakshina_01"]},"conversations":{"arjuna:karna":["vo_karna_matchup_01","vo_arjuna_matchup_01","vo_karna_matchup_02","vo_arjuna_matchup_02"],"arjuna:drona":["vo_drona_matchup_01","vo_arjuna_matchup_03","vo_drona_matchup_02"],"arjuna:bhishma":["vo_bhishma_matchup_01","vo_arjuna_matchup_04","vo_bhishma_matchup_02"],"arjuna:ashwatthama":["vo_ashwatthama_matchup_01","vo_arjuna_matchup_05","vo_ashwatthama_matchup_02"],"drona:ekalavya":["vo_ekalavya_matchup_01","vo_drona_matchup_03","vo_ekalavya_matchup_02"],"abhimanyu:drona":["vo_drona_matchup_04","vo_abhimanyu_matchup_01","vo_drona_matchup_05"],"arjuna:satyaki":["vo_satyaki_matchup_01","vo_arjuna_matchup_06"]},"profiles":{"arjuna":["kal16",1.02,1.08],"karna":["rms",0.88,0.98],"bhishma":["awb",0.81,0.9],"drona":["rms",0.98,0.96],"abhimanyu":["kal16",1.14,1.18],"ashwatthama":["awb",0.94,1.05],"satyaki":["rms",1.08,1.23],"ekalavya":["kal16",0.9,1],"krishna":["awb",1.06,1.02]},"ultimateCalls":{"0:pashupata":"vo_arjuna_invoke_pashupata","0:lore_brahma":"vo_arjuna_invoke_lore_brahma","1:shakti":"vo_karna_invoke_shakti","1:lore_brahma":"vo_karna_invoke_lore_brahma","1:lore_naga":"vo_karna_invoke_lore_naga","2:prabhasa":"vo_bhishma_invoke_prabhasa","2:lore_narayana":"vo_bhishma_invoke_lore_narayana","3:acharya":"vo_drona_invoke_acharya","3:lore_narayana":"vo_drona_invoke_lore_narayana","4:saubhadra":"vo_abhimanyu_invoke_saubhadra","4:lore_narayana":"vo_abhimanyu_invoke_lore_narayana","5:brahmashira":"vo_ashwatthama_invoke_brahmashira","5:lore_narayana":"vo_ashwatthama_invoke_lore_narayana","6:yuyudhana":"vo_satyaki_invoke_yuyudhana","6:lore_narayana":"vo_satyaki_invoke_lore_narayana","7:aranya":"vo_ekalavya_invoke_aranya","7:lore_narayana":"vo_ekalavya_invoke_lore_narayana"},"voiceProvider":"User-supplied recordings","voiceCast":{"arjuna":{"voice_id":"IKne3meq5aSn9XLyUdCD","name":"Charlie"},"karna":{"voice_id":"JBFqnCBsd6RMkjVDRZzb","name":"George"},"bhishma":{"voice_id":"pqHfZKP75CvOlQylNhV4","name":"Bill"},"drona":{"voice_id":"nPczCjzI2devNBz1zQrb","name":"Brian"},"abhimanyu":{"voice_id":"TX3LPaxmHKxFdv7VOQHJ","name":"Liam"},"ashwatthama":{"voice_id":"N2lVS1w4EtoT3dr4eOWO","name":"Callum"},"satyaki":{"voice_id":"SOYHLrjzK2X1ezoPC6cr","name":"Harry"},"ekalavya":{"voice_id":"CwhRBWXzGAHq8TQ4Fs17","name":"Roger"},"krishna":{"voice_id":"bIHbv24MWmeRgasZH58o","name":"Will"}},"voiceCastStatus":"Requested casting; uploaded audio does not include verified provider metadata"};


// voice-manager
'use strict';
// A single principal dialogue channel prevents overlapping speakers, including local 1v1.
class VoiceManager {
 constructor(){this.language=options.voiceLanguage||'en';this.queue=[];this.active=null;this.buffers=new Map();this.loading=new Map();this.seen=new Set();this.cooldowns=new Map();this.generation=0;this.ready=false;this.pinned=new Set();this.volume=.9;this.failures=[];}
 async unlock(){unlockAudio();if(!audioContext)return false;await audioContext.resume();this.ready=audioContext.state==='running';if(!this.gain){this.gain=audioContext.createGain();this.gain.connect(audioContext.destination);}this.preload(this.queue.map(item=>item.id));this.pump();return this.ready;}
 async load(id){const entry=typeof dialogueLocale==='function'?dialogueLocale(id):DIALOGUE_DATA.entries[id];id=(options.voiceLanguage||'en')+':'+id;if(this.buffers.has(id))return this.buffers.get(id);if(this.loading.has(id))return this.loading.get(id);if(!entry)throw Error('Unknown dialogue '+id);const job=fetch(entry.audio).then(r=>{if(!r.ok)throw Error('Missing voice '+entry.audio);return r.arrayBuffer();}).then(b=>audioContext.decodeAudioData(b)).then(buffer=>{this.buffers.set(id,buffer);if(this.buffers.size>32){const key=[...this.buffers.keys()].find(id=>!this.pinned.has(id.slice(id.indexOf(':')+1)));if(key)this.buffers.delete(key);}return buffer;}).finally(()=>this.loading.delete(id));this.loading.set(id,job);return job;}
 preload(ids){if(!this.ready)return;ids.slice(0,8).forEach(id=>this.load(id).catch(()=>{}));}
 submit(ids,event){if(this.seen.has(event.id))return;this.seen.add(event.id);if(this.seen.size>512)this.seen.delete(this.seen.values().next().value);if(event.sequence==='round-end')this.queue=[];let offset=0;for(const id of ids){const entry=typeof dialogueLocale==='function'?dialogueLocale(id):DIALOGUE_DATA.entries[id];if(!entry)continue;this.queue.push({id,entry,event,at:(event.presentationAt??presentationNow())+offset});if(event.sequence!=='round-end')offset+=entry.duration+.08;}this.queue=this.queue.slice(-24);const priority=Math.max(0,...ids.map(id=>DIALOGUE_DATA.entries[id]?.priority||0));this.queue.sort((a,b)=>(b.event.sequence==='round-end'?200:b.entry.priority)-(a.event.sequence==='round-end'?200:a.entry.priority)||a.at-b.at);this.pump();}
 async pump(){if(!this.ready||this.active||paused||!sound||options.voiceEnabled===false)return;const now=presentationNow();let item;while(this.queue.length){const next=this.queue[0];if(next.entry.trigger==='victory'&&((typeof fateFilmHolding==='function'&&fateFilmHolding())||(typeof fateFilmVisible==='function'&&fateFilmVisible())))return;if(next.at>now+.03)return;this.queue.shift();if(next.event.sequence!=='round-end'&&now-next.at>20)continue;const key=next.id;if(next.event.sequence!=='round-end'&&next.entry.priority<90&&(this.cooldowns.get(key)||-100)>now)continue;item=next;break;}if(!item)return;
 this.active=item;const generation=this.generation;try{const buffer=await this.load(item.id);if(generation!==this.generation||this.active!==item)return;const offset=item.resumeOffset||0;if(offset>=buffer.duration){this.active=null;this.pump();return;}const source=audioContext.createBufferSource(),pan=audioContext.createStereoPanner();source.buffer=buffer;pan.pan.value=item.entry.priority>=90?0:(item.event.seat===1?.28:-.28);source.connect(pan).connect(this.gain);this.gain.gain.value=(options.volume??.65)*(options.voiceVolume??.9);this.active.source=source;this.active.pan=pan;this.active.started=true;this.active.audioStartedAt=audioContext.currentTime;this.active.resumeOffset=offset;this.cooldowns.set(item.id,presentationNow()+item.entry.cooldown);this.subtitle(item.entry);source.onended=()=>{source.disconnect();pan.disconnect();if(this.active===item){this.active=null;this.subtitle(null);this.pump();}};if(typeof roundVoiceStarted==='function')roundVoiceStarted(item);source.start(0,offset);this.mix();}catch(error){this.failures.push({id:item.id,error:String(error)});if(this.active===item)this.active=null;this.subtitle(null);console.error('Voice asset failed',item.id,error);this.pump();}}
 stop(clear=true){this.generation++;const a=this.active;this.active=null;if(a?.source){a.source.onended=null;try{a.source.stop();}catch{}a.source.disconnect();a.pan.disconnect();}if(clear)this.queue=[];this.subtitle(null);this.mix();}
 subtitle(entry){let el=document.getElementById('voiceSubtitle');if(!el){el=document.createElement('div');el.id='voiceSubtitle';el.setAttribute('role','status');el.setAttribute('aria-live','polite');document.querySelector('.battle').appendChild(el);}el.hidden=!entry;if(entry)el.textContent=entry.speaker.toUpperCase()+' — '+entry.subtitle;}
 mix(){const duck=this.active?.started?.valueOf()?Math.pow(10,-5/20):1;if(typeof audioMaster!=='undefined'&&audioMaster&&audioContext)audioMaster.gain.setTargetAtTime(options.volume*.6*(this.active?.started ? .85 : 1),audioContext.currentTime,.12);if(typeof fateMusicGain!=='undefined'&&fateMusicGain&&audioContext)fateMusicGain.gain.setTargetAtTime(options.volume*.1*duck,audioContext.currentTime,.15);}
 update(){if(this.language!==(options.voiceLanguage||'en')){this.language=options.voiceLanguage||'en';this.stop();this.preloadedLoadouts=null;}if(atHome||!sound||options.voiceEnabled===false){if(this.active||this.queue.length)this.stop();return;}if(paused){if(this.active){const item=this.active;if(item.started)item.resumeOffset=(item.resumeOffset||0)+Math.max(0,audioContext.currentTime-item.audioStartedAt);this.stop(false);this.queue.unshift(item);}return;}if(typeof players!=='undefined'&&DIALOGUE_DATA.ultimateCalls){const ids=players.flatMap(p=>(p.loadout||[]).map(key=>DIALOGUE_DATA.ultimateCalls[p.id+':'+key]).filter(Boolean));this.pinned=new Set(ids);const signature=ids.join(':');if(this.ready&&signature!==this.preloadedLoadouts){this.preloadedLoadouts=signature;this.preload(ids);}}if(this.gain)this.gain.gain.value=(options.volume??.65)*(options.voiceVolume??.9);this.mix();this.pump();}
}
const voices=new VoiceManager();
for(const type of ['pointerdown','keydown'])document.addEventListener(type,()=>{if(sound)voices.unlock().catch(error=>console.error('Audio unlock failed',error));},{passive:true});


// cinematic-data
'use strict';
const CINEMATIC_DATA={
 '1:KAVACHA':{duration:1.8,title:'KAVACHA',camera:'character',color:'#ffd36c',impact:.6,animation:['karna_kavacha_activate','karna_kavacha_idle'],element:'solar'},
 '1:ArmourBreak':{duration:1.3,title:'KAVACHA BROKEN',camera:'weapon',color:'#ffa653',impact:.25,animation:['karna_kavacha_crack_02','karna_kavacha_break'],element:'solar'},
 '1:WHEEL_STUCK':{duration:2.7,title:'CURSE OF THE EARTH',camera:'wheel',color:'#cc985f',impact:.4,animation:['karna_wheel_notice','karna_dismount','karna_land','karna_grab_wheel','karna_pull_wheel_loop'],element:'dust'},
 '1:COMEBACK':{duration:2,title:'SURYA’S RETURN',camera:'character',color:'#ffc86a',impact:.65,animation:['karna_repair_success','karna_stand','karna_remount','karna_comeback_pose'],element:'solar'},
 '2:FINAL_STAND':{duration:2,title:'ICCHAMRITYU',camera:'weapon',color:'#d3b8ff',impact:.7,animation:['bhishma_icchamrityu_trigger','bhishma_aura_awaken','bhishma_final_stand_idle'],element:'cosmic'},
 '2:DEAD':{duration:3,title:'THE HOUR HAS COME',camera:'wide',color:'#c2c7f1',impact:1.5,animation:['bhishma_timer_end','bhishma_lower_bow','bhishma_accept_fate','bhishma_arrow_bed_transition','bhishma_arrow_bed_idle'],element:'dust'},
 '0:GUIDANCE':{duration:3.4,title:'KRISHNA’S GUIDANCE',camera:'projectile',color:'#a9e5ff',impact:1.1,animation:['arjuna_notice_attack','arjuna_duck_reaction','arjuna_crown_hit','arjuna_recover','arjuna_guidance_activate'],element:'water'},
 '3:MASTERED':{duration:1.5,title:'MASTER OF WEAPONS',camera:'weapon',color:'#ffd6a3',impact:.5,animation:['drona_understand','drona_mastery_activate','drona_counter_prepare'],element:'cosmic'},
 '3:DEAD':{duration:2.8,title:'THE WEAPON IS LAID DOWN',camera:'character',color:'#d3c39e',impact:1.4,animation:['drona_defeat_realization','drona_lower_weapon','drona_sit_meditation','drona_meditation_idle'],element:'wind'},
 '4:LAST_WARRIOR':{duration:3.5,title:'THE LAST WARRIOR',camera:'wide',color:'#ffc277',impact:.45,animation:['abhimanyu_chariot_hit','abhimanyu_chariot_break','abhimanyu_jump_from_chariot','abhimanyu_land','abhimanyu_last_warrior_activate'],element:'dust'},
 '4:SWORD':{duration:1,title:'THEN I NEED NO BOW',camera:'weapon',color:'#eab170',impact:.3,animation:['abhimanyu_bow_break'],element:'dust'},
 '4:WHEEL':{duration:1,title:'I STILL STAND',camera:'weapon',color:'#ffc277',impact:.5,animation:['abhimanyu_wheel_take'],element:'dust'},
 '5:SHATTER':{duration:2.8,title:'MANI SHATTERED',camera:'character',color:'#e593e7',impact:.9,animation:['ashwatthama_mani_crack','ashwatthama_mani_shatter','ashwatthama_shatter_reaction','ashwatthama_cursed_transform'],element:'cosmic'},
 '6:FURY':{duration:1.15,title:'VRISHNI FURY',camera:'weapon',color:'#9ae9ff',impact:.25,animation:['satyaki_fury_activate','satyaki_fury_draw','satyaki_fury_rapid_shot'],element:'wind'},
 '7:INSTINCT':{duration:1.3,title:'INSTINCTIVE ARCHERY',camera:'weapon',color:'#e7d4a3',impact:.3,animation:['ekalavya_focus_high','ekalavya_instinct_activate','ekalavya_instinct_draw'],element:'wind'},
 '7:Sacrifice':{duration:2.8,title:'GURU DAKSHINA',camera:'weapon',color:'#e9cf91',impact:.9,animation:['ekalavya_guru_dakshina_begin','ekalavya_guru_dakshina_sacrifice','ekalavya_guru_dakshina_recover','ekalavya_alternate_grip','ekalavya_mastered_stance'],element:'solar'}
};

// Replace these event cues with scored stems without changing combat or replication.
const EVENT_AUDIO_CUES={UltimateActivation:{element:'solar'},UltimateCollision:{element:'cosmic'},UltimateDirectHit:{element:'dust'},CriticalBattle:{element:'fire'},Melee:{element:'wind'},MeleeImpact:{element:'dust'}};


// cinematic-runtime
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


// rollback
'use strict';
// Transport-independent bounded rollback. State history is indexed by the frame BEFORE input.
class RollbackSession {
 constructor({seat,capture,restore,step,neutral,commit=()=>{},maxPrediction=12,history=180}) {
  Object.assign(this,{seat,capture,restore,step,neutral,commit,maxPrediction,history});
  this.frame=0;this.remoteThrough=-1;this.confirmed=-1;this.rollbacks=0;
  this.inputs=[new Map(),new Map()];this.used=new Map();this.states=[];this.effects=new Map();this.hashes=new Map();this.states[0]={frame:0,state:capture()};
 }
 stateAt(f){const slot=this.states[f%this.history];return slot?.frame===f?slot.state:null;}
 predicted(f){const before=this.used.get(f-1)?.[1-this.seat]||this.neutral[1-this.seat];return {...before,actions:[]};}
 canAdvance(){return this.frame-this.remoteThrough<=this.maxPrediction;}
 simulate(f){const pair=[null,null];pair[this.seat]=this.inputs[this.seat].get(f);pair[1-this.seat]=this.inputs[1-this.seat].get(f)||this.predicted(f);this.used.set(f,pair);this.effects.set(f,this.step(pair,f)||[]);this.states[(f+1)%this.history]={frame:f+1,state:this.capture()};}
 advance(input){if(!this.canAdvance())return false;this.inputs[this.seat].set(this.frame,input);this.simulate(this.frame++);this.confirm();this.prune();return true;}
 receive(frame,input){return this.receiveBatch([{frame,input}]);}
 receiveBatch(frames){
  const pending=new Map();let earliest=this.frame;
  // Validate the whole batch before changing state; retries are idempotent.
  for(const {frame,input} of frames){
   if(!Number.isInteger(frame)||frame<0||frame>this.frame+this.maxPrediction+120)throw Error('Invalid input frame');
   if(frame<this.frame-this.history+2)throw Error('Input outside rollback history');
   const known=pending.get(frame)||this.inputs[1-this.seat].get(frame);
   if(known){if(JSON.stringify(known)!==JSON.stringify(input))throw Error('Conflicting duplicate input');continue;}
   pending.set(frame,input);
   if(frame<this.frame&&JSON.stringify(this.used.get(frame)?.[1-this.seat])!==JSON.stringify(input)){
    if(frame<=this.confirmed)throw Error('Changed confirmed input');earliest=Math.min(earliest,frame);
   }
  }
  const state=earliest<this.frame?this.stateAt(earliest):null;
  if(earliest<this.frame&&!state)throw Error('Rollback state expired');
  for(const [frame,input] of pending)this.inputs[1-this.seat].set(frame,input);
  while(this.inputs[1-this.seat].has(this.remoteThrough+1))this.remoteThrough++;
  if(state){this.restore(state);this.rollbacks++;for(let f=earliest;f<this.frame;f++)this.simulate(f);}
  this.confirm();this.prune();
 }
 confirm(){const end=Math.min(this.remoteThrough,this.frame-1);while(this.confirmed<end){const f=++this.confirmed,state=this.stateAt(f+1);if(!state)throw Error('Confirmed state expired');this.hashes.set(f,RollbackSession.hash(state));this.commit(f,state,this.effects.get(f)||[]);}}
 prune(){const floor=this.frame-this.history+2;for(const map of [...this.inputs,this.used,this.effects,this.hashes])for(const key of map.keys())if(key<floor)map.delete(key);}
 repair(frame,state){if(!Number.isInteger(frame)||frame<0||frame>this.confirmed||!this.stateAt(frame+1))throw Error('Recovery frame expired');this.restore(state);this.states[(frame+1)%this.history]={frame:frame+1,state:this.capture()};this.hashes.set(frame,RollbackSession.hash(state));for(let f=frame+1;f<this.frame;f++){this.simulate(f);if(f<=this.confirmed)this.hashes.set(f,RollbackSession.hash(this.stateAt(f+1)));}this.rollbacks++;}
 static hash(state){const text=JSON.stringify(state);let h=2166136261;for(let i=0;i<text.length;i++)h=Math.imul(h^text.charCodeAt(i),16777619);return(h>>>0).toString(16);}
}



// rollback-game
'use strict';
const rb={active:false,executing:false,engine:null,actions:[],rng:1,clock:0,effects:[],confirmedEvents:[],confirmedRound:null,confirmedEnded:false,acc:0,halted:'',pendingHashes:new Map(),notice:'',localNotice:null,recovery:null,recoverySerial:0,recoveryOutbox:[],inputOutbox:[],sendElapsed:0,recovered:0,lastRepairId:0,lastRepairHash:''};
function rollbackActive(){return rb.active;}
function rollbackCapture(){return JSON.parse(JSON.stringify({
 players:players.map(({fateAnimation,...p})=>({...p,charges:p.ammo[p.selected],astra:ASTRAS[p.selected].name})),arrows,particles,rings,fires,damageTexts,skyHazards,spriteEffects,weather,ultimate,ultimateSerial,cutsceneSeen:[...cutsceneSeen],pendingShots,impactCutscene,battlefieldShattered,narayana,elapsed,round,score,matchOver,started,paused,ended,shots,hits,clashes,aims,rescueSpent,wetZones,clouds,trialCompleted,matchIntro,
 fate:fateController.export(),fateCasts,clashSlow,shake,flash,aiTimer,noticeTime,hudElapsed,visualTime,chosen,ruleSet,episode,rng:rb.rng,clock:rb.clock,
 battleStats:typeof battleStats==='undefined'?null:battleStats,quiverLoadout:typeof quiverLoadout==='undefined'?null:quiverLoadout,counterLoadout:typeof counterLoadout==='undefined'?null:counterLoadout,astra:typeof astraState==='undefined'?null:astraState,notice:rb.notice,winner:$('winner').textContent,recap:$('recap').textContent
 }));}
function rollbackRestore(source){const s=JSON.parse(JSON.stringify(source));
 ({players,arrows,particles,rings,fires,damageTexts,skyHazards,spriteEffects,weather,ultimate,ultimateSerial,pendingShots,impactCutscene,battlefieldShattered,narayana,elapsed,round,score,matchOver,started,paused,ended,shots,hits,clashes,aims,rescueSpent,wetZones,clouds,trialCompleted,matchIntro,fateCasts,clashSlow,shake,flash,aiTimer,noticeTime,hudElapsed,visualTime,chosen,ruleSet,episode}=s);
 if(s.battleStats&&typeof battleStats!=='undefined')battleStats=s.battleStats;if(s.quiverLoadout&&typeof quiverLoadout!=='undefined')quiverLoadout=s.quiverLoadout;if(s.counterLoadout&&typeof counterLoadout!=='undefined')counterLoadout=s.counterLoadout;if(s.astra&&typeof astraState!=='undefined')astraState=s.astra;cutsceneSeen=new Set(s.cutsceneSeen);fateController.restore(s.fate);players.forEach((p,i)=>p.fate=fateController.state.units[i]);rb.rng=s.rng;rb.clock=s.clock;if(typeof fatePresentation!=='undefined')fatePresentation.clock=rb.clock;
 rb.notice=s.notice;$('banner').textContent=s.notice;$('winner').textContent=s.winner;$('recap').textContent=s.recap;
}
// Local button hints are presentation only; they must never change a simulated timer.
function rollbackAnnounce(text,time){if(!rb.active)return false;if(rb.executing){rb.notice=text;return false;}rb.localNotice={text,until:Date.now()+time*1000};$('banner').textContent=text;return true;}
function rollbackNoticeExpired(){if(rb.active&&rb.executing)rb.notice='';}
function rollbackRandom(){let x=rb.rng|0;x^=x<<13;x^=x>>>17;x^=x<<5;rb.rng=x>>>0;return rb.rng/4294967296;}
function rollbackAudio(kind,args){if(!rb.active||!rb.executing)return false;rb.effects.push({kind,args});return true;}
function rollbackEvents(){return rb.active?rb.confirmedEvents:fateController.state.events;}
const RB_ACTIONS=new Set(['quiver','counterAstra','shoot','arm','choose','guard','tactic','move','repair','rescue','sky','counter','rune','fate','pause','next']);
function rollbackQueue(action,i,args){if(i===online.seat&&RB_ACTIONS.has(action)&&rb.actions.length<16)rb.actions.push({action,args});return true;}
function rollbackApply(i,c){const a=c.args||{};switch(c.action){
 case 'quiver':if(typeof choosePhysicalArrow==='function')choosePhysicalArrow(i,a.id);break;case 'counterAstra':if(typeof armCounterAstra==='function')armCounterAstra(i);break;case 'shoot':if(Number.isFinite(a.angle)&&a.angle>=-25&&a.angle<=155&&Number.isFinite(a.power)&&a.power>=.05&&a.power<=1)aims[i]={angle:a.angle,power:a.power};shoot(i);stopCharge(i);break;case 'arm':armAstra(i);break;case 'choose':if(players[i].loadout.includes(a.key))chooseAstra(i,a.key);break;case 'guard':guard(i);break;case 'tactic':activateTactic(i);break;case 'move':moveChariot(i,!!a.toward);break;
 case 'repair':repairEquipment(i);break;case 'rescue':triggerRescue(i);break;case 'sky':toggleSkyAim(i);break;case 'counter':selectCounter(i,a.key);break;case 'rune':solveRune(i,a.rune,a.castId);break;case 'fate':fateCommand(i,a.op,a.id);break;
 case 'pause':if(typeof a.value==='boolean'&&paused!==a.value)togglePause();break;
 case 'next':if(i===0&&ended&&!fateFilmHolding()){if(matchOver){score=[0,0];round=1;matchOver=false;rescueSpent=[false,false];}else round++;reset();}break;
}}
function rollbackStep(pair,frame){
 const random=Math.random,reduced=options.reduced,applying=online.applying,localDrags=new Map(drags),localKeys=new Map(keyboardDraw);
 rb.executing=true;rb.effects=[];Math.random=rollbackRandom;options.reduced=false;online.applying=true;
 try{
  for(let i=0;i<2;i++)aims[i]={...pair[i].aim};
  for(let i=0;i<2;i++)for(const a of pair[i].actions)rollbackApply(i,a);
  for(let i=0;i<2;i++)setChargeIntent(i,pair[i].draw,pair[i].aim);
  const dt=1/60;if(!paused)rb.clock+=dt;if(typeof fatePresentation!=='undefined')fatePresentation.clock=rb.clock;
  tickImpactCutscene(dt);tickUltimate(dt);let combatDt=dt;
  if(players.some(p=>p.rescue>0)&&!paused)combatDt*=.65;
  if(clashSlow>0&&!paused){clashSlow=Math.max(0,clashSlow-combatDt);combatDt*=.4;}
  if(!paused&&!ended)visualTime+=combatDt;
  update(combatDt);if(typeof productionObserve==='function')productionObserve();
  return rb.effects;
 }finally{Math.random=random;options.reduced=reduced;online.applying=applying;rb.executing=false;drags=localDrags;keyboardDraw.clear();for(const [k,v]of localKeys)keyboardDraw.set(k,v);}
}
function rollbackCommit(frame,state,effects){if(typeof serviceRecord==='function')serviceRecord(frame,state);rb.confirmedEvents=state.fate.events;rb.confirmedEnded=state.ended;
 if(rb.confirmedRound!==state.fate.round){rb.confirmedRound=state.fate.round;if(typeof productionReset==='function')productionReset();}
 for(const e of effects){if(e.kind==='sfx')sfx(...e.args);else if(e.kind==='tone')tone(...e.args);else if(e.kind==='noise')noise(...e.args);}
 if(frame%60===59&&typeof rtcSend==='function')rtcSend({type:'hash',frame,hash:RollbackSession.hash(state)});
 rollbackCheckHashes();
}
function rollbackCheckHashes(){if(!rb.engine)return;for(const [f,h]of rb.pendingHashes){const local=rb.engine.hashes.get(f);if(local){rb.pendingHashes.delete(f);if(local!==h)rollbackRecover(f);}}}
function rollbackInitialize(heroes,seed){
 rb.recovery=null;rb.recoveryOutbox=[];rb.inputOutbox=[];rb.sendElapsed=0;rb.recovered=0;rb.lastRepairId=0;rb.lastRepairHash='';rb.active=true;rb.notice='';rb.localNotice=null;introSoundId=null;rb.halted='';rb.actions=[];rb.acc=0;rb.clock=0;rb.rng=seed>>>0||1;rb.confirmedEvents=[];rb.confirmedRound=null;rb.confirmedEnded=false;rb.pendingHashes.clear();
 beginOnlineMatch(heroes);online.epoch=1;ultimateSerial=0;hudElapsed=0;episode='duel';$('winner').textContent='';$('recap').textContent='';fateController.state={schema:1,clock:0,serial:0,match:0,round:0,consumed:{},events:[],units:[]};matchIntro={id:0,left:3};rb.executing=true;reset();rb.executing=false;atHome=false;mode='online';rb.clock=0;visualTime=0;if(typeof fatePresentation!=='undefined')fatePresentation.clock=0;
 rb.engine=new RollbackSession({seat:online.seat,capture:rollbackCapture,restore:rollbackRestore,step:rollbackStep,neutral:aims.map(a=>({aim:{...a},draw:false,actions:[]})),commit:rollbackCommit});
}
function rollbackValidateInput(m){const x=m.input;return m.type==='input'&&Number.isInteger(m.frame)&&x&&x.aim&&Number.isFinite(x.aim.angle)&&x.aim.angle>=-25&&x.aim.angle<=155&&Number.isFinite(x.aim.power)&&x.aim.power>=.05&&x.aim.power<=1&&typeof x.draw==='boolean'&&Array.isArray(x.actions)&&x.actions.length<=16&&x.actions.every(c=>c&&RB_ACTIONS.has(c.action)&&c.args&&typeof c.args==='object'&&JSON.stringify(c.args).length<600);}
function rollbackReceive(m){if(!rb.engine)return;if(m.type.startsWith('repair-')){rollbackRepairMessage(m);return;}if(m.type==='inputs'){if(!Array.isArray(m.frames)||m.frames.length>48||!m.frames.every(f=>rollbackValidateInput({type:'input',...f})))throw Error('Invalid input batch');const aim={...aims[online.seat]};try{rb.engine.receiveBatch(m.frames);}finally{aims[online.seat]=aim;}return;}if(m.type==='hash'){if(Number.isInteger(m.frame)&&m.frame>=rb.engine.frame-180&&m.frame<rb.engine.frame+180&&typeof m.hash==='string'&&m.hash.length<=8){rb.pendingHashes.set(m.frame,m.hash);rollbackCheckHashes();}return;}
 if(!rollbackValidateInput(m))throw Error('Invalid peer input');const localAim={...aims[online.seat]};try{rb.engine.receive(m.frame,m.input);}finally{aims[online.seat]=localAim;}
}
function rollbackFrame(dt){if(!rb.active)return false;
 rb.engine.maxPrediction=typeof rtc!=='undefined'&&rtc.transport==='relay'?Math.max(72,Math.min(108,Math.ceil(((rtc.relayRTT||500)*2+150)/1000*60))):18;
 rb.acc=Math.min(.1,rb.acc+dt);rb.sendElapsed+=dt;rollbackFlush();
 while(rb.acc>=1/60&&!rb.halted&&!rb.recovery&&rb.engine.canAdvance()&&rtcCanSend()){
  const i=online.seat,d=[...drags.values()].find(d=>d.i===i);const input={aim:{...aims[i]},draw:!!(d?dragWantsCharge(d):keyboardDraw.has(i)),actions:rb.actions.splice(0)};
  const f=rb.engine.frame;rb.inputOutbox.push({frame:f,input});
  rb.engine.advance(input);rb.acc-=1/60;
 }
 rollbackFlush();if(blockedAction(online.seat)){drags.clear();keyboardDraw.clear();}
 matchIntroFrame();rb.hudTime=(rb.hudTime||0)+dt;if(rb.hudTime>=.1){rb.hudTime=0;refresh();}$('banner').textContent=rb.localNotice&&Date.now()<rb.localNotice.until?rb.localNotice.text:rb.notice;$('result').classList.toggle('hidden',!ended||!rb.confirmedEnded);$('pause').textContent=paused?'▶ Resume':'Ⅱ Pause';
 draw();drawUltimate();drawImpactCutscene();renderOnlineStatus();return true;
}
// Rare confirmed mismatch recovery. The creator selects the checkpoint only during repair;
// both peers continue to run their own deterministic simulation in normal play.
function rollbackRecover(frame){if(rb.recovery)return;rb.recovery={frame,started:Date.now(),chunks:[]};if(online.seat===0)rollbackSendCheckpoint(frame);else rb.recoveryOutbox.push({type:'repair-request',frame});}
function rollbackSendCheckpoint(frame){const state=rb.engine.stateAt(frame+1);if(!state||frame>rb.engine.confirmed)return;const text=JSON.stringify(state);if(text.length>500000){rb.halted='Recovery is too large. Reconnect to continue.';return;}const id=++rb.recoverySerial,hash=RollbackSession.hash(state),total=Math.ceil(text.length/4000);rb.recovery={id,frame,hash,started:Date.now(),chunks:[]};for(let index=0;index<total;index++)rb.recoveryOutbox.push({type:'repair-chunk',id,frame,hash,total,index,data:text.slice(index*4000,(index+1)*4000)});}
function rollbackRepairMessage(m){const e=rb.engine;if(m.type==='repair-request'){if(online.seat===0&&Number.isInteger(m.frame)&&m.frame<=e.confirmed&&m.frame>=e.frame-150){if(!rb.recovery||rb.recovery.frame!==m.frame)rollbackSendCheckpoint(m.frame);}return;}
if(m.type==='repair-ack'){if(online.seat===0&&rb.recovery?.id===m.id&&rb.recovery.hash===m.hash){rb.pendingHashes.clear();rb.recovery=null;rb.recovered++;}return;}
if(online.seat!==1||!Number.isInteger(m.id)||!Number.isInteger(m.frame)||m.frame<e.frame-150||m.frame>e.confirmed||!Number.isInteger(m.total)||m.total<1||m.total>125||!Number.isInteger(m.index)||m.index<0||m.index>=m.total||typeof m.data!=='string'||m.data.length>4000||typeof m.hash!=='string'||m.hash.length>8)return;
if(m.id<=rb.lastRepairId){if(m.id===rb.lastRepairId&&m.hash===rb.lastRepairHash)rb.recoveryOutbox.push({type:'repair-ack',id:m.id,hash:m.hash});return;}if(!rb.recovery?.id)rb.recovery={id:m.id,frame:m.frame,hash:m.hash,total:m.total,chunks:[],started:Date.now()};const r=rb.recovery;if(r.id!==m.id||r.frame!==m.frame||r.hash!==m.hash||r.total!==m.total)return;r.chunks[m.index]=m.data;
if(Array.from({length:r.total},(_,i)=>typeof r.chunks[i]==='string').every(Boolean)){const state=JSON.parse(r.chunks.join(''));if(!Array.isArray(state.players)||state.players.length!==2||!state.fate||!state.astra||!Array.isArray(state.astra.fields)||state.astra.fields.length>8||RollbackSession.hash(state)!==r.hash)throw Error('Invalid recovery checkpoint');const localAim={...aims[online.seat]};e.repair(r.frame,state);aims[online.seat]=localAim;rb.confirmedEvents=e.stateAt(e.confirmed+1).fate.events;rb.confirmedEnded=e.stateAt(e.confirmed+1).ended;rb.pendingHashes.clear();rb.recoveryOutbox.push({type:'repair-ack',id:r.id,hash:r.hash});rb.lastRepairId=r.id;rb.lastRepairHash=r.hash;rb.recovery=null;rb.recovered++;}}
function rollbackFlush(){while(rb.recoveryOutbox.length&&rtcCanSend()){if(!rtcSend(rb.recoveryOutbox[0]))break;rb.recoveryOutbox.shift();}if(rb.inputOutbox.length&&(rb.sendElapsed>=1/30||rb.inputOutbox.length>=6||!rb.engine.canAdvance())&&rtcCanSend()){const frames=rb.inputOutbox.slice(0,6);if(rtcSend({type:'inputs',frames})){rb.inputOutbox.splice(0,frames.length);rb.sendElapsed=0;}}if(rb.recovery&&Date.now()-rb.recovery.started>12000)rb.halted='Battlefield recovery timed out. Reconnect to continue.';}


// character-config
'use strict';
// Display adapters read canonical gameplay data; alignment is presentation-only.
const CHARACTER_IDS=['arjuna','karna','bhishma','drona','abhimanyu','ashwatthama','satyaki','ekalavya'];
const CHARACTER_SUMMARIES=[
()=>`Krishna intercepts one lethal hit per match, restoring ${FATE_BALANCE.arjuna.health*100}% health and granting Guidance.`,
()=>`Kavacha protects at low health. Repair the wheel to become a pure archer with ${FATE_BALANCE.karna.heal*100}% health. Specials lock; only an already-ready Ultimate is retained.`,
()=>`At death’s threshold, fight for ${FATE_BALANCE.bhishma.duration} final seconds. Healing is disabled; arrows and Ultimate are enhanced.`,
()=>`Learns repeated enemy Astras. After ${FATE_BALANCE.drona.mastery} uses, mastery improves resistance and counters.`,
()=>`After his chariot breaks, fights on foot. Damage progresses his weapons from bow to sword to wheel.`,
()=>`Counter-only Ultimate until Mani breaks. Survive ${FATE_BALANCE.ashwatthama.duration}s; gain one execution Ultimate but take 15% more damage.`,
()=>`Consecutive hits build up to ${FATE_BALANCE.satyaki.maximum} Pursuit stacks. Maximum stacks unleash Vrishni Fury.`,
()=>`Perfect shots build Focus. Full Focus grants Instinct; misses reduce it. Guru Dakshina trades damage for mastery.`];
const CHARACTER_CONFIG=CHARACTER_IDS.map((id,i)=>({characterId:id,index:i,get displayName(){return i===0?'Arjuna':roster[i].name;},get title(){return roster[i].title;},get stats(){return {attack:roster[i].damage,speed:roster[i].speed,critical:ROSTER_BALANCE[i].criticalMultiplier.toFixed(2)+'×',criticalDetail:'Perfect draw · accuracy '+ROSTER_BALANCE[i].accuracyModifier.toFixed(2)+'× · no random misses',hp:roster[i].hp};},get passive(){return {name:FATE_NAMES[i],summary:CHARACTER_SUMMARIES[i]()};},get astras(){return LOADOUTS[i].map(key=>({key,name:ASTRAS[key].name}));},get accentColor(){return roster[i].color;},assets:{selectPreviewImage:`matchup/${id}.png`,vsImage:`matchup/${id}.png`,vsImageLeftOverride:null,vsImageRightOverride:null,rosterPortrait:null},selectTransform:{scale:1,offsetX:0,offsetY:0,anchorX:.5,anchorY:.5},vsLeftTransform:{scale:[1.28,1.3,1.25,1.28,1.3,1.3,1.28,1.3][i],offsetX:-.02,offsetY:.015,anchorX:0,anchorY:0,flipX:false},vsRightTransform:{scale:[1.43,1.45,1.4,1.43,1.45,1.45,1.43,1.45][i],offsetX:i===5?.12:.07,offsetY:.025,anchorX:1,anchorY:0,flipX:true}}));
const MATCHUP_CONFIG={duration:3.6,quickDuration:1.35,skipAfter:.75,showNames:true,logo:'matchup/vs.png',logoRect:[553,271,570,375],lightning:'matchup/lightning-sheet.png',lightningFPS:14,lightningRects:[0,148,305,480,665,870,1075,1250,1420,1570,1672].slice(0,-1).map((x,i)=>[x,0,[0,148,305,480,665,870,1075,1250,1420,1570,1672][i+1]-x,941]),split:{top:.60,bottom:.50},audio:{vs_intro_start:[90,.25,'sine'],vs_panel_slide:[180,.18,'triangle'],vs_panel_hit:[70,.25,'triangle'],vs_lightning:[650,.1,'sawtooth'],vs_logo_hit:[130,.3,'triangle'],vs_transition:[330,.15,'sine']}};
function characterAsset(index,side){const c=CHARACTER_CONFIG[index],t=side===0?c.vsLeftTransform:c.vsRightTransform,override=side===0?c.assets.vsImageLeftOverride:c.assets.vsImageRightOverride;return {src:override||c.assets.vsImage||c.assets.selectPreviewImage,transform:t};}
function matchupTimeline(age,quick=false){const duration=quick?MATCHUP_CONFIG.quickDuration:MATCHUP_CONFIG.duration,t=age*3.6/duration,clamp=n=>Math.max(0,Math.min(1,n)),enter=clamp((t-.15)/.75),logo=clamp((t-1.35)/.4);return {t,duration,enter:1-(1-enter)**4,lightning:t>=1&&t<3.2,logoOpacity:logo,logoScale:logo<.7?.4+logo/.7*.8:1.2-(logo-.7)/.3*.2,fade:1-clamp((t-3)/.6),done:age>=duration,skip:age>=Math.min(MATCHUP_CONFIG.skipAfter,duration*.6)};}


// astra-codex-data
'use strict';
// Shared catalogue and Counter Astra relationship database.
// Existing ASTRA_PHASES / ASTRA_FIELDS / ASTRA_INTERACTIONS remain the live rule authority.
const AstraCodex=(()=>{
 const families=Object.freeze(['ELEMENTAL','DIVINE','BINDING','BARRIER','TACTICAL','CATACLYSMIC']);
 const tags=Object.freeze(['FIRE','WATER','WIND','THUNDER','DIVINE','SERPENT','GARUDA','STORM','RADIANCE','CURSE','BARRIER','FOREST','TACTICAL','BINDING','CATACLYSMIC']);
 const interactionTypes=Object.freeze(['HARD_COUNTER','SOFT_COUNTER','TRANSFORM','WEAKEN','DISPLACE','SHORTEN_DURATION','CANCEL','NO_SPECIAL_INTERACTION']);
 // Only new catalogue facts live here. Names, ownership, numbers, phases and art are read from existing definitions.
 const metadata={
  garuda_ward:['TACTICAL','ELEMENTAL',['GARUDA','WIND'],'TIER_1','A counter-only Garuda-themed ward, adapted for serpent interception.'],
  gandiva_gale:['ELEMENTAL','TACTICAL',['WIND'],'TIER_1','Gandiva’s wind-guided shot rewards swift, deliberate attacks.'],
  indra_storm:['ELEMENTAL','DIVINE',['THUNDER','STORM'],'TIER_2','Aindrastra calls on the thunderbolt imagery of Indra.'],
  pashupata:['CATACLYSMIC','DIVINE',['DIVINE','CATACLYSMIC','RADIANCE'],'CATACLYSMIC','A fictional Arcade manifestation of Pashupata; this variant is excluded from the human Lore duel.'],
  solar_shaft:['ELEMENTAL','DIVINE',['RADIANCE','FIRE'],'TIER_1','Karna’s solar identity shapes this radiant arrow.'],
  naga:['BINDING','ELEMENTAL',['SERPENT','BINDING'],'TIER_2','A serpent-themed Astra that pressures movement and positioning.'],
  shakti:['DIVINE','CATACLYSMIC',['DIVINE','RADIANCE','CATACLYSMIC'],'DIVINE','Karna’s reserved, decisive divine strike.'],
  ganga:['BARRIER','DIVINE',['WATER','BARRIER','DIVINE'],'TIER_1','Bhishma’s connection to Ganga inspires this protective river field.'],
  kuru_storm:['ELEMENTAL',null,['THUNDER','STORM'],'TIER_2','A storm adaptation for the patriarch of the Kuru line.'],
  prabhasa:['DIVINE','CATACLYSMIC',['DIVINE','RADIANCE','CATACLYSMIC'],'DIVINE','A radiant, fictional signature invocation for Bhishma.'],
  agni:['ELEMENTAL',null,['FIRE'],'TIER_2','Agneya channels the battlefield imagery of fire.'],
  brahma:['CATACLYSMIC','DIVINE',['DIVINE','CATACLYSMIC'],'CATACLYSMIC','Brahmastra is catalogued as a great divine weapon; Drona’s current playable version remains an advanced Astra.'],
  acharya:['TACTICAL','DIVINE',['TACTICAL','DIVINE','BARRIER'],'DIVINE','The teacher’s signature judgment is expressed through analysis and counter knowledge.'],
  chakra:['TACTICAL','ELEMENTAL',['WIND','STORM','TACTICAL'],'TIER_1','A circular arrow formation adapted for Abhimanyu’s rapid pressure.'],
  raudh:['ELEMENTAL','TACTICAL',['FIRE'],'TIER_2','Rudra-inspired force takes the form of a fast destructive lane.'],
  saubhadra:['CATACLYSMIC','ELEMENTAL',['WIND','THUNDER','STORM','CATACLYSMIC'],'DIVINE','A fictional signature tempest for the son of Subhadra.'],
  raudra:['ELEMENTAL','BINDING',['FIRE','CURSE'],'TIER_1','Ashwatthama’s ember field expresses a relentless, cursed fury.'],
  narayana:['DIVINE','TACTICAL',['DIVINE','TACTICAL'],'TIER_2','A knowledge-based suppression field: restraint reduces its threat. This Arcade Burst differs from the Lore Narayanastra encounter.'],
  brahmashira:['CATACLYSMIC','DIVINE',['DIVINE','CATACLYSMIC','CURSE'],'CATACLYSMIC','A catastrophic invocation tied to Ashwatthama’s curse in this game.'],
  vrishni:['ELEMENTAL','TACTICAL',['WIND'],'TIER_1','Satyaki’s wind corridor supports pursuit and momentum.'],
  satyaki_tide:['ELEMENTAL','BARRIER',['WATER'],'TIER_2','A Varuna-inspired water invocation that contests fire.'],
  yuyudhana:['CATACLYSMIC','ELEMENTAL',['THUNDER','WATER','STORM','CATACLYSMIC'],'DIVINE','Satyaki’s signature storm combines water and thunder imagery.'],
  forest_fang:['TACTICAL','BINDING',['FOREST','SERPENT','TACTICAL'],'TIER_1','Ekalavya’s forest mastery rewards a precise weak-point release.'],
  nishada:['ELEMENTAL',null,['FIRE','FOREST'],'TIER_2','A forest-flame adaptation for Ekalavya’s arsenal.'],
  aranya:['CATACLYSMIC','ELEMENTAL',['WIND','FOREST','STORM','CATACLYSMIC'],'DIVINE','A great forest cyclone: a signature Ultimate, not an ordinary wind counter.'],
  lore_agni:['ELEMENTAL',null,['FIRE'],'TIER_1','The Lore encounter’s fire arrow.'],
  lore_varuna:['ELEMENTAL','BARRIER',['WATER'],'TIER_1','The Lore encounter’s water response to fire.'],
  lore_vayu:['ELEMENTAL',null,['WIND'],'TIER_1','The Lore encounter’s dispersing wind.'],
  lore_aindra:['ELEMENTAL','DIVINE',['THUNDER','STORM'],'TIER_2','Arjuna’s celestial barrage in the Lore duel.'],
  lore_bhargava:['DIVINE','TACTICAL',['DIVINE','RADIANCE','TACTICAL'],'TIER_2','Karna’s specific response to the Lore Aindra barrage.'],
  lore_brahma:['CATACLYSMIC','DIVINE',['DIVINE','CATACLYSMIC'],'CATACLYSMIC','The Lore duel’s limited Brahmastra variant.'],
  lore_naga:['BINDING','DIVINE',['SERPENT','BINDING','DIVINE'],'DIVINE','The Ashvasena serpent-arrow episode; Krishna’s timed rescue is documented separately from Astra counters.'],
  lore_narayana:['DIVINE','TACTICAL',['DIVINE','TACTICAL'],'DIVINE','The Lore trial rewards lowering the bow and dismounting rather than firing back.']
 };
 // Shared Lore ownership mirrors the two actual Lore encounters, not the generic fallback loadout.
 const loreOwners={lore_agni:['arjuna','ashwatthama'],lore_varuna:['arjuna','karna'],lore_vayu:['arjuna'],lore_aindra:['arjuna'],lore_bhargava:['karna'],lore_brahma:['arjuna','karna'],lore_naga:['karna'],lore_narayana:['ashwatthama']};
 const glyphs={fire:'♨',water:'≈',wind:'≋',thunder:'ϟ',cosmic:'✦',solar:'☀',venom:'◇'};
 const atlasPaths=['effects/astra-elements.png','effects/astra-controls.png'];
 const notes={
  brahma:'Catalogue class does not change combat tier: this is Drona’s advanced (tier 1), non-Ultimate Astra. A high-tier-only counter restriction is proposed, not active.',
  brahmashira:'Before Mani breaks, the Ultimate is counter-only. In curse it has one execution use; a successful Ultimate puzzle counters it. CURSE metadata does not permit an ordinary cleanse to stop this Ultimate.',
  narayana:'Its suppression field grows more threatening when the defender attacks; refraining from charging, arming or releasing reduces field threat. No new surrender input is introduced.',
  lore_narayana:'Existing special encounter: stop attacking and use Lower bow & dismount. This invocation does not use the ordinary Ultimate counter-puzzle flow.',
  lore_naga:'Arjuna’s existing timed Krishna rescue can avoid this serpent arrow. That character ability is not a new Counter Astra.',
  aranya:'The existing forest field bends projectile motion. A generic field-displacement counter is only a proposed catalogue relationship; this Ultimate bypasses ordinary field-counter handling.',
  ganga:'Direct release creates the protective field beside its owner. Water counters against Fire Tornado require suitable Sky/Spirit placement; Ganga has an existing exception.',
  agni:'The current display name is Agneya. Water converts a fire field to Steam; sufficiently strong wind converts it to Ember Storm. These are field interactions, distinct from projectile clashes.',
  shakti:'After wheel repair, Karna retains this Ultimate only if it was already ready when Wheel Fate triggered.',
  prabhasa:'Final Stand enhances the existing Ultimate from 72% to 90% of maximum health.'
 };
 const entries=Object.entries(ASTRAS).map(([id,a])=>{
  const m=metadata[id];if(!m)throw Error('Missing Codex metadata: '+id);
  const phase=ASTRA_PHASES[id],ownerIds=LOADOUTS.flatMap((list,i)=>list.includes(id)?[CHARACTER_IDS[i]]:[]),owners=ownerIds.length?ownerIds:loreOwners[id]||[];
  const icon=phase&&astraCells[phase.vfxId];
  Object.assign(a,{id,ownerCharacterId:owners.length===1?owners[0]:null,ownerCharacterIds:Object.freeze([...owners]),primaryFamily:m[0],secondaryFamily:m[1],tags:Object.freeze([...m[2]]),codexTier:m[3],loreText:m[4],gameplayNotes:notes[id]||'Named variants and effects are gameplay adaptations. Cast mode, position and existing resource rules determine the result.',isSignature:ownerIds.length>0,isKnown:true,isDiscovered:true,spiritChargeSupported:!!phase,normalDirectSupported:id!=='lore_narayana',normalSkySupported:!!phase||a.tier<2,spiritDirectSupported:!!phase,spiritSkySupported:!!phase,visualIcon:Object.freeze({glyph:glyphs[a.element]||'✦',...(typeof ASTRA_SPIRITS!=='undefined'&&ASTRA_SPIRITS[id]?{src:ASTRA_SPIRITS[id].iconPath,rect:ASTRA_SPIRITS[id].iconRect,atlasWidth:ASTRA_SPIRITS[id].sheetWidth,atlasHeight:ASTRA_SPIRITS[id].sheetHeight}:icon?{src:atlasPaths[icon[0]],rect:[314,icon[1],313,icon[2]-icon[1]],atlasWidth:1254,atlasHeight:1254}:{} )}),optionalCodexImage:null});
  Object.defineProperties(a,{
   displayName:{get:()=>a.name},descriptionShort:{get:()=>phase?phase.normalDirectBehavior:a.description},descriptionLong:{get:()=>phase?phase.normalDirectBehavior+'. Spirit direct: '+phase.spiritDirectBehavior+'. Spirit sky: '+phase.spiritSkyBehavior+'.':a.description},
   isUltimate:{get:()=>a.tier===2},isCounterEligible:{get:()=>typeof COUNTER_POOLS!=='undefined'&&Object.values(COUNTER_POOLS).some(pool=>pool.includes(id))},counterEligibleCharacters:{get:()=>typeof COUNTER_POOLS==='undefined'?[]:Object.keys(COUNTER_POOLS).filter(hero=>COUNTER_POOLS[hero].includes(id))},signatureOwner:{get:()=>owners},counterWindowType:{value:'ANY_VALID_PHASE'},counterUsesPerRound:{get:()=>typeof COUNTER_CONFIG==='undefined'?1:COUNTER_CONFIG.usesByAstra?.[id]??COUNTER_CONFIG.counterUsesPerRound},
   baseDamageReference:{get:()=>({rawDefinition:a.damage,normalDirect:phase?.normalDamage??null,spiritDirect:phase?.spiritDamage??null,ultimateMaxHealthFraction:ownerIds.length&&a.tier===2?ROSTER_BALANCE[CHARACTER_IDS.indexOf(owners[0])].ultimateDamage:null,notes:a.tier===2?'Ultimate payload and passive rules override ordinary damage references.':'Reference values before situational bonuses, defenses and fields.'})},
   spiritChargeSeconds:{get:()=>phase?.spiritChargeTime??null}
  });return a;
 });
 const byId=Object.fromEntries(entries.map(a=>[a.id,a]));
 const recipes=ASTRA_INTERACTIONS.filter(r=>r.result==='TRANSFORM').map(r=>Object.freeze({id:'recipe_'+r.to,ingredients:[r.field,r.counter],resultId:r.to,displayName:ASTRA_FIELDS[r.to].name,status:'CURRENT',notes:'Existing field transformation. Cast strength, placement and Ultimate exclusions apply.'}));
 const rules=ASTRA_INTERACTIONS.map(r=>({id:'field_'+r.field.toLowerCase()+'_'+r.counter.toLowerCase(),sourceTag:r.counter,targetTag:r.field,interactionType:r.result,strength:r.strength||1,status:'CURRENT',scope:'FIELD',minimumCounterStrength:r.strength||1,factor:r.factor??null,displacement:r.distance??null,legacyRule:r,recipeId:r.to?'recipe_'+r.to:null,notes:(r.result==='TRANSFORM'?'Transforms a field into '+ASTRA_FIELDS[r.to].name+'.':r.result==='WEAKEN'?'Reduces field damage, duration and drift.':r.result==='SHORTEN_DURATION'?'Reduces remaining field duration.':r.result==='CANCEL'?'Removes the matching field.':'Moves the matching field away.')+' Only listed cast modes qualify; ordinary counters do not affect Ultimate fields.'}));
 rules.push(
  {id:'projectile_water_fire',sourceElement:'water',targetElement:'fire',sourceTag:'WATER',targetTag:'FIRE',interactionType:'HARD_COUNTER',strength:1,status:'CURRENT',scope:'PROJECTILE',notes:'When non-Ultimate water and fire projectiles clash, water extinguishes fire and leaves steam. Both projectiles are consumed; this is not an automatic win against every fire cast.'},
  {id:'projectile_wind_water',sourceElement:'wind',targetElement:'water',sourceTag:'WIND',targetTag:'WATER',interactionType:'CANCEL',strength:1,status:'CURRENT',scope:'PROJECTILE',notes:'An in-flight wind/water clash disperses water clouds. Field contact instead uses the Mist recipe.'},
  {id:'lore_bhargava_aindra',sourceAstraId:'lore_bhargava',targetAstraId:'lore_aindra',interactionType:'HARD_COUNTER',strength:1,status:'CURRENT',scope:'PROJECTILE',notes:'On collision, Bhargava also clears nearby Lore Aindra barrage arrows.'},
  {id:'ultimate_clash',sourceUltimate:true,targetUltimate:true,interactionType:'CANCEL',strength:3,status:'CURRENT',scope:'ULTIMATE',allowSelf:true,allowReciprocal:true,notes:'Only an eligible reserved Ultimate, selected in time and followed by a successful rune puzzle, resolves the existing Ultimate clash. Costs, ammo and character restrictions still apply; not an unconditional counter.'},
  {id:'garuda_serpent',priority:10,sourceTag:'GARUDA',targetTag:'SERPENT',interactionType:'HARD_COUNTER',strength:3,status:typeof COUNTER_POOLS==='undefined'?'PLANNED':'CURRENT',scope:typeof COUNTER_POOLS==='undefined'?'DESIGN':'COUNTER_ANY',notes:'Garuda Ward destroys ordinary serpent manifestations on contact. Ultimate variants remain protected.'},
  {id:'divine_barrier',sourceTag:'DIVINE',targetTag:'BARRIER',sourceUltimate:true,interactionType:'SOFT_COUNTER',strength:.5,status:'PLANNED',scope:'DESIGN',notes:'Proposed high-tier divine barrier suppression. Exact eligible Astras and degree of suppression require design approval; not active.'},
  {id:'cataclysmic_barrier',sourceTag:'CATACLYSMIC',targetTag:'BARRIER',sourceUltimate:true,interactionType:'WEAKEN',strength:2,status:'PLANNED',scope:'DESIGN',notes:'Proposed high-tier barrier weakening. Not active; this classification cannot bypass current Ultimate rules.'},
  {id:'cataclysmic_requirement',sourceTag:'DIVINE',sourceUltimate:true,targetTag:'CATACLYSMIC',interactionType:'HARD_COUNTER',strength:3,status:'PLANNED',scope:'DESIGN',allowSelf:true,allowReciprocal:true,notes:'Proposed high-tier counter eligibility for Cataclysmic catalogue entries. Ordinary elemental tags alone would not qualify. Drona’s current Brahmastra is still advanced, so this restriction is not live.'},
  {id:'cataclysmic_peer_requirement',sourceTag:'CATACLYSMIC',sourceUltimate:true,targetTag:'CATACLYSMIC',interactionType:'HARD_COUNTER',strength:3,status:'PLANNED',scope:'DESIGN',allowSelf:true,allowReciprocal:true,notes:'Proposed high-tier Cataclysmic peer counter. Exact eligibility is not active; present Ultimate clashes still require the existing puzzle.'},
  {id:'aranya_displace',sourceAstraId:'aranya',targetTag:'STORM',interactionType:'DISPLACE',strength:2,status:'PLANNED',scope:'DESIGN',allowSelf:false,notes:'Proposed cyclone displacement of ordinary storm fields. Current Aranya Ultimate does not perform this counter operation.'},
  {id:'fire_forest',sourceTag:'FIRE',targetTag:'FOREST',interactionType:'WEAKEN',strength:.5,status:'PLANNED',scope:'DESIGN',notes:'Fire versus forest interaction is reserved for future balancing; duration, spread and eligible fields are undecided.'}
 );
 const outgoing=Object.fromEntries(entries.map(a=>[a.id,[]])),incoming=Object.fromEntries(entries.map(a=>[a.id,[]]));
 const modes=[['Normal direct',false,false],['Normal sky',false,true],['Spirit direct',true,false],['Spirit sky',true,true]];
 const matches=(a,r,side)=>{
  if(r[side+'AstraId']&&a.id!==r[side+'AstraId'])return false;
  if(r[side+'Ultimate']&&!a.isUltimate)return false;
  if(r.scope==='FIELD')return !!ASTRA_PHASES[a.id]&&!a.isUltimate;
  if(['PROJECTILE','COUNTER_ANY'].includes(r.scope)&&a.isUltimate)return false;
  if(r.scope==='ULTIMATE')return a.isUltimate&&a.id!=='lore_narayana';
  if(r[side+'Element'])return a.element===r[side+'Element'];
  return !r[side+'Tag']||a.tags.includes(r[side+'Tag']);
 };
 for(const r of rules){
  const sources=entries.filter(a=>matches(a,r,'source')),targets=entries.filter(a=>matches(a,r,'target'));
  for(const target of targets){const active=[];
   for(const source of sources){if(source.id===target.id&&!r.allowSelf)continue;if(r.status==='CURRENT'&&!['FIELD','COUNTER_ANY'].includes(r.scope)&&source.isSignature!==target.isSignature)continue;let availability=['Conditional on contact'];
    if(r.scope==='FIELD'){
     availability=[];const p=ASTRA_PHASES[target.id];
     for(const kind of [...new Set([p.fieldEffectId,p.skyFieldId])])for(const [label,spiritCast,sky]of modes){
      const field={kind,tags:ASTRA_FIELDS[kind].tags,ultimate:target.isUltimate};
      if(astraCounterRule(field,{spell:source.id,spiritCast,sky})===r.legacyRule)availability.push(label+' against '+ASTRA_FIELDS[kind].name);
     }if(!availability.length)continue;
    }
    active.push({id:source.id,availability});
    let out=outgoing[source.id].find(x=>x.id===r.id);if(!out){out={...r,targetAstraIds:[],availability:{}};delete out.legacyRule;outgoing[source.id].push(out);}out.targetAstraIds.push(target.id);out.availability[target.id]=availability;
   }
   if(active.length||r.status==='PLANNED'&&r.sourceTag&&!sources.length){const entry={...r,sourceAstraIds:active.map(x=>x.id),availability:Object.fromEntries(active.map(x=>[x.id,x.availability]))};delete entry.legacyRule;incoming[target.id].push(entry);}
  }
 }
 const tagIndex=Object.fromEntries(tags.map(t=>[t,entries.filter(a=>a.tags.includes(t)).map(a=>a.id)]));
 const familyIndex=Object.fromEntries(families.map(f=>[f,entries.filter(a=>a.primaryFamily===f||a.secondaryFamily===f).map(a=>a.id)]));
 const recipeIndex=Object.fromEntries(entries.map(a=>[a.id,recipes.filter(r=>[...outgoing[a.id],...incoming[a.id]].some(e=>e.recipeId===r.id))]));
 const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
 freeze(outgoing);freeze(incoming);freeze(tagIndex);freeze(familyIndex);freeze(recipeIndex); // Never freeze legacy combat rules.
 entries.forEach(a=>Object.defineProperties(a,{counterRelationships:{get:()=>outgoing[a.id]},counters:{get:()=>outgoing[a.id]},counteredBy:{get:()=>incoming[a.id]}}));
 const publicRules=rules.map(({legacyRule,...r})=>r);freeze(publicRules);
 function filter({character='ALL',family='ALL',scope='signature'}={}){return entries.filter(a=>(scope==='all'||(scope==='lore'?a.id.startsWith('lore_'):a.isSignature))&&(character==='ALL'||a.ownerCharacterIds.includes(character))&&(family==='ALL'||familyIndex[family]?.includes(a.id)));}
 function validate(data={},assetExists){
  const list=data.entries||entries,rels=data.rules||publicRules,rs=data.recipes||recipes,errors=[],seen=new Set(),ids=new Set(list.map(a=>a.id)),ruleIds=new Set(rels.map(r=>r.id)),recipeIds=new Set(rs.map(r=>r.id));
  const issue=(code,id)=>errors.push({code,id});
  for(const a of list){if(!a.id||seen.has(a.id))issue('duplicate_or_missing_id',a.id);seen.add(a.id);if(!a.displayName?.trim())issue('missing_display_name',a.id);if((!a.ownerCharacterIds?.length&&a.id!=='garuda_ward')||a.ownerCharacterIds.some(o=>!CHARACTER_IDS.includes(o)))issue('missing_or_invalid_owner',a.id);if(!families.includes(a.primaryFamily)||a.secondaryFamily&&!families.includes(a.secondaryFamily))issue('invalid_family',a.id);if(!a.tags?.length||a.tags.some(t=>!tags.includes(t)))issue('invalid_tag',a.id);for(const icon of [a.visualIcon,a.optionalCodexImage])if(icon?.src&&(!/^[a-zA-Z0-9_./-]+\.(png|webp|svg|jpg)$/.test(icon.src)||icon.src.includes('..')||assetExists&&!assetExists(icon.src)))issue('broken_icon_path',a.id);}
  for(const id of Object.keys(ASTRAS))if(!ids.has(id))issue('missing_registry_entry',id);
  for(let i=0;i<LOADOUTS.length;i++)for(const id of LOADOUTS[i]){const a=list.find(x=>x.id===id);if(a&&!a.ownerCharacterIds?.includes(CHARACTER_IDS[i]))issue('signature_owner_mismatch',id);}
  const used=new Set();for(const r of rels){if(!r.id||used.has(r.id))issue('duplicate_relationship',r.id);used.add(r.id);if(!interactionTypes.includes(r.interactionType))issue('invalid_interaction',r.id);if(!['CURRENT','PLANNED'].includes(r.status))issue('invalid_status',r.id);if(!Number.isFinite(r.strength)||r.strength<0)issue('invalid_strength',r.id);for(const side of ['source','target']){if(!r[side+'Tag']&&!r[side+'AstraId']&&!r[side+'Ultimate'])issue('missing_'+side,r.id);if(r[side+'Tag']&&!tags.includes(r[side+'Tag']))issue('invalid_counter_tag',r.id);if(r[side+'AstraId']&&!ids.has(r[side+'AstraId']))issue('invalid_counter_target',r.id);}if(r.sourceAstraId&&r.sourceAstraId===r.targetAstraId&&!r.allowSelf)issue('malformed_self_counter',r.id);if(r.recipeId&&!recipeIds.has(r.recipeId))issue('invalid_recipe_reference',r.id);for(const dep of r.requires||[])if(!ruleIds.has(dep))issue('invalid_rule_dependency',r.id);}
  // Reciprocal counters are legitimate. Cyclic rule dependencies are not.
  const visiting=new Set(),done=new Set(),ruleMap=Object.fromEntries(rels.map(r=>[r.id,r]));
  function visit(id){if(visiting.has(id)){issue('circular_rule_dependency',id);return;}if(done.has(id))return;visiting.add(id);for(const dep of ruleMap[id]?.requires||[])if(ruleMap[dep])visit(dep);visiting.delete(id);done.add(id);}rels.forEach(r=>visit(r.id));
  const recipeSeen=new Set();for(const r of rs){if(recipeSeen.has(r.id))issue('duplicate_recipe',r.id);recipeSeen.add(r.id);if(!r.ingredients?.length||r.ingredients.some(t=>!tags.includes(t))||!ASTRA_FIELDS[r.resultId])issue('invalid_recipe',r.id);}
  if(!data.entries&&!data.rules)for(const a of entries)for(const r of outgoing[a.id])for(const target of r.targetAstraIds)if(!incoming[target].some(x=>x.id===r.id&&x.sourceAstraIds.includes(a.id)))issue('missing_reverse_edge',r.id+':'+a.id+':'+target);
  return {valid:errors.length===0,entryCount:list.length,signatureCount:list.filter(a=>a.isSignature).length,relationshipCount:rels.length,errors,warnings:['Catalogue tier is separate from numeric combat tier. Drona’s Brahmastra remains advanced.','PLANNED relationships are not live combat rules.']};
 }
 return Object.freeze({schemaVersion:1,entries:Object.freeze(entries),byId:Object.freeze(byId),families,tags,interactionTypes,rules:publicRules,recipes:freeze(recipes),tagIndex,familyIndex,filter,validate,get:id=>byId[id]||null,counters:id=>outgoing[id]||[],counteredBy:id=>incoming[id]||[],transformRecipes:id=>recipeIndex[id]||[]});
})();
function getAstraDisplayName(id){return AstraCodex.get(id)?.displayName||'Unknown Astra';}
function getAstraTags(id){return AstraCodex.get(id)?.tags||[];}
function getAstraCounters(id){return AstraCodex.counters(id);}
function getAstraCounteredBy(id){return AstraCodex.counteredBy(id);}
function getAstraTransformRecipes(id){return AstraCodex.transformRecipes(id);}


if(heroes.some((h,i)=>!counterEligible(h,counters[i])))throw Object.assign(Error('Invalid Counter Astra.'),{status:400});if(quivers&&(!Array.isArray(quivers)||quivers.length!==2||quivers.some((q,i)=>!quiverValidLoadout(heroes[i],q))))throw Object.assign(Error('Invalid tactical quiver.'),{status:400});quiverLoadout=quivers||heroes.map(quiverDefaultLoadout);sound=false;options.sound=false;online.active=true;online.seat=0;counterLoadout=counters;const fitBattleCanvas=()=>{};rollbackInitialize(heroes,seed);if(snapshot)rollbackRestore(snapshot);for(const p of pairs){if(matchOver)break;rollbackStep(p,0);}return rollbackCapture();
}
