import React, { useEffect, useState } from 'react'
import ProductsItems from './ProductsItems'
import { toast } from 'react-toastify'
import axios from 'axios'


const Products = () => {
  let [products,setProducts] =useState([])
  let getData = async()=>{
    try{
        let res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setProducts(data.products)

      //  let res=  await axios.get("https://dummyjson.com/products")
      //  setProducts(res.data.products)
    }
    catch(err){toast.error(err.message)}
  }
  useEffect(()=>{getData()},[])
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

      <ProductsItems products={products}/>
      </div>
    </div>
  )
}

export default Products
