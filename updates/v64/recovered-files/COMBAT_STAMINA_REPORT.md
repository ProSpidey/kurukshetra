# Combat stamina and bilingual presentation — milestone 35

- Bowstring break: 6 base damage through the normal damage/passive pipeline, once per successful break. Existing break/recovery immunity remains.
- Stamina: 100 maximum. Quick normal arrows cost 0, Spirit arrows 28, starter Astras 25, advanced Astras 45, Ultimates 65, equipped Counter Astras 20. Existing Resolve, ammo, unlocks and character restrictions still apply.
- Holding a charge drains 8 stamina/second; automatic sky fire drains 18/second. A normal arrow blocked by a charging shield removes another 9. Insufficient charge reserve ends the shield with a release latch. This makes quick normal pressure useful.
- Regeneration: 12/second after 1.2 seconds without spending. Normal arrows do not delay regeneration. Rage fills stamina once per round; it cannot refill every tick. Defensive Ultimate counters retain their existing Rage exception and now cost 65 stamina.
- Both health HUDs show stamina. Tier costs appear in skill descriptions and stamina lock messages.
- A potentially lethal approaching arrow receives one bounded 0.65-second, 30%-speed beat per defender per round. Prediction does not force a kill: shields/passives may save the warrior. Simulation timing and all resource/finisher state are rollback deterministic.
- Supplied astracollide.mp4 plays on confirmed Ultimate collision/direct-hit events; a fixed 4.55-second simulation impact window is independent of decoder success. Muted video preserves dialogue/battle audio and allows mobile inline autoplay. Reduced motion uses the existing canvas fallback. Cleanup covers expiry, home, pause, errors and corrected/expired events.
- Settings adds English/Hindi voices. All 173 dialogue entries have matched Hindi recordings, including corrected Abhimanyu counter and Karna Naga filename typos. Existing English subtitles remain. Audio buffers are language keyed; live language changes stop the old queue. Language is local presentation only, never a simulation input.
- Online protocol/cache version 35 prevents mixed simulation versions.

Validation: stamina resource/finisher tests; mirrored physical hit/equipment tests; Astra stability and partial release tests; 96 cast matrix; character/passive balance; charging/sky fire; Hindi mapping/media lifecycle; voice lifecycle/Ultimate voices; room signaling; Astra, Counter and Stability rollback suites at 50/100/150/250ms with both roles, duplicate/reordered packets and checkpoint repair. Production build passed.

Limit: browser/device QA unavailable in this run. Real Android HUD and MP4 autoplay playback remain to be checked on device. Balance figures are initial tuning, not a claim of equal character win rates.
