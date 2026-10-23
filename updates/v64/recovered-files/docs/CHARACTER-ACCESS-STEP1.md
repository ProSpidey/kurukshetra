# Step 1 — Character access and permanent Suvarna unlocks

## Audit
The existing game uses eight stable character IDs in `web/character-config.js` with indexed combat identities. The selection UI is in `web/matchup.js`; the older in-battle picker is in `web/game.js`. Drona's lesson runner supplies Training; `web/lore.js` assigns fixed mission rosters. Arcade AI selection is separate from the player roster.

Accounts, guest sessions and Firebase Google/email verification already exist in `server/services/auth.js` and `firebase.js`. Account linking updates the existing account row, retaining its internal user ID. `wallets` is the authoritative Suvarna balance; `currency_transactions` is the ledger; server referee settlement in `economy.js` is the existing earning route. No separate CurrencyService or character ownership system existed. Local solo records/training progress are device preferences, not wallet authority.

Cloudflare Worker/D1 serves authenticated service APIs using HttpOnly cookies. Ranked/Casual queues and friend challenges create managed matches; locked loadouts and verified replay inputs determine rewards. Legacy room-code APIs remain as transport compatibility. The UI uses native dialogs, `serviceMessage`/`announce` status feedback, and existing fantasy panels.

## Policy
| Warrior | Initial access | Permanent price |
|---|---|---|
| Arjuna | Starter | Free |
| Karna | Starter | Free |
| Bhishma | Starter | Free |
| Abhimanyu | Starter | Free |
| Drona | Locked | 2,500 Suvarna |
| Satyaki | Locked | 2,500 Suvarna |
| Ekalavya | Locked | 3,000 Suvarna |
| Ashwatthama | Locked | 3,500 Suvarna |

`web/character-access-config.js` is the canonical policy and is copied byte-for-byte into the Worker on build. Prices never enter the purchase API payload. Policy has availability/release state, explicit mode overrides, dormant trial/achievement fields and `friendMatchAllowsTrials: false`.

Local and Training allow all eight without granting ownership. Lore allows only each mission's configured warriors. Arcade player selection requires ownership; AI rosters remain unrestricted. Ranked requires starter/permanent ownership. Casual is prepared for future trials, but trials remain disabled in Step 1. Friend challenges require permanent ownership.

## Service and data
`server/services/character-access.js` provides entitlement reads, snapshots, ownership/access checks, authorization, purchase, internal character grants and disabled trial hooks. Browser UI consumes server profile entitlement records; it never grants ownership. Stable IDs, not display names, are database keys.

`player_entitlements` stores user ID, entitlement ID/type, target ID, source, grant/expiry timestamps, metadata and transaction ID. A partial unique index allows only one permanent character entitlement per account/warrior. Starter records are initialized idempotently on profile access; starter policy works immediately even before initialization. Trial consumption keys are reserved for later idempotent match consumption, with no ad or trial-grant endpoint. Voucher, cosmetic, pass and future entitlement types/sources are declared; no voucher/pass UI or grants are activated.

## Purchase correctness
The existing D1 ledger is extended with `character_id`. A single transactional D1 `batch` conditionally inserts a CHARACTER_UNLOCK receipt, deducts the server-configured price only if that receipt exists, and inserts the permanent entitlement. An entitlement-write error rolls the receipt and deduction back together. Serialized concurrent transactions observe the permanent ownership index; retries return current ownership without charging again. History includes transaction ID, warrior, amount, before/after balances, source and timestamp.

The client previews a warrior, then opens a separate confirmation state before sending only `characterId` (plus existing protocol metadata). Insufficient balance disables confirmation and displays the shortfall. Success updates the existing profile, selection, wallet and owned count in memory and plays a short gold frame pulse. On a lost response, it reconciles with the server; if the result is still uncertain, it explicitly says so and offers a safe retry.

## Security and persistence
Managed matchmaking checks supplied selections at queue entry, before readying, and again at loadout lock. Unauthorized access returns CHARACTER_NOT_UNLOCKED. Raw room creation, joining and final character selection also validate access and bind room seats to account IDs. No public entitlement grant/revoke or currency-set API exists. Existing signatures, session checks, input limits and same-origin protections remain.

Guest linking to Google/email retains the same database user ID, hence wallet, statistics and entitlements. Existing accounts are not merged implicitly. Guests must link before clearing cookies or switching devices, as before.

There is no signed persistent offline entitlement cache in the existing app. Verified ownership is kept in the current authenticated in-memory profile; a fresh offline launch cannot restore progression unlocks until reconnecting. Starter play, Local and Training remain available. Local browser gameplay is inherently user-editable; server matchmaking and currency authority do not trust it.

## Validation
- Real SQLite-backed Worker requests: fresh accounts, all modes, insufficient balance, invalid name/price payloads, absent auth and forged grant requests.
- Injected entitlement-write failure confirms atomic rollback of wallet and ledger.
- Six overlapping purchase requests produce one charge and one entitlement; repeated retries preserve balance.
- Transactions and ownership survive logout/login and guest linking; Firebase tests retain a purchased Drona and remaining balance after Google linking.
- Forged Ranked queue, Casual loadout and raw friend-room selection are rejected; owned loadouts succeed.
- UI state tests cover preview, starter fallback, disabled insufficient-funds button, separate confirmation, ID-only purchase, immediate balance/profile update, Local override, Arcade block, logout and uncertain timeout.
- Existing two-client relay test covers selection, VS, authenticated loadouts and matching rollback hashes.
- No combat stats, damage, passive or Ultimate behavior changed.

Browser automation and physical Android testing were unavailable. Automated UI state tests do not establish visual pixel-perfect behavior on every device. Migration deployment success is checked through the hosting release result.

## Development tools
`node dev/character-access-lab.mjs` opens a disposable local SQLite lab with show/source, modes, grant/revoke, wallet adjustment, purchase, insufficient funds, retry and dropped-response simulations. It is outside web/server build directories and cannot be called by production clients.

## Files
Core policy/service: `web/character-access-config.js`, `server/character-access-config.js`, `server/services/character-access.js`.
Persistence: `db/schema.ts`, appended migration and journal metadata.
Integration: service routing, profile, queue/session authorization, raw room API, online protocol, service session and RTC selection recovery.
Presentation: `web/character-access-ui.js`, `web/character-access.css`, profile owned count, Training selector, index script/style registration.
Build/verification: policy copy, cache version, migration build, entitlement/UI/Firebase tests and development lab.

No ad SDK, rewarded ad, real-money pack, Google Play Billing, premium currency, achievement requirement or Season Pass was implemented. Stop at Step 1.
