import { Section, SectionHeading } from "../components/UI";

const POINTS = [
  {
    n: "01",
    tone: "text-data",
    ring: "border-data/25 bg-data-tint",
    title: "The Fuel Crisis",
    body: "Petrol is unaffordable. Commercial transit is converting to CNG at speed — it is the only viable cost per kilometre left.",
    stat: "≈ 70%",
    statLabel: "cheaper per km than petrol",
  },
  {
    n: "02",
    tone: "text-danger",
    ring: "border-danger/25 bg-danger-tint",
    title: "The Danger",
    body: "Substandard conversions kill. Kaduna this year, Badagry before it — and those are only the ones that made national news.",
    stat: "Fatal",
    statLabel: "Kaduna this year, Badagry before it",
  },
  {
    n: "03",
    tone: "text-body",
    ring: "border-line-strong bg-panel-2",
    title: "The Liability",
    body: "No verifiable safety data means no way to price a CNG policy. So most insurers refuse to write one at all.",
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
        lede="Nigeria is converting faster than it can certify. The gap is measured in write-offs and lives."
      />

      {/* evidence — the Kaduna bus leads, because the copy names it and it is
          the exact vehicle class our pilot fleet is drawn from */}
      <div className="mt-14 grid gap-4 sm:grid-cols-5">
        <figure className="relative overflow-hidden rounded-xl border border-danger/25 sm:col-span-3 sm:min-h-[22rem]">
          <img
            src="/media/incident-kaduna-blast.webp"
            alt="A commercial passenger bus in Kaduna torn open by a CNG explosion, its cylinder blown clear of the vehicle and lying in the road."
            loading="lazy"
            width="747"
            height="411"
            className="h-60 w-full object-cover object-[center_78%] contrast-[1.05] grayscale-[30%] transition duration-500 hover:grayscale-0 sm:absolute sm:inset-0 sm:size-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <span className="font-mono text-[10px] tracking-[0.14em] text-danger uppercase">
              Kaduna CNG bus explosion · earlier this year
            </span>
            <p className="mt-1.5 max-w-sm text-[0.95rem] leading-snug font-medium text-white">
              The cylinder is the one in the foreground. It left the vehicle.
            </p>
          </figcaption>
        </figure>

        <div className="grid gap-4 sm:col-span-2 sm:grid-rows-2">
          <figure className="relative h-44 overflow-hidden rounded-xl border border-danger/25 sm:h-auto sm:min-h-0">
            <img
              src="/media/incident-cylinder-blast.webp"
              alt="A saloon car torn open at a CNG filling station after its cylinder ruptured."
              loading="lazy"
              width="1200"
              height="727"
              className="absolute inset-0 size-full object-cover contrast-[1.05] grayscale-[30%] transition duration-500 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3.5">
              <span className="font-mono text-[10px] tracking-[0.12em] text-danger uppercase">
                Cylinder rupture · filling station
              </span>
              <p className="mt-0.5 text-[0.8rem] leading-snug text-white/85">
                One rupture writes off the vehicle and the bay.
              </p>
            </figcaption>
          </figure>

          <figure className="relative h-44 overflow-hidden rounded-xl border border-danger/25 sm:h-auto sm:min-h-0">
            <img
              src="/media/incident-edo-blast.webp"
              alt="Two burnt-out vehicles after a CNG explosion in Edo State, Nigeria."
              loading="lazy"
              width="692"
              height="618"
              className="absolute inset-0 size-full object-cover contrast-[1.05] grayscale-[30%] transition duration-500 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3.5">
              <span className="font-mono text-[10px] tracking-[0.12em] text-danger uppercase">
                Edo State
              </span>
              <p className="mt-0.5 text-[0.8rem] leading-snug text-white/85">
                Two vehicles, one leak, no warning.
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

      <p className="mx-auto mt-10 max-w-2xl text-center text-[1.05rem] leading-relaxed font-medium text-ink">
        Nothing in the vehicle watches the cylinder bay. We do — and we prove it.
      </p>
    </Section>
  );
}
