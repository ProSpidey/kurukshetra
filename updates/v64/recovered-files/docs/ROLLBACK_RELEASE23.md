# Release 23 — false state mismatch correction

Reproduced a presentation mutation in the Release 22 snapshot: Canvas drawing writes `player.fateAnimation`. This value depends on rendering frequency, sprite load timing and confirmed cinematic playback. It is now excluded from simulation snapshots. The combat/passive animation state inside the passive controller remains synchronized.

A second path came from local Astra-button feedback: `announce()` wrote the banner and `noticeTime` even outside the deterministic input loop. Local hints now have a separate presentation-only expiry. Simulation announcements keep a dedicated rollback-owned banner value; snapshots never read the live banner DOM.

Ultimate rune shuffling now uses Fisher–Yates rather than a random sort comparator, so RNG consumption is independent of the browser's sorting implementation.

Protocol and asset cache version advance to 23, preventing old and corrected simulations from joining the same new match. Actual combat hash disagreements still stop play; the integrity check has not been disabled.

## Verification

`node scripts/test-rollback-presentation.cjs` failed on the original code with “Drawing must not change rollback state” and passes after the fix. It covers all eight warriors, low-health passive transitions, local control hints, 30 Hz versus 120 Hz drawing, asymmetric sprite availability, 1–6-frame reordered inputs, fixed-count rune shuffling and detection of a real HP discrepancy.

The existing rollback, Worker signaling, combat rules and charge-feel suites also pass. These are production-code VM/SQLite tests; real Android browser-to-browser verification remains unperformed in this environment.
