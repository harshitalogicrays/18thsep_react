import React from 'react'
import products from '../../assets/productlist'
import ProductItems from './ProductItems'
const AllProducts = () => {
  return (
   <>
    <ProductItems products={products}/>
   </>
  )
}
export default AllProducts
