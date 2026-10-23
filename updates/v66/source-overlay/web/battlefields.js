'use strict';
// Visual scenery only. Never participates in physics, rollback state or the referee.
(function(root){
 const entries=[
  ['kurukshetra','Kurukshetra','The original battlefield of the great war.'],
  ['indraprastha','Indra Prastha','The Pandavas’ royal city — a palace training courtyard.'],
  ['hastinapur','Hastinapur Arena','Rangabhumi, inspired by the princes’ exhibition of arms.'],
  ['forest','Forest Ground','A clearing in Kamyaka, the forest of the Pandavas’ exile.'],
  ['virat','Virat War','The Matsya plains, inspired by the cattle-rescue battle.'],
  ['panchala','Panchala Courtyard','Kampilya’s ceremonial archery grounds.'],
  ['dwaitavana','Dwaitavana Lake','A forest lakeshore from the exile narrative.']
 ].map(([id,name,description])=>Object.freeze({id,name,description,src:id==='kurukshetra'?'battlefield.jpg':`battlefields/${id}.webp`,thumbnail:id==='kurukshetra'?'battlefield.jpg':`battlefields/${id}-thumb.webp`,paired:id!=='kurukshetra'}));
 const byId=Object.freeze(Object.fromEntries(entries.map(x=>[x.id,x]))),images=new Map();
 let preferred='kurukshetra';try{const saved=localStorage.getItem('astra-battlefield');if(Object.hasOwn(byId,saved))preferred=saved;}catch{}
 const api={
  entries,byId,preferred,activeId:'kurukshetra',error:'',
  valid:id=>typeof id==='string'&&Object.hasOwn(byId,id),
  choose(id){if(!this.valid(id))return false;this.preferred=id;try{localStorage.setItem('astra-battlefield',id);}catch{}this.activate(id);return true;},
  activate(id){this.activeId=this.valid(id)?id:'kurukshetra';this.error='';return this.load(this.activeId);},
  async load(id){
   if(!this.valid(id))return false;if(images.has(id))return images.get(id).promise;
   const image=new Image(),entry={image,ready:false,promise:null};
   entry.promise=new Promise(resolve=>{const timer=setTimeout(()=>image.onerror(),10000);image.onload=()=>{clearTimeout(timer);entry.ready=true;resolve(true);};image.onerror=()=>{clearTimeout(timer);images.delete(id);if(this.activeId===id)this.error='This battlefield could not load. Kurukshetra will be used.';resolve(false);};});
   images.set(id,entry);image.src=byId[id].src;
   // Keep the selected stage and at most one recent preview decoded.
   for(const key of images.keys())if(images.size>2&&key!==id&&key!==this.activeId)images.delete(key);
   return entry.promise;
  },
  async prepare(){const id=this.activeId;if(!await this.load(id)&&this.activeId===id){this.activeId='kurukshetra';await this.load('kurukshetra');}},
  draw(g,damaged,w,h,id=this.activeId){
   const e=images.get(id);if(!e?.ready)return false;const im=e.image,c=byId[id],sh=c.paired?im.naturalHeight/2:im.naturalHeight;
   g.save();
   if(id!=='kurukshetra'&&'filter' in g)g.filter='brightness(0.8) contrast(0.86) saturate(0.82)';
   g.drawImage(im,0,c.paired&&damaged?sh:0,im.naturalWidth,sh,0,0,w,h);
   if('filter' in g)g.filter='none';
   if(id!=='kurukshetra'){
    g.globalCompositeOperation='multiply';
    g.fillStyle='rgba(57,36,24,.13)';g.fillRect(0,0,w,h);
    const top=g.createLinearGradient(0,0,0,h*.68);top.addColorStop(0,'rgba(10,14,20,.24)');top.addColorStop(.52,'rgba(15,11,8,.08)');top.addColorStop(1,'rgba(0,0,0,0)');
    g.fillStyle=top;g.fillRect(0,0,w,h);
    const bottom=g.createLinearGradient(0,h*.38,0,h);bottom.addColorStop(0,'rgba(0,0,0,0)');bottom.addColorStop(1,'rgba(8,10,14,.26)');
    g.fillStyle=bottom;g.fillRect(0,0,w,h);
    const edge=g.createRadialGradient(w*.5,h*.56,Math.min(w,h)*.12,w*.5,h*.56,Math.max(w,h)*.72);edge.addColorStop(0,'rgba(255,255,255,0)');edge.addColorStop(.72,'rgba(25,17,12,.04)');edge.addColorStop(1,'rgba(12,9,7,.18)');
    g.fillStyle=edge;g.fillRect(0,0,w,h);
    g.globalCompositeOperation='source-over';
    const mist=g.createLinearGradient(0,h*.46,0,h*.82);mist.addColorStop(0,'rgba(236,190,120,.06)');mist.addColorStop(.5,'rgba(214,162,98,.04)');mist.addColorStop(1,'rgba(214,162,98,0)');
    g.fillStyle=mist;g.fillRect(0,0,w,h);
   }
   g.restore();
   return true;
  },
  customAftermath(){return this.activeId!=='kurukshetra'&&!!images.get(this.activeId)?.ready;}
 };
 root.Battlefields=api;
})(globalThis);
