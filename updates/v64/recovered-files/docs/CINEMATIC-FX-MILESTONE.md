# Astra cinematic FX milestone

## 1. Audit
The existing 24 Astra definitions, 24 Spirit sheets, SpriteSheetAnimator, Tactical Quiver trails, field pool/transformation table, Stability, Rage, passives, Ultimate puzzles/cinematics and WebRTC rollback remain in place. Previously, sky fields activated immediately and weather was primarily a release-time cosmetic grade. This milestone connects sky weather to the fired arrow and counterable fields.

## 2. Files changed
New modules: `web/astra-fx-config.js`, `web/battlefield-environment.js`, `web/cinematic-fx.js`.
New tooling: `dev/fx-debug.js`, `scripts/pack-cinematic-fx.py`, `scripts/validate-cinematic-fx.py`, `scripts/test-cinematic-fx.cjs`, `scripts/test-cinematic-network.cjs`, `scripts/test-cinematic-referee.mjs`, `scripts/render-cinematic-fx.cjs`.
Integration: `astra-config.js`, `astra-fields.js`, `astra-presentation.js`, `game.js`, `index.html`, `presentation-media.js`, online/server protocol constants, referee/build/service-worker scripts and test fixtures.

## 3. Modules
`AstraFXPreset` maps all 24 Astras to elemental identities and environment profiles. `FXRegistry` loads manifest geometry and selected-match textures. `BattlefieldEnvironmentController` maintains bounded authoritative invocation/weather/strike state inside the existing Astra snapshot. Rendering creates no simulation particles and consumes no simulation randomness.

## 4–8. Artwork and geometry
`FX-ASSETS.md` contains the exact generated/reused list, source provenance, dimensions, grid, frame counts and FPS. Seven priority source images are newly generated: divine shockwave, multiplication, three physical impact strengths, lightning and storm cloud. Physical arrow rain reuses Gopuccha artwork; other elemental modules reuse existing atlases. Existing 24 Spirit projectile sheets remain unchanged. Bow/string glow, rain, wind, sky ripples, solar discs, grades and fog are procedural Canvas effects.

## 9. Manifest
`web/cinematic-fx/fx_manifest.json` defines runtime paths, frame geometry, anchors, timing, blending, quality metadata and safe margins. Original sources are retained in `production/cinematic-fx-source/`. No full-screen video or duplicate 24-sheet collection is introduced.

## 10–11. Padding and clipping
The packer normalizes frames to equal cells with transparent margins. The validator checks alpha, exact geometry, nonblank frames and clear borders to prevent frame bleeding. Measured results are in `web/cinematic-fx/validation-report.json`. Visual source inspection is separate: repacking cannot reconstruct art absent from a clipped source. Any edge cleanup is documented in the asset report.

## 12. Aindrastra sequence
Existing bow formation → actual upward projectile → existing sky activation altitude → concentrated core → shockwave at 0.16 seconds → field/cloud/weather activation at 0.85 seconds → multiplication and cosmetic arrow rain → eight warned strike zones → field expiry with visual fade. Ultimate descent, Ultimate-only counters, passive damage handling and cinematic rules remain intact. There is no aiming lock and only a small camera impulse.

## 13. Gameplay
Thirteen profiles: Normal, Celestial Storm, Thunderstorm, Monsoon, Fire Sky, Solar Heat, Gale, Tempest, Mist, Steam, Cursed Sky, Forest Cyclone and Divine Radiance. Highest priority active source controls global weather; newer fields win ties. Other gameplay fields remain active.

Physical arrows receive deterministic horizontal wind acceleration. Susceptibility: Naracha 0.3, Shilimukha 1.4, default 0.8. Weather adds no random aim spread. Rain applies a single velocity reduction up to 6.5%, sets Wet and weakens fire/solar damage up to 18%. Heat increases fire damage-over-time susceptibility up to 12%; it does not inflict ambient HP damage. Mist reduces distant aim-dot and opponent silhouette clarity; the HUD remains separate.

Cinematic sky field damage is redistributed into eight zones with 0.7-second warnings, replacing those fields' former automatic damage pulses. Existing damage budgets and counters remain authoritative. Removing/countering a field cancels its pending strikes. Fire+Water transforms the field and environment into Steam. Water+Thunder retains the existing electrified-water field; transformed ground fields resume their existing pulse behavior.

## 14. Multiplayer and reconnect
Protocol 38 requires both peers to refresh. Environment ID, source, simulation timestamps, remaining duration, wind, strike zones and field IDs are captured by existing rollback snapshots. Cloud positions, rain particles, sprite frames and cosmetic volley arrows are not serialized. Reconnect samples the current simulation age rather than replaying opening effects.

A pre-existing referee omission was exposed during active-storm replay: the server did not load the browser's counter relationship catalogue. The generated referee now includes `character-config` and `astra-codex-data`; shared atlas geometry moved to `astra-config`. The active-weather test verifies counter readiness, strikes, damage, projectiles, weather, expiry and RNG against browser simulation.

## 15. Mobile, performance and tooling
Selected warriors/counters' textures preload through the existing match-loading gate. FX sheets are excluded from install-time service-worker precache and cached on demand. Low/medium/high use 50/100/180 cosmetic volley arrows and reduced weather/cloud density; high adds foreground weather. Gameplay is identical. Invocations cap at 8; simultaneous strike records cap at 16. Procedural cosmetics draw directly without allocating per-particle objects; existing impact pools remain.

`FX_DEV=1 node scripts/build.mjs` adds the development-only viewer: asset selection, play/pause/restart/step, FPS, scale, rotation, black/white/battlefield background, frame/safe bounds and anchor. Offline controls force environment, wind, rain and duration. Production builds exclude these tools.

## 16. Remaining limits
No additional user-supplied image is required for this shared prototype. Bespoke elemental shockwave shapes, a heat-refraction shader and separately recorded weather loops are not included: shared assets, local color cues, warm exposure/embers and existing tone/field audio hooks provide those effects. The implementation is a shared cinematic foundation across the roster, not 24 individually directed cinematic sequences.

Automated simulation/network tests and Canvas rendering do not establish Android frame rate or subjective animation quality. Real-device and browser playtesting remain unverified because no supported browser QA controller is available in this environment.

## Verification
Tests cover 24 presets, delayed sky activation, wind susceptibility, one-time rain drag, warning-before-damage, reconnect, expiry, Steam transformation,96 normal/Spirit/direct/sky casts, Stability, Counter Astra rules and Tactical Quiver server/API behavior. A real Aindrastra input sequence with 100/300 ms delay, duplicate/reordered delivery and rollback compares full-state hashes. Chunked server replay compares weather and combat results against the client. Canvas rendering checks loaded texture geometry and read-only combat state. Asset validation records per-frame safe-margin results.
