# Astra collection rebuild — artwork revision 33

Replaced all 24 Spirit sheets using the exact named files in the latest uploaded ZIP. Gameplay IDs, character ownership, damage, counters and online protocol remain unchanged.

The supplied README's 4×4/1536×864 description does not match the actual files: they contain irregular three-row layouts and several image dimensions. The renderer now uses explicit per-image source rectangles, offsets, and original cell proportions. Formation progresses through the top row, flight cycles the middle row, and collision/dissipation uses the bottom row. Fully formed frames also supply HUD and collection illustrations; the old separate selection images were removed.

The uploaded PNG encoding was rejected by the Canvas validation decoder. Runtime files were losslessly re-encoded as PNG and checked against the uploaded files: dimensions and every RGBA pixel are identical. No artwork was generated, recolored, or retouched. `source-checksums.json` records uploaded-byte and decoded-pixel hashes; `checksums.json` records runtime-file hashes. The original ZIP remains unchanged.

Sprite textures are cached on demand instead of downloading all 24 during service-worker installation. Previously loaded sheets remain available offline. Uncached sheets require a connection on first use; the existing fallback visuals remain available while loading. Cache revision 33 replaces revision 32.

Verified: all 24 runtime sheets decode; file hashes, transparency, source rectangle bounds, phase frame ranges, moving-projectile placement, impact deduplication, quality/state parity, late-event safety and round reset. The 96-cast combat matrix and Astra collection UI fixture tests pass. Contact sheet reviewed in `verification/astra-spirit-contact.png`. Real-phone rendering/performance is not certified by these tests.

Some large glows touch adjacent images in the source artwork. Rectangles isolate the main effects without changing pixels; a few glow edges remain clipped where source illustrations meet. This is an artwork/layout limitation, not a black-background overlay.
