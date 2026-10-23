# Supplied music and VS sound integration

- startmenumusic.mp3 loops through Home, character/counter selection and match-asset preparation, stopping when VS appears.
- battle.mp3 loops during live gameplay after the countdown. Pausing, results, mute and hidden tabs stop playback; returning resumes the appropriate track.
- collide.mp3 replaces the VS panel-hit cue at timeline 0.85; electric.mp3 replaces the lightning onset cue at timeline 1.0. Existing timeline scaling handles short rematches and its event set prevents duplicate sounds. Selection confirmation retains its original small cue.
- Long tracks stream through HTMLAudio; only short effects decode to WebAudio. Music runs at background volume, ducks during voice-over, and follows the existing volume/mute controls. Browser audio unlock is requested on pointer/key interaction; denied autoplay retries on interaction without per-frame promise spam.
- VS effects stop when skipped, left, muted, or hidden. Audio is presentation-only; network protocol and combat state are unchanged.

Passed audio lifecycle tests, existing VS/online-selection tests, voice lifecycle tests, syntax checks and production build. Real Android audio output and subjective mix remain unverified in this environment.
