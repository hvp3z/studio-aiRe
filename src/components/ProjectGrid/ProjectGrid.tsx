import { ProjectGridProps } from '@/lib/types';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import styles from './ProjectGrid.module.css';

export default function ProjectGrid({
  projects,
  category,
}: ProjectGridProps): React.JSX.Element {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          href={`/${category}/${project.slug}`}
        />
      ))}
    </div>
  );
}
