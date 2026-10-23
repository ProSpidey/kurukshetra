import {CosmeticService} from './services/cosmetics.js';
import {authenticate} from './services/auth.js';
import {CharacterAccessService} from './services/character-access.js';
import {relayExchange} from './relay.js';
import {services} from './services/index.js';
import {ONLINE_PROTOCOL as VERSION} from './protocol.js';
const ORIGIN='https://kurukshetra-astra-warfare.spidey245.chatgpt.site';
const ALLOWED_ORIGINS=new Set([ORIGIN,'https://appassets.androidplatform.net']);
const ACTIONS=new Set(['draw','shoot','arm','choose','guard','tactic','move','repair','rescue','sky','counter','rune','fate','pause']);
const json=(data,status=200,origin='')=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...(ALLOWED_ORIGINS.has(origin)?{'Access-Control-Allow-Origin':origin,'Vary':'Origin'}:{})}});
const random=n=>Array.from(crypto.getRandomValues(new Uint8Array(n)),v=>v.toString(16).padStart(2,'0')).join('');
const digest=async text=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text))),v=>v.toString(16).padStart(2,'0')).join('');
const hero=x=>Number.isInteger(x)&&x>=0&&x<8;
async function limit(db,key,max,windowMs,now){const bucket=Math.floor(now/windowMs),id=await digest(key+':'+bucket);const row=await db.prepare('INSERT INTO rate_limits (key,count,expires) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count').bind(id,now+windowMs*2).first();return row.count<=max;}
async function body(req,max=120000){if(Number(req.headers.get('Content-Length'))>max)throw new Error('payload');const text=await req.text();if(text.length>max)throw new Error('payload');return JSON.parse(text);}
function validCommand(c){if(!c||typeof c!=='object'||typeof c.nonce!=='string'||!/^[a-f0-9-]{8,50}$/.test(c.nonce)||!ACTIONS.has(c.action))return false;return JSON.stringify(c).length<=1000;}
export default {async fetch(req,env,ctx){const url=new URL(req.url),origin=req.headers.get('Origin')||'';
 if(url.pathname.startsWith('/api/services/'))return services(req,env);
 if(!url.pathname.startsWith('/api/'))return env.ASSETS.fetch(req);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:ALLOWED_ORIGINS.has(origin)?{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'POST, GET, OPTIONS','Access-Control-Allow-Headers':'Content-Type, Authorization','Access-Control-Max-Age':'86400','Vary':'Origin'}:{}});
 if(origin&&!ALLOWED_ORIGINS.has(origin)&&origin!==url.origin)return json({error:'Origin not allowed'},403);
 if(url.pathname==='/api/health')return json({ok:true,protocol:VERSION},200,origin);
 if(req.method!=='POST')return json({error:'Use POST'},405,origin);
 try {const db=env.DB;if(!db)return json({error:'Online rooms are temporarily unavailable.'},503,origin);const now=Date.now(),input=await body(req),ip=req.headers.get('CF-Connecting-IP')||'local';
 if(input.protocol!==VERSION)return json({error:'Update the game before joining this room.',code:'PROTOCOL_MISMATCH'},409,origin);
 if(url.pathname==='/api/create'){const account=await authenticate(req,db);if(!account)return json({error:'Create or sign in to your profile first.'},401,origin);await new CharacterAccessService(db).authorizeHero(account.id,input.hero,'friendly');
 if(!hero(input.hero))return json({error:'Choose a warrior.'},400,origin);
 if(!await limit(db,'create:'+ip,12,3600000,now))return json({error:'Room creation limit reached. Try later.'},429,origin);
 const code=random(5).toUpperCase(),token=random(24),hash=await digest(token);
 await db.batch([db.prepare('DELETE FROM rooms WHERE expires < ?').bind(now),db.prepare('DELETE FROM rate_limits WHERE expires < ?').bind(now),db.prepare('INSERT INTO rooms (code,host_token,host_hero,host_seen,expires,host_user,host_cosmetics) VALUES (?,?,?,?,?,?,?)').bind(code,hash,input.hero,now,now+5400000,account.id,JSON.stringify(await new CosmeticService(db).matchLoadout(account.id,input.hero)))]);
 return json({code,token,seat:0,protocol:VERSION},200,origin);
 }
 const code=String(input.code||'').toUpperCase();if(!/^[A-F0-9]{10}$/.test(code))return json({error:'Enter a valid 10-character room code.'},400,origin);
 if(url.pathname==='/api/join'){const account=await authenticate(req,db);if(!account)return json({error:'Create or sign in to your profile first.'},401,origin);await new CharacterAccessService(db).authorizeHero(account.id,input.hero,'friendly');
 if(!hero(input.hero))return json({error:'Choose a warrior.'},400,origin);
 if(!await limit(db,'join:'+ip,30,60000,now))return json({error:'Too many join attempts. Wait a minute.'},429,origin);
 const token=random(24),hash=await digest(token);const changed=await db.prepare('UPDATE rooms SET guest_token=?,guest_hero=?,guest_seen=?,guest_user=?,guest_cosmetics=? WHERE code=? AND guest_token IS NULL AND expires>? AND closed=0 AND host_seen>? RETURNING code').bind(hash,input.hero,now,account.id,JSON.stringify(await new CosmeticService(db).matchLoadout(account.id,input.hero)),code,now,now-30000).first();
 if(!changed)return json({error:'Room is full, expired, or the host is offline.'},409,origin);return json({code,token,seat:1,protocol:VERSION},200,origin);
 }
 const auth=req.headers.get('Authorization')||'';if(!/^Bearer [a-f0-9]{48}$/.test(auth))return json({error:'Room authorization required.'},401,origin);
 const hash=await digest(auth.slice(7));const room=await db.prepare('SELECT rooms.*,service_matches.epoch AS managed_epoch,service_matches.status AS managed_status FROM rooms LEFT JOIN service_matches ON service_matches.room=rooms.code WHERE rooms.code=?').bind(code).first();if(!room||room.expires<=now)return json({error:'This room has expired.'},410,origin);const seat=hash===room.host_token?0:hash===room.guest_token?1:-1;if(seat<0)return json({error:'Room authorization failed.'},403,origin);
 if(url.pathname==='/api/character'){if(room.managed_epoch!=null)return json({error:'Use managed match loadout.'},409,origin);const account=await authenticate(req,db);if(!account||account.id!==(seat===0?room.host_user:room.guest_user))return json({error:'Sign in with the room account.'},403,origin);await new CharacterAccessService(db).authorizeHero(account.id,input.hero,'friendly');await db.prepare(seat===0?'UPDATE rooms SET host_hero=?,host_cosmetics=? WHERE code=?':'UPDATE rooms SET guest_hero=?,guest_cosmetics=? WHERE code=?').bind(input.hero,JSON.stringify(await new CosmeticService(db).matchLoadout(account.id,input.hero)),code).run();return json({ok:true},200,origin);}
 if(url.pathname==='/api/leave'){await db.prepare('UPDATE rooms SET closed=1 WHERE code=?').bind(code).run();return json({closed:true},200,origin);}
 if(!['/api/signal','/api/relay'].includes(url.pathname))return json({error:'Use WebRTC signaling; HTTP gameplay transport is retired.'},410,origin);
 const managed=room.managed_epoch==null?null:{epoch:room.managed_epoch,status:room.managed_status};if(managed&&input.epoch!==managed.epoch)return json({error:'Match session changed. Reconnect to synchronize.',code:'EPOCH_MISMATCH'},409,origin);
 if(managed&&!['connecting','active'].includes(managed.status))return json({error:'This match has ended. Search for a new match.'},410,origin);
 if(room.closed)return json({error:'Your friend left the room.'},410,origin);
 if(url.pathname==='/api/relay'){if(!await limit(db,'relay:'+code+':'+seat,600,60000,now))return json({error:'Relay rate limit. Please retry.'},429,origin);return relayExchange(db,room,seat,managed?.epoch??0,input,now,(data,status=200)=>json(data,status,origin));}
 if(!await limit(db,'signal:'+code+':'+seat,180,60000,now))return json({error:'Signaling rate limit. Try again shortly.'},429,origin);
 const messages=input.messages||[],cursor=input.cursor??0;
 const validSignal=m=>{if(!m||typeof m.nonce!=='string'||!/^[a-f0-9-]{8,50}$/.test(m.nonce)||!m.signal)return false;const s=m.signal;if(s.type==='offer'||s.type==='answer')return s.type===(seat===0?'offer':'answer')&&typeof s.sdp==='string'&&s.sdp.length<24000;if(s.type==='ice')return s.candidate&&typeof s.candidate.candidate==='string'&&s.candidate.candidate.length<3000&&JSON.stringify(s.candidate).length<4000;return false;};
 if(!Number.isInteger(cursor)||cursor<0||!Array.isArray(messages)||messages.length>32||!messages.every(validSignal))return json({error:'Invalid signaling batch'},400,origin);
 const statements=[db.prepare(seat===0?'UPDATE rooms SET host_seen=? WHERE code=?':'UPDATE rooms SET guest_seen=? WHERE code=?').bind(now,code)];
 for(const m of messages)statements.push(db.prepare('INSERT INTO commands (room,nonce,payload) VALUES (?,?,?) ON CONFLICT(room,nonce) DO NOTHING').bind(code,seat+':'+m.nonce,JSON.stringify({seat,epoch:managed?.epoch,signal:m.signal})));
 await db.batch(statements);
 const events=await db.prepare('SELECT id,payload FROM commands WHERE room=? AND id>? ORDER BY id LIMIT 64').bind(code,cursor).all();
 let iceServers=[{urls:'stun:stun.l.google.com:19302'}];if(env.WEBRTC_ICE_SERVERS){try{const configured=JSON.parse(env.WEBRTC_ICE_SERVERS);if(Array.isArray(configured)&&configured.length<=8)iceServers=configured;}catch{}}
 return json({messages:events.results.map(e=>({id:e.id,...JSON.parse(e.payload)})).filter(e=>e.seat!==seat&&(!managed||e.epoch===managed.epoch)),cursor:events.results.at(-1)?.id||cursor,heroes:[room.host_hero,room.guest_hero],cosmetics:[room.host_cosmetics,room.guest_cosmetics].map(x=>x?JSON.parse(x):null),guestPresent:!!room.guest_token,relay:room.relay_epoch===(managed?.epoch??0),iceServers,expires:room.expires},200,origin);
 }catch(error){if(error.status)return json({error:error.message,code:error.code||null},error.status,origin);console.error('room-api',url.pathname,error?.message);return json({error:error?.message==='payload'?'Request is too large.':'Connection unavailable. Please retry.'},error?.message==='payload'?413:503,origin);}
}};
