/**
 * Technical illustration standing in for the product render: an IP65 edge node
 * clamped to a vehicle CNG cylinder, sensing methane, holding the fuel cut-off
 * relay, and streaming Ed25519-signed telemetry up to the safety appchain.
 */
export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 640 500"
      className="h-auto w-full"
      role="img"
      aria-label="An IP65 edge node mounted on a vehicle CNG cylinder, sensing methane, controlling a fuel cut-off valve, and streaming cryptographically signed telemetry to the blockchain."
    >
      <defs>
        <linearGradient id="hv-cyl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--dgm-fill-2)" />
          <stop offset="45%" stopColor="var(--dgm-fill)" />
          <stop offset="100%" stopColor="var(--dgm-fill-2)" />
        </linearGradient>
        <linearGradient id="hv-case" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--dgm-fill-2)" />
          <stop offset="100%" stopColor="var(--dgm-fill)" />
        </linearGradient>
        <linearGradient id="hv-block" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--data-tint)" />
          <stop offset="100%" stopColor="var(--dgm-fill)" />
        </linearGradient>
        <radialGradient id="hv-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--data)" stopOpacity="0.32" />
          <stop offset="100%" stopColor="var(--data)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hv-glow-o" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--warn)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--warn)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient glows */}
      <ellipse cx="240" cy="360" rx="220" ry="130" fill="url(#hv-glow-o)" />
      <ellipse cx="500" cy="130" rx="170" ry="120" fill="url(#hv-glow)" />

      {/* ---------------- appchain: stacked blocks ---------------- */}
      <g>
        {[0, 1, 2].map((i) => {
          const x = 434 + i * 54;
          const y = 128 - i * 30;
          return (
            <g key={i} opacity={0.55 + i * 0.22}>
              {/* isometric block */}
              <path d={`M${x} ${y} l34 -19 34 19 v38 l-34 19 -34 -19Z`} fill="url(#hv-block)" />
              <path d={`M${x} ${y} l34 -19 34 19 -34 19Z`} fill="var(--data-tint)" fillOpacity="0.85" />
              <path
                d={`M${x} ${y} l34 19 34 -19 M${x + 34} ${y + 19} v38`}
                stroke="var(--data)"
                strokeOpacity="0.5"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d={`M${x} ${y} l34 -19 34 19 v38 l-34 19 -34 -19Z`}
                fill="none"
                stroke="var(--data)"
                strokeOpacity="0.7"
                strokeWidth="1.4"
              />
            </g>
          );
        })}
        <text
          x="524"
          y="212"
          textAnchor="middle"
          className="fill-data font-mono text-[12px] tracking-[0.16em]"
        >
          BLOCKCHAIN
        </text>
        <text x="524" y="230" textAnchor="middle" className="fill-muted font-mono text-[10px]">
          block #2,194,887
        </text>
      </g>

      {/* ---------------- signed telemetry stream ---------------- */}
      {/* 4G whip on the enclosure shoulder — the stream leaves from its tip */}
      <g stroke="var(--dgm-line)" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M352 234v-18" />
      </g>
      <g stroke="var(--data)" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M343 209a13 13 0 0 1 18 0" strokeOpacity="0.55" />
        <path d="M336 200a23 23 0 0 1 32 0" strokeOpacity="0.3" />
      </g>

      <path
        d="M352 214 C 378 182, 398 140, 432 118"
        fill="none"
        stroke="var(--dgm-line-2)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M352 214 C 378 182, 398 140, 432 118"
        fill="none"
        stroke="var(--data)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="10 16"
        className="animate-flow"
      />
      {[0, 1, 2].map((i) => (
        <circle key={i} r="4" fill="var(--brand)" opacity="0">
          <animateMotion
            dur="3s"
            begin={`${i * 1}s`}
            repeatCount="indefinite"
            path="M352 214 C 378 182, 398 140, 432 118"
          />
          <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* signing attestation, tethered to the node */}
      <g>
        <path d="M258 216v18" stroke="var(--dgm-line-2)" strokeWidth="1.4" strokeDasharray="3 3" />
        <rect x="192" y="189" width="134" height="28" rx="6" fill="var(--dgm-fill)" stroke="var(--dgm-line-2)" />
        <text x="203" y="207" className="fill-brand font-mono text-[11.5px]">
          Ed25519 ✓ signed
        </text>
      </g>

      {/* ---------------- CNG cylinder ---------------- */}
      <g>
        <rect x="58" y="300" width="352" height="96" rx="48" fill="url(#hv-cyl)" stroke="var(--dgm-line)" strokeWidth="2" />
        {/* highlight */}
        <rect x="86" y="316" width="290" height="9" rx="4.5" fill="var(--canvas)" fillOpacity="0.6" />
        {/* band decals */}
        <g stroke="var(--dgm-line)" strokeWidth="1.6">
          <path d="M150 306v84M250 306v84M350 306v84" />
        </g>
        <g transform="translate(178 330)">
          <rect width="44" height="36" rx="5" fill="var(--dgm-fill)" stroke="var(--brand)" strokeOpacity="0.6" />
          <text x="22" y="23" textAnchor="middle" className="fill-brand font-mono text-[12px] font-bold">
            CNG
          </text>
        </g>
        {/* valve + cut-off relay on the neck */}
        <rect x="404" y="332" width="34" height="32" rx="4" fill="var(--dgm-fill)" stroke="var(--dgm-line)" strokeWidth="2" />
        <rect x="436" y="340" width="46" height="16" rx="3" fill="var(--dgm-fill)" stroke="var(--warn)" strokeWidth="1.6" />
        <text x="459" y="378" textAnchor="middle" className="fill-warn font-mono text-[11px]">
          CUT-OFF
        </text>
        <path d="M482 348h46" stroke="var(--warn)" strokeWidth="2" strokeDasharray="5 5" />
        <circle cx="536" cy="348" r="7" fill="none" stroke="var(--warn)" strokeWidth="2" />
        <text x="536" y="374" textAnchor="middle" className="fill-muted font-mono text-[9.5px]">
          ENGINE
        </text>
      </g>

      {/* mounting brackets */}
      <g fill="var(--dgm-fill)" stroke="var(--dgm-line)" strokeWidth="1.5">
        <rect x="216" y="290" width="14" height="22" rx="3" />
        <rect x="330" y="290" width="14" height="22" rx="3" />
      </g>

      {/* ---------------- IP65 edge node enclosure ---------------- */}
      <g>
        <rect x="200" y="234" width="176" height="62" rx="10" fill="url(#hv-case)" stroke="var(--dgm-line)" strokeWidth="2" />
        {/* lid seam + tamper microswitch loop */}
        <path d="M200 252h176" stroke="var(--dgm-line)" strokeWidth="1.5" strokeDasharray="4 4" />
        <g fill="var(--dgm-fill)" stroke="var(--dgm-line)" strokeWidth="1.2">
          <circle cx="210" cy="243" r="3" />
          <circle cx="366" cy="243" r="3" />
          <circle cx="210" cy="287" r="3" />
          <circle cx="366" cy="287" r="3" />
        </g>
        {/* status cluster */}
        <circle cx="224" cy="274" r="9" fill="var(--brand)" fillOpacity="0.18" className="animate-pulse-ring" />
        <circle cx="224" cy="274" r="4.5" fill="var(--brand)" />
        <text x="240" y="271" className="fill-ink font-mono text-[12px] font-bold tracking-wide">
          SAFE · 0% LEL
        </text>
        <text x="240" y="285" className="fill-muted font-mono text-[9px]">
          ESP32-S3 · 4G · IP65
        </text>
        <text x="322" y="248" className="fill-muted font-mono text-[9px] tracking-[0.12em]">
          NODE-017
        </text>
      </g>

      {/* NDIR sensing cone, sniffing the cylinder bay */}
      <g>
        <rect x="248" y="296" width="30" height="12" rx="2" fill="var(--dgm-fill)" stroke="var(--dgm-line)" strokeWidth="1.2" />
        <path d="M252 308 L236 336 H290 L274 308 Z" fill="var(--data)" fillOpacity="0.1" />
        <path d="M252 308 L236 336 M274 308 L290 336" stroke="var(--data)" strokeOpacity="0.45" strokeWidth="1.3" />
        <text x="263" y="352" textAnchor="middle" className="fill-data font-mono text-[9.5px]">
          NDIR
        </text>
      </g>

      {/* baseline */}
      <path d="M20 420h600" stroke="var(--dgm-line-2)" strokeWidth="2" />
      <g className="fill-muted font-mono text-[10px]">
        <text x="20" y="444">EDGE</text>
        <text x="320" y="444" textAnchor="middle">SIGN · 4G</text>
        <text x="620" y="444" textAnchor="end">IMMUTABLE AUDIT</text>
      </g>
      <g stroke="var(--dgm-line-2)" strokeWidth="1.5" strokeDasharray="3 5">
        <path d="M20 428v-8M320 428v-8M620 428v-8" />
      </g>
    </svg>
  );
}
