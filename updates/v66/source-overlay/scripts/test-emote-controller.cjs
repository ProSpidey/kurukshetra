'use strict';
// No browser dependency: controlled DOM stub checks client emote boundaries and HUD anchor.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map(),listeners=new Map(),intervals=[];
class FakeElement{
 constructor(tag='div',id=''){this.tagName=tag.toUpperCase();this.id=id;this.attrs={};this.dataset={};this.children=[];this.hidden=false;this.open=false;this.disabled=false;this.style={};this.classList={contains:(name)=>name==='hidden'&&this.hidden};this.textContent='';this.innerHTML='';this.listeners=new Map();}
 setAttribute(name,value){this.attrs[name]=String(value)}getAttribute(name){return this.attrs[name]}
 append(el){this.children.push(el);if(el.id)elements.set(el.id,el)}
 addEventListener(name,fn){this.listeners.set(name,fn)}
 querySelectorAll(){return []}
 contains(el){return el===this||this.children.includes(el)}
 close(){this.open=false;this.listeners.get('close')?.()}
 show(){this.open=true}
 getBoundingClientRect(){return {left:Number.parseFloat(this.style.left)||0,top:Number.parseFloat(this.style.top)||0,right:(Number.parseFloat(this.style.left)||0)+54,width:54,height:54,bottom:(Number.parseFloat(this.style.top)||0)+54}}
 getContext(){return {clearRect(){},save(){},restore(){},drawImage(){}}}
}
const root=new FakeElement('body'),main=new FakeElement('main'),arena=new FakeElement('canvas');
main.hidden=false;
arena.getBoundingClientRect=()=>({left:0,top:0,right:1600,bottom:750,width:1600,height:750});
const hud=new FakeElement('div');hud.getBoundingClientRect=()=>({top:0,bottom:122});
let now=10000;const requests=[];
const service={profile:{cosmeticLoadout:{emotes:['emote_salute','emote_respect',null,null],hideOpponentEmotes:false}},connected:null,match:null};
const online={active:false,seat:0,started:false};
const s={console,Date,Map,Math,Number,Promise,Image:class{set src(_){queueMicrotask(()=>this.onload())}},performance:{now:()=>now},innerWidth:1600,innerHeight:750,window:{addEventListener(){}},canvas:arena,players:[{x:220,y:540},{x:1160,y:540}],W:1400,H:680,options:{reduced:false},online,service,atHome:false,ended:false,
 document:{body:root,hidden:false,createElement:tag=>new FakeElement(tag),getElementById:id=>elements.get(id)||(id==='emoteClose'?new FakeElement('button','emoteClose'):null),querySelector(selector){if(selector==='main')return main;if(selector==='.battle .hud')return hud;if(selector.startsWith('dialog[open]'))return null;return null},addEventListener(name,fn){listeners.set(name,fn)}},
 requestAnimationFrame(){},setInterval(fn){intervals.push(fn)},serviceAPI:async(path,data)=>{requests.push({path,data});return {triggeredAt:Date.now(),match:service.match}},matchup:{seat:0}};
vm.createContext(s);
for(const f of ['cosmetic-catalog','emote-controller'])vm.runInContext(fs.readFileSync('web/'+f+'.js','utf8'),s);
const run=code=>vm.runInContext(code,s);
const button=elements.get('battleEmoteButton');assert(button&&!button.hidden,'persistent button visible in combat');
assert.equal(Math.round(Number.parseFloat(button.style.left)),72,'button centered near marked x=99');
assert.equal(Math.round(Number.parseFloat(button.style.top)),183,'button centered near marked y=210');
assert.equal(button.getAttribute('aria-haspopup'),'dialog');
(async()=>{
 assert(run('EmoteController.allowed()'),'offline active combat permits emotes');
 run('emoteOpen()');assert(elements.get('emoteWheel').open,'picker opens nonmodally');assert.equal(button.getAttribute('aria-expanded'),'true');run('emoteClose()');
 await run('EmoteController.trigger(0)');assert.equal(run('EmoteController.events[0].id'),'emote_salute');
 await assert.rejects(run('EmoteController.trigger(0)'),/wait/);
 now+=5000;await run('EmoteController.trigger(1)');assert.equal(run('EmoteController.events[0].id'),'emote_respect');
 s.atHome=true;assert.equal(run('EmoteController.allowed()'),false,'home menu disallows combat emotes');s.atHome=false;
 online.active=true;service.connected='match123';service.match={status:'active',emotes:[],cosmetics:[{emotes:['emote_salute','emote_respect',null,null]},{emotes:[]}]};
 assert.equal(run('EmoteController.allowed()'),true,'online active combat permits emotes');
 await intervals[0]();assert.equal(requests[0].path,'match/status','online polling remains out-of-band during combat');
 now+=5000;await run('EmoteController.trigger(0)');assert.equal(requests[1].path,'match/emote','active-combat emote sent to service');
 service.profile.cosmeticLoadout.hideOpponentEmotes=true;run("EmoteController.show(1,'emote_salute',1234)");assert.equal(run('EmoteController.events[1]'),null);
 service.profile.cosmeticLoadout.hideOpponentEmotes=false;run("EmoteController.show(1,'emote_salute',1234)");assert(run('!!EmoteController.events[1]'));
 const started=run('EmoteController.events[1].start');now+=100;run("EmoteController.show(1,'emote_salute',1234)");assert.equal(run('EmoteController.events[1].start'),started);
 service.match.status='complete';assert(run('EmoteController.allowed()'),'emotes remain usable after combat');
 service.match.status='cancelled';assert(!run('EmoteController.allowed()'),'cancelled match not allowed');
 console.log('PASS compact HUD anchor, nonmodal picker, offline combat, online combat, server signal, 5s cooldown, privacy, dedup, end states.');
})().catch(e=>{console.error(e);process.exitCode=1});
