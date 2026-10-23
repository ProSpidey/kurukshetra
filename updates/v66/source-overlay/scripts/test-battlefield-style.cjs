'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const s={console,Math,Object,Map,Promise,setTimeout:fn=>1,clearTimeout(){},localStorage:{getItem:()=>null,setItem(){}},Image:class{naturalWidth=1400;naturalHeight=1254;set src(_){queueMicrotask(()=>this.onload())}}};
vm.createContext(s);vm.runInContext(fs.readFileSync('web/battlefields.js','utf8'),s);
const battle=s.Battlefields;
function graphic(){const ctx={calls:[],filter:'none',globalCompositeOperation:'source-over',save(){this.calls.push('save')},restore(){this.calls.push('restore')},drawImage(...args){this.calls.push(['image',...args])},fillRect(){this.calls.push('rect')},createLinearGradient(){return {addColorStop(){}}},createRadialGradient(){return {addColorStop(){}}}};return ctx}
(async()=>{
 assert.equal(battle.entries.length,7);assert.equal(battle.choose('../bad'),false);
 for(const {id,paired} of battle.entries){
  await battle.activate(id);const ctx=graphic();assert(battle.draw(ctx,false,1400,680));assert(battle.draw(ctx,true,1400,680));
  const images=ctx.calls.filter(v=>Array.isArray(v)&&v[0]==='image');assert.equal(images.length,2);assert.equal(images[1][3],paired?627:0);
  if(paired)assert(ctx.calls.filter(v=>v==='rect').length>=8,'atmospheric layers present for '+id);
  else assert(!ctx.calls.includes('rect'),'default background preserved');
  assert.equal(battle.customAftermath(),paired);
 }
 for(const id of ['indraprastha','hastinapur','forest','virat','panchala','dwaitavana']){
  for(const suffix of ['', '-thumb'])assert(fs.existsSync('web/battlefields/'+id+suffix+'.webp'),'missing stage image');
 }
 console.log('PASS 7 stage entries, 6 alternate stage treatments, original background preserved, intact/damaged crop and stage assets.');
})().catch(e=>{console.error(e);process.exitCode=1});
