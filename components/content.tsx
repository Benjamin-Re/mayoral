import Card from './card'
import { useContext } from 'react'
import { GlobalContext } from './context'

export default function Content() {
  const { getFilteredProducts } = useContext(GlobalContext)
  const products = getFilteredProducts
  
  return (
    <>
      {products?.map((product) => {
        return <Card {...product} key={product.id}></Card>;
      })}
    </>
  );
}
