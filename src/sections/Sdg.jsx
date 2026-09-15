import { Eyebrow } from "../components/UI";

/**
 * Where the product actually touches the UN goals. Each line names the
 * mechanism, not the aspiration — an underwriter or a grant reviewer can check
 * every one of these against the hardware.
 */
const GOALS = [
  {
    n: 3,
    title: "Good Health & Well-being",
    body: "A leak caught in the bay is a burn ward visit that never happens. The fail-safe exists to keep drivers, passengers and filling-station staff alive.",
  },
  {
    n: 7,
    title: "Affordable & Clean Energy",
    body: "CNG is the cheaper, lower-carbon fuel — but only reaches scale if it stops killing people. Safety is the gate on the energy transition, not a bolt-on.",
  },
  {
    n: 9,
    title: "Industry, Innovation & Infrastructure",
    body: "Locally designed edge hardware and an auditable data layer, built in Enugu rather than imported, with the IP filed in Nigeria.",
  },
  {
    n: 11,
    title: "Sustainable Cities & Communities",
    body: "The vehicles we fit are buses, keke and haulage — the transport poorer commuters actually depend on, made safer at the fleet level.",
  },
  {
    n: 13,
    title: "Climate Action",
    body: "Every converted vehicle cuts tailpipe carbon against petrol, and every prevented leak stops raw methane venting to atmosphere.",
  },
];

export default function Sdg() {
  return (
    <section
      id="impact"
      className="border-y border-line bg-canvas-2 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.9fr] lg:items-start lg:gap-12">
          <div>
            <Eyebrow tone="brand">Impact</Eyebrow>
            <h2 className="mt-5 text-2xl leading-[1.15] font-bold sm:text-3xl">
              Five of the UN Sustainable Development Goals, addressed by the same box.
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
              Safety is the bottleneck on Nigeria's cleanest available fuel. Removing it moves
              health, energy, industry, transport and emissions at once — which is why CNG-Protect
              reads as climate infrastructure, not just a sensor.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {GOALS.map((g) => (
              <li
                key={g.n}
                className="flex gap-3.5 rounded-xl border border-line bg-panel p-4 shadow-card transition-colors hover:border-brand/40"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand font-mono text-[13px] font-bold text-on-brand">
                  {g.n}
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.9rem] leading-snug font-semibold text-ink">
                    {g.title}
                  </span>
                  <span className="mt-1.5 block text-[0.82rem] leading-relaxed text-muted">
                    {g.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
