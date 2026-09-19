# PVP import review — The Chief Estate Akpalata

## Status

**Combined PVP layer generated**

## Corrected interpretation

This is a two-phase estate, not one 35-plot schedule:

- **Phase 1:** 35 plots shown in the composite PDF.
- **Phase 2:** 17 plots represented by the Phase 2 DWG and also shown in the
  composite PDF.

The 17 area values extracted earlier belong to Phase 2. They must not be
assigned to Phase 1 simply because both phases use plot numbers starting at 1.
The PVP data model therefore uses phase-qualified records even where plot
numbers repeat.

Phase 1 plots 1, 2, 3, and 4 are recorded as one shared ownership
group. The purchaser identity is intentionally left blank until supplied.

## Extracted successfully

- One PDF page, A-sized portrait drawing
- 35 Phase 1 plot labels
- 17 Phase 2 plot labels
- Areas for Phase 2 plots 1–17
- Estate/site description from the title block
- Drawing scale: 1:1000
- Coordinate note: `ORIGIN : MINNA UTM`

## Processing notes

1. The drawing was exported to DXF locally with AutoCAD.
2. Source coordinates were interpreted as WGS84 / UTM zone 32N (EPSG:32632)
   and transformed to WGS84 longitude/latitude (EPSG:4326) for PVP.
3. Phase 2 has 16 parcels matched to closed CAD linework. One Phase 2 label
   was retained using the label-layout geometry because its boundary did not
   close cleanly.
4. Phase 1 linework is open in the source drawing, so its 35 parcel locations
   use label-based layout geometry that preserves their relative positions.
5. Phase 1 plots 1–4 are linked to the shared ownership group
   `phase-1-purchaser-1-4`.

## Extracted title block

```text
PLAN SHEWING LANDED PROPERTY
OF
CHIEF MBA CHIEDOZIE WILLIAMS
AT
AKPARATA OGBEKE-NIKE
ENUGU EAST LOCAL GOVT. AREA
ENUGU STATE
ORIGIN : MINNA UTM
SCALE : 1:1000
```

## Decision required from the surveyor

The generated combined layer is available in
[`combined-parcels.geojson`](combined-parcels.geojson), with ownership import
rows in [`ownership.csv`](ownership.csv) and processing metadata in
[`combined-import-metadata.json`](combined-import-metadata.json).
