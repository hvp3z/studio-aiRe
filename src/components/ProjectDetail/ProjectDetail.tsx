import { ProjectDetailProps } from '@/lib/types';
import styles from './ProjectDetail.module.css';

function SpacesMeta({
  project,
}: ProjectDetailProps): React.JSX.Element {
  return (
    <>
      <div className={styles.meta}>
        <p>
          <span className={styles.label}>Année : </span>
          {project.year}
        </p>
        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}
        {project.surface && (
          <p>
            <span className={styles.label}>Surface : </span>
            {project.surface}
          </p>
        )}
        <p>
          <span className={styles.label}>Lieu : </span>
          {project.location}
        </p>
      </div>
      {project.planImage && (
        <img
          src={project.planImage}
          alt={`${project.title} — plan`}
          className={styles.planImage}
        />
      )}
    </>
  );
}

function IdentitiesMeta({
  project,
}: ProjectDetailProps): React.JSX.Element {
  return (
    <div className={styles.meta}>
      <p>
        <span className={styles.label}>Année : </span>
        {project.year}
      </p>
      {project.description && (
        <p className={styles.description}>{project.description}</p>
      )}
      {project.mission && (
        <p>
          <span className={styles.label}>Mission : </span>
          {project.mission}
        </p>
      )}
    </div>
  );
}

export default function ProjectDetail({
  project,
}: ProjectDetailProps): React.JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.title}>{project.title}</h1>
        {project.category === 'spaces' ? (
          <SpacesMeta project={project} />
        ) : (
          <IdentitiesMeta project={project} />
        )}
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
