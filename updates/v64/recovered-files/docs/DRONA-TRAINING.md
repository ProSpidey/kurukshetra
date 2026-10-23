# Drona's Gurukul

Optional first-entry introduction after Start Game, plus Offline Battle → Drona's Training.
51 individually selectable lessons: 27 combat lessons/briefings, 16 formations generated from the actual recipe table, and eight warrior/passive briefings generated from character configuration.

Practical objectives use accepted combat actions and state: shots, impact, actual formation activation, repaired equipment, stamina recovery, guard, movement/dodge, and the real Ultimate rune puzzle. Briefings are explicitly marked reviewed, not combat-completed. Skipped chapters remain replayable. Local progress uses `astra-drona-training-v1`; blocked storage degrades to session-only progress.

Training uses the existing battlefield, input, effects, loadouts and resource rules. Drona replaces autonomous combat AI with measured lesson attacks. Starting resources and protected health are disclosed. No Arcade run or scored round is recorded. Exit restores prior warrior, quiver, counter and ruleset selections. Restart is available, including after a failed Ultimate puzzle. This mode is offline only and does not modify online/referee simulation inputs.

Teacher guidance is written dialogue with existing Drona artwork. It does not claim newly recorded tutorial voiceovers. The combat voice language setting still applies to existing battle lines.

Checks: `node scripts/test-drona-training.cjs`, bow-network and damage-ladder regression tests. Actual browser/mobile visual verification was unavailable in the managed runtime.
