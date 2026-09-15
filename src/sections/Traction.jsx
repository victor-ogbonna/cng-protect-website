import { PRESS, PROOF_LINK } from "../data/press";
import { Button, Card, Eyebrow, Section, SectionHeading } from "../components/UI";

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
          <Button
            href={PROOF_LINK.url}
            target="_blank"
            rel="noreferrer noopener"
            size="md"
            className="mt-6"
          >
            See CNG-Protect on the published winners list
            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.5 4.5h8v8M15.5 4.5 5 15" />
            </svg>
          </Button>

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

      {/* press */}
      <Card hover={false} className="mt-5 p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div>
            <Eyebrow tone="data">In the press</Eyebrow>
            <h3 className="mt-4 text-xl font-bold sm:text-2xl">
              The selection was reported nationally.
            </h3>
          </div>
          <p className="max-w-md text-[0.88rem] leading-relaxed text-muted">
            Coverage of the SEVCP winners announcement, 29 May 2026. The first two print our name
            in the published list — click either one rather than taking ours.
          </p>
        </div>

        <ul className="mt-6 grid gap-2.5 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRESS.map((p) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col gap-1.5 rounded-lg border border-line bg-panel-2 p-3.5 transition-colors hover:border-brand/45 hover:bg-brand-tint"
              >
                <span className="flex items-center gap-2">
                  <span className="text-[0.88rem] font-semibold text-ink">{p.outlet}</span>
                  {p.namesUs && (
                    <span className="rounded border border-brand/30 bg-brand-tint px-1.5 py-0.5 font-mono text-[9px] tracking-[0.1em] text-brand uppercase">
                      names us
                    </span>
                  )}
                  <svg
                    viewBox="0 0 20 20"
                    className="ml-auto size-3.5 shrink-0 text-faint transition-colors group-hover:text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.5 4.5h8v8M15.5 4.5 5 15" />
                  </svg>
                </span>
                <span className="text-[0.8rem] leading-snug text-muted">{p.title}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-5">
          <span className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
            Ecosystem
          </span>
          {[
            "South East Development Commission",
            "Ventures Platform",
            "Lion Science Park, UNN",
            "Ogbontor Engineering Enterprise",
          ].map((n) => (
            <span key={n} className="text-[0.85rem] font-medium text-muted">
              {n}
            </span>
          ))}
        </div>
      </Card>
    </Section>
  );
}
