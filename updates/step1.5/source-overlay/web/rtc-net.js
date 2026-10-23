'use strict';
const rtc={pc:null,channel:null,timer:null,busy:false,cursor:0,outbox:[],ice:[],heroes:null,seed:0,session:'',hello:false,initialized:false,started:false,lastMessage:0,error:'',openAt:0,generation:0};
function rtcCanSend(){return rtc.channel?.readyState==='open'&&rtc.channel.bufferedAmount<262144&&rtc.started;}
function rtcSend(message){
 if(rtc.channel?.readyState!=='open'||rtc.channel.bufferedAmount>262144)return false;
 const packet={...message,session:rtc.session,protocol:ONLINE_PROTOCOL};
 // Coalesce unsent inputs only. Never mutate an in-flight/retried request.
 if(rtc.transport==='relay'&&message.type==='inputs'){
  const tail=rtc.relayQueue.at(-1);
  if(tail&&!tail.inFlight&&tail.inputPacket&&tail.inputPacket.frames.length+message.frames.length<=48){
   const merged={...tail.inputPacket,frames:[...tail.inputPacket.frames,...message.frames]},data=JSON.stringify(merged);
   if(data.length<=12000){tail.inputPacket=merged;tail.data=data;return true;}
  }
  rtc.relayQueue.push({nonce:crypto.randomUUID(),data:JSON.stringify(packet),inputPacket:packet});return true;
 }
 rtc.channel.send(JSON.stringify(packet));return true;
}
function rtcSignal(signal){rtc.outbox.push({nonce:crypto.randomUUID(),signal});}
function rtcFail(message,recover=true){
 if(rtc.error)return;rtc.error=message;
 if(typeof matchupVisible==='function'&&matchupVisible()){$('selectStatus').textContent=message;$('versusStatus').textContent=message;}
 if(rb.active)rb.halted=message;renderOnlineStatus(message);$('onlineMessage').textContent=message;
 if(typeof service!=='undefined'&&service.connected&&!service.reconnecting){
  if(!recover||(service.connectionRetries||0)>=2){serviceConnectionFailed(message+' Please search again.');return;}
  service.connectionRetries=(service.connectionRetries||0)+1;
  clearTimeout(rtc.reconnectTimer);rtc.reconnectTimer=setTimeout(()=>{if(service.connected)serviceReconnect(true);},1200);
 }
}
function rtcClose(){if(typeof matchupLobbyReset==='function')matchupLobbyReset();rtc.generation++;clearTimeout(rtc.timer);clearTimeout(rtc.reconnectTimer);clearTimeout(rtc.disconnectTimer);rtc.transport='direct';rtc.relayQueue=[];rtc.relayCursor=0;clearTimeout(rtc.fallbackTimer);clearTimeout(rtc.connectTimer);rtc.started=false;rtc.initialized=false;rtc.hello=false;rtc.busy=false;rtc.outbox=[];rtc.ice=[];rtc.cursor=0;rtc.session='';if(rtc.channel){rtc.channel.onclose=null;rtc.channel.close();}if(rtc.pc){rtc.pc.onconnectionstatechange=null;rtc.pc.onicecandidate=null;rtc.pc.ondatachannel=null;rtc.pc.close();}rtc.pc=null;rtc.channel=null;if(typeof rb!=='undefined'){rb.active=false;rb.engine=null;rb.actions=[];} }
function rtcChannel(channel){const generation=rtc.generation;rtc.channel=channel;channel.onopen=()=>{if(generation!==rtc.generation)return;rtc.lastMessage=Date.now();rtc.openAt=Date.now();clearTimeout(rtc.fallbackTimer);clearTimeout(rtc.connectTimer);if(online.seat===0){rtc.session=typeof service!=='undefined'&&service.connected?service.connected+':'+service.epoch:crypto.randomUUID();rtc.seed=typeof service!=='undefined'&&service.match?service.match.seed:crypto.getRandomValues(new Uint32Array(1))[0]||1;if(typeof service!=='undefined'&&service.resume){rtcSend({type:'hello',heroes:rtc.heroes,seed:rtc.seed,counters:counterLoadout,quivers:typeof quiverLoadout==='undefined'?null:quiverLoadout});return;}if(typeof matchupHostHello==='function')matchupHostHello();else rtcSend({type:'hello',heroes:rtc.heroes,seed:rtc.seed,counters:typeof counterLoadout==='undefined'?null:counterLoadout,quivers:typeof quiverLoadout==='undefined'?null:quiverLoadout});}};
 channel.onmessage=async e=>{if(generation!==rtc.generation)return;if(typeof e.data!=='string'||e.data.length>12000)return rtcFail('Invalid peer packet. Reconnect to this match.');try{const m=JSON.parse(e.data);if(m.protocol!==ONLINE_PROTOCOL)throw Error('Both players must update the game.');if(typeof service!=='undefined'&&service.match&&['hello','select-hello'].includes(m.type)&&(m.seed!==service.match.seed||m.session!==service.connected+':'+service.epoch))throw Error('Match session does not match server assignment.');rtc.lastMessage=Date.now();if(typeof matchupReceive==='function'&&matchupReceive(m))return;
  if(m.type==='hello'&&online.seat===1&&!rtc.initialized){if(typeof m.session!=='string'||m.session.length>60||!Number.isInteger(m.seed)||!Array.isArray(m.heroes)||m.heroes.length!==2||m.heroes.some((h,i)=>h!==rtc.heroes[i]))throw Error('Invalid match handshake');if(typeof counterEligible==='function'){if(!Array.isArray(m.counters)||m.counters.length!==2||m.counters.some((id,i)=>!counterEligible(m.heroes[i],id))||m.counters[1]!==counterLoadout[1])throw Error('Invalid Counter loadout handshake');counterLoadout=[...m.counters];}if(typeof quiverValidLoadout==='function'){if(!Array.isArray(m.quivers)||m.quivers.length!==2||m.quivers.some((q,i)=>!quiverValidLoadout(m.heroes[i],q))||JSON.stringify(m.quivers[1])!==JSON.stringify(quiverLoadout[1]))throw Error('Invalid tactical quiver handshake');quiverLoadout=m.quivers.map(q=>[...q]);}rtc.session=m.session;rtc.seed=m.seed;rtc.initialized=true;if(typeof serviceRegisterLoadout==='function'&&await serviceRegisterLoadout()===false)return;if(generation!==rtc.generation)return;rollbackInitialize(m.heroes,m.seed);if(typeof serviceRestore==='function')serviceRestore();rtcSend({type:'ready'});return;}
  if(m.session!==rtc.session)return;
  if(m.type==='ready'&&online.seat===0&&!rtc.initialized){rtc.initialized=true;if(typeof serviceRegisterLoadout==='function'&&await serviceRegisterLoadout()===false)return;if(generation!==rtc.generation)return;rollbackInitialize(rtc.heroes,rtc.seed);if(typeof serviceRestore==='function')serviceRestore();rtcSend({type:'start'});rtc.started=true;clearTimeout(rtc.timer);if(typeof matchupMatchStarted==='function')matchupMatchStarted();return;}
  if(m.type==='start'&&online.seat===1&&!rtc.started){rtc.started=true;clearTimeout(rtc.timer);if(typeof matchupMatchStarted==='function')matchupMatchStarted();return;}
  // Reliable unordered transport can deliver input before start; the initialized engine accepts it.
  if(rtc.initialized&&(['input','inputs','hash','repair-request','repair-chunk','repair-ack'].includes(m.type)))rollbackReceive(m);
 }catch(error){rtcFail(error.message||'Peer input failed. Reconnect to this match.');}};
 channel.onclose=()=>generation===rtc.generation&&rtcFail('Peer connection closed. Reconnecting to this match…');channel.onerror=()=>generation===rtc.generation&&rtcFail('Peer connection failed. Reconnecting to this match…');
}
async function rtcDescription(signal){const pc=rtc.pc,generation=rtc.generation;if(signal.type==='offer'&&online.seat===1){if(pc.remoteDescription)return;await pc.setRemoteDescription({type:'offer',sdp:signal.sdp});await pc.setLocalDescription(await pc.createAnswer());if(generation!==rtc.generation)return;rtcSignal({type:'answer',sdp:pc.localDescription.sdp});}
 else if(signal.type==='answer'&&online.seat===0&&!pc.remoteDescription)await pc.setRemoteDescription({type:'answer',sdp:signal.sdp});
 else if(signal.type==='ice'){if(!pc.remoteDescription){rtc.ice.push(signal.candidate);return;}await pc.addIceCandidate(signal.candidate);}
 if(generation!==rtc.generation)return;if(pc.remoteDescription)while(rtc.ice.length)await pc.addIceCandidate(rtc.ice.shift());
}
async function rtcPoll(){if(!online.active||rtc.busy||rtc.started||rtc.transport==='relay')return;rtc.busy=true;const generation=rtc.generation,batch=rtc.outbox.slice(0,32);try{
 const data=await roomAPI('signal',{code:online.code,cursor:rtc.cursor,messages:batch});if(generation!==rtc.generation||!online.active||rtc.transport==='relay')return;
 if(typeof service==='undefined'||!service.connected)online.cosmetics=data.cosmetics;
 if(!(typeof matchupLobby!=='undefined'&&matchupLobby.active))rtc.heroes=typeof service!=='undefined'&&service.resume?service.resume.heroes.map(p=>p.hero):data.heroes;rtc.outbox=rtc.outbox.filter(x=>!batch.some(b=>b.nonce===x.nonce));
 if(data.relay){rtcUseRelay();return;}
 if(!rtc.pc){rtc.pc=new RTCPeerConnection({iceServers:data.iceServers});rtc.pc.onicecandidate=e=>{if(e.candidate)rtcSignal({type:'ice',candidate:e.candidate.toJSON()});};rtc.pc.ondatachannel=e=>{if(online.seat===1&&!rtc.channel)rtcChannel(e.channel);};rtc.pc.onconnectionstatechange=()=>{clearTimeout(rtc.disconnectTimer);if(rtc.pc?.connectionState==='failed')rtcUseRelay();else if(rtc.pc?.connectionState==='disconnected')rtc.disconnectTimer=setTimeout(()=>{if(generation===rtc.generation&&rtc.pc?.connectionState==='disconnected')rtcFail('Connection interrupted · restoring your match…');},3000);};if(online.seat===0){rtcChannel(rtc.pc.createDataChannel('kurukshetra-inputs',{ordered:false}));await rtc.pc.setLocalDescription(await rtc.pc.createOffer());rtcSignal({type:'offer',sdp:rtc.pc.localDescription.sdp});}}
 for(const item of data.messages)await rtcDescription(item.signal);rtc.cursor=data.cursor;
 $('onlineMessage').textContent=data.guestPresent?'Connecting directly to your opponent…':'Waiting for opponent…';
 }catch(error){if(generation===rtc.generation){if(error.code==='EPOCH_MISMATCH'&&typeof service!=='undefined'&&service.connected){await serviceReconnect(false);}else if(error.terminal)rtcFail(error.message||'Signaling unavailable.',false);else{$('onlineMessage').textContent='Connection interrupted · retrying…';renderOnlineStatus('CONNECTING · Retrying signaling');}}}finally{if(generation===rtc.generation){rtc.busy=false;if(online.active&&!rtc.started&&!rtc.error&&rtc.transport!=='relay')rtc.timer=setTimeout(rtcPoll,500);}}
}
function rtcBegin(){rtcClose();rtc.error='';rtc.openAt=Date.now();const generation=rtc.generation;rtc.connectTimer=setTimeout(()=>{if(generation===rtc.generation&&rtc.channel?.readyState!=='open')rtcFail('Could not connect to your opponent within 45 seconds.',false);},45000);rtc.fallbackTimer=setTimeout(()=>{if(generation===rtc.generation&&rtc.channel?.readyState!=='open')rtcUseRelay();},10000);if(typeof RTCPeerConnection==='undefined'){rtcUseRelay();return;}rtcPoll();}

// HTTPS fallback for mobile networks where a direct RTC path cannot be formed.
// Uses the same handshake, local prediction, rollback, and referee validation.
function rtcUseRelay(){
 if(!online.active||rtc.transport==='relay'||rtc.channel?.readyState==='open')return;
 clearTimeout(rtc.timer);clearTimeout(rtc.fallbackTimer);rtc.transport='relay';rtc.error='';rtc.relayQueue=[];rtc.relayCursor=0;
 if(rtc.pc){rtc.pc.onconnectionstatechange=null;rtc.pc.onicecandidate=null;rtc.pc.ondatachannel=null;rtc.pc.close();rtc.pc=null;}
 if(rtc.channel){rtc.channel.onclose=null;rtc.channel.onerror=null;rtc.channel.close();}
 rtc.channel=null;rtc.outbox=[];rtc.relayPolling=false;rtc.relayGood=Date.now();rtcRelayPoll();
}
async function rtcRelayPoll(){
 if(!online.active||rtc.transport!=='relay'||rtc.relayPolling||rtc.error)return;
 rtc.relayPolling=true;const generation=rtc.generation,batch=rtc.relayQueue.slice(0,8),sentAt=Date.now();for(const p of batch)p.inFlight=true;
 try{
  const data=await roomAPI('relay',{code:online.code,cursor:rtc.relayCursor,packets:batch.map(({nonce,data})=>({nonce,data}))});if(typeof service==='undefined'||!service.connected)online.cosmetics=data.cosmetics;
  if(generation!==rtc.generation||!online.active)return;
  rtc.relayGood=Date.now();rtc.relayRTT=rtc.relayGood-sentAt;rtc.relayQueue=rtc.relayQueue.filter(p=>!batch.some(b=>b.nonce===p.nonce));
  if(!rtc.channel){
   rtc.heroes=typeof service!=='undefined'&&service.resume?service.resume.heroes.map(p=>p.hero):(data.heroes||rtc.heroes||[0,1]);
   const channel={readyState:'open',get bufferedAmount(){return rtc.relayQueue.reduce((n,p)=>n+p.data.length,0);},send(data){rtc.relayQueue.push({nonce:crypto.randomUUID(),data});},close(){this.readyState='closed';}};
   rtcChannel(channel);channel.onopen();
  }
  for(const packet of data.packets){if(generation!==rtc.generation)return;await rtc.channel.onmessage({data:packet.data});}
  rtc.relayCursor=data.cursor;
  if(Date.now()-data.peerSeen>30000)rtcFail('Your opponent disconnected.',false);
 }catch(error){if(generation===rtc.generation){if(error.code==='EPOCH_MISMATCH'&&typeof service!=='undefined'&&service.connected)await serviceReconnect(false);else if(error.terminal||Date.now()-rtc.relayGood>15000)rtcFail(error.message||'Network relay unavailable.',false);}}
 finally{if(generation===rtc.generation){rtc.relayPolling=false;for(const p of batch)p.inFlight=false;if(online.active&&rtc.transport==='relay'&&!rtc.error)rtc.timer=setTimeout(rtcRelayPoll,20);}}
}
