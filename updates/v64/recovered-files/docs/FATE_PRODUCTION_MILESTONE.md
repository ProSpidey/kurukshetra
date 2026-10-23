# Fate production milestone — version 16

## Delivered

Eight generated transparent character atlases (16 keyposes each), 95 requested animation names plus 26 compatibility aliases, reused Krishna rescue artwork, 15 short Fate sequences, 156 real local MP3 speech clips, matching subtitles, seven scripted matchup conversations, nine configured synthetic voice profiles, event-driven SFX/music cues, and synchronized presentation timestamps. Existing passive combat, input restrictions, lethal interception and balance remain intact.

## Files

New runtime: `web/cinematic-data.js`, `web/cinematic-runtime.js`, `web/dialogue-data.js`, `web/voice-manager.js`, `web/animation/*.png`, `web/voice/*.mp3`.

New production source: `production/implementation-brief.txt`, dialogue/animation builders, voice generator, dialogue and animation JSON databases, source WAV/text/hash files, asset validation report and synthesis distribution notices.

Modified: Fate core event metadata, Fate combat/presentation bridges, game settings/home cleanup/victory hooks, Astra counter hooks, Ultimate counter hooks, online snapshot presentation clock/protocol, server protocol, HTML/CSS, offline cache builder and generated service worker. Test changes: presentation/online suites; new voice-runtime and decoded-asset suites.

## Animation implementation and cutscenes

Data-driven atlas sequences support separate row/column grids, non-looping clamped playback, repair/idle loops, declared pivots and weapon/projectile anchors. Normal archery retains existing combat sheets. The renderer uses generated Fate poses for passive activation, reaction, repair, recovery and special death. Missing optional compatibility poses fall back to the original art. Krishna uses the existing 2×2 rescue sheet, separately from Arjuna's body.

Cinematic data chooses duration, camera treatment, animation sequence, impact time, color and elemental overlay. Character, weapon, wheel, projectile and wide views render in small battlefield insets. Simultaneous events use two side-by-side views. Micro-freeze, slow motion and speed ramps affect inset artwork only. Impact shake respects reduced motion. Special death temporarily hides the existing result panel visually; it never delays authoritative death or round scoring. Input and host simulation continue under passive insets.

Karna: Kavacha, cracking/break, wheel sinking/dismount/repair, remount/comeback. Bhishma: awakening/final stand and conscious arrow-bed death. Arjuna/Krishna: warning, chariot depression, duck/crown/recovery. Drona: observation/mastery and meditative defeat. Abhimanyu: chariot break, landing and fallback weapon transitions. Ashwatthama: Mani crack/shatter and cursed transformation. Satyaki: pursuit stages and Fury. Ekalavya: Focus/Instinct and non-graphic Dakshina.

## Dialogue, voice and subtitles

The dialogue database contains IDs, speakers, triggers, target where relevant, exact subtitle, local audio path, duration, priority, cooldown, interrupt policy and optional animation/camera fields. A single principal voice channel prevents overlap. High priority Fate lines can interrupt banter. Duplicate IDs do not replay. Delayed messages seek into the line; expired speech is skipped. Multi-line conversations retain all turns unless interrupted by more important combat dialogue. Late scenes similarly seek authoritative presentation time.

Speech is generated with installed Flite voices and character-specific pitch/speed profiles, normalized, trimmed and encoded as 22.05 kHz mono MP3. Source WAVs are retained. No SFX/music is baked into speech. These are audible synthetic assets, not human voice acting; pronunciation/emotion need editorial review. The runtime requires a pointer/key gesture to unlock WebAudio. Settings include voice enable/volume. Subtitles start with playback; voice completion, mute, home and round reset clear them. Music stingers duck 5 dB during speech, with modest SFX attenuation.

## VFX/audio hooks

Existing `AnimationEvent`, `AudioEvent`, `MusicEvent`, `OnFateEventStarted`, `OnFateEventResolved`, `OnPassiveTriggered`, `OnPassiveEnded`, `OnComebackStarted`, `OnFinalStandStarted`, and `OnCharacterDeathSpecial` hooks remain. `CINEMATIC_DATA` and `EVENT_AUDIO_CUES` map presentation to elemental overlays and procedural stingers. Ultimate activation/collision/direct hit and critical battle have music cue mappings. This is a procedural cue/stinger implementation, not a newly composed orchestral soundtrack.

## Networking

Protocol 16 requires both players to refresh. The host emits unique IDs, state versions, presentation timestamps and explicit IDs for ordinary dialogue. Fate mappings are shared deterministic data; variant selection uses the event serial, not each replica's current serial. Snapshots reconstruct passive state and presentation clock. Clients do not decide HP, damage, healing, passive outcomes or timers. Audio stays local; no audio bytes stream through the game server. No new per-frame network messages were added. The existing polling transport and latency limits remain; this milestone does not promise zero-lag multiplayer or host migration.

## Configuration and developer controls

Balance remains in `web/fate-config.js`. Presentation durations/colors/camera/sequence selection are in `web/cinematic-data.js`; animation timing/grid/anchors in `production/animation-manifest.json` and generated `web/fate-assets.js`. Dialogue/voice profiles are in `production/dialogue.json`; regenerate with the production scripts. MP3 replacements may reuse IDs but must update durations. Existing `FATE_DEV=1 node scripts/build.mjs` includes the developer passive panel. Production builds exclude it.

## Validation performed

- All 156 MP3s actually decoded to PCM with FFmpeg: minimum RMS 0.06956, maximum peak 0.76378; none empty/silent or clipped.
- All 121 manifest entries resolve to valid atlas cells across nine images; all seven conversations resolve to existing clips.
- WebAudio integration mock: gesture unlock, source playback, captions, priority interruption, duplicate suppression, late seek, stale skip, complete conversation turns, mute/home cleanup.
- Canvas/DOM smoke tests with loaded-atlas dimensions: all eight characters; simultaneous, duplicate, late and expired presentation events; reset cleanup.
- Existing passive, integrated combat, independent host/guest, seven pairings, best-of-three, Ultimate/puzzle, online rendering and Worker API suites pass.
- Production build succeeds. Offline cache now recursively includes voices and animation atlases.

These are automated execution/decoded-media tests. No compatible interactive preview was available in this environment. Physical listening, real browser audiovisual playback, mobile landscape layout and real WAN two-device testing are NOT claimed complete.

## Exact manual checks

1. Refresh both browsers to FATE VOICES · 16. Turn sound and voices on; set volume above zero. Tap Start to unlock audio.
2. In Solo/local, start each of the seven matchup pairs listed in the brief. Listen to the intro conversation and confirm exact speaker/subtitle order.
3. For fast passive review, run the development build with the existing Fate panel. Trigger each passive, repair success/failure, death and round reset. Check that gameplay continues during inset cinematics.
4. Trigger both players' Fate events together. Expect two compact insets and one prioritized voice at a time, with no overlapping speech or stuck result screen.
5. Host/join on separate devices. Trigger each passive from both seats; reload the guest during a passive. Compare HP/phase/result and ensure old voice/cinematics do not restart from the beginning.
6. Confirm normal arrows/Astras, Rage gating, successful Ultimate puzzle/counter, failed puzzle retained ammo, direct hit/clash cinematic and best-of-three. Exercise touch drag/reverse aim and keyboard controls, Solo and Lore.
7. Toggle voice/mute/reduced motion, leave for home mid-line, start another round; no continuing speech or stale captions. Test offline after a complete first load.

## Known limits / next priority

Generated art uses shared keyposes, not bespoke studio in-between animation for every named state. Grid/feet/weapon consistency and edge bleed require art review; some frames retain decorative marks after equipment loss. Exact state-specific pivots need final per-frame calibration. Several source poses are reused, so distinct state names do not imply 95 individually drawn animations. Base combat fallbacks remain for optional states without final art. See `SPRITE_ASSET_REQUIREMENTS.md` for every sequence and requested final frame counts.

Voice profiles are distinct parameterizations of three base male synthesizers; emotional acting and Sanskrit pronunciation are limited. Final professional recordings, detailed Foley and music stems remain desirable. SFX are procedural/reused. Manual audio/device/network QA and final sprite polish are the next priority; no unrelated features were started.
