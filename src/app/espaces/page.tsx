import { getProjectsByCategory } from '@/lib/content';
import ProjectGrid from '@/components/ProjectGrid/ProjectGrid';

export default function EspacesPage(): React.JSX.Element {
  const projects = getProjectsByCategory('espaces');

  return <ProjectGrid projects={projects} category="espaces" />;
}
