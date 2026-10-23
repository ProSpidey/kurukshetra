# Passive films and Arcade finale

Imported the six named clips without trimming from Passiveandendingvideos.zip into web/cinematics/fates, plus the complete 18.333-second krishna.mp4 as web/cinematics/arcade-ending.mp4. The seven videos were web-encoded as 720p H.264/AAC with fast-start metadata to fit the hosting bundle limit, retaining complete durations. Posters extracted from those same videos prevent an empty black loading frame.

Event mappings: Karna KAVACHA (3.416667s), Arjuna GUIDANCE / Krishna Intervention (2.583333s), Abhimanyu LAST_WARRIOR (3s), Ashwatthama SHATTER (3.125s), Bhishma DEAD (6.625s), Drona DEAD (8s). The repeated Arjuna entry in the request uses the single supplied Arjuna clip. Abhimanyu's supplied wheel scene is used at Last Warrior activation, not repeated at each weapon change.

Authoritative event metadata schedules serialized cut windows in Fate state. Combat, projectiles, cooldowns, passive timers and attacks are held during activation playback. Both peers and server referee use the same authored durations (protocol 47). Presentation starts from confirmed events, seeks past already elapsed time after late confirmation, and suppresses stale/replayed cuts. Media decode/ended callbacks never control online match outcomes. Files are preloaded for selected warriors; errors fall back to the poster until the bounded window ends.

Event clips are muted so existing English/Hindi character dialogue and battle music continue without competing embedded audio. Selected-language subtitles remain above the video. Winner dialogue and victory presentation wait until the death clip ends, including muted/no-voice sessions. Match/round resets clean up playback. Pause/tab hiding pauses media, with a Resume control.

Karna's persistent Kavacha protection no longer replaces idle/aim/release sprites after the brief activation pose. Protection durability and enemy-hit break rules are unchanged.

The final Arcade victory displays the winner and dialogue first, then the complete Krishna finale with its audio following sound settings. The rematch action is disabled for this transition. Only the finale's media ended event returns to home; a failed load offers Return to menu. Earlier Arcade wins and defeats do not trigger it.

Validation: clip metadata/codec inspection, six event mappings, simulation hold/resume, serialized windows, rollback restore, stale-event suppression, Karna sprite fallback, finale ended-to-home lifecycle, defeat/victory ordering, full server-replayed best-of-three, and network tests. Physical Android and browser playback QA remain unverified in this environment.
