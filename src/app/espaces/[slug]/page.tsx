import { notFound } from 'next/navigation';
import {
  getProjectBySlug,
  getAllProjectSlugs,
  getAllProjects,
} from '@/lib/content';
import ProjectDetail from '@/components/ProjectDetail/ProjectDetail';
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllProjectSlugs('espaces');
}

export default async function EspaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.JSX.Element> {
  const { slug } = await params;
  const project = getProjectBySlug('espaces', slug);
  if (!project) notFound();

  const allProjects = getAllProjects();
  const carouselProjects = allProjects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <ProjectDetail project={project} />
      <ProjectCarousel projects={carouselProjects} />
    </>
  );
}
