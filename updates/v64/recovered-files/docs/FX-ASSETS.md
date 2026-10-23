# Cinematic FX asset delivery

Seven new transparent source sheets were generated using the built-in image-generation tool. Originals are preserved in `production/cinematic-fx-source/`. The runtime catalog contains 18 modules and 75 declared frames. Existing Spirit projectile artwork remains unchanged.

## Build and verification

Run `python scripts/pack-cinematic-fx.py`, then `python scripts/validate-cinematic-fx.py` (Pillow and NumPy required). The packer preserves originals, uses manually aligned cuts for multiplication/lightning, uses a consistent scale per animation, and creates equal-size runtime cells with at least 22% transparent margins. Ground strikes use anchor (0.5, 0.78); other modules use (0.5, 0.5). Last rows may have explicitly unused cells; these are outside frameCount and are never animation frames.

`validation-report.json` passes alpha, dimensions, declared frame occupancy and padding checks for all18 assets. This verifies runtime bounds, not artistic source completeness. Source sheets, runtime shockwave/lightning sheets and contact sheet were visually inspected. The generated shockwave outer haze approached source boundaries; radial soft alpha falloff was applied outside its intact bright ring before repacking. Other near-boundary glow was feathered. Heavy impact source frame1 had an incoming beam cut at its top; that frame is intentionally replaced by a smaller complete burst from frame2. No truncated beam ships. These corrections are reproducible in the packer. No generated source is overwritten.

## Art direction and provenance

Prompt set used: (1) ten chronological gold/blue divine shockwave frames in5×2 grid; (2) five frames of one enchanted gold arrow splitting into a five-arrow fan; (3) six small spark/dust ground impacts; (4) six medium blue/gold magical impact frames; (5) six heavy divine impact frames; (6) six vertical branching blue-white lightning strikes; (7) one isolated dark navy storm-cloud bank. All requested true transparent alpha, no words/borders/scenery, cinematic mythological rendering, isolated cells and generous margins. Actual generated margins required repacking as documented above.

Eight elemental modules reuse the established astra-elements/astra-controls atlases. Water impact is the existing water animation played once; divine impact reuses the electric pulse and supports runtime palette context. These are intentional reusable modules, not bespoke newly generated sequences. The three rain layers reuse the existing Gopuccha arrow, rotated and deterministically arranged with different sizes/opacity/density. Their motion is runtime cosmetic scrolling. No new audio was generated.

## Runtime inventory

| ID | Sheet px | Cell px | Frames | FPS | Loop | Source |
|---|---:|---:|---:|---:|---|---|
| fx_sky_shockwave_divine | 1600×640 | 320×320 | 10 | 18 | False | Generated |
| fx_arrow_multiplication | 1280×320 | 256×320 | 5 | 12 | False | Generated |
| fx_arrowimpact_small | 1280×512 | 256×256 | 6 | 16 | False | Generated |
| fx_arrowimpact_medium | 1280×512 | 256×256 | 6 | 16 | False | Generated |
| fx_arrowimpact_heavy | 1280×512 | 256×256 | 6 | 16 | False | Generated |
| fx_lightning_strike | 960×1024 | 192×512 | 6 | 18 | False | Generated |
| fx_storm_cloud | 768×384 | 768×384 | 1 | 1 | True | Generated |
| fx_fire_ground_loop | 1024×256 | 256×256 | 4 | 10 | True | Reused |
| fx_sky_fire_vortex | 1024×256 | 256×256 | 4 | 10 | True | Reused |
| fx_water_field_loop | 1024×256 | 256×256 | 4 | 10 | True | Reused |
| fx_mist_medium | 1024×256 | 256×256 | 4 | 10 | True | Reused |
| fx_water_impact | 1024×256 | 256×256 | 4 | 10 | False | Reused |
| fx_electric_ground_pulse | 1024×256 | 256×256 | 4 | 10 | True | Reused |
| fx_astra_impact_divine | 1024×256 | 256×256 | 4 | 10 | False | Reused |
| fx_sky_wind_cyclone | 1024×256 | 256×256 | 4 | 10 | True | Reused |
| fx_arrowrain_background | 384×384 | 384×384 | 1 | 1 | True | Reused |
| fx_arrowrain_midground | 384×384 | 384×384 | 1 | 1 | True | Reused |
| fx_arrowrain_foreground | 384×384 | 384×384 | 1 | 1 | True | Reused |

All18 runtime sheets total 2.37 MiB compressed and 27.53 MiB decoded RGBA if all loaded simultaneously. Selected-loadout loading and quality-tier instance limits should keep the live set smaller. Low-tier visual density must never affect deterministic simulation. Actual Android GPU memory/FPS remain device-validation tasks.

Manifest: `web/cinematic-fx/fx_manifest.json`. Review montage: `web/cinematic-fx/contact-sheet.jpg`. No additional core asset is missing from the18-ID requested contract.
