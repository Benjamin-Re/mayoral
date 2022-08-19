import { createContext, useState, useEffect } from 'react';



export const GlobalContext = createContext(null);



export default function ContextWrapper({ children }) {
  const [getProducts, setProducts] = useState([])
  const [getFilteredProducts, setFilteredProducts] = useState([])
  
  useEffect( () => {
    fetch('products.json')
    .then(res=> res.json())
    .then(json => {setProducts(json.products); setFilteredProducts(json.products)})
  }, [])


  return (
    <GlobalContext.Provider value={
      {getProducts, setProducts, getFilteredProducts, setFilteredProducts}
    }>
      {children}
    </GlobalContext.Provider>
  );
  
}


