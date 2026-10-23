# Astra sprite remap

Reviewed the supplied 15.6-second recording and all 24 uploaded PNGs. The illustrations are not uniform sprite grids: frame counts/widths vary, adjacent effects overlap, and several large impacts touch source-sheet edges. The old 15-frame crop table split some illustrations and normalized every frame to its own crop height. Cycling those geometrically different flight frames produced visible size/pivot jumps.

Each Astra now uses its complete isolated first projectile illustration from the supplied ZIP. It has a fixed transparent 384×256 cell, fixed nock pivot, fixed scale, and stable silhouette across flight. Continuous elemental ribbons provide motion without swapping between unrelated shapes. Charge gathering and spectral warrior visuals remain. The overlapping impact rows have been replaced by the existing validated six-frame padded impact animation, colored to each Astra family and enlarged separately from projectile scale. A duplicate generic impact overlay was removed. Collection icons use the same safe atlas.

24 runtime atlases contain 384 padded cells. The exact uploaded originals and legacy mapping are preserved in production/spirit-remap-source; scripts/remap-astra-spirits.py rebuilds the runtime atlases. Per-Astra source/runtime hashes are in web/effects/astra-remapped/remap-report.json. Existing source PNGs are also retained. No newly generated artwork was necessary.

Checks: transparent 12-pixel minimum perimeter for every cell, nonempty contents, invariant flight pixels, fixed pivots, frame bounds, hashes, all impact phases, event deduplication, confirmed/late network events, round reset and read-only rendering. Browser/referee simulation equivalence passed. Live browser and physical Android visual QA were unavailable; the CPU Canvas render was inspected.

Combat stats, hitboxes and timing are unchanged. Cache v49 forces fresh art/config; protocol remains 39 because the simulation schema is unchanged.
