import '../cosmetic-catalog.js';
import {CharacterAccessService} from './character-access.js';
import {first,all,q,run,fail,uid} from './core.js';
const catalog=globalThis.CosmeticCatalog;
const error=(code,message,status=409)=>{throw Object.assign(Error(message),{code,status});};
export class CosmeticService {
 constructor(db){this.db=db;this.access=new CharacterAccessService(db);}
 async snapshot(userId){const entitlements=await this.access.entitlements(userId),row=await first(this.db,'SELECT data FROM cosmetic_loadouts WHERE user_id=?',userId);return {ownedCosmeticIds:catalog.items.filter(c=>catalog.owned(c.cosmeticId,entitlements)).map(c=>c.cosmeticId),cosmeticLoadout:row?JSON.parse(row.data):catalog.defaults()};}
 async purchase(userId,cosmeticId,requestId){
  const c=catalog.byId[cosmeticId];if(!c?.isAvailable||!c.purchasable||c.releaseState!=='RELEASED')error('COSMETIC_UNAVAILABLE','This cosmetic is not available.',400);
  if(typeof requestId!=='string'||!/^[a-zA-Z0-9_-]{8,80}$/.test(requestId))fail('A valid purchase request ID is required.');
  const previous=await first(this.db,'SELECT cosmetic_id FROM currency_transactions WHERE user_id=? AND request_id=?',userId,requestId);if(previous&&previous.cosmetic_id!==cosmeticId)error('REQUEST_CONFLICT','This request ID belongs to another purchase.');
  const reply=async(alreadyOwned,transactionId=null)=>({alreadyOwned,transactionId,...await this.snapshot(userId),balance:(await first(this.db,'SELECT balance FROM wallets WHERE user_id=?',userId)).balance});
  if(catalog.owned(cosmeticId,await this.access.entitlements(userId)))return reply(true);
  if(c.characterId&&!await this.access.isCharacterOwned(userId,c.characterId))error('CHARACTER_NOT_UNLOCKED','Permanently unlock this warrior before purchasing their cosmetics.',403);
  const id=uid(),now=Date.now(),price=c.priceSuvarna,db=this.db;
  await db.batch([
   q(db,"INSERT INTO currency_transactions(id,user_id,type,amount,balance_before,balance_after,source,timestamp,cosmetic_id,cosmetic_type,request_id) SELECT ?,?,'COSMETIC_PURCHASE',-?,balance,balance-?,'SUVARNA_PURCHASE',?,?,?,? FROM wallets WHERE user_id=? AND balance>=? AND NOT EXISTS(SELECT 1 FROM player_entitlements WHERE user_id=? AND target_id=? AND entitlement_type='COSMETIC' AND expires_at IS NULL) AND NOT EXISTS(SELECT 1 FROM currency_transactions WHERE user_id=? AND request_id=?)",id,userId,price,price,now,cosmeticId,c.cosmeticType,requestId,userId,price,userId,cosmeticId,userId,requestId),
   q(db,'UPDATE wallets SET balance=balance-? WHERE user_id=? AND EXISTS(SELECT 1 FROM currency_transactions WHERE id=?)',price,userId,id),
   q(db,"INSERT INTO player_entitlements(id,user_id,entitlement_type,target_id,source,granted_at,transaction_id) SELECT ?,?,'COSMETIC',?,'SUVARNA_PURCHASE',?,? WHERE EXISTS(SELECT 1 FROM currency_transactions WHERE id=?)",uid(),userId,cosmeticId,now,id,id)
  ]);
  const receipt=await first(db,'SELECT id FROM currency_transactions WHERE id=?',id);
  if(!receipt&&!catalog.owned(cosmeticId,await this.access.entitlements(userId)))error('INSUFFICIENT_SUVARNA','Not enough Suvarna. Your balance was not charged.');
  return reply(!receipt,receipt?.id||null);
 }
 async validate(userId,input){
  if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).some(k=>!['warriorSkins','bowSkins','chariotSkin','emotes','hideOpponentEmotes'].includes(k)))fail('Invalid cosmetic loadout.');
  const e=await this.access.entitlements(userId),result=catalog.defaults();
  const check=(id,type,characterId)=>{if(id===null)return null;const c=catalog.byId[id];if(!c||c.cosmeticType!==type||c.characterId!==(characterId||null)||!c.isAvailable||!catalog.owned(id,e))error('COSMETIC_NOT_OWNED','Choose an owned, compatible cosmetic.',403);if(characterId&&!globalThis.CharacterAccessRules.state(characterId,'ranked',e).owned)error('CHARACTER_NOT_UNLOCKED','Permanently unlock this warrior first.',403);return id;};
  for(const [field,type] of [['warriorSkins','WARRIOR_SKIN'],['bowSkins','BOW_SKIN']]){const map=input[field]??{};if(typeof map!=='object'||Array.isArray(map)||map===null)fail('Invalid warrior equipment.');for(const [hero,id] of Object.entries(map)){if(!catalog.characters.includes(hero))fail('Unknown warrior.');result[field][hero]=check(id,type,hero);}}
  result.chariotSkin=check(input.chariotSkin??null,'CHARIOT_SKIN');
  const slots=input.emotes??result.emotes;if(!Array.isArray(slots)||slots.length!==4||new Set(slots.filter(Boolean)).size!==slots.filter(Boolean).length)fail('Choose four slots without duplicate emotes.');result.emotes=slots.map(id=>check(id,'EMOTE'));
  if(input.hideOpponentEmotes!==undefined&&typeof input.hideOpponentEmotes!=='boolean')fail('Invalid emote preference.');result.hideOpponentEmotes=!!input.hideOpponentEmotes;return result;
 }
 async save(userId,input){const data=await this.validate(userId,input);await run(this.db,'INSERT INTO cosmetic_loadouts(user_id,data,updated_at) VALUES(?,?,?) ON CONFLICT(user_id) DO UPDATE SET data=excluded.data,updated_at=excluded.updated_at',userId,JSON.stringify(data),Date.now());return this.snapshot(userId);}
 async matchLoadout(userId,hero){const s=await this.snapshot(userId),l=await this.validate(userId,s.cosmeticLoadout),id=catalog.characters[hero];return {characterId:id,warriorSkin:l.warriorSkins[id]||null,bowSkin:l.bowSkins[id]||null,chariotSkin:l.chariotSkin,emotes:l.emotes};}
}
export async function cosmeticRoute(path,db,a,input){const service=new CosmeticService(db);if(path==='cosmetics/inventory')return service.snapshot(a.id);if(path==='cosmetics/purchase'){if(Object.keys(input).some(k=>!['cosmeticId','requestId','protocol'].includes(k)))fail('Send only cosmeticId and requestId.');return service.purchase(a.id,input.cosmeticId,input.requestId);}if(path==='cosmetics/equip')return service.save(a.id,input.loadout);if(path==='cosmetics/history')return {transactions:await all(db,'SELECT id AS transactionId,user_id AS userId,cosmetic_id AS cosmeticId,cosmetic_type AS cosmeticType,amount,balance_before AS balanceBefore,balance_after AS balanceAfter,timestamp,source FROM currency_transactions WHERE user_id=? AND cosmetic_id IS NOT NULL ORDER BY timestamp DESC LIMIT 50',a.id)};return null;}
