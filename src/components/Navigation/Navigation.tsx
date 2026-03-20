'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import styles from './Navigation.module.css';

const NAV_LINKS: { label: string; href: string; exact?: boolean }[] = [
  { label: 'PROJECTS', href: '/', exact: true },
  { label: 'OFFERS', href: '/offers' },
  { label: 'ABOUT', href: '/about' },
];

export default function Navigation(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                (link.exact ? pathname === link.href : pathname.startsWith(link.href))
                  ? styles.active
                  : styles.link
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.logoCenter}>
        <Logo />
      </div>

      <div className={styles.right}>
        <a
          href="https://www.instagram.com/studio___aire/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="Instagram"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/studioaire/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.5" />
            <line x1="12" y1="16" x2="12" y2="13" />
            <path d="M12 13a2 2 0 0 1 4 0v3" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
