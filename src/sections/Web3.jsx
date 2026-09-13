import DashboardMockup from "../components/DashboardMockup";
import { Button, Eyebrow } from "../components/UI";

const CHAIN = [
  {
    step: "01",
    title: "Sense",
    body: "The NDIR sensor and cut-off relay produce a raw safety event at the cylinder bay.",
  },
  {
    step: "02",
    title: "Sign",
    body: "An ATECC608 secure element signs the payload with an Ed25519 key that never leaves its tamper-resistant silicon.",
  },
  {
    step: "03",
    title: "Stream",
    body: "The signed packet leaves over 4G. A forged or edited reading fails verification, so the operator cannot rewrite history.",
  },
  {
    step: "04",
    title: "Settle",
    body: "Attestations land on a Lisk appchain — an append-only record any underwriter can audit without trusting us.",
  },
];

const PRODUCTS = [
  {
    tag: "For fleet managers",
    price: "$100",
    unit: "/ vehicle / year",
    title: "Safety SaaS dashboard",
    body: "Live methane, temperature and cut-off state across every node. Tamper and alarm alerts by SMS and push. Exportable, signature-verified incident history for regulators and courts.",
    tone: "cyan",
    bullets: ["Live fleet telemetry", "Tamper + alarm alerts", "Verified incident export"],
  },
  {
    tag: "For underwriters",
    price: "API",
    unit: "usage-based",
    title: "Insurance risk API",
    body: "Query per-vehicle safety history straight from chain-anchored attestations. Price CNG policies on observed behaviour instead of refusing the class outright, and re-rate monthly.",
    tone: "orange",
    bullets: ["Per-vehicle risk score", "Chain-anchored proofs", "Dynamic re-rating"],
  },
];

export default function Web3() {
  return (
    <section
      id="web3"
      className="relative overflow-hidden border-y border-navy-800 bg-navy-950 px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-24 left-1/3 size-[36rem] rounded-full bg-cyan-flow/7 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <Eyebrow tone="cyan">Web3 &amp; software layer</Eyebrow>
          <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.75rem]">
            Solving the Oracle Problem with Edge-Signed Telemetry.
          </h2>
          <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-slate-400">
            An insurer's real question is not "what does the dashboard say" — it is "who could have
            edited this". So the hardware signs each safety payload before it ever touches a
            network, and the signature is what gets audited.
          </p>
        </div>

        {/* pipeline */}
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHAIN.map((c, i) => (
            <li
              key={c.step}
              className="relative rounded-xl border border-navy-600 bg-navy-900/70 p-5 transition-colors hover:border-cyan-flow/35"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] font-bold text-cyan-flow">{c.step}</span>
                <h3 className="text-[1.05rem] font-semibold">{c.title}</h3>
              </div>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-400">{c.body}</p>
              {i < CHAIN.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -right-4 z-10 hidden size-2 -translate-y-1/2 rotate-45 border-t border-r border-cyan-flow/50 lg:block"
                />
              )}
            </li>
          ))}
        </ol>

        {/* live mockup */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="min-w-0">
            <DashboardMockup />
            <p className="mt-3 text-center font-mono text-[10.5px] tracking-wide text-slate-500">
              FLEET CONSOLE · SAMPLE DATA · SELECT A VEHICLE
            </p>
          </div>

          <div className="grid gap-4">
            {PRODUCTS.map((p) => {
              const cyan = p.tone === "cyan";
              return (
                <article
                  key={p.title}
                  className={`rounded-xl border bg-navy-900/70 p-6 ${
                    cyan ? "border-cyan-flow/25" : "border-safety-500/25"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span
                      className={`font-mono text-[10px] tracking-[0.14em] uppercase ${
                        cyan ? "text-cyan-flow" : "text-safety-300"
                      }`}
                    >
                      {p.tag}
                    </span>
                    <span className="font-mono text-sm text-slate-400">
                      <span className="text-xl font-bold text-white">{p.price}</span> {p.unit}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-slate-400">{p.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-md border border-navy-600 bg-navy-800/70 px-2.5 py-1 font-mono text-[10.5px] text-slate-400"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}

            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-navy-600 bg-navy-800/40 p-5">
              <p className="flex-1 text-[0.9rem] leading-relaxed text-slate-400">
                Underwriting CNG risk, or running a conversion centre? We share the full data schema
                and signing spec.
              </p>
              <Button href="#pilot" variant="outline" size="sm">
                Get the spec
              </Button>
            </div>
          </div>
        </div>

        {/* companion mobile app */}
        <div className="mt-16 grid gap-10 rounded-2xl border border-navy-600 bg-navy-900/60 p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Eyebrow tone="green">Driver app · shipping today</Eyebrow>
            <h3 className="mt-5 text-2xl font-bold">The driver sees it before the fire does.</h3>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-slate-400">
              The node acts on its own, but the driver and the depot still get told. Live gas
              readings, cabin temperature, per-vehicle history and node health — the same signed
              stream the underwriter audits, rendered for the person in the seat.
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {[
                "Live methane gauge + SAFE / ELEVATED state",
                "Push alarm the moment a threshold is crossed",
                "Multi-vehicle device list for small depots",
                "History trace stored against the on-chain record",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 text-[0.9rem] leading-snug text-slate-300">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-green-safe" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            {[
              ["/media/app-dashboard.webp", "CNG-Protect driver app showing a SAFE state with a 637 ppm methane gauge and cabin temperature trace.", "z-10"],
              ["/media/app-devices.webp", "CNG-Protect app device list showing one vehicle online and one offline.", "hidden sm:block opacity-80 scale-95"],
            ].map(([src, alt, extra]) => (
              <div
                key={src}
                className={`relative w-36 shrink-0 overflow-hidden rounded-[1.75rem] border-4 border-navy-700 bg-black shadow-2xl shadow-black/60 sm:w-44 ${extra}`}
              >
                <img src={src} alt={alt} loading="lazy" width="620" height="1421" className="block w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
