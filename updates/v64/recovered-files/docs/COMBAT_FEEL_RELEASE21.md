# Epic Duels — release 21

## Controls and balance
- Aiming inside the dashed ring stays a normal shot regardless of hold time. Overdraw beyond the ring deliberately enters charging; ease inward to cancel. No new buttons. Keyboard hold Space/Enter deliberately charges.
- Base spirit charge time: 0.65 seconds, affected by existing draw-speed buffs. A progress meter and aura are visible to both sides.
- Charging blocks ordinary arrows, including equipment shots. Spirit arrows, Astras, melee and arrow rain bypass that protection. Release, cancel, interrupted input, death, pause and broken-bow restrictions remove the shield. Holding protection expires after 2.4 seconds with a 0.4-second rearm interval.
- Aim an active overdraw above 65 degrees: automatic sky fire begins after 0.12 seconds, repeatedly removing enemy rain carriers/falling rain. Full charge and release are unnecessary.
- Rain waits 0.65 seconds after its apex warning before falling. Full spirit sky shots still clear it as before.
- Spirit-vs-spirit clashes produce a short shockwave beat. Solo AI visibly charges and prepares counters rather than silently receiving the new spirit charge.

## Multiplayer
The host advances charge, shield and fire. Guest intent uses round/epoch, monotonic sequence and bounded heartbeats (at most about 8.4/sec while charging). A short lease clears abandoned draws. Release cannot claim arbitrary focus. Existing snapshots carry charge cues and warning delay; reconnection resumes input sequence above the host watermark. Protocol 21 requires both devices to update.

## Checks
Passed deliberate aim/overdraw and inward cancellation, full-charge time, projectile shield filtering, partial-charge sky fire, rain warning, timeout/release/pause cleanup, guest forged-focus rejection, duplicate/stale intents, reconnect sequence, visible AI counter; existing seven paired host/guest simulations, Ultimate rules/puzzles, room API, Abhimanyu progression, voice playback and defeat/victory sequencing.

Physical Android touch ergonomics and live two-device latency remain manual playtest items. No compatible browser preview was available. All original audio files remain unchanged. No new APK was produced.
