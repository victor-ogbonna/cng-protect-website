import HeroVisual from "../components/HeroVisual";
import { Button, Eyebrow } from "../components/UI";

const PROOF = [
  ["< 50 ms", "fail-safe actuation"],
  ["NDIR", "optical methane sensing"],
  ["Ed25519", "signed at the edge"],
  ["Lisk", "immutable audit trail"],
];

export default function Hero() {
  return (
    <div id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-safety-500/8 blur-[120px]" />
        <div className="absolute top-24 -right-32 size-[34rem] rounded-full bg-cyan-flow/8 blur-[110px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Eyebrow tone="orange">
            <span className="size-1.5 rounded-full bg-safety-500" />
            DePIN safety infrastructure · Nigeria
          </Eyebrow>

          <h1 className="mt-6 text-[2.1rem] leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.4rem]">
            De-Risking the CNG Transition with{" "}
            <span className="text-safety-500">Edge-AI</span> &amp;{" "}
            <span className="text-cyan-flow">Decentralized Safety</span>.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-slate-400 sm:text-lg">
            CNG-Protect is a DePIN hardware fail-safe that autonomously prevents gas explosions and
            streams edge-signed safety telemetry to the Lisk blockchain for immutable fleet
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

          <dl className="mt-11 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-navy-700 pt-7 sm:grid-cols-4 sm:gap-x-4">
            {PROOF.map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-lg font-bold text-white sm:text-xl">{k}</dt>
                <dd className="mt-1 text-[0.8rem] leading-snug text-slate-400">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* product illustration */}
        <div className="relative">
          <div className="rounded-2xl border border-navy-600/80 bg-gradient-to-br from-navy-800/70 to-navy-900/70 p-3 shadow-2xl shadow-black/50 sm:p-5">
            <HeroVisual />
          </div>
          {/* The diagram's own labels are sub-legible on a phone, so the chain
              of events is restated in real type below it. */}
          <ul className="mt-3 grid grid-cols-3 gap-2 sm:hidden">
            {[
              ["Sense", "NDIR optical"],
              ["Cut off", "< 50 ms"],
              ["Sign", "→ Lisk"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="rounded-lg border border-navy-600 bg-navy-800/50 px-2 py-2 text-center"
              >
                <span className="block text-[11px] font-semibold text-white">{k}</span>
                <span className="block font-mono text-[10px] text-cyan-flow">{v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 hidden text-center font-mono text-[10.5px] tracking-wide text-slate-500 sm:block">
            EDGE NODE · CYLINDER BAY · SIGNED UPLINK
          </p>
        </div>
      </div>
    </div>
  );
}
