import {
  IconCity,
  IconClimate,
  IconEnergy,
  IconHealth,
  IconIndustry,
} from "../components/Icons";
import { Eyebrow } from "../components/UI";

/** One line each. The mechanism, not the aspiration. */
const GOALS = [
  { n: 3, Icon: IconHealth, title: "Good Health & Well-being", line: "A leak caught in the bay is a burn ward visit that never happens." },
  { n: 7, Icon: IconEnergy, title: "Affordable & Clean Energy", line: "Safety is the gate on Nigeria's cheapest fuel — not a bolt-on." },
  { n: 9, Icon: IconIndustry, title: "Industry & Innovation", line: "Edge hardware designed in Enugu, with the IP filed in Nigeria." },
  { n: 11, Icon: IconCity, title: "Sustainable Cities", line: "Buses, keke and haulage — the transport people actually ride." },
  { n: 13, Icon: IconClimate, title: "Climate Action", line: "Every prevented leak stops raw methane venting to atmosphere." },
];

export default function Sdg() {
  return (
    <section id="impact" className="border-y border-line bg-canvas-2 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <Eyebrow tone="brand">Impact</Eyebrow>
          <h2 className="mt-5 text-2xl leading-[1.15] font-bold sm:text-3xl">
            Five UN goals. One box.
          </h2>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {GOALS.map(({ n, Icon, title, line }) => (
            <li
              key={n}
              className="group rounded-xl border border-line bg-panel p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-on-brand">
                  <Icon className="size-[22px]" />
                </span>
                <span className="font-mono text-2xl leading-none font-bold text-line-strong transition-colors group-hover:text-brand">
                  {n}
                </span>
              </div>
              <h3 className="mt-4 text-[0.95rem] leading-snug font-semibold">{title}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
