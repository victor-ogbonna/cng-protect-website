/**
 * Coverage of the SEVCP winners announcement (all 29 May 2026).
 *
 * `mark` + `face` render a typographic plate standing in for the outlet's
 * logo. To use a real logo instead, drop an SVG at
 * `public/media/press/<slug>.svg` — PressLogo picks it up automatically.
 *
 * `namesUs: true` means the article's published list was checked and contains
 * "CNG Protect" verbatim — those are the two an investor can click to verify
 * the SEDC selection without taking our word for it. The rest reported the
 * same announcement. Do not promote anything to `namesUs` without re-reading
 * the article first.
 */
export const PRESS = [
  {
    outlet: "InfoEast",
    slug: "infoeast",
    mark: "IE",
    face: "font-serif tracking-tight",
    url: "https://www.infoeast.ng/the-25-startups-that-won-the-southeast-venture-capital-program/",
    namesUs: true,
  },
  {
    outlet: "Akelicious",
    slug: "akelicious",
    mark: "A",
    face: "font-sans font-black tracking-tighter",
    url: "https://www.akelicious.net/sedc-backs-25-innovative-startups-across-ai-health-fintech-agriculture-clean-energy/",
    namesUs: true,
  },
  {
    outlet: "BusinessDay",
    slug: "businessday",
    mark: "BD",
    face: "font-serif tracking-tight",
    url: "https://businessday.ng/news/article/south-east-commission-names-25-startup-winners-for-50m-venture-capital-programme/",
  },
  {
    outlet: "The Guardian",
    slug: "guardian",
    mark: "G",
    face: "font-serif italic",
    url: "https://guardian.ng/news/sedc-unveils-winners-of-inaugural-south-east-venture-capital-programme/",
  },
  {
    outlet: "Leadership",
    slug: "leadership",
    mark: "L",
    face: "font-serif tracking-wide",
    url: "https://leadership.ng/25-startups-emerge-winners-of-sedc-competition/",
  },
  {
    outlet: "TVC News",
    slug: "tvc",
    mark: "TVC",
    face: "font-sans font-extrabold tracking-tighter",
    url: "https://www.tvcnews.tv/sedc-announces-inaugural-winners-of-venture-capital-pitch-competition/",
  },
  {
    outlet: "MSME Africa",
    slug: "msme",
    mark: "M",
    face: "font-sans font-bold tracking-tight",
    url: "https://msmeafricaonline.com/sedc-unveils-25-startups-under-venture-capital-initiative-to-boost-innovation-and-enterprise-growth/",
  },
];

/** The link an investor should click first — our name, in a published list. */
export const PROOF_LINK = PRESS.find((p) => p.namesUs);
