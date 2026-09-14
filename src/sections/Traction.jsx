import { Card, Eyebrow, Section, SectionHeading } from "../components/UI";

const METRICS = [
  {
    value: "$5,000",
    label: "SAFE investment",
    body: "Backed by the South East Development Commission (SEDC) — institutional, non-dilutive validation of the thesis.",
    tone: "brand",
    tag: "Funded",
  },
  {
    value: "Patent",
    label: "Pending",
    body: "Intellectual property filed covering the integrated Edge-AI and blockchain telemetry system.",
    tone: "data",
    tag: "Filed",
  },
  {
    value: "8",
    label: "Conversion centres",
    body: "Commercial demand from eight CNG conversion centres already on the pilot waitlist as install partners.",
    tone: "warn",
    tag: "Demand",
  },
  {
    value: "10",
    label: "Vehicle pilot",
    body: "Launching a 10-vehicle commercial transit pilot to harden the firmware against real road duty cycles.",
    tone: "data",
    tag: "Live now",
  },
];

const TONES = {
  brand: ["text-brand", "border-brand/25 bg-brand-tint text-brand"],
  data: ["text-data", "border-data/25 bg-data-tint text-data"],
  warn: ["text-warn", "border-warn/25 bg-warn-tint text-warn"],
};

export default function Traction() {
  return (
    <Section id="traction" grid>
      <SectionHeading
        eyebrow="Traction & validation"
        tone="brand"
        title="Built for African Transit. Backed by Institutional Capital."
        lede="We are not pitching a concept. The IP is filed, the capital is in, the install partners are queued and the pilot fleet is being fitted."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m) => {
          const [valueTone, tagTone] = TONES[m.tone];
          return (
            <Card as="article" key={m.label} className="flex flex-col p-6">
              <span
                className={`self-start rounded-full border px-2.5 py-0.5 font-mono text-[9.5px] tracking-[0.14em] uppercase ${tagTone}`}
              >
                {m.tag}
              </span>
              <p className={`mt-5 font-mono text-[2.1rem] leading-none font-bold ${valueTone}`}>
                {m.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-ink">{m.label}</p>
              <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-muted">{m.body}</p>
            </Card>
          );
        })}
      </div>

      {/* SEDC backing, with the certificate as the evidence */}
      <Card hover={false} className="mt-5 grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <Eyebrow tone="brand">Backed by SEDC</Eyebrow>
          <h3 className="mt-5 text-2xl font-bold">
            Selected by the South East Venture Capital Program.
          </h3>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            CNG-Protect came through the inaugural South East Pitch Competition as one of the top
            10 ventures on the SEVCP Incubation Track — the programme the South East Development
            Commission runs with Ventures Platform, Ubulu Africa, Cascador, Rise and MTN.
          </p>
          <dl className="mt-7 grid gap-4 border-t border-line pt-6 sm:grid-cols-3">
            {[
              ["Programme", "SEVCP Incubation"],
              ["Standing", "Top 10 · Finalist"],
              ["Issued", "Enugu, May 2026"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10.5px] tracking-wide text-faint uppercase">{k}</dt>
                <dd className="mt-1 font-mono text-[12.5px] font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="overflow-hidden rounded-xl border border-line bg-panel-2">
          <img
            src="/media/sedc-certificate.webp"
            alt="SEVCP Incubation Track certificate presented to CNG Protect, naming it a selected finalist among the top 10 ventures of the inaugural South East Pitch Competition, signed by Mark Okoye, Managing Director and CEO of the South East Development Commission, Enugu, May 2026."
            loading="lazy"
            width="1100"
            height="800"
            className="block w-full"
          />
          <figcaption className="border-t border-line px-4 py-3 text-[11.5px] leading-relaxed text-faint">
            SEVCP Incubation Track — Selected Finalist, top 10 of the inaugural South East Pitch
            Competition. Signed by Mark Okoye, MD/CEO, South East Development Commission.
          </figcaption>
        </figure>
      </Card>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl border border-line bg-panel-2 px-6 py-5 text-center">
        <span className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
          Ecosystem
        </span>
        {[
          "South East Development Commission",
          "Ventures Platform",
          "Lion Science Park, UNN",
          "Ogbontor Engineering",
        ].map((n) => (
          <span key={n} className="text-[0.88rem] font-medium text-muted">
            {n}
          </span>
        ))}
      </div>
    </Section>
  );
}
