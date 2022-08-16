import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <input type="search"></input>
        <div>+ -</div>
      </header>

      <div className={styles.container}>{children}</div>
    </>
  );
}
