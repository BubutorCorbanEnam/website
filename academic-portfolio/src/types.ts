import type { IconType } from 'react-icons';

export type ThemePreference = 'light' | 'dark' | 'system';

export type NavItem = {
  label: string;
  path: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type TimelineItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
  type?: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  tags: string[];
  status: 'Active' | 'Completed' | 'In review' | 'Prototype';
  github: string;
  demo: string;
  publication: string;
};

export type Publication = {
  type: string;
  title: string;
  authors: string;
  journal: string;
  volume: string;
  issue: string;
  pages: string;
  year: string;
  doi: string;
  pdf: string;
  bibtex: string;
  citation: string;
  abstract: string;
  keywords: string[];
};

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  image: string;
  featured?: boolean;
};

export type DownloadItem = {
  title: string;
  description: string;
  href: string;
  type: string;
};
