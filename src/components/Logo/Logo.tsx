import Link from 'next/link';
import styles from './Logo.module.css';

export default function Logo(): React.JSX.Element {
  return (
    <Link href="/" className={styles.logo}>
      <img src="/logo-dark.png" alt="Studio Aire" className={styles.image} />
    </Link>
  );
}
