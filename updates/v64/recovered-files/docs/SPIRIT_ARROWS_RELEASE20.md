# Spirit Arrows — Release 20

Added a host-owned 3/2/1/Fight countdown each round; combat and clock start automatically after it. Pause holds the countdown. Snapshots reconstruct it; old protocol clients must update.

The supplied conch and arrow MP3s are copied without trimming or re-encoding. Conch plays once per round when loaded and audio is enabled. Bow releases play the arrow recording; rapid-fire SFX polyphony is capped without cutting active recordings. Existing 173 voice recordings are unchanged.

Full spirit charge (1.5 seconds) produces a normal-arrow variant with 1.32x speed and 1.65x base damage. Quick shots use 0.22-second minimum cooldown and lower damage. Full spirit arrows survive collisions with weak standard arrows. Ultimate priority remains unchanged.

Quick shots aimed at least 65 degrees upward produce three falling arrows at their apex, centered on the opponent's position then. Enemy rain carriers and falling rain burn when a full spirit sky shot reaches the upper sky. Normal arrows and ordinary Astras cannot cancel rain. Rain stays avoidable by movement and mitigated by existing guard/passives. Per-owner rain cap: 36 live arrows. Balance constants are in ARROW_BALANCE.

Home uses dynamic viewport height, safe-area padding, compact portrait menu and a two-column short-landscape menu. Extremely short portrait viewports retain scrolling for accessibility. Physical Android layout/audio and two-device playtesting remain necessary; no compatible browser preview was available in this run. No new APK produced.

Validation: countdown locks/pause/reset; spirit damage/speed/cooldown; rain spawning/cleansing and collision rules; Ultimate priority; seven host/guest pairings; best-of-three; snapshot recovery; Ultimate puzzle success/failure; online room API; Abhimanyu equipment progression; full voice playback/defeat-victory sequencing. Existing tests now explicitly enter combat past the new countdown; simulated aiming accounts for the changed spirit velocity.
