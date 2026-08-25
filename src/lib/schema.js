import { CONFIG } from "../config";

/** JSON-LD para Physician, LocalBusiness e FAQPage (Google Rich Results). */
export function buildStructuredData() {
  const { seo, medico, contato, whatsapp, instagram, faq } = CONFIG;
  const siteUrl = seo.siteUrl.replace(/\/$/, "");
  const imageUrl = `${siteUrl}${seo.ogImage}`;
  const [localPrincipal, ...outrosLocais] = contato.locais;

  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#physician`,
    name: medico.nome,
    url: siteUrl,
    image: imageUrl,
    description: seo.description,
    medicalSpecialty: "Pneumology",
    telephone: `+${whatsapp.numero}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Prof. Almeida Cousin, 125, sala 1111",
      addressLocality: "Vitória",
      addressRegion: "ES",
      postalCode: localPrincipal.cep,
      addressCountry: "BR",
    },
    sameAs: [instagram],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#clinic`,
    name: localPrincipal.local,
    url: siteUrl,
    telephone: `+${whatsapp.numero}`,
    address: physician.address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.2976,
      longitude: -40.2958,
    },
    openingHoursSpecification: [],
  };

  const outrasUnidades = outrosLocais.map((loc, i) => ({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#clinic-${i + 2}`,
    name: loc.local || medico.nome,
    url: siteUrl,
    telephone: `+${whatsapp.numero}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.endereco,
      addressLocality: "Vitória",
      addressRegion: "ES",
      addressCountry: "BR",
    },
    openingHoursSpecification: [],
  }));

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: "pt-BR",
    publisher: { "@id": `${siteUrl}/#physician` },
  };

  return [physician, localBusiness, ...outrasUnidades, faqPage, website];
}
