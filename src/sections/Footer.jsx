import { Logo } from "../components/Brand";
import { Button } from "../components/UI";

const NAV = [
  {
    heading: "Product",
    links: [
      ["The Problem", "#problem"],
      ["Hardware", "#hardware"],
      ["Blockchain Audit", "#web3"],
      ["Architecture", "#architecture"],
    ],
  },
  {
    heading: "Company",
    links: [
      ["Traction", "#traction"],
      ["Team", "#team"],
      ["Pilot Access", "#pilot"],
      ["Ogbontor Engineering Enterprise", "#top"],
    ],
  },
];

const SOCIAL = [
  {
    label: "X",
    href: "https://x.com/cngprotect",
    path: "M3 3h4.2l4.5 6.1L16.6 3H21l-6.7 8.6L21.4 21H17l-4.8-6.4L6.9 21H3l7-8.9L3 3Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cng-protect",
    path: "M4.5 8.5h3.2V21H4.5V8.5Zm1.6-5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM10.4 8.5h3.1v1.7c.6-1 1.8-1.9 3.6-1.9 2.7 0 3.9 1.7 3.9 4.7V21h-3.2v-7c0-1.7-.6-2.6-2-2.6-1.2 0-2.1.8-2.1 2.6V21h-3.3V8.5Z",
  },
  {
    label: "GitHub",
    href: "https://github.com/cng-protect",
    path: "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-panel-2 bg-canvas px-5 pt-16 pb-10 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* understated closing CTA */}
        <div className="flex flex-col gap-5 rounded-2xl border border-line bg-canvas-2/70 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Partner with Us</h2>
            <p className="mt-2 max-w-xl text-[0.93rem] leading-relaxed text-muted">
              Conversion centres, fleet operators, underwriters and grant programmes — the safety
              layer works better the more of the corridor it covers.
            </p>
          </div>
          <Button href="#pilot" variant="outline" size="md" className="shrink-0 self-start sm:self-auto">
            Start a conversation
          </Button>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-9" />
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-muted">
              DePIN safety infrastructure for the CNG transition. Engineering safety, empowering
              mobility.
            </p>
          </div>

          {NAV.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="font-mono text-[10.5px] tracking-[0.16em] text-muted uppercase">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[0.9rem] text-muted transition-colors hover:text-ink"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-mono text-[10.5px] tracking-[0.16em] text-muted uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-[0.9rem] text-muted">
              <li>
                <a
                  href="mailto:victorogbonna313@gmail.com"
                  className="transition-colors hover:text-ink"
                >
                  victorogbonna313@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                Lion Science Park,
                <br />
                University of Nigeria, Nsukka
              </li>
            </ul>

            <ul className="mt-5 flex gap-2.5">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="grid size-9 place-items-center rounded-lg border border-line bg-panel-2/60 text-muted transition-colors hover:border-data/50 hover:text-ink"
                  >
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-panel-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-muted">
            © {new Date().getFullYear()} CNG-Protect. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted">
            Pilot-stage hardware. Specifications subject to change.
          </p>
        </div>

        <p className="mt-8 border-t border-line pt-6 text-center text-[0.9rem] font-semibold text-ink">
          Powered by Ogbontor Engineering Enterprise
        </p>
      </div>
    </footer>
  );
}
