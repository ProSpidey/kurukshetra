# Character Selection + Dynamic VS Intro — release 26

Implemented in the existing game, using the supplied PNGs unchanged. The attached brief is preserved in CHARACTER_SELECT_VS_BRIEF.txt. This milestone adds presentation and lobby selection only; current combat values, passives, Astra/Ultimate behavior, winner presentation, rollback simulation and host match-start handshake remain intact.

## Files created

- `web/character-config.js`: shared presentation adapter and alignment/timing configuration.
- `web/matchup.js`: shared character selection, preload/transition controller, real-time Canvas VS renderer and rematch integration.
- `web/matchup-online.js`: selection/ready/preload/presentation barrier over the existing peer channel.
- `web/matchup.css`: responsive selection, roster and VS overlay styles.
- `web/matchup/*.png`: eight supplied warrior PNGs, VS logo, lightning sheet and retained static electric reference.
- `dev/matchup-debug.js`: development-only alignment and timeline lab.
- `scripts/matchup-test-runtime.cjs`, `scripts/test-matchup.cjs`: UI fixtures, actual Canvas rendering and paired peer-channel tests.
- `docs/CHARACTER_SELECT_VS_BRIEF.txt`, this report.

## Files modified

- `web/index.html`: stylesheet/scripts and release label.
- `web/game.js`: one presentation update hook in the existing animation frame loop.
- `web/rtc-net.js`: lobby hooks, selection message dispatch and visible connection errors; original combat handshake retained.
- `web/online.js`, `server/index.js`, `scripts/test-online.mjs`: matching protocol version 26 prevents old clients entering incompatible selection sessions.
- `scripts/build.mjs`: optional MATCHUP_DEV lab inclusion.
- `scripts/build-sw.mjs`, `web/sw.js`: release 26 cache and asset manifest.

## Shared data and selection architecture

CHARACTER_CONFIG reads canonical `roster` stats/titles/colors, `FATE_NAMES` passive names, `FATE_BALANCE` display parameters and `LOADOUTS`/`ASTRAS` names. No duplicate combat logic is introduced. Attack is current base damage; speed is the current arrow-speed multiplier. Critical displays “Perfect draw”: the game uses timing, not a random critical percentage. Concise passive summaries are presentation copy.

Large artwork appears left, information occupies the right negative space, and eight cropped portrait slots sit below. Slots support hover/focus, selection, other-player selection and lock state; separate P1/P2 badges identify each choice. Mouse, touch, arrows/WASD, Enter/Space and Escape are handled. Existing selectable CPU opponents are preserved. No controller subsystem was added because the current flow has none.

Preview changes use a 200 ms fade/slide. Confirmation pulses and plays an existing centralized tone. Both participants must lock; unlocking is allowed before both are ready. Back/Leave clears the overlay and restores the existing home flow. Asset failures show a retry/reconnect message rather than starting with missing panels.

## PNG mapping and transforms

All coordinates are normalized. Source images remain byte-for-byte unchanged at 1672×941. Large artwork is reused for selection, thumbnails and both VS sides. A custom `rosterPortrait` can replace the automatic crop.

| Supplied asset | Config ID / destination | Left scale | Right scale |
|---|---|---:|---:|
| 04-Arjuna.png | arjuna / matchup/arjuna.png | 1.28 | 1.43 |
| 01-Karna.png | karna / matchup/karna.png | 1.30 | 1.45 |
| 06-Bhishma.png | bhishma / matchup/bhishma.png | 1.25 | 1.40 |
| 07-Drona.png | drona / matchup/drona.png | 1.28 | 1.43 |
| 03-Abhimanyu.png | abhimanyu / matchup/abhimanyu.png | 1.30 | 1.45 |
| 05-Ashwatthama.png | ashwatthama / matchup/ashwatthama.png | 1.30 | 1.45 |
| 02-Satyaki.png | satyaki / matchup/satyaki.png | 1.28 | 1.43 |
| 08-Ekalavya.png | ekalavya / matchup/ekalavya.png | 1.30 | 1.45 |
| 11-VS.png | matchup/vs.png | — | — |
| 12-ChatGPT-Image-Oct-5-2026-07_16_31-PM.png | matchup/lightning-sheet.png | — | — |
| 10-electric.png | matchup/electric.png, retained reference | — | — |

Selection defaults: scale 1, offsets 0/0, anchors .5/.5, independently editable per character. VS left: offsets −.02/.015, anchors 0/0, flip false. VS right: offsets .07/.025, anchors 1/0, flip true; Ashwatthama right uses X .12 to protect his face at the seam. Current right-side flips were chosen after inspecting the supplied compositions, not imposed as a renderer rule.

Asset priority is side-specific override → main VS asset → selection preview. Each side has independent transforms and flipX; configure flip false for a dedicated artwork that already faces correctly.

## VS renderer, timeline and effects

The existing RAF drives one 1400×788 Canvas, scaled proportionally to the viewport. Polygon clips create a diagonal seam from 60% width at the top to 50% at the bottom. Panels enter from opposite directions over an initially wide black gap. Image aspect ratios are preserved. The existing battlefield fills transparent edges. Names and titles are UI text and may be hidden through `showNames`.

| Time | Action |
|---|---|
| 0–.15 s | Dark initial stage |
| .15–.90 s | Quartic ease-out panel entry |
| .83–1.07 s | Short impact shake |
| 1.00 s onward | Lightning frame animation |
| 1.35–1.75 s | Supplied VS logo fades/pops .4 → 1.2 → 1 |
| 1.75–3.00 s | Final composition hold |
| 3.00–3.60 s | Fade into existing match countdown |

Quick rematches compress the timeline to 1.35 seconds. Skip unlocks at .75 seconds. Offline skip completes the presentation immediately; online skip removes the lightning and shows a synchronization message while the full barrier still runs. It cannot start combat early.

The supplied lightning sheet contains ten unequal-width columns. Explicit X boundaries are `[0,148,305,480,665,870,1075,1250,1420,1570,1672]`, each 941 pixels tall. The renderer crops a single frame at 14 FPS and rotates it along the seam, below the logo. FPS is a configurable presentation choice; no source animation metadata was provided. The logo uses alpha crop `[553,271,570,375]`. Reduced-motion mode suppresses shake and uses a subdued static lightning frame.

Central audio events are `vs_intro_start`, `vs_panel_slide`, `vs_panel_hit`, `vs_lightning`, `vs_logo_hit`, `vs_transition`. They reuse the game's tone hook; layout code does not directly play files.

## Transition and mode integration

Explicit states: CHARACTER_SELECT → CHARACTER_LOCKED → ALL_READY → PRELOAD_MATCH_ASSETS → VS_INTRO → VS_COMPLETE → MATCH_START. Selected panels, logo, lightning and immediate battlefield/warrior/chariot assets preload before VS. Image promises are cached and reused; there are no animation timeout chains, prerendered video or particle systems.

Solo and local reuse the same controller, then call existing `enterGame`. Online selection messages use the existing room and RTCDataChannel. The host publishes revisioned selection snapshots; each player controls only their own seat. Both peers acknowledge asset readiness and full presentation completion. Only then does the existing hello/ready/start handshake initialize the unchanged seeded rollback match. No animation frames are transmitted. Online rematch presentation runs within the existing three-second countdown. The original conch/countdown remains after the first intro.

## Responsive behavior and debugging

Landscape uses artwork/information above an eight-column roster. Short landscape reduces typography and spacing; portrait switches to stacked artwork/information and a 2×4 roster. Fixed overlays and safe-area padding keep navigation separate from artwork. The VS Canvas is proportionally letterboxed rather than stretched. Small screens can scroll the information pane while roster/confirm controls remain in their own grid rows.

Build with `MATCHUP_DEV=1 node scripts/build.mjs` for the lab. It provides modes, P1/P2 picks, open/hover/lock/unlock, replay, pause, .25/.5/1× playback, timeline jumps and alignment sliders/flip controls. Online layout preview uses the offline local adapter; real online timing cannot be manipulated. Overlays show safe areas, diagonal mask boundary, anchors, image and lightning bounds. Runtime slider changes are not persisted: copy values into character-config.js. Normal production builds exclude this lab.

## Validation and known limits

Passed: all eight canonical cards/images/loadouts; selection, unlock and CPU choice; override priority and configured flips; offline skip retaining the original countdown. Rendered and inspected actual production Canvas compositions for Arjuna/Karna, Bhishma/Drona, Abhimanyu/Ashwatthama, Satyaki/Ekalavya and reversed Karna/Arjuna and Drona/Bhishma.

Paired independent game runtimes passed selection synchronization, both-ready/preload barriers, early-skip protection, original handshake, identical seeded starting hashes and preserved countdown. Existing rollback regression passed 540 frames with reordered remote delay, corrections and bounded histories. Signaling and release-25 armor/Mani/arrow-rain regressions passed.

These are Canvas and isolated runtime tests, not physical-device/browser end-to-end tests. Android touch layout, notches and sustained mobile FPS still need a real-device acceptance pass. The referenced VS MP4 was not present among accessible attachments; timing follows the explicit written brief, so exact video matching is not claimed. No new art was generated. Current gameplay balance was deliberately preserved as required by this milestone.

## Maintenance

To replace a PNG, update the corresponding assets path or overwrite the mapped file, keeping identity/artwork intact; rerun the service-worker builder and production build. To tune selection, edit that character's selectTransform. To tune VS, edit its independent vsLeftTransform/vsRightTransform; offsets are fractions of the Canvas, scale multiplies Canvas width, anchors set positioning, flipX mirrors the artwork. Use the lab for visual adjustment, then copy values back to source.

To add a new playable character, first extend the canonical gameplay roster, passive/loadout data and multiplayer validation under a separate gameplay milestone; then add its ID, summary, asset mapping and transforms to CHARACTER_CONFIG and expand the eight-slot navigation/validation limits. This presentation milestone intentionally does not make the existing eight-character simulation dynamically extensible.
