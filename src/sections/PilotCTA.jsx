import { useState } from "react";
import { Button, Eyebrow } from "../components/UI";

const ROLES = [
  "Fleet operator",
  "CNG conversion centre",
  "Insurer / underwriter",
  "Investor",
  "Regulator / government",
  "Other",
];

const FIELD =
  "w-full rounded-lg border border-navy-500 bg-navy-950/70 px-3.5 py-2.5 text-[0.95rem] text-white " +
  "placeholder:text-slate-500 transition-colors focus:border-cyan-flow focus:outline-none";

/**
 * Posts to Netlify Forms. The matching static form lives in index.html so
 * Netlify's build-time crawler can register it — a client-rendered form alone
 * is invisible to it. Swap the fetch target if you move to another backend.
 */
export default function PilotCTA() {
  const [state, setState] = useState("idle"); // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set("form-name", "pilot-access");
    setState("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section
      id="pilot"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute -bottom-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-safety-500/10 blur-[120px]" />
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <Eyebrow tone="orange">Pilot access</Eyebrow>
          <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.6rem]">
            Put a signed safety record on your fleet.
          </h2>
          <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-slate-400">
            We are fitting a 10-vehicle commercial transit pilot and onboarding conversion centres
            as install partners. Tell us which side of the problem you sit on and we will send the
            architecture brief and pilot terms.
          </p>

          <ul className="mt-8 space-y-3.5">
            {[
              ["Fleets", "Nodes fitted and monitored on your route, with incident export."],
              ["Conversion centres", "Install training and a safety-certified upsell per conversion."],
              ["Underwriters", "Sandbox access to the risk API and the signing spec."],
            ].map(([who, what]) => (
              <li key={who} className="flex gap-3.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-safety-500" />
                <span className="text-[0.93rem] leading-relaxed text-slate-300">
                  <span className="font-semibold text-white">{who}:</span> {what}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-[11px] tracking-wide text-slate-400">
            Or email{" "}
            <a
              href="mailto:victorogbonna313@gmail.com?subject=CNG-Protect%20pilot%20access"
              className="text-cyan-flow underline decoration-cyan-flow/40 underline-offset-4 hover:decoration-cyan-flow"
            >
              victorogbonna313@gmail.com
            </a>
          </p>
        </div>

        <div className="rounded-2xl border border-navy-500/80 bg-navy-900/80 p-6 shadow-2xl shadow-black/40 backdrop-blur sm:p-8">
          {state === "done" ? (
            <div className="py-10 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full border border-green-safe/40 bg-green-safe/10">
                <svg viewBox="0 0 24 24" className="size-7 text-green-safe" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12.5 9 17.5 20 6.5" />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-bold">You're on the list.</h3>
              <p className="mx-auto mt-3 max-w-sm text-[0.93rem] leading-relaxed text-slate-400">
                We'll reply from victorogbonna313@gmail.com with the architecture brief and the
                next available pilot slot.
              </p>
            </div>
          ) : (
            <form
              name="pilot-access"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="grid gap-4"
            >
              <input type="hidden" name="form-name" value="pilot-access" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase">
                    Name
                  </span>
                  <input name="name" required autoComplete="name" placeholder="Your name" className={FIELD} />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase">
                    Work email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={FIELD}
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase">
                    Organisation
                  </span>
                  <input name="organisation" autoComplete="organization" placeholder="Company or depot" className={FIELD} />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase">
                    I am a
                  </span>
                  <select name="role" defaultValue={ROLES[0]} className={FIELD}>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-1.5">
                <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase">
                  Fleet size <span className="text-slate-500 normal-case">(optional)</span>
                </span>
                <input name="fleet_size" inputMode="numeric" placeholder="e.g. 24 vehicles" className={FIELD} />
              </label>

              <label className="grid gap-1.5">
                <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase">
                  What are you trying to solve?{" "}
                  <span className="text-slate-500 normal-case">(optional)</span>
                </span>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Routes, conversion volume, or the underwriting question you're stuck on."
                  className={`${FIELD} resize-y`}
                />
              </label>

              <Button as="button" type="submit" size="lg" disabled={state === "sending"} className="mt-1 w-full disabled:opacity-60">
                {state === "sending" ? "Sending…" : "Request Pilot Access"}
              </Button>

              {state === "error" && (
                <p role="alert" className="text-[0.85rem] leading-relaxed text-safety-300">
                  That didn't go through. Email{" "}
                  <a href="mailto:victorogbonna313@gmail.com" className="underline">
                    victorogbonna313@gmail.com
                  </a>{" "}
                  and we'll pick it up directly.
                </p>
              )}

              <p className="text-[11px] leading-relaxed text-slate-500">
                We use your details only to respond about the pilot. No list sharing, no newsletter.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
