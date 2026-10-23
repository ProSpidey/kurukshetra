# Release 25 — passive presentation and charged sky barrage

Inspected the supplied 12-second gameplay recording. Ashwatthama's permanent MANI state selected a looping full-body Fate sprite sequence. Stable MANI/CURSED states now use the normal combat sprite and existing gem/aura overlay. The actual shatter event still plays its finite, deduplicated cinematic. Once that event ends, the combat stance resumes even while the survival timer remains active.

Karna's low-health Kavacha activation threshold is preserved. Its protection no longer expires after six seconds. Enemy damage consumes durability equivalent to 18% of maximum HP before Kavacha's damage reduction. Cracks and the HUD percentage reflect damage received. The break cinematic is dispatched from an explicit ArmourBreak event when durability reaches zero. Idle time and self damage do not wear it down. Existing lethal Wheel Fate behavior remains.

Unarmed low-power sky shots retain three quick rain arrows. Fully charged normal sky shots clear incoming enemy rain and launch ten empowered arrows. Each uses 32% of the charged projectile's damage (versus 22% of a weak projectile for quick rain), with a 0.9-second warning and 0.055-second spacing. Children cannot spawn more rain. Per-owner rain and total projectile caps remain. Skyward charge still burns enemy rain without requiring full charge, allowing a defensive clear followed by a full-charge barrage.

Tests passed: focused armor/presentation/barrage regression; original eight-passive tests; original spirit-arrow/countdown tests; charge-feel checks; all 96 Astra releases and priority counters; eight-warrior rollback/presentation convergence. Tests use production simulation and mocked Canvas, not real-device visual QA.

Protocol and offline cache incremented to 25. Both peers must load the same release.
