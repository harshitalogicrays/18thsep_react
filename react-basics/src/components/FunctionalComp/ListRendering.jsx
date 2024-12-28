import React, { Fragment } from 'react'
import products from '../../assets/productlist'
const ListRendering = () => {
    let names = ["Amit","Sachin","mahi","Akshay","Monil","Dhaval"]
    
    // console.log(products[0].name)
    let result  = names.map((name,index)=><h1 key={index}>{name}</h1>)
  return (
    <div>
      {/* {names} */}

      {/* {names.map((name,index)=>{
        return <h1>{name}</h1>
      })} */}

    {/* {names.map((name,index)=><h1 key={index}>{name}</h1>)} */}

    {/* {result} */}
{/* 
    {products.map((prod,i)=><p>{JSON.stringify(prod)}</p>)} */}
    
    {products.map((prod,i)=><Fragment key={i}>{prod.name}</Fragment>)}
    </div>
  )
}

export default ListRendering
