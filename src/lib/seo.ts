import { site } from "@/data/portfolio";

export const seo = {
  url: site.url,
  title: `${site.name} | ${site.role}`,
  titleTemplate: `%s | ${site.name}`,
  description: site.seoDescription,
  keywords: site.keywords,
  ogImageAlt: `${site.name} — ${site.role} portfolio`,
} as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.seoDescription,
  email: site.email,
  sameAs: Object.values(site.social).filter(Boolean),
  knowsAbout: site.keywords,
};
