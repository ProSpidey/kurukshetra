# Kurukshetra Astra Warfare — Version 66 candidate

Build preparation date: 2026-10-21.

Source baseline: recovered v64 full source/assets archive, overlaid with the user's refined cumulative Step 1.5 + battlefields + emote update (which had previously been published as v65), plus a v66 packaging optimization. This is an independently constructed candidate and has not been compared file-for-file with the live v65 Sites source repository in this session.

## Changes
- Compact persistent icon-led Emote control on the left upper battle HUD, anchored around 6.2% width / 28% height with HUD clearance.
- Non-modal in-battle sticker selection for offline, local, and online play.
- Server accepts authenticated equipped emotes during active matches and enforces five-second cooldown.
- Prevent emote controls from triggering drag-release shots, offer keyboard shortcut T and numbered slots.
- Apply atmospheric contrast/saturation/light adjustments to all six alternate battlefield scenes while leaving default Kurukshetra untouched.
- Optimize home menu delivery with WebP artwork. Master PNG files preserved in production/home-ui-master/ and omitted from dist/. Removed unused online.png from shipped web/ folder.

## Verified locally
- `node scripts/build.mjs` PASS
- `node scripts/test-emote-controller.cjs` PASS
- `node scripts/test-battlefield-style.cjs` PASS
- `node scripts/test-cosmetics.mjs` PASS (legacy expectation updated to permitted active-combat emotes)
- `node scripts/test-rollback.cjs` PASS
- `node scripts/test-voice-runtime.cjs` PASS
- PWA service worker: 590/590 cache paths resolve

## Outstanding verification before production release
- Connect the actual Sites v65 source and compare changes before deploying; keep existing v65 and version history as rollback points.
- A test harness using `@napi-rs/canvas` cannot run in this environment because the native module is not installed. Finish visual regression tests in Work mode with dependencies installed.
- `test-online-render.cjs` fails in its legacy game simulation setup with `bowFresh is not defined`; retest or update harness before claiming a clean full suite.
- Run browser E2E smoke tests for mobile, fullscreen, and an actual online match before public publication.
- Sites deployment endpoint is unavailable in this current session. This archive has NOT been published.

## Deploy
1. Verify the v65 live project and source repo, and ensure the v66 candidate contains no regressions from changes made after the v64 recovery.
2. Run the build and optional full tests with dependencies installed.
3. Sites deployment archive contents have root entries `.openai`, `client` and `server` (not `dist/`).
4. Save a new version on the existing Sites project `appgprj_6ab42d4132f48191a8b8e7718ac80f9f` and deploy only once accepted.
5. Confirm the Site version is 66 and take rollback snapshot/ensure v65 history remains.
