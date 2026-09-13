const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight " +
  "transition-all duration-200 active:translate-y-px whitespace-nowrap";

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

const VARIANTS = {
  primary:
    "bg-safety-500 text-navy-950 shadow-lg shadow-safety-500/25 " +
    "hover:bg-safety-600 hover:shadow-safety-500/40 hover:-translate-y-0.5",
  outline:
    "border border-navy-500 bg-navy-800/60 text-white backdrop-blur " +
    "hover:border-cyan-flow/60 hover:bg-navy-700/80 hover:-translate-y-0.5",
  ghost: "text-slate-300 hover:text-white",
};

export function Button({ as = "a", variant = "primary", size = "md", className = "", ...props }) {
  const Tag = as;
  return <Tag className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`} {...props} />;
}

/** Small uppercase eyebrow that labels each section. */
export function Eyebrow({ children, tone = "cyan", className = "" }) {
  const tones = {
    cyan: "border-cyan-flow/30 bg-cyan-flow/10 text-cyan-flow",
    orange: "border-safety-500/30 bg-safety-500/10 text-safety-300",
    green: "border-green-safe/30 bg-green-safe/10 text-green-safe",
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
        <p className={`mt-5 text-pretty text-[1.05rem] leading-relaxed text-slate-400 ${centered ? "mx-auto" : ""}`}>
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
