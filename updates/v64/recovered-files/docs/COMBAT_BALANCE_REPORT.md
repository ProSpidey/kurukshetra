# Combat Balance Rework — release 28

Implemented the complete supplied combat-balance milestone within the existing game. No new characters, passives, Astras or menus. Existing drag input, Two-Phase Astras, cinematics, match flow and rollback authority are retained.

## Current values found

The live roster applied a 1.6 HP multiplier and .42 damage multiplier to its source values. The resulting values, rather than the pre-scaled literals, were audited:

| Warrior | Previous HP | Previous base damage | Velocity | Charged recovery |
|---|---:|---:|---:|---:|
| Arjun | 160 | 8 | 1.12× | 0.68s |
| Karna | 184 | 10 | 1× | 1.05s |
| Bhishma | 232 | 7 | 0.97× | 1s |
| Drona | 168 | 8 | 1.04× | 0.9s |
| Abhimanyu | 160 | 7 | 1.1× | 0.62s |
| Ashwatthama | 192 | 9 | 1× | 1.05s |
| Satyaki | 176 | 8 | 1.08× | 0.8s |
| Ekalavya | 168 | 8 | 1.05× | 0.76s |

Common normal overdraw was .65s, quick recovery .22s plus .35×focus, Spirit arrow damage 1.65× and speed 1.32×. Normal projectile damage was base × (.4 + .5×focus). Existing critical flags were perfect-draw flags, with no independent random critical roll. Movement was 130 units/s before passive/equipment effects; dodge lasted .35s with a 3s cooldown. Resolve gained .8/s, .3 per damage received, .4 per damage dealt and .5 per normal shot, before limited existing modifiers. Offensive Rage was enemy HP ≤35%, plus 45s/Resolve/ammo gates. Ultimate direct damage was about .42×Astra damage (Spirit .52×), often only roughly 20–32 damage before defense; Spirit fields added separate damage.

Karna had 65% Kavacha reduction, 25% wheel heal and a temporary 8s comeback without permanent special restrictions. Bhishma had 232 HP, 7 base damage and a 10s stand. Ashwatthama had 192 HP, free offensive Ultimate access under ordinary gates and only 12% cursed vulnerability. Drona mastery was already spell-scoped. Full original configuration and Astra numbers are preserved in BALANCE_BEFORE.json.

## Files and architecture

Created: COMBAT_BALANCE_BRIEF.txt; BALANCE_BEFORE.json; BALANCE_FINAL.json; BALANCE_DPS.json; BALANCE_MATCHUPS.json; BALANCE_REGRESSION.json; this report; test-balance.cjs; test-balance-network.cjs; test-balance-matchups.cjs.

Modified: web/fate-config.js, fate-core.js, fate-characters.js, fate-game.js, game.js, ultimate.js, astra-fields.js, battle-ui.js, character-config.js, index.html, online.js, server/index.js, dev/fate-debug.js, scripts/build-sw.mjs, generated web/sw.js, and existing test-fates/test-astra-system/test-online fixtures for explicitly changed expectations.

ROSTER_BALANCE in fate-config.js owns all eight base stat rows. COMBAT_BALANCE owns shared recovery, precision and Ultimate timing. FATE_BALANCE remains the character-passive configuration. The canonical roster and selection screen read these values. No parallel damage simulation was introduced.

## Final character stat table

HP baseline is 160. Draw/movement/Rage values are multipliers. Velocity multiplies the existing ballistic speed, independently of damage. Criticals remain deterministic skill triggers: 0% below the perfect-release threshold and 100% on an eligible perfect release, not RNG. Accuracy lowers the normalized focus required for a perfect release; it never randomly changes aim or makes an arrow miss.

| Warrior | HP | Base arrow | Draw | Velocity | Accuracy | Critical | Movement | Rage | Ultimate |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Arjun | 160 | 9.5 | 1.05× | 1.12× | 1.15× | 1.65× perfect | 1.05× | 1× | 82% |
| Karna | 160 | 11 | 0.93× | 1.08× | 0.9× | 1.6× perfect | 0.95× | 1× | 82% |
| Bhishma | 176 | 12 | 0.78× | 1× | 1× | 1.5× perfect | 0.8× | 0.9× | 72% |
| Drona | 163 | 9.5 | 0.96× | 1× | 1.08× | 1.6× perfect | 0.95× | 0.95× | 74% |
| Abhimanyu | 147 | 8.8 | 1.2× | 1.05× | 0.93× | 1.55× perfect | 1.2× | 1.15× | 70% |
| Ashwatthama | 160 | 10.3 | 0.96× | 1× | 0.92× | 1.6× perfect | 1× | 1.05× | 74% |
| Satyaki | 154 | 9 | 1.12× | 1.08× | 0.96× | 1.6× perfect | 1.12× | 1.1× | 72% |
| Ekalavya | 150 | 8.2 | 1.05× | 1.1× | 1.2× | 1.9× perfect | 1.05× | 1× | 72% |

Ashwatthama's listed 74% is a regular payload reference; before curse his Ultimate is counter-only and a successful clash deals no body damage. Cursed offensive Brahmashira executes after failed/no counter. Bhishma's stand raises 72% to 90%. Standard connected Ultimates use maximum-health fractions and bypass ordinary guard/passive percentage reduction; existing lethal-passive interceptions still apply except to cursed execution. Ordinary field interactions cannot consume an incoming Ultimate. Ultimate fields retain presentation/control but no extra periodic damage, avoiding a nominal 90% attack becoming an automatic full-health kill. Splash contact for these Ultimates uses the full configured fraction.

Perfect focus threshold = .90 / accuracy / passive perfect-window modifier. Moving Abhimanyu receives an additional .88 precision factor. Ordinary normal/Spirit-arrow overdraw time = .65 / base draw / passive draw. Astra Spirit charge uses its existing separate Astra duration and passive modifiers; base normal-draw multipliers do not alter that subsystem. Normal recovery also scales with base draw; Astra recovery retains its separate configuration.

## Passive and character changes

**Bhishma:** highest raw base damage 12, 176 HP, draw .78× and movement .80×. The eight-second Final Stand gives normal damage 1.40× (16.8 raw), draw 1.25×, velocity 1.15×, zero stagger and no healing. Resolve fills and the enemy-health Rage gate lifts. Minimum Ultimate time, ammo and cost remain. Ultimate is 72% normally, 90% during the stand. Death occurs at the end of eight authoritative combat seconds; existing cinematic/puzzle combat pauses also pause this timer. Existing round-based reset policy is preserved.

**Karna:** second-highest raw damage 11, 160 HP and .93× draw; precision .90× requires more deliberate release. Kavacha reduces damage by 60% and retains enemy-hit-driven durability/cracking. Wheel repair is vulnerable, heals 20% (32 HP), and grants permanent-for-round Surya's Last Stand: normal damage 1.225× (13.475), draw 1.18×, velocity 1.09× and perfect window 1.08×. Ordinary Surya Shaft/Nagastra access locks after repair. Vasavi Shakti is the current tier-2 Ultimate and is treated separately. At lethal Wheel activation, time/Resolve/ammo/Rage readiness is recorded. Only an already-ready Ultimate can survive repair; once spent it is gone. A non-ready Ultimate cannot unlock afterward even if Resolve increases. Flags/modifiers live in serialized Fate state. The old short-lived comeback expires no longer; all restrictions and bonuses reset on the next round.

**Ashwatthama:** 160 HP, moderate 10.3 base damage. Offensive Ultimate initiation is denied before Mani shatter, while the usual availableCounter path retains time/Resolve/ammo/puzzle checks. Mani use permanently marks curse for that round, including the temporary SHATTER protection stage. The existing five-second protection and 12% restoration remain; after protection he takes 15% increased ordinary damage. Cursed offensive Ultimate uses the existing counter decision/puzzle. Failed/no counter resolves execution through the authoritative combat simulation, regardless of remaining HP, guard or lethal rescue passive. A successful counter creates the existing Ultimate clash and no execution. The cast consumes its one use, including when successfully countered; no refill. Execution flags reset per round.

**Arjuna:** 9.5 raw damage, 1.12 velocity and 1.15 accuracy favor reliable perfect releases over heavy single shots. Existing Krishna intervention restores 13%, Guidance lasts 7s, improves draw 1.12×, perfect window 1.25× and puzzle time +1.5s. The existing once-per-match rescue is preserved.

**Drona:** average 9.5 raw damage and 1.08 precision. Third observation masters that specific Astra: incoming ordinary Astra damage .80×, puzzle bonus +1.25s (25% of the normal puzzle duration), counter invocation .80× and the existing rune hint. An unrelated spell receives no mastery modifiers. Standard Ultimate max-health damage does not stack down with ordinary reduction; puzzle assistance remains his Ultimate defense.

**Abhimanyu:** 147 HP, 8.8 raw damage, highest base draw/movement 1.20×, highest base Resolve gain 1.15×. Moving precision is lower. Existing Last Warrior transition and weapon progression stay intact: movement 1.35×, draw 1.25×, Rage 1.25× and existing melee/dodge behavior. His on-foot Ultimate restriction remains.

**Satyaki:** 154 HP, 9 damage, 1.12 draw/movement. Each of five Pursuit stacks gives +3% draw, +2% movement and +2% velocity. Miss loses two stacks and ends Fury if below five; receiving a critical resets all stacks. Existing six-second Fury, 1.30× draw, .70 cooldown and 1.20× perfect window remain.

**Ekalavya:** lowest raw damage 8.2, highest accuracy 1.20× and highest critical 1.90×; Instinct critical becomes 2.15×. Existing Focus gain 25 per perfect hit, loss 20 per miss, eight-second Instinct, 1.25× draw and 1.35× perfect window remain. Guru Dakshina keeps its .85 normal-damage cost and existing mastery benefits. No random critical rolls were added.

## Ultimate pacing tuning

One additional tuning pass changed the minimum Ultimate time from 45s to **30s**: the controlled normal-arrow rounds often ended near 37–45s, leaving no usable Ultimate window. Resolve cost/ammo remain, and normal offensive Rage still requires the enemy at ≤35% HP. Final Stand, cursed Ashwatthama and Karna's retained-ready state have the explicit exception gates described above. Counters retain their existing exception to enemy-health Rage and require a solved puzzle. Help text and HUD countdowns use the new timing.

## Effective DPS evidence

The following fixed mid-draw drill creates actual projectiles at normalized focus .8 and uses their damage/recovery. It assumes a uniform 65% hit rate; that probability is a modeling input, NOT a measured player hit rate. It excludes defense/passive uptime/Astras and must not be interpreted as an overall tier list.

| Warrior | Shot damage | Charge + recovery | Modeled DPS | Hits to defeat 160 HP |
|---|---:|---:|---:|---:|
| Arjun | 12.54 | 0.97s | 8.39 | 13 |
| Karna | 8.80 | 1.10s | 5.22 | 19 |
| Bhishma | 9.60 | 1.31s | 4.77 | 17 |
| Drona | 7.60 | 1.06s | 4.65 | 22 |
| Abhimanyu | 7.04 | 0.85s | 5.38 | 23 |
| Ashwatthama | 8.24 | 1.06s | 5.04 | 20 |
| Satyaki | 7.20 | 0.91s | 5.14 | 23 |
| Ekalavya | 12.46 | 0.97s | 8.34 | 13 |

Arjuna/Ekalavya earn a perfect shot at this draw depth; other characters must commit longer. Bhishma trades low mid-draw DPS for the highest full-hit raw damage and stand; no character leads HP, speed, accuracy and raw damage simultaneously.

## Controlled matchups

54 fixed-skill normal-arrow trials, six per matchup with both sides swapped and seeded aim variation. Actual ballistic collisions, arrows, criticals and passives run in the real game update. No defensive input, Astra strategy or Ultimate use is simulated in this drill. Post-repair Karna starts at his actual 20% restored HP; cursed Ashwatthama starts at 12%, making those explicitly disadvantaged comeback scenarios. This is not an AI tournament or a competitive win-rate estimate. Full shots/hits/HP/durations are in BALANCE_MATCHUPS.json.

| Matchup | Six-trial outcomes | Mean combat duration |
|---|---|---:|
| Bhishma vs Arjun | Bhishma: 6 | 40.0s |
| Bhishma vs Abhimanyu | Bhishma: 5, Abhimanyu: 1 | 39.5s |
| Karna vs Arjun | Karna: 6 | 70.8s |
| Karna vs Ekalavya | Ekalavya: 5, Karna: 1 | 35.1s |
| Ashwatthama vs Arjun | Ashwatthama: 6 | 38.9s |
| Ashwatthama vs Bhishma | Bhishma: 6 | 10.5s |
| Drona vs Arjun | Drona: 6 | 43.6s |
| Satyaki vs Abhimanyu | Abhimanyu: 4, Satyaki: 2 | 45.3s |
| Ekalavya vs Bhishma | Bhishma: 6 | 37.2s |

## AI and UI

AI firing cadence and aim error read roster draw/precision. Astra field-counter AI now respects Karna's post-repair lock. Ashwatthama excludes offensive Ultimates before curse and avoids spending his cursed execution into an available enemy counter. Existing AI reaction delay and difficulty remain; no resources or damage cheats were added.

HUD shows COUNTER ONLY, cursed execution availability/spent status, PURE ARCHER / ASTRAS LOCKED, and FINAL STAND / ENHANCED ULTIMATE. The existing selection screen displays actual updated stats, critical multiplier and concise passive restrictions. No HUD redesign. FATE_DEV extends the existing offline-only debug panel with base/effective stats, restrictions, clear Rage, normal/critical damage, Karna toggle and an offensive-Ultimate attempt. Production excludes this panel.

## Tests

Passed all new character assertions, all seven ordinary Ultimate payload fractions through impact/guard handling, 30s boundary, Ashwatthama offensive denial, available counter, cursed no-counter and failed-puzzle execution, successful puzzle clash, one-use limit, Karna ready/non-ready retention and state restoration, repair vulnerability, no resurrection loop, Bhishma automatic death, Drona scope, Satyaki penalties, Ekalavya criticals and round resets.

Independent rollback peers passed delayed/reordered cursed execution and successful counter histories with matching confirmed and final full-state hashes. Existing 50/100/150/250ms one-way Astra tests passed both roles, duplicate/reordered delivery and checkpoint repair without a new room. Existing 540-frame rollback/peer handshake tests passed. New gameplay version 28 is enforced by both clients and signaling; mixed-version rooms are rejected. Existing deterministic input replay and confirmed-event authority are retained; no separate random critical/execution decision is made on either peer.

Regression coverage passed normal/Spirit arrows, drag and sky counter, armor/Mani/barrage behavior, all 96 normal/Spirit/direct/sky Astra combinations, field transformations/control, Abhimanyu weapons, passives/cinematics, Ultimate runes/voices/clashes, best-of-three lifecycle, character select/VS/touch confirmation, online rendering and voice runtime. Existing tests were updated only for intentionally changed Karna heal and Ashwatthama offensive eligibility. No broad regression gate was disabled.

## Known concerns and playtest watchlist

This is a tested balance candidate, not proof of equal competitive strength. The stationary arrow drill favors Bhishma and other durable passive users; movement, shield use, sky exchanges and player skill must be tested with real players. Watch Bhishma's Final Stand win conversion, Karna's retained-Ultimate frequency, Ashwatthama's ability to cast during protected SHATTER, and Ekalavya's perfect-shot consistency. The 30s gate should be monitored against live round duration. Ultimate fields retain control but no periodic damage, so check that their visual intensity still communicates the one-hit damage budget clearly.

No browser/device preview is available in this environment for the static/Worker project. Physical Android controls, visual readability, audio timing and real-network quality remain acceptance checks; the automated checks do not establish device FPS. No intrusive production telemetry was added. Further tuning should use human matches and the supplied test outputs rather than declaring a universal best character from one restricted scenario.
