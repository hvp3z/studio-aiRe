import Link from 'next/link';
import { ProjectCardProps } from '@/lib/types';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  project,
  href,
}: ProjectCardProps): React.JSX.Element {
  return (
    <Link href={href} className={styles.card}>
      <img
        src={project.coverImage}
        alt={project.title}
        className={styles.image}
      />
      <div className={styles.overlay}>
        <span className={styles.title}>{project.title}</span>
        {project.projectType && (
          <span className={styles.projectType}>{project.projectType}</span>
        )}
        {project.location && (
          <span className={styles.location}>{project.location}</span>
        )}
      </div>
    </Link>
  );
}
