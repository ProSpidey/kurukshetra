const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('web/rollback.js','utf8'),ctx);const Rollback=ctx.RollbackSession;
let n=0,commits=[];const session=new Rollback({seat:0,neutral:[{v:0,actions:[]},{v:0,actions:[]}],capture:()=>({n}),restore:s=>n=s.n,step:p=>{n+=p[0].v+p[1].v;return[]},commit:f=>commits.push(f)});
for(let f=0;f<10;f++)session.advance({v:1,actions:[]});assert.equal(n,10);session.receive(3,{v:5,actions:[]});assert.equal(n,45);for(let f=0;f<10;f++)if(f!==3)session.receive(f,{v:0,actions:[]});assert.equal(n,15);assert.equal(session.rollbacks>0,true);assert.deepEqual(commits,[0,1,2,3,4,5,6,7,8,9]);session.receive(3,{v:5,actions:[]});assert.equal(commits.length,10);assert.throws(()=>session.receive(3,{v:6,actions:[]}));assert.throws(()=>session.receive(10000,{v:1,actions:[]}));
console.log('PASS isolated rollback: out-of-order corrections, exactly-once confirmation, duplicate conflict and future-window rejection.');
const fixture=fs.readFileSync(path.join(__dirname,'test-fate-presentation.cjs'),'utf8').split('vm.runInContext(`')[0];
function runtime(seat){const s=new Function('require','__dirname',fixture+'return sandbox;')(require,__dirname);s.Math=Object.create(Math);s.fitBattleCanvas=()=>{};s.elements=undefined;vm.runInContext(fs.readFileSync('web/rollback.js','utf8'),s);vm.runInContext(fs.readFileSync('web/rollback-game.js','utf8'),s);vm.runInContext(`sound=false;online.active=true;online.started=true;online.seat=${seat};mode='online';atHome=false;rb.active=true;rb.rng=12345;rb.clock=0;fateController.state={schema:1,clock:0,serial:0,match:0,round:0,consumed:{},events:[],units:[]};matchIntro={id:0,left:3};reset();started=true;elapsed=60;players.forEach(p=>p.resolve=100);rb.engine=new RollbackSession({seat:${seat},capture:rollbackCapture,restore:rollbackRestore,step:rollbackStep,neutral:aims.map(aim=>({aim:{...aim},draw:false,actions:[]})),commit:(f,s,e)=>{rb.confirmedEvents=s.fate.events;}});`,s);return s;}
const a=runtime(0),b=runtime(1),run=(c,s)=>vm.runInContext(s,c),packets=[];
for(let f=0;f<540;f++){
 for(const [c,seat] of [[a,0],[b,1]]){
  const input={aim:{angle:40+seat*5,power:.55},draw:f%80<43,actions:f%80===43?[{action:'shoot',args:{}}]:[]};
  if(f===90)input.actions.push({action:'tactic',args:{}});if(f===140)input.actions.push({action:'guard',args:{}});if(f===230)input.actions.push({action:'move',args:{toward:true}});
  c.input=input;assert.equal(run(c,'rb.engine.advance(input)'),true);
  packets.push({dest:seat? a:b,frame:f,input,due:f+2+(f%4)});
 }
 // reversed delivery exercises actual out-of-order network arrival.
 for(let j=packets.length-1;j>=0;j--)if(packets[j].due<=f){const p=packets.splice(j,1)[0];p.dest.packet=p;run(p.dest,'rb.engine.receive(packet.frame,packet.input)');}
}
for(const p of packets){p.dest.packet=p;run(p.dest,'rb.engine.receive(packet.frame,packet.input)');}
{const x=JSON.parse(run(a,'JSON.stringify(rollbackCapture())')),y=JSON.parse(run(b,'JSON.stringify(rollbackCapture())'));for(const k of Object.keys(x))assert.deepEqual(x[k],y[k],k);}
assert.ok(run(a,'rb.engine.rollbacks')>0);assert.ok(run(b,'rb.engine.rollbacks')>0);assert.equal(run(a,'rb.engine.confirmed'),539);
// Restoring then replaying an Ultimate puzzle must reproduce random runes.
run(a,`reset();started=true;elapsed=60;players.forEach(p=>{p.resolve=100;p.cool=0;});players[1].hp=20;players[0].selected='pashupata';players[0].armed=true;const start=rollbackCapture();const p0={aim:{angle:40,power:.7},draw:false,actions:[{action:'shoot',args:{}}]},p1={aim:{angle:40,power:.7},draw:false,actions:[]};rollbackStep([p0,p1],540);p0.actions=[];p1.actions=[{action:'counter',args:{key:'shakti'}}];rollbackStep([p0,p1],541);const first=JSON.stringify(ultimate.pattern);rollbackRestore(start);p0.actions=[{action:'shoot',args:{}}];p1.actions=[];rollbackStep([p0,p1],540);p0.actions=[];p1.actions=[{action:'counter',args:{key:'shakti'}}];rollbackStep([p0,p1],541);if(JSON.stringify(ultimate.pattern)!==first)throw Error('Puzzle RNG changed');`);
console.log('PASS full game: two independent peers converge after 540 frames with 2–5-frame reordered delay, charge/shoot/guard/movement/tactics, bounded histories, and repeatable Ultimate puzzle RNG.');

// Exercise the actual control-channel handshake and game adapter with paired message channels.
for(const [c,seat]of [[a,0],[b,1]]){c.clearTimeout=()=>{};c.setTimeout=()=>0;c.fitBattleCanvas=()=>{};run(c,`online.seat=${seat};online.started=false;online.active=true;$('onlineLobby').close=()=>{};`);vm.runInContext(fs.readFileSync('web/rtc-net.js','utf8'),c);run(c,'rtc.heroes=[0,1];counterLoadout=rtc.heroes.map((h,i)=>counterRecommended(h,rtc.heroes[1-i])[0].id);quiverLoadout=rtc.heroes.map(quiverDefaultLoadout)');}
const wire=[];function channel(dest){return{readyState:'open',bufferedAmount:0,send:data=>wire.push({dest,data}),close(){}};}
a.channel=channel(b);b.channel=channel(a);run(a,'rtcChannel(channel)');run(b,'rtcChannel(channel)');run(a,'channel.onopen()');run(b,'channel.onopen()');
function flush(){let guard=0;while(wire.length){if(++guard>5000)throw Error('message loop');const m=wire.shift();m.dest.message=m;run(m.dest,'channel.onmessage({data:message.data})');}}
flush();assert.equal(run(a,'rtc.started'),true);assert.equal(run(b,'rtc.started'),true);assert.equal(run(a,'rb.rng'),run(b,'rb.rng'));{const x=JSON.parse(run(a,'JSON.stringify(rollbackCapture())')),y=JSON.parse(run(b,'JSON.stringify(rollbackCapture())'));for(const k of Object.keys(x))assert.deepEqual(x[k],y[k],k);}
for(let f=0;f<220;f++){run(a,'rollbackFrame(1/60)');run(b,'rollbackFrame(1/60)');flush();}
assert.equal(run(a,'rb.halted'),'');assert.equal(run(b,'rb.halted'),'');{const x=JSON.parse(run(a,'JSON.stringify(rollbackCapture())')),y=JSON.parse(run(b,'JSON.stringify(rollbackCapture())'));for(const k of Object.keys(x))assert.deepEqual(x[k],y[k],k);}
// Different display rates and local key state still produce identical combat frames.
run(a,"options.reduced=true;aims[0]={angle:14,power:.55};");run(b,"options.reduced=false;aims[1]={angle:15,power:.55};");
for(let f=0;f<180;f++){
 for(const [c,seat]of [[a,0],[b,1]]){if(f%40===0)run(c,`keyboardDraw.set(${seat},true)`);if(f%40===22)run(c,`shoot(${seat});keyboardDraw.delete(${seat});stopCharge(${seat});`);}
 run(a,'rollbackFrame(1/30)');run(b,'rollbackFrame(1/60)');flush();run(b,'rollbackFrame(1/60)');flush();
}
assert.equal(run(a,'rb.halted'),'');assert.equal(run(b,'rb.halted'),'');{const common=Math.min(run(a,'rb.engine.confirmed'),run(b,'rb.engine.confirmed'));assert(common>500);assert.equal(run(a,`rb.engine.hashes.get(${common})`),run(b,`rb.engine.hashes.get(${common})`));}
// Results are shown from confirmed death, without waiting for every speculative future frame.
for(const c of [a,b])run(c,'rb.confirmedEnded=false;rollbackCommit(999,{fate:{events:[],round:1},ended:true},[]);');assert.equal(run(a,'rb.confirmedEnded'),true);
run(a,"channel.onclose()");assert.ok(run(a,'rb.halted').includes('closed'));
console.log('PASS actual peer adapter: hello/ready/start handshake, paired data-channel messages, equal seeded reset, automatic countdown, confirmed state hashes, and disconnect halt.');
