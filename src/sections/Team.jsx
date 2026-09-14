import { Card, Section, SectionHeading } from "../components/UI";

const TEAM = [
  {
    name: "Victor Ogbonna",
    role: "Founder & CEO",
    photo: "/media/team-victor.webp",
    body: "Sets the product thesis and carries the fleet, regulator and investor relationships.",
  },
  {
    name: "Stephanie Emezionye",
    role: "COO",
    photo: "/media/team-stephanie.webp",
    body: "Runs the install partner network, pilot logistics and conversion-centre operations.",
  },
  {
    name: "Theophilus Edafe",
    role: "CTO",
    photo: "/media/team-theophilus.webp",
    body: "Owns the signing pipeline, the blockchain integration and the insurance API.",
  },
];

export default function Team() {
  return (
    <Section id="team" className="border-y border-line bg-canvas-2">
      <SectionHeading
        eyebrow="Team"
        tone="brand"
        title="Engineers who have to drive on these roads too."
        lede="Hardware, firmware, operations and chain — assembled out of Lion Science Park at the University of Nigeria, Nsukka."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <Card as="article" key={m.name} className="group overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden bg-panel-2">
              <img
                src={m.photo}
                alt={`${m.name}, ${m.role} at CNG-Protect`}
                loading="lazy"
                width="560"
                height="560"
                className="size-full object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[1.05rem] font-semibold">{m.name}</h3>
              <p className="mt-1 font-mono text-[10.5px] tracking-[0.14em] text-brand uppercase">
                {m.role}
              </p>
              <p className="mt-3.5 text-[0.88rem] leading-relaxed text-muted">{m.body}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
