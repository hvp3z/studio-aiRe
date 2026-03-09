import { ProjectDetailProps } from '@/lib/types';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail({
  project,
}: ProjectDetailProps): React.JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <p>
            <span className={styles.label}>Année : </span>
            {project.year}
          </p>
          <p>
            <span className={styles.label}>Client : </span>
            {project.client}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        {project.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${project.title} — ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}
