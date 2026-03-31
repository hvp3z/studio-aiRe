import Image from 'next/image';
import { getAllProjects, getAboutContent } from '@/lib/content';
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel';
import styles from './page.module.css';

export default function AboutPage(): React.JSX.Element {
  const allProjects = getAllProjects();
  const { profileImage, description } = getAboutContent();

  return (
    <div className={styles.page}>
      <section className={styles.columns}>
        <div className={styles.left}>
          {profileImage && (
            <div className={styles.avatarWrapper}>
              <Image
                src={profileImage}
                alt="Emma Reilhac"
                fill
                className={styles.avatar}
                sizes="200px"
              />
            </div>
          )}

          <div className={styles.info}>
            <p className={styles.studio}>Studio Aire</p>
            <p className={styles.name}>Emma Reilhac</p>
          </div>

          <div className={styles.contact}>
            <p>
              <span className={styles.label}>Email: </span>
              <a href="mailto:contact@studioaire.fr" className={styles.link}>
                contact@studioaire.fr
              </a>
            </p>
          </div>
        </div>

        {description && (
          <div className={styles.right}>
            <p className={styles.description}>{description}</p>
          </div>
        )}
      </section>

      <ProjectCarousel projects={allProjects} heading="Project Gallery" />
    </div>
  );
}
