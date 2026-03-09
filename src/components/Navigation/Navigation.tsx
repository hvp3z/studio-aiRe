'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import styles from './Navigation.module.css';

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'SPACES', href: '/spaces' },
  { label: 'IDENTITIES', href: '/identities' },
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
                pathname.startsWith(link.href) ? styles.active : styles.link
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
          className={styles.link}
        >
          Instagram
        </a>
      </div>
    </nav>
  );
}
