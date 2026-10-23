# Individual Astra animation update — v62

The v61 six-core atlas is no longer used by the 15 redesigned Astras. Every one now has a separate eight-frame transparent sheet, with its own silhouette and changing poses. This replaces the shared water-ring, vajra, chakra and leaf constructions rather than recolouring them.

| Astra | Dedicated animation |
| --- | --- |
| Ganga’s Guard | Cresting, flowing crescent water curtain |
| Aindrastra | Violet lightning branches forming beneath a canopy |
| Kuru Thunder | Staggered blue thunder pillars and stone fragments |
| Yuyudhana Storm | Roaring stormwater lion and surging mane |
| Gandiva Gale | Spectral bow flex, string release and arrow fan |
| Chakra Volley | Separate small blades weaving through lanes |
| Forest Fang | Roots unfurling around snapping ivory fangs |
| Nishada Flame | Flame tiger crouch, pounce and landing |
| Vasavi Shakti | Golden ruby spear with streaming scarlet plasma |
| Prabhasa Radiance | Unfurling ivory celestial lotus |
| Acharya’s Judgment | Swaying arrow scales and descending judgment arrows |
| Subhadra Tempest | Single rotating bladed chariot wheel |
| Rudra Rush | Galloping ember bull |
| Vrishni Wind | Wind conch and pulsing curled gust |
| Aranya Cyclone | Twisting banyan spirit with moving crown and roots |

Vasavi's normal charge, ultimate invocation and launched projectile call the same spear renderer. There is no normal-arrow overlay on its launched spear. At full charge, all three stages use the same dimensions, source sheet and frame timing for a given animation age. Both seats follow aim direction without flipping the spear upside down.

## Audit scope

Reviewed the shared v61 renderer, original spirit-sheet renderer, celestial manifestations, Naga/Garuda layer, ground fields, sky manifestations and strike overlays. The 15 shared-core effects above were replaced. Existing Naga/Garuda sequences and the separately authored Brahma/Shiva, Narayana weapon disc, solar/meteor cores, fire and flood systems were retained; they are not regenerated assets in this update. Original combat lifetimes, counter rules and damage are unchanged.

## Asset provenance and paths

Built-in image_gen was used, with one independent prompt per Astra. Exact final prompt set is in `production/individual-astras/generation.json` (the original `source` locations are generation provenance only). Final full-resolution source sheets are `production/individual-astras/<astra_id>.png`. Runtime sheets are `web/individual-astras/<astra_id>.webp`.

Source grids are 1536×1024, four columns by two rows. The packer uses fixed cells and adds transparent gutters; it does not recenter individual frames. Runtime grids are 1024×684. Low-opacity noise is quantized to 64 alpha levels for compact downloads. All 15 runtime files together are approximately 2.5 MB. Only the match's chosen sheets are decoded during match preparation.

## Validation

- 15 unique sheets and 120 distinct, nonempty RGBA frames; valid WebP decoding and transparent eight-pixel gutters.
- 300 renderer cases across sky, ground, charge, flight and impact at four quality settings. Every sheet advances through all eight source frames.
- Renderer preserves rollback state and canvas transforms/alpha.
- Charge, invocation and flight source-frame/scale equality for Vasavi on both seats.
- Directional sky, celestial counters, 100/300 ms deterministic network replay, and passive cutscene regressions passed.
- Sky, ground, impact and two-direction flight contact sheets inspected.
- Browser/Android device playback has not been verified in this run. Reduced-motion settings intentionally hold a stable frame; normal and low-quality modes animate.
