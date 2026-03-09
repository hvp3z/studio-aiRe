import { getAllProjects } from '@/lib/content';
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel';
import styles from './page.module.css';

export default function AProposPage(): React.JSX.Element {
  const allProjects = getAllProjects();

  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>À propos</h1>

        <div className={styles.info}>
          <p className={styles.studio}>Studio Aire</p>
          <p className={styles.name}>Emma Reilhac</p>
        </div>

        <div className={styles.contact}>
          <p>
            <span className={styles.label}>Email : </span>
            <a href="mailto:contact@studioaire.fr" className={styles.link}>
              contact@studioaire.fr
            </a>
          </p>
          <p>
            <span className={styles.label}>Téléphone : </span>
            <a href="tel:+33600000000" className={styles.link}>
              06 00 00 00 00
            </a>
          </p>
        </div>
      </section>

      <ProjectCarousel projects={allProjects} heading="Projets" />
    </div>
  );
}
