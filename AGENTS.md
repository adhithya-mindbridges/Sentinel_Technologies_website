# Sentinel Technologies Website — Agent Instructions

This file is read by agentic coding tools (Google Antigravity, Claude Code, and
similar) working in this repository. It captures the methodology this project
follows so any agent — regardless of tool — behaves consistently.

## The two-source model

This project migrates the Sentinel Technologies website onto a Mirador-inspired
design system. Two separate repositories are involved, and they are **not**
interchangeable:

- **Design source of truth**: Mirador Technologies AI's website
  (`/Users/macos/Desktop/mirador_website` when available locally). Use it for
  visual language, component architecture, animation style, layout patterns,
  spacing, and interaction design. Never copy its business content.
- **Content source of truth**: Sentinel Technologies' own existing site and
  business materials (this repo, plus whatever the user supplies directly in
  conversation). Use it for company name, services, industries, contact
  details, stats, and all other factual claims.

Never blend the two: don't let Mirador's copy leak into Sentinel's pages, and
don't invent Sentinel content to fill a Mirador-shaped section.

## Before changing code: analyze first

For any substantial reuse-from-reference task, inspect both codebases (or all
supplied content) before writing anything. Identify:
1. What's reusable from the design reference (components, patterns, tokens)
2. What's reusable from the current Sentinel codebase
3. What must be replaced, redesigned, or preserved exactly
4. Conflicts between the two (framework versions, color systems, typography)
5. A concrete page/section mapping before implementation begins

Only start implementation after this mapping is clear — either confirmed with
the user or, in an auto/agentic session, made explicit in a short plan.

## Reuse before rebuild

Check `src/data/`, `src/components/`, and `src/hooks/` for an existing pattern
before writing a new one. Concrete examples already established in this repo:
- `src/data/solutions.ts` and `src/data/industries.ts` are the single source
  for solution/industry content — components (`Header`, `Footer`,
  `SolutionsSection`, `AboutSection`, `Industries*`) all read from these
  rather than duplicating arrays.
- `src/hooks/use-count-up.ts` is the shared animated-counter hook — don't
  re-implement count-up logic inline in a new section.
- `src/components/SEO.tsx` is the per-page metadata component — use it on any
  new route rather than hand-rolling `document.title` mutations.

## Never invent business content

Do not fabricate:
- Statistics, client names, or partner/technology-brand names
- Certifications (e.g. a specific ISO standard) without a source
- Testimonials, case studies, or awards
- Team size, headcount, or years-in-business figures

If a section conventionally expects this kind of content (a Mirador-style
"Case Studies" page, a stats band, a client-logo strip) but no real content
exists yet, build the section as an honest placeholder/coming-soon state
rather than making something up. Flag the gap to the user explicitly.

## Image placeholders

When a section needs a photo, logo, or graphic that hasn't been supplied yet,
use `src/components/ImagePlaceholder.tsx` instead of a stock photo or a fake
logo:

```tsx
<ImagePlaceholder label="Photo of a Sentinel-installed CCTV control room" />
```

- Default (`variant="box"`) renders a dashed-border box with the label —
  use for normal image slots (cards, side-by-side sections).
  ```tsx
  <ImagePlaceholder label="..." className="rounded-lg shadow-security w-full h-80" />
  ```
- `variant="badge"` renders a small corner annotation — use only where a full
  box would break the layout, e.g. a full-bleed hero background already
  covered by a gradient overlay:
  ```tsx
  <ImagePlaceholder label="..." variant="badge" className="top-4 right-4" />
  ```

Every pending image should be discoverable by searching the codebase for
`ImagePlaceholder` or `imageNeeded` (the latter is the field name used in
`src/data/industries.ts`). When the user supplies a real file, replace the
placeholder with the actual asset and remove the placeholder usage — don't
leave both in place.

This applies to logos too (client logos, technology-partner logos): don't
stand in a random stock photo or a `via.placeholder.com` image for a real
company logo. Use a small labeled placeholder box sized for the logo slot
instead (see `CustomerLogos.tsx` and `PartnerLogos.tsx` for the pattern).

### When the user asks you to source real images yourself

If asked to fill a placeholder with an actual image (not just leave it
pending), use genuinely freely-licensed stock photography as *representative*
imagery — not a claimed photo of the specific named site/facility. Caption it
honestly (e.g. `imageAlt: "... (representative image)"` — see
`src/data/caseStudies.ts`), never as if it depicts the real client's actual
premises, since that would misrepresent authenticity.

**Verify the license before downloading, per image, every time.** Unsplash
search results and page descriptions are unreliable about this — many
image pages that read as ordinary results are actually Unsplash+ (paid)
photos. The tell is the CDN host in the actual image URL:
`images.unsplash.com` = free under the Unsplash License; `plus.unsplash.com`
= paid, do not use. Fetch the photo page and check which host the real image
URL uses before downloading — don't trust a search snippet's "free to use"
claim at face value. Also don't trust an image's text description alone
(e.g. a page titled "close-up of a black tire" turned out, on visual
inspection, to be a palm leaf) — download and actually look at the image
before wiring it in.

## Content adaptation, not copy-paste

When the user supplies rich new copy (e.g. a full "About Us" rewrite), don't
paste it in verbatim as one giant block. Restructure it to fit the design
system already in place: break it into the section rhythm the site uses
(hero → framework/steps → grid → narrative → cards → CTA), reuse existing UI
primitives (`Card`, `Button`, motion patterns already established in
`src/pages/*`), and keep headings/hierarchy consistent with the rest of the
site. Preserve the meaning and every factual claim exactly; you may shorten,
re-sequence, or convert prose into cards/lists.

## Routing conventions in this repo

- A section that deserves its own SEO-indexable page (About, Industries,
  Case Studies) gets a real route in `src/App.tsx`, lazy-loaded, with its own
  `<SEO />` usage — not a homepage anchor scroll standing in for a page.
- A section that's genuinely just an in-page jump target (Contact on the
  homepage) can stay an anchor (`id="contact"`), scrolled to via the
  `scrollToSection` pattern already in `Header.tsx` and `Footer.tsx` (which
  handles navigating home first if not already on `/`).
- When a homepage section's full content gets promoted to its own dedicated
  page, shrink the homepage section to a preview + link rather than leaving
  both in full (see `AboutSection.tsx` after `/about` was added).

## Analytics & SEO wiring already in place

- `src/lib/analytics.ts` — Google Analytics 4, gated entirely behind
  `VITE_GA_MEASUREMENT_ID`. No script loads if the env var is unset. Don't
  hardcode a measurement ID into source; ask the user for it or leave it
  unset.
- `src/App.tsx`'s `RouteTracker` fires a page_view on every route change.
- `src/components/SEO.tsx` — call this at the top of any new page component
  with a real `title`/`description`/`canonical`, matching the pattern in
  `src/pages/About.tsx`.

## SEO is a first-class requirement, not an afterthought

Every indexable page must use `src/components/SEO.tsx` with a **unique**
title, description, and canonical - never copy another page's metadata.
Don't guarantee rankings ("this will rank #1"); implement what's technically
and structurally sound instead.

- **Titles/descriptions**: work in real keywords naturally (service name,
  "Sentinel Technologies", relevant industry/location terms) - never
  keyword-stuff. Keep titles under ~60 chars, descriptions ~150-160.
- **Structured data**: `SEO`'s `schema` prop takes page-specific JSON-LD
  (e.g. `Service` on solution pages, `WebPage` on industry pages). Site-wide
  `Organization`/`WebSite` schema lives statically in `index.html` - don't
  duplicate it per page. Never add structured data that doesn't match the
  visible content on that page.
- **Breadcrumbs**: use `src/components/Breadcrumbs.tsx` (visible nav) plus
  the `breadcrumbs` prop on `SEO` (JSON-LD `BreadcrumbList`) on any page
  nested under a section - see any file in `src/pages/solutions/` for the
  pattern.
- **Noindex thin/placeholder pages**: pass `noindex` on `SEO` for pages with
  no substantive unique content yet (e.g. `/case-studies` while it's a
  coming-soon page). Remove it once real content exists.
- **Canonicalization**: a route that renders the same component as another
  route (e.g. `/contact` currently rendering the homepage `Index`) inherits
  that page's canonical automatically since they share one `SEO` call -
  don't list such duplicate routes in `public/sitemap.xml`.
- **Sitemap**: `public/sitemap.xml` is hand-maintained. Add a real page when
  you add a real route; never add test/duplicate/noindex/utility URLs.
- **robots.txt**: keep it permissive and pointing at the sitemap; never
  block CSS/JS or real pages.
- **Content over graphics for crawlability**: critical company/service facts
  must exist as real HTML text, not only inside images, canvas, or video.

### A known limitation, stated honestly

This is a Vite client-rendered SPA (no SSR/prerendering). Modern Googlebot
generally executes JavaScript and indexes SPA content fine, but this is not
guaranteed for every crawler or AI-search system, and there's an initial
blank-HTML window before hydration. If deeper SEO/AI-search reach becomes a
priority, the real fix is prerendering (a static-site generator pass,
`vite-plugin-ssr`, or migrating to a framework with SSR) - don't claim this
is "solved" by metadata alone.

## Performance, mobile, and animation discipline

- **Core Web Vitals matter for SEO.** Keep the LCP element (usually the hero)
  fast - no heavy blocking JS or oversized unoptimized images in it. Reserve
  image dimensions to avoid CLS. Avoid expensive scroll-linked JS for INP.
- **Mobile is not an afterthought.** Validate any new section at common
  breakpoints (360/375/390/768/1024px+), not just desktop. Minimum touch
  target ~44px on interactive elements.
- **`prefers-reduced-motion` is already wired globally** in `src/index.css`.
  Any new animation should degrade gracefully under it - don't add motion
  that ignores it. On mobile specifically, avoid heavy parallax, large
  animated backgrounds, and scroll listeners that aren't passive.
- **Animate `transform`/`opacity`**, not layout-triggering properties.
  Animation should support content, not replace it - keep a rhythm of
  static → subtle motion → content → interactive → static rather than
  animating every element on every page.
- **Watch the bundle.** Route-level `React.lazy` is already used in
  `src/App.tsx` for every page - keep new pages/routes lazy-loaded too so one
  page's dependencies don't bloat every other page's initial load.

## Stack notes

Vite + React 18 + TypeScript + shadcn/ui + Tailwind (HSL CSS-variable design
tokens in `src/index.css`) + Framer Motion for animation + React Router.
Verify with `npx tsc --noEmit` and `npx vite build` after non-trivial changes.
