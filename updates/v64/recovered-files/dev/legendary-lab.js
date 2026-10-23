'use strict';
(async()=>{
 const panel=document.createElement('div');panel.style='position:fixed;inset:0 auto auto 0;z-index:999999;background:#102232ed;padding:10px;display:flex;gap:6px;flex-wrap:wrap;max-width:100%;color:white';const label=document.createElement('strong');label.textContent='ASTRA FX LAB';panel.append(label);const status=document.createElement('output');status.textContent='Loading assets';panel.append(status);document.body.append(panel);
 await prepareCinematicFX(Object.keys(LEGENDARY_FX));
 sound=false;online.active=false;rb.active=false;mode='local';chosen=[1,0];reset();atHome=false;started=true;ended=false;paused=true;matchIntro.left=-1;
 let selected='shakti',phase='sky',last=performance.now();
 function select(key){selected=key;astraReset();const f=astraSpawn({owner:0,spell:key,castId:'lab',spiritCast:true},700,true);f.age=1;status.textContent=phase+' · '+ASTRAS[key].name;}
 for(const key of Object.keys(LEGENDARY_FX)){const b=document.createElement('button');b.textContent=ASTRAS[key].name;b.onclick=()=>select(key);panel.append(b);}
 for(const key of ['sky','ground','charge','flight','impact']){const b=document.createElement('button');b.textContent=key;b.onclick=()=>{phase=key;select(selected);};panel.append(b);}
 const quality=document.createElement('button');quality.textContent='Toggle low quality';quality.onclick=()=>options.vfxQuality=options.vfxQuality==='low'?'high':'low';panel.append(quality);
 const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;canvas.style='position:fixed;inset:110px 0 0;width:100vw;height:calc(100vh - 110px);object-fit:contain;z-index:999998;background:#111b24';document.body.append(canvas);const local=canvas.getContext('2d');select(selected);
 // Render the real effect functions with the real game context, then copy to the isolated review surface.
 const original=draw;draw=function(){ctx.drawImage(bg,0,0,W,H);if(phase==='sky')drawLegendarySky();else if(phase==='ground')for(const f of astraState.fields)drawLegendaryField({...f,sky:false,kind:ASTRA_PHASES[f.spell].fieldEffectId});else if(phase==='charge')drawLegendaryCharge({...players[0],x:700,selected,chargeAge:elapsed},0,.9);else if(phase==='flight')drawLegendaryProjectile({spell:selected,special:true,spiritCast:true,x:700,y:350,vx:700,vy:0,age:elapsed});else drawLegendaryImpact({spell:selected,x:700,y:400,spirit:true},elapsed%1.4);local.drawImage(ctx.canvas,0,0);};
 function step(now){const dt=Math.min(.05,(now-last)/1000);last=now;elapsed+=dt;for(const f of astraState.fields){f.age=1+(elapsed%3);f.duration=100;}requestAnimationFrame(step);}requestAnimationFrame(step);
})();
