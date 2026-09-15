// No whitespace-nowrap: a long label (the press proof button) would set a
// min-content width wider than a 320px phone and force the page to scroll.
const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg text-center font-semibold " +
  "tracking-tight transition-all duration-200 active:translate-y-px";

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

const VARIANTS = {
  primary:
    "bg-brand text-on-brand shadow-card hover:bg-brand-strong hover:shadow-lift hover:-translate-y-0.5",
  outline:
    "border border-line-strong bg-panel text-ink hover:border-brand hover:bg-brand-tint hover:-translate-y-0.5",
  ghost: "text-muted hover:text-ink",
};

export function Button({ as = "a", variant = "primary", size = "md", className = "", ...props }) {
  const Tag = as;
  return <Tag className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`} {...props} />;
}

/** Small uppercase eyebrow that labels each section. */
export function Eyebrow({ children, tone = "brand", className = "" }) {
  const tones = {
    brand: "border-brand/25 bg-brand-tint text-brand",
    data: "border-data/25 bg-data-tint text-data",
    danger: "border-danger/25 bg-danger-tint text-danger",
    warn: "border-warn/25 bg-warn-tint text-warn",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, tone, title, lede, align = "center", className = "" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lede && (
        <p className={`mt-5 text-pretty text-[1.05rem] leading-relaxed text-muted ${centered ? "mx-auto" : ""}`}>
          {lede}
        </p>
      )}
    </div>
  );
}

/** Section shell: consistent rhythm, id anchor and optional grid backdrop. */
export function Section({ id, children, className = "", grid = false }) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 sm:py-24 lg:py-28 ${className}`}>
      {grid && (
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
        />
      )}
      <div className="relative mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

/** Card surface used across feature, metric and profile grids. */
export function Card({ as = "div", className = "", hover = true, ...props }) {
  const Tag = as;
  return (
    <Tag
      className={`rounded-xl border border-line bg-panel shadow-card ${
        hover ? "transition-all duration-200 hover:border-line-strong hover:shadow-lift" : ""
      } ${className}`}
      {...props}
    />
  );
}
