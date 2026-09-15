import { IconSense, IconSettle, IconSign, IconStream } from "../components/Icons";
import { Button, Eyebrow } from "../components/UI";

const CHAIN = [
  { step: "01", Icon: IconSense, title: "Sense", body: "NDIR optics read the bay. No guesswork." },
  { step: "02", Icon: IconSign, title: "Sign", body: "An ATECC608 signs it. The key never leaves the chip." },
  { step: "03", Icon: IconStream, title: "Stream", body: "Out over 4G. Edit it and verification fails." },
  { step: "04", Icon: IconSettle, title: "Settle", body: "Append-only on chain. Audit without trusting us." },
];

const PRODUCTS = [
  {
    tag: "For fleet managers",
    price: "Per vehicle",
    unit: "annual licence",
    title: "Safety SaaS dashboard",
    body: "Live methane, temperature and cut-off state per node. Tamper and alarm alerts. Signature-verified incident export for regulators and courts.",
    tone: "cyan",
    bullets: ["Live fleet telemetry", "Tamper + alarm alerts", "Verified incident export"],
  },
  {
    tag: "For underwriters",
    price: "API",
    unit: "usage-based",
    title: "Insurance risk API",
    body: "Per-vehicle safety history from chain-anchored proofs. Price on observed behaviour instead of refusing the class. Re-rate monthly.",
    tone: "orange",
    bullets: ["Per-vehicle risk score", "Chain-anchored proofs", "Dynamic re-rating"],
  },
];

export default function Web3() {
  return (
    <section
      id="web3"
      className="relative overflow-hidden border-y border-panel-2 bg-canvas px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-24 left-1/3 size-[36rem] rounded-full bg-data/7 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <Eyebrow tone="data">Web3 &amp; software layer</Eyebrow>
          <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.75rem]">
            Solving the Oracle Problem with Edge-Signed Telemetry.
          </h2>
          <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-muted">
            An insurer's question is never "what does the dashboard say". It is "who could have
            edited this". So the hardware signs before anything touches a network.
          </p>
        </div>

        {/* pipeline */}
        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CHAIN.map(({ step, Icon, title, body }) => (
            <li
              key={step}
              className="group rounded-xl border border-line bg-panel p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-data/40 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-data-tint text-data transition-colors group-hover:bg-data group-hover:text-on-brand">
                  <Icon className="size-[22px]" />
                </span>
                <span className="font-mono text-[11px] font-bold text-line-strong transition-colors group-hover:text-data">
                  {step}
                </span>
              </div>
              <h3 className="mt-4 text-[1.05rem] font-semibold">{title}</h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>

        {/* live mockup */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="min-w-0">
            {/* The shipped console, not a mockup. */}
            <figure className="overflow-hidden rounded-2xl border border-line-strong bg-panel-2 shadow-lift">
              <img
                src="/media/app-live-dashboard.webp"
                alt="The CNG-Protect live system monitor: a node reporting SYSTEM SAFE with gas concentration at 655 ppm and temperature at 30.2 degrees, a 0 to 2000 ppm gas gauge banded safe, caution and danger, and a temperature history chart with a 40 degree limit line."
                loading="lazy"
                width="1400"
                height="900"
                className="block w-full"
              />
            </figure>
            <p className="mt-3 text-center font-mono text-[10.5px] tracking-wide text-muted">
              LIVE SYSTEM MONITOR · RUNNING BUILD
            </p>
          </div>

          <div className="grid gap-4">
            {PRODUCTS.map((p) => {
              const cyan = p.tone === "cyan";
              return (
                <article
                  key={p.title}
                  className={`rounded-xl border bg-canvas-2/70 p-6 ${
                    cyan ? "border-data/25" : "border-warn/25"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span
                      className={`font-mono text-[10px] tracking-[0.14em] uppercase ${
                        cyan ? "text-data" : "text-warn"
                      }`}
                    >
                      {p.tag}
                    </span>
                    <span className="font-mono text-[11px] tracking-wide text-muted">
                      {p.price} · {p.unit}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted">{p.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-md border border-line bg-panel-2/70 px-2.5 py-1 font-mono text-[10.5px] text-muted"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}

            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-panel-2/40 p-5">
              <p className="flex-1 text-[0.9rem] leading-relaxed text-muted">
                Underwriting CNG risk? We share the full schema and signing spec.
              </p>
              <Button href="#pilot" variant="outline" size="sm">
                Get the spec
              </Button>
            </div>
          </div>
        </div>

        {/* the shipped ledger — evidence, not a mockup */}
        <div className="mt-16 grid gap-8 rounded-2xl border border-line bg-panel p-6 shadow-card sm:p-9 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div>
            <Eyebrow tone="brand">Running today</Eyebrow>
            <h3 className="mt-5 text-2xl font-bold">
              Every reading already lands on chain.
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
              The build, not a diagram. Safe intervals write attestations. Breaches write hazard
              records. Both carry a hash anyone can resolve.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                ["Safe interval", "Signed attestation with gas and temperature."],
                ["Hazard event", "Written the moment the threshold is crossed."],
                ["Every entry", "Its own hash. Verified without asking us."],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-[0.9rem] leading-relaxed text-body">
                    <span className="font-semibold text-ink">{k}:</span> {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-line-strong bg-panel-2">
              <img
                src="/media/onchain-ledger.webp"
                alt="The CNG-Protect blockchain ledger screen, listing on-chain events: safe-driving reward attestations recording gas readings around 540 ppm at 28.8 degrees, and hazard records written at 4095 ppm, each with its own transaction hash."
                loading="lazy"
                width="1149"
                height="739"
                className="block w-full"
              />
            </div>
            <figcaption className="mt-3 text-center font-mono text-[10.5px] tracking-wide text-muted">
              ON-CHAIN EVENT LOG · TESTNET
            </figcaption>
          </figure>
        </div>

        {/* on every screen */}
        <div className="mt-16 grid gap-8 rounded-2xl border border-line bg-canvas-2/60 p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Eyebrow tone="brand">Shipping today</Eyebrow>
            <h3 className="mt-5 text-2xl font-bold">In the cab. At the depot. On chain.</h3>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
              The node acts alone. Everyone else just gets told.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                [IconSense, "Live gauge, SAFE or ELEVATED"],
                [IconStream, "Push alarm on threshold"],
                [IconSettle, "History against the chain record"],
                [IconSign, "Wallet + oracle in settings"],
              ].map(([Icon, t]) => (
                <li key={t} className="flex items-center gap-2.5 text-[0.88rem] leading-snug text-body">
                  <span className="grid size-7 shrink-0 place-items-center rounded-md bg-brand-tint text-brand">
                    <Icon className="size-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            {[
              ["/media/app-dashboard.webp", "CNG-Protect driver app showing a SAFE state with a methane gauge and cabin temperature trace.", "z-10"],
              ["/media/app-devices.webp", "CNG-Protect app device list showing one vehicle online and one offline.", "hidden sm:block opacity-80 scale-95"],
            ].map(([src, alt, extra]) => (
              <div
                key={src}
                className={`relative w-36 shrink-0 overflow-hidden rounded-[1.75rem] border-4 border-panel-2 bg-black shadow-lift sm:w-44 ${extra}`}
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
