> Artwork update: the newer user-supplied sheets now replace the original 4×4 assets. See ASTRA_COLLECTION_REBUILD.md for the current layout, icon and encoding details. The report below documents the earlier integration.

# Astra Spirit integration — release 32

Implemented in the existing game; supplied artwork was not regenerated, recolored, or edited. This is a tested integration milestone, not a claim that every acceptance criterion has been device-certified.

1. **Files changed.** Combat hooks: `web/game.js`, `astra-fields.js`, `astra-config.js`, `ultimate.js`. UI: `index.html`, `battle-ui.js`, `astra-codex-data.js`, `astra-codex.js`. Compatibility: `web/online.js`, `server/index.js`, `scripts/build-sw.mjs`. Debug: `dev/astra-debug.js`. Test fixtures: `astra-test-runtime.cjs`, `counter-test-runtime.cjs`, `test-online.mjs`.
2. **New modules.** `web/astra-spirit-config.js` defines all 24 asset mappings and impact events. `web/astra-spirit-renderer.js` contains `SpriteSheetAnimator`, texture caching, charge/flight/impact rendering, effect pooling, confirmed-event deduplication, and round cleanup. `scripts/test-astra-spirit.cjs` validates assets and presentation. Original sheets/icons, manifest, README and checksums are in `web/effects/astra-spirits/`.
3. **Loading.** The supplied manifest specifies 384×216 cells, 4×4, 16 frames, 20 FPS. Summon 0–3; charge 4–7; ready holds 7; moving flight loops 8–11; impact plays 12–15. Only the current combatants' sheets and counter choices are preloaded/retained across roster changes. Legacy visuals remain a loading/failure fallback. Canvas uses source-over alpha. Icons appear in compact combat orbs and the existing Astra/counter detail UI.
4. **Normal vs Spirit.** Existing centralized 1.5–3 second Astra charge timings, resource costs, shield integrity, cancellation, cooldowns, damage, and field strengths remain active. Normal release is quick; full charge activates Spirit mechanics. Charging formation follows charge progress; flight follows actual projectile position/velocity. Ordinary spirit arrows keep their separate faster draw rules.
5. **Direct vs Sky.** Existing deliberate Sky selection and visible mode indication are retained. Spirit direct ballistic carriers activate ground effects; Sky casts invoke existing sky fields/descent behavior. Ganga's direct defensive field forms at the caster. No enlarged visual changes a hitbox.
6. **Counters/elements.** Existing reusable fields and counter matrices continue handling steam, electric water, embers and mist, including movement-lock release and resistance. Ultimate-only counter gates, rage, rune puzzles and cinematics remain intact. Impacts are wired at player/ground hits, field blocks/counters, consumed projectile clashes, Ultimate clashes and cursed execution. Synthesized cues vary by effect family; summon/charge/ready/release/flight/impact/field/counter/transform/end hooks exist.
7. **Multiplayer.** Both peers retain deterministic input prediction/rollback over RTCDataChannel. Simulation records stable cast/projectile/field IDs and impact events; no sprite frames are transmitted. Visual impacts consume confirmed events, deduplicate IDs and reject stale events. Active fields reconstruct from checkpoint state. Protocol 32 prevents mixed-version rooms. Speculative round resets do not reset presentation deduplication; confirmed round changes do.
8. **Performance.** Cached selected textures, reusable animators and pooled impact effects; impact limits high 24, medium 12, low/reduced motion 6. Existing eight-field/100-projectile limits remain. Quality does not change simulation results. No per-frame DOM creation was added. Projectile allocation remains the existing bounded implementation; a new projectile pool was deliberately not claimed. No measured Android FPS/memory certification was performed.
9. **24 Astras verified.** All 24 sheets and icons decode with transparent and soft-alpha pixels; checksums preserve recovered supplied bytes. The existing 96-cast matrix exercises Normal/Spirit × Direct/Sky for the 24 signatures. See roster table below. Delayed-network tests cover representative fire/water/counter interactions in both roles, not separate human online matches for every Astra.
10. **Remaining issues / compatible alternatives.** Some supplied frame artwork contains labels and sharply clipped illustrated edges despite README wording. These were retained unchanged; no black matte was added. The eight roster Ultimates preserve their existing large direct-hit damage budget: their fields do not add a second repeating Ultimate damage budget. Persistent-field effects reuse the existing field renderer rather than a unique new sheet animation per field. New recorded Astra audio was not supplied; family-varied synthesis is used. A fully closed connection still requires a new room; checkpoint repair handles connected desync, not full reconnect. Real Android/touch/browser rendering, actual internet peer connectivity, low-end performance, and long-session soak checks remain manual. Debug packet-loss simulation was not added; existing automated delayed/reordered/duplicate-input tests were retained.
11. **Exact tests.** Commands below passed on the recovered implementation. The generated contact sheet was inspected for layout and alpha; it is not a browser screenshot. Automated UI tests use the project's fixtures, not a real phone.

| Warrior | Verified signatures |
|---|---|
| Arjuna | Aindrastra; Gandiva Gale; Pashupata Radiance |
| Karna | Surya Shaft; Nagastra; Vasavi Shakti |
| Bhishma | Ganga’s Guard; Kuru Thunder; Prabhasa Radiance |
| Drona | Agneya Astra; Brahmastra; Acharya’s Judgment |
| Abhimanyu | Chakra Volley; Rudra Rush; Subhadra Tempest |
| Ashwatthama | Rudra Ember; Narayana Burst; Brahmashira |
| Satyaki | Vrishni Wind; Varuna’s Tide; Yuyudhana Storm |
| Ekalavya | Forest Fang; Nishada Flame; Aranya Cyclone |

```sh
node scripts/test-astra-spirit.cjs
node scripts/test-astra-system.cjs
node scripts/test-astra-network.cjs
node scripts/test-counter-system.cjs
node scripts/test-counter-flow.cjs
node scripts/test-counter-network.cjs
node scripts/test-astra-codex.cjs
node scripts/test-astra-codex-ui.cjs
node scripts/test-astra-codex-compat.cjs
node scripts/test-balance.cjs
node scripts/test-direct-hits.cjs
node scripts/test-charge-feel.cjs
node scripts/test-spirit-arrows.cjs
node scripts/test-game.cjs
node scripts/test-online.mjs
```

Network tests: 50/100/150/250 ms one-way, normal/swapped roles, reordered and duplicate inputs, simultaneous casts/counters, matching confirmed full-state hashes, exactly-once counter use, and checkpoint repair. Combat tests include Agneya/Varuna/Ganga/Wind, Water/Thunder, Nagastra bind and diminishing returns, Karna repair lockout, Bhishma final stand, Ashwatthama curse/execution, Narayana restraint, Ultimate-only counters and round cleanup.
