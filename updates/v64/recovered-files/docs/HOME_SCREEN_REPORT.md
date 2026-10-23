# Home screen + phone confirmation — release 27

Implemented the attached HOME_SCREEN_BRIEF.txt and the additional request for on-screen character confirmation. Existing combat and online authority are unchanged.

## Files modified

`web/index.html`: new home markup, accessible labels, stylesheet/script links and background preload. `web/style.css`: restrict home footer hiding to the direct page footer, fixing the hidden selection confirmation. `web/matchup.js`: touch button labels Select warrior / Fight / Ready to fight / Unlock. `scripts/build-sw.mjs` and generated `web/sw.js`: release 27 asset cache. `scripts/build.mjs`: optional HOME_DEV overlay.

Created `web/home-ui.js`, `web/home-ui.css`, `web/home-ui/*.png`, `dev/home-layout-debug.js`, two focused regression checks and the brief/report. All nine PNGs are byte-identical copies of the supplied files; none were redrawn or stretched.

## Component, artwork and navigation

Home remains the existing `homeScreen` element. Existing handlers are retained by their IDs; online-ui still creates its original button, which is styled and moved into third position after initialization.

| Asset path | Existing destination |
|---|---|
| home-ui/background.png | Supplied Krishna/title battlefield background |
| home-ui/solo.png | playAI → Solo character selection |
| home-ui/local.png | playLocal → Local 1v1 selection |
| home-ui/online.png | playOnline → existing online room dialog |
| home-ui/lore-duel.png | loreDuel → Arjuna vs Karna Lore |
| home-ui/lore-trial.png | loreTrial → Narayanastra trial |
| home-ui/controls.png | homeGuide → existing controls/help |
| home-ui/settings.png | homeSettings delegates to settingsButton |
| home-ui/how-to-play.png | homeHelp delegates to help |

No new game modes, currency, profile or other speculative features were added. The old home branding is replaced by the title already embedded in the background. Existing battle-header controls remain available during gameplay.

## Positioning and responsive rules

Five proportional cards occupy a row starting at 44.5% height, with 42dvh card height, 3% horizontal safe margins and equal distribution. Settings and How to Play sit top-right at 2.2%/2.5% offsets; Learn Controls sits lower-left. Central CSS variables expose mainRowY, mainCardHeight, mainCardGap, utilityButtonScale and learnControlsScale.

Desktop background uses centered cover. Narrow/portrait layouts use top-centered contain to preserve Krishna and the baked title. Narrow card rows scroll horizontally instead of overlapping; portrait moves utility controls below the row. Short landscape keeps readable card height, with a compact utility area. Safe-area insets protect navigation. Each complete PNG sits inside a semantic, labeled button with object-fit contain. Main-card source dimensions are identical, so top/bottom alignment is consistent without cropping their original transparent margins.

PNG assets decode before the button group is revealed; failed decodes settle rather than indefinitely blocking the screen. No video, heavy particles or idle animations were added. Hover uses 1.035 scale/brightness, press uses .97 scale, keyboard focus uses a gold outline, and reduced-motion disables transitions.

## Phone selection fix

Root cause: `body.home footer {display:none}` also matched the selection overlay footer while the home state remained active. It now targets only `body.home > footer`. Selection receives explicit footer visibility, its own reserved bottom row and a minimum 44px confirmation button.

Tap a portrait, then Select warrior. Choose the CPU or second local player, then Fight. Online uses Ready to fight and retains the existing both-ready barrier. Unlock remains available before both participants lock. Keyboard confirmation continues to work. There was no supplied Select/Fight PNG; the existing gold confirmation style is retained and enlarged rather than repurposing a mislabeled mode PNG.

## Debug

`HOME_DEV=1 node scripts/build.mjs` includes a development-only bounds toggle: button bounds, card-row bounds, safe area and center crosshair. Production excludes it. Tune the centralized variables in home-ui.css.

## Test results and limits

Passed tap-only Solo selection → CPU choice → Fight → VS; existing Settings/Help delegate handlers; online card ordering; all eight character configurations and paired online selection/start regression tests. Source regression checks protect footer scoping, explicit visibility and the 44px confirmation target. All nine PNG hashes match the uploads.

Geometry checks passed five-card row fitting at 1920×1080, 1600×900, 1366×768, 844×390 and 740×360. Production build passed with debug overlay excluded.

These checks are code/runtime and geometry validation, not browser screenshots or physical Android acceptance tests. This environment has no supported browser-preview path for this static/Worker project. Real-device touch, browser chrome/notches, text scaling and FPS remain to be checked. Portrait preserves the background composition with letterboxing and scrollable cards; landscape is the primary target. No separate reference layout image was attached, so placement follows the supplied written specification.
