# Kurukshetra v2 artwork

Generated using built-in ImageGen. Runtime asset: dist/warriors.png (1254 × 1254 RGBA).
Four equal rows: Arjun, Karna, Bhishma, Drona. Four columns: idle, draw, release, hit. The canvas samples fractional 313.5-pixel cells. Mirrored at runtime for the right-hand player. Idle breathing, recoil, release timing, trails, and weather are runtime effects.

Generation brief: Exactly 4 columns x 4 rows equal cells, transparent background. Row 1 Arjun youthful black hair blue/gold armor; row 2 Karna bronze/gold armor red sash sun crown; row 3 Bhishma elderly long white beard silver/purple armor; row 4 Drona elderly white beard topknot saffron/bronze armor. Columns idle holding bow, pulling bow aimed right/up 25 degrees, release followthrough, recoiling hit. Full-body side view facing right, consistent scale and feet baseline per cell, weapons inside cells. Premium hand-painted Indian epic fantasy game sprites, detailed adult humans, no chibi, text, grid lines, or ground shadows.

This is a four-pose atlas, not a motion-captured or frame-by-frame animation set. Top-row weapon margins are tight. Lore-based names coexist with explicitly fictional balance and weather effects. Weather is cosmetic and does not change ballistic physics.

Web scope: AI practice, same-device multiplayer, best-of-three, three AI difficulties, saved device-local options and solo match record. Online network play and native Android packaging remain separate future stages, as selected by the user.


## v3 roster expansion and spirit draw

Built-in ImageGen generated dist/warriors-extra.png, a 1254 × 1254 RGBA 4×4 atlas. Rows: Abhimanyu (green/gold), Ashwatthama (dark crimson), Satyaki (teal/gold), Ekalavya (forest brown/olive). Columns: idle, draw, release, hit. Prompt: full-body adult Indian epic fantasy archers, side-view facing right, consistent scale/baseline, detailed hand-painted armor, genuinely transparent background, no labels/grid/ground shadows. Bow margins at the upper edge are tight.

The spirit draw reuses the warrior's drawing frame as a translucent larger silhouette, with runtime orbit rings, elemental charge effects, and a 1.5-second focus meter. Reduced-motion mode keeps those effects static and suppresses flashes/shake.

Eight characters have three loadout slots each using ten Astra types. Loadouts and abilities are explicitly game adaptations. Ammo is independent per Astra and resets each round. The Astra button arms/disarms; the next drag or keyboard draw releases it. Flight snapshots preserve the selected spell even after switching loadouts.

Validation: all 24 loadout slots, per-spell ammunition, maximum focus damage, volley counts, elemental status updates, water extinguishing fire, all eight sprite rows and AI choices, reduced-motion draw paths, ballistic hits and swept collisions were exercised with a mocked DOM/canvas. Real browser visual/touch/audio QA remains unverified.


## v4 chariots and longer battles

Built-in ImageGen produced dist/chariots.png (1254 × 1254 RGBA, 2×2 atlas). Prompt: four full right-facing ornate horse-drawn chariot rigs, empty rear archer platform, driver holding reins, two visible horses, full wheels/hooves, detailed hand-painted Indian epic fantasy style, real transparency, no backdrop/text/grid. First rig: Krishna with blue skin, yellow dhoti and peacock crown driving Arjuna's blue/gold chariot and white horses. Other rigs: red/gold and chestnut, silver/purple and grey, bronze/green and dark horses. Margins are tight, sampled in 627-pixel cells.

Twenty-four exclusive Astra variants, three per warrior. Loadout-specific names and effects are explicitly fictional adaptations. Techniques: 15 seconds + 20 Resolve. Ultimates: 45 seconds + 65 Resolve, one use each round. Time and Resolve gates are checked at arming and firing, including AI. Resolve spends on cast and gains through active battle time and damage.

Health increased 60%; base arrow and Astra damage reduced to about 42% of previous values. Periodic elemental damage is reduced similarly. Shared tactics roll first at 10 seconds, then every 18 seconds, replacing unused tactics: three-arrow volley, four-shot rapid fire, three-second guard, or 10 HP heal. Rapid shots use simulation-time queues that pause/reset correctly. Reverse aim inverts both axes of drag and preserves the toward-opponent direction.

Special-on-special collisions generate three additional rings, lightning and a half-second real-time slow-motion interval (disabled with reduced motion), without arbitrary damage to distant players. Generated horse rigs use gentle procedural dust; the horses themselves are static poses.

Validation: all 24 exclusive loadouts, time and resource gate enforcement, costs, damage/health balance, mirrored reverse aim, every tactic, paused/reset burst queues, normal-versus-special clash distinction, and all eight AI opponents. Browser visual/touch/audio QA remains unverified.


## v5 lore encounters

Two preset Lore encounters: Arjuna–Karna and the Narayanastra trial. Arjuna and Karna share elemental/Brahma knowledge, with Aindra and Bhargava barrages and the serpent-arrow episode. The trial uses a 45-second practice phase followed by a clearly telegraphed Narayanastra channel; the player must dismount. These are balanced adaptations with source links in the guide, not exhaustive historical/literary reconstructions. Pashupata is restricted to the fictional Arcade rules.

Built-in ImageGen used the existing chariots.png as a style reference to create dist/krishna-rescue.png: one transparent 2×2 sheet of the same Krishna/white-horse rig in normal, lowering, kneeling, and recovery poses. Prompt specified strict right-facing side view, blue/gold chariot, blue-skinned Krishna in yellow and peacock crown, empty archer platform, complete wheels/hooves, transparent background, no text. Runtime plays four poses during the timed one-use rescue. Registration and margins vary slightly in generated artwork. Crown/dust are procedural effects.

Water counters fire and leaves wet ground plus steam; wind clears clouds. Bhargava interception removes nearby Aindra projectiles. Equipment targeting uses explicit physical aim targets, with auto-recovery and repairs. Chariots move within each side's limited range.

Validated with mocked DOM/canvas: existing Arcade regressions; Lore arsenals; elemental and barrage counters; bow interrupt/repair; bounded movement; serpent rescue interception and one-match persistence; Narayanastra channel lock, warning, safe dismount, resistance damage, automatic trial launch; reset/render paths. Browser visuals, touch and audio remain unverified.

## v6 phone combat layout

Existing live controls were moved into the battlefield, preserving IDs and handlers. Solo mode hides the AI control dock; local mode exposes both docks. Primary Astra selection/arming, guard, random tactic, movement and contextual rescue/dismount are immediately available. Native Commands disclosures contain targeting, repair, status details and reverse aim. Setup/roster is a modal; settings and guide remain dialogs. Opening setup pauses combat and closing resumes if appropriate.

Phone play uses the dynamic viewport with safe-area offsets and no body scrolling. A ResizeObserver sizes the actual canvas to its available world window without stretching and measures dock height to keep the battlefield above controls. Original pointer coordinate conversion therefore remains accurate in either orientation. Desktop keeps the same integrated controls.

Validation: all old control IDs remain unique, every combat control belongs to the battlefield, script order and referenced IDs verified, syntax checks, Arcade and Lore logic regressions passed. Actual browser/phone visual QA remains unavailable.

## v7 transparent HUD

Removed all reserved world-window insets and dock-based canvas sizing. The canvas now fits the complete battlefield stage while preserving arrow coordinates and scene proportions. Transparent touch controls float above it: movement left, combat actions right, Astra selector above the actions. Only individual controls capture touches; empty overlay areas pass through to aiming. Commands open on demand. Phone safe-area and compact portrait adjustments are included.

Validation: JavaScript syntax check passed; canvas fit no longer reads HUD dimensions. Real-device visual and touch QA remains unverified.

## v8 round HUD and ultimate response

Reference-inspired compact round icons replace the wide Astra dropdown and action panels. Skill icons sit at the bottom edge, with charge/unlock badges, armed highlights, shared guard/tactic actions, and scrollable extended Lore arsenals. Movement and Commands stay at the opposite edge; original handlers are preserved.

Tier-2 projectile Astras invoke a five-second frozen-combat response window, animated energy rings, particles and a timed release. Defender may spend an available Astra or Brace; timeout braces automatically. Ultimate counters cancel fully, water/fire or wind/water elemental counters block 85%, other counters block 60%. AI uses the same availability rules. Paired gravity arrows meet in a cinematic blast, with residual damage applied once. Narayanastra keeps its lore-specific dismount response. Reduced motion suppresses moving particles and rotation.

Validation: focused runtime checks passed for freeze, pause timer, defender validation, resources, full/partial clashes, timeout brace, unlocks, reset, AI response and animation. Real browser and phone visual/touch QA unavailable in this environment.

## v9 animated rigs, effects, sky battles and recharge

Warriors are scaled and registered to the rear deck, with a foreground rail pass over the lower legs. Movement and knockback advance four horse frames; a sampled painted wheel hub rotates with actual displacement. Special impacts apply bounded physical recoil with damping. Existing Krishna rescue poses and reduced-motion settings are retained.

New built-in ImageGen assets, saved in the project:
- /workspace/sites/kurukshetra/dist/chariot-trot.png — 1774×887 transparent 4×4 atlas: Krishna, Karna, Bhishma, Drona rigs; four trot frames per row.
- /workspace/sites/kurukshetra/dist/elemental-fx.png — 1254×1254 transparent 4×4 atlas: fire, water, thunder, solar.
- /workspace/sites/kurukshetra/dist/elemental-fx-extra.png — 1254×1254 transparent 4×4 atlas: wind, venom, cosmic, dust.

Generated frame registration is approximate; source sampling is fractional. A rig silhouette clip removes neighboring-row hoof fragments, and foreground composition keeps warriors seated visually within the platform. Horse motion is subtle.

Any non-ultimate Astra fired above 65 degrees with at least 55% power becomes a sky cast. The ↑ Sky preset provides a touch shortcut. Crossing the upper activation line invokes one ten-second hazard per owner; after a 1.4-second warning it deals small periodic damage. Another non-ultimate sky shot dispels the enemy hazard rather than creating a second hazard. AI uses the same availability and resource rules. These are fictional game mechanics, not claims of canonical powers.

Starter Astra charges regenerate every 14 seconds; advanced charges every 26 seconds, up to original capacity. Ultimate charges do not regenerate. HUD badges and progress rims expose refill state. Pause and ultimate counter windows stop combat, hazard and regeneration timers.

Validation: focused checks passed for recharge timing/capacity, ultimate limits, high-arc classification, sky activation/damage/dispel, preset aiming, normal shots, recoil boundaries, wheel/horse movement, pause/counter freeze, reset and AI dispels. Existing ultimate and Lore regressions passed. Actual game canvas rendered with native Canvas for visual inspection of mounting, effects and sprite loading. Browser layout, phone touch and audio QA remain unverified.

### Exact generation prompts (built-in ImageGen)

Use case: stylized-concept. Asset type: transparent 2D game elemental effects animation sprite atlas. Create EXACTLY a 4-column by 4-row sprite sheet, square 1024x1024 canvas, 16 equal 256x256 cells with NO visible grid. Row 1: orange fire burst. Row 2: cyan blue water splash. Row 3: violet and electric blue lightning burst. Row 4: warm radiant gold solar blaze. Read columns left to right as four successive animation frames: compact ignition, growing burst, full outward burst, dissipating particles. Every effect centered at identical cell center, fits fully in its cell with transparent margins. Consistent painterly luminous fantasy game style, saturated elemental energy, clear readable silhouettes, real alpha transparency around every effect and between cells. No characters, no weapons, no scene, no floor, no shadows, no labels, no letters, no numbers, no borders, no grid.

Use case: stylized-concept. Asset type: transparent game chariot trot animation sprite atlas. Input image 1 is the reference for four chariots, their design, colors, drivers, and ornate painterly Indian epic game style. Generate EXACTLY 4 columns and 4 rows, 16 sprites total, ideally 2048x1024 transparent canvas with 512x256 equal cells. Each row contains four successive trot frames of the SAME chariot rig, always side profile facing RIGHT. Row 1 repeats reference top-left: Krishna blue skin, blue and gold chariot, white horses. Row 2 repeats reference top-right: red and gold chariot, red-turban charioteer, brown horses. Row 3 repeats reference bottom-left: silver and purple chariot, silver gray driver, gray horses. Row 4 repeats reference bottom-right: green gold chariot, green neutral driver, brown horses. For every row, rig scale and horizontal position must be IDENTICAL across four frames, wheel center at same position, deck and rear standing platform anchor fixed. Animate only horse leg trot positions, slight tail/mane/flutter, and rotated wheel spokes across four frames, distinct alternate hoof contacts making a believable seamless trot cycle. Each rig fits completely inside its cell with small transparent margin. Empty archer platform at LEFT rear, driver standing at FRONT center of chariot, horses extending to RIGHT. One charioteer only, NO archer or second person. Do not add bows or weapons. Preserve empty rear platform. Use less tall banners if needed to fit wide 2:1 cell. No text, no labels, no lines, no grid, no scenery, no ground. True transparent alpha background.

Use case: stylized-concept. Asset type: transparent 2D game elemental effects animation sprite atlas. Create EXACTLY a 4-column by 4-row sprite sheet, square canvas, 16 equal square cells with NO visible grid. Row 1: pale mint teal wind spiral gust, curved flowing air trails. Row 2: luminous green venom mist with tiny poison droplets. Row 3: violet magenta cosmic burst with a starry core and cosmic sparks. Row 4: warm tan dusty impact burst with small stone chips. Columns left to right show four successive animation frames: compact onset, growing burst, full outward burst, dissipating particles. Each frame centered at identical cell center, each effect must fit FULLY within its equal square cell with at least 12 percent transparent margin on ALL four edges. No overlap or glows entering adjacent cells. Consistent richly painted luminous fantasy game style matching Indian epic game, saturated distinct readable silhouettes, true alpha transparency around each effect. No characters, no weapons, no labels, no text, no grid, no scenery.


## v10–v11: online/mobile and ultimate impact

Source assets now live in `web/`; build output is generated in `dist/client/`.
`web/ultimate-fracture.png` is an eight-frame, four-column/two-row transparent atlas generated with built-in ImageGen, used for the direct-hit ultimate cutscene. Source dimensions: 1774 × 887. Original prompt: transparent 4×2 sprite atlas of an earth-shattering magical arrow impact, painterly epic Indian archery, dark basalt fissures, gold/violet core, rising slabs, dust shockwave, eight progression frames, no characters/text/grid, fixed center and margin.

Final edit prompt: Edit this transparent game VFX 4x2 sprite atlas. Preserve the eight unique earth-shattering gold and violet basalt blast animation stages, painterly textures, sequence, and true alpha background. Fix each frame's padding and centering: shrink EVERY effect uniformly within its own square cell so all pixels of each effect fit safely within the central 78 percent of each square. The fifth frame (bottom-left) currently has a clipped pillar at its top; complete that pillar and fully show it with generous transparent space on all four sides. Align the impact ground origin of all frames at x=50%,y=70% within their cells. Keep exactly 4 columns and 2 rows, no grid lines or text, equal square cells. Requested output 2048x1024. NO cropped effect, NO overlapping neighbor, NO background rectangle or checkerboard.

No reference image was available for this revision. Android/PWA icons were rendered from the existing game SVG icon. Sound effects remain procedurally generated in the game.
