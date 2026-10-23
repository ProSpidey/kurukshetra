// Development-only, disposable SQLite lab. Never imported into the browser or Worker.
// Run: node dev/character-access-lab.mjs
import repl from 'node:repl';
import {sql,env,call} from '../scripts/test-services.mjs';
import {CharacterAccessService} from '../server/services/character-access.js';
const auth=await call('auth/guest');await call('profile/save',{displayName:'AccessLab',avatar:0},auth.cookie);
const profile=(await call('profile/me',{},auth.cookie)).body.profile;
const user=sql.prepare('SELECT id FROM accounts WHERE player_id=?').get(profile.playerId).id;
const service=new CharacterAccessService(env.DB);
const lab={
 async show(){return service.snapshot(user)},
 async modes(id){return Object.fromEntries(await Promise.all(['arcade','local','training','lore','ranked','casual','friendly'].map(async m=>[m,await service.getCharacterAccessState(user,id,m,{mission:'narayana'})])))},
 setSuvarna(amount){if(!Number.isSafeInteger(amount)||amount<0)throw Error('Use nonnegative integer');sql.prepare('UPDATE wallets SET balance=? WHERE user_id=?').run(amount,user);return amount},
 grant(id){return service.grantCharacter(user,id,{source:'ADMIN',transactionId:crypto.randomUUID()})},
 revoke(id){sql.prepare("DELETE FROM player_entitlements WHERE user_id=? AND target_id=? AND source<>'STARTER'").run(user,id)},
 purchase(id){return call('characters/purchase',{characterId:id},auth.cookie)},
 async insufficient(id='drona'){this.setSuvarna(0);return this.purchase(id)},
 async retry(id='drona'){this.setSuvarna(10000);const first=await this.purchase(id);const second=await this.purchase(id);return {first,second}},
 async lostResponse(id='drona'){this.setSuvarna(10000);await this.purchase(id);console.log('Simulated dropped response. Retry the same purchase safely.');return this.purchase(id)},
 transactions(){return sql.prepare('SELECT * FROM currency_transactions WHERE user_id=? ORDER BY timestamp').all(user)}
};
console.log('DISPOSABLE LOCAL LAB · no production connection. Use await lab.show(), lab.modes("drona"), lab.setSuvarna(5000), await lab.purchase("drona"), lab.retry(), lab.lostResponse(), lab.insufficient(), lab.grant(), lab.revoke(), lab.transactions().');
repl.start('entitlements> ').context.lab=lab;
