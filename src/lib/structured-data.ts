import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import type {
  ServiceConfig,
  FenceTypeConfig,
  CityPageConfig,
  FAQItem,
} from "@/types";

const businessId = `${siteConfig.url}/#business`;

function areaServed() {
  const cities = businessConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: `${area}, KS`,
  }));
  return [
    ...cities,
    { "@type": "AdministrativeArea", name: "Reno County, Kansas" },
    { "@type": "AdministrativeArea", name: "Central Kansas" },
  ];
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    additionalType: "https://www.productontology.org/id/Fence_contractor",
    "@id": businessId,
    name: siteConfig.name,
    legalName: "River Creek Fence LLC",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/images/logo.png`,
    priceRange: "$$",
    foundingDate: String(businessConfig.yearEstablished),
    founder: { "@type": "Person", name: businessConfig.ownerName },
    slogan: "Quality Fencing, Expert Installers, Trusted Service",
    knowsAbout: [
      "Fence installation",
      "Fence repair",
      "Ranch and farm fencing",
      "Privacy fencing",
      "Livestock fencing",
    ],
    paymentAccepted: businessConfig.paymentMethods.join(", "),
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.coordinates.lat,
      longitude: businessConfig.coordinates.lng,
    },
    hasMap: businessConfig.googleReviewUrl,
    openingHoursSpecification: businessConfig.hours.structured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: areaServed(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessConfig.rating.value,
      reviewCount: businessConfig.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": businessId },
    inLanguage: "en-US",
  };
}

export function generateServiceSchema(service: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    serviceType: service.title,
    provider: { "@id": businessId },
    areaServed: areaServed(),
    url: `${siteConfig.url}/services/${service.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Features`,
      itemListElement: service.features.map((feature, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: feature },
      })),
    },
  };
}

export function generateFenceTypeSchema(
  config: FenceTypeConfig,
  basePath = "fence-types",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.title,
    description: config.excerpt,
    serviceType: config.title,
    provider: { "@id": businessId },
    areaServed: areaServed(),
    url: `${siteConfig.url}/${basePath}/${config.slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: config.costSnapshot.range,
        priceCurrency: "USD",
        unitText: config.costSnapshot.unit,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${config.title} — Where It Fits`,
      itemListElement: config.useCases.items.map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: item.title },
      })),
    },
  };
}

/**
 * Per-city Service schema for a `/service-areas/<slug>` page. The provider is the
 * single global business `@id`; `areaServed` is the specific city with its own
 * geo coordinates so each page targets its town.
 */
export function generateCityServiceSchema(city: CityPageConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Fence Installation & Repair in ${city.name}, KS`,
    description: city.excerpt,
    serviceType: "Fence installation, repair, and replacement",
    provider: { "@id": businessId },
    areaServed: {
      "@type": "City",
      name: `${city.name}, KS`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${city.county}, Kansas`,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.lat,
        longitude: city.lng,
      },
    },
    url: `${siteConfig.url}/service-areas/${city.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Fence Services in ${city.name}, KS`,
      itemListElement: city.featuredServices.items.map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: item.title },
      })),
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface ReviewInput {
  name: string;
  rating: number;
  body: string;
  dateText?: string;
}

export function generateReviewSchema(reviews: ReviewInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": businessId,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessConfig.rating.value,
      reviewCount: businessConfig.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
      },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.body,
    })),
  };
}
