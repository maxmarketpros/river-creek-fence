import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site.ts";

export default defineConfig({
  site: siteConfig.url,
  output: "static",
  // "ignore" so the site's no-trailing-slash internal links (href="/about")
  // resolve without a 404/redirect. Canonicals are still normalized to the
  // trailing-slash form (see src/lib/metadata.ts) so they match the sitemap
  // and the directory URL Netlify serves — no duplicate-content ambiguity.
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [
    react(),
    sitemap({
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === "/") return { ...item, priority: 1.0, changefreq: "weekly" };
        if (path.startsWith("/services/") && path !== "/services/") {
          return { ...item, priority: 0.9 };
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
