# CNG-Protect — landing page

B2B landing page for CNG-Protect: a DePIN hardware fail-safe that prevents CNG gas
explosions at the edge and streams cryptographically signed safety telemetry to a
Lisk appchain for fleet insurance audits.

Built with **React 19 + Vite + Tailwind CSS v4**.

Two pages:

| Path | What it is |
| --- | --- |
| `/` | The landing page — one scroll, eight anchored sections |
| `/admin` | Passphrase-gated list of pilot bookings, with CSV export |

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
src/App.jsx                 picks the page from the pathname (no router)
src/pages/Landing.jsx       section order for the landing page
src/pages/Admin.jsx         bookings table behind a passphrase
netlify/functions/          bookings.mjs — reads form submissions server-side
src/sections/               one file per page section
  Navbar  Hero  Problem  Hardware  Web3  Traction  Team  PilotCTA  Footer
src/components/
  Brand.jsx                 logo mark + wordmark
  UI.jsx                    Button, Eyebrow, SectionHeading, Section
  HeroVisual.jsx            animated SVG: edge node on cylinder -> signed uplink -> chain
  BoardDiagram.jsx          exploded view of the 4-layer node stack
  DashboardMockup.jsx       live fleet console mockup (selectable vehicles, rolling ledger)
  ThemeToggle.jsx           light/dark switch, remembered per browser
src/data/boardLayers.js     node layer stack, shared by diagram + legend
public/media/               logo, headshots, certificate, photography, screenshots
```

## Theme

**Light is the default.** The OS `prefers-color-scheme` is deliberately ignored,
so first-time visitors always get the white/green look. Dark mode is opt-in via
the header toggle and remembered in `localStorage` under `cngp-theme`; the
inline script at the top of `<body>` applies a stored choice before first paint,
so there is no flash.

Colours are **semantic tokens**, not palette names — each is a CSS variable
defined twice in `src/index.css` (once on `:root`, once on
`:root[data-theme="dark"]`) and exposed to Tailwind through `@theme inline`.
Write `bg-panel text-ink border-line` once and both themes follow.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `canvas` / `canvas-2` | `#ffffff` / `#f4f8f5` | `#06120d` / `#0a1a13` | page, alternating sections |
| `panel` / `panel-2` | `#ffffff` / `#f7faf8` | `#0c1f16` / `#10291d` | cards, insets |
| `line` / `line-strong` | `#e2ebe5` / `#c7d7cd` | `#1b3627` / `#2a5540` | borders |
| `ink` / `body` / `muted` / `faint` | `#0a1711` → `#8a9c93` | `#f2f7f4` → `#6d857b` | text hierarchy |
| `brand` | `#0e8a4f` | `#34d399` | primary, safe states, CTAs |
| `data` | `#0f766e` | `#2dd4bf` | blockchain / telemetry accents |
| `danger` | `#c0392b` | `#f87171` | incidents, the risk section |
| `warn` | `#a95a06` | `#fbbf24` | elevated / watch states |
| `dgm-*` | — | — | technical-diagram fills and strokes |

`dgm-*` exists because the SVG diagrams need more tonal separation than the UI:
a drawing that reads on a dark ground disappears on white.

Type is Inter for prose and JetBrains Mono for anything that reads as
instrumentation (specs, hashes, telemetry).

## Things you will want to change

- **Hero render** — `HeroVisual.jsx` is a hand-built SVG technical illustration.
  Replace it with a 3D product render when one exists.
- **The SEDC certificate** proves *SEVCP Incubation Track — Selected Finalist,
  top 10*. It is **not** a $5,000 investment certificate, and the caption says
  what it actually says. The separate "$5,000 SAFE investment" metric card is
  your own claim — keep documentation for it somewhere you can produce on
  request, because underwriters and investors will ask.
- **Social links** — placeholder handles in `src/sections/Footer.jsx`.
- **Incident photography** — `public/media/incident-*.webp` are crops of press
  photographs carried over from the old site. Get licences or replace them with
  owned imagery before a public launch.
- **Whitepaper** — the secondary hero CTA currently jumps to the on-page
  architecture block (`#architecture`). Point it at the PDF when it exists.

## The admin page

`/admin` lists everyone who has submitted the pilot form, filterable, with CSV
export. It asks for a passphrase, posts it to `netlify/functions/bookings.mjs`,
and that function — not the browser — calls the Netlify API. The API token never
reaches the client.

Set these in **Netlify → Site configuration → Environment variables**:

| Variable | What it is |
| --- | --- |
| `ADMIN_PASSWORD` | the passphrase you type on `/admin` |
| `NETLIFY_API_TOKEN` | a personal access token (Netlify → User settings → Applications) |
| `FORM_NAME` | optional, defaults to `pilot-access` |

This is a single shared passphrase, not real user accounts — fine for a private
booking list, not for anything you would call access control. If the list ever
holds something sensitive, put Netlify Identity or password protection in front
of it instead.

To get the submissions **emailed** to you as they arrive: Netlify → Forms →
`pilot-access` → *Settings and usage* → *Form notifications* → add an email
notification to `victorogbonna313@gmail.com`. That is a dashboard setting, not
something in this repo.

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
