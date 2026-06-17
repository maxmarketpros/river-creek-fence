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

const toLinks = (items: { slug: string; title: string }[], base: string): NavLink[] =>
  items.map((i) => ({ label: i.title, href: `${base}/${i.slug}` }));

const cityLinks = (filter: (c: (typeof cities)[number]) => boolean): NavLink[] =>
  cities
    .filter(filter)
    .map((c) => ({ label: c.name, href: `${serviceAreasBase}/${c.slug}` }));

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    columns: [
      { title: "Core Services", href: "/services", links: toLinks(coreServices, servicesBase) },
      { title: "Fence Types", href: "/services", links: toLinks(fenceTypes, fenceTypesBase) },
      { title: "Property & Animal", href: "/services", links: toLinks(propertyPages, propertyBase) },
      { title: "Fence Materials", href: "/services", links: toLinks(materials, materialsBase) },
    ],
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    columns: [
      { title: "Reno County", href: "/service-areas", links: cityLinks((c) => c.county === "Reno County") },
      { title: "Greater Wichita & Central KS", href: "/service-areas", links: cityLinks((c) => c.county !== "Reno County") },
    ],
  },
  {
    label: "Resources",
    href: "/fence-cost-guide",
    children: [
      { label: "Fence Cost Guide", href: "/fence-cost-guide" },
      { label: "Financing & Payments", href: "/fence-financing" },
      { label: "Fence Maintenance Guide", href: "/fence-maintenance-guide" },
      { label: "Fence FAQ", href: "/fence-faq" },
      { label: "Reviews", href: "/reviews" },
      { label: "Project Gallery", href: "/gallery" },
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
