import { getAllProjects } from '@/lib/content';
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel';
import styles from './page.module.css';

export default function OffersPage(): React.JSX.Element {
  const allProjects = getAllProjects();

  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>Offers</h1>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Spaces</h2>
          <p className={styles.text}>
            Design and fit-out of residential and commercial spaces. From layout
            consulting to full project management, Studio Aire supports every
            project with a bespoke approach.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Identities</h2>
          <p className={styles.text}>
            Visual identity creation for brands and places. Logo, art direction,
            communication materials — a holistic approach in service of your
            image.
          </p>
        </div>
      </section>

      <ProjectCarousel projects={allProjects} heading="Galerie Projets" />
    </div>
  );
}
