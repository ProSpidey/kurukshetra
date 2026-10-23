# Dhanur Combo / Arrow Formation System

Physical shots build formations from actual aim directions, release quality, arrow types and precision hits. No extra combat button is required. Lore battles retain their scripted rules. The expandable Dhanur Combos guide is inside How to Play, and the quiver shows developing patterns.

Aim angles are relative to the opponent: downward below −8°, forward −8–44°, rising 45–64°, high 65–115°, backward diagonal above 115°. Drag and keyboard aim now cover −25° to 155°, mirrored for the second player.

| Formation | Pattern / finisher | Stamina |
|---|---|---:|
| Arrow Rampart | ↑ ↑ ↓ | 16 |
| Unbroken Volley | → → → → → | 18 |
| Skyfall Net | ↑ ↑ ↑ ↓ | 18 |
| Crossfire Vyuha | ↗ ↓ ↗ ↓ | 18 |
| Piercing Line | → → →, Naracha finisher | 12 |
| Crescent Snare | ↗ ↓ ↖, Ardhachandra finisher | 16 |
| Wheel Breaker | ↓ → ↓, heavy finisher | 12 |
| Deflecting Canopy | ↑ ↗ ↖ | 14 |
| Serpent Path | ↓ ↗ → | 14 |
| Hunter’s Mark | Two same-zone precision hits, then Shilimukha | 12 |
| Breaking Storm | → → charged → | 8 |
| Arrow Cage | ↑ ↗ ↖ ↓ | 22 |
| Chariot Suppression | → ↓ → ↓ → | 16 |
| Twin Horizon | → → perfect Karnika → | 12 |
| Rain Breaker | ↑ charged ↑ during enemy rain | 6 |

Twin Horizon requires a perfect Karnika finisher to avoid consuming a developing five-shot Volley. Downward shots share the low direction bucket. Canopy waits 0.85 seconds to allow the Cage extension.

Shots normally allow a 1.15-second gap, with 0.7 seconds extra for a charged finisher. Formations share a nine-second cooldown. Rampart must complete within 2.5 seconds; longer recipes allow 4.8 seconds. Disrupting hits cancel developing sequences and active Volley. Volley remains manually aimed/fired, costs two stamina per boosted ordinary shot, and ends after five boosted shots. Followups are reduced to 45%, capped at 4% standard HP per shot. Developing forward-chain followups are capped at 3%.

Walls and cages persist until broken or the round ends. Ordinary arrows chip integrity but cannot remove the final point of a section. Rampart has 100 integrity (Bhishma 120); charged arrows deal 45 integrity, Naracha 28, other powerful physical breakers 35. Cage sides have 50 integrity each. Walls and cages show sectional integrity and lose broken sections. Heavy/charged arrows break defenses; Ultimate arrows bypass them. Cage escape is possible through a broken side. Snare and suppression slow movement rather than immobilizing it. Formation rain/crossfire each spawn only six low-damage physical projectiles. New zones have a visible 0.8-second setup period. Sky anchors are consumed to avoid stacking formation rain with their independent rain effect.

Each warrior has two specialist patterns. Perfect sequences grant Master variants, increasing shot damage or duration/integrity by 15%: Arjuna (Net/Canopy), Karna (Piercing/Wheel), Bhishma (Rampart/Canopy), Drona (Crossfire/Cage), Abhimanyu (Crossfire/Twin), Ashwatthama (Breaking/Suppression), Satyaki (Volley/Serpent), Ekalavya (Hunter/Snare).

## Verification

- All 15 recipes, stamina, interruption, timeouts, real shot-release integration, broken-section escape, bounded rain and Ultimate priority.
- Both Master recipes for all eight warriors, including perfect five-shot Volley.
- Two rollback peers at 100/300 ms delay with duplicate/reordered messages converge.
- Browser simulation and server referee agree over 480 frames.
- Existing counter-network and cinematic-referee regressions pass.
- Canvas rendering leaves simulation state unchanged; sample in verification/dhanur-formations.png.

Protocol 42 requires both online players to reload. Service-worker cache is v52. Physical Android/browser interaction and competitive balance need playtesting; automated checks do not establish those outcomes.


## Damage ladder update (version 48)

Reference percentages use 160 HP; warrior health, defenses, hit zones and passive modifiers remain meaningful.

- Standard normal arrow: 12.8 damage (8%) at clean draw; quick releases 7.2%, varying by warrior. Bhishma remains highest base damage and slower draw.
- Charged physical: approximately 16%; perfect charged headshot about 22.5% before passive modifiers.
- Naracha: about 12% body; Shilimukha: about 9% body / 15.8% head, before critical/proficiency modifiers. Dedicated equipment/utility arrows intentionally deal less HP damage.
- Normal signature Astra: 22% direct payload, split across volley projectiles; approximately 3% potential field damage; shared per-cast cap 25%.
- Full Spirit Astra: 24% direct, approximately 14% field; shared per-cast cap 38%. Partial charge scales existing stages. Sky-only effects trade direct impact for area control.
- Ultimates retain 70–82%, with Bhishma final stand 90%. Ashwatthama execution explicitly requires CURSED phase and the existing counter restrictions.
- Formation direct finishers: approximately 11–16%; Net/Crossfire six arrows totaling 19.2% body damage, before defenses/hit zones. Master finishers respect the direct cap. Rampart/Cage have zero HP damage.

Walls, cages, canopy, net, crossfire and Astra showers reuse existing transparent Gopuccha artwork. Charged physical flights also use PNG arrows with their existing character glow. No assets were regenerated.

Additional checks: test-damage-ladder.cjs tests true horizontal releases on both seats, damage tiers, shared impact/DOT budgets, serialization/reset and persistent defense break rules. Renderer verifies both formations and Astra rain with real Canvas and PNG assets. Phone interaction remains unverified.

The version 49 anti-spam rules are documented in BOW-COMBAT.md and supersede the earlier Volley timing and wall-wear tuning above.
