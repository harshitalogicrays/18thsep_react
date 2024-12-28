import React from 'react'

const ProductCard = ({product}) => {

  return (
    <div className='col-3 mb-3'>
      <div className="card">
        <img src={product.image} alt={product.name} className="card-img-top" height="200px" />
        <div className="card-body">
          <h5>{product.name}</h5>
            <p>{product.category}<br/>
            &#8377;{product.price}<br/>
            {product?.stock > 0 ? 
            <span class="badge rounded-pill text-bg-success">In Stock</span >
      : <span class="badge rounded-pill text-bg-danger">Out of Stock</span >}

          </p>
            <button type="button" className='btn btn-primary'><i className='bi bi-cart'></i> Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
