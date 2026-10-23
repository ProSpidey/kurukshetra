# Direct hit combat — release 29

## Changes

- Normal Spirit-arrow base multiplier: 1.65 → 1.05 (36.36% reduction). Perfect-draw and passive bonuses still apply. Velocity, charge timing, weak-arrow penetration and ten-arrow sky barrage remain. Barrage damage inherits the reduced parent-arrow budget.
- Normal Spirit charge indicators, projectile glow, trails, impact colour and barrage warning now use the canonical warrior colour. Removed the generic solar element from this normal-arrow variant; actual solar Astras keep their element and artwork.
- Normal arrows, Spirit arrows, arrow rain and common tactic arrows use actual swept first-contact collision against head/body/lower-body and equipment. Head damage is 1.35×, body 1×, lower body 0.6×. Damage text identifies the hit location. Perfect-draw criticals remain independent of location.
- Removed both Precision target selectors, selection reticles, projectile target tags and network target commands. No replacement button.
- Direct bow hit: interrupts charge and shooting for 2 seconds, cancels unreleased tactic arrows. Direct wheel hit: stops mounted movement for 2.5 seconds, including recoil translation. Direct standard hit: halves Resolve gain for 5 seconds. Equipment contacts cause disruption, not health damage.
- Each equipment part has its own recovery timer; repeated hits cannot refresh an active disable. Natural expiry is followed by 3 seconds of protection. Repair still takes 1.2 seconds and preserves protection. Existing Abhimanyu equipment/weapon transitions remain.
- Geometry is mirrored for each seat, follows dismounted height and chariot lowering, and omits wheel/standard targets when dismounted or the chariot is destroyed. A single arrow resolves its earliest contact only. Continuous segment intersections prevent fast arrows from skipping thin targets.
- Astra direct/area damage, Ultimate damage and counters remain governed by their existing systems, rather than applying normal-arrow body-zone multipliers to explosions.
- Protocol 29 and a new service-worker cache prevent mixing the old combat simulation with the new one.

## Verification

Passed focused tests for all three damage zones and all three equipment contacts in both directions, misses, fast-projectile contact, on-foot geometry, movement lock, independent part recovery, manual repair, banner Resolve reduction, all eight Spirit palettes and reduced damage budgets, ten-arrow barrage inheritance, snapshot restoration and round reset.

Passed two-peer rollback tests for head/body/low/bow/wheel/standard hits with simultaneous movement, delayed/reordered inputs, actual prediction corrections and matching confirmed/final full-state hashes.

Regression checks passed: Spirit-arrow/countdown, charging/sky-fire, balance/passives/Ultimates, Abhimanyu progression, Ultimate puzzle/cutscene flow, 540-frame rollback and handshake, Astra network simulations (50–250 ms one-way, both roles, duplicate/reordered inputs and recovery), and signaling/protocol validation.

Physical Android and visual browser playtesting were not available in this run. The hitboxes are deterministic gameplay shapes registered to the existing sprites, not per-pixel image masks. Final feel and pose alignment should still be assessed in human play.
