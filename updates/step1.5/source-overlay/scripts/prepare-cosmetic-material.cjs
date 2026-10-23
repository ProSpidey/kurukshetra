// Deterministic delivery optimization of the generated source; no art regeneration.
const {createCanvas,loadImage}=require('@napi-rs/canvas');
const fs=require('node:fs');
(async()=>{
 const source='production/cosmetics/brocade-source.png';
 fs.mkdirSync('production/cosmetics',{recursive:true});
 if(!fs.existsSync(source))fs.copyFileSync('web/cosmetics/brocade.png',source);
 const image=await loadImage(source),canvas=createCanvas(256,256);
 canvas.getContext('2d').drawImage(image,0,0,256,256);
 fs.writeFileSync('web/cosmetics/brocade.png',canvas.toBuffer('image/png'));
 console.log('Delivery material:',fs.statSync('web/cosmetics/brocade.png').size,'bytes; original retained.');
})();
