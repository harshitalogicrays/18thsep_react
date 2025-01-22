import React, { useEffect, useState } from 'react'
// import products from '../../assets/productlist'
import ProductItems from './ProductItems'
const AllProducts = () => {
  let [products,setProducts]=useState([])

  let getData = ()=>{}

  useEffect(()=>{getData()},[])

  return (
   <>
    <ProductItems products={products}/>
   </>
  )
}
export default AllProducts
