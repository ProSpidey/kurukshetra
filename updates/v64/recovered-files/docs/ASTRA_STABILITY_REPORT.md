# Astra Stability / Interruption — milestone 34

1. **Files inspected:** existing charge/input/damage/projectile logic in `game.js`; `astra-config.js`, `astra-fields.js`, `astra-presentation.js`, `astra-spirit-config.js`, `astra-spirit-renderer.js`; `lore.js` hit geometry/equipment; `battle-effects.js` motion; `counter-config.js`, `astra-codex-data.js`; Fate/passive hooks; `ultimate.js`; rollback capture/restore/step and RTC protocol; existing combat test fixtures and Astra debug panel.
2. **Files changed:** `web/game.js`, `astra-fields.js`, `counter-config.js`, `astra-presentation.js`, `astra-spirit-renderer.js`, `index.html`, `online.js`; `server/index.js`; `dev/astra-debug.js`; test runtime fixtures, `test-counter-system.cjs`, `test-online.mjs`, service-worker build/cache. The counter fixture now sets actual charge progress when forcing Ready, instead of only its old display flags.
3. **New modules:** `astra-stability.js` adds centralized tuning, reusable `ApplyAstraStabilityDamage`, player charge state extensions, interruption, release profiles, field scaling, and reaction-delayed AI. `astra-stability-presentation.js` renders a compact ring and status. New tests: `test-astra-stability.cjs`, `test-stability-network.cjs`. No second charge system or Counter slot.
4. **All 24 classes:** see table below. The optional counter-only Garuda Ward uses STABLE. Classes are added to the existing Astra definitions and phase data. Borrowed Counter Astras get 95% maximum Stability. No global roster rebalance or charge-duration changes.
5. **Damage:** base normal 10, charged normal 30, special 40, valid Counter-slot attack 55. Apply hit-zone, Perfect ×2 (otherwise critical ×1.15), valid elemental relationship ×1.25, then shield ×0.5 where applicable. Catastrophic non-Ultimate formation at 85% charge reduces pressure by 30%. API deduplicates source hits per charge. DOT, anonymous legacy burn damage and incoming Ultimates do not apply ordinary Stability pressure.
6. **Hit zones:** low ×0.7, body ×1, head/precision ×1.6. Unshielded arrows use existing swept-contact hit zones. Shield contacts classify projected height at the shield boundary; they do not imply an actual body impact through the shield.
7. **Shield:** existing integrity and ordinary-arrow HP protection remain separate. Ordinary shield contact still wears integrity by its existing amount and now applies half Stability pressure. Connected charged/special hits additionally wear 2/4 integrity. No HP is deducted by the Stability API. Pre-existing bowstring damage can still stop charging through the equipment rules; no new wheel-targeting system was added.
8. **Early release:** normal quick taps remain normal Astras. A deliberate Spirit draw released below 25% cancels without spending ammo, with 0.2s recovery. At 25/50/75/100% it becomes Minor/Partial/Empowered/Full. A release spends one normal Astra use (including the one-use Counter slot), base Resolve cost plus scaled Spirit surcharge, and scaled Spirit cooldown. The profile travels on the projectile and field.
9. **Hard control:** Agneya/Nagastra require at least 90% actual charge for Level 5. Earlier releases cap control by stage and never create a hard lock. Existing resistance and diminishing returns still apply. Partial Nagastra retains bounded initial tracking. See independent scaling table below.
10. **Counters:** the existing resolver determines pre-release elemental pressure. A valid counter hit pressures concentration; after release the existing projectile/field resolver remains in charge. Partial counters no longer receive full Spirit counter strength: cancellation/transformation against a full Spirit field weakens it where applicable. Full counters retain existing transformations. No extra counter inventory, selection screen or slot.
11. **AI:** observes current charge/Stability after the configured difficulty reaction delay. It can commit a Counter early, pressure with quick or charged arrows, or let existing field/counter/Ultimate AI handle the situation. It can release a vulnerable own charge early. The held-input interruption latch is released before AI rearms. Decisions consider health/Resolve and existing hazards; no future inputs are read. This is a deterministic heuristic, not a comprehensive tactical search.
12. **Online authority:** existing two-peer deterministic RTC rollback, not a new host-authoritative server. Charge serial/cast ID, current/max Stability, class/state/version, damage source, dedup IDs, recovery and release profile live in captured state. Input actions commit before simulation collisions within a frame; a committed release wins over subsequent contact, while a previously broken charge rejects release. Recovery and a release-input latch prevent duplicate/automatic rearming. Event timestamps use simulation time. No per-frame animation messages. Protocol 34 rejects incompatible older gameplay versions.
13. **Debug:** charge controls retained; added Stability percentage, Stable/Unstable/Critical, damage 25, forced interruption, 50%/100% release, shield toggle, head/charged/Water Counter hit. Inspector displays charge, complete Stability state/class/max/source/cast ID/recovery and ordered events/authority. Mutating controls remain offline-only and excluded from production. Latency is exercised in automated fixtures; no new debug packet-loss panel.
14. **Tests:** commands and coverage below. All listed suites passed. New network tests exercise both charging seats and both release/contact orders at 50/100/150/250 ms, with duplicates/reordering and matching full-state hashes. Existing fire/water/counter delayed-network and checkpoint-repair suites still pass.
15. **Balance concerns:** a Perfect charged head hit is intentionally a strong interruption threat; competitive tuning still needs playtesting. Fragile charges break sooner but recover faster. Recovery begins after 0.65s without pressure; movement ×0.85, existing equipment damage ×0.8, dismounted/destroyed chariot ×0.7. Interrupted casts spend no ammo/Resolve and recover for 0.6s before 50%, 0.75s at 50–84%, 0.95s at 85%+. Recovery delays attacks/charge, not guard or general movement, and grants no HP invulnerability.
16. **Limits / deliberate compatibility:** all eight roster Ultimates retain their existing startup/puzzle/cinematic rules. Their class metadata exists, but normal Stability interruption and partial-release scaling are not applied to them. Therefore the brief's Pashupata partial-field example is not enabled: Pashupata is already a protected Ultimate, as are Vasavi Shakti and Brahmashira. Existing pre-commit startup interruption remains unchanged; committed cinematics are protected. Brahmastra is an advanced non-Ultimate here and does receive Stability/reinforcement. Drona-specific mastery pressure bonuses and Bhishma-specific Stability buffs were optional and not added. Sound uses existing synthesis hooks; no recorded audio was supplied. No real-device/Internet session or performance soak certification; tests use the project's simulation/UI fixtures. Existing full-disconnect recovery limitation remains. No battlefield-event milestone was started.

| Warrior | Astra Stability classes |
|---|---|
| Arjuna | Aindrastra NORMAL; Gandiva Gale STABLE; Pashupata VERY_STABLE |
| Karna | Surya Shaft NORMAL; Nagastra FRAGILE; Vasavi Shakti VERY_STABLE |
| Bhishma | Ganga’s Guard VERY_STABLE; Kuru Thunder NORMAL; Prabhasa STABLE |
| Drona | Agneya NORMAL; Brahmastra VERY_STABLE; Acharya’s Judgment STABLE |
| Abhimanyu | Chakra Volley FRAGILE; Rudra Rush STABLE; Subhadra Tempest NORMAL |
| Ashwatthama | Rudra Ember NORMAL; Narayana Burst VERY_STABLE; Brahmashira VERY_STABLE |
| Satyaki | Vrishni Wind STABLE; Varuna’s Tide NORMAL; Yuyudhana Storm NORMAL |
| Ekalavya | Forest Fang STABLE; Nishada Flame NORMAL; Aranya Cyclone STABLE |

| Class | Maximum | Recovery/second |
|---|---:|---:|
| FRAGILE | 70 | 15 |
| NORMAL | 100 | 12 |
| STABLE | 125 | 10 |
| VERY_STABLE | 150 | 8 |

| Release | Damage | Radius | Duration | DOT | Force | Cooldown | Control cap before 90% |
|---|---:|---:|---:|---:|---:|---:|---:|
| Minor 25–49% | .45 | .5 | .3 | .4 | .4 | .65 | 1 |
| Partial 50–74% | .65 | .65 | .5 | .6 | .65 | .8 | 2 |
| Empowered 75–99% | .85 | .85 | .8 | .8 | .85 | .95 | 4 |
| Full 100% | 1 | 1 | 1 | 1 | 1 | 1 | 5 |

Multipliers are relative to the existing full Spirit values. Stability state bands: STABLE ≥75%, SHAKING ≥50%, UNSTABLE ≥25%, CRITICAL >0%, BROKEN 0%. Numeric meters are shown for the local player (both seats in Local 1v1); opponents get qualitative feedback. Rings, charge flicker, collapse sprites and throttled sound cues supplement the existing HUD. Presentation is read-only and respects reduced motion.

```sh
node scripts/test-astra-stability.cjs
node scripts/test-stability-network.cjs
node scripts/test-astra-system.cjs
node scripts/test-astra-network.cjs
node scripts/test-counter-system.cjs
node scripts/test-counter-network.cjs
node scripts/test-counter-flow.cjs
node scripts/test-astra-codex.cjs
node scripts/test-astra-codex-ui.cjs
node scripts/test-astra-codex-compat.cjs
node scripts/test-astra-spirit.cjs
node scripts/test-balance.cjs
node scripts/test-charge-feel.cjs
node scripts/test-direct-hits.cjs
node scripts/test-game.cjs
node scripts/test-online.mjs
```

New assertions include HP-independent pressure, real shield collision/depletion, low/body/head, Perfect/charged/special/valid-counter pressure, duplicate hit rejection, interrupts at 10/49/90%, held-input rearm prevention, delayed recovery/motion penalties, 25/50/75/89/90/100% releases for Agneya and Nagastra, ammo/field/control scaling, partial water weakening, late catastrophic reinforcement, incoming/charging Ultimate immunity, both same-time API orderings, death/round reset, Karna lockout, rollback restore, reaction-delayed AI pressure, and presentation/state parity. Existing balance tests cover Bhishma Final Stand and Ashwatthama curse/puzzle/execution restrictions.
