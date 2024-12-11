import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCart } from '../features/cart/CartSlice';
import './CartPage.css';


// Create the Auth Context


const ProductPage = ({children}) => {
  const dispatch = useDispatch();



 



  const { id } = useParams()

  console.log( id)

  

 
  const product = useSelector((state) =>{
    console.log('state',state.products.items)
    
   return state.products.items.find((item) => item.id == id)
  }
  );



  console.log('product',product)
 

  const handleAddToCart = () => {
    dispatch(addCart(product));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
   
    <div className="ProductPage-card">
      <h4 style={{color:'darkblue',textDecoration:'underline'}}> {product.title}</h4>
      <img src={product.image} alt={product.title} />
      <p style={{color:'green'}}> {product.category}   </p>
      <h5> <b> {product.title} </b>  </h5>
      <p style={{textAlign:'justify'}}>{product.description}</p>
      <p> <b>${product.price}</b></p>
      <button onClick={handleAddToCart} className='btn btn-success'>Add to Cart</button>
      {children}
    </div>
  );
};

export default  ProductPage ;
