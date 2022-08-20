import styles from './layout.module.css';
import Header from './header';
import Selector from './selector';

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>

      <div className={styles.container}>{children}</div>

      <Selector></Selector>
    </>
  );
}
