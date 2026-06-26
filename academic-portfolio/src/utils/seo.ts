import { siteConfig } from '../config/site';

export function setDocumentMeta(title: string, description: string, path = '/') {
  document.title = `${title} | ${siteConfig.shortName}`;
  updateMeta('description', description);
  updateMeta('og:title', `${title} | ${siteConfig.shortName}`, 'property');
  updateMeta('og:description', description, 'property');
  updateMeta('twitter:title', `${title} | ${siteConfig.shortName}`);
  updateMeta('twitter:description', description);

  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) canonical.href = `${siteConfig.canonicalUrl}${path}`;
}

function updateMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  email: siteConfig.email,
  address: siteConfig.address,
  url: siteConfig.canonicalUrl,
  image: `${siteConfig.canonicalUrl}${siteConfig.profileImage}`,
  sameAs: ['https://scholar.google.com', 'https://github.com', 'https://linkedin.com', 'https://orcid.org']
};
