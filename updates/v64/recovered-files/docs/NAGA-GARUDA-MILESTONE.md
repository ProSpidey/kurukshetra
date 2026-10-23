# Serpent / Eagle milestone — v60

## Implemented
- Normal and spirit Nagastra direct impacts produce a coil that follows the struck opponent, with rear and foreground passes around the warrior.
- Charge is captured on release. Direct duration is 2.5–7 seconds; sky duration is 3–10 seconds. Damage remains bounded with telegraphed sky bite zones.
- Sky casts create emerald thunderclouds, green lightning and animated descending snake sprites.
- Sky Garuda launches a large golden eagle, removing opposing serpent fields, projectiles, delayed shots, queued invocations, bite zones and venom. Direct Garuda cleans ground coils; it does not erase an overhead storm. Ultimates remain unaffected.
- Animation derives from simulation time, with registered eagle pivots and bounded low-quality particle counts. New images participate in match asset preload.
- Online protocol advances to 49, preventing mixed-version peers from silently desynchronizing.

## Android test build
Bundled local assets, immersive landscape, Android 8+ (API 26), target API 36. Same-origin API requests reach the existing game backend. Video range requests are supported. Native mode bypasses the web service worker. APK is signed with a development-only test key.

Build: ANDROID_SDK_ROOT=<sdk> ECJ_JAR=<compiler.jar> bash scripts/build-android.sh

The APK signature and manifest were checked. No physical Android device or emulator was available. Embedded WebView Google OAuth has not been validated; use the browser version for Google sign-in if the provider rejects embedded authentication.

## Verification
Focused duration/counter/rollback tests, browser simulation versus server referee replay, delayed/reordered peer input tests, directional sky tests, celestial-source regressions and passive-film regressions. Canvas effect renders assert that rendering does not mutate rollback state.
The older test-astra-network fixture's fire/water transformation assertion did not pass; the milestone-specific network fixture verifies actual Nagastra weather/strikes with equal peer hashes instead.

## Remaining scope
The additional character-specific Astra/Ultimate redesigns are deferred. Existing celestial apparitions and established wind/water/fire effects remain. No claim is made that all requested Ultimate redesigns are included in this build.
