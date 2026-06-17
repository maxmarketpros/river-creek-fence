import type { NavItem, FooterGroup, NavLink } from "@/types";
import {
  coreServices,
  fenceTypes,
  propertyPages,
  materials,
  cities,
  servicesBase,
  fenceTypesBase,
  propertyBase,
  materialsBase,
  serviceAreasBase,
} from "@/config/catalog";

// Lightweight slug → lucide icon-name maps (strings only — no heavy config
// imports, so the Header island bundle stays small).
const coreServiceIcons: Record<string, string> = {
  "fence-installation": "Hammer",
  "fence-repair": "Wrench",
  "fence-replacement": "RefreshCw",
  "residential-fence-installation": "Home",
  "commercial-fence-installation": "Building2",
  "farm-fence-installation": "Tractor",
  "ranch-fence-installation": "Fence",
  "agricultural-fence-installation": "Wheat",
  "privacy-fence-installation": "ShieldCheck",
  "security-fence-installation": "Lock",
  "custom-fence-installation": "PenTool",
  "gate-installation": "DoorOpen",
  "driveway-gate-installation": "DoorOpen",
  "fence-post-replacement": "Construction",
  "storm-damaged-fence-repair": "CloudLightning",
  "fence-removal": "Trash2",
};

const fenceTypeIcons: Record<string, string> = {
  "wood-fence-installation": "Fence",
  "cedar-privacy-fence-installation": "TreePine",
  "chain-link-fence-installation": "Grid3x3",
  "vinyl-fence-installation": "PanelsTopLeft",
  "metal-fence-installation": "Fence",
  "wrought-iron-fence-installation": "Crown",
  "pipe-fence-installation": "CircleDashed",
  "barbed-wire-fence-installation": "Fence",
  "woven-wire-fence-installation": "Grid2x2",
  "continuous-fence-installation": "RectangleHorizontal",
  "four-rail-horse-fence-installation": "Fence",
  "wood-ranch-rail-fencing": "Fence",
  "split-rail-fence-installation": "Trees",
  "field-fence-installation": "Wheat",
  "no-climb-fence-installation": "ShieldCheck",
  "decorative-fence-installation": "Sparkles",
};

const propertyIcons: Record<string, string> = {
  "horse-fence-installation": "Fence",
  "cattle-fence-installation": "Tractor",
  "livestock-fence-installation": "Tractor",
  "pasture-fence-installation": "Wheat",
  "acreage-fence-installation": "Tractor",
  "dog-fence-installation": "Dog",
  "backyard-fence-installation": "Home",
  "pool-fence-installation": "Waves",
  "garden-fence-installation": "Sprout",
  "farm-gate-installation": "Tractor",
  "ranch-entry-gate-installation": "DoorOpen",
};

const materialsIcons: Record<string, string> = {
  "fence-materials-central-kansas": "Package",
  "farm-fence-supplies": "Package",
  "ranch-fence-materials": "Tractor",
  "gate-hardware-fence-accessories": "Wrench",
  "wood-fence-materials": "TreePine",
  "pipe-fence-materials": "CircleDashed",
  "barbed-wire-woven-wire-materials": "Grid3x3",
};

// Nav-only label tidy-ups for the two longest material titles.
const labelOverrides: Record<string, string> = {
  "gate-hardware-fence-accessories": "Gate Hardware",
  "barbed-wire-woven-wire-materials": "Barbed & Woven Wire",
};

/** Drop a trailing "Installation"/"Fencing" for shorter nav labels. */
const shorten = (title: string): string =>
  title.replace(/\s+(Installation|Fencing)$/, "");

interface LinkOpts {
  icons?: Record<string, string>;
  shorten?: boolean;
}

const toLinks = (
  items: { slug: string; title: string }[],
  base: string,
  opts: LinkOpts = {},
): NavLink[] =>
  items.map((i) => ({
    label: opts.shorten
      ? (labelOverrides[i.slug] ?? shorten(i.title))
      : i.title,
    href: `${base}/${i.slug}`,
    icon: opts.icons?.[i.slug],
  }));

const cityLinks = (filter: (c: (typeof cities)[number]) => boolean): NavLink[] =>
  cities
    .filter(filter)
    .map((c) => ({
      label: c.name,
      href: `${serviceAreasBase}/${c.slug}`,
      icon: "MapPin",
    }));

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fence Visualizer", href: "/fence-visualizer" },
  {
    label: "Services",
    href: "/services",
    megaVariant: "services",
    columns: [
      { title: "Core Services", href: "/services", icon: "Wrench", links: toLinks(coreServices, servicesBase, { icons: coreServiceIcons }) },
      { title: "Fence Types", href: "/services", icon: "Fence", links: toLinks(fenceTypes, fenceTypesBase, { icons: fenceTypeIcons, shorten: true }) },
      { title: "Property & Animal", href: "/services", icon: "Dog", links: toLinks(propertyPages, propertyBase, { icons: propertyIcons, shorten: true }) },
      { title: "Fence Materials", href: "/services", icon: "Package", links: toLinks(materials, materialsBase, { icons: materialsIcons, shorten: true }) },
    ],
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    megaVariant: "areas",
    columns: [
      { title: "Reno County", href: "/service-areas", icon: "MapPin", links: cityLinks((c) => c.county === "Reno County") },
      { title: "Greater Wichita & Central KS", href: "/service-areas", icon: "MapPin", links: cityLinks((c) => c.county !== "Reno County") },
    ],
  },
  {
    label: "Resources",
    href: "/fence-cost-guide",
    children: [
      { label: "Fence Cost Guide", href: "/fence-cost-guide", icon: "Calculator" },
      { label: "Financing & Payments", href: "/fence-financing", icon: "CreditCard" },
      { label: "Fence Maintenance Guide", href: "/fence-maintenance-guide", icon: "Wrench" },
      { label: "Fence FAQ", href: "/fence-faq", icon: "HelpCircle" },
      { label: "Reviews", href: "/reviews", icon: "Star" },
      { label: "Project Gallery", href: "/gallery", icon: "Images" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Core Services",
    links: toLinks(coreServices, servicesBase),
  },
  {
    title: "Fence Types",
    links: toLinks(fenceTypes, fenceTypesBase),
  },
  {
    title: "Property & Ranch",
    links: [
      ...toLinks(propertyPages, propertyBase),
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About River Creek", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Project Gallery", href: "/gallery" },
      { label: "Fence Visualizer", href: "/fence-visualizer" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Fence Cost Guide", href: "/fence-cost-guide" },
      { label: "Financing & Payments", href: "/fence-financing" },
      { label: "Fence Maintenance Guide", href: "/fence-maintenance-guide" },
      { label: "Fence FAQ", href: "/fence-faq" },
      { label: "Fence Materials", href: "/materials/fence-materials-central-kansas" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
