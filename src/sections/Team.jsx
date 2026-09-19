import { Card, Section, SectionHeading } from "../components/UI";

/** Grounded in his CV — do not embellish these without a source. */
const FOUNDER = {
  name: "Victor Chinedu Ogbonna",
  role: "Founder & CEO",
  photo: "/media/team-victor.webp",
  linkedin: "https://www.linkedin.com/in/victor-ogbonna",
  credentials: [
    ["Full-stack embedded systems & robotics engineer", "Firmware to fail-safe"],
    ["IoT–Blockchain developer", "Edge signing to on-chain settlement"],
    ["Mechatronics engineer (in view)", "University of Nigeria, Nsukka"],
    ["Founder & CEO since 2018", "Ogbontor Engineering Enterprise"],
  ],
};

const TEAM = [
  {
    name: "Stephanie Emezionye",
    role: "COO",
    photo: "/media/team-stephanie.webp",
    body: "Runs the install partner network, pilot logistics and conversion-centre operations.",
  },
  {
    name: "Theophilus Edafe",
    role: "CTO · Mechanical Engineer",
    photo: "/media/team-theophilus.webp",
    body: "Mechanical engineer working across CAD and embedded systems — owns the enclosure design, the sensor mounting and the firmware it runs.",
  },
];

export default function Team() {
  return (
    <Section id="team" className="border-y border-line bg-canvas-2">
      <SectionHeading
        eyebrow="Team"
        tone="brand"
        title="Engineers who have to drive on these roads too."
        lede="Hardware, firmware, operations and chain — out of Lion Science Park, UNN."
      />

      {/* founder */}
      <Card hover={false} className="mt-14 grid gap-0 overflow-hidden lg:grid-cols-[0.8fr_1.4fr]">
        <figure className="relative min-h-72 bg-panel-2">
          <img
            src={FOUNDER.photo}
            alt={`${FOUNDER.name}, Founder and CEO of CNG-Protect`}
            loading="lazy"
            width="560"
            height="560"
            className="h-72 w-full object-cover object-[center_20%] sm:h-96 lg:absolute lg:inset-0 lg:h-full"
          />
        </figure>

        <div className="border-t border-line p-6 sm:p-8 lg:border-t-0 lg:border-l">
          <span className="font-mono text-[10px] tracking-[0.16em] text-brand uppercase">
            {FOUNDER.role}
          </span>
          <h3 className="mt-3 text-2xl font-bold sm:text-[1.7rem]">{FOUNDER.name}</h3>

          <div className="mt-5 space-y-3.5 text-[0.93rem] leading-relaxed text-body">
            <p>
              He came to CNG safety from under a vehicle, not a spreadsheet — sixteen months
              apprenticing at a mechanic's workshop in Enugu State before the B.Eng at Nsukka. He's
              run Ogbontor Engineering, his own hardware and embedded-systems firm, since 2018.
            </p>
            <p>
              He sets the product thesis, carries the fleet, regulator and underwriter
              relationships, and secured the $5,000 SEDC investment.
            </p>
          </div>

          <dl className="mt-7 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
            {FOUNDER.credentials.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.82rem] leading-snug font-semibold text-ink">{k}</dt>
                <dd className="mt-1 text-[0.78rem] leading-snug text-muted">{v}</dd>
              </div>
            ))}
          </dl>

          <a
            href={FOUNDER.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-brand hover:underline"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
              <path d="M4.5 8.5h3.2V21H4.5V8.5Zm1.6-5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM10.4 8.5h3.1v1.7c.6-1 1.8-1.9 3.6-1.9 2.7 0 3.9 1.7 3.9 4.7V21h-3.2v-7c0-1.7-.6-2.6-2-2.6-1.2 0-2.1.8-2.1 2.6V21h-3.3V8.5Z" />
            </svg>
            Victor on LinkedIn
          </a>
        </div>
      </Card>

      {/* the rest of the team */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {TEAM.map((m) => (
          <Card as="article" key={m.name} className="group flex gap-0 overflow-hidden sm:flex-row">
            <div className="relative w-32 shrink-0 overflow-hidden bg-panel-2 sm:w-40">
              <img
                src={m.photo}
                alt={`${m.name}, ${m.role} at CNG-Protect`}
                loading="lazy"
                width="560"
                height="560"
                className="absolute inset-0 size-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="min-w-0 flex-1 p-5 sm:p-6">
              <h3 className="text-[1.05rem] leading-snug font-semibold">{m.name}</h3>
              <p className="mt-1 font-mono text-[10px] tracking-[0.14em] text-brand uppercase">
                {m.role}
              </p>
              <p className="mt-3 text-[0.86rem] leading-relaxed text-muted">{m.body}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
