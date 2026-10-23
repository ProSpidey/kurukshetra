# Celestial Astra rebuild

Seven generated transparent assets live in `web/celestial-fx/`: brahma.webp, shiva.webp, disc.webp, meteor.webp, sun.webp, fire.webp and water.webp. Built-in image generation produced the artwork; WebP encoding keeps the complete addition under 1.4 MB. Original supplied sketches were reviewed.

Narayanastra creates a weapon disc with Naracha, Ardhachandra and Shilimukha sprites. It subsides 2.1 seconds after the defender's last release. Rudra Ember and Surya Shaft sky sources persist until directly hit by an enemy special Astra; ordinary arrows and distant elemental counters cannot remove them. Recasting replaces the owner's same source. All fields reset between rounds. Impacts have a 0.7-second warning, recur every 0.85 seconds, and deal 3 spirit / 1.8 normal damage before defense modifiers. AI uses ballistic aim to target the core or ceases attacking to pacify Narayanastra.

Brahma appears for Brahmastra and Brahmashirastra; Shiva appears for Pashupatastra, during charge/invocation and active fields. Transparent mist bases blend into the battlefield. These are layered animated apparitions, not full skeletal character animations.

Ground Agneya advances at 360 world units/second, preserving its sky tornado. Varuna's Tide advances at 450 units/second, pushes at 95 units/second within its flood, clears burn and overlapping fire fields, and preserves existing movement boundaries. Fire and flood textures deform gently across strips; reduced motion holds them still.

Gameplay state resides in rollback-owned fields. Protocol 48 matches the generated server referee. Canvas presentation does not consume simulation RNG or mutate snapshots. Asset decoding is included in matchup FX preparation. Existing passive films, ultimate collision movies, mounted/foot draw ordering and aftermath remain intact.

## Generation prompt brief

All prompts used `stylized-concept`, actual alpha transparency, epic painterly Indian mythological game art, no text/background, generous padding. Subjects: Brahmadeva with multiple faces/four arms and cyan-gold mist base; Shiva in Nataraja Rudra dance with violet-cyan aura and dissolving lower figure; molten cracked asteroid; horizontal ornate cyan-gold Narayanastra disc; turbulent golden solar sphere; horizontal ground-hugging flame carpet without rings; horizontal rushing turquoise flood with a right-side curling crest rather than a waterfall. Seven separate built-in generations were encoded into the files above.

## Verification

`test-celestial-astras.cjs`: persistence, swept direct counters, ceasefire, advancing fire, extinguishing flood, late strikes, rollback restoration and actual AI projectile/core collision.
`render-celestial.cjs`: seven real Canvas renders, PNG assets decoded, snapshot purity assertions.
Also verified directional sky controls, delayed/reordered network inputs, browser-simulation/server-referee parity and passive-film regression tests. No physical Android device test was performed.
