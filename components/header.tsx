import styles from './header.module.css';
// import your icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// import react fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        <input type="search" placeholder="Buscar" className={styles.searchBar}></input>
      </div>
      <div className={styles.plusMinus}>+ -</div>
    </header>
  );
}
