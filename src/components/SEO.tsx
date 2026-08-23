import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  /** Extra JSON-LD objects specific to this page (e.g. Service, FAQPage). */
  schema?: Record<string, unknown>[];
}

const SITE_URL = "https://sentinel-technologies.net";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertJsonLd = (id: string, data: Record<string, unknown>) => {
  let script = document.querySelector(`script[data-seo-id="${id}"]`);
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("data-seo-id", id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

const removeJsonLd = (id: string) => {
  document.querySelector(`script[data-seo-id="${id}"]`)?.remove();
};

const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
  breadcrumbs,
  schema,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
      upsertMeta("property", "og:url", canonical);
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      upsertJsonLd("breadcrumb", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    } else {
      removeJsonLd("breadcrumb");
    }

    if (schema && schema.length > 0) {
      schema.forEach((s, i) => upsertJsonLd(`page-schema-${i}`, s));
    }

    return () => {
      removeJsonLd("breadcrumb");
      schema?.forEach((_, i) => removeJsonLd(`page-schema-${i}`));
    };
  }, [title, description, canonical, ogImage, ogType, noindex, breadcrumbs, schema]);

  return null;
};

export default SEO;
export { SITE_URL };
