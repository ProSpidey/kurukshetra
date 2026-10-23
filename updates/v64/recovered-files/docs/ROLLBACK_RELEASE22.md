# Release 22 — WebRTC and basic rollback

The 10-character room code exchanges authenticated SDP offers/answers and trickled ICE candidates through `/api/signal`. The existing room database is reused, without a schema migration. `/api/exchange` no longer accepts gameplay traffic. Signaling polling stops when the peer match starts.

A reliable, unordered RTCDataChannel carries numbered inputs and confirmed state hashes. Both devices simulate at 60 Hz, immediately applying their own inputs and predicting the opponent’s held aim/draw. One-shot actions are never repeated by prediction. The engine keeps 180 pre-frame snapshots in an array. Incorrect predictions restore the combat state and replay to the present; the canvas draws the corrected result. Prediction stops after 12 unconfirmed frames (about 200 ms), preventing an unbounded divergence during a stall.

Snapshots include projectiles, health, charge shields, sky hazards, passive character state, Ultimate puzzles, round progress, RNG and simulation timers. A shared seed and canonical player order make random outcomes repeatable. Audio and dialogue events are committed only once remote input is confirmed. Existing voice files are unchanged. Rendering rate and reduced-motion preferences do not change simulation results.

The room creator still coordinates the handshake and next-round request, but does not own the combat simulation. Confirmed hash disagreement stops the duel. Closing a peer connection requires a new room; mid-match reconnection and state resynchronization are not implemented. This is friendly-match netcode, not an authoritative anti-cheat system.

## Connectivity

Default ICE configuration uses public Google STUN. Restrictive NATs/firewalls may prevent direct connections. Optional Worker environment variable `WEBRTC_ICE_SERVERS` accepts a JSON array of standard RTCIceServer objects (up to eight entries), including TURN URLs, username and credential. No TURN credentials are configured in this release. ICE configuration is returned only to authenticated room participants; production TURN credentials should be short-lived.

## Verification

- `node scripts/test-rollback.cjs`: prediction correction, reordered inputs, duplicate handling, full combat convergence, seeded Ultimate puzzles, mocked peer handshake and channel traffic, different display rates, confirmed hashes and disconnect handling.
- `node scripts/test-online.mjs`: actual Worker signaling routes against SQLite, room/token isolation, SDP seat restrictions, ICE delivery, nonce deduplication, cursor behavior and legacy protocol rejection.
- Existing charge-feel, game, Abhimanyu, voice-runtime and Ultimate voice suites passed.

The channel integration test uses mock DataChannels. Actual browser-to-browser WebRTC establishment, Android device performance and cross-network NAT traversal still need real-device verification. No claim of universal connectivity or zero latency is made.
