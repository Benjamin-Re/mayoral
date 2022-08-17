import { NextPage } from 'next';
import Card from '../../components/card';

interface Products {
  products: Product[]
}

interface Product {
  id: number,
  description: string,
  price: number,
  imgUrl: string,
  discount: number
}
 
const HomePage: NextPage = (props: Products) => {
  const products = props.products
  console.log(products)
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

import path from 'path'
import fsPromises from 'fs/promises'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/public/products.json')
  const jsonData = await fsPromises.readFile(filePath)
  const objectData = JSON.parse(jsonData.toString())
  return {
    props: objectData
  }
}