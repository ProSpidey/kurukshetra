# Impact media and game icon

Retained, preloaded Ultimate impact video with a first-frame poster; reveal moving video only after playback/frame readiness. The canvas stays visible when both poster and video are unavailable. Stop keeps the decoder and source, with stale async reveal protection. Impact media re-encoded H.264 faststart without unused audio.

Confirmed round-end dialogue holds result UI during defeated warrior speech. Actual winner audio start releases the result and death overlay in the same tick. Winner movie is loaded during defeat speech and reused at transition. Disabled voices, failed queues and timeout release the hold. No simulation or network protocol changes.

Solar Mandala Archer artwork supplies versioned 32/180/192/512 PNG browser, Apple home-screen and web-app icons. Manifest uses uncropped any-purpose icons. No native APK rebuild.

Validated: combat media (173 Hindi mappings, pause, error, expiration, reuse, cold fallback, stale callbacks); round presentation (defeat/winner ordering, mute, failure, reset); victory media (8 winners, preloading without reload, confirmed outcome gating, totals); voice runtime; Ultimate voices; music routing. Build and whitespace checks pass. Browser/phone visual and decoder performance QA unavailable in this environment; immediate moving playback depends on device buffering, with a poster/canvas fallback.
