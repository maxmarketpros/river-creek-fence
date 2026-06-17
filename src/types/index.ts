export interface ImageSlotConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: { x: number; y: number };
}

export interface ServiceSubTopic {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureHighlight {
  title: string;
  description: string;
  imageKey: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface ServiceTopicSection {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceSubTopic[];
}

export interface ServiceConfig {
  slug: string;
  title: string;
  /** H1 for the page — lets us reuse the exact legacy H1 on matching pages. */
  h1: string;
  /** Short summary — used for the hero subtitle + meta description. */
  excerpt: string;
  /** Lucide icon name. */
  icon: string;
  metaTitle: string;
  /** Overview section (image: `${slug}-b`). 2-3 paragraphs of unique copy. */
  overviewHeading: string;
  description: string[];
  /** Key benefits — exactly 4 cards. */
  benefitsHeading: string;
  benefitsSubtitle: string;
  benefits: BenefitItem[];
  /** Single image feature section (image: `${slug}-a`). */
  featureHeading: string;
  featureBody: string[];
  /** What's included checklist. */
  scopeHeading: string;
  scopeIntro?: string;
  features: string[];
  /** SEO topic grids — A has 6 cards, B has 4 cards. */
  topicSectionA: ServiceTopicSection;
  topicSectionB: ServiceTopicSection;
  /** Inline FAQs (5-6) — also emitted as FAQPage schema. */
  faqs: ServiceFAQ[];
  ctaHeading: string;
  ctaText: string;
  /** Internal links to 3-4 related pages. */
  related: RelatedLink[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

/** One at-a-glance spec shown in the fence-type SpecBar. */
export interface SpecItem {
  icon: string;
  /** Short label, e.g. "Lifespan". */
  label: string;
  /** Short value, e.g. "20–30 yrs". */
  value: string;
}

/** One numbered install step on a fence-type page. */
export interface BuildStep {
  title: string;
  description: string;
}

/** A "where this fence fits" card — links to a related service/property page. */
export interface UseCaseItem {
  title: string;
  description: string;
  icon: string;
  /** Optional internal link target — makes the whole card clickable. */
  href?: string;
}

export interface UseCaseSection {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: UseCaseItem[];
}

/** Per-material cost snapshot that links out to the full Cost Guide. */
export interface CostSnapshot {
  /** Installed price range, e.g. "$25–$45". */
  range: string;
  /** Unit + qualifier, e.g. "per linear foot, installed". */
  unit: string;
  /** 1–2 sentences on what the range covers. */
  summary: string;
  /** 3–4 factors that move the price. */
  factors: string[];
}

/**
 * Fence-type page config (`/fence-types/<slug>`). Richer than ServiceConfig:
 * adds a spec bar, pros/considerations, a per-type photo gallery, a cost
 * snapshot, and material-specific build steps. Rendered by
 * `src/pages/fence-types/[slug].astro`.
 */
export interface FenceTypeConfig {
  slug: string;
  title: string;
  /** H1 — Central-Kansas phrasing. */
  h1: string;
  metaTitle: string;
  /** Hero subtitle + meta description. */
  excerpt: string;
  /** Lucide icon name. */
  icon: string;
  overviewHeading: string;
  /** 3 paragraphs of unique copy (image: `${slug}-b`). */
  description: string[];
  /** Exactly 4 at-a-glance specs. */
  atAGlance: SpecItem[];
  prosConsHeading: string;
  /** 4–6 "great for" bullets. */
  pros: string[];
  /** 3–4 honest "things to know" bullets. */
  considerations: string[];
  /** Feature section (image: `${slug}-a`). 2 paragraphs. */
  featureHeading: string;
  featureBody: string[];
  /** "Where this fence fits" topic grid — 6 cards, each linking out. */
  useCases: UseCaseSection;
  /** Stock photo numbers for the per-type gallery (mapped pair first). */
  gallery?: number[];
  galleryHeading?: string;
  /** Per-material cost snapshot. */
  costSnapshot: CostSnapshot;
  buildStepsHeading: string;
  /** 3–4 material-specific install steps. */
  buildSteps: BuildStep[];
  /** Inline FAQs (5–6) — also emitted as FAQPage schema. */
  faqs: ServiceFAQ[];
  ctaHeading: string;
  ctaText: string;
  /** Internal links to 3–4 related pages. */
  related: RelatedLink[];
}

/**
 * Service-area / city landing page config (`/service-areas/<slug>`). A LOCATION
 * page (not a product page), so it carries local context, per-city map coords,
 * curated internal links, and town-specific FAQs. Rendered by
 * `src/pages/service-areas/[slug].astro`. Every page must be genuinely unique to
 * avoid doorway/thin-content penalties.
 */
export interface CityPageConfig {
  /** e.g. "yoder-ks" — matches catalog.cities. */
  slug: string;
  /** e.g. "Yoder". */
  name: string;
  /** e.g. "Reno County". */
  county: string;
  /** ~55–60 chars, ends "| River Creek Fence". */
  metaTitle: string;
  /** Unique per town (town + a fence keyword). */
  h1: string;
  /** Hero subtitle + meta description (mention free estimate / 5-yr warranty). */
  excerpt: string;
  /**
   * Unique per-town section <h2> headings. Each must be distinct across all city
   * pages (not "<thing> in {City}" with only the name swapped) so the set doesn't
   * read as templated/doorway content.
   */
  introHeading: string;
  contextHeading: string;
  processHeading: string;
  reviewsHeading: string;
  mapHeading: string;
  faqHeading: string;
  /** "stock-N" key chosen by town character. */
  heroImageKey: string;
  /** Per-city coordinates — drives the map + schema geo. */
  lat: number;
  lng: number;
  /** e.g. "about 12 miles southwest of Haven". */
  distanceFromHaven: string;
  /** 2–3 unique paragraphs — local overview (intro SplitSection). */
  intro: string[];
  /** Content image #1 ("stock-N") for the intro section. */
  introImageKey: string;
  /** 1–2 paragraphs — landmarks/character/what the town fences. */
  localContext: string[];
  /** Content image #2 ("stock-N") for the local-context section. */
  contextImageKey: string;
  /** 6 clickable cards → curated internal links for THIS town. */
  featuredServices: UseCaseSection;
  /** 4–6 town-specific FAQs (town name woven in) — also emitted as FAQPage schema. */
  localFaqs: ServiceFAQ[];
  /** 3–5 neighbor city pages (same county / nearest). */
  nearbyTowns: RelatedLink[];
  /** 4–6 fence types/property/services + cost guide / contact. */
  related: RelatedLink[];
  ctaHeading: string;
  ctaText: string;
}

export interface TestimonialItem {
  name: string;
  title: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavColumn {
  title: string;
  href?: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  /** Mega-menu columns (takes precedence over children when present) */
  columns?: NavColumn[];
}

export interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}
