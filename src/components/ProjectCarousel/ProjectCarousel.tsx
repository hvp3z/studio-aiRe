'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ProjectCarouselProps } from '@/lib/types';
import styles from './ProjectCarousel.module.css';

const SCROLL_AMOUNT = 600;

export default function ProjectCarousel({
  projects,
  heading,
}: ProjectCarouselProps): React.JSX.Element {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollLeft(): void {
    if (trackRef.current) {
      trackRef.current.scrollLeft -= SCROLL_AMOUNT;
    }
  }

  function scrollRight(): void {
    if (trackRef.current) {
      trackRef.current.scrollLeft += SCROLL_AMOUNT;
    }
  }

  return (
    <section className={styles.carousel}>
      <div className={styles.trackWrapper}>
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={scrollLeft}
          aria-label="Scroll left"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <polyline points="13,4 7,10 13,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.track} ref={trackRef}>
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
            </Link>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={scrollRight}
          aria-label="Scroll right"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <polyline points="7,4 13,10 7,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {heading && <h2 className={styles.heading}>{heading}</h2>}
      </div>
    </section>
  );
}
