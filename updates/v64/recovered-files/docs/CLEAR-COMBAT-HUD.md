# Mobile combat HUD and defensive-formation AI

Reference: user screenshots supplied 14 October 2026. Compact portrait/status cards sit at the top; movement, Dodge, Commands and quiver occupy the lower left; Signature Astras, Guard, Ultimate, Tactic and Counter sit at the lower right. Secondary navigation is in a Menu popover. Existing buttons and handlers are retained; Fate action IDs allow repair/dodge/melee controls to move without losing their state updates.

The canvas viewport ends above the reserved control rail, so the bottom controls cannot cover character sprites. Its aspect ratio and pointer coordinate mapping remain unchanged. Local 1v1 retains both players' controls, with a two-column arrangement and a portrait fallback. Formation hints hide while idle; bow state, reserve and Retaliation move into the top status cards. Popovers can temporarily cover part of the battlefield when explicitly opened.

Arcade AI now identifies the live, forward-facing section of enemy Rampart or Cage. It calculates a ballistic trajectory toward the structure rather than using a fixed 25-degree shot. It prefers a reachable, available non-Ultimate Signature Astra, then Naracha, then charged Gopuccha. AI charge intent maintains its lease; interrupted charges release correctly. If a charged shot cannot reach, the AI advances. Destroyed structures release control back to ordinary AI. Structures are not auto-deleted.

Verified all eight warriors versus Rampart and Cage with available signatures and with exhausted signature ammunition/Resolve. Regression tests cover formations and Drona training. Actual browser/phone visual verification was unavailable; CSS geometry and source integration were checked without claiming device testing.
