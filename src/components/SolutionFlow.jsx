/**
 * The obvious version of the pitch, animated: a tank being watched, a leak
 * crossing the line, the relay opening. Same hand-illustrated language as
 * HeroVisual — CSS-var colors so it themes for free, animate-flow / animateMotion
 * for the live signal.
 */
export default function SolutionFlow() {
  return (
    <svg
      viewBox="0 0 920 230"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: the edge node watches the cylinder and reads safe. A leak pushes the gas reading past the threshold line. The relay opens, the engine is starved of fuel, and an alert reaches the driver's phone — the whole chain closing in under fifty milliseconds."
    >
      <defs>
        <linearGradient id="sf-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--dgm-fill-2)" />
          <stop offset="100%" stopColor="var(--dgm-fill)" />
        </linearGradient>
        <radialGradient id="sf-glow-brand" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sf-glow-danger" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--danger)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--danger)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="120" rx="130" ry="95" fill="url(#sf-glow-brand)" />
      <ellipse cx="460" cy="120" rx="130" ry="95" fill="url(#sf-glow-danger)" />

      {/* connecting spine */}
      <path d="M120 190 H800" stroke="var(--dgm-line-2)" strokeWidth="1.5" strokeDasharray="2 6" />

      {/* ---------------- stage 1: watching ---------------- */}
      <g>
        <text x="150" y="26" textAnchor="middle" className="fill-brand font-mono text-[11px] tracking-[0.16em]">
          01 · WATCHING
        </text>

        {/* cylinder */}
        <rect x="70" y="84" width="140" height="40" rx="20" fill="url(#sf-fill)" stroke="var(--dgm-line)" strokeWidth="2" />
        <rect x="86" y="92" width="108" height="6" rx="3" fill="var(--canvas)" fillOpacity="0.55" />
        {/* node clamp */}
        <rect x="150" y="72" width="30" height="64" rx="6" fill="url(#sf-fill)" stroke="var(--brand)" strokeWidth="2" />
        <circle cx="165" cy="90" r="6" fill="var(--brand)" fillOpacity="0.18" className="animate-pulse-ring" />
        <circle cx="165" cy="90" r="2.6" fill="var(--brand)" />

        <circle cx="150" cy="190" r="16" fill="var(--dgm-fill)" stroke="var(--brand)" strokeWidth="1.6" />
        <text x="150" y="195" textAnchor="middle" className="fill-brand font-mono text-[10px] font-bold">
          OK
        </text>
        <text x="150" y="222" textAnchor="middle" className="fill-muted font-mono text-[9.5px]">
          0–660 ppm · SAFE
        </text>
      </g>

      {/* traveling pulse from stage 1 to stage 2 (safe interval, repeats) */}
      <circle r="3.5" fill="var(--brand)" opacity="0">
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M150 190 H460" />
        <animate attributeName="opacity" values="0;1;1;0" dur="2.6s" repeatCount="indefinite" />
      </circle>

      {/* ---------------- stage 2: leak crosses the line ---------------- */}
      <g>
        <text x="460" y="26" textAnchor="middle" className="fill-danger font-mono text-[11px] tracking-[0.16em]">
          02 · LEAK CROSSES THE LINE
        </text>

        {/* threshold */}
        <path d="M370 76 H550" stroke="var(--danger)" strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="4 4" />
        <text x="556" y="80" className="fill-danger font-mono text-[9px]">
          1100 ppm limit
        </text>

        {/* rising reading */}
        <path
          d="M410 138 C 424 120, 436 96, 452 78"
          fill="none"
          stroke="var(--danger)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="452" cy="78" r="4.5" fill="var(--danger)">
          <animate attributeName="r" values="4.5;6.5;4.5" dur="1s" repeatCount="indefinite" />
        </circle>

        <circle cx="460" cy="190" r="16" fill="var(--danger-tint)" stroke="var(--danger)" strokeWidth="1.6" />
        <text x="460" y="195" textAnchor="middle" className="fill-danger font-mono text-[9px] font-bold">
          !
        </text>
        <text x="460" y="222" textAnchor="middle" className="fill-muted font-mono text-[9.5px]">
          threshold breached
        </text>
      </g>

      {/* fast signal to stage 3 — the < 50ms cut, drawn quick and bright */}
      <path d="M460 190 H770" stroke="var(--warn)" strokeWidth="2" strokeDasharray="8 10" className="animate-flow" />

      {/* ---------------- stage 3: cut off ---------------- */}
      <g>
        <text x="770" y="26" textAnchor="middle" className="fill-ink font-mono text-[11px] tracking-[0.16em]">
          03 · GAS CUT · &lt; 50 MS
        </text>

        {/* relay, open */}
        <rect x="700" y="80" width="60" height="30" rx="5" fill="url(#sf-fill)" stroke="var(--warn)" strokeWidth="2" />
        <path d="M706 95h20M742 95h12" stroke="var(--warn)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="730" cy="95" r="3" fill="var(--canvas)" stroke="var(--warn)" strokeWidth="1.6" />

        {/* engine, starved */}
        <circle cx="820" cy="95" r="17" fill="var(--dgm-fill)" stroke="var(--dgm-line)" strokeWidth="1.6" />
        <path d="M812 87l16 16M828 87l-16 16" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" />

        <circle cx="770" cy="190" r="16" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="1.6" />
        <path d="M763 190l5 5 9-10" fill="none" stroke="var(--brand)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="770" y="222" textAnchor="middle" className="fill-muted font-mono text-[9.5px]">
          driver + network alerted
        </text>
      </g>
    </svg>
  );
}
