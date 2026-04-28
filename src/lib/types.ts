export type ProjectCategory = 'spaces' | 'identities';
export type OfferSlug = 'spaces' | 'identities' | 'more';

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  year: string;
  client: string;
  projectType: string;
  location: string;
  description: string;
  surface: string;
  mission: string;
  planImage: string;
  coverImage: string;
  images: string[];
}

export interface ProjectCardProps {
  project: Project;
  href: string;
}

export interface ProjectGridProps {
  projects: Project[];
  category: ProjectCategory;
}

export interface ProjectDetailProps {
  project: Project;
}

export interface ProjectCarouselProps {
  projects: Project[];
  heading?: string;
}

export interface Offer {
  slug: OfferSlug;
  label: string;
  image: string;
  alt: string;
  description: string;
}
