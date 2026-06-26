import { FaGithub, FaGoogleScholar, FaLinkedin, FaOrcid, FaResearchgate, FaXTwitter } from 'react-icons/fa6';
import type { NavItem, SocialLink } from '../types';

export const siteConfig = {
  name: 'Dr. Alex Morgan',
  shortName: 'Alex Morgan',
  title: 'Researcher, Data Analyst, and Future PhD Candidate',
  headline: 'Evidence-driven research at the intersection of data, policy, and human outcomes.',
  bio: 'I study complex social and economic systems with rigorous quantitative methods, reproducible software, and clear public communication.',
  mission: 'To produce research that is methodologically careful, practically useful, and accessible to decision-makers.',
  vision: 'A research practice where high-quality evidence helps institutions make fairer, faster, and more transparent choices.',
  email: 'alex.morgan@example.com',
  phone: '+1 (555) 010-2026',
  address: 'Department of Research, Example University, Cambridge, MA',
  officeHours: 'Tuesdays 2:00-4:00 PM by appointment',
  location: 'Cambridge, Massachusetts',
  canonicalUrl: 'https://example.com',
  profileImage: '/assets/profile/profile-photo-placeholder.svg',
  coverImage: '/assets/covers/cover-image-placeholder.svg',
  ogImage: '/assets/og/open-graph-image.svg',
  cv: '/downloads/CV.pdf',
  resume: '/downloads/Resume.pdf'
};

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'Projects', path: '/projects' },
  { label: 'Publications', path: '/publications' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
  { label: 'Awards', path: '/awards' },
  { label: 'Skills', path: '/skills' },
  { label: 'Teaching', path: '/teaching' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Blog', path: '/blog' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Resources', path: '/resources' },
  { label: 'Downloads', path: '/downloads' },
  { label: 'CV', path: '/cv' },
  { label: 'Contact', path: '/contact' }
];

export const socialLinks: SocialLink[] = [
  { label: 'Google Scholar', href: 'https://scholar.google.com', icon: FaGoogleScholar },
  { label: 'ORCID', href: 'https://orcid.org', icon: FaOrcid },
  { label: 'GitHub', href: 'https://github.com', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedin },
  { label: 'ResearchGate', href: 'https://researchgate.net', icon: FaResearchgate },
  { label: 'X', href: 'https://x.com', icon: FaXTwitter }
];
