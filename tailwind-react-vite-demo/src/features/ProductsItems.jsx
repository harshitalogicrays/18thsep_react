import React from 'react'

const ProductsItems = ({products}) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {products.length==0 && <h1 className='text-3xl'>No Product Found</h1>}
    {products.map((product) => (
      <div key={product.id} className="relative">
        <img
          alt={product.title}
          src={product.images[0]}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover hover:opacity-75   lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">&#8377;{product.price}</p> 
        </div>
        <p className="mt-1 text-sm text-gray-500">Available: {product.stock}</p>
        <button type="button" className=' relative mt-2 bg-indigo-300 rounded-2xl p-2 shadow-lg shadow-indigo-400 hover:text-white hover:bg-indigo-800 cursor-pointer'
        onClick={()=>alert('added')}>Add to Cart</button>
      </div>
    ))}
  </div>
  )
}

export default ProductsItems
