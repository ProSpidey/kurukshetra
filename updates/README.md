# Game update imports

These directories preserve the supplied files while the complete runnable source
is being recovered. The repository's original root game remains unchanged.

| Import | Status |
| --- | --- |
| [v64 split archive](v64/README.md) | Both parts reassembled and CRC-verified; 144 files recovered, but the archive omits `web/`, `server/`, and `scripts/`. |
| [Step 1.5](step1.5/README.md) | 40 overlay files preserved with checksums. |
| [v66](v66/README.md) | 26 overlay files preserved with checksums. |

Combining these imports still leaves 93 directly referenced web resources missing
and fails the build at `scripts/build-referee.mjs`. The standalone v66 emote test
passes. Full gameplay, backend operation, and publication remain blocked.

The battlefield/sticker update and deployment candidate have not been downloaded.
The latest recovery details and missing-resource inventory are in `v64/`.
