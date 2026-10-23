# Spirit-charge nature gathering

All 24 Astra presets now gather elemental energy during an armed spirit charge. Thunder and celestial storm charges form a cloud above the caster with localized fork lightning. Water draws droplets from mist and earth; wind pulls curved air currents inward; forest pulls leaf motes; fire draws embers from the ground; solar and divine charges draw celestial rays; serpent and curse charges gather matching energy from the battlefield. A small nock glow receives all streams, underneath the existing charged-arrow sprite.

The effects scale with actual Astra charge progress and use each spell's current aura color. Both seats and dismounted bow positions are supported. Effects stop on release, cancellation, interruption, death/round end, or cinematic takeover. This is cosmetic only: no damage, charge-time, stamina, weather physics, RNG or network-state changes. Existing storm-cloud art is reused. No generated sheets or duplicate textures were needed.

Rendering is bounded to 16/32/52 particles per charging warrior at low/medium/high quality. Reduced motion uses eight static gathering motes and disables cloud lightning. Discharges are local, with at most one per caster per 1.65 seconds, and never flash the full screen. Procedural particles allocate no persistent emitters and cannot accumulate between rounds.

Validation: 24 presets × three quality settings × reduced-motion on/off, both seats; unchanged rollback snapshots and RNG; repeatable rendering; cancel/end/cutscene gates; Canvas state restoration. Canvas verification image: docs/verification/spirit-surge.png. Live browser and physical Android testing were unavailable in this environment. Cache version 48; network protocol unchanged at 39.
