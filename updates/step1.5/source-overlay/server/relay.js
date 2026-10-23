// Authenticated fallback transport only. Both players still simulate locally;
// ranked results continue to be verified by the existing input referee.
export async function relayExchange(db,room,seat,epoch,input,now,json){
 const packets=input.packets??[],cursor=input.cursor??0;
 if(!Number.isInteger(cursor)||cursor<0||!Array.isArray(packets)||packets.length>8||!packets.every(p=>p&&typeof p.nonce==='string'&&/^[a-f0-9-]{8,50}$/.test(p.nonce)&&typeof p.data==='string'&&p.data.length<=12000))return json({error:'Invalid relay batch.'},400);
 const q=(sql,...args)=>db.prepare(sql).bind(...args);
 const statements=[q(`UPDATE rooms SET relay_epoch=?,${seat===0?'host_seen':'guest_seen'}=? WHERE code=?`,epoch,now,room.code)];
 for(const p of packets)statements.push(q('INSERT OR IGNORE INTO relay_packets(room,epoch,seat,nonce,payload,created) VALUES(?,?,?,?,?,?)',room.code,epoch,seat,p.nonce,p.data,now));
 statements.push(q('DELETE FROM relay_packets WHERE room=? AND created<?',room.code,now-60000));
 await db.batch(statements);
 const {results}=await q('SELECT id,payload FROM relay_packets WHERE room=? AND epoch=? AND seat<>? AND id>? ORDER BY id LIMIT 64',room.code,epoch,seat,cursor).all();
 return json({heroes:[room.host_hero,room.guest_hero],cosmetics:[room.host_cosmetics,room.guest_cosmetics].map(x=>x?JSON.parse(x):null),packets:results.map(p=>({id:p.id,data:p.payload})),cursor:results.at(-1)?.id??cursor,peerSeen:seat===0?room.guest_seen:room.host_seen});
}
