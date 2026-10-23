# Counter Astra loadout system — Step 2, release 31

Implemented inside the existing project. No Step 3 systems were introduced.

## Architecture

The existing three signature entries per warrior are preserved in `LOADOUTS`. The third entry is already that warrior's Ultimate in this project. Its existing dominant button, reserve, invocation and rune-counter rules remain intact; this milestone does not duplicate it or invent another Ultimate.

`COUNTER_POOLS` centralizes compatibility. The same Step-1 registry exposes `isCounterEligible`, `counterEligibleCharacters`, `signatureOwner`, `counterWindowType` and configurable `counterUsesPerRound`. `garuda_ward` is the only new weapon: a counter-only Garuda Ward built on the existing wind phase/effect atlas. Its Garuda–Serpent relationship is promoted from planned to live metadata. Other planned rules remain inactive.

The match stores `counterLoadout[2]`. Each player has `counter: {astraId, uses, revealed, notice, noticeUntil, aiNotice, aiSince, aiAttempted, promptId}` and a separate ammo entry. The Counter never enters the signature array or regeneration loop. `counterMatchLoadout(i)` returns `characterId`, the original three `signatureAstraIds`, `counterAstraId`, existing `ultimateId` and `counterUsesRemaining`. Projectiles carry `counterSlot`, `counterUser` and `signatureOwner`; fields retain counter origin.

Default: one use per round and zero Resolve cost. `COUNTER_CONFIG.counterUsesPerRound` and `usesByAstra` support future balancing. Charge consumption happens only after a successful release. Cancelling, interrupted charging, and blocked releases consume nothing; an incompatible release is still spent. Direct, field and containment offense uses 85% of the neutral phase equivalent, without another character's offensive mastery/precision bonuses. Counter effectiveness is full when the relationship, strength, cast and contact conditions are met. The caster retains their own movement/draw restrictions.

## Selection screen and compatible pools

Both character locks → Counter selection → both Counter locks → existing preload/VS → original 3–2–1/conch → match. Cards show selected/opponent warrior context, icon, name, family, tags, short description, countered tags and recommendations. Recommendations examine only the public opponent signature set. The configurable 10-second timer locks the highlighted choice; a recommended-default policy is also supported. A wall-clock deadline prevents a background tab from stretching the timer indefinitely. PvP has no early auto-lock.

| Warrior | Compatible Counter Astras |
|---|---|
| Arjuna | Varuna’s Tide, Agneya, Ganga’s Guard, Garuda Ward, Vrishni Wind, Narayana Burst |
| Karna | Varuna’s Tide, Gandiva Gale, Agneya, Garuda Ward, Ganga’s Guard |
| Bhishma | Varuna’s Tide, Gandiva Gale, Agneya, Garuda Ward, Narayana Burst |
| Drona | Varuna’s Tide, Ganga’s Guard, Gandiva Gale, Garuda Ward, Aindrastra, Narayana Burst |
| Abhimanyu | Varuna’s Tide, Ganga’s Guard, Agneya, Garuda Ward, Vrishni Wind |
| Ashwatthama | Varuna’s Tide, Ganga’s Guard, Gandiva Gale, Garuda Ward, Agneya |
| Satyaki | Ganga’s Guard, Gandiva Gale, Agneya, Garuda Ward, Aindrastra |
| Ekalavya | Varuna’s Tide, Ganga’s Guard, Gandiva Gale, Garuda Ward, Agneya |

These are permissive gameplay compatibility choices, not claims of canonical possession. No warrior receives their own signature twice. Lore encounters retain their episode arsenals.

## HUD, keyboard and touch

A separate cyan/gold ⇄ circle, 46–52 px, sits just above the signature rail without shrinking the canvas. States: READY, AVAILABLE (RECOMMENDED NOW), CHARGING, USED, DISABLED and INVALID. Hidden choices show HIDDEN. Tap to arm, use the original drag/release, overdraw for Spirit and ↑ Sky for sky casts; tap again to cancel. No second charge system or automatic cast conversion was added.

Defaults: P1 C / P2 H. Settings saves separate keys chosen from C/H/T/Y/I and rejects duplicates; these avoid existing combat bindings. Selection and lock use lightweight existing tones. CounterReady/Release/Success/Failed/Consumed events use the existing sound and rollback-confirmation path; Spirit-ready audio is reused. Success/failure feedback is brief and nonblocking. Generic charge labels conceal the selected name until release. Existing elemental charge animations remain visible, so experienced players may infer an element.

## Resolver, Spirit and Ultimate protection

`resolveCounterAstra` accepts source/counter stable IDs, live tags, charge level, cast type, source Spirit status and field/projectile state. It returns validity/reason, interaction type, rule ID, strength, factor, distance and transform ID. It executes CURRENT Step-1 relationships only, with metadata priority for Garuda. Combat does not hard-code individual source/counter pairs.

CANCEL/HARD_COUNTER, WEAKEN, SHORTEN_DURATION and DISPLACE reuse existing field behavior. Steam Cloud, Electrified Water, Ember Storm and Mist reuse the existing transformations and artwork. Normal counters downgrade applicable hard/cancel/transform outcomes against Spirit sources to WEAKEN, except specialized Garuda. Spirit casts access full relationships. Existing minimum strengths apply; sky fields require sky counters. Actual swept projectile contact or field contact is still required. A wrong counter expires without deleting the incompatible source. Normal arrows can intercept Counter projectiles; there is no new generic piercing benefit.

Ultimates are rejected before tag matching and retain existing collision priority. Ordinary Counter buttons do not highlight during Ultimate invocation. Reserved Ultimate + rune puzzle remains the only Ultimate-counter mechanism. Drona's advanced Brahmastra remains non-Ultimate but cannot be trivially canceled by an elemental Counter lacking a relationship.

| Required case | Verified result |
|---|---|
| Agneya → Spirit Water | Steam |
| Agneya → Spirit Wind | Ember Storm |
| Nagastra → Garuda | Hard counter on contact |
| Ganga → Fire | Invalid; no Fire-over-Water rule invented |
| Kuru Thunder → Water | Invalid; current graph has no such counter |
| Rudra Ember → Water / pure Divine Narayana Burst | Steam / cancel curse |
| Nishada Flame → Water | Steam |
| Brahmastra → ordinary Fire | Invalid; source stays intact |
| Pashupata / any Ultimate → Counter | Ultimate protected |
| Storm → Wind / Barrier | Weaken / shorten duration |
| Nishada field → pure Divine | Displace |

## Modes, AI and lifecycle

Solo supports manual choice and Auto Counter. AI picks from its compatible pool based only on the public enemy warrior/signatures. Combat recognition delays are 1.3/0.85/0.5 seconds and decision accuracy 50%/75%/90% for easy/normal/hard. AI aims, charges and releases through the shared path, without reading the hidden player Counter.

Local uses sequential selection. Locking P1 clears the cards and shows a pass-to-P2 screen; P2 starts their own timer explicitly. Both HUD identities remain hidden until use. A shared screen cannot prevent someone from watching the other person actively choose.

Online exchanges only Counter lock booleans during selection. The guest reveals its eligible ID when its VS presentation finishes; the host includes the agreed pair in the final hello handshake. IDs are validated against final warriors and the guest checks its own locked choice. The original ready/start barrier is preserved. Opponent HUD identity remains hidden until release. Protocol 31 prevents old/new combat versions from mixing.

`counterAstra` is an input in the existing deterministic rollback reducer. Both peers simulate agreed inputs; UI handlers do not independently award successes. Existing confirmation, state hashes and authoritative checkpoint repair reconcile outcomes. Captured state includes loadouts, uses, reveal state, notifications, AI memory, projectiles and fields. Duplicate or replayed input does not double-spend. Round resets refill the equipped weapon; best-of-three retains the choice. Checkpoint recovery preserves consumed charges.

Full rejoin after a closed RTC connection is **not** newly implemented: the existing transport still requires a new room. This release does not claim seamless reconnect.

Karna's post-wheel special lock disables the Counter, preserving base-archery bonuses and retained-Ultimate rules. Ashwatthama's Mani/curse Ultimate restrictions are unchanged. Abhimanyu's weapon and equipment restrictions apply. Drona can query Counter metadata through the shared loadout accessor.

## Debugging and validation

ASTRA_DEV-only controls provide P1/P2 equip validation, use reset/consume, valid/invalid opportunity fixtures, resolver results, tags, remaining uses and authority display. They refuse online mutation and are excluded from production builds. `validateCounterLoadouts()` checks pool sizes/uniqueness, stable IDs, eligibility, character compatibility, no Ultimate selection and current relationships. Codex validation checks metadata and reverse edges including Garuda.

## Tests and limits

The restored implementation is checked by:

- `test-counter-system.cjs`: eight pools, complete matrix, every Ultimate exclusion, Spirit/Sky conditions, live soft/transform outcomes, 85% damage, cancel/release, configurable uses, round/restore, passive restrictions and delayed AI.
- `test-counter-flow.cjs`: solo Auto, local blind handoff, tap buttons, timeout, leave/cancel, VS/countdown, actual RTC message adapter, reversed delivery, concealed choices and identical seeded starts.
- `test-counter-network.cjs`: 50/100/150/250 ms one-way delays, both seating orders, duplicate/reordered prediction/rollback, full confirmed-state hashes, exactly-once consumption and checkpoint preservation.
- Existing combat, Codex, matchup/rollback, Ultimate, normal/Spirit charge, direct-hit/equipment and signaling tests; JavaScript syntax, whitespace and production build checks.

Responsive layout and headless tap/DOM checks are covered. Physical Android/browser rendering and live cross-network WebRTC remain manual QA. No new Garuda illustration was needed: existing wind art is reused. Optional remembered Counter preferences, a full Codex popover within matchmaking and expanded tutorial hints are not added. Compact database information appears on cards. Legacy in-battle setup/restart retains a compatible prior Counter or none until the standard Home selection flow is used.

Existing four transformations are active; richer transformation fields, proposed high-tier/barrier rules, Aranya displacement design and generic Fire/Forest design remain deferred to Step 3. No Stability, advanced interruption, war events, new chariot/army mechanics, progression, economy, characters, Ultimates or home features were added.

## Files created

- `docs/COUNTER_ASTRA_BRIEF.txt`
- `docs/COUNTER_ASTRA_REPORT.md`
- `scripts/counter-test-runtime.cjs`
- `scripts/test-counter-flow.cjs`
- `scripts/test-counter-network.cjs`
- `scripts/test-counter-system.cjs`
- `web/counter-config.js`
- `web/counter-ui.css`
- `web/counter-ui.js`

## Files modified

- `dev/astra-debug.js`
- `scripts/build-sw.mjs`
- `scripts/matchup-test-runtime.cjs`
- `scripts/test-online.mjs`
- `server/index.js`
- `web/astra-codex-data.js`
- `web/astra-codex.js`
- `web/astra-config.js`
- `web/astra-fields.js`
- `web/astra-presentation.js`
- `web/game.js`
- `web/index.html`
- `web/matchup-online.js`
- `web/matchup.js`
- `web/online.js`
- `web/rollback-game.js`
- `web/rtc-net.js`
