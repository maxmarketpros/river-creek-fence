// ===== SITE CATALOG =====
// Single source of truth for every service-style page + city page.
// Drives navigation, footer, dynamic routes, and the sitemap.
// Core-service copy lives in services.ts (keyed by these same slugs).

export interface CatalogItem {
  slug: string;
  title: string;
}

export interface CityItem {
  slug: string;
  name: string;
  county: string;
}

export const coreServices: CatalogItem[] = [
  { slug: "fence-installation", title: "Fence Installation" },
  { slug: "fence-repair", title: "Fence Repair" },
  { slug: "fence-replacement", title: "Fence Replacement" },
  { slug: "residential-fence-installation", title: "Residential Fence Installation" },
  { slug: "commercial-fence-installation", title: "Commercial Fence Installation" },
  { slug: "farm-fence-installation", title: "Farm Fence Installation" },
  { slug: "ranch-fence-installation", title: "Ranch Fence Installation" },
  { slug: "agricultural-fence-installation", title: "Agricultural Fence Installation" },
  { slug: "privacy-fence-installation", title: "Privacy Fence Installation" },
  { slug: "security-fence-installation", title: "Security Fence Installation" },
  { slug: "custom-fence-installation", title: "Custom Fence Installation" },
  { slug: "gate-installation", title: "Gate Installation" },
  { slug: "driveway-gate-installation", title: "Driveway Gate Installation" },
  { slug: "fence-post-replacement", title: "Fence Post Replacement" },
  { slug: "storm-damaged-fence-repair", title: "Storm-Damaged Fence Repair" },
  { slug: "fence-removal", title: "Fence Removal" },
];

export const fenceTypes: CatalogItem[] = [
  { slug: "wood-fence-installation", title: "Wood Fence Installation" },
  { slug: "cedar-privacy-fence-installation", title: "Cedar Privacy Fence Installation" },
  { slug: "chain-link-fence-installation", title: "Chain Link Fence Installation" },
  { slug: "vinyl-fence-installation", title: "Vinyl Fence Installation" },
  { slug: "metal-fence-installation", title: "Metal Fence Installation" },
  { slug: "wrought-iron-fence-installation", title: "Wrought Iron Fence Installation" },
  { slug: "pipe-fence-installation", title: "Pipe Fence Installation" },
  { slug: "barbed-wire-fence-installation", title: "Barbed Wire Fence Installation" },
  { slug: "woven-wire-fence-installation", title: "Woven Wire Fence Installation" },
  { slug: "continuous-fence-installation", title: "Continuous Fence Installation" },
  { slug: "four-rail-horse-fence-installation", title: "Four-Rail Horse Fence Installation" },
  { slug: "wood-ranch-rail-fencing", title: "Wood Ranch Rail Fencing" },
  { slug: "split-rail-fence-installation", title: "Split Rail Fence Installation" },
  { slug: "field-fence-installation", title: "Field Fence Installation" },
  { slug: "no-climb-fence-installation", title: "No-Climb Fence Installation" },
  { slug: "decorative-fence-installation", title: "Decorative Fence Installation" },
];

export const propertyPages: CatalogItem[] = [
  { slug: "horse-fence-installation", title: "Horse Fence Installation" },
  { slug: "cattle-fence-installation", title: "Cattle Fence Installation" },
  { slug: "livestock-fence-installation", title: "Livestock Fence Installation" },
  { slug: "pasture-fence-installation", title: "Pasture Fence Installation" },
  { slug: "acreage-fence-installation", title: "Acreage Fence Installation" },
  { slug: "dog-fence-installation", title: "Dog Fence Installation" },
  { slug: "backyard-fence-installation", title: "Backyard Fence Installation" },
  { slug: "pool-fence-installation", title: "Pool Fence Installation" },
  { slug: "garden-fence-installation", title: "Garden Fence Installation" },
  { slug: "farm-gate-installation", title: "Farm Gate Installation" },
  { slug: "ranch-entry-gate-installation", title: "Ranch Entry Gate Installation" },
];

export const materials: CatalogItem[] = [
  { slug: "fence-materials-central-kansas", title: "Fence Materials in Central Kansas" },
  { slug: "farm-fence-supplies", title: "Farm Fence Supplies" },
  { slug: "ranch-fence-materials", title: "Ranch Fence Materials" },
  { slug: "gate-hardware-fence-accessories", title: "Gate Hardware & Fence Accessories" },
  { slug: "wood-fence-materials", title: "Wood Fence Materials" },
  { slug: "pipe-fence-materials", title: "Pipe Fence Materials" },
  { slug: "barbed-wire-woven-wire-materials", title: "Barbed Wire & Woven Wire Materials" },
];

export const cities: CityItem[] = [
  { slug: "haven-ks", name: "Haven", county: "Reno County" },
  { slug: "hutchinson-ks", name: "Hutchinson", county: "Reno County" },
  { slug: "south-hutchinson-ks", name: "South Hutchinson", county: "Reno County" },
  { slug: "buhler-ks", name: "Buhler", county: "Reno County" },
  { slug: "nickerson-ks", name: "Nickerson", county: "Reno County" },
  { slug: "yoder-ks", name: "Yoder", county: "Reno County" },
  { slug: "pretty-prairie-ks", name: "Pretty Prairie", county: "Reno County" },
  { slug: "partridge-ks", name: "Partridge", county: "Reno County" },
  { slug: "arlington-ks", name: "Arlington", county: "Reno County" },
  { slug: "plevna-ks", name: "Plevna", county: "Reno County" },
  { slug: "mount-hope-ks", name: "Mount Hope", county: "Sedgwick County" },
  { slug: "burrton-ks", name: "Burrton", county: "Harvey County" },
  { slug: "halstead-ks", name: "Halstead", county: "Harvey County" },
  { slug: "newton-ks", name: "Newton", county: "Harvey County" },
  { slug: "kingman-ks", name: "Kingman", county: "Kingman County" },
  { slug: "sterling-ks", name: "Sterling", county: "Rice County" },
  { slug: "lyons-ks", name: "Lyons", county: "Rice County" },
  { slug: "mcpherson-ks", name: "McPherson", county: "McPherson County" },
  { slug: "maize-ks", name: "Maize", county: "Sedgwick County" },
  { slug: "wichita-ks", name: "Wichita", county: "Sedgwick County" },
  { slug: "pratt-ks", name: "Pratt", county: "Pratt County" },
  { slug: "stafford-ks", name: "Stafford", county: "Stafford County" },
];

// URL helpers
export const servicesBase = "/services";
export const fenceTypesBase = "/fence-types";
export const propertyBase = "/property";
export const materialsBase = "/materials";
export const serviceAreasBase = "/service-areas";
