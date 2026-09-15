/**
 * One stroke-based icon set so every section speaks the same visual language.
 * All 24x24, inherit currentColor, and carry no fills — they read on light and
 * dark equally. Decorative by default; give the wrapper the label.
 */
const P = {
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Svg({ children, className = "size-5", width = 1.7 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      aria-hidden="true"
      {...P}
    >
      {children}
    </svg>
  );
}

/* ---------------- SDG ---------------- */

export const IconHealth = (p) => (
  <Svg {...p}>
    <path d="M20.3 5.7a5 5 0 0 0-7.1 0l-1.2 1.2-1.2-1.2a5 5 0 0 0-7.1 7.1l8.3 8.3 8.3-8.3a5 5 0 0 0 0-7.1Z" />
    <path d="M3.5 12.6h4l1.6-2.6 2 4.4 1.7-3 1.2 1.2h4.4" />
  </Svg>
);

export const IconEnergy = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
  </Svg>
);

export const IconIndustry = (p) => (
  <Svg {...p}>
    <rect x="8" y="8" width="8" height="8" rx="1.5" />
    <path d="M10 8V5M14 8V5M10 19v-3M14 19v-3M8 10H5M8 14H5M19 10h-3M19 14h-3" />
  </Svg>
);

export const IconCity = (p) => (
  <Svg {...p}>
    <rect x="2.5" y="5" width="13" height="10" rx="2" />
    <path d="M15.5 8h3l3 3.5V15h-6z" />
    <circle cx="6.5" cy="17.5" r="2" />
    <circle cx="17.5" cy="17.5" r="2" />
    <path d="M2.5 9.5h13" />
  </Svg>
);

export const IconClimate = (p) => (
  <Svg {...p}>
    <path d="M12 21c0-5 2-8 6-9-1 5-3 7-6 9Z" />
    <path d="M12 21c0-4-1.6-6.6-5-7.6.8 4.2 2.4 6 5 7.6Z" />
    <path d="M7.5 7.5a4.5 4.5 0 0 1 9 0" />
    <path d="M4.5 4.5a8 8 0 0 1 15 0" strokeOpacity="0.5" />
  </Svg>
);

/* ---------------- pipeline ---------------- */

export const IconSense = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M4 12h3M17 12h3" strokeDasharray="2 2.5" />
    <path d="M8.5 6.5a7 7 0 0 0 0 11M15.5 6.5a7 7 0 0 1 0 11" />
  </Svg>
);

export const IconSign = (p) => (
  <Svg {...p}>
    <rect x="4" y="10" width="16" height="10.5" rx="2.2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <path d="M9.5 15.3l1.8 1.8 3.4-3.6" />
  </Svg>
);

export const IconStream = (p) => (
  <Svg {...p}>
    <path d="M12 21v-9" />
    <path d="M8.2 9.4a5 5 0 0 1 7.6 0" />
    <path d="M5.4 6.2a9 9 0 0 1 13.2 0" strokeOpacity="0.55" />
    <circle cx="12" cy="11.6" r="1.2" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconSettle = (p) => (
  <Svg {...p}>
    <path d="M12 3l7.5 4.2v8.6L12 20l-7.5-4.2V7.2z" />
    <path d="M4.5 7.2 12 11.4l7.5-4.2M12 11.4V20" />
  </Svg>
);

/* ---------------- product / proof ---------------- */

export const IconBolt = (p) => (
  <Svg {...p}>
    <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-7.5Z" />
  </Svg>
);

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 2.8 20 6v6.4c0 4.6-3.2 8-8 9.8-4.8-1.8-8-5.2-8-9.8V6l8-3.2Z" />
    <path d="M8.8 12.2l2.2 2.2 4.2-4.4" />
  </Svg>
);

export const IconChart = (p) => (
  <Svg {...p}>
    <path d="M4 19.5V4.5M4 19.5h16" />
    <path d="M7.5 16l3.5-4.5 3 2.5 4.5-6.5" />
  </Svg>
);

export const IconDoc = (p) => (
  <Svg {...p}>
    <path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5Z" />
    <path d="M14 3.5v5h5M8.5 13h7M8.5 16.5h4.5" />
  </Svg>
);
