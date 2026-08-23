---
name: sentinel-migration
description: Apply the Sentinel/Mirador design-migration methodology for this repo - two-source content/design separation, reuse-before-rebuild, never invent business content, and the image-placeholder convention. Use when building or editing any page/section on this site, especially when porting a Mirador-style pattern or adding content the user supplies.
---

# Sentinel Migration Methodology

This repo (Sentinel Technologies' website) is being rebuilt using Mirador
Technologies AI's website as a **design reference** while Sentinel's own
content stays the **source of truth** for everything factual. The full
methodology is written out in `AGENTS.md` at the repo root — read it if you
haven't already this session. This skill is the actionable checklist version.

## Core rules

1. **Design vs content, never mixed.** Mirador (or any other design
   reference) supplies visual language, layout, component patterns, and
   animation. Sentinel's own materials supply every fact: services, industries,
   contact details, stats, certifications. Don't let one bleed into the other.

2. **Analyze before building.** For anything beyond a trivial edit, map out
   what's reusable, what needs replacing, and what's genuinely new before
   writing code. Check `src/data/`, `src/components/`, and `src/hooks/` for an
   existing pattern first - this repo already has shared data files
   (`solutions.ts`, `industries.ts`), a shared SEO component, and a shared
   count-up hook. Reuse them; don't re-fork the same array or logic into a new
   file.

3. **Never invent business content.** No fabricated stats, client names,
   partner brands, certifications, testimonials, case studies, or headcount
   figures. If a section conventionally needs this kind of content but none
   exists yet, build an honest placeholder/coming-soon state and say so
   explicitly - don't fill the gap with something plausible-sounding.

4. **Missing image or logo → `ImagePlaceholder`, never a stock photo.**
   ```tsx
   import ImagePlaceholder from "@/components/ImagePlaceholder";

   // normal image slot
   <ImagePlaceholder label="Photo of a Sentinel-installed CCTV control room" className="rounded-lg shadow-security w-full h-80" />

   // full-bleed hero background already covered by a gradient overlay
   <ImagePlaceholder label="..." variant="badge" className="top-4 right-4" />
   ```
   Every pending image should be findable by grepping for `ImagePlaceholder`
   or `imageNeeded`. When the user supplies the real file, replace the
   placeholder entirely - don't leave both.

5. **Adapt supplied copy, don't paste it in raw.** When the user hands you a
   large block of new copy (a rewritten About page, new service descriptions),
   restructure it into this site's existing section rhythm (hero → framework
   → grid → narrative → CTA) and reuse existing UI primitives and motion
   patterns. Preserve every factual claim; you may re-sequence, shorten, or
   turn prose into cards/lists.

6. **Routing.** A section that deserves indexing as its own page gets a real
   lazy-loaded route in `src/App.tsx` plus a `<SEO />` call - not a homepage
   anchor pretending to be a page. A true in-page jump target stays an anchor,
   using the existing `scrollToSection` pattern in `Header.tsx`/`Footer.tsx`.
   When a homepage section's content gets promoted to its own page, shrink the
   homepage version to a preview + link.

7. **Verify.** Run `npx tsc --noEmit` and `npx vite build` after non-trivial
   changes before considering the work done.

8. **SEO is first-class, on every page.** Use `src/components/SEO.tsx` with
   a unique title/description/canonical per page (never copy another page's
   metadata), add `Breadcrumbs` + JSON-LD breadcrumbs on nested pages, pass
   `noindex` on thin/placeholder pages, and keep `public/sitemap.xml` in sync
   with real, canonical, indexable routes only. Never guarantee rankings -
   just implement what's technically sound. See `AGENTS.md` for the full
   detail, including the honest caveat about this being a client-rendered
   SPA without SSR.

9. **Mobile, performance and animation discipline.** Validate new sections at
   common breakpoints, keep touch targets ~44px+, animate only
   `transform`/`opacity`, and never add motion that ignores
   `prefers-reduced-motion` (already wired globally). Keep new routes
   lazy-loaded via `React.lazy` like the existing ones in `src/App.tsx`.

## When this skill applies

- Building or editing any homepage section, dedicated page, or component
- Porting a pattern from a design-reference site (Mirador or otherwise)
- Wiring in new content the user pastes into the conversation
- Adding any image, photo, or logo to a page

See `AGENTS.md` at the repo root for the full write-up, including the
analytics/SEO wiring already in place (`src/lib/analytics.ts`,
`src/components/SEO.tsx`) and current stack notes.
