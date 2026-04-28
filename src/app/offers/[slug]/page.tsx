import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getOfferBySlug, getOffers } from '@/lib/content';
import { OfferSlug } from '@/lib/types';
import styles from './page.module.css';

export async function generateStaticParams(): Promise<{ slug: OfferSlug }[]> {
  return getOffers().map((offer) => ({ slug: offer.slug }));
}

export default async function OfferDetailPage({
  params,
}: {
  params: Promise<{ slug: OfferSlug }>;
}): Promise<React.JSX.Element> {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);

  if (!offer) {
    notFound();
  }

  return (
    <section className={styles.page}>
      <div className={styles.media}>
        <img src={offer.image} alt={offer.alt} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{offer.label}</h1>
        <p className={styles.description}>
          {offer.description || 'Ajoutez ici la description detaillee de votre offre.'}
        </p>
        <Link href="/offers" className={styles.back}>
          Retour aux offres
        </Link>
      </div>
    </section>
  );
}
