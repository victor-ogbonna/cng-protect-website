# Prompt — exploded view of the edge node, as SVG

## Read this first: use a coding model, not an image generator

Midjourney, Imagen, DALL·E and Firefly output **pixels**. They cannot produce
SVG. Tools that claim to (SVG.io, Recraft's vector mode, Illustrator's Image
Trace) work by tracing a raster afterwards, which gives you thousands of
meaningless `<path>` nodes, no editable structure, and colours baked in — so it
cannot follow the site's light/dark theme.

A technical diagram in SVG is a **code** task. Paste the prompt below into
Claude, ChatGPT or Gemini and ask for a file. That gets you something small,
editable, crisp at any zoom, and theme-aware.

Vector generators are fine for decorative illustration. They are the wrong tool
for a diagram whose job is to be accurate.

---

## The prompt

> Write a single React component file, `BoardDiagram.jsx`, exporting a default
> function that returns one inline `<svg>`. No dependencies, no external
> assets, no `<image>` tags. Use a `viewBox` of `0 0 620 460` and
> `className="h-auto w-full"`.
>
> Draw an exploded isometric view of a four-layer electronics stack: four flat
> parallelogram plates floating apart at even vertical intervals, in consistent
> isometric projection (each plate is a parallelogram with its top and bottom
> edges at about 18 degrees from horizontal). Order, top to bottom:
>
> 1. A sealed lid. Plain plate with a bolt circle at each of its four corners
>    and a dashed inset line running just inside the perimeter, representing a
>    gasket channel. Along that dashed line place four small filled dots for
>    tamper microswitches.
> 2. A gas sensor. A short vertical cylinder standing on the plate, drawn as
>    two stacked ellipses joined by straight sides, with a small inner ellipse
>    on top for the mesh window, and a dashed horizontal line inside the body
>    between a filled dot on the left and a filled dot on the right to suggest
>    an optical path between emitter and detector.
> 3. The controller board. On the plate place one large rounded rectangle for
>    the microcontroller, one small rounded rectangle for a secure element, one
>    medium rounded rectangle for a cellular modem with a small notched
>    rectangle beside it for a SIM slot, a row of eight small circles along one
>    edge for pin headers, three small circles on the right edge for antenna
>    connectors, and two or three thin polylines wandering between components
>    for copper traces.
> 4. A relay carrier. One tall rounded rectangle for a sealed relay, a small
>    rectangle beside it for a screw terminal, and two thick rounded polylines
>    leaving the plate's right edge for the output wires — one of them accented.
>
> Run two vertical dashed alignment lines down through all four plates. On the
> right of each plate, draw a short horizontal leader line ending in a small
> filled circle, and render the plate's number as a two-digit `<text>` element
> — `01`, `02`, `03`, `04` — at the end of each leader. Those four numbers are
> the only text in the whole file.
>
> Colour every fill and stroke with CSS custom properties, never literal hex:
> use `var(--dgm-fill)` for plate faces, `var(--dgm-fill-2)` for the lid and
> relay bodies, `var(--dgm-line)` for structural outlines, `var(--dgm-line-2)`
> for faint lines and the alignment guides, `var(--data)` for the sensor,
> `var(--warn)` for the microcontroller and the accented wire, and
> `var(--brand)` for the relay and the secure element. Stroke widths between 1
> and 2.2. No filters, no blurs, no gradients that assume a dark background.
>
> Give the `<svg>` `role="img"` and an `aria-label` describing the stack in one
> sentence. Keep the whole file under 200 lines and comment each layer group.

## Negative constraints, if the tool takes them separately

> no raster `<image>`, no base64, no external fonts, no hex colours, no
> `fill="black"` or `fill="white"`, no text beyond the four layer numbers, no
> `<filter>`, no `<foreignObject>`, no animation

---

## Why the prompt is shaped this way

- **CSS custom properties, not hex.** `src/index.css` defines `--dgm-fill`,
  `--dgm-line`, `--dgm-line-2`, `--dgm-fill-2`, `--brand`, `--data` and
  `--warn` twice — once for light, once for `[data-theme="dark"]`. An SVG that
  references them follows the theme toggle for free. An SVG with baked hex
  disappears on one of the two backgrounds, which is exactly the problem the
  first version of this site had.
- **Only four text elements.** Everything else is labelled in real HTML beside
  the diagram, off `src/data/boardLayers.js`. Text inside an SVG scaled to a
  phone becomes illegible; HTML text reflows.
- **Layer order is fixed.** The numbered legend in `src/sections/Hardware.jsx`
  reads top to bottom off `boardLayers.js`: lid and tamper loop, NDIR sensor,
  controller PCB, relay carrier. Change the order in the drawing and the legend
  silently starts lying.
- **No gradients assuming a dark ground.** A gradient tuned for the old navy
  theme renders as a grey smear on white.

## Installing it

Save over `src/components/BoardDiagram.jsx`, then in
`src/sections/Hardware.jsx` swap the `<figure>` holding
`/media/node-exploded.webp` back to:

```jsx
<div className="order-2 lg:order-1">
  <BoardDiagram />
</div>
```

and restore the import at the top of the file:

```jsx
import BoardDiagram from "../components/BoardDiagram";
```

Check it in both themes before pushing — the header toggle is the fastest way.

## Or just ask for the one already here

`src/components/BoardDiagram.jsx` is the hand-authored SVG this replaced. It
already meets every constraint above. Restoring it is a two-line change, and no
prompt is needed.
