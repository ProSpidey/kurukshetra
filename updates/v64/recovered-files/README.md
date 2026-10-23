# Kurukshetra: Astra Warfare — 0.11 test release

Touch-first Canvas archery game with eight warriors, sprite animation, chariots, elemental Astras, AI/local duels, and private-code online friend rooms.

## Play

Web: https://kurukshetra-astra-warfare.spidey245.chatgpt.site

Android: install Kurukshetra-0.11-test.apk, then open Kurukshetra. Android 8 or newer is required. Solo/local battles work offline. Online requires internet and the website's audience to permit both players; an owner-only site blocks friends. Choose Online, create a room, share its code privately, and have the friend join. The host plays left and the guest right. The host runs the simulation; this is a friends mode, not competitive anti-cheat infrastructure.

Drag back and release to fire. Reverse aiming is available in settings. Small circular HUD controls select Astras, defensive actions and tactics without shrinking the battlefield.

## Ultimate rules

An offensive ultimate unlocks when the opponent has 35% health or less, with the existing 45-second, ammunition and 65 Resolve requirements. Only another ultimate can counter. A defending warrior can use their reserved ultimate even when offensive rage is not ready, provided the other requirements are met. Select a counter within four seconds, then enter the displayed three-rune sequence within five seconds. Failed or skipped puzzles preserve the defender's ammunition and Resolve. Successful counters release both weapons into a clash. Direct ultimate hits trigger an earth-shattering cutscene. Reduced motion shortens it.

## Source and builds

- `web/`: game, generated sprite assets, PWA and online client.
- `server/index.js`: Cloudflare Worker room relay; `db/` and `drizzle/`: D1 schema and migrations.
- `android/`: native Java WebView app with bundled offline web assets.
- `scripts/`: web build, service-worker generation, Android test APK build and regression checks.

Run `npm ci`, `node scripts/build-sw.mjs`, and `npm run build` for the website output in `dist/`. The Sites deployment applies bundled D1 migrations using the DB binding. A static-only server can run solo/local play but cannot provide online rooms.

Run `node scripts/test-game.cjs` and `node scripts/test-online.mjs` (Node 24 supports the test's built-in SQLite adapter).

Open `android/` in Android Studio with JDK 17 and Android SDK 35 to build using Gradle 8.9 and the supplied Gradle project files. The project does not include a Gradle wrapper. Its preBuild task copies `web/` into the app. Alternatively use `ANDROID_SDK_ROOT=/path/to/sdk bash scripts/build-android.sh` with build-tools 35.0.0 and a JDK; the script also accepts ECJ_JAR when javac is unavailable.

## Release status

The downloadable APK is a development-signed test build, version 0.11.0. Its package and v2/v3 signatures were verified, and gameplay/relay logic passed automated checks. It has not been tested on a physical Android phone or in a two-phone internet match. This is not a Play Store production release. Before release, test touch layouts, sound, pause/resume, offline launch, network interruptions and online latency on real devices, then produce a release-signed AAB with your own protected signing identity and store listing. Never use the test key for production. The source bundle includes the development key only to permit updates of this test APK (alias androiddebugkey, password android).

This is a creative game adaptation. Character arsenals and mechanics include gameplay interpretations rather than strict textual claims; see in-game lore and ASSET_NOTES.md.
