'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import styles from './Navigation.module.css';

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'ESPACES', href: '/espaces' },
  { label: 'IDENTITÉS', href: '/identites' },
  { label: 'OFFRES', href: '/offres' },
  { label: 'À PROPOS', href: '/a-propos' },
];

export default function Navigation(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Logo />
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
    </nav>
  );
}
