import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, ProjectCategory } from './types';

const CONTENT_ROOT = path.join(process.cwd(), 'content', 'projects');

function parseProjectFile(filePath: string, category: ProjectCategory): Project {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(raw);
  return {
    title: data.title,
    slug: data.slug,
    category,
    year: data.year,
    client: data.client,
    projectType: data.projectType ?? '',
    location: data.location ?? '',
    description: data.description ?? '',
    surface: data.surface ?? '',
    mission: data.mission ?? '',
    planImage: data.planImage || '',
    coverImage: data.coverImage,
    images: (data.images ?? []).filter(Boolean),
  };
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  const dir = path.join(CONTENT_ROOT, category);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith('.md'))
    .map((f: string) => parseProjectFile(path.join(dir, f), category));
}

export function getAllProjects(): Project[] {
  return [
    ...getProjectsByCategory('spaces'),
    ...getProjectsByCategory('identities'),
  ];
}

export function getProjectBySlug(
  category: ProjectCategory,
  slug: string
): Project | undefined {
  return getProjectsByCategory(category).find((p) => p.slug === slug);
}

export function getAllProjectSlugs(
  category: ProjectCategory
): { slug: string }[] {
  return getProjectsByCategory(category).map((p) => ({ slug: p.slug }));
}
