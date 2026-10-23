# Voice playback correction — release 18

All 173 public MP3 assets are restored byte-for-byte from Kurukshetra_Voices_Final.zip. No trimming, normalization, limiting, resampling, pitch changes or re-encoding. The importer preserves original MP3 bytes for future imports as well. Playback never seeks ahead to match subtitles or event timestamps. Once started, lines finish before the next line starts; higher-priority events no longer cut off an active line. Pause resumes from the actual audio position. Home, mute, and round reset remain explicit cancellation boundaries.

At round end, the host emits one replicated dialogue sequence: defeated warrior first, then victorious warrior. Character-specific death dialogue is retained where configured. Separate death presentation events retain cinematics but do not replay dialogue. Victory starts on actual completion of the prior audio source, not on a subtitle or cinematic timer. Ties sequence both defeated warriors without a victory line. Duplicate events remain suppressed.

Tests passed: source ZIP byte equality for 173 MP3s; decoding/duration validation; voice playback without priority truncation or late-event seeking; defeat/victory serialization and deduplication; real Ultimate metadata; both seats and guest reconstruction; gameplay/puzzle rules; Worker room protocol; seven host/guest pairings and best-of-three. Protocol and offline cache advance to 18. Real-device listening remains a manual acceptance check.

Test in game: reopen to FATE VOICES · 18, enable sound, finish a round and leave the result screen open. Hear the defeated warrior's complete line, then the winner's. Trigger dialogue during another line and verify it waits. Test both online seats after both refresh. Audio delivery is local and can lag cinematic/subtitle timing under load; it does not pause authoritative combat.

This supersedes release 17's trimming/normalization and late-audio seeking behavior. The uploaded recording levels and silence are intentionally preserved.
