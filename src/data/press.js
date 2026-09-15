/**
 * Coverage of the SEVCP winners announcement (all 29 May 2026).
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
    title: "Full List: The 25 Startups that Won the Southeast Venture Capital Program",
    url: "https://www.infoeast.ng/the-25-startups-that-won-the-southeast-venture-capital-program/",
    namesUs: true,
  },
  {
    outlet: "Akelicious",
    title: "SEDC Backs 25 Innovative Startups Across AI, Health, Fintech, Agriculture, Clean Energy",
    url: "https://www.akelicious.net/sedc-backs-25-innovative-startups-across-ai-health-fintech-agriculture-clean-energy/",
    namesUs: true,
  },
  {
    outlet: "BusinessDay",
    title: "South East Commission names 25 startup winners for $50m venture capital programme",
    url: "https://businessday.ng/news/article/south-east-commission-names-25-startup-winners-for-50m-venture-capital-programme/",
  },
  {
    outlet: "The Guardian Nigeria",
    title: "SEDC unveils winners of inaugural South East Venture Capital Programme",
    url: "https://guardian.ng/news/sedc-unveils-winners-of-inaugural-south-east-venture-capital-programme/",
  },
  {
    outlet: "Leadership",
    title: "25 Startups Emerge Winners Of SEDC Competition",
    url: "https://leadership.ng/25-startups-emerge-winners-of-sedc-competition/",
  },
  {
    outlet: "TVC News",
    title: "SEDC Announces Inaugural Winners Of Venture Capital Pitch Competition",
    url: "https://www.tvcnews.tv/sedc-announces-inaugural-winners-of-venture-capital-pitch-competition/",
  },
  {
    outlet: "MSME Africa",
    title: "SEDC Unveils 25 Startups Under Venture Capital Initiative",
    url: "https://msmeafricaonline.com/sedc-unveils-25-startups-under-venture-capital-initiative-to-boost-innovation-and-enterprise-growth/",
  },
];

/** The link an investor should click first — our name, in a published list. */
export const PROOF_LINK = PRESS.find((p) => p.namesUs);
