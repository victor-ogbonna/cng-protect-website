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
  "w-full rounded-lg border border-line-strong bg-canvas/70 px-3.5 py-2.5 text-[0.95rem] text-ink " +
  "placeholder:text-muted transition-colors focus:border-data focus:outline-none";

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
        <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas-2 to-canvas" />
        <div className="absolute -bottom-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-warn/10 blur-[120px]" />
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <Eyebrow tone="brand">Pilot access</Eyebrow>
          <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.6rem]">
            Put a signed safety record on your fleet.
          </h2>
          <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-muted">
            A 10-vehicle transit pilot is being fitted now. Tell us which side of the problem you
            sit on and we will send the brief and terms.
          </p>

          <ul className="mt-8 space-y-3.5">
            {[
              ["Fleets", "Nodes fitted and monitored on your route."],
              ["Conversion centres", "Install training and a certified upsell."],
              ["Underwriters", "Sandbox access to the risk API."],
            ].map(([who, what]) => (
              <li key={who} className="flex gap-3.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-warn" />
                <span className="text-[0.93rem] leading-relaxed text-body">
                  <span className="font-semibold text-ink">{who}:</span> {what}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-[11px] tracking-wide text-muted">
            Or email{" "}
            <a
              href="mailto:victorogbonna313@gmail.com?subject=CNG-Protect%20pilot%20access"
              className="text-data underline decoration-data/40 underline-offset-4 hover:decoration-data"
            >
              victorogbonna313@gmail.com
            </a>
          </p>
        </div>

        <div className="rounded-2xl border border-line-strong/80 bg-canvas-2/80 p-6 shadow-2xl shadow-black/40 backdrop-blur sm:p-8">
          {state === "done" ? (
            <div className="py-10 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full border border-brand/40 bg-brand/10">
                <svg viewBox="0 0 24 24" className="size-7 text-brand" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12.5 9 17.5 20 6.5" />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-bold">You're on the list.</h3>
              <p className="mx-auto mt-3 max-w-sm text-[0.93rem] leading-relaxed text-muted">
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
                  <span className="text-[11px] font-medium tracking-wide text-muted uppercase">
                    Name
                  </span>
                  <input name="name" required autoComplete="name" placeholder="Your name" className={FIELD} />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-medium tracking-wide text-muted uppercase">
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
                  <span className="text-[11px] font-medium tracking-wide text-muted uppercase">
                    Organisation
                  </span>
                  <input name="organisation" autoComplete="organization" placeholder="Company or depot" className={FIELD} />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-medium tracking-wide text-muted uppercase">
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
                <span className="text-[11px] font-medium tracking-wide text-muted uppercase">
                  Fleet size <span className="text-muted normal-case">(optional)</span>
                </span>
                <input name="fleet_size" inputMode="numeric" placeholder="e.g. 24 vehicles" className={FIELD} />
              </label>

              <label className="grid gap-1.5">
                <span className="text-[11px] font-medium tracking-wide text-muted uppercase">
                  What are you trying to solve?{" "}
                  <span className="text-muted normal-case">(optional)</span>
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
                <p role="alert" className="text-[0.85rem] leading-relaxed text-warn">
                  That didn't go through. Email{" "}
                  <a href="mailto:victorogbonna313@gmail.com" className="underline">
                    victorogbonna313@gmail.com
                  </a>{" "}
                  and we'll pick it up directly.
                </p>
              )}

              <p className="text-[11px] leading-relaxed text-muted">
                We use your details only to respond about the pilot. No list sharing, no newsletter.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
