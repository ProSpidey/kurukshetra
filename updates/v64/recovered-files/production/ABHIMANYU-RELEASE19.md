# Abhimanyu — The Last Warrior (release 19)

The existing passive now supports real on-foot bow → sword → chariot wheel combat. No melee system or other warrior was rebuilt.

## State and balance
- Chariot breaks at 22% HP or after two precision wheel hits (existing equipment immunity applies).
- Always starts on foot with BOW; a further hit is required for the next stage.
- Bow breaks at 15% HP or after accumulating 7% max-HP damage during that stage.
- Sword breaks at 8% HP or after accumulating 6% max-HP damage during that stage.
- Each stage lasts at least 2.5 seconds; weapon changes take 1 second. Combat continues and Abhimanyu remains vulnerable. These are not extra lives: lethal damage still kills him.
- Progression cannot reverse through healing or equipment repair. Only round reset restores his equipment.
- Sword: 170-unit reach, .23-second windup, .65-second recovery, 1.45× normal damage.
- Wheel: 195-unit reach, .42-second windup, 1.05-second recovery, 2.1× normal damage.
- Tune values in `web/fate-config.js`, `FATE_BALANCE.abhimanyu`.

## Controls
Use Advance/Retreat touch buttons to walk. On-foot keyboard: P1 Z/X back/forward; P2 N/M forward/back. Online keyboard routes to your own seat. After bow destruction, use Strike, tap your battlefield area, or Space/Enter for melee; V/B also works. Move into range before attacking. Attacks may miss if the enemy leaves range during windup.
Normal arrows, special arrows, arrow volleys, rapid arrows, and Ultimates are unavailable after the bow breaks. Already airborne arrows continue; unlaunched queued arrows and active bow draws are canceled. Defensive tactics remain available.

## Animation and presentation
`web/animation/abhimanyu-combat.png` is a generated RGBA atlas with 48 illustrated frames. It has six-frame bow, sword and wheel walk cycles; six-frame attacks for each weapon; and six-frame bow-break/sword-draw and sword-break/wheel-lift sequences. Idle poses reuse each attack's first frame. Existing dismount/jump frames are retained.
The manifest includes explicit frame rectangles to prevent adjacent-row bleed in the generated atlas. The runtime selects walk, draw, attack and transition clips using replicated weapon state and timestamps. Legacy mace names are compatibility aliases to wheel animations; no mace is used in combat.
Weapon changes have separate short inset cutscenes, dust effects and audio cues. Existing untrimmed `vo_abhimanyu_bow_break_01`, `vo_abhimanyu_sword_01`, and `vo_abhimanyu_final_weapon_01` recordings are queued through the existing voice manager. Audio bytes and voice sequencing are unchanged.

## Authority and persistence
The host owns weapon stage, accumulated damage, chariot destruction, transition timers and each pending melee swing. Each swing has an event ID, authoritative impact time and resolved flag; range is checked once at impact. Dead attackers cannot complete pending swings. Guests only submit commands and render replicated state. Full snapshots recover stage and in-progress swings after reconnect. No extra per-frame network messages were added. Protocol/cache version is 19 so old clients cannot join new matches.

## Validation
Automated `scripts/test-abhimanyu.cjs`: initial bow phase, normal/special/volley restrictions, cancellation of queued arrows/draws, airborne preservation, sword/wheel windups, one-hit resolution, out-of-range miss, death cancellation, healing, reset, two-wheel-hit destruction, two-walker separation, both host/client seats, reconstruction during swings, stale actions and forged arrow commands.
Existing suites cover all passives, seven scripted pairings, best-of-three, Ultimates, puzzles, direct hits, networking, voice sequencing and 173 decoded original voice files. Canvas render checked with actual sprite textures.
Manual device check still recommended: select Abhimanyu, use the development panel to destroy his chariot, walk and shoot, use Break Abhimanyu weapon twice (allow transition to finish), test each Strike, then repeat as the joined player. Developer tools are excluded from production builds. Automated replica tests do not substitute for a live two-phone latency test.

## Files
Combat: fate-config/core/characters/game, game.js, lore.js. Presentation: fate-presentation/assets, cinematic-data/runtime, index.html. Assets: animation atlas, manifest and generator. Debug: fate-debug.js. Tests: new test-abhimanyu.cjs plus updated legacy fixtures. Delivery: online/server protocol and service-worker cache.
