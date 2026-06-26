import { blogPosts, projects, publications, researchThemes } from '../data/content';

export const searchIndex = [
  ...projects.map((item) => ({
    title: item.title,
    description: item.description,
    type: 'Project',
    href: '/projects'
  })),
  ...publications.map((item) => ({
    title: item.title,
    description: item.abstract,
    type: item.type,
    href: '/publications'
  })),
  ...blogPosts.map((item) => ({
    title: item.title,
    description: item.excerpt,
    type: 'Blog',
    href: '/blog'
  })),
  ...researchThemes.map((item) => ({
    title: item.title,
    description: item.description,
    type: 'Research',
    href: '/research'
  }))
];

export function searchSite(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  return searchIndex.filter((item) => {
    return `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(normalized);
  });
}
