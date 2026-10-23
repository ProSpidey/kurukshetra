# Legendary Fate — manual acceptance checklist

These steps are provided for browser and real-device verification; they have not been marked passed by automated simulations.

## Start

1. Open the updated game, then refresh/reopen until the home header reads **LEGENDARY FATE · 15**. Both online players must use the new version. Existing Android packages embed older web assets and need rebuilding.
2. Select Local 1v1; choose the desired pair through Warriors. Test landscape at phone size and full desktop size.
3. For repeatable forced states, run `FATE_DEV=1 node scripts/build.mjs` and serve `dist/client` with a local static server for offline tests. Development controls must not appear in a normal `node scripts/build.mjs` output. Online testing requires the Worker/D1 environment; use the normal hosted game for natural activation, or a private development deployment under your control.

## Shared controls

- Drag/release and reverse aiming still fire normal arrows; hold Space/Enter for keyboard drawing.
- P1: F repair/sacrifice, G dodge, V prototype strike. P2: J, K, B.
- Touch: passive actions are round overlay buttons beneath health. Confirm they do not block Astra controls, aiming or the characters.
- Repair: tap when the Repair button glows gold. Four accurate beats complete it. Repeated taps in one beat do not add progress. Missing the gold interval removes one progress point.
- Sacrifice: once per round; inspect the persistent HUD indicator and lower normal damage afterward.

## Each warrior

| Pair | Steps and expected outcome |
|---|---|
| Karna vs Bhishma | Drop Karna below 30%; verify armour/cracks and expiry. Apply lethal damage; bow/Astra/Ultimate must be blocked while repairing. Kill him during repair in one round. Complete four beats in another; verify 25% HP and timed comeback. A second lethal hit kills. Trigger Bhishma at 1%; attacks do not kill him, healing fails, final stand expires into arrow-bed death and round results. |
| Arjuna vs Karna | Give Arjuna lethal projectile damage. Krishna lowers the chariot, a cosmetic arrow passes overhead, HP becomes 13%. Try again next round: no second save. Start a new match: save is available again. Also spend manual serpent rescue first and verify automatic rescue is unavailable. |
| Drona vs Arjuna | Use one Astra three times (wait for refill when required). Check observed/understood/mastered. Switch Astra: independent count. Check incoming mastered damage and a mastered Ultimate's next-rune hint. On defeat, check meditation placeholder. |
| Abhimanyu vs Drona | Reach 22% HP or use development destruction. Verify on-foot movement and Ultimate restriction. Advance into Strike range. Test prototype strike, sword/mace progression, dodge, and receiving arrows at the on-foot position. |
| Ashwatthama vs Arjuna | Trigger first lethal hit; verify 1% HP for five combat seconds, no healing, then 12% restoration and broken-Mani indicator. Next lethal hit must kill; no guaranteed timed death as with Bhishma. |
| Satyaki vs Karna | Land five distinct casts to trigger Fury. Volley counts once. Miss to clear stacks. Receive a fully focused critical to clear stacks/end Fury. Damage-over-time must not add stacks. |
| Ekalavya vs Arjuna | Land fully drawn perfect shots until Focus fills; check Instinct timer. Miss to reduce Focus. Activate sacrifice twice: only first applies. Check puzzle bonus/refill benefits and the normal-arrow damage penalty. |

## Existing gameplay regression

1. Fire normal, volley, rapid, elemental, sky and Ultimate arrows. Confirm gravity arc, collisions, shields, weather and refill.
2. Ultimate at high enemy HP remains Rage-locked. At ≤35% enemy HP, 45 seconds and required Resolve/ammo, invocation succeeds.
3. Defender cannot counter with a normal or ordinary Astra. Successful Ultimate puzzle spends the counter; a failed puzzle preserves it. Direct hit shows the existing earth-shattering sequence.
4. Finish two wins, confirm match result, then start a new best-of-three. Check one-round states reset and Krishna consumption persists only within the match.
5. Play Solo at all difficulties and both Lore encounters. In Narayanastra trial, the invoker must remain protected until the trial completes and dismount remains effective.
6. Test sound off/on, reduced motion, pause/resume, help/settings, portrait rotation and fullscreen. Reduced-motion setting must not alter passive HP or duration.

## Two-device online matrix

Repeat all seven pairs with the host and guest characters swapped. Check both HUDs, exact HP, phase, repair progress, once-use flags and round score after each transition. Trigger both passives in the same exchange.

During Karna repair, Krishna guidance and Mani survival: disconnect/reconnect the guest, then restore the host connection. Verify the latest snapshot restores timers/state without replaying a save or healing twice. Host migration is not supported. Measure gold-window timing on mobile data versus Wi-Fi: repair currently judges host receipt time, not a trusted client timestamp.

Watch for pauses while either player fires. This passive milestone preserves the existing transport and does not resolve all prior relay lag. Record RTT/network conditions, device, browser and whether the host or guest was affected before tuning the transport.

## Assets and performance

Confirm short Fate camera insets leave both archers visible. Check simultaneous event subtitles, armour cracks, sinking-wheel indicator, Krishna duck/pass-through, arrow-bed and on-foot hit registration. Current frames are PLACEHOLDER. Record mobile frame rate and overlay overlap before final art and release signing.
