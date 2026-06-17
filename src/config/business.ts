export const businessConfig = {
  phone: "(620) 899-5595",
  phoneRaw: "+16208995595",
  email: "codeyoder@icloud.com",
  ownerName: "Cody Yoder",

  address: {
    // Service-area business — no public street address.
    street: "",
    city: "Haven",
    state: "KS",
    zip: "67543",
    full: "Haven, KS 67543",
  },

  hours: {
    display: "Open Daily · 8 AM – 6 PM",
    short: "Open 7 days a week, 8 AM – 6 PM",
    structured: [
      {
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  },

  // Positioning line — replaces the old "Wichita, KS and surrounding areas".
  positioningLine:
    "Located in Haven, KS — serving Reno County, Wichita, Hutchinson, and Central Kansas communities.",

  // ===== TRUST FACTS =====
  yearEstablished: 2019,
  yearsExperience: "5+",
  warrantyYears: 5,
  rating: { value: "5.0", count: 17 },
  googleReviewUrl: "https://maps.app.goo.gl/AHTaffhixGmUVW5J6",

  // ===== PAYMENTS =====
  paymentMethods: [
    "Cash",
    "Check",
    "Visa",
    "Mastercard",
    "American Express",
    "Discover",
    "Financing available",
  ],

  // ===== SERVICE AREAS =====
  // Primary list — used in footer + LocalBusiness schema areaServed.
  serviceAreas: [
    "Haven",
    "Hutchinson",
    "South Hutchinson",
    "Buhler",
    "Nickerson",
    "Yoder",
    "Pretty Prairie",
    "Partridge",
    "Arlington",
    "Plevna",
    "Mount Hope",
    "Burrton",
    "Halstead",
    "Newton",
    "Kingman",
    "Sterling",
    "Lyons",
    "McPherson",
    "Maize",
    "Wichita",
    "Pratt",
    "Stafford",
  ],

  // Expanded list for the Service Areas section — each links to its page.
  serviceAreaCities: [
    { name: "Haven", href: "/service-areas/haven-ks" },
    { name: "Hutchinson", href: "/service-areas/hutchinson-ks" },
    { name: "South Hutchinson", href: "/service-areas/south-hutchinson-ks" },
    { name: "Buhler", href: "/service-areas/buhler-ks" },
    { name: "Nickerson", href: "/service-areas/nickerson-ks" },
    { name: "Yoder", href: "/service-areas/yoder-ks" },
    { name: "Pretty Prairie", href: "/service-areas/pretty-prairie-ks" },
    { name: "Partridge", href: "/service-areas/partridge-ks" },
    { name: "Arlington", href: "/service-areas/arlington-ks" },
    { name: "Plevna", href: "/service-areas/plevna-ks" },
    { name: "Mount Hope", href: "/service-areas/mount-hope-ks" },
    { name: "Burrton", href: "/service-areas/burrton-ks" },
    { name: "Halstead", href: "/service-areas/halstead-ks" },
    { name: "Newton", href: "/service-areas/newton-ks" },
    { name: "Kingman", href: "/service-areas/kingman-ks" },
    { name: "Sterling", href: "/service-areas/sterling-ks" },
    { name: "Lyons", href: "/service-areas/lyons-ks" },
    { name: "McPherson", href: "/service-areas/mcpherson-ks" },
    { name: "Maize", href: "/service-areas/maize-ks" },
    { name: "Wichita", href: "/service-areas/wichita-ks" },
    { name: "Pratt", href: "/service-areas/pratt-ks" },
    { name: "Stafford", href: "/service-areas/stafford-ks" },
  ],

  serviceAreasHeading: "Serving Reno County & Central Kansas",
  serviceAreasSubtitle:
    "Based in Haven and working throughout Hutchinson, Wichita, Newton, McPherson, and the small towns in between.",

  // ===== MAP EMBED ===== (River Creek Fence LLC — Google Business Profile)
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403536.74662575894!2d-97.5594215!3d37.7986905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947f84e6f34a78d%3A0xb168aaf107f186b9!2sRiver%20Creek%20Fence%20LLC!5e0!3m2!1sen!2sus!4v1781710604333!5m2!1sen!2sus",

  // ===== FORM EMBED ===== (GoHighLevel / LeadConnector)
  formEmbedUrl: "https://api.leadconnectorhq.com/widget/form/owDLf1RM9julZuk5cMfJ",
  formEmbedId: "inline-owDLf1RM9julZuk5cMfJ",
  formEmbedHeight: "720px",

  coordinates: { lat: 37.8997, lng: -97.7817 },
} as const;

// Helper: returns the map embed URL — Google Business embed if set, otherwise a generic city map
export function getMapEmbedUrl(): string {
  if (businessConfig.googleBusinessMapEmbed) {
    return businessConfig.googleBusinessMapEmbed;
  }
  const { city, state } = businessConfig.address;
  return `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(`${city}, ${state}`)}`;
}
