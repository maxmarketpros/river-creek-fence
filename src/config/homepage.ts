export const homepageContent = {
  hero: {
    heading: {
      main: "Fence Company in Haven, KS",
      location: "Serving Reno County & Central Kansas",
    },
    subtitle:
      "Residential, farm, ranch, and commercial fencing built by a Central Kansas crew with real farm experience. Free estimates, honest pricing, and a 5-year warranty.",
    primaryCta: { label: "Get a Free Quote", href: "/contact" },
    secondaryCta: { label: "Call (620) 899-5595", href: "tel:+16208995595" },
  },
  aboutPreview: {
    eyebrow: "About River Creek Fence",
    heading: "Built by Someone Who Knows Fences — and Farms",
    paragraph:
      "River Creek Fence started with one truck, one crew, and a simple idea: build fences correctly and let the work speak for itself. Owner Cody Yoder comes from a farm background, so he understands soil, livestock, and the way a fence really gets used out here. Most of our new customers still come from a neighbor passing along our number.",
    bullets: [
      {
        title: "Real Farm Experience",
        description:
          "We come from this work, so we build fencing that holds up on working farms, ranches, and acreages.",
      },
      {
        title: "Honest, Up-Front Pricing",
        description:
          "A clear written estimate before we start — no hidden fees and no pressure.",
      },
      {
        title: "Local to Central Kansas",
        description:
          "Based in Haven and serving Reno County, Hutchinson, Wichita, and the towns in between.",
      },
    ],
    image: "about-preview",
    badge: { value: "5.0★", label: "Google Rating" },
  },
  services: {
    eyebrow: "What We Do",
    heading: "Fencing for Homes, Farms, Ranches & Business",
    subtitle:
      "From a backyard privacy fence to miles of livestock fence, we build it right the first time.",
  },
  standards: {
    eyebrow: "Our Approach",
    heading: "Fences Built to Beat Kansas Weather",
    paragraphs: [
      "Out here a fence has to stand up to hard wind, ice storms, dry summers, and ground that shifts with every freeze and thaw. We account for all of it — setting posts deep, bracing corners and gates, and pulling every line tight so your fence stays straight for years, not months.",
      "The difference between a fence that lasts and one that leans is in the details most people never see. We get those details right on every job, whether it's a city backyard or a working pasture.",
    ],
    checklist: [
      "Posts set below the frost line in concrete",
      "Corners and gates braced against sag",
      "Tight, level lines on every run",
      "Materials chosen for your site and use",
      "Clean job sites, every single day",
      "Utility locates handled before we dig",
      "Final walkthrough with you before we leave",
      "Backed by a 5-year workmanship warranty",
    ],
    image: "standards-feature",
    badge: { value: "5-Year", label: "Warranty" },
  },
  process: {
    eyebrow: "How It Works",
    heading: "Getting a Fence Should Be Simple",
    subtitle:
      "From your first call to the final walkthrough, here's how we keep it easy.",
  },
  testimonials: {
    eyebrow: "Reviews",
    heading: "What Central Kansas Says About Us",
    subtitle:
      "A 5.0-star Google rating, built one satisfied neighbor at a time.",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Fence Questions, Answered",
    subtitle:
      "A few of the things Central Kansas property owners ask us most.",
  },
  cta: {
    heading: "Ready to Get Started on Your Fence?",
    text: "Call Cody for a free, no-pressure estimate — or send us your project details and we'll get right back to you.",
    primaryCta: { label: "Get a Free Quote", href: "/contact" },
    secondaryCta: { label: "Call (620) 899-5595", href: "tel:+16208995595" },
  },
} as const;
