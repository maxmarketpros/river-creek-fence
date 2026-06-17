# River Creek Fence — Build Notes & Conventions

Handoff/context doc for continuing the build (next up: **fence-type pages**). Everything here reflects how the site was built so new pages match the existing 16 core service pages + 10 main pages exactly.

---

## 1. Project snapshot

- **Stack:** Astro 5 (static, `output: "static"`), Tailwind v4 (`@tailwindcss/vite`), React islands (`@astrojs/react`) for Header + FAQ accordion, `lucide-react` icons, `@astrojs/sitemap`.
- **Host:** Netlify, same domain as old site (`rivercreekfenceks.com`). Repo: `git@github.com:maxmarketpros/river-creek-fence.git` (branch `main`).
- **Build:** `npm run build` → `dist/` (currently 84 pages, clean). Dev: `npm run dev` (launch.json name `astro-dev`, port **4321**).
- **Done:** 10 main pages + 16 core service pages + **16 fence-type pages** + **11 property/animal pages** + **7 materials pages** (full unique copy). Remaining "coming soon" shells: cities 22 — indexable, in sitemap/nav/footer.
- **Next:** flesh out the **22 city pages** (`/service-areas/<city>-ks`) — still ComingSoon shells.
- **Fence-type, property, and materials pages all share the same NEW richer layout** (`FenceTypeConfig` + the section components), NOT the core-service layout. See §11 for that system. Property/materials were built per §11 with the image decision "hero reuses the feature photo + 2 content images, no galleries"; materials pages reframe the cost/build sections as material price / "how we supply." `generateFenceTypeSchema(config, basePath)` takes `"fence-types" | "property" | "materials"`.

---

## 2. Business info (single source: `src/config/business.ts` + `src/config/site.ts`)

- **Name:** River Creek Fence LLC · **Owner:** Cody Yoder (real hands-on farm background — central trust angle)
- **Phone:** (620) 899-5595 · raw `+16208995595`
- **Email:** codeyoder@icloud.com
- **Address:** Haven, KS 67543 (service-area business, **no street address**). Coords 37.8997, -97.7817.
- **Hours:** Open daily 8 AM–6 PM (`Mo-Su 08:00-18:00`)
- **Rating:** 5.0★ on Google (display rating only, **no count**). GMB / write-review URL: `https://maps.app.goo.gl/AHTaffhixGmUVW5J6`
- **Trust facts to feature:** 5-Year Warranty · 5+ Years Experience · Free Estimates
- **Payments:** cash, check, all major cards, **plus financing / payment plans** for big jobs
- **Positioning line:** "Located in Haven, KS — serving Reno County, Wichita, Hutchinson, and Central Kansas communities."
- **Embeds:** GHL form `https://api.leadconnectorhq.com/widget/form/owDLf1RM9julZuk5cMfJ` (id `inline-owDLf1RM9julZuk5cMfJ`); Google map embed for "River Creek Fence LLC" (in business.ts `googleBusinessMapEmbed`).
- **Social:** Google (GMB), Facebook (`/people/Rivercreek-Fence/61583242478907/`), Yelp (`rivercreek-fence-haven`), HomeAdvisor (`rated.rivercreekfence.145551851.html`). Footer renders these via Google favicon API `https://www.google.com/s2/favicons?domain=<domain>&sz=64`.

---

## 3. Brand & theme (`src/styles/globals.css` + `src/config/theme.ts`)

- **Accent:** lime `#A5C021` = `--color-primary-500`. Green ramp 50→900 (700 `#5f7016` / 800 `#47540f` are the AA-safe greens for **text on white**).
- **Black accents:** `--color-foreground: #0a0a0a`. Light backgrounds (`#ffffff` / surface `#f7f8f3`).
- **CRITICAL contrast rule:** white text on lime FAILS WCAG. So **lime fills always use BLACK text** (buttons: `bg-primary-500 text-black`). Green *text on white* uses `primary-700/800`. Section eyebrows use `bg-primary-100 text-primary-800`. Dark sections (CTA, ServiceScopeSection, StatsRow `primary`) use `bg-foreground` (black) + white text + lime accents.
- **Nav (`Header.tsx`):** transparent gradient over hero → **solid black (`bg-black`) on scroll**. White nav text, lime hover, lime "Get a Free Quote" button. Logo = `/images/logo-transparent.png`.
- **Footer (`Footer.astro`):** black (`bg-black`), white text, lime hovers, transparent logo, social icons, embedded map, full link columns.
- **Logos:** `public/images/logo.png` (black bg original) and `public/images/logo-transparent.png` (transparent — used in nav/footer). Favicons + `images/og-image.jpg` generated from logo.

---

## 4. Architecture & key files

- **`src/config/catalog.ts`** — single source of truth: `coreServices` (16), `fenceTypes` (16), `propertyPages` (11), `materials` (7), `cities` (22), each `{slug, title}` (cities also `county`). Drives nav, footer, routes, sitemap. URL bases exported: `servicesBase` `/services`, `fenceTypesBase` `/fence-types`, `propertyBase` `/property`, `materialsBase` `/materials`, `serviceAreasBase` `/service-areas`.
- **`src/config/navigation.ts`** — mega-menu (Services column = Core/Types/Property/Materials) + footer groups, derived from catalog. **No change needed** for fence-type build (already links to `/fence-types/<slug>`).
- **`src/config/images.ts`** — image manifest. Plain `<img>` via `ImageSlot.astro` (NOT astro:assets — do not import images). All stock photos live at `/public/images/stock/<n>.jpg`, **1920×1080**. Keys already generated for every page: `${slug}-a`, `${slug}-b`, `${slug}-hero`, plus `stock-1..85`. **Fence-type keys already exist** — just reference them.
- **`src/lib/structured-data.ts`** — `generateLocalBusinessSchema` (GeneralContractor + aggregateRating), `generateServiceSchema`, `generateBreadcrumbSchema`, `generateFAQSchema`, `generateReviewSchema`.
- **`src/lib/metadata.ts`** — `generatePageMetadata({title, description, path})`.
- **Reusable sections (props):** `PageHero` (heading, subtitle, imageKey, breadcrumbs[], primaryCta, secondaryCta) · `SplitSection` (imageKey, imagePosition, imageAspect, bgColor, badge) · `BenefitGrid` (benefits[], eyebrow, heading, subtitle, bgColor) · `TopicCardGrid` (eyebrow, heading, subtitle, items[], bgColor) · `ServiceScopeSection` (items[], heading, subtitle — renders on **black** bg) · `FAQSection` (items[] of {id,question,answer} OR faqKeys[], emits FAQ schema) · `CTASection` (heading, text, primaryCta, secondaryCta — black bg) · `QuoteSection` (the GHL form) · `SectionHeading` (eyebrow, heading, subtitle, align, light).

---

## 5. Stock image ordering (THE mapping)

Stock photos are ordered ~**2 per page** in the page sequence the client provided. Fence-type pages map to images **33–64**. The manifest already wires these as `${slug}-a` (first #) and `${slug}-b` (second #); `${slug}-hero` = the first #.

| Fence Type (slug) | img A (`-a`/`-hero`) | img B (`-b`) |
|---|---|---|
| wood-fence-installation | 33 | 34 |
| cedar-privacy-fence-installation | 35 | 36 |
| chain-link-fence-installation | 37 | 38 |
| vinyl-fence-installation | 39 | 40 |
| metal-fence-installation | 41 | 42 |
| wrought-iron-fence-installation | 43 | 44 |
| pipe-fence-installation | 45 | 46 |
| barbed-wire-fence-installation | 47 | 48 |
| woven-wire-fence-installation | 49 | 50 |
| continuous-fence-installation | 51 | 52 |
| four-rail-horse-fence-installation | 53 | 54 |
| wood-ranch-rail-fencing | 55 | 56 |
| split-rail-fence-installation | 57 | 58 |
| field-fence-installation | 59 | 60 |
| no-climb-fence-installation | 61 | 62 |
| decorative-fence-installation | 63 | 64 |

**2-images-per-page rule (not counting hero):** the page shows the 2 mapped photos. Convention used on core service pages:
- **Hero** background = `${slug}-hero` (= img A)
- **Overview** SplitSection image = `${slug}-b` (img B) — content image #1
- **Feature** SplitSection image = `${slug}-a` (img A again) — content image #2
So img A appears in the hero + the lower feature section, img B in the overview. (Only 2 unique photos per page exist, so the hero reuses A. This is intentional and looks fine because the hero is a dark-overlaid banner.)

For reference: core services used images 1–32; property/animal pages use 65–85; ranch-entry-gate (#85) is a single image.

---

## 6. `ServiceConfig` shape (`src/types/index.ts`) + reference files

Fence-type pages should reuse the **same `ServiceConfig` type** as core services. Gold-standard example to mirror: **`src/config/services/fence-installation.ts`** (hand-written). All 16 core configs live in `src/config/services/<slug>.ts`, aggregated in `src/config/services.ts`.

Fields (all required unless noted): `slug`, `title`, `h1`, `metaTitle`, `excerpt`, `icon` (lucide name), `overviewHeading`, `description` (3 paras), `benefitsHeading`, `benefitsSubtitle`, `benefits` (**4**, each {title, description, icon}), `featureHeading`, `featureBody` (2 paras), `scopeHeading`, `scopeIntro?`, `features` (7–8 strings), `topicSectionA` {eyebrow, heading, subtitle, items: **6**}, `topicSectionB` {eyebrow, heading, subtitle, items: **4**}, `faqs` (**5–6** {question, answer}), `ctaHeading`, `ctaText`, `related` (3–4 {label, href}).

**Page layout** is defined in `src/pages/services/[slug].astro` (mirror it for fence types): PageHero → Overview SplitSection (`-b`) → BenefitGrid → TopicCardGrid A → Feature SplitSection (`-a`) → ServiceScopeSection → TopicCardGrid B → FAQSection (inline faqs) → related-links pills → CTASection → QuoteSection. Emits Service + Breadcrumb (+ FAQ) JSON-LD.

---

## 7. How to promote the 16 fence-type shells to full pages

Recommended approach (matches the services pattern):
1. Create `src/config/fence-types/<slug>.ts` for each of the 16, each `export default` a `ServiceConfig`. Image keys are auto (`${slug}-a/-b/-hero`) — already in the manifest.
2. Create an aggregator `src/config/fence-types.ts` exporting `fenceTypeConfigs: ServiceConfig[]` (import the 16).
3. Rewrite `src/pages/fence-types/[slug].astro` to `getStaticPaths` from `fenceTypeConfigs` and render the **full** service layout (copy `services/[slug].astro` almost verbatim; breadcrumb `Home › Services (/services) › {title}`; canonical `/fence-types/<slug>`). Drop the `ComingSoon` import.
4. Keep `catalog.ts fenceTypes` as-is (nav/footer/services-index already use it).
5. Generate the 16 configs with a **Workflow** (parallel agents, `agentType: 'general-purpose'`), each Reading `src/config/services/fence-installation.ts` as the template and Writing its own file. This worked cleanly for the 15 core configs (one agent per slug, return "DONE"). Then `npm run build` and fix any TS issues.

**Old-site H1 reuse** — these 9 fence types had old pages (301s already in `public/_redirects`). Per the rule "reuse the same H1 for matching pages" (we did this on residential/commercial/agricultural core pages, keeping the Wichita wording), set `h1` to the exact old value below — OR confirm with the client whether to switch to a Central-Kansas H1 (brand direction de-emphasizes Wichita). **Decision to confirm in the plan.**

| Slug | Exact old H1 |
|---|---|
| cedar-privacy-fence-installation | Cedar Privacy Fencing in Wichita, KS |
| wrought-iron-fence-installation | Wrought Iron Fencing in Wichita, KS |
| metal-fence-installation | Metal Fencing in Wichita, KS |
| pipe-fence-installation | Pipe Fencing in Wichita, KS |
| barbed-wire-fence-installation | Barbed Wire Fencing in Wichita, KS |
| woven-wire-fence-installation | Woven Wire Fencing in Wichita, KS |
| continuous-fence-installation | Continuous Fencing in Wichita, KS |
| four-rail-horse-fence-installation | Four-Rail Horse Fencing in Wichita, KS |
| wood-ranch-rail-fencing | Wood Ranch Rail Fencing in Wichita, KS |

The other 7 (wood, chain-link, vinyl, split-rail, field, no-climb, decorative) are **new** — use a Central-Kansas H1 like `"{Title} in Central Kansas"`.

**Suggested icons (lucide):** wood `TreePine`/`Fence`, cedar-privacy `ShieldCheck`, chain-link `Grid3x3`, vinyl `PanelsTopLeft`, metal `Fence`, wrought-iron `Crown`, pipe `Pipe`/`CircleDashed`, barbed-wire `Fence`, woven-wire `Grid2x2`, continuous `RectangleHorizontal`, four-rail-horse `Horse`(if missing use `Rabbit`/`Wheat`), wood-ranch-rail `Fence`, split-rail `Trees`, field `Wheat`, no-climb `ShieldCheck`, decorative `Sparkles`. (Verify names exist in lucide-react; BenefitGrid/TopicCardGrid fall back to `Star` if not.)

**Internal linking (`related`, 3–4 each):** link each fence type to its closest core service + sibling types + a property page where it fits, e.g.:
- cedar-privacy ↔ privacy-fence-installation, wood-fence-installation, residential-fence-installation, backyard-fence-installation
- barbed-wire / woven-wire / high-tensile ↔ farm-fence-installation, agricultural-fence-installation, cattle/livestock pages
- pipe / continuous / wood-ranch-rail / four-rail-horse ↔ ranch-fence-installation, horse/cattle pages
- chain-link / metal / wrought-iron ↔ commercial-fence-installation, security-fence-installation, decorative
- Always reasonable to include `/fence-cost-guide` or `/contact`.

---

## 8. Copy & SEO rules (non-negotiable)

- **Every page unique** — do NOT take an existing config and swap the keyword. Different sentence structures, examples, FAQs.
- **Voice varies by audience:** farm/ranch/ag pages = practical, rugged, livestock-aware, lean on Cody's farm background. Residential/decorative pages = homeowner-friendly (curb appeal, privacy, pets, kids). Don't make them sound the same.
- **Local SEO, natural:** weave in Haven, Reno County, Hutchinson, Wichita, Central Kansas; reference Kansas wind/weather, frost-line post depth, herd law for ag fencing — but no keyword stuffing.
- **Per page:** unique `metaTitle` (~55–60 chars, ends "| River Creek Fence") + `excerpt` meta description (mention free estimate / 5-yr warranty).
- Schema: Service + Breadcrumb + FAQ JSON-LD per page (handled by the layout if you mirror `services/[slug].astro`).

---

## 9. Verify

- `npm run build` must pass (catches TS errors in generated configs).
- `npm run dev` (astro-dev :4321). **Screenshot caveat:** the preview screenshot tool hangs on the live Google Maps + GHL form iframes — run `document.querySelectorAll('iframe').forEach(f=>f.remove())` via preview_eval before screenshotting heavy pages, or screenshot lighter pages. Use preview_eval to read DOM/computed styles for verification.
- Confirm: black-on-scroll nav, lime buttons w/ black text, 5 JSON-LD blocks on a service page, hero + exactly 2 content images, FAQ accordion, related links.

---

## 10. Open decisions for the next plan

1. **Fence-type H1s:** DECIDED — Central-Kansas phrasing on all 16, Wichita woven into body copy. (301s carry old-page equity.)
2. Route-promotion: DONE via separate `src/config/fence-types/` dir + `src/config/fence-types.ts` aggregator + rewritten `[slug].astro`.
3. Anything brand-specific (materials/brands Cody uses) the client can supply — still open, applies to property/materials too.

---

## 11. BUILD GUIDE — Property (11) & Materials (7) pages — **DONE**

**Status: COMPLETE.** All 11 property (`/property/<slug>`) + 7 materials (`/materials/<slug>`) pages are now full pages (configs in `src/config/property/` + `src/config/materials/`, aggregated in `src/config/property.ts` + `src/config/materials.ts`, rendered by the rewritten `[slug].astro` routes). Build = 84 pages, clean. Images: hero reuses the feature photo (`-a`) + overview (`-b`) — 2 content photos, **no galleries**. `generateFenceTypeSchema(config, basePath)` now takes `"property"`/`"materials"`. Image manifest fixed (6 property rows repointed; 7 materials rows added). **Known pre-existing issue left untouched:** the fence-type page `pipe-fence-installation` uses stock #45 as its hero, but #45 is actually a galvanized welded-MESH panel, not pipe — worth swapping later (the new `pipe-fence-materials` page correctly uses #44 the weld-joint + #52). The notes below are the playbook that was followed.

**They reuse the fence-type system** built earlier — same `FenceTypeConfig` type, same components, same route layout. Mirror `src/pages/fence-types/[slug].astro` and `src/config/fence-types/cedar-privacy-fence-installation.ts` (the gold standard).

### 11.1 The reusable layout/components (built this session)
- **Type:** `FenceTypeConfig` in `src/types/index.ts` (fields: slug, title, h1, metaTitle, excerpt, icon, overviewHeading, description[3], `atAGlance` SpecItem[4], prosConsHeading, pros[5], considerations[4], featureHeading, featureBody[2], `useCases` UseCaseSection {eyebrow,heading,subtitle,items:UseCaseItem[6] each with `href`}, `gallery?: number[]`, galleryHeading?, `costSnapshot` {range,unit,summary,factors[4]}, buildStepsHeading, buildSteps[4], faqs[5-6], ctaHeading, ctaText, related[3-4]). Reuse it as-is (rename in your head to "PageConfig" — nothing fence-specific in the shape).
- **Components** (all in `src/components/sections/` unless noted): `SpecBar`, `ProsCons`, `UseCaseGrid`, `TypeGallery`, `CostSnapshot`, `BuildSteps`, plus `IconTile` (`src/components/ui/`). Flat lime/charcoal icon tiles. **Reuse directly — no new components needed.**
- **Route layout** (copy from `fence-types/[slug].astro`): PageHero → SpecBar → Overview SplitSection(`-b`) → ProsCons → Feature SplitSection(`-a`) → UseCaseGrid → TypeGallery (only if `gallery.length>=4`) → CostSnapshot → BuildSteps → FAQ → related pills → CTA → QuoteSection. Emits Service+Breadcrumb+FAQ JSON-LD. For the Service schema use/adapt `generateFenceTypeSchema` in `src/lib/structured-data.ts` (rename to a generic `generatePageServiceSchema` or add a `urlBase` param so the `url` points at `/property/` or `/materials/`).
- **SpecBar note:** it is its OWN band under the hero (`bg-surface`, no overlap) and is mobile-responsive (2×2 on phones) — keep it that way.

### 11.2 Recipe
1. Create `src/config/property/<slug>.ts` (×11) and `src/config/materials/<slug>.ts` (×7), each `export default` a `FenceTypeConfig`.
2. Aggregators: `src/config/property.ts` → `propertyConfigs`, `src/config/materials.ts` → `materialsConfigs`.
3. Rewrite `src/pages/property/[slug].astro` and `src/pages/materials/[slug].astro` to `getStaticPaths` from those aggregators and render the full layout (drop `ComingSoon`). Breadcrumb: Home › Services (/services) › {title}. Canonical `/property/<slug>` or `/materials/<slug>`.
4. Generate the bulk with a Workflow of `general-purpose` agents (one per slug), each reading the cedar gold standard for shape + doing its own local SEO research + writing its file. Same approach that produced the 15 fence-type configs cleanly.
5. `npm run build` (should go 84 → 102 pages), fix any TS. Risky lucide names fall back to `Star` (no crash).

**Slugs —** Property (`/property/`): horse-fence-installation, cattle-fence-installation, livestock-fence-installation, pasture-fence-installation, acreage-fence-installation, dog-fence-installation, backyard-fence-installation, pool-fence-installation, garden-fence-installation, farm-gate-installation, ranch-entry-gate-installation. Materials (`/materials/`): fence-materials-central-kansas, farm-fence-supplies, ranch-fence-materials, gate-hardware-fence-accessories, wood-fence-materials, pipe-fence-materials, barbed-wire-woven-wire-materials.

### 11.3 Copy / voice / SEO (same rules as fence types — §8)
- **Voice by audience:** horse/cattle/livestock/pasture/acreage/farm-gate/ranch-entry = farm/ranch, rugged, livestock-aware, lean on Cody's farm background. dog/backyard/pool/garden = residential homeowner (pets, kids, safety, curb appeal). **Materials pages** = knowledgeable local supplier/installer tone ("what we use and why," quality grades) — adapt section meaning: `costSnapshot` → material/price range, `buildSteps` → "what's included / how we supply & install," `useCases` → which fences/projects the material suits.
- H1s: all new pages → Central-Kansas phrasing (old site had no property/materials pages). Unique metaTitle (~55–60 chars, "| River Creek Fence") + excerpt mentioning free estimate / 5-yr warranty.
- **Internal linking:** property ↔ closest fence types + core services (e.g. horse ↔ four-rail-horse, no-climb, ranch-fence-installation; cattle ↔ barbed-wire, woven-wire, pipe, farm-fence-installation; pool ↔ vinyl, chain-link, pool safety; backyard ↔ cedar-privacy, wood, privacy). Materials ↔ the fence types/services they support + `/fence-cost-guide` + `/contact`.

### 11.4 IMAGES — verify every one (Read the .jpg before trusting the manifest)
The stock set's back half is partly mis-ordered (same problem found on fence types). **Verified actual content of 65–85** (✓ = I personally viewed it this session; others are from a vision-catalog pass and should be re-checked):

| # | Actual content |
|---|---|
| 65 ✓ | Chestnut horse at a wood post/rail fence |
| 66 ✓ | Red cattle behind a barbed-wire fence |
| 67 ✓ | Hereford cattle behind woven/smooth-wire grid fence |
| 68 ✓ | Goats behind a wood-rail + woven-wire field fence |
| 69 ✓ | Calf + white dog at woven-wire square mesh |
| 70 | (catalog) black wood ranch-rail fence, green field |
| 71 | (catalog) wood ranch-rail fence, rural acreage |
| 72 ✓ | Barbed-wire fence + "FOR SALE 35 ACRES" sign, mountains |
| 73 | (catalog) aerial view of a ranch with wood fence |
| 74 | (catalog) dog running in a wood-rail pasture |
| 75 ✓ | Black wrought-iron fence with two German Shepherds |
| 76 ✓ | Wood/cedar board privacy fence |
| 77 ✓ | Cedar privacy fence + stone retaining wall |
| 78 ✓ | Green transparent mesh POOL safety fence |
| 79 ✓ | White vinyl picket fence by a pool |
| 80 ✓ | White vinyl fence by a pool + lounge chair |
| 81 ✓ | White picket fence with red flowers (garden) |
| 82 | (catalog) dark wood ranch ENTRY GATE in pasture |
| 83 | (catalog) weathered wood ranch gate, snow |
| 84 | (catalog) dark wood ranch gate, mountains |
| 85 | (catalog) rustic wood ranch gate + stone pillars |

**Property manifest mapping (`src/config/images.ts` pageImages) + fixes to make.** Property `${slug}-a/-b` keys already exist (mapped 65–85). Some are wrong — suggested swaps:

| slug | current (a,b) | issue → use |
|---|---|---|
| horse-fence-installation | 65,66 | 66 is cattle → keep 65 (horse), set b=**64** (horses at wood rail) or 52/53 |
| cattle-fence-installation | 67,68 | 68 is goats → keep 67, set b=**66** (cattle+barbed) |
| livestock-fence-installation | 69,70 | ok-ish → 69 (mesh) + 68 (goats) for a "mixed stock" feel |
| pasture-fence-installation | 71,72 | ok (ranch rail + barbed) — verify 71 |
| acreage-fence-installation | 73,74 | verify 73,74 (aerial + dog-in-pasture) |
| dog-fence-installation | 75,76 | 75 (dogs!) great; b ok — or b=**74** (dog in pasture) |
| backyard-fence-installation | 77,78 | 78 is a POOL fence → keep 77 (privacy), set b=**7**/8/33 (backyard wood) |
| pool-fence-installation | 79,80 | both correct (vinyl by pool) ✓ |
| garden-fence-installation | 81,82 | 82 is a ranch gate → keep 81 (garden picket), set b=**8** (white picket) or 17 |
| farm-gate-installation | 83,84 | both ranch gates ✓ |
| ranch-entry-gate-installation | 85,85 | gate ✓ — set b=**84** for a second image |

**Materials have NO images in the manifest** (1–32 core, 33–64 fence types, 65–85 property — materials weren't allocated any). So for each materials page you must **add a `pageImages` row in `src/config/images.ts`** reusing existing stock numbers (or pass `stock-N` keys). Suggested reuse (hero/overview):
- fence-materials-central-kansas → 1, 33
- farm-fence-supplies → 46, 67
- ranch-fence-materials → 55, 44
- gate-hardware-fence-accessories → 23, 25
- wood-fence-materials → 33, 35
- pipe-fence-materials → 44, 45
- barbed-wire-woven-wire-materials → 46, 67

**Galleries:** only include `gallery` (≥4 verified-matching `stock-N` numbers) where good matches exist; otherwise omit (the route hides the section). Wood/cedar (33,35,36,76,77,17,7), barbed (46,47,66,72), woven/field (67,68,69), wrought/ornamental (40,42,62,63,75), vinyl (38,39,79,80,81), horse/rail (52,53,54,57,58,64,65) are the reliable pools. Pipe/continuous/no-climb are thin (galleries were omitted on those fence-type pages).

### 11.5 Verify (same as §9)
`npm run build` clean (→ ~102 pages); dev screencheck one property (e.g. horse or pool) + one materials page; strip iframes before screenshotting; confirm new layout, flat-tile spec bar (its own band, mobile 2×2), 3 page JSON-LD blocks, correct images, internal links. Redirects already exist for any old URLs.
