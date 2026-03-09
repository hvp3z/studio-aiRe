export type ProjectCategory = 'spaces' | 'identities';

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  year: string;
  client: string;
  projectType: string;
  location: string;
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
