# Generation prompt — exploded view of the edge node

**Used.** The output is `public/media/node-exploded.webp`, live in the Hardware
section in place of the hand-drawn SVG (`src/components/BoardDiagram.jsx`, kept
in the repo). Keep this prompt if you ever need to regenerate at a different
crop or aspect — and keep the layer order, because the numbered legend beside
the image reads top to bottom off `src/data/boardLayers.js`.

Use it in Midjourney, Google Imagen / Gemini, DALL·E or Firefly. Generate at
**16:9 or 3:2 landscape**, then drop the file into `public/media/` and point
the Hardware section's `<img>` at it.

---

## The prompt

> Photorealistic exploded-view product render of a ruggedised automotive IoT
> safety module, shot as a professional engineering visualisation. Four
> horizontal layers float apart in precise vertical alignment against a clean
> off-white studio background, lit softly from the upper left with gentle
> contact shadows.
>
> Top layer: a dark graphite anodised aluminium lid with a machined gasket
> channel around its perimeter and four stainless hex bolts at the corners.
>
> Second layer: a small cylindrical optical gas sensor, brushed metal can with
> a fine mesh window on top, sitting on a low standoff.
>
> Third layer: a matte green printed circuit board with visible copper traces,
> a large square microcontroller chip, a smaller secure-element chip, a
> surrounded-by-castellations cellular modem module with a nano-SIM slot, three
> gold-plated SMA antenna connectors along one edge, a row of pin headers, and
> two small status LEDs.
>
> Bottom layer: a black relay carrier board holding one chunky sealed
> automotive relay and a heavy two-pole screw terminal block, with thick red
> and black wires exiting to the right.
>
> Thin neutral-grey dashed alignment lines run vertically through all four
> layers. Shallow depth of field, sharp focus throughout, no text, no labels,
> no logos, no lettering anywhere. Industrial design portfolio quality, 8k,
> clean and clinical.

## Negative prompt

> text, words, letters, numbers, labels, logos, watermark, signature, UI,
> callout arrows, blueprint grid, cluttered workbench, hands, people, dark
> moody background, lens flare, heavy bokeh, tilted horizon

---

## Why it is written this way

- **"no text, no labels, no lettering"** is repeated because image models
  produce gibberish component markings, and fake chip part numbers on an
  engineering page are worse than no markings at all. Label the layers in HTML
  next to the image instead — the existing numbered legend already does this.
- **Off-white background, soft upper-left light** matches the site's light
  theme so the render sits on `--panel` without a visible plate edge.
- **The four layers mirror `src/data/boardLayers.js`** — lid and tamper loop,
  NDIR sensor, the controller PCB, the relay carrier. Keep that order so the
  numbered legend beside the image still reads correctly top to bottom.
- **Component descriptions avoid brand names** (no "ESP32", no "Winsen") on
  purpose. The model cannot render them accurately, and the spec table in the
  Hardware cards already states the real parts.

## Before you publish it

Caption it as a visualisation, the same way `node-mounted.webp` and
`node-closeup.webp` are. It is an illustration of the stack, not a photograph
of your board — and the page is read by people who will notice.

If you want something you can caption as real: photograph your actual
development board on a sheet of white paper, from directly above, in daylight
near a window. A plain honest photo of the real thing beats a beautiful render
of a fake one with this audience.
