# Matchmaking recovery and rank progression

The supplied Android recording stays on the connecting screen. Production logs showed signaling 409s and an expired room/reconnect rejection. Source inspection found no initial WebRTC timeout/fallback, unrestricted repeated reconnect attempts, a five-second epoch recovery window, and a connecting deadline which was never enforced while both clients kept polling.

Changes:
- WebRTC remains the preferred transport. After ten seconds without a channel, both peers coordinate an authenticated HTTPS packet relay through the existing room credentials and epoch. This fallback runs the existing local prediction/rollback loop; ranked outcomes remain referee-verified. It does not put one player's device in charge of gameplay. Relay transport can have higher latency than direct RTC.
- Relay batches are bounded, nonce-deduplicated, isolated by room/seat/epoch, rate-limited, and expired after 60 seconds. The transport is separate from SDP/ICE signaling. A room flag tells the other peer to use it.
- Initial connection has a 45-second watchdog, relay network failures stop after 15 seconds, peer absence ends the connection after 30 seconds, and pre-combat setup expires server-side after three minutes even while presence is polling. Pre-combat failures are void: no rank or currency penalty.
- Stale epochs synchronize without requesting another epoch change. Recovery is coalesced for 30 seconds and repeated failures are bounded. Connection errors are shown in matchmaking UI.
- Duplicate match acceptance is idempotent. Outdated clients are rejected before queue/accept/challenge instead of being assigned an incompatible match. Both players must reopen the game after an update.

Ranks (existing MMR and balances retained): Sainik below 1100; Senapati 1100; Ardharathi 1250; Rathi 1450; Ati Rathi 1700; Maharathi 2000; Atimaharathi 2350; Mahamaharathi 2750. New accounts keep their 1000 initial MMR, now Sainik with zero promotion progress. No Roman-numeral subdivisions.

Validation: SQLite-backed Worker route tests exercise real session authentication, acceptance, blocked-RTC timeout to relay, two-client selection/VS/loadout/combat handshake, identical initial rollback hashes, nonce retries, stale epochs, authorization rejection, reconnect coalescing, deadline cleanup without rewards/penalties, and every rank boundary. Direct DataChannel handshake regression passes. No physical two-phone or carrier-network test was available.
