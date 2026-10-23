# Volley Reserve, Bow Strain and Retaliation — version 49

Implemented from the complete uploaded Pasted text(2).txt brief. Integrates with existing controls, physical projectiles, formations, Fate passives and rollback; no additional combat button.

## Rules

- Unbroken Volley and High Volley (five forward or five high releases) have 1.8-second base windows and a shared five-arrow reserve. Manual rapid shots deal 5.6 damage each, or 3.5% of standard 160 HP. Master duration bonus does not add arrows.
- Tactical Rapid Volley (three arrows) and legacy offensive tactics also draw from this reserve. They cannot activate without enough arrows.
- Reserve refills after 0.8 seconds without firing plus 1.8 seconds re-nocking. Ordinary shots remain available with at least 0.65 seconds recovery when reserve is empty.
- Bow strain: ordinary +5, charged +12, rapid +17. Sustained normal fire after five quick releases also adds +17 and reduces projectile damage to the rapid limit. Strain decays 22/second after 0.8 seconds without firing.
- 40 strain adds predictable, visible aim sway; 70 exposes the guard; 100 forces 1.8 seconds regrip. No additional random spread. Preview and release use the same simulation-time sway.
- Active rapid fire exposes the guard, cancels pre-existing guard protection, blocks new defensive formation/guard activations, and delays chariot/dodge responses by 0.18 seconds. Movement remains available during String Shock.
- Burst firing is constrained to ±20° from its original sector. A release outside the cone cancels the burst without creating a projectile and starts 0.75 seconds retargeting. High Volley is a separate upward setup.
- A successful charged physical hit into Open Guard cancels the burst/queued rapid shots, adds 25 strain, causes 1.8 seconds String Shock and reduces draw speed 30%. Charged Stability pressure gains 35%. A precise bow hit causes 2.5 seconds restring. Damage is not increased.
- Rampart + one high physical shot converts to persistent Canopy over 0.5 seconds, retaining integrity. It trades front coverage for overhead interception. The shot is consumed as a formation anchor, not duplicated into rain.
- Normal arrows wear one section by 8 integrity; rapid arrows by 5. To preserve the earlier user requirement, these cannot remove the last point: a powerful arrow must finish the break. Naracha wears 28, charged arrows 45, charged perfect central-anchor hits 90. Fire-Pot damages its struck section. Signature Astras destroy physical structures; Ultimates bypass them. Walls/cages/converted canopy have no timed expiry and reset each round.
- Active projectile blocks grant a separate Retaliation meter: ordinary 3, rapid 5, charged 8, ordinary formation block 4. Duplicate projectile events do not count twice; gains are limited to 25/second. No idle gain. Decay starts after 1.5 seconds without pressure at 3/second.
- At 100 Retaliation, the next own non-Ultimate Signature Astra charges 35% faster, has 20% more Stability and takes 35% less Stability damage from ordinary arrows. Release recovery is 10% shorter. There is no damage bonus and no extra Ultimate Rage. Counter-slot Astras and Ultimates are excluded. Cancelled charges retain the meter; actual Signature release consumes it.

## Implementation and verification

`web/bow-combat.js` owns deterministic rules; mutable state lives in each player snapshot. `web/bow-combat-ui.js` provides compact meters, reserve count, Open Guard indicator, regrip/string status and sector tell. Existing arrow PNGs remain in use. Formation rendering displays the structural anchor and interpolates canopy conversion without changing simulation state.

Checks: five-shot real releases, reserve recovery, sector cancellation, deterministic sway, body and bowstring punishment, movement during shock, overhead interception, pressure deduplication, Signature-only charge/Stability bonuses, unchanged damage, reset and snapshot restore. Paired rollback tests include 100/300 ms delay, reordered/duplicated input and equal confirmed hashes. Existing formation and cinematic referee parity also pass. Physical phone interaction/performance remains unverified.

Online protocol 42; service-worker cache v52. Both clients must reload before online play.
