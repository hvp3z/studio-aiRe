import styles from './WorkInProgress.module.css';

export default function WorkInProgress(): React.JSX.Element {
  return (
    <section className={styles.wrapper} aria-label="Website in progress">
      <div className={styles.content}>
        <img
          src="/logo-dark.png"
          alt="Studio Aire"
          className={styles.logo}
        />
        <p className={styles.message}>Website in progress — Studio Aire</p>
      </div>
    </section>
  );
}
