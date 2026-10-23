'use strict';
/* Copied and referenced ONLY by FATE_DEV=1 builds. No production console entry point. */
(() => {
const panel=document.createElement('details');panel.style.cssText='position:fixed;z-index:1000;right:8px;bottom:8px;width:260px;background:#111e;color:#eee;padding:8px;font:12px sans-serif;max-height:75vh;overflow:auto';panel.innerHTML='<summary>FATE DEVELOPER PANEL</summary><label>Seat <select><option value="0">Player 1</option><option value="1">Player 2</option></select></label>';document.body.appendChild(panel);
function action(label,run){const b=document.createElement('button');b.textContent=label;b.style.cssText='font-size:11px;margin:3px;padding:5px';b.onclick=()=>{if(online.active){announce('Balance debug is offline only',2);return;}const i=Number(panel.querySelector('select').value);atHome=false;started=true;run(i,players[i],fateController.state.units[i]);fateSyncPlayers();refresh();};panel.appendChild(b);}
for(const hp of [50,30,1])action(`HP ${hp}%`,(i,p)=>{p.hp=p.maxHp*hp/100;hurt(i,0,1-i);});
action('Lethal damage',i=>hurt(i,100000,1-i));
action('Reset passive',(i,p)=>{const fresh=new LegendaryFate.PassiveController();fresh.reset(chosen);fateController.state.units[i]=fresh.state.units[i];delete fateController.state.consumed[`${i}:krishna`];rescueSpent[i]=false;p.dismounted=false;p.hp=p.maxHp;});
action('Rage + Ultimate',(i,p)=>{elapsed=60;p.resolve=100;players[1-i].hp=players[1-i].maxHp*.3;for(const k of p.loadout)p.ammo[k]=ASTRAS[k].uses;});
action('Kavacha',(i,p)=>{if(p.id===1)hurt(i,p.hp-p.maxHp*.29,1-i);});
for(const [label,hero] of [['Karna wheel',1],['Bhishma final stand',2],['Krishna intervention',0],['Mani shatter',5]])action(label,(i,p)=>{if(p.id===hero)hurt(i,100000,1-i);});
action('Complete repair',(i,p,u)=>{if(u.hero===1){u.data.repair=FATE_BALANCE.karna.repairHits;fateController.enter(i,'REMOUNT',.1,'Remount');}});
action('Fail repair',i=>{players[i].hp=0;fateController.enter(i,'DEAD',0,'FateFailure');});
action('Drona mastery',(i,p,u)=>{if(u.hero===3)for(let n=0;n<3;n++)fateController.launch(1-i,players[1-i].selected);});
action('Destroy chariot',(i,p,u)=>fateController.command(i,'destroy',u.id,players));
action('Break Abhimanyu weapon',(i,p,u)=>{if(u.hero===4&&u.used.last&&u.data.weapon!=='WHEEL'){u.data.weaponSince=fateController.state.clock-3;u.data.wear=p.maxHp;hurt(i,0,1-i);fateTick(.01);}});
action('Pursuit ×5',(i,p,u)=>{if(u.hero===6)for(let n=0;n<5;n++)fateController.result(i,true,false);});
action('Clear pursuit',(i,p,u)=>{if(u.hero===6)fateController.result(i,false,false);});
action('Focus 100%',(i,p,u)=>{if(u.hero===7)for(let n=0;n<4;n++)fateController.result(i,true,true);});
action('Ultimate collision',i=>{elapsed=60;players.forEach(p=>{p.resolve=100;for(const k of p.loadout)p.ammo[k]=ASTRAS[k].uses;});const keys=players.map(p=>p.loadout.find(k=>ASTRAS[k].tier===2&&k!=='lore_narayana'));if(keys.every(Boolean)){players[i].selected=keys[i];beginUltimate(i);if(selectCounter(1-i,keys[1-i]))for(const rune of [...ultimate.pattern])solveRune(1-i,rune,ultimate.id);}});
const stats=document.createElement('pre');stats.style.cssText='white-space:pre-wrap;font:10px monospace';panel.appendChild(stats);
action('Inspect balance',(i,p,u)=>{stats.textContent=JSON.stringify({base:balanceStats(i),effective:fateMod(i),normalDraw:balanceNormalDraw(i),critical:balanceCritical(i),passive:u.phase,ultimate:balanceUltimateReason(i)||'Eligible when resources/time ready',state:u.data},null,2);});
action('Clear Rage',(i,p)=>p.resolve=0);
action('Normal arrow hit',i=>hurt(1-i,players[i].damage*.8,i));
action('Critical arrow hit',i=>hurt(1-i,players[i].damage*.8*balanceCritical(i),i,false,{critical:true}));
action('Toggle Karna pure archer',(i,p,u)=>{if(u.hero!==1)return;u.data.astraLocked=!u.data.astraLocked;u.data.ultimateRetained=false;fateController.enter(i,u.data.astraLocked?'COMEBACK':'NORMAL',0);});
action('Attempt offensive Ultimate',(i,p)=>{p.selected=p.loadout.find(k=>ASTRAS[k].tier===2);beginUltimate(i);});
action('End round',i=>{players[1-i].hp=0;});action('Restart round',()=>reset());
})();
