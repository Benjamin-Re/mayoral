import { NextPage } from 'next';
import Card from '../../components/card';
import { useContext } from 'react'
import { GlobalContext } from '../../components/context';

const HomePage: NextPage = () => {
  const products = useContext(GlobalContext)
 
  return (
    <>
      {products?.map(product => {
        return (
          <Card {...product}></Card>
        )
      })}
    </>
  );
};

export default HomePage;

