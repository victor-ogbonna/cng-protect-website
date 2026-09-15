import { useEffect, useState } from "react";
import { Logo } from "../components/Brand";
import ThemeToggle from "../components/ThemeToggle";
import { Button } from "../components/UI";

const LINKS = [
  { href: "#impact", label: "Impact" },
  { href: "#problem", label: "The Problem" },
  { href: "#hardware", label: "Hardware" },
  { href: "#web3", label: "Blockchain Audit" },
  { href: "#traction", label: "Traction" },
  { href: "#team", label: "Team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-canvas/90 shadow-card backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="shrink-0" aria-label="CNG-Protect home">
          <Logo className="h-8 sm:h-9" />
        </a>

        <nav aria-label="Primary" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-panel-2 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visibility lives on the wrapper: the Button sets its own display. */}
        <div className="ml-auto hidden items-center gap-2 lg:ml-4 lg:flex">
          <ThemeToggle />
          <Button href="#pilot" size="sm">
            Request Pilot Access
          </Button>
        </div>

        <ThemeToggle className="ml-auto lg:hidden" />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-panel text-ink lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-canvas px-5 pt-2 pb-6 shadow-lift lg:hidden"
      >
        <ul className="divide-y divide-line">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-[0.95rem] font-medium text-body"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button href="#pilot" onClick={() => setOpen(false)} className="mt-5 w-full" size="lg">
          Request Pilot Access
        </Button>
      </div>
    </header>
  );
}
