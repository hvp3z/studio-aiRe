import Link from 'next/link';
import { getAllProjects, getOffers } from '@/lib/content';
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel';
import styles from './page.module.css';

export default function OffersPage(): React.JSX.Element {
  const allProjects = getAllProjects();
  const cards = getOffers();

  return (
    <div className={styles.page}>
      <div className={styles.cards}>
        {cards.map(({ slug, label, image, alt }) => (
          <Link key={slug} href={`/offers/${slug}`} className={styles.card}>
            <span className={styles.cardLabel}>{label}</span>
            <div className={styles.cardImageWrapper}>
              <img src={image} alt={alt} className={styles.cardImage} />
            </div>
          </Link>
        ))}
      </div>

      <ProjectCarousel projects={allProjects} />
    </div>
  );
}
