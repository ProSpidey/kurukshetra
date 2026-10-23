# Horse gait replacement

Asset: `web/horse-gaits.png` (1983 × 793 transparent PNG).
Generated using image generation, then edited with the generated sheet as reference to separate sprites. Prompt: a regular five-column, two-row transparent horse animation sheet, white horses in blue/gold tack and chestnut horses in red/gold tack; standing followed by four anatomically distinct gallop phases; side view facing right, full tails and hooves, consistent scale, no motion blur, blended legs, riders or carriage. Refinement requested wide transparent gutters and complete silhouettes.

The renderer uses inspected custom source bounds and torso/ground registration instead of assuming generated cells are exact. Separate opaque rear/front horses run one phase apart. Standing and reduced-motion use pose zero. Phase advances with actual travelled distance, so wheel immobilization/arrival stops the gait. No render-side simulation mutation. Existing painted chariots, drivers and rotating hubs are retained; old horses are clipped out. Krishna rescue keeps its special cinematic artwork.

The previous 36-triangle leg deformation per team is removed. Horses now cost two sprite draws per team, with no frame blending. Asset participates in initial loading and offline caching. Networking changes are documented in RELAY-PACING.md.

Validation: Canvas contact sheet `docs/verification/horse-gaits.png`; render-state purity and idle/reduced-motion checks; deterministic motion, rollback relay pacing, reordered inputs and complete server-verified match tests. Physical Android/network verification still requires two real devices.
