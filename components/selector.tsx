import { useState, useContext } from 'react';
import { GlobalContext } from './context';
import styles from './selector.module.css'
import sortByName from '../utils/sortByName';
import Product from '../types'

export default function Selector() {
  const [getFilter, setFilter] = useState();
  const { getProducts, setFilteredProducts } = useContext(GlobalContext);
  const products: Product[] = getProducts;

  return (
    <div className={styles.selector}>
      <label htmlFor="filter">Ordenar porr:</label>
      <select  name="filter" id="filter" onChange={handleChange} value={getFilter}>
        <option value="priceAsc">precio asc</option>
        <option value="priceDesc">precio desc</option>
        <option value="name">nombre</option>
      </select>
    </div>
  );

  function handleChange(e) {
    setFilter(e.target.value);
    switch (e.target.value) {
      case 'name':
        setFilteredProducts([...sortByName(products)]);
        break;
      case 'priceAsc':
        sortByPriceAsc()
        break;
      case 'priceDesc':
        sortByPriceDesc()
        break;
    }

}

    // function sortByName(products) {
    //     const sortedProducts = products.sort((a, b) => {
    //         const nameA: string = a.description.toUpperCase();
    //         const nameB: string = b.description.toUpperCase();
    //         if (nameA < nameB) {
    //             return -1;
    //         }
    //         if (nameA > nameB) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    //     return sortedProducts
    // }

    function sortByPriceAsc() {
        const sortedProducts = products.sort((a,b)=> {
            return a.price - b.price
        })
        setFilteredProducts([...sortedProducts])
    }

    function sortByPriceDesc() {
        const sortedProducts = products.sort((a,b)=> {
            return b.price - a.price
        })
        setFilteredProducts([...sortedProducts])
    }
}
