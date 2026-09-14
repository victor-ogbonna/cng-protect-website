import BoardDiagram from "../components/BoardDiagram";
import { BOARD_LAYERS } from "../data/boardLayers";
import { Section, SectionHeading } from "../components/UI";

const FEATURES = [
  {
    tone: "cyan",
    title: "Automotive-Grade NDIR Sensing",
    body: "A Winsen MH-440D optical methane sensor reads gas by infrared absorption, not by a heated catalytic bead. It ignores exhaust hydrocarbons and humidity that make cheap MQ-series sensors cry wolf — and it does not drift out of calibration after a season in a Lagos boot.",
    specs: [
      ["Method", "NDIR optical"],
      ["Range", "0 – 100% LEL"],
      ["Immunity", "Exhaust + humidity"],
    ],
    icon: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <path d="M4.5 12h15M12 4.5v15" strokeDasharray="2 2.4" />
      </>
    ),
  },
  {
    tone: "orange",
    title: "Zero-Latency Fail-Safe",
    body: "An ESP32-S3 holds the alarm threshold in firmware, not in the cloud. On breach it actuates an electromechanical fuel cut-off relay in under 50 ms — starving the engine of gas before an ignition source ever meets the leak. No network, no server, no dependency.",
    specs: [
      ["MCU", "ESP32-S3"],
      ["Actuation", "< 50 ms"],
      ["Cloud needed", "None"],
    ],
    icon: (
      <>
        <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-7.5Z" />
      </>
    ),
  },
  {
    tone: "green",
    title: "Anti-Tamper IP65 Enclosure",
    body: "A continuous microswitch loop runs the perimeter of the sealed casing. Break the seal to bypass the node and the loop opens, the vehicle enters safe shutdown, and the tamper event is signed and published on-chain. Safety you cannot quietly unplug before a sale.",
    specs: [
      ["Ingress", "IP65 sealed"],
      ["Tamper", "Continuous loop"],
      ["On breach", "Signed + shutdown"],
    ],
    icon: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2.2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
  },
];

const TONES = {
  cyan: { text: "text-data", ring: "border-data/25 bg-data-tint", edge: "hover:border-data/40" },
  orange: { text: "text-warn", ring: "border-warn/25 bg-warn-tint", edge: "hover:border-warn/40" },
  green: { text: "text-brand", ring: "border-brand/25 bg-brand-tint", edge: "hover:border-brand/40" },
};

export default function Hardware() {
  return (
    <Section id="hardware" grid>
      <SectionHeading
        eyebrow="Hardware architecture"
        tone="data"
        title="An edge node engineered to work when nothing else does."
        lede="No connectivity, no cloud round-trip, no user in the loop. The fail-safe is a physical circuit that decides locally in milliseconds."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {FEATURES.map((f) => {
          const t = TONES[f.tone];
          return (
            <article
              key={f.title}
              className={`flex flex-col rounded-xl border border-line bg-panel-2/40 p-6 transition-colors ${t.edge} hover:bg-panel-2/70`}
            >
              <span className={`grid size-11 place-items-center rounded-lg border ${t.ring} ${t.text}`}>
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg leading-snug font-semibold">{f.title}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{f.body}</p>
              <dl className="mt-6 space-y-2 border-t border-panel-2 pt-4">
                {f.specs.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] tracking-wide text-muted uppercase">{k}</dt>
                    <dd className={`font-mono text-[11.5px] font-medium ${t.text}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          );
        })}
      </div>

      {/* exploded view */}
      <div
        id="architecture"
        className="mt-4 grid gap-8 rounded-2xl border border-line bg-canvas-2/70 p-6 sm:p-9 lg:grid-cols-[1.2fr_1fr] lg:items-center"
      >
        <div className="order-2 lg:order-1">
          <BoardDiagram />
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold">Inside the node</h3>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            Four layers in a single sealed stack. Every one of them has a job during a leak, and
            none of them needs a phone signal to do it.
          </p>
          <ol className="mt-7 space-y-4">
            {BOARD_LAYERS.map((l, i) => (
              <li key={l.label} className="flex gap-3.5">
                <span
                  className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-md border font-mono text-[10px] font-bold"
                  style={{ color: l.accent, borderColor: `${l.accent}55`, background: `${l.accent}14` }}
                >
                  {`0${i + 1}`}
                </span>
                <span className="text-[0.92rem] leading-relaxed text-body">{l.label}</span>
              </li>
            ))}
          </ol>
          <p className="mt-7 rounded-lg border border-line bg-panel-2/60 p-4 font-mono text-[11.5px] leading-relaxed text-muted">
            <span className="text-warn">threshold breach</span> → relay opens →{" "}
            <span className="text-brand">gas starved</span> → event signed → 4G uplink → chain
          </p>
        </div>
      </div>
    </Section>
  );
}
