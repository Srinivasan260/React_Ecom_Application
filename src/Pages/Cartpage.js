import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddQuantity, RemoveCart, RemoveQuantity } from '../features/cart/CartSlice'
import { addOrders } from '../features/Orders/OrdersSlice'
import './CartPage.css'

const Cartpage = () => {


  var islogin = sessionStorage.getItem('login') 
  console.log(islogin)
  

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)

  console.log('cart', cart)

  const handledelete = (id) => {

    dispatch(RemoveCart({ id }))
    alert("cart is deleted")

  }

  const Increment = (id) => {
    dispatch(AddQuantity(id))
  }

  const Decrement = (id) => {
    dispatch(RemoveQuantity(id))
  }

  const handleOrder = (product) => {
    dispatch(addOrders(product))
    navigate('/orders')

  }


  return (
    <div>

      <br></br>

    { cart.length > 0 ?  <h2 style={{ textAlign: 'center',color:'#198754'}}>  Cart  <i class="bi bi-cart-plus-fill"></i></h2> : null } 

      <div className='Cart-Container'>


        {
          cart.length > 0 ?
            cart.map((product, index) => (

              <div className='cart-card' key={index}>
                <img src={product.image} alt={product.title} />
                <h5 key={index}> {product.title}</h5>
                <p> ${product.price}</p>

                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>


                  <button onClick={() => Increment(product.id)} className='btn btn-secondary'> + </button> {product.Quantity}  <button onClick={() => Decrement(product.id)} className='btn btn-secondary'> - </button>

                  <button className='btn btn-danger' onClick={() => handledelete(product.id)}> <i className="bi bi-trash3-fill"></i></button>



                </div>
                {

                }
               { islogin ? <button className='btn btn-success' onClick={() => handleOrder(product)}> Place Order </button> : <p style={{textDecoration:'underline',color:'green'}}> <b> To Place Order Please Login </b> </p> } 


              </div>

            ))

            :
             <div style={{ margin: '0 auto'}}>
              <h4 style={{ textAlign: 'center' }}> No  Products in Cart </h4>  <br></br>
              <img src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?t=st=1733920922~exp=1733924522~hmac=01be6f85fc3303f5d1d902855fd4c956098ef360c6f92db49a391aaccf7beb43&w=740" style={{ width: '350px', height: '300px' }} />
            </div>


        }
      </div>




    </div>
  )
}

export default Cartpage
