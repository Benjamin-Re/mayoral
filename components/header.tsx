import styles from './header.module.css';
import  { useState, useContext } from 'react'
import {GlobalContext} from './context'


// import your icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import react fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Header() {
  const {getProducts, setFilteredProducts} = useContext(GlobalContext)
  const products = getProducts

  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        <input type="search" placeholder="Buscar" className={styles.searchBar} onChange={handleInput}></input>
      
      </div>
      <div className={styles.plusMinus}>+ -</div>
    </header>
  );
  function handleInput(e) {
    console.log(e.target.value);
    const filteredProducts = products.filter(product => {
      return product.description.includes(e.target.value)
    })
    setFilteredProducts(filteredProducts)
  }

}
