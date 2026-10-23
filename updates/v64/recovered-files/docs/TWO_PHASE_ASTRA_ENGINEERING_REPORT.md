# Kurukshetra Astra Warfare — Release 24 engineering report

## Delivery and scope

This milestone extends the existing game with a data-driven Two-Phase Astra, Spirit Charge and battlefield counter system. It does not rebuild the game. All 24 existing character Astras have Normal/Spirit and Direct/Sky release paths. The eight existing Ultimate-tier weapons retain the Ultimate-only timed counter puzzle; choosing Normal does not downgrade an Ultimate to an ordinary Astra.

The authoritative supplied brief is retained in `TWO_PHASE_ASTRA_BRIEF.txt`. The complete behavior table is in `ASTRA_CATALOG_RELEASE24.md`; machine-readable balance data is in `ASTRA_BALANCE_RELEASE24.json`.

Automated production-code checks pass. Actual Android performance, touch ergonomics, pixel appearance, cross-browser WebRTC and real-world network conditions have not been verified in this environment. The release is an implemented milestone with these QA limitations, not a claim of finished competitive balance.

## Files created

- `web/astra-config.js`: 24 phase configurations, field templates, control settings, counter transformations and audio hooks.
- `web/astra-fields.js`: deterministic charge, field, movement, counter, damage and AI simulation.
- `web/astra-presentation.js`: read-only atlas rendering, telegraphs, HUD and quality levels.
- `web/effects/astra-elements.png`, `web/effects/astra-controls.png`: generated transparent effect atlases.
- `dev/astra-debug.js`: development-only field and charge laboratory.
- `scripts/astra-test-runtime.cjs`, `scripts/test-astra-system.cjs`, `scripts/test-astra-network.cjs`, `scripts/test-astra-presentation.cjs`: integrated production-code test fixtures and checks.
- The brief, this report, the catalog, balance export and two effect prompt records in `docs/`.

## Files modified

- `web/game.js`: charge hooks, phase release, projectile decoration, shield wear, field updates, cleanup, drawing and bounded effects.
- `web/battle-effects.js`: explicit Sky classification and field dispatch; wind aim interference.
- `web/lore.js`: movement scaling and field forces without total input locks.
- `web/fate-game.js`: dodge interrupts charge; melee contributes to Narayana threat.
- `web/rollback.js`: checkpoint restoration and resimulation.
- `web/rollback-game.js`: field snapshots, batched input transport, recoverable confirmed-state reconciliation.
- `web/rtc-net.js`: batch and recovery packet routing over the existing RTCDataChannel.
- `web/online.js`, `server/index.js`: protocol 24 and synchronization status.
- `web/index.html`, `web/style.css`: compact phase HUD, effects quality setting, updated help and release label.
- `web/sw.js`, `scripts/build-sw.mjs`: new cached assets and version.
- `scripts/build.mjs`: opt-in developer laboratory, absent from production.
- `scripts/test-online.mjs`, `scripts/test-rollback.cjs`: protocol update and matching-frame comparison for batched transport.

## Charge, shield and cast architecture

The existing drag overdraw ring remains the deliberate charge gesture. Aiming inside it does not charge. Keyboard hold remains supported. Releasing early fires Normal; reaching the per-Astra 1.5–3 second threshold enables Spirit, at an additional 12 Resolve or 15 for existing Ultimate-tier weapons. Charge speed still observes character modifiers. Charge states, progress and shield integrity are rollback state.

The temporary shield begins with 12 integrity. Ordinary low-power arrows wear it down one point each instead of dealing direct HP damage. It ends on release, cancellation, dodge, switch, heavy damage, death or round cleanup. Strong ordinary arrows, special attacks and Ultimates retain their separate collision rules. Heavy interruption starts at 16 damage; ordinary DOT does not continually cancel charging. Holding is bounded and existing rearm delay prevents continuous protection.

Existing aura, bow glow and percentage feedback are supplemented with a rotating sigil and compact phase label. There is no additional charge button. The existing Sky selection explicitly determines Astra Sky casts; high angle alone does not silently switch modes. Spirit direct projectiles travel toward the opponent's release-time ground position. Moving away is meaningful.

## Fields and movement control

Fields carry `fieldId`, `castId`, owner, spell, state version, simulation timestamp, center, lifetime, pulse timer, tags, control, blocking and transformation state. At most eight exist; expired instances are pooled. Cast IDs prevent duplicate field spawns. Rendering never creates gameplay objects.

Control levels are differentiated: pressure, slow, push/pull/drift, containment and rare hard movement lock. Only ground Agneya Fire Circle (4.5 seconds) and Nagastra Bind (2 seconds) use level 5. Their Sky variants use softer control. Forest Fang, Subhadra Tempest and Aranya permit movement against containment/pull.

Movement lock does not prevent aiming, selecting, charging or firing a counter. Leaving a lock grants 2 seconds of Control Resistance. Repeated locks within 12 seconds scale to 100%, 70%, 40%, then zero duration. Valid counters release an active lock immediately. Field DOT uses the existing `hurt`/Fate pipeline; it does not implement a competing death-interception system.

## Counter and transformation rules

Ordered tag interactions support cancel, weaken, transform, displace, shorten and reflect outcomes. Reflect is available in the engine but is not assigned to an arbitrary existing weapon. Strength, cast form and Ultimate-tier restrictions are evaluated before a rule applies.

| Interaction | Result |
|---|---|
| Fire + Water | Short-lived Steam Cloud; reduced trajectory visibility |
| Fire Tornado + Varuna Sky/Spirit | Steam; normal direct Varuna does not qualify |
| Fire Tornado + Ganga | Extinguishing Steam transformation |
| Fire + strong Wind | Larger, shorter, weaker Ember Storm |
| Water + Thunder | Electrified Water with pulses and slow; affects both players |
| Water + Wind | Dispersed Mist |
| Serpent + appropriate Divine | Cancel |
| Serpent + strong Wind | Shorten |
| Storm + Wind / Barrier | Weaken / shorten |
| Curse + Divine | Cleanse |
| Forest + Divine | Displace |
| Radiance + Barrier | Weaken |
| Divine + sufficiently strong Divine | Weaken, subject to Ultimate tier |

Ordinary field barriers never block Ultimate projectiles. Ultimate-origin fields also reject non-Ultimate counter weapons. Two counters apply in deterministic simulation order; the same cast cannot repeatedly transform a field. Expiration and counter removal release associated movement locks.

## Character-specific behavior

The accompanying catalog lists all 24 weapons and all four forms. Notable integrations include avoidable early Nagastra tracking, repeated Chakra ring pulses with boundary openings, Drona's learned-pattern damage/seal modifiers, Narayana threat growth on attacks and decay while the bow is lowered, and Aranya's short precision opportunity after the final field phase. The precision bonus is explicitly limited to 12%. Display spelling uses Nishada Flame; stable IDs and existing voice assets remain unchanged.

Several storm attacks use deterministic area pulses with decorative descending arrows/fireballs rather than a collider for every visible particle. These visuals communicate pressure areas, not individual dodgeable projectiles. This is an intentional performance simplification and remains a limitation compared with fully independent storm-projectile simulation.

## AI

Solo AI observes new fields and enemy charge telegraphs after difficulty-dependent reaction delays of 1.1, 0.7 or 0.4 seconds. It selects eligible counters, prefers water against fire, prepares Spirit when affordable, uses Sky where needed, attempts to move outside fields and avoids repeatedly firing ordinary arrows into blocking fields. Against Narayana it lowers its bow and stops attacking.

This is a bounded tactical heuristic, not a full strategic planner. Real playtesting is still needed for escape timing, field overlap, resource conservation and difficulty tuning.

## Visuals, audio and camera

Two image-generation tool calls produced transparent 1254×1254 atlases: four frames each of Fire Circle, Fire Tornado, Water, Steam, Electricity, Embers, Serpent and Forest effects. They are actual integrated assets, not image placeholders. Exact prompts are retained in `ASTRA_EFFECT_PROMPT_1.txt` and `ASTRA_EFFECT_PROMPT_2.txt`. Custom row boundaries account for uneven generated cell spacing.

High, Medium and Low effects settings change only draw density and animation. Reduced-motion mode uses the simplified path. Existing charge and battle effects remain; major field spawning uses a brief camera shake accent. This is not a new cinematic camera system or a bespoke animation set for all 24 weapons.

Central event hooks cover SpiritChargeStart, SpiritChargeLoop, SpiritChargeReady, SpiritRelease, GroundCast, SkyCast, FieldSpawn, FieldLoop, FieldCounter, FieldTransform and FieldExpire. They reuse the existing tone system. Loop cues are finite scheduled tones, so there are no persistent audio loops to leak. Existing dialogue, Ultimate callouts, conch and arrow sounds are preserved; no new voice recording is claimed. Online sound effects commit on confirmed frames to avoid replaying speculative audio after rollback.

## Networking and rollback

The existing 10-character room system remains signaling-only for SDP/ICE. Normal match simulation is peer-to-peer over RTCDataChannel. Both peers simulate at 60 Hz with immediate local prediction and bounded history. Input frames are batched around 30 Hz; particles are not individually networked.

Snapshots now include field/control/charge state. Late remote inputs restore a prior simulation snapshot and replay, then Canvas draws the corrected world. Render quality, image loading and local HUD hints do not enter the simulation hash.

A confirmed mismatch starts checkpoint recovery instead of displaying the old “State mismatch. Please start a new room.” message. The room creator supplies a confirmed checkpoint as a recovery tie-breaker; it does not run ordinary combat for the other peer. Checkpoints are hashed, bounded to 500,000 characters, split into 4,000-character chunks, assembled out of order and validated before restoration. Later inputs are replayed without recommitting old audio. Acknowledgment completes recovery. Duplicate completed repairs are acknowledged without applying them twice.

Recovery is bounded by available history and a 12-second timeout. A closed tab, disconnected channel or unreachable network still requires reconnection. TURN remains dependent on existing deployment configuration. This friendly-match recovery mechanism is not an anti-cheat authority model.

## Development tools and performance

Build with `ASTRA_DEV=1` to include the Astra Lab. The normal published build excludes it. It provides character/Astra selection, charge percentage, readiness, direct/sky release, normal/spirit spawning, valid/invalid counters, transformation, expiry and clearing. It displays IDs, tags, control, block rules, duration, authority and state version, plus field geometry. It refuses mutations during online play.

Limits include eight fields, 100 ordinary spawned/pending projectiles, 96 retained Astra events, 300 legacy particles and 120 legacy rings. Existing fixed-step simulation, bounded rollback history and reusable field objects are retained. Generated atlas size and overlapping effects still warrant measurement on low-end Android devices.

## Validation

| Check | Result |
|---|---|
| All 24 × Normal/Spirit × Direct/Sky | 96 actual release paths passed |
| Fire/Water/Wind transformations, electrified water | Passed |
| Fire lock, short serpent bind, resistance, 100/70/40/0 returns | Passed |
| Forest/Tempest/Aranya soft control | Passed |
| Finite charge shield, cancellation, explicit Sky | Passed |
| Delayed AI water-counter preparation | Passed |
| Narayana attack/passive response | Passed |
| Arjuna/Karna/Bhishma/Ashwatthama lethal field pipeline | Passed |
| Ultimate barriers and existing puzzle rules | Passed |
| Independent peers at 50/100/150/250 ms one-way delay, both role arrangements | Full confirmed state hashes matched |
| Simultaneous casts, delayed/reordered inputs, duplicates | Passed |
| Injected mismatch and reverse-order checkpoint chunks | Recovered without new room |
| High/Medium/Low rendering and HUD | Passed mocked Canvas execution and read-only state checks |
| Existing rollback transport handshake and unequal frame-rate fixture | Passed with common confirmed-frame comparison |
| Existing normal combat, charge feel, all eight passives, Abhimanyu, Ultimate voice timing | Passed |
| Actual signaling Worker with SQLite fixture | Passed |
| Production build / developer lab exclusion | Passed |

Latency tests emulate delivery/retransmission delays on a reliable channel, not actual packet loss in an operating-system network stack. Canvas execution tests do not prove pixel quality. The managed preview environment does not support this plain static-plus-Worker project's browser preview, so no live browser/device QA is claimed.

## Known limitations and next milestone

There are no intentionally missing image assets. Some effect families and pressure simulations are shared, audio hooks use synthesized cues, and decorative storms are not per-particle colliders. Charge and field balance are initial values. At sustained high latency the bounded prediction window can pause advancement rather than permit unlimited prediction. Real WebRTC interoperability, low-memory asset loading, mobile FPS and touch readability remain unverified.

Recommended next milestone: real-device and two-network multiplayer QA, followed by evidence-based balance and effect readability adjustments. No Play Store work, extra characters or unrelated modes were started.
