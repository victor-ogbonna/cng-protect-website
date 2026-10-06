import { IconBolt, IconSense, IconShield } from "../components/Icons";
import { Section, SectionHeading } from "../components/UI";

const STEPS = [
  {
    Icon: IconSense,
    tone: "brand",
    title: "Watch",
    body: "A sensor clamped straight to the cylinder bay reads gas concentration and temperature, every second the vehicle runs.",
  },
  {
    Icon: IconBolt,
    tone: "warn",
    title: "Decide",
    body: "No app, no cloud call. The threshold lives in the node itself, so it still catches a leak with the signal off.",
  },
  {
    Icon: IconShield,
    tone: "green",
    title: "Cut Off",
    body: "The relay starves the engine of gas in under 50 milliseconds, then tells the driver and the network what happened.",
  },
];

const TONES = {
  brand: { text: "text-brand", ring: "border-brand/25 bg-brand-tint" },
  warn: { text: "text-warn", ring: "border-warn/25 bg-warn-tint" },
  green: { text: "text-brand", ring: "border-brand/25 bg-brand-tint" },
};

export default function Solution() {
  return (
    <Section id="solution" className="border-y border-line bg-canvas-2">
      <SectionHeading
        eyebrow="The fix"
        tone="brand"
        title="One box on the cylinder. It watches, and it stops the gas before it explodes."
        lede="That's the whole idea. No app to open and no call to make — the node senses the leak and shuts the fuel off itself, then proves it happened."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {STEPS.map(({ Icon, tone, title, body }, i) => {
          const t = TONES[tone];
          return (
            <article
              key={title}
              className="group relative overflow-hidden rounded-xl border border-line bg-panel p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="flex items-center gap-3">
                <span className={`grid size-10 shrink-0 place-items-center rounded-lg border font-mono text-[11px] font-bold ${t.ring} ${t.text}`}>
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-[11px] font-bold text-line-strong">{`0${i + 1}`}</span>
                <h3 className="ml-auto text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">{body}</p>
            </article>
          );
        })}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-[1.05rem] leading-relaxed font-medium text-ink">
        That is the entire product: a sensor that watches, a relay that decides, and a chain record
        that proves it — no one has to be in the loop for it to work.
      </p>
    </Section>
  );
}
