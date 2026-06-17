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
