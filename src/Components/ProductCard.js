import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addCart } from '../features/cart/CartSlice';
import './css/ProductCard.css';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleAddToCart = () => {
    dispatch(addCart(product));
    navigate('/cart')
  };



  return (
    <div>








      <div className="product-card">



        <img src={product.image} alt={product.title} className='Product-img' />
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>

          <h5 style={{ color: 'black' }}>{product.title}</h5>
          <p style={{ textAlign: 'center' }}> <b> ${product.price} </b>   </p>


        </Link>



        <button className='btn btn-success' onClick={handleAddToCart}>Add to Cart</button>


      </div>








    </div>
  )
}

export default ProductCard
