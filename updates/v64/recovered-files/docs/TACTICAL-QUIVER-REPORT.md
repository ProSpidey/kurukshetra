# Tactical Quiver milestone — implementation report

Implemented in the existing Kurukshetra Astra Warfare combat engine. The uploaded specification is retained as `docs/tactical-quiver-brief.txt`. All ten supplied PNGs are used unchanged; Rapid Volley reuses Gopuccha artwork as requested by the asset manifest.

## 1. Files inspected

Audited `web/game.js` (projectile array, release, aim, collision, AI, update and rendering); `lore.js` (swept hitboxes, equipment, chariot movement); `fate-config.js`, `fate-core.js`, `fate-characters.js`, `fate-game.js` (base stats, perfect release, armor, survival passives); `combat-stamina.js`; `astra-config.js`, `astra-fields.js`, `astra-stability.js`, `astra-presentation.js`, `counter-config.js`; `battle-ui.js`, `counter-ui.js`, `matchup.js`, `matchup-online.js`; `online.js`, `rtc-net.js`, `rollback.js`, `rollback-game.js`, `service-session.js`; server sessions/referee, database schema/migrations, build scripts, and existing combat/network/UI fixtures. The engine uses bounded projectile arrays, not a separate pooled class. No parallel projectile or physics engine was introduced.

## 2. Files changed

New core: `web/quiver-config.js`, `web/quiver.js`, `web/quiver-ui.js`, `web/quiver.css`, and `web/quiver-art/`.

Existing combat integration: `game.js`, `lore.js`, `fate-core.js`, `fate-config.js`, `combat-stamina.js`, `astra-stability.js`, `astra-presentation.js`, `counter-config.js`.

Flow/transport: `index.html`, `counter-ui.js`, `matchup.js`, `matchup-online.js`, `online.js`, `rtc-net.js`, `rollback-game.js`, `service-session.js`.

Server/storage/build: `server/services/sessions.js`, `server/index.js`, generated `server/referee.js` and `server/quiver-config.js`, `db/schema.ts`, migration `drizzle/0003_tactical_quiver.sql` and journal, `scripts/build-referee.mjs`, `scripts/build.mjs`, `scripts/build-sw.mjs`, generated `web/sw.js`.

Developer tools: `dev/quiver-debug.js`. Tests: four new `test-quiver*` suites, existing shared runtime fixtures and referee/recovery/direct-hit assertions. Documentation: this report, the uploaded brief and asset README.

## 3. Arrow data architecture

`PhysicalArrowDefinition` is the central immutable definition map. It includes construction/arrowhead classes, damage, velocity, draw, accuracy, gravity, penetration, stagger, critical/headshot factors, equipment/bow/chariot/harness factors, Stability/shield pressure, bleed, effective range, ammunition, cooldown, eligibility, VFX/SFX and AI tags.

`ArrowProficiencyModifier` supplies small warrior modifiers. The same definitions are built into the server replay referee; the API imports generated validation from that source. Mutable state is attached to the existing players/projectiles/fires, so snapshots and rollback capture it. Anjalika remains a non-selectable lore/signature hook. Napumsaka-bana is a training construction hook, not an extra competitive option.

## 4–5. Physical and power arrows / 13. Starting balance

Values multiply existing warrior and draw-dependent damage. They are not flat HP damage. Perfect releases add 4% velocity and 5% damage; existing perfect/critical behavior is retained. Armor penetration recovers the listed fraction of Kavacha's damage reduction, not invulnerability or survival-passive immunity.

| Arrow | Damage | Flight | Draw time | Accuracy | Ammo/round | Type cooldown |
|---|---:|---:|---:|---:|---:|---:|
| Gopuccha | 100% | 100% | 100% | 100% | Unlimited | None |
| Naracha | 125% | 85% | 125% | 92% | 4 | 1.1 s |
| Shilimukha | 90% | 120% | 95% | 125% | 5 | 0.5 s |
| Ardhachandra | 80% | 95% | 100% | 100% | 4 | 0.5 s |
| Vatsadanta | 75% | 105% | 100% | 115% | 4 | 0.5 s |
| Karnika | 80% | 95% | 100% | 100% | 5 | 0.5 s |
| Vaitamhika | 95% | 130% | 70% | 120% | 4 | 0.28 s |
| Rapid Volley | 50% per arrow ×3 | 100% | 100% | 80% + spreading angles | 2 bundles | 3 s |
| Fire-Pot | 90% direct | 78% | 135% | 90% | 2 | 4 s |
| Flare | 10% | 100% | 100% | 100% | 2 | 5 s |
| Guard Arrow | 20% | 100% | 100% | 100% | 1 | 6 s |

Naracha: 65% armor penetration, 150% structural damage, 165% Stability pressure, 160% shield wear. Shilimukha: 45% penetration and an additional 1.25 headshot multiplier. Karnika: four one-damage ticks over four seconds; refreshes rather than stacks. Vaitamhika: Arjuna/Abhimanyu/Satyaki only; beyond 800 world units, 30% less damage, reduced Stability pressure and substantially increased spread.

Rapid Volley releases at 0, 0.12 and 0.24 seconds, with distinct projectile IDs and divergent angles. Fire-Pot has a 75-unit blast, 65-unit fire patch, 3-second lifetime and 0.65 damage ticks; it can evaporate a local ordinary puddle, not transform Spirit fields. Flare illuminates 230 units for four seconds without removing Mist/Steam. Guard lasts 1.2 seconds and stops physical projectiles, including Rapid; it does not stop Spirit arrows, Signature/Counter/Spirit Astras or Ultimates. Every power shot costs 10 stamina in addition to ammunition.

## 6. Character proficiencies

| Warrior | Modest bonuses |
|---|---|
| Arjuna | Shilimukha +10% accuracy/+5% velocity; Vaitamhika +10% draw/+5% accuracy; Rapid +10% accuracy |
| Karna | Naracha +10% damage/+10% equipment |
| Bhishma | Naracha +10% damage/+10% Stability; Gopuccha +5% damage; existing slow draw preserved |
| Drona | Ardhachandra +15% equipment; Vatsadanta +10% equipment/+5% accuracy |
| Abhimanyu | Vaitamhika +5% damage/+10% draw; Rapid +10% draw |
| Ashwatthama | Karnika +10% direct damage; Naracha +10% Stability |
| Satyaki | Gopuccha +8% draw; Rapid +8% accuracy; Vaitamhika +5% velocity/+5% draw |
| Ekalavya | Shilimukha +15% accuracy/+10% Stability |

## 7. Ammo and loadout

Quiver selection is integrated into Counter Astra preparation: two different eligible physical types plus one power type. Gopuccha is always added. The shared screen allows 25 seconds, provides sensible defaults, preserves private local handoff, and locks both selections before VS. AI receives warrior-specific defaults.

One compact current-arrow control opens four choices. It does not pause combat. Desktop keys are 1–4 for Player 1/your online seat and 7–0 for local Player 2. The HUD shows ammo and cooldown. Ammo is consumed only after an accepted release, once per volley bundle, and automatically selects Gopuccha on exhaustion. Round reset refills ammunition and clears every new temporary effect. Offensive Rapid/Volley entries no longer roll from the old random-tactic system, so they cannot bypass quiver ammunition; Mend/Guard tactics remain.

Overdrawn Gopuccha still becomes the existing Spirit arrow. Specialized tactical arrows remain physical at full draw and do not acquire the Spirit shield or sky-fire effect. This distinction appears in the draw indicator and Learn Controls. Tactical draw time affects existing overdraw progression and recovery; the original quick-release input remains.

## 8. Hit zones and equipment

Existing swept, mirrored HEAD/BODY/LOW hit detection remains, with 1.35/1/0.6 location damage. Added small harness, quiver and chariot-body hooks alongside the existing bow, wheel and banner zones. Tactical bow/quiver hits deal small real HP damage and apply draw penalties instead of disabling attacks. Bow cutters apply four seconds of 15% slower draw; Vatsadanta also reduces accuracy and tightens the perfect-release requirement for 3.5 seconds. Repeated penalties refresh their bounded timers. Wheel hits can jam movement for 1.2 seconds with a recovery window. Harness hits reduce movement speed by 25% for up to four seconds.

## 9. Astra Stability

The existing deduplicated Stability damage API receives arrow-specific pressure, perfect/precision modifiers and shield wear. Shilimukha gains extra pressure on head/bow/quiver contacts. Naracha is stronger against shield integrity. One ordinary body hit does not break full Stability. Existing partial release, interruption, recovery and Ultimate immunity remain intact. Each Rapid/rain child has a unique shot ID.

## 10. Chariot interaction

Each round starts with a bounded 100-point structural reserve. Naracha and Fire-Pot inflict increased structural pressure; depleted structure briefly slows movement. This is a hook, not a new component-destruction or horse-injury system. Existing Fate-based chariot sequences remain. A healthy chariot cannot be destroyed by a lucky tactical hit.

## 11. AI

AI chooses from available ammo using visible charge, distance, armor phase, damaged structure, equipment vulnerability, concealment and incoming physical arrows. It can use Naracha against charge/armor, Shilimukha at range, equipment arrows for disruption, Flare in concealment, Guard against incoming physical fire and Vaitamhika/Rapid at close range. Aim accounts for selected velocity and target height, with difficulty-dependent error. It returns to Gopuccha when appropriate and respects ammunition/cooldowns.

## 12. Multiplayer authority

Protocol 37 synchronizes the validated three-item quiver in the existing handshake. Each account's loadout is locked in D1 and retained across reconnects. Invalid types, duplicate tactical slots, ineligible Vaitamhika, extra power slots and post-lock changes are rejected.

Selection is a rollback input action. Shot ID, type, simulation timestamp, position, velocity, hit/equipment results, ammunition and temporary effects are derived in the common simulation and captured in checkpoints. Seeded randomness controls spread and criticals. Clients cannot submit authoritative damage, ammo or results; the server replays both input streams. Normal play transmits inputs, not cosmetic particle frames. No separate collision authority was added.

## 14. Tests performed

- `test-quiver.cjs`: definitions/eligibility, all eleven types, body/head/armor/chariot/bow/harness, barbed ticks, range penalty, volley IDs/spread, Fire-Pot, Flare, Guard hierarchy, Stability deduplication, ammo, reset, AI choice, clashes and snapshot restoration.
- `test-quiver-network.cjs`: every limited arrow from both seats at 100 and 300 ms simulated delay, with jitter, duplicate/reordered inputs, malicious ignored damage/ammo properties and equal confirmed hashes.
- `test-quiver-ui.cjs`: combined selection, local handoff, timeout defaults, VS/start, four-option touch selector and no pause.
- `test-quiver-server.mjs`: real SQLite migration/API validation, locked loadouts, reconnect persistence and chunked browser/referee parity with custom ammunition.
- Existing tests passed: referee parity across eight warriors; Counter flow and real RTC adapter; service handshake; service accounts/matchmaking/rewards; connection recovery; Counter mechanics; direct hits and delayed direct hits; Astra Stability; stamina; Spirit arrows.
- Production build, JavaScript syntax and Git whitespace checks passed. Uploaded textures verified RGBA with transparency; all referenced files exist.

## 15. Remaining balance / verification concerns

Live phone visual playtesting and a real two-device WebRTC match were not available in this environment. DOM-flow, simulation and delayed-network tests passed, but do not replace those checks. Starting values should be tuned from play data, especially precise bow pressure and Rapid-versus-charge interactions. The original chariot travel bounds limit how frequently Vaitamhika enters its optimal range. Full chariot destruction, armies, animal damage, new Astras/Ultimates/passives and a separate training mode remain intentionally outside scope.

`QUIVER_DEV=1 node scripts/build.mjs` adds an offline-only developer panel with arrow selection, ammo/infinite ammo, perfect release and forced head/body/bow/chariot/harness hit controls plus diagnostics. Production builds do not include this panel.
