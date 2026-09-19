# PVP — The Chief Estate Akpalata

This is the new PVP build for **The Chief Estate Akpalata**. It is separate
from the shipped client portal in `The-Place-Estate`.

## Source files

- `Ratty Layout phase 2.dwg` — current Phase 2 source CAD drawing
- `Ratty Layout phase 2-1.dwg` — earlier Phase 2 CAD drawing
- `Ratty layout-Phase 1 & 2.pdf` — composite plotted drawing for both phases

## Current import result

The composite PDF contains two phases for landed property belonging to Chief
Mba Chiedozie Williams at Akparata Ogbeke-Nike, Enugu East LGA, Enugu State.
Phase 1 has 35 plots. Phase 2 has 17 plots and is the phase represented by the
DWG. The two phases can reuse plot numbers, so PVP keeps their records
separate. Phase 1 plots 1–4 are one combined purchase.

The title block states:

- Origin: `MINNA UTM`
- Scale: `1:1000`

The source drawing is now treated as WGS84 / UTM zone 32N (`EPSG:32632`).
The generated PVP layer is transformed to WGS84 (`EPSG:4326`) for Leaflet.

See [`pvp-import/combined-parcels.geojson`](pvp-import/combined-parcels.geojson)
for the combined map layer,
[`pvp-import/ownership.csv`](pvp-import/ownership.csv) for ownership import
rows, and [`pvp-import/processing-report.md`](pvp-import/processing-report.md)
for the processing summary.

## Running the preview

Open [`pvp-import/index.html`](pvp-import/index.html) in a browser. It is a
static review screen for the first extraction result; it does not yet publish
the estate or alter the shipped portal.

## Next build slice

1. Convert the DWG to a supported interchange format such as DXF or GeoPackage
   with the surveyor's confirmed CRS.
2. Load the converted geometry and match parcel labels against the PDF
   schedule.
3. Add a review/approval step before generating the public Leaflet portal.

## Public popup display controls

The Google Sheet controls which fields appear in the public parcel popup.
Prefix a column header with `**` to hide that field from the public popup.
For example, rename `AreaSqm` to `**AreaSqm` when plot sizes should not be
shown for this estate. The portal strips the prefix when matching the column,
so values continue to sync normally.

Examples:

```text
**AreaSqm
**PriceNaira
**Status
```

Remove the `**` prefix to show a field again. This is a per-client setting
stored in the sheet and does not require a code change or redeployment.
