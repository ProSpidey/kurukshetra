> Superseded by VOICE_RELEASE_17.md: the complete user-supplied 173-file pack has now been imported. The recovery blockers below describe the earlier checkpoint.

# ElevenLabs replacement — unpublished recovery checkpoint

The public release remains FATE VOICES 16. This checkpoint is incomplete and must not be deployed as a completed voice replacement.

## Recovered and prepared

- Restored the published source after workspace maintenance removed the unfinished checkout.
- Recovered five original ElevenLabs MP3s plus generation/voice metadata, without regenerating them. They decode to non-silent PCM.
- Existing ElevenLabs flow: https://elevenlabs.io/app/flows/FQtyTkfHmqfEA8QEyrih
- The flow reports 113 nodes: 108 completed, five failed. Full node/state inventory is in `production/elevenlabs-recovery.json`.
- Prepared 173 recording requests: 156 replacement dialogue lines plus 17 equipped-Astra name calls across Arcade and Lore.
- Nine distinct ElevenLabs voices are recorded in `production/elevenlabs-cast.json`.
- Restored host-timed pre-release callouts. Attackers announce the selected Astra; successful puzzle defenders announce their selected counter. The host allows the clip duration before release. Failure retains the defender's weapon and does not announce a counter. Audio loading/muting does not decide combat outcomes.
- Lore Narayanastra has a data-driven invocation interval and its state is included in snapshots.
- Voice playback now preloads/pins equipped Ultimate callouts and preserves interrupted speech across a pause.

## Blockers

A retrieved failed generation reports: free-tier access was disabled for unusual activity and a paid subscription is required to continue. The current estimate endpoint returned a price, but estimates do not prove generation access has been restored. No replacement generation was submitted during this recovery turn.

The connector lists completed node IDs but cannot return their session IDs or downloadable audio by node ID. Local job references were removed during maintenance. Five recordings had surviving session references in the conversation and were downloaded. The remaining existing completed recordings should be recovered through the ElevenLabs flow interface or exported by the user, rather than generated and charged again. The additional-tool inquiry confirmed there is no such read-only recovery endpoint exposed by this connector.

Recover the completed audio, resolve the account restriction, then generate only the genuinely missing/failed lines. Do not rerun all 173 requests. Match audio to request IDs using the original prompt and voice ID. Save original MP3s and metadata (`generation_id`, `voice_id`, `model`, `prompt`) under `production/elevenlabs-source/`.

## Safe continuation

`production/import-elevenlabs.py` refuses to change public assets unless all 173 source recordings and metadata exist. It then normalizes without pitch/speed manipulation and updates exact durations, subtitles and callout bindings. The pending manifest is test input only; no missing audio paths are activated in the shipped dialogue database.

After complete import: bump client/server protocol and offline cache version together, run the asset decode, voice runtime, Ultimate callout, passive/network and online API regression suites; build and publish. Check pronunciation, phone audio unlock and two-device playback manually. No physical listening or browser audiovisual QA is claimed here.

## Validation at this checkpoint

Passed: existing Ultimate combat tests, WebAudio mock playback, all-eight-character presentation smoke tests, injected-manifest exact-name/release timing/puzzle/snapshot tests, independent host/guest pairings and best-of-three tests, online rendering tests. The new callout tests verify scheduling with test metadata, not playback of unavailable recordings.

Changed runtime: `web/ultimate.js`, `web/lore.js`, `web/online.js`, `web/voice-manager.js`. New tools/data: `scripts/test-ultimate-voices.cjs`, `production/prepare-elevenlabs.cjs`, `production/import-elevenlabs.py`, pending dialogue/requests/cast/recovery/validation JSON and five recovered MP3/metadata pairs.
