import { siteConfig } from "@/config/site";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogTitle: string;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage,
}: PageMetadataOptions): PageMeta {
  // Canonical must match the trailing-slash form the sitemap and Netlify serve
  // (directory build → /about/). Normalize to exactly one trailing slash so the
  // canonical never points at a URL that 301-redirects.
  const normalizedPath = !path || path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  const canonical = `${siteConfig.url}${normalizedPath}`;
  return {
    title,
    description,
    canonical,
    ogImage: ogImage || siteConfig.ogImage,
    ogTitle: `${title} | ${siteConfig.name}`,
  };
}
