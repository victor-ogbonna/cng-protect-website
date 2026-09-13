# CNG-Protect — landing page

B2B landing page for CNG-Protect: a DePIN hardware fail-safe that prevents CNG gas
explosions at the edge and streams cryptographically signed safety telemetry to a
Lisk appchain for fleet insurance audits.

Built with **React 19 + Vite + Tailwind CSS v4**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

## Layout

```
index.html                  meta/OG tags, fonts, hidden Netlify form mirror
src/index.css               Tailwind v4 @theme — brand palette, fonts, keyframes
src/App.jsx                 section order
src/sections/               one file per page section
  Navbar  Hero  Problem  Hardware  Web3  Traction  Team  PilotCTA  Footer
src/components/
  Brand.jsx                 logo mark + wordmark
  UI.jsx                    Button, Eyebrow, SectionHeading, Section
  HeroVisual.jsx            animated SVG: edge node on cylinder -> signed uplink -> chain
  BoardDiagram.jsx          exploded view of the 4-layer node stack
  DashboardMockup.jsx       live fleet console mockup (selectable vehicles, rolling ledger)
src/data/boardLayers.js     node layer stack, shared by diagram + legend
public/media/               photography and app screenshots (WebP)
```

## Design tokens

Defined once in `src/index.css` under `@theme`, so `bg-navy-900`,
`text-safety-500` etc. work like any Tailwind colour:

| Token | Value | Use |
| --- | --- | --- |
| `navy-950 … navy-500` | `#050912` → `#1F3055` | page, panels, borders |
| `safety-500` | `#FF6B1A` | primary CTA, danger, actuation |
| `cyan-flow` | `#22D3EE` | Web3 / data flow |
| `green-safe` | `#34D399` | safe states, signatures |
| `slate-300/400` | — | body and secondary copy |

Type is Inter for prose and JetBrains Mono for anything that reads as
instrumentation (specs, hashes, telemetry).

## Things you will want to change

- **Team headshots** — `src/sections/Team.jsx` renders initial monograms. Drop
  images in `public/media/` and swap the `<span>` for an `<img>`.
- **Hero render** — `HeroVisual.jsx` is a hand-built SVG technical illustration.
  Replace it with a 3D product render when one exists.
- **Social links** — placeholder handles in `src/sections/Footer.jsx`.
- **Incident photography** — `public/media/incident-*.webp` are crops of press
  photographs carried over from the old site. Get licences or replace them with
  owned imagery before a public launch.
- **Whitepaper** — the secondary hero CTA currently jumps to the on-page
  architecture block (`#architecture`). Point it at the PDF when it exists.

## Form handling

The pilot form posts to [Netlify Forms](https://docs.netlify.com/forms/setup/)
under the name `pilot-access`. Netlify's crawler cannot see a client-rendered
form, so `index.html` carries a hidden static mirror with the same field names —
**keep the two in sync** if you add a field. Submissions land in the Netlify
dashboard; add a notification to forward them to email.

To use a different backend, change the `fetch` target in
`src/sections/PilotCTA.jsx`.

## Deploy

`netlify.toml` is configured for Netlify (`npm run build` → `dist`). Any static
host works — the build output is plain files.

```bash
npx netlify deploy --prod
```
