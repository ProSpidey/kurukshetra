# Legendary Astra visual update — v61

All 15 remaining Astras now use coordinated charge, flight, impact, ground and sky presentations. Combat values, counters and protocol 49 are unchanged.

| Astra | Visual identity |
| --- | --- |
| Gandiva Gale | Interwoven wind funnels and physical arrows |
| Aindrastra | Storm clouds, vajra and branching lightning |
| Vasavi Shakti | Monumental golden lance and celestial halo |
| Ganga’s Guard | Flowing sapphire water rings and foam |
| Kuru Thunder | Suspended vajra and forked storm strikes |
| Prabhasa Radiance | Solar mandala and radiating golden lances |
| Acharya’s Judgment | Counter-rotating mandalas and ordered arrow orbit |
| Chakra Volley | Central chakra and satellite discs |
| Subhadra Tempest | Intertwined weapon funnels and chakra crown |
| Rudra Rush | Fire vortices and ember lances |
| Vrishni Wind | Compressed air rings and fast arrow streams |
| Yuyudhana Storm | Monsoon clouds, water surge and lightning |
| Forest Fang | Arching thorn formation and precision arrows |
| Nishada Flame | Flame vortex and swirling leaves |
| Aranya Cyclone | Tall leaf cyclone and forest crown |

## Assets

Generated with the built-in image generation tool. Source: `production/legendary-fx/legendary-cores-source.png`. Runtime: `web/celestial-fx/legendary-cores.webp`. Renderer: `web/legendary-fx.js`.

Generation brief: a transparent 3-column, 2-row atlas of six ornate mythic Indian weapon/effect cores: rightward golden lance, golden-blue vajra, silver-gold-blue chakra, green leaf/thorn crescent, sapphire foaming water ring, and golden arrowhead mandala. Each centered in its own cell with clear padding, luminous realistic game VFX, no text or background. The corrected final atlas centers and pads every sprite to avoid clipping. This is a brief summary, not the exact original tool prompt.

The 1536 × 1024 atlas uses six 512 × 512 cells. The outer eight-pixel borders have at most 1/255 alpha. Existing detailed elemental animation sheets remain in use where appropriate.

## Verification

- 300 rendered cases: 15 Astras × five phases × four quality levels.
- Rendering preserves rollback state, canvas transforms and alpha; transformed fields retain their proper fallback.
- Directional sky targeting, celestial counters, network replay at simulated 100/300 ms, and passive film lifecycle checks passed.
- Contact sheets reviewed for sky, ground, flight and impact.
- Node Canvas p95 render time was 1.23 ms in the fixture. This is not an Android frame-rate measurement.
- Browser/device gameplay was not verified in this run. Existing Android v60 APK is unchanged; this milestone updates the web game.

Reduced quality limits particle counts and removes lightning flashes. Render clocks do not consume simulation RNG. Weapon projectiles align to their velocity with stable atlas cores; loaded assets fall back to the existing renderer until ready.
