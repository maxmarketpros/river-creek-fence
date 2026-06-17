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
  ["chain-link-fence-installation", 37, 48, "Chain link fence installed on a Central Kansas property", "Galvanized chain link fencing near Hutchinson, KS"],
  ["vinyl-fence-installation", 39, 38, "White vinyl privacy fence installed in Central Kansas", "Low-maintenance white vinyl fence by River Creek Fence"],
  ["metal-fence-installation", 41, 42, "Ornamental metal fence installed at a Central Kansas property", "Powder-coated metal fencing in Reno County, KS"],
  ["wrought-iron-fence-installation", 43, 62, "Wrought iron fence installed in Central Kansas", "Decorative wrought iron fencing by River Creek Fence"],
  ["pipe-fence-installation", 45, 44, "Steel pipe rail fence installed on a Kansas ranch", "Welded pipe fence rail for livestock in Reno County, KS"],
  ["barbed-wire-fence-installation", 46, 72, "Barbed wire fence installed across Kansas pasture", "Multi-strand barbed wire fence along Central Kansas acreage"],
  ["woven-wire-fence-installation", 67, 69, "Woven wire fence holding cattle on a Central Kansas farm", "Woven wire mesh fencing for livestock by River Creek Fence"],
  ["continuous-fence-installation", 51, 52, "Continuous fence panels installed on a Kansas ranch", "Continuous steel fencing for cattle in Reno County, KS"],
  ["four-rail-horse-fence-installation", 53, 54, "Four-rail horse fence installed at a Central Kansas property", "Classic four-rail horse fencing by River Creek Fence"],
  ["wood-ranch-rail-fencing", 55, 56, "Wood ranch rail fence stretching across Kansas pasture", "Post-and-rail ranch fencing in Reno County, KS"],
  ["split-rail-fence-installation", 57, 58, "Split rail fence installed at a Central Kansas acreage", "Rustic split rail fencing by River Creek Fence"],
  ["field-fence-installation", 68, 66, "Field fence holding goats on a Central Kansas farm", "Field fencing for livestock in Reno County, KS"],
  ["no-climb-fence-installation", 69, 65, "No-climb woven mesh horse fence in Central Kansas", "Horse safely behind no-climb fencing on a Reno County, KS property"],
  ["decorative-fence-installation", 63, 42, "Decorative ornamental iron fence at a Central Kansas home", "Ornamental decorative fencing in Reno County, KS"],

  // ----- Animal / property-specific pages -----
  ["horse-fence-installation", 65, 64, "Horse fence installed at a Central Kansas equine property", "Two horses grazing along a wood post-and-rail horse fence in Central Kansas"],
  ["cattle-fence-installation", 67, 66, "Cattle fence installed across a Kansas pasture", "Cattle behind a multi-strand barbed wire fence on a Reno County, KS pasture"],
  ["livestock-fence-installation", 69, 68, "Livestock fence installed on a Central Kansas farm", "Goats contained by a woven-wire field fence on a Central Kansas farm"],
  ["pasture-fence-installation", 71, 72, "Pasture fence stretching across Central Kansas grassland", "Rotational pasture fencing in Reno County, KS"],
  ["acreage-fence-installation", 73, 74, "Acreage fence around a rural Central Kansas property", "Perimeter fencing for a Kansas acreage by River Creek Fence"],
  ["dog-fence-installation", 75, 76, "Backyard dog fence installed in Central Kansas", "Secure dog fencing to keep pets safe in Reno County, KS"],
  ["backyard-fence-installation", 77, 33, "Backyard fence installed at a Central Kansas home", "Wood privacy fence enclosing a backyard at a Central Kansas home"],
  ["pool-fence-installation", 79, 80, "Code-compliant pool fence installed in Central Kansas", "Safety pool fencing in Reno County, KS"],
  ["garden-fence-installation", 81, 8, "Garden fence protecting a Central Kansas vegetable garden", "White picket garden fence at a Central Kansas home"],
  ["farm-gate-installation", 83, 84, "Heavy-duty farm gate installed on a Kansas farm", "Tube farm gate hung by River Creek Fence in Reno County, KS"],
  ["ranch-entry-gate-installation", 85, 84, "Ranch entry gate marking the drive of a Central Kansas ranch", "Rustic timber ranch entry gate at the drive of a Central Kansas ranch"],

  // ----- Fence materials pages -----
  ["fence-materials-central-kansas", 1, 33, "Quality fence materials and lumber for Central Kansas projects", "Wood fencing materials supplied by River Creek Fence in Reno County, KS"],
  ["farm-fence-supplies", 46, 67, "Barbed wire and farm fencing supplies for Central Kansas farms", "Woven wire and livestock fence supplies in Reno County, KS"],
  ["ranch-fence-materials", 55, 44, "Wood post-and-rail ranch fencing materials in Central Kansas", "Steel pipe and ranch fence materials supplied by River Creek Fence"],
  ["gate-hardware-fence-accessories", 23, 25, "Gate hardware and fence accessories for Central Kansas projects", "Heavy-duty gate hinges, latches, and entry-gate accessories in Reno County, KS"],
  ["wood-fence-materials", 33, 35, "Cedar and treated wood fence materials for Central Kansas homes", "Quality cedar privacy fence lumber and pickets supplied in Reno County, KS"],
  ["pipe-fence-materials", 44, 52, "Welded steel pipe fence rail and joint supplied by River Creek Fence", "Black pipe-style rail fence on a Central Kansas horse ranch"],
  ["barbed-wire-woven-wire-materials", 46, 67, "Barbed wire fencing materials for Central Kansas farms and ranches", "Woven wire and field fence rolls supplied in Reno County, KS"],
];

export const imageManifest: Record<string, ImageSlotConfig> = {
  // ===== BRANDING =====
  logo: { src: "/images/logo.png", alt: "River Creek Fence logo", width: 500, height: 393 },
  "logo-white": { src: "/images/logo.png", alt: "River Creek Fence logo", width: 500, height: 393 },

  // ===== HOMEPAGE =====
  "hero-home": img(63, "Decorative ornamental iron fence at a Central Kansas home", 0.5),
  "about-preview": img(38, "White vinyl fence and finished workmanship at a Central Kansas home", 0.45),
  "standards-feature": img(53, "Four-rail horse fence built to withstand Kansas wind and weather", 0.5),

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
