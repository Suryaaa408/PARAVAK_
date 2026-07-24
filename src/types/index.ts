export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: Category;
  tags: Tag[];
  author: Author;
  publishedAt: string; // ISO date string
  date: string; // Formatted display date e.g. "15 June 2026"
  estimatedReadTime: number; // minutes
  heroImage: string;
  type: 'essay' | 'reflection';
}

export interface Author {
  slug: string;
  name: string;
  bio: string;
  credentials: string;
  photo: string;
  socialLinks: SocialLink[];
  articleSlugs: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Tag {
  slug: string;
  name: string;
}

export interface MastheadPerson {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  credentials?: string;
  url?: string;
}

export interface MastheadOrg {
  name: string;
  logo?: string;
  url?: string;
  description?: string;
}

export type MastheadDisplayMode = 'photo-grid' | 'minimal-list' | 'logo-grid';

export interface MastheadSection {
  title: string;
  sanskritLabel: string; // Devanagari script
  displayMode: MastheadDisplayMode;
  members: MastheadPerson[];
  organizations?: MastheadOrg[];
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
}

export interface AudioEpisode {
  id: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  audioUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}
