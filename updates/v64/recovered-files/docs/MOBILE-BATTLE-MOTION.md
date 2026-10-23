# Full battlefield and continuous chariot movement

Landscape combat now uses the full world window, independently of status cards and controls. The HUD is a 1400-unit proportional overlay on narrower landscape displays, retaining the PC arrangement. The complete 1400×680 canvas is contained without cropping or stretching; unusual aspect ratios can have plain letterboxing. The duplicate battlefield background is removed in landscape. Portrait retains its stacked controls. The overlay accounts for safe-area insets. Existing canvas-bound pointer conversion is unchanged.

Chariots accelerate toward the destination and brake before arrival. Wheel immobilization stops movement immediately. moveVelocity is reset each round and captured with player state for rollback. Network protocol 43 prevents mixing the previous movement simulation with this one.

Horse animation uses a stable registered atlas frame: only the lower-leg region is deformed continuously, proportional to movement speed. The chassis, torso and reins no longer jump between differently shaped whole-rig frames. Wheels continue rotating by actual distance. Reduced-motion mode retains a static rig.

Validation: movement/rollback regression, 100/300ms network replay checks, all-eight-warrior wall/cage AI regression, Fate presentation and Drona training checks. Inspected six horse gait poses through Canvas raster rendering. Browser/device visual QA was unavailable in this environment; no claim of physical Android testing.
