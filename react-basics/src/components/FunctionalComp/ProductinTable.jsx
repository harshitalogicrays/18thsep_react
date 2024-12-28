import React from 'react'
import products from '../../assets/productlist'
const ProductinTable = () => {
  return (
    <div className='container mt-5 col-8'>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <td>Sr.No</td>
                    <td>category</td>
                    <td>Name</td>
                    <td>Image</td>
                    <td>price</td>
                    <td>stock</td>
                </tr>
            </thead>
            <tbody>
                {/* {products.map((product,index)=>
                <tr key={product.id}>
                    <td>{index+1}</td>
                    <td>{product.category}</td>
                    <td>{product.name}</td>
                    <td><img src={product.image}  height={50} width="50px"/></td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                </tr>
                )} */}


            {/* {products.map((product,index)=>{
                         return <tr key={product.id}>
                                <td>{index+1}</td>
                                <td>{product.category}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image}  height={50} width="50px"/></td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                            </tr>
            })} */}
    {products.length==0 && <tr><td colSpan={6} className='text-center'> No Product Found</td></tr>}
    {products.map((product,index)=>{
             let {id,category,name,price,stock,image} =product
                         return <tr key={id}>
                                <td>{index+1}</td>
                                <td>{category}</td>
                                <td>{name}</td>
                                <td><img src={image}  height={50} width="50px"/></td>
                                <td>{price}</td>
                                <td>{stock}</td>
                            </tr>
            })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductinTable
