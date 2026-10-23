# Legendary Fate update — implementation and validation

This update extends the existing game. The eight passive definitions, combat integration, host-authoritative replication, mobile HUD, placeholder animation/camera presentation, configurable dialogue, audio hooks, and developer controls are implemented. Dedicated sprite sequences and physical two-device/browser acceptance testing remain outstanding. Abhimanyu's melee is a limited prototype, not a complete melee combat system.

## Files created

- `web/fate-core.js`: serializable PassiveController, registry, transitions, pre-death interception, healing policy, event IDs, FateEventController presentation timeline.
- `web/fate-config.js`: character balance, shared dodge/strike parameters and cinematic stages.
- `web/fate-characters.js`: eight independent passive definitions.
- `web/fate-game.js`: adapters between existing game APIs and passive simulation; cast outcomes, player/chariot state, commands, snapshot reconstruction.
- `web/fate-presentation.js`: overlay HUD, subtitles, camera insets, placeholder poses, auras, crack/arrow-bed/Mani/weapon graphics, keyboard actions and independent presentation hooks.
- `web/fate-assets.js`: named final-animation slots, all explicitly PLACEHOLDER.
- `dev/fate-debug.js`: host-only testing controls, included only by development builds.
- `scripts/test-fates.cjs`, `test-fate-integration.cjs`, `test-fate-network.cjs`, `test-fate-presentation.cjs`: passive, integration, independent replica and renderer smoke tests.
- `docs/SPRITE_ASSET_REQUIREMENTS.md`: per-animation production specifications.
- This report and `docs/FATE_MANUAL_TESTS.md`.

## Files modified

`web/game.js`, `lore.js`, `ultimate.js`, `battle-effects.js`, `online.js`, `index.html`, `style.css`, `sw.js`; `server/index.js`; `scripts/build.mjs`, `build-sw.mjs`, `test-online.mjs`, `test-online-render.cjs`.

## Framework and damage order

Existing shield mitigation → passive damage/critical mitigation → calculate prospective HP → passive interception → commit HP → threshold/reaction transitions → death if still zero. A protected character is never killed and revived afterward. Healing goes through a policy check. Modifiers are computed, not permanently multiplied into the roster.

The passive controller advances on the host's existing combat tick. Every transition has a match/round/serial activation ID, version and authoritative combat timestamp. Initial input states also have round-specific IDs. Round reset recreates transient states; match consumption persists until a new match. Krishna's manual and automatic rescue share one consumption record.

Cast outcomes resolve once per cast, after every volley/rapid arrow finishes; damage-over-time does not grant Pursuit or Focus. Perfect shots use the existing full spirit-draw timing, with passive window modifiers. Sky invocation counts as a successful cast. This is a deliberate definition for the prototype; weak-point hit location is not a separate critical multiplier system.

## Eight passives

| Warrior | Implemented behavior |
|---|---|
| Karna | First ≤30% HP activates six-second Kavacha, 65% reduction, stagger/critical resistance and visual cracks. First lethal damage enters vulnerable wheel repair at 8% HP. Four timed gold-window taps before 12 seconds remount him at 25% HP; eight-second damage/draw/Resolve comeback. No repeat wheel or armour. |
| Bhishma | Crossing 1%, including lethal damage, clamps health at 1%; ten combat seconds of invulnerability, no healing, +35% damage/draw, faster Astra refill and full Resolve. Automatic final death and arrow-bed placeholder. |
| Arjuna | Once per match, lethal interception retains 13% HP; Krishna chariot lowering and cosmetic passing projectile; seven-second perfect-window/draw/trajectory and puzzle benefits. Shares manual rescue charge. |
| Drona | Each hostile Astra tracked independently as observed/understood/mastered. At three casts, incoming resistance and puzzle/counter benefits apply only to that Astra. Next-rune hint for mastered Ultimate; meditative death pose. |
| Abhimanyu | At 22% HP or debug chariot destruction, on-foot mode, faster movement/attacks/Resolve, tier-two restriction. Bow/sword/mace progression feedback and short-range Strike prototype. Standard ranged combat is retained to avoid stranding the character across the arena. |
| Ashwatthama | Mani resists elemental/Astra damage and status duration and boosts Resolve. First lethal hit grants five seconds at 1% with no healing, then 12% HP restoration. Permanent round-long vulnerability after shattering. |
| Satyaki | Consecutive successful casts build five Pursuit stacks, affecting draw/movement/projectile speed. Five triggers six-second Fury. Miss clears stacks; critical received clears stacks and ends Fury. |
| Ekalavya | Perfect casts build Focus, misses/decay lower it; full Focus grants eight-second Instinct. Once-round voluntary sacrifice reduces normal damage 15% for Astra refill, puzzle and precision benefits. |

## Presentation, cutscenes and dialogue

FateEventController exposes ENTER → PREPARE → CAMERA → ANIMATION → DIALOGUE → INTERACTION → RESOLVE → RETURN_TO_COMBAT → END. Presentation samples these stages independently. Two simultaneous events can display together. Inset character/wheel/charioteer/weapon camera framing keeps the battlefield visible; Fate scenes never set `paused` or stop the combat loop. Existing Ultimate puzzle and earth-shattering pauses remain unchanged.

Placeholder animation uses existing atlas poses plus ducking, wheel repair, bow stance, meditation/fall transforms and procedural layers. Abhimanyu has temporary weapon overlays. The named asset slots describe every remaining sequence. They are not final sprite sheets.

Dialogue entries contain character, trigger, line, optional response, voice ID, subtitle duration and priority. Voice IDs are null until recordings are supplied. `OnPassiveTriggered`, `OnPassiveEnded`, `OnFateEventStarted`, `OnFateEventResolved`, `OnComebackStarted`, `OnFinalStandStarted`, `OnCharacterDeathSpecial`, `AnimationEvent`, `AudioEvent` and `MusicEvent` are presentation hooks. Temporary procedural motifs accompany dialogue; Bhishma has a final-stand pulse. Full scored music and voice acting are not supplied.

## Networking

Host authority is unchanged; the Worker/D1 service remains a relay, not a trusted combat server. Protocol 15 prevents mixing old clients with passive-enabled clients. Full passive state and active cast records ride existing snapshots; no new per-frame RPC channel is introduced. Snapshot sequence numbers reject duplicate/older state. State/phase IDs, timed-beat checks, consumption flags, and existing server nonce deduplication protect commands.

Guests send `fate` commands with operation and activation ID. The host only accepts repair, sacrifice, dodge and prototype strike operations; it decides timing, HP and outcomes. Debug destruction/mastery/HP commands are not accepted by the production relay command handler. A restored snapshot reconstructs active timers, chariot state, consumed rescue and learning. Presentation deduplicates recent event IDs and skips stale event replay.

There is no host migration. Host disconnect still uses the game's existing interruption behavior. This milestone does not claim to eliminate the earlier HTTP-relay latency. The unfinished direct-connection experiment was preserved in Git stash and not mixed into this release.

## Balance and debug

All passive tunables are in `fate-config.js`: thresholds, durations, reduction, healing, draw/damage/Resolve/movement/refill multipliers, mastery count, Focus and Pursuit values, puzzle bonuses, repair hits/window/deadline, dodge and prototype strike values.

Build production with `node scripts/build.mjs`. Build testing controls with `FATE_DEV=1 node scripts/build.mjs`. The development build adds a panel for both seats; online guests cannot mutate authority. It supports HP presets, lethal damage, reset, Rage/Ultimate readiness, every passive trigger, repair completion/failure, mastery, stacks/Focus, destruction, Ultimate collision, round end and restart. Do not deploy a development build. No packet-loss UI was added; delayed/skipped snapshots are exercised in automated simulation.

## Automated results

- Character tests ran in the requested order: Karna, Bhishma, Arjuna, Drona, Abhimanyu, Ashwatthama, Satyaki, Ekalavya.
- Pre-death interception, armour, vulnerable repair, successful repair/remount, one-use limits, healing locks, forced final death, per-Astra mastery, on-foot transition, Mani weakness, stacks and Focus pass.
- Seven scripted projectile rounds complete in independent host/guest runtimes with identical passive and health state: Karna/Bhishma, Arjuna/Karna, Drona/Arjuna, Abhimanyu/Drona, Ashwatthama/Arjuna, Satyaki/Karna, Ekalavya/Arjuna.
- Simultaneous lethal triggers, guest non-authority, duplicate and stale repair input, stale snapshots and mid-passive reconstruction pass.
- Existing Ultimate-only counter, Rage gate, rune ordering/authority/timeout, failed-puzzle resource retention, successful counter spending, Ultimate clash, direct hit cinematic and reset tests pass.
- Existing relay authentication, room capacity, retry deduplication, acknowledgments, expiry and Android-origin tests pass.
- All eight overlay/pose/cinematic render paths execute under a stub DOM/Canvas smoke harness.

These are automated simulations, not a claim of physical phone playtesting or browser screenshot review. The project's plain Worker/static setup has no compatible managed browser preview in this environment. Follow the manual checklist before treating this as release-candidate mobile QA.

## Known limitations and next priority

No newly discovered failing automated case remains at handoff. Remaining limitations: placeholder art/voice/music; prototype melee; repair timing is judged on host receipt so high latency affects a narrow timing window; no host migration; existing HTTP relay lag remains; no measured device frame-rate or real touch-screen verification. HP bars, Astra HUD and new passive overlays need final small-screen visual review. Old Android binaries require a rebuild to use protocol 15; this milestone does not include a new signed Play Store binary.

Next priority: run the two-device acceptance matrix, tune repair timing against measured RTT, replace placeholder sequences with the asset report's final sprites, then build and sign the Android release. Do not add unrelated features before those checks.
