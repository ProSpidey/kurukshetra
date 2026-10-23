# Entry, asset loading, matchmaking and Firebase authentication

- Region selection and Start Game appear before the existing animated main menu. Regions are matchmaking preferences on the global service, not separate physical game servers. Preference is stored on the device and sent with queue entry.
- Back keeps matchmaking running. A persistent banner shows search time, accepts/declines found matches, and offers explicit cancellation. It moves into open native dialogs so it remains visible above their top layer.
- Warrior collection artwork is loaded before selection becomes interactive, with progress, retry and cancellation. Selection artwork fills the panel and the VS background fills letterboxed space. Existing battle asset gates remain intact.
- Reconnect works before loadout completion, invalidates stale signaling epochs, resets partial loadouts together, and preserves the initial loading heartbeat. Temporary signaling errors retry; a sustained transport disconnect starts recovery. TURN is still required for networks that cannot establish a direct WebRTC connection; no relay credentials were supplied in this task.
- Visible ChatGPT authentication was replaced with Google and email/password forms, registration, email verification and password reset. Existing sessions retain their profiles and may link Google/email. The Worker verifies Firebase RS256 signatures and project/issuer/expiry/provider/verified-email claims before issuing an HttpOnly session. The Firebase web configuration is public; no service-account secret is shipped.

## Firebase console setup still required
Project: `kurukshetra-astra-warfare`. The console was inspected and Authentication still shows **Get started**.
1. Initialize Authentication, enable Google (choose a support email), and enable Email/Password.
2. Add `kurukshetra-astra-warfare.spidey245.chatgpt.site` under Authentication → Settings → Authorized domains.
3. Test Google popup sign-in and a verified email account on the published game. The integration uses the project's already-registered web app.

No Firebase console settings were modified during this release; these security-sensitive changes require action-time confirmation. Guest/Offline play remain available.

## Verification
Passing automated checks cover real SQLite service routes, signed Firebase tokens and forged-token rejection, progress linking/collisions, initial reconnect and stale SDP filtering, two-peer warrior/VS handshake, complete server-replayed matches, persistent queue controls, and loading success/retry/cancellation. Browser/device visual QA and live Firebase sign-in were not completed. Existing combat balance and deterministic simulation were not changed.
