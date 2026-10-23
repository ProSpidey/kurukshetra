# Directional Astra release and layering

Sky phase is selected from the effective release angle (65–115 degrees) for either player. Minimum sky power ensures a lightly drawn invocation reaches the trigger altitude, without rotating its aim. Stale skyMode no longer affects velocity. Charged direct Astras retain their launch velocity instead of being redirected to the enemy's feet. Sky/ground events and Ganga behavior use the actual projectile's sky flag. Removed the Sky orb and its HUD relocation; updated the guide and live phase label. Old `sky` replay commands are harmless no-ops.

Ultimate charging and the subsequent counter/invocation window draw a full-width bank of existing `fx_storm_cloud` sprites, plus intermittent `fx_lightning_strike` sprites at varied background positions. Both assets are preloaded for every loadout. Reduced motion disables bolts and freezes cloud animation. This backdrop does not consume combat RNG or change damage/state.

Draw order: aftermath backdrop, charge atmosphere, ultimate storm, active weather/sky invocation effects, fields, mounted warriors, dismounted warriors, combat effects/projectiles. On-foot Abhimanyu therefore remains in front of the opposing team in either seat. Aftermath no longer paints over active sky animations.

Protocol 46 updates the server referee alongside both peers. Previous relay pacing improvements remain. Verified all 24 Astra release directions/charge states in both seats, deterministic rendering, layer order, storm gates, delayed relay simulation, matchmaking, and full server-replayed best-of-three. Canvas samples are in docs/verification. Browser/physical Android QA was not available in this run.
