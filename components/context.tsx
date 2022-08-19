import { createContext, useState, useEffect } from 'react';

interface props {
  children: JSX.Element | JSX.Element[];
}

export const GlobalContext = createContext(null);



export default function ContextWrapper({ children }: props) {
  const [getProducts, setProducts] = useState([]);

  
  useEffect( () => {
    fetch('products.json')
    .then(res=> res.json())
    .then(json => setProducts(json.products))
  }, [])


  return (
    <GlobalContext.Provider value={
      getProducts
    }>
      {children}
    </GlobalContext.Provider>
  );
  
}


