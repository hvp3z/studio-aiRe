import { getProjectsByCategory } from '@/lib/content';
import ProjectGrid from '@/components/ProjectGrid/ProjectGrid';

export default function IdentitiesPage(): React.JSX.Element {
  const projects = getProjectsByCategory('identities');

  return <ProjectGrid projects={projects} category="identities" />;
}
