# Astra Arsenal / Codex foundation — release 30

Implemented Step 1 only. The Codex extends the existing Astra registry and exposes classifications, a directed counter graph, reverse lookups and transformation recipes. No new combat effects, loadouts, Spirit inputs, progression, chariot systems, damage rules or Ultimate rules were implemented.

## Files created

- `web/astra-codex-data.js`: read-only catalogue extensions, current-rule adapters, proposed relationships, indexes, helpers and validation.
- `web/astra-codex.js`: event-driven help view, selection, filters, counter links, recipe cards and art fallback.
- `web/astra-codex.css`: scoped desktop, mobile landscape, portrait and short-viewport layout.
- `scripts/test-astra-codex.cjs`: data/coverage/validation and unchanged-definition checks.
- `scripts/test-astra-codex-ui.cjs`: DOM behaviour, navigation, fallback and responsive CSS constraints.
- `scripts/test-astra-codex-compat.cjs`: baseline-versus-Codex deterministic simulation comparison.
- `scripts/report-astra-codex.cjs`: reproducible readable report from the live definitions.
- `docs/ASTRA_CODEX_BRIEF.txt`: complete supplied brief.
- `docs/ASTRA_CODEX_REPORT.md`: this report.

## Files modified

- `web/index.html`: Arsenal entry inside How to Play; help controls retained; new styles/scripts; release label.
- `dev/astra-debug.js`: read-only ASTRA DATABASE selector, inspection, validation and table export.
- `scripts/build-sw.mjs` and generated `web/sw.js`: new cache generation for the UI update.

## Existing architecture audited

`web/arsenal.js` owns ASTRAS, the 24 stable signature IDs and LOADOUTS. `web/astra-config.js` corrects migrated display spellings, defines the two-phase ASTRA_PHASES records, field templates and ASTRA_INTERACTIONS. `web/lore.js` adds eight legacy encounter variants into that same ASTRAS registry. `web/character-config.js` supplies stable warrior IDs and display adapters. Damage and passive Ultimate fractions are in `web/fate-config.js`, with live application in `web/game.js`, `web/ultimate.js` and `web/astra-fields.js`.

The live field counter lookup uses field tags, counter tags, cast strength and mode. Projectile clashes, Lore-specific barrage counters and Ultimate puzzle eligibility are separate existing pathways. Ultimate casts and fields are excluded from ordinary field-counter processing. All four requested transform fields already exist: Steam Cloud, Electrified Water, Ember Storm and Dispersed Mist.

The existing help dialog already manages input exclusion, focus and pause/resume. Settings and career statistics use device-local `astra-settings` and `astra-career` keys. There is no Astra collection/discovery save to migrate. Existing development panels are gated by build environment variables and omitted from production.

## Final database architecture

ASTRAS remains the authoritative entry registry: `AstraCodex.get(id) === ASTRAS[id]`. New catalogue fields extend these same objects. Names, numeric combat tiers, damage references and Spirit timings are getters over existing data, rather than independent copies. Signature ownership derives from LOADOUTS and CHARACTER_IDS. Shared Lore ownership is documented for the two actual Lore encounters.

Primary/secondary families and catalogue tags are new classification metadata. They do not replace the existing per-field or per-cast tags consumed by combat. This distinction matters: a catalogue tag is not an automatic counter ability. `codexTier` is independent of existing numeric `tier` (0 starter, 1 advanced, 2 Ultimate). All current entries are known and discovered; no unlock requirements or storage writes were added.

Current field graph records adapt ASTRA_INTERACTIONS and reuse the existing pure `astraCounterRule` query at startup to resolve valid source/target/cast-mode combinations. Current graph projections do not suggest matchups between incompatible Signature and Lore modes. Projectile and Ultimate-context records describe existing handlers. Proposed rules are explicitly PLANNED and are never read by the combat loop.

Outgoing and incoming maps, tag/family indexes and per-Astra recipes are precomputed once. Reciprocal relationships are derived from the same directed graph. No per-frame Codex processing runs. The production query helpers are `getAstraDisplayName`, `getAstraTags`, `getAstraCounters`, `getAstraCounteredBy`, and `getAstraTransformRecipes`. Results retain context, availability, status, strength and notes; future combat callers must not apply PLANNED records without an approved implementation.

## Full registered IDs, owner, family and tag mappings

| Stable ID | Existing display name | Owner(s) | Family / secondary | Tags | Catalogue tier | Current combat class |
|---|---|---|---|---|---|---|
| `gandiva_gale` | Gandiva Gale | arjuna | ELEMENTAL / TACTICAL | WIND | TIER_1 | Starter |
| `indra_storm` | Aindrastra | arjuna | ELEMENTAL / DIVINE | THUNDER, STORM | TIER_2 | Advanced |
| `pashupata` | Pashupata Radiance | arjuna | CATACLYSMIC / DIVINE | DIVINE, CATACLYSMIC, RADIANCE | CATACLYSMIC | Ultimate |
| `solar_shaft` | Surya Shaft | karna | ELEMENTAL / DIVINE | RADIANCE, FIRE | TIER_1 | Starter |
| `naga` | Nagastra | karna | BINDING / ELEMENTAL | SERPENT, BINDING | TIER_2 | Advanced |
| `shakti` | Vasavi Shakti | karna | DIVINE / CATACLYSMIC | DIVINE, RADIANCE, CATACLYSMIC | DIVINE | Ultimate |
| `ganga` | Ganga’s Guard | bhishma | BARRIER / DIVINE | WATER, BARRIER, DIVINE | TIER_1 | Starter |
| `kuru_storm` | Kuru Thunder | bhishma | ELEMENTAL | THUNDER, STORM | TIER_2 | Advanced |
| `prabhasa` | Prabhasa Radiance | bhishma | DIVINE / CATACLYSMIC | DIVINE, RADIANCE, CATACLYSMIC | DIVINE | Ultimate |
| `agni` | Agneya | drona | ELEMENTAL | FIRE | TIER_2 | Starter |
| `brahma` | Brahmastra | drona | CATACLYSMIC / DIVINE | DIVINE, CATACLYSMIC | CATACLYSMIC | Advanced |
| `acharya` | Acharya’s Judgment | drona | TACTICAL / DIVINE | TACTICAL, DIVINE, BARRIER | DIVINE | Ultimate |
| `chakra` | Chakra Volley | abhimanyu | TACTICAL / ELEMENTAL | WIND, STORM, TACTICAL | TIER_1 | Starter |
| `raudh` | Rudra Rush | abhimanyu | ELEMENTAL / TACTICAL | FIRE | TIER_2 | Advanced |
| `saubhadra` | Subhadra Tempest | abhimanyu | CATACLYSMIC / ELEMENTAL | WIND, THUNDER, STORM, CATACLYSMIC | DIVINE | Ultimate |
| `raudra` | Rudra Ember | ashwatthama | ELEMENTAL / BINDING | FIRE, CURSE | TIER_1 | Starter |
| `narayana` | Narayana Burst | ashwatthama | DIVINE / TACTICAL | DIVINE, TACTICAL | TIER_2 | Advanced |
| `brahmashira` | Brahmashira | ashwatthama | CATACLYSMIC / DIVINE | DIVINE, CATACLYSMIC, CURSE | CATACLYSMIC | Ultimate |
| `vrishni` | Vrishni Wind | satyaki | ELEMENTAL / TACTICAL | WIND | TIER_1 | Starter |
| `satyaki_tide` | Varuna’s Tide | satyaki | ELEMENTAL / BARRIER | WATER | TIER_2 | Advanced |
| `yuyudhana` | Yuyudhana Storm | satyaki | CATACLYSMIC / ELEMENTAL | THUNDER, WATER, STORM, CATACLYSMIC | DIVINE | Ultimate |
| `forest_fang` | Forest Fang | ekalavya | TACTICAL / BINDING | FOREST, SERPENT, TACTICAL | TIER_1 | Starter |
| `nishada` | Nishada Flame | ekalavya | ELEMENTAL | FIRE, FOREST | TIER_2 | Advanced |
| `aranya` | Aranya Cyclone | ekalavya | CATACLYSMIC / ELEMENTAL | WIND, FOREST, STORM, CATACLYSMIC | DIVINE | Ultimate |
| `lore_agni` | Agneya | arjuna, ashwatthama | ELEMENTAL | FIRE | TIER_1 | Starter · Lore |
| `lore_varuna` | Varunastra | arjuna, karna | ELEMENTAL / BARRIER | WATER | TIER_1 | Starter · Lore |
| `lore_vayu` | Vayavyastra | arjuna | ELEMENTAL | WIND | TIER_1 | Starter · Lore |
| `lore_aindra` | Aindra Barrage | arjuna | ELEMENTAL / DIVINE | THUNDER, STORM | TIER_2 | Advanced · Lore |
| `lore_bhargava` | Bhargava Barrage | karna | DIVINE / TACTICAL | DIVINE, RADIANCE, TACTICAL | TIER_2 | Advanced · Lore |
| `lore_brahma` | Brahmastra | arjuna, karna | CATACLYSMIC / DIVINE | DIVINE, CATACLYSMIC | CATACLYSMIC | Ultimate · Lore |
| `lore_naga` | Ashvasena’s Arrow | karna | BINDING / DIVINE | SERPENT, BINDING, DIVINE | DIVINE | Ultimate · Lore |
| `lore_narayana` | Narayanastra | ashwatthama | DIVINE / TACTICAL | DIVINE, TACTICAL | DIVINE | Ultimate · Lore |

## Counter relationships

Status CURRENT describes existing conditional behaviour; PLANNED is catalogue-only. Field records list exact eligible cast modes per matchup in the UI. The graph does not promise that a counter wins regardless of aim, timing, placement, ammo or puzzle success.

| Rule ID | Source | Target | Type | Status / context | Notes |
|---|---|---|---|---|---|
| `field_fire_water` | WATER | FIRE | TRANSFORM | CURRENT / FIELD | Transforms a field into Steam Cloud. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_water_thunder` | THUNDER | WATER | TRANSFORM | CURRENT / FIELD | Transforms a field into Electrified Water. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_fire_wind` | WIND | FIRE | TRANSFORM | CURRENT / FIELD | Transforms a field into Ember Storm. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_water_wind` | WIND | WATER | TRANSFORM | CURRENT / FIELD | Transforms a field into Dispersed Mist. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_serpent_divine` | DIVINE | SERPENT | CANCEL | CURRENT / FIELD | Removes the matching field. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_serpent_wind` | WIND | SERPENT | SHORTEN_DURATION | CURRENT / FIELD | Reduces remaining field duration. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_storm_wind` | WIND | STORM | WEAKEN | CURRENT / FIELD | Reduces field damage, duration and drift. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_storm_barrier` | BARRIER | STORM | SHORTEN_DURATION | CURRENT / FIELD | Reduces remaining field duration. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_curse_divine` | DIVINE | CURSE | CANCEL | CURRENT / FIELD | Removes the matching field. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_forest_divine` | DIVINE | FOREST | DISPLACE | CURRENT / FIELD | Moves the matching field away. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_radiance_barrier` | BARRIER | RADIANCE | WEAKEN | CURRENT / FIELD | Reduces field damage, duration and drift. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `field_divine_divine` | DIVINE | DIVINE | WEAKEN | CURRENT / FIELD | Reduces field damage, duration and drift. Only listed cast modes qualify; ordinary counters do not affect Ultimate fields. |
| `projectile_water_fire` | WATER | FIRE | HARD_COUNTER | CURRENT / PROJECTILE | When non-Ultimate water and fire projectiles clash, water extinguishes fire and leaves steam. Both projectiles are consumed; this is not an automatic win against every fire cast. |
| `projectile_wind_water` | WIND | WATER | CANCEL | CURRENT / PROJECTILE | An in-flight wind/water clash disperses water clouds. Field contact instead uses the Mist recipe. |
| `lore_bhargava_aindra` | lore_bhargava | lore_aindra | HARD_COUNTER | CURRENT / PROJECTILE | On collision, Bhargava also clears nearby Lore Aindra barrage arrows. |
| `ultimate_clash` | Eligible Ultimate | Ultimate | CANCEL | CURRENT / ULTIMATE | Only an eligible reserved Ultimate, selected in time and followed by a successful rune puzzle, resolves the existing Ultimate clash. Costs, ammo and character restrictions still apply; not an unconditional counter. |
| `garuda_serpent` | GARUDA | SERPENT | HARD_COUNTER | PLANNED / DESIGN | Proposed Garuda-type hard counter. No current playable Astra has GARUDA. This does not add a weapon or change today’s serpent counters; Ultimate variants retain Ultimate-only eligibility. |
| `divine_barrier` | DIVINE + Ultimate eligibility | BARRIER | SOFT_COUNTER | PLANNED / DESIGN | Proposed high-tier divine barrier suppression. Exact eligible Astras and degree of suppression require design approval; not active. |
| `cataclysmic_barrier` | CATACLYSMIC + Ultimate eligibility | BARRIER | WEAKEN | PLANNED / DESIGN | Proposed high-tier barrier weakening. Not active; this classification cannot bypass current Ultimate rules. |
| `cataclysmic_requirement` | DIVINE + Ultimate eligibility | CATACLYSMIC | HARD_COUNTER | PLANNED / DESIGN | Proposed high-tier counter eligibility for Cataclysmic catalogue entries. Ordinary elemental tags alone would not qualify. Drona’s current Brahmastra is still advanced, so this restriction is not live. |
| `cataclysmic_peer_requirement` | CATACLYSMIC + Ultimate eligibility | CATACLYSMIC | HARD_COUNTER | PLANNED / DESIGN | Proposed high-tier Cataclysmic peer counter. Exact eligibility is not active; present Ultimate clashes still require the existing puzzle. |
| `aranya_displace` | aranya | STORM | DISPLACE | PLANNED / DESIGN | Proposed cyclone displacement of ordinary storm fields. Current Aranya Ultimate does not perform this counter operation. |
| `fire_forest` | FIRE | FOREST | WEAKEN | PLANNED / DESIGN | Fire versus forest interaction is reserved for future balancing; duration, spread and eligible fields are undecided. |

Specific HARD_COUNTER reverse mappings, like Water → Fire, are validated in both directions. Nagastra includes a derived GARUDA-type planned counter even though no current Garuda Astra exists. `NO_SPECIAL_INTERACTION` is a supported schema value, but absence of a relationship does not mean invulnerability; it means no specific relationship is registered for that context.

## Transform recipes

| Recipe ID | Ingredients (field + counter) | Existing result | Status |
|---|---|---|---|
| `recipe_steam` | FIRE + WATER | Steam Cloud (`steam`) | CURRENT |
| `recipe_electric` | WATER + THUNDER | Electrified Water (`electric`) | CURRENT |
| `recipe_embers` | FIRE + WIND | Ember Storm (`embers`) | CURRENT |
| `recipe_mist` | WATER + WIND | Dispersed Mist (`mist`) | CURRENT |

Recipes reference the existing ASTRA_FIELDS outcomes. No fields or transformation responses were added or altered.

## Codex UI and filters

Access: **How to Play / Learn Controls → Astra Arsenal**. The screen reuses the existing help dialog. Default scope is all 24 signature Astras; additional scopes show the eight Lore variants or all 32 entries. Warrior filters use all eight existing characters, including shared Lore ownership. Family filters match primary or secondary families. Empty combinations have an explicit empty state.

The left list scrolls independently. The detail panel shows the existing effect illustration, name, owner, family, catalogue and current combat class, tags, supported cast modes, gameplay notes, optional damage references, counters, countered-by information, transformation recipes and adaptation text. Counter names link directly to their detail records. Proposed interactions are collapsed under Design preview and labelled inactive. Existing effect atlases are reused; a coloured glyph remains available if an image is missing. No new image assets were required.

Desktop uses a side list and split counter columns. Narrower layouts stack counter sections; mobile landscape keeps a compact list and independently scrolling detail panel. Tappable controls are at least 44 px; descriptions use 16 px, secondary labels 14 px; long text wraps. Family tabs intentionally scroll horizontally within their own strip. Portrait and very short/zoomed viewports have fallbacks. Closed help dialogs remain hidden even after browsing Arsenal.

## Save / migration and networking

All 32 existing IDs and their corrected runtime names are retained. In particular `raudh`, `raudra`, `saubhadra`, `agni`, and `nishada` were not renamed. No save migration is required. The Codex stores no progression and adds no network messages or snapshot fields. Combat protocol stays 29 because the deterministic combat simulation is unchanged. Release 30 is a UI/data publication with a refreshed service-worker cache.

## Debug validation

ASTRA_DEV=1 adds ASTRA DATABASE to the existing lab: select an Astra; inspect IDs, ownership, family, tags, catalogue/combat tiers, damage references, counters, countered-by and recipes; validate schema and icon loading; export a readable console table. These controls do not start or modify a match. Production builds exclude the development panels.

Validation checks duplicate/missing IDs, full registry coverage, missing/invalid ownership and signature-owner mismatch, families, tags, names, relationship targets/types/status/strength, unsafe or missing icon paths, recipe references/outcomes, self-counter declarations and cyclic rule dependencies. Reciprocal combat counters are legitimate and not rejected merely for being reciprocal. Every outgoing edge is checked against its derived incoming edge.

## Test results

- PASS: 24 signature + 8 Lore coverage; all current names/owners; required tags and families; filters and empty results; dynamic damage/charge references.
- PASS: hard-counter reverse edges; valid current field/cast mappings; current-versus-proposed separation; Garuda placeholder; all four recipes; Ultimate and Lore exclusions.
- PASS: invalid-data fixtures for duplicate IDs, missing owners/names, bad families/tags/targets, missing assets, self-edges, dependency cycles and omitted registry entries.
- PASS: UI list/filter/detail/counter navigation; help return; fallback and successful image loading; unique DOM IDs/script order; closed-dialog guard; no simulation writes while browsing.
- PASS: automated responsive CSS constraints for 1440×900, 1024×768, 844×390, 667×375 and 568×320; small-screen scrolling and touch-size rules. This is not browser-rendered visual verification.
- PASS: unchanged existing Astra definitions, phases, fields, interactions, loadouts and snapshots after registry extension.
- PASS: 300-frame baseline-versus-Codex full-state hash parity through aiming, normal/Spirit releases, fields, queries and movement.
- PASS: existing 96-cast Astra system, control/field transformations and AI response; Ultimate gate/puzzle/cutscene rules; release-29 direct hit/equipment checks; 540-frame delayed/reordered rollback and peer handshake; tap-only character selection and home navigation.
- PASS: development build syntax and production exclusion; production asset build and whitespace checks.

## Known gaps and remaining design decisions

- No current playable Garuda-type Astra. Its serpent hard counter is metadata only.
- Drona’s Brahmastra is CATACLYSMIC in the catalogue but remains an advanced non-Ultimate in combat. Applying high-tier-only protection would be a separate combat design decision.
- Exact high-tier divine/cataclysmic barrier suppression, Aranya field displacement, and fire/forest spread remain proposed; eligible casts, magnitude and duration need later balancing.
- Curse cleansing is currently a DIVINE-versus-CURSE field cancellation; the catalogue does not add a general debuff cleanse or allow it to stop cursed Brahmashira.
- Dedicated individual weapon-card illustrations are not present; the Codex uses the game’s existing effect art and glyphs.
- Physical desktop/mobile browser rendering and Android touch validation remain outstanding. The managed preview does not support this project’s static/Worker setup, and no alternate browser-control path was used. Automated DOM/CSS checks cannot establish pixel-perfect visual acceptance.

**Step 2 was not started.** No Counter Astra loadout, recognition, stability, discovery progression or new combat behaviour was implemented.
