# Milestone 36 — survival-aware finishers and supplied video presentation

## Combat
- Finisher slow motion now waits for survival phases to be consumed and completed: Arjuna's Guidance; Karna's wheel repair, remount and comeback; Ashwatthama's Shatter; Abhimanyu's final Wheel stage with no pending transition. Bhishma's timed Final Stand death is never represented as an arrow finisher.
- Approaching arrows must predict a damaging body/head/low contact within 0.4 seconds, after guard and incoming damage modifiers. Equipment contacts, misses, delayed rain, ground fields and charging-shield blocks do not trigger it. Future movement or projectile interception may still avert a predicted hit.
- Slow motion remains bounded and deterministic. Protocol 36 separates old peers.

## Loading and menu
- Supplied loading illustration and bar reference are integrated, with real completed-asset progress. Initial loading decodes core combat/menu images and prepares the home video. Asset failure exposes Retry / Continue instead of an indefinite spinner.
- Existing selected-warrior preload now displays this screen and also decodes selected Signature / Counter Astra sheets. Failures return to selection retry.
- startscreenloop is encoded forward then reverse into one seamless looping MP4; no unsupported negative playbackRate or repeated seeking.
- Hidden-tab and off-screen videos pause. Hidden battlefield Canvas work stops at Home. Victory clips are lazy loaded, and MP4s are excluded from service-worker install precache.

## Victory
- All eight named supplied videos are mapped to their warrior, encoded at 720p/24fps with fast-start metadata and supplied-image posters. Combined presentation MP4s are approximately 16 MB instead of the original 97 MB victory archive.
- Round winners loop their video behind a translucent statistics overlay. Best-of-three totals include arrows fired and actual HP removed per seat, shared arrow clashes, combat duration and round count. Existing score/next-round/new-match/selection controls remain.
- Winning VO uses the existing exactly-once round-end dialogue queue and selected English/Hindi language; it does not loop with the picture. The videos are muted so their soundtrack cannot overlap the dialogue.
- Results use confirmed rollback state. Statistics are captured/restored with simulation state, deduplicated per round, retained across rounds, and cleared for a new match.
- Reduced-motion preference uses static imagery. Browser autoplay denial retains the poster and retries on user interaction. Media playback never governs combat or round completion.

## Validation
Passed: passive-gate and lethal-trajectory tests; statistics accounting, deduplication, match/round reset and rollback restoration; existing stamina/direct-hit tests; all eight result-media mappings; startup and match loading success/failure lifecycle; home pause and result deduplication; confirmed-state gating; Ultimate/round-end voice tests; selection and online preload/skip barrier; signaling protocol; Stability and Astra rollback under 50–250 ms latency with duplicate/reordered packets.

Browser automation is unavailable in this environment. Real Android layout, memory, autoplay and performance remain unverified; no claim of measured frame-rate improvement.
