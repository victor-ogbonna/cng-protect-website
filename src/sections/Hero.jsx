import { Button, Eyebrow } from "../components/UI";

const PROOF = [
  ["< 50 ms", "fail-safe actuation"],
  ["NDIR", "optical methane sensing"],
  ["Ed25519", "signed at the edge"],
  ["On-chain", "immutable audit trail"],
];

export default function Hero() {
  return (
    <div id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-48 left-1/2 size-[52rem] -translate-x-1/2 rounded-full bg-brand/6 blur-[130px]" />
        <div className="absolute top-24 -right-40 size-[34rem] rounded-full bg-data/5 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Eyebrow tone="brand">
            <span className="size-1.5 rounded-full bg-brand" />
            DePIN safety infrastructure · Nigeria
          </Eyebrow>

          <h1 className="mt-6 text-[2.1rem] leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.4rem]">
            De-Risking the CNG Transition with{" "}
            <span className="text-brand">Edge-AI</span> &amp;{" "}
            <span className="text-data">Decentralized Safety</span>.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-muted sm:text-lg">
            CNG-Protect is a DePIN hardware fail-safe that autonomously prevents gas explosions and
            streams edge-signed safety telemetry to the blockchain for immutable fleet
            insurance audits.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#pilot" size="lg" className="w-full sm:w-auto">
              Join the Pilot Waitlist
              <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 10h11M11 5.5 15.5 10 11 14.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button href="#architecture" variant="outline" size="lg" className="w-full sm:w-auto">
              Read the Architecture
            </Button>
          </div>

          <dl className="mt-11 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-panel-2 pt-7 sm:grid-cols-4 sm:gap-x-4">
            {PROOF.map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-lg font-bold text-ink sm:text-xl">{k}</dt>
                <dd className="mt-1 text-[0.8rem] leading-snug text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* product visual */}
        <div className="relative">
          <figure className="overflow-hidden rounded-2xl border border-line bg-panel shadow-lift">
            <img
              src="/media/node-mounted.webp"
              alt="The CNG-Protect edge node clamped to a vehicle CNG fuel tank in a pickup bed, its status LEDs lit and braided cable runs leading away to the fuel cut-off."
              width="988"
              height="522"
              fetchPriority="high"
              className="block w-full"
            />
          </figure>
          {/* The node acts locally; the chain of events is spelled out in real
              type so the point survives on a phone. */}
          <ul className="mt-3 grid grid-cols-3 gap-2 sm:hidden">
            {[
              ["Sense", "NDIR optical"],
              ["Cut off", "< 50 ms"],
              ["Sign", "→ chain"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="rounded-lg border border-line bg-panel-2/50 px-2 py-2 text-center"
              >
                <span className="block text-[11px] font-semibold text-ink">{k}</span>
                <span className="block font-mono text-[10px] text-data">{v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 hidden text-center font-mono text-[10.5px] tracking-wide text-muted sm:block">
            EDGE NODE ON THE CYLINDER BAY · DESIGN VISUALISATION
          </p>
        </div>
      </div>
    </div>
  );
}
