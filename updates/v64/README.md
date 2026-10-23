# Recovered v64 split archive — incomplete source

Both supplied archive parts downloaded successfully. `zip -s 0` reassembled them
without repair, and every ZIP entry passed its CRC integrity check. The archive
contains 166 entries: 144 files and 22 directories. All 144 files are preserved
unchanged in `recovered-files/`; `checksums.json` records both input parts and
each extracted file.

## What is present

Documentation and verification images, Android Java/Gradle sources, database
schema and migrations, package manifests, some development helpers, and the
`.openai/hosting.json` configuration for the requested Sites project.

## What is missing

The archive itself contains no `web/`, `server/`, or `scripts/` directory.
This is a content omission, not a failure to join the two archive parts.
Its own README describes these directories as part of the source distribution.

Combining these files, the Step 1.5 overlay, and finally the v66 overlay still
leaves 93 of 113 direct local HTML resources missing; see
`missing-web-resources.json`. Missing build/runtime prerequisites include:

- `scripts/build-referee.mjs`, `scripts/preview-server.mjs`, `scripts/test-services.mjs`
- `web/arsenal.js`, `web/rollback.js`, `web/fate-assets.js`
- baseline server services and the bulk of game art, animation, and audio assets

The standalone v66 emote test passes in the assembled candidate. The build fails
because `scripts/build-referee.mjs` is absent. No runnable updated game or
production deployment is claimed. Historical test reports in recovered files
refer to work elsewhere and do not validate this incomplete candidate.

## Publication status

The requested project is `appgprj_6ab42d4132f48191a8b8e7718ac80f9f`.
No callable Sites connector is available in this session. A read of the existing
site URL from the recovered README was rejected by the network proxy with
HTTP 403 while opening the tunnel; this is not evidence of the site's own status.
Website Deploy Toolkit targets Simple Host, which cannot execute the existing
Cloudflare Worker / D1 multiplayer backend. No replacement site was created.

Supply the omitted source directories and their assets as an accessible download
or archive parts no larger than 30 MiB. The battlefield/sticker update and full
deployment candidate remain untransferred. Complete and verify the source before
publishing through the original Sites project. The old root game is unchanged.
