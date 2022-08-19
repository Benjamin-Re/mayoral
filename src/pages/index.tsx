import { NextPage } from 'next';
import Card from '../../components/card';
import { useContext } from 'react'
import { GlobalContext } from '../../components/context';

const HomePage: NextPage = () => {
  const {getFilteredProducts} = useContext(GlobalContext)
  const products = getFilteredProducts

  return (
    <>
      {products?.map(product => {
        return (
          <Card {...product} key={product.id}></Card>
        )
      })}
    </>
  );
};

export default HomePage;

