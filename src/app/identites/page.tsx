import { getProjectsByCategory } from '@/lib/content';
import ProjectGrid from '@/components/ProjectGrid/ProjectGrid';

export default function IdentitesPage(): React.JSX.Element {
  const projects = getProjectsByCategory('identites');

  return <ProjectGrid projects={projects} category="identites" />;
}
