# v66 source overlay import — incomplete candidate

The 26 files in `source-overlay/` were extracted unchanged from the user-supplied
`Kurukshetra-v66-Source-Overlay.zip`. `source-overlay-checksums.json` records the
archive SHA-256 and every extracted file checksum. The ZIP is an incremental
overlay, not a complete source tree or deployable game.

The existing root game remains the runnable development version. Do not replace
its index or service worker with this overlay alone: 99 of the 113 local resources
directly referenced by the overlay HTML are absent, including `web/game.js`.
The existing repository does not contain the required newer baseline.

## Validation performed on 2026-10-21

From this directory's `source-overlay/` subdirectory:

- `node scripts/test-emote-controller.cjs`: passed.
- `node scripts/test-battlefield-style.cjs`: failed because stage image assets are absent.
- `node scripts/test-cosmetics.mjs`: could not initialize because `scripts/test-services.mjs` is absent; other backend modules are also absent.

The included upstream release notes describe earlier checks in another environment;
they do not establish that this imported subset builds or runs here.

## Inputs still needed

These uploads could not be transferred because each exceeds the environment's
32 MiB per-upload download limit, and neither has been imported or validated:

- `Kurukshetra-v66-Sites-Deployment-Candidate.tar`
- `Kurukshetra Astra Warfare Backups-20261019T193322Z-1-001.zip`

Obtain the complete source/assets baseline from an accessible download link or
smaller archive parts. Inspect its contents before selecting the matching source
version, then compare and apply this overlay. Restore the baseline build tooling
and run its build, tests, asset checks, and browser gameplay checks before changing
the runnable root game or claiming v66 is ready. Revisit environment startup
instructions once the full application's workflow is known.

The linked Sites project is `appgprj_6ab42d4132f48191a8b8e7718ac80f9f`.
No Sites project access/deployment tool is available in this session. No live Site
was read, modified, or deployed as part of this import.
