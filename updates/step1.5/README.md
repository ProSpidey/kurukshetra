# Step 1.5 source overlay import

The 40 files in `source-overlay/` are preserved unchanged from
`Kurukshetra-Step1.5-Update.zip`. The adjacent checksum manifest records the
original archive SHA-256 and every extracted file checksum. This is an update
for the newer v64 baseline, not a complete game or an update compatible with
the repository's older root game by itself.

## Validation performed on 2026-10-23

- Step 1.5 `node scripts/test-emote-controller.cjs`: passed.
- Combining Step 1.5 followed by the v66 overlay in a separate staging folder
  produced 56 files, with v66 overriding 10 shared paths.
- Combined `node scripts/test-emote-controller.cjs`: passed.
- `node --check` passed for all 30 combined JavaScript files.
- Combined `node scripts/build.mjs`: failed at import because
  `scripts/build-referee.mjs` is absent. The preview server, service test fixture,
  hosting configuration, arsenal, rollback and Fate assets are also absent.
- The combined candidate was not served or deployed; no v66 gameplay readiness
  is claimed. The previously working root game remains unchanged.

## Remaining inputs

The following newly supplied uploads each exceeded the environment's 32 MiB
per-upload transfer limit and could not be read, imported or validated:

- `Kurukshetra_Astra_Warfare_v64.zip`
- `Kurukshetra-Battlefields-Stickers-Update.zip`
- `Kurukshetra-v66-Sites-Deployment-Candidate.tar`

Supply accessible download links or split archive parts no larger than 30 MiB.
Preserve every part and its original filename so archives can be reassembled.
Start with the full v64 source. Inspect the battlefield update and candidate
before deciding final overlay order; retain the newer v66 versions where intended.
Then install from the full lockfile, build, validate services/assets and browser
play, and update the environment startup instructions for the complete game.

The reports shipped inside the archive record prior work elsewhere. They do not
represent tests or deployments performed in this environment.
