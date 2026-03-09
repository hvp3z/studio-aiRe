import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage(): React.JSX.Element {
  return (
    <div className={styles.home}>
      <div className={styles.logoBlock}>
        <img
          src="/logo-light.png"
          alt="Studio Aire"
          className={styles.logo}
        />
      </div>
      <nav className={styles.categories}>
        <Link href="/espaces" className={styles.categoryLink}>
          ESPACES
        </Link>
        <Link href="/identites" className={styles.categoryLink}>
          IDENTITÉS
        </Link>
      </nav>
    </div>
  );
}
