# Voice release 17

Imported the user's Kurukshetra_Voices_Final.zip against the saved 173-entry manifest. All 173 IDs were present exactly once; 156 dialogue replacements and 17 Astra-name calls are now shipped. Files are mapped by stable IDs rather than archive-provided executable scripts. Source archive and individual input/output SHA-256 hashes are recorded for provenance.

Audio processing removes leading/trailing silence without removing pauses inside dialogue, normalizes volume, limits peaks, and encodes mono 44.1 kHz MP3 at 96 kbps. All outputs decode to nonzero audio without digital clipping. Astra-name clips measure 1.620–2.299 seconds. Uploaded provider/model/voice identities cannot be independently verified from MP3s; no generation IDs were invented.

Ultimate release waits for the measured name-call duration plus padding. Successful counter puzzles schedule the defender's name call after the attacker's call; failed puzzles do not invoke or consume a counter Ultimate. Host state controls release timing regardless of client mute or audio loading. Late clients seek into dialogue; duplicate events are ignored. Current loadout clips are preloaded, and pinned buffers are replaced when the matchup changes. Narayanastra warmup and state replication retain the checkpoint implementation.

Client/server protocol and offline cache both advance to 17. Both online participants must refresh to the same release. Existing rooms may need to be recreated after refreshing. No new per-frame voice network messages or remote speech API calls are used.

## Files

- production/import-elevenlabs.py: safe full-ZIP ingestion, complete-set validation and audio processing.
- production/dialogue.json, web/dialogue-data.js: real clip durations, voice mapping, source provenance.
- web/voice/: all 173 shipped recordings.
- production/voice-import-validation.json, production/asset-validation.json: verification results.
- web/voice-manager.js: bounded current-match preload pinning.
- web/online.js, server/index.js, scripts/test-online.mjs: protocol 17.
- scripts/build-sw.mjs, web/sw.js, web/index.html: release/cache 17.
- scripts/test-ultimate-voices.cjs: actual shipped metadata and both-seat reconstruction tests.

## Passed automated checks

- Audio: all 173 MP3s decode; nonzero RMS; peaks below full scale; duration metadata matches decoded PCM.
- Presentation: 121 animation slots across nine atlases; seven dialogue conversations resolve.
- Ultimate: all 17 names map to equipped spells; callout timing; ultimate-only counters; puzzle success/failure; retained ammo; muted timing; both seats and replicated timing.
- Voice: WebAudio unlock, playback, subtitles, priority interruption, duplicate suppression, late seeking, stale-event skipping, conversations, mute and home cleanup.
- Gameplay: Rage gates, direct-hit/collision paths, eight Fate passives, normal projectiles, repair/death/reset interactions.
- Networking: independent host/guest replicas across seven character pairings, reconnect reconstruction, duplicate/stale commands, best-of-three and once-per-match rescue.
- Worker: room creation/join, role tokens, exchange/ack/retry, Android CORS, leave and expiry.
- Production build; whitespace check.

## Manual acceptance

1. Close old game tabs and reopen; check FATE VOICES · 17. If still 16, reload after the old tabs are closed.
2. Turn sound on using the music-note button; check voice enable/volume in Settings. Browser audio requires a user interaction.
3. Start Arjuna vs Karna. Confirm opening dialogue and readable subtitles. Trigger passive/low-health events and listen for correct takes.
4. When Ultimate conditions are met, invoke an Ultimate. Hear its name before projectile release. Complete the opponent's counter puzzle; hear the defender's name before the clash. Repeat with a failed puzzle and verify the defender retains the weapon.
5. Create a fresh online room on two devices running release 17. Test each seat as attacker. Check voice replay suppression, disconnect/rejoin, and audio enabled on only one device.
6. Check pause/resume, round changes, Home, touch and keyboard, and mobile background/foreground audio behavior.

Physical-device listening, pronunciation review, and real WAN multiplayer were not performed in this run. Automated audio validation confirms signal integrity, not acting quality or spoken-word correctness. No new Android binary was built in this voice-only update.
