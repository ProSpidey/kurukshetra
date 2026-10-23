# Grounded beast attacks

Nishada Flame and Rudra Rush now use rollback-owned phase machines rather than animal sprites attached to ballistic arrows. Direct arrows fly for 0.18 seconds, morph/descend for 0.4 seconds, then run along the ground. Tiger pounce applies 75% impact and 25% across four one-second bleed ticks. Sky tiger invokes above the caster, attacks from behind the target, and bypasses shield/mitigation through the existing Fate survival-interception pipeline.

Sky bull grows for 0.8 seconds, guards for one second, then charges. The full-height guard/charge barrier rejects incoming non-Ultimate arrows. Rams push either seat to its outer arena edge over 0.45 seconds and stun for two seconds. Bull volley count is one. No legacy beast field is spawned.

New transparent beast-attacks atlas was generated from separate anatomical tiger/bull pose references. Four run poses and four action poses per animal; foot registration is per pose, with no crossfade of legs. Source retained in production/individual-astras, WebP runtime asset predecoded with selected warrior effects.

Validation: deterministic direct/sky phase tests, both-seat ram, timed stun/guard, Ultimate passage, true-damage shield bypass, bleed and reset, rollback replay; existing directional sky, celestial sources, Fate films and delayed/reordered multiplayer regressions. Node Canvas render fixtures cover 12 beast states. Physical Android/browser testing was unavailable.

Network protocol 50 prevents old simulations entering new matches.
