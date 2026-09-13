import { Section, SectionHeading } from "../components/UI";

const METRICS = [
  {
    value: "$5,000",
    label: "SAFE investment",
    body: "Backed by the South East Development Commission (SEDC) — institutional, non-dilutive validation of the thesis.",
    tone: "green",
    tag: "Funded",
  },
  {
    value: "Patent",
    label: "Pending",
    body: "Intellectual property filed covering the integrated Edge-AI and blockchain telemetry system.",
    tone: "cyan",
    tag: "Filed",
  },
  {
    value: "8",
    label: "Conversion centres",
    body: "Commercial demand from eight CNG conversion centres already on the pilot waitlist as install partners.",
    tone: "orange",
    tag: "Demand",
  },
  {
    value: "10",
    label: "Vehicle pilot",
    body: "Launching a 10-vehicle commercial transit pilot to harden the firmware against real road duty cycles.",
    tone: "cyan",
    tag: "Live now",
  },
];

const TONES = {
  green: ["text-green-safe", "border-green-safe/30 bg-green-safe/10 text-green-safe", "hover:border-green-safe/40"],
  cyan: ["text-cyan-flow", "border-cyan-flow/30 bg-cyan-flow/10 text-cyan-flow", "hover:border-cyan-flow/40"],
  orange: ["text-safety-500", "border-safety-500/30 bg-safety-500/10 text-safety-300", "hover:border-safety-500/40"],
};

export default function Traction() {
  return (
    <Section id="traction" grid>
      <SectionHeading
        eyebrow="Traction & validation"
        tone="green"
        title="Built for African Transit. Backed by Institutional Capital."
        lede="We are not pitching a concept. The IP is filed, the capital is in, the install partners are queued and the pilot fleet is being fitted."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m) => {
          const [valueTone, tagTone, edge] = TONES[m.tone];
          return (
            <article
              key={m.label}
              className={`flex flex-col rounded-xl border border-navy-600 bg-navy-800/50 p-6 transition-colors ${edge} hover:bg-navy-800`}
            >
              <span
                className={`self-start rounded-full border px-2.5 py-0.5 font-mono text-[9.5px] tracking-[0.14em] uppercase ${tagTone}`}
              >
                {m.tag}
              </span>
              <p className={`mt-5 font-mono text-[2.1rem] leading-none font-bold ${valueTone}`}>
                {m.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{m.label}</p>
              <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-slate-400">{m.body}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl border border-navy-700 bg-navy-900/60 px-6 py-5 text-center">
        <span className="font-mono text-[10px] tracking-[0.16em] text-slate-400 uppercase">
          Ecosystem
        </span>
        {[
          "South East Development Commission",
          "Lion Science Park, UNN",
          "Lisk",
          "Ogbontor Engineering",
        ].map((n) => (
          <span key={n} className="text-[0.88rem] font-medium text-slate-400">
            {n}
          </span>
        ))}
      </div>
    </Section>
  );
}
