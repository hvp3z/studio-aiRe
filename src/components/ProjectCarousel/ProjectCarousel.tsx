import Link from 'next/link';
import { ProjectCarouselProps } from '@/lib/types';
import styles from './ProjectCarousel.module.css';

export default function ProjectCarousel({
  projects,
  heading,
}: ProjectCarouselProps): React.JSX.Element {
  return (
    <section className={styles.carousel}>
      <div className={styles.trackWrapper}>
        <div className={styles.track}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${project.category}/${project.slug}`}
              className={styles.item}
            >
              <div className={styles.thumb}>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className={styles.thumbImage}
                />
                <div className={styles.thumbOverlay} />
              </div>
              <span className={styles.thumbTitle}>{project.title}</span>
            </Link>
          ))}
        </div>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
      </div>
    </section>
  );
}
