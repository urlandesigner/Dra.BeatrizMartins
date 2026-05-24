import { useEffect } from "react";
import { CONFIG } from "../config";
import { buildStructuredData } from "../lib/schema";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SeoHead() {
  const { seo } = CONFIG;
  const siteUrl = seo.siteUrl.replace(/\/$/, "");
  const ogImage = `${siteUrl}${seo.ogImage}`;

  useEffect(() => {
    document.documentElement.lang = "pt-BR";
    document.title = seo.title;

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("name", "author", CONFIG.medico.nome);
    upsertMeta("name", "geo.region", "BR-ES");
    upsertMeta("name", "geo.placename", "Vitória");

    upsertLink("canonical", siteUrl);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", seo.locale);
    upsertMeta("property", "og:url", siteUrl);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:site_name", CONFIG.medico.nome);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", ogImage);

    const scriptId = "seo-json-ld";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildStructuredData());
  }, [seo, siteUrl, ogImage]);

  return null;
}
