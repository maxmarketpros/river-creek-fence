import type { ImageSlotConfig } from "@/types";

// ===== IMAGE MANIFEST =====
// All stock photos live in /public/images/stock/<n>.jpg (1920x1080).
// Each page gets two keys: `${slug}-a` (primary / hero) and `${slug}-b` (secondary).
// Stock photos are mapped ~2 per page in the order provided by the client.
// `stock-<n>` keys expose every photo individually for the Project Gallery.

const W = 1920;
const H = 1080;

function img(n: number, alt: string, focalY = 0.5): ImageSlotConfig {
  return {
    src: `/images/stock/${n}.jpg`,
    alt,
    width: W,
    height: H,
    focalPoint: { x: 0.5, y: focalY },
  };
}

// [slug, imgA, imgB, altA, altB]
const pageImages: Array<[string, number, number, string, string]> = [
  // ----- Core service pages -----
  ["fence-installation", 1, 2, "New wood privacy fence professionally installed at a Haven, Kansas home", "River Creek Fence crew installing a new fence in Reno County, KS"],
  ["fence-repair", 3, 4, "Repaired wood fence section restored by River Creek Fence near Hutchinson, KS", "Fence repair fixing damaged pickets on a Central Kansas property"],
  ["fence-replacement", 5, 6, "Newly replaced fence line on a Central Kansas property", "Old fence replaced with a durable new fence in Reno County, KS"],
  ["residential-fence-installation", 7, 8, "Residential backyard fence installed in Hutchinson, Kansas", "New privacy fence around a Central Kansas family home"],
  ["commercial-fence-installation", 9, 10, "Commercial perimeter fence installed for a Central Kansas business", "Chain link security fencing around a commercial property in Reno County, KS"],
  ["farm-fence-installation", 11, 12, "Farm fencing installed across Kansas cropland", "Durable farm fence built for a working farm in Reno County, KS"],
  ["ranch-fence-installation", 13, 14, "Ranch rail fence stretching across Central Kansas pasture", "Timber ranch entry gate and fencing on a working ranch"],
  ["agricultural-fence-installation", 15, 16, "Agricultural fencing for livestock containment in Central Kansas", "Ag fence line installed on Kansas farmland"],
  ["privacy-fence-installation", 17, 18, "Cedar privacy fence installed at a Central Kansas home", "Tall wood privacy fence enclosing a backyard near Hutchinson, KS"],
  ["security-fence-installation", 19, 20, "Commercial security fence protecting a Central Kansas facility", "Heavy-duty security fencing installed in Reno County, KS"],
  ["custom-fence-installation", 21, 22, "Custom-designed fence built for a unique Central Kansas property", "Specialty custom fencing crafted by River Creek Fence"],
  ["gate-installation", 23, 24, "Custom fence gate installed in Central Kansas", "New gate hung on a residential fence in Reno County, KS"],
  ["driveway-gate-installation", 25, 26, "Driveway entry gate installed at a Central Kansas property", "Custom driveway gate built by River Creek Fence near Hutchinson, KS"],
  ["fence-post-replacement", 27, 28, "Replacement fence posts set on a Central Kansas property", "Rotted fence posts replaced by River Creek Fence in Reno County, KS"],
  ["storm-damaged-fence-repair", 29, 30, "Storm-damaged fence being repaired in Central Kansas", "Wind-damaged fence rebuilt after a Kansas storm"],
  ["fence-removal", 31, 32, "Old fence removal and haul-away in Central Kansas", "Fence tear-out and cleanup by River Creek Fence in Reno County, KS"],

  // ----- Fence type pages -----
  ["wood-fence-installation", 33, 34, "Wood fence installed at a Central Kansas home", "Solid wood fence built to handle Kansas weather"],
  ["cedar-privacy-fence-installation", 35, 36, "Cedar privacy fence installed in Reno County, KS", "Tight-board cedar privacy fence by River Creek Fence"],
  ["chain-link-fence-installation", 37, 38, "Chain link fence installed on a Central Kansas property", "Galvanized chain link fencing near Hutchinson, KS"],
  ["vinyl-fence-installation", 39, 40, "White vinyl privacy fence installed in Central Kansas", "Low-maintenance vinyl fence by River Creek Fence"],
  ["metal-fence-installation", 41, 42, "Ornamental metal fence installed at a Central Kansas property", "Powder-coated metal fencing in Reno County, KS"],
  ["wrought-iron-fence-installation", 43, 44, "Wrought iron fence installed in Central Kansas", "Decorative wrought iron fencing by River Creek Fence"],
  ["pipe-fence-installation", 45, 46, "Continuous pipe fence installed on a Kansas ranch", "Welded pipe fencing for livestock in Reno County, KS"],
  ["barbed-wire-fence-installation", 47, 48, "Barbed wire fence installed across Kansas pasture", "Multi-strand barbed wire fence for cattle in Central Kansas"],
  ["woven-wire-fence-installation", 49, 50, "Woven wire field fence installed on a Central Kansas farm", "Woven wire fencing for livestock by River Creek Fence"],
  ["continuous-fence-installation", 51, 52, "Continuous fence panels installed on a Kansas ranch", "Continuous steel fencing for cattle in Reno County, KS"],
  ["four-rail-horse-fence-installation", 53, 54, "Four-rail horse fence installed at a Central Kansas property", "Classic four-rail horse fencing by River Creek Fence"],
  ["wood-ranch-rail-fencing", 55, 56, "Wood ranch rail fence stretching across Kansas pasture", "Post-and-rail ranch fencing in Reno County, KS"],
  ["split-rail-fence-installation", 57, 58, "Split rail fence installed at a Central Kansas acreage", "Rustic split rail fencing by River Creek Fence"],
  ["field-fence-installation", 59, 60, "Field fence installed on a Central Kansas farm", "Game and field fencing in Reno County, KS"],
  ["no-climb-fence-installation", 61, 62, "No-climb horse fence installed in Central Kansas", "Safe no-climb mesh fencing for horses by River Creek Fence"],
  ["decorative-fence-installation", 63, 64, "Decorative accent fence installed at a Central Kansas home", "Ornamental decorative fencing in Reno County, KS"],

  // ----- Animal / property-specific pages -----
  ["horse-fence-installation", 65, 66, "Horse fence installed at a Central Kansas equine property", "Safe horse fencing built by River Creek Fence"],
  ["cattle-fence-installation", 67, 68, "Cattle fence installed across a Kansas pasture", "Sturdy cattle fencing in Reno County, KS"],
  ["livestock-fence-installation", 69, 70, "Livestock fence installed on a Central Kansas farm", "Durable livestock fencing by River Creek Fence"],
  ["pasture-fence-installation", 71, 72, "Pasture fence stretching across Central Kansas grassland", "Rotational pasture fencing in Reno County, KS"],
  ["acreage-fence-installation", 73, 74, "Acreage fence around a rural Central Kansas property", "Perimeter fencing for a Kansas acreage by River Creek Fence"],
  ["dog-fence-installation", 75, 76, "Backyard dog fence installed in Central Kansas", "Secure dog fencing to keep pets safe in Reno County, KS"],
  ["backyard-fence-installation", 77, 78, "Backyard fence installed at a Central Kansas home", "Private backyard fencing by River Creek Fence"],
  ["pool-fence-installation", 79, 80, "Code-compliant pool fence installed in Central Kansas", "Safety pool fencing in Reno County, KS"],
  ["garden-fence-installation", 81, 82, "Garden fence protecting a Central Kansas vegetable garden", "Decorative garden fencing by River Creek Fence"],
  ["farm-gate-installation", 83, 84, "Heavy-duty farm gate installed on a Kansas farm", "Tube farm gate hung by River Creek Fence in Reno County, KS"],
  ["ranch-entry-gate-installation", 85, 85, "Ranch entry gate marking the drive of a Central Kansas ranch", "Custom ranch entry gate built by River Creek Fence"],
];

export const imageManifest: Record<string, ImageSlotConfig> = {
  // ===== BRANDING =====
  logo: { src: "/images/logo.png", alt: "River Creek Fence logo", width: 500, height: 393 },
  "logo-white": { src: "/images/logo.png", alt: "River Creek Fence logo", width: 500, height: 393 },

  // ===== HOMEPAGE =====
  "hero-home": img(13, "Ranch rail fence stretching across Central Kansas farmland at golden hour", 0.5),
  "about-preview": img(17, "Cedar privacy fence and finished workmanship at a Central Kansas home", 0.45),
  "standards-feature": img(1, "Quality wood fence built to withstand Kansas wind and weather", 0.5),

  // ===== CONTACT / ABOUT / SHARED =====
  "about-hero": img(14, "River Creek Fence — ranch and residential fencing across Central Kansas", 0.5),
  "about-story": img(13, "Ranch fence line reflecting River Creek Fence's farm roots", 0.5),
  "about-team": img(11, "River Creek Fence at work on a Central Kansas farm fence", 0.5),
  "contact-hero": img(23, "Request a free fence estimate from River Creek Fence in Haven, KS", 0.5),
};

// Add per-page keys (-a primary/hero, -b secondary, -hero alias).
for (const [slug, a, b, altA, altB] of pageImages) {
  imageManifest[`${slug}-a`] = img(a, altA, 0.45);
  imageManifest[`${slug}-b`] = img(b, altB, 0.5);
  imageManifest[`${slug}-hero`] = img(a, altA, 0.45);
}

// Expose every stock photo individually for the Project Gallery.
for (let n = 1; n <= 85; n++) {
  imageManifest[`stock-${n}`] = img(
    n,
    `Fence project completed by River Creek Fence in Central Kansas (#${n})`,
  );
}
