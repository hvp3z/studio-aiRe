import { getProjectsByCategory } from '@/lib/content';
import ProjectGrid from '@/components/ProjectGrid/ProjectGrid';

export default function SpacesPage(): React.JSX.Element {
  const projects = getProjectsByCategory('spaces');

  return <ProjectGrid projects={projects} category="spaces" />;
}
