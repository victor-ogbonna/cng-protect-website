import { Section, SectionHeading } from "../components/UI";

const POINTS = [
  {
    n: "01",
    tone: "text-data",
    ring: "border-data/25 bg-data-tint",
    title: "The Fuel Crisis",
    body: "Petrol prices are surging and commercial transit is converting to CNG at speed — it is the only route to a viable cost-per-kilometre for buses, keke and haulage.",
    stat: "≈ 70%",
    statLabel: "cheaper per km than petrol",
  },
  {
    n: "02",
    tone: "text-danger",
    ring: "border-danger/25 bg-danger-tint",
    title: "The Danger",
    body: "Substandard conversions and uncertified cylinders lead to catastrophic, fatal explosions — Badagry and Kaduna are the incidents that made national news, not the outliers.",
    stat: "Fatal",
    statLabel: "blasts in Badagry & Kaduna",
  },
  {
    n: "03",
    tone: "text-body",
    ring: "border-line-strong bg-panel-2",
    title: "The Liability",
    body: "Fleet operators and insurers face total write-offs and unquantifiable risk. Without verifiable safety data there is no way to price a CNG policy — so most simply refuse to write one.",
    stat: "Unpriceable",
    statLabel: "risk without telemetry",
  },
];

export default function Problem() {
  return (
    <Section id="problem" className="border-y border-panel-2 bg-canvas-2">
      <SectionHeading
        eyebrow="The bottleneck"
        tone="danger"
        title="Cost is pushing fleets to CNG. Fear is holding them back."
        lede="Nigeria is converting its commercial fleet faster than it can certify it. The gap between the two is measured in write-offs and lives."
      />

      {/* evidence */}
      <div className="mt-14 grid gap-4 sm:grid-cols-5">
        <figure className="relative overflow-hidden rounded-xl border border-warn/25 sm:col-span-3">
          <img
            src="/media/incident-cylinder-blast.webp"
            alt="A saloon car torn open at a CNG filling station after its cylinder ruptured."
            loading="lazy"
            width="1200"
            height="727"
            className="h-56 w-full object-cover contrast-[1.05] grayscale-[35%] transition duration-500 hover:grayscale-0 sm:h-full sm:min-h-[18rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4">
            <span className="font-mono text-[10px] tracking-[0.14em] text-warn uppercase">
              Cylinder rupture · filling station
            </span>
            <p className="mt-1 text-sm font-medium text-white">
              One rupture writes off the vehicle, the bay and everyone standing in it.
            </p>
          </figcaption>
        </figure>

        <div className="grid gap-4 sm:col-span-2">
          <figure className="relative overflow-hidden rounded-xl border border-warn/25">
            <img
              src="/media/incident-edo-blast.webp"
              alt="Two burnt-out vehicles after a CNG explosion in Edo State, Nigeria."
              loading="lazy"
              width="692"
              height="618"
              className="h-40 w-full object-cover contrast-[1.05] grayscale-[35%] transition duration-500 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3.5 font-mono text-[10px] tracking-[0.12em] text-warn uppercase">
              Edo State · Oct 2024
            </figcaption>
          </figure>

          <figure className="relative overflow-hidden rounded-xl border border-line">
            <img
              src="/media/cylinder-in-boot.webp"
              alt="A CNG cylinder strapped into the boot of a hatchback, the typical aftermarket conversion."
              loading="lazy"
              width="318"
              height="159"
              className="h-40 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3.5">
              <span className="font-mono text-[10px] tracking-[0.12em] text-white/70 uppercase">
                The typical conversion
              </span>
              <p className="mt-0.5 text-[0.8rem] leading-snug text-white/85">
                An unmonitored cylinder in an enclosed boot. Nobody is watching it.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* three-part argument */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {POINTS.map((p) => (
          <article
            key={p.n}
            className="group relative overflow-hidden rounded-xl border border-line bg-panel-2/50 p-6 transition-colors hover:border-line-strong hover:bg-panel-2"
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid size-9 shrink-0 place-items-center rounded-lg border font-mono text-[11px] font-bold ${p.ring} ${p.tone}`}
              >
                {p.n}
              </span>
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{p.body}</p>
            <div className="mt-5 border-t border-panel-2 pt-4">
              <p className={`font-mono text-xl font-bold ${p.tone}`}>{p.stat}</p>
              <p className="mt-0.5 text-xs text-muted">{p.statLabel}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-[0.95rem] leading-relaxed text-muted">
        Standard vehicle electronics do not watch the cylinder bay. CNG-Protect closes that gap —
        and then proves, cryptographically, that it was closed.
      </p>
    </Section>
  );
}
