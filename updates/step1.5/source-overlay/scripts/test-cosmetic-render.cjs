const {createCanvas,loadImage}=require('@napi-rs/canvas');
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
(async()=>{
 const material=await loadImage('web/cosmetics/brocade.png'),mc=createCanvas(64,64);mc.getContext('2d').drawImage(material,0,0,64,64);
 const s={document:{createElement:()=>createCanvas(1,1)},Image:class{},globalThis:null,Map,console,players:[],service:{},texture:mc.getContext('2d').getImageData(0,0,64,64).data};s.globalThis=s;vm.createContext(s);
 for(const file of ['cosmetic-catalog','cosmetic-renderer','fate-assets'])vm.runInContext(fs.readFileSync('web/'+file+'.js','utf8'),s);
 vm.runInContext('cosmeticMaterial={};cosmeticPattern=texture;',s);
 const cache=new Map(),get=async src=>{if(!cache.has(src)){const im=await loadImage('web/'+src);cache.set(src,im);}return cache.get(src);};
 const c=s.CosmeticCatalog,stats=[];
 for(let i=0;i<8;i++){
  const hero=c.characters[i],sheet=await get(i<4?'warriors.png':'warriors-extra.png'),cell=sheet.width/4;
  const skin=c.items.find(c=>c.characterId===hero&&c.cosmeticType==='WARRIOR_SKIN'),bow=c.items.find(c=>c.characterId===hero&&c.cosmeticType==='BOW_SKIN');
  for(const [type,item] of [['skin',skin],['bow',bow]]){
   let changedTotal=0;
   for(let pose=0;pose<4;pose++){
    s.im=sheet;s.rect=[pose*cell,i%4*cell,cell,cell];s.skin=type==='skin'?item:null;s.bow=type==='bow'?item:null;
    const frame=vm.runInContext('cosmeticFrame(im,rect,skin,bow,null)',s);assert(frame);
    const original=createCanvas(frame.width,frame.height),og=original.getContext('2d');og.drawImage(sheet,...s.rect,0,0,frame.width,frame.height);
    const a=og.getImageData(0,0,frame.width,frame.height).data,b=frame.getContext('2d').getImageData(0,0,frame.width,frame.height).data;let changed=0;
    for(let n=0;n<a.length;n+=4){assert.equal(a[n+3],b[n+3],'alpha / silhouette changed');const differs=a[n]!==b[n]||a[n+1]!==b[n+1]||a[n+2]!==b[n+2];if(differs)changed++;if(type==='skin'&&Math.floor(n/4/frame.width)/frame.height<=.28)assert(!differs,'head region changed');}
    assert(changed>20,`${hero} ${type} pose ${pose}: material not visible (${changed} pixels)`);changedTotal+=changed;
   }stats.push(`${hero} ${type}: ${changedTotal} pixels across 4 poses`);
  }
 }
 const before=vm.runInContext('cosmeticFrames.size',s);assert(before<=96);
 assert.equal(vm.runInContext('cosmeticPattern=null;cosmeticFrame(im,rect,skin,bow,null)',s),null,'missing material must fall back');
 console.log(stats.join('\n'));console.log('PASS all 8 skin/bow variants across 4 combat poses, original head region for skins, alpha/silhouette equality, bounded cache and missing-material fallback.');
})().catch(e=>{console.error(e);process.exitCode=1;});

