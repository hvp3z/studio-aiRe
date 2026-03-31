import Link from 'next/link';
import { getAllProjects, getOffersContent } from '@/lib/content';
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel';
import styles from './page.module.css';

export default function OffersPage(): React.JSX.Element {
  const allProjects = getAllProjects();
  const { spacesImage, identitiesImage, moreImage } = getOffersContent();

  const cards = [
    {
      label: 'Spaces',
      href: '/?filter=spaces',
      image: spacesImage,
      alt: 'Spaces — interior design projects',
    },
    {
      label: 'Identities',
      href: '/?filter=identities',
      image: identitiesImage,
      alt: 'Identities — visual identity projects',
    },
    {
      label: 'More',
      href: '/',
      image: moreImage,
      alt: 'More — all projects',
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.cards}>
        {cards.map(({ label, href, image, alt }) => (
          <Link key={label} href={href} className={styles.card}>
            <span className={styles.cardLabel}>{label}</span>
            <div className={styles.cardImageWrapper}>
              <img src={image} alt={alt} className={styles.cardImage} />
            </div>
          </Link>
        ))}
      </div>

      <ProjectCarousel projects={allProjects} heading="Project Gallery" />
    </div>
  );
}
