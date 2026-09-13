import { Section, SectionHeading } from "../components/UI";

const TEAM = [
  {
    name: "Victor Ogbonna",
    role: "Founder & CEO",
    body: "Sets the product thesis and carries the fleet, regulator and investor relationships.",
    tone: "#FF6B1A",
  },
  {
    name: "Stephanie Emezionye",
    role: "COO",
    body: "Runs the install partner network, pilot logistics and conversion-centre operations.",
    tone: "#22D3EE",
  },
  {
    name: "Theophilus Edafe",
    role: "CTO",
    body: "Owns the signing pipeline, the Lisk appchain integration and the insurance API.",
    tone: "#34D399",
  },
  {
    name: "Bright Okonkwo",
    role: "Embedded Systems",
    body: "Builds the ESP32-S3 firmware, sensor calibration and the fail-safe actuation path.",
    tone: "#94A3B8",
  },
];

const initials = (n) =>
  n
    .split(" ")
    .map((p) => p[0])
    .join("");

export default function Team() {
  return (
    <Section id="team" className="border-y border-navy-800 bg-navy-900">
      <SectionHeading
        eyebrow="Team"
        tone="cyan"
        title="Engineers who have to drive on these roads too."
        lede="Hardware, firmware, operations and chain — assembled out of Lion Science Park at the University of Nigeria, Nsukka."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m) => (
          <article
            key={m.name}
            className="group rounded-xl border border-navy-600 bg-navy-800/50 p-6 text-center transition-colors hover:border-navy-500 hover:bg-navy-800"
          >
            {/* Monogram stands in until headshots are supplied. */}
            <span
              className="mx-auto grid size-20 place-items-center rounded-full border-2 font-mono text-xl font-bold transition-transform group-hover:scale-105"
              style={{ color: m.tone, borderColor: `${m.tone}66`, background: `${m.tone}14` }}
              aria-hidden="true"
            >
              {initials(m.name)}
            </span>
            <h3 className="mt-5 text-[1.05rem] font-semibold">{m.name}</h3>
            <p
              className="mt-1 font-mono text-[10.5px] tracking-[0.14em] uppercase"
              style={{ color: m.tone }}
            >
              {m.role}
            </p>
            <p className="mt-4 text-[0.88rem] leading-relaxed text-slate-400">{m.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
