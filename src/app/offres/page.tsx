import { getAllProjects } from '@/lib/content';
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel';
import styles from './page.module.css';

export default function OffresPage(): React.JSX.Element {
  const allProjects = getAllProjects();

  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>Offres</h1>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Espaces</h2>
          <p className={styles.text}>
            Conception et aménagement d&apos;espaces résidentiels et
            professionnels. Du conseil en agencement à la maîtrise d&apos;œuvre
            complète, Studio Aire accompagne chaque projet avec une approche sur
            mesure.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Identités</h2>
          <p className={styles.text}>
            Création d&apos;identités visuelles pour des marques et des lieux.
            Logo, direction artistique, supports de communication — une
            approche globale au service de votre image.
          </p>
        </div>
      </section>

      <ProjectCarousel projects={allProjects} heading="Projets" />
    </div>
  );
}
