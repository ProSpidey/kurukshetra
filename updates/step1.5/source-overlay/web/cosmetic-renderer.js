'use strict';
// Presentation-only material layer. Never writes to players, Fate state, inputs or physics.
const cosmeticFrames=new Map();
let cosmeticMaterial=null,cosmeticPattern=null;
function cosmeticLoadMaterial(){if(cosmeticMaterial)return;cosmeticMaterial=new Image();cosmeticMaterial.onload=()=>{const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d',{willReadFrequently:true});g.drawImage(cosmeticMaterial,0,0,64,64);cosmeticPattern=g.getImageData(0,0,64,64).data;cosmeticFrames.clear();};cosmeticMaterial.onerror=()=>{cosmeticPattern=null;};cosmeticMaterial.src='cosmetics/brocade.png';}
function cosmeticPlayerLoadout(p,seat){
 if(p.cosmeticPreview)return p.cosmeticPreview;
 if(typeof service==='undefined')return {};
 if(typeof online!=='undefined'&&online.active)return (service.connected?service.match?.cosmetics?.[seat]:online.cosmetics?.[seat])||{};
 // A local second player may use this account's inventory; AI opponents use defaults.
 if(seat===1&&typeof mode!=='undefined'&&mode==='ai')return {};
 const l=service.profile?.cosmeticLoadout||CosmeticCatalog.defaults(),id=CosmeticCatalog.characters[p.id];
 return {warriorSkin:l.warriorSkins[id],bowSkin:l.bowSkins[id],chariotSkin:l.chariotSkin};
}
function cosmeticColor(id,type){const c=CosmeticCatalog.byId[id];return c?.cosmeticType===type?c:null;}
function cosmeticFrame(image,rect,skin,bow,chariot){
 if(!skin&&!bow&&!chariot)return null;
 cosmeticLoadMaterial();if(!cosmeticPattern)return null; // Missing material always renders the original.
 const key=[image.src,...rect,skin?.cosmeticId,bow?.cosmeticId,chariot?.cosmeticId].join('|');if(cosmeticFrames.has(key))return cosmeticFrames.get(key);
 const c=document.createElement('canvas');c.width=Math.min(320,Math.ceil(rect[2]));c.height=Math.max(1,Math.round(c.width*rect[3]/rect[2]));
 const g=c.getContext('2d',{willReadFrequently:true});g.drawImage(image,...rect,0,0,c.width,c.height);
 try{const pixels=g.getImageData(0,0,c.width,c.height),d=pixels.data;
  const rgb=item=>item?[1,3,5].map(i=>parseInt(item.color.slice(i,i+2),16)):null,sc=rgb(skin),bc=rgb(bow),cc=rgb(chariot);
  for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++){
   const n=(y*c.width+x)*4;if(d[n+3]<16)continue;const u=x/c.width,v=y/c.height,r=d[n],green=d[n+1],b=d[n+2],max=Math.max(r,green,b),min=Math.min(r,green,b),sat=(max-min)/(max||1);
   // Registration and alpha remain untouched. Head, face, hair, Mani and upper-body state cues are excluded.
   const cloth=sc&&v>.28&&v<.94&&u<.72&&sat>.42&&(b>r*1.12||green>r*1.12||r>green*1.8&&r>b*1.6||r>green*1.35&&green>b*2&&sat>.82);
   // Ornament tint on the baked bow only; no added geometry, shifted grip or projectile origin.
   const weapon=bc&&u>.68&&v<.67&&((sat>.36&&r>green*1.1&&green>b*1.35)||(bow.characterId==='bhishma'&&sat<.36&&max>45));
   // Restrict carriage material to the lower body; horses and charioteers are outside this region.
   const carriage=cc&&u<.43&&v>.62&&sat>.25;
   const color=carriage?cc:weapon?bc:cloth?sc:null;if(!color)continue;
   const luminance=(.2126*r+.7152*green+.0722*b)/150,pattern=(cosmeticPattern[((y%64)*64+x%64)*4]/255)*.16+.92;
   for(let k=0;k<3;k++)d[n+k]=Math.min(255,color[k]*luminance*pattern);
  }g.putImageData(pixels,0,0);
 }catch{return null;}
 if(cosmeticFrames.size>=96)cosmeticFrames.delete(cosmeticFrames.keys().next().value);cosmeticFrames.set(key,c);return c;
}
function drawCosmeticSprite(p,image,sx,sy,sw,sh,x,y,w,h,kind='warrior'){
 const seat=typeof players!=='undefined'?players.indexOf(p):0,l=cosmeticPlayerLoadout(p,seat),hero=CosmeticCatalog.characters[p.id];
 let skin=kind==='warrior'?cosmeticColor(l.warriorSkin,'WARRIOR_SKIN'):null,bow=kind==='warrior'?cosmeticColor(l.bowSkin,'BOW_SKIN'):null,chariot=kind==='chariot'?cosmeticColor(l.chariotSkin,'CHARIOT_SKIN'):null;
 if(skin?.characterId!==hero)skin=null;if(bow?.characterId!==hero)bow=null;
 const material=cosmeticFrame(image,[sx,sy,sw,sh],skin,bow,chariot);
 if(material)ctx.drawImage(material,0,0,material.width,material.height,x,y,w,h);else ctx.drawImage(image,sx,sy,sw,sh,x,y,w,h);
}
function drawCosmeticWheel(p,image,rect,hubX,hubY,r,wr){
 const seat=players.indexOf(p),l=cosmeticPlayerLoadout(p,seat),c=cosmeticColor(l.chariotSkin,'CHARIOT_SKIN');
 const frame=cosmeticFrame(image,rect,null,null,c);
 if(frame){const scale=frame.width/rect[2];ctx.drawImage(frame,(hubX-r)*scale,(hubY-r)*scale,2*r*scale,2*r*scale,-wr,-wr,wr*2,wr*2);}
 else ctx.drawImage(image,rect[0]+hubX-r,rect[1]+hubY-r,2*r,2*r,-wr,-wr,wr*2,wr*2);
}
