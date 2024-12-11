import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeOrders } from '../features/Orders/OrdersSlice'

const Orders = () => {

  const orders = useSelector((state) => state.orders.items)
  console.log("orders", orders)

  const dispatch = useDispatch()

  const CancelOrder = (id) => {
    console.log("id", id)
    dispatch(removeOrders(id))

  }
  return (
    <div>


      <div style={{ margin: '20px', display: 'flex', flexDirection: 'row' }}>


        {
          orders.length > 0 ? orders.map((product, index) => (

            <div className='Order-card' key={index}>

              <h5 style={{ color: 'green' }}> Your Order is Accepted </h5>

              <div>
                <img
                  src={`https://img.freepik.com/free-vector/delivery-man-diving-motorcycle-moterbike-with-map-screen-tablet_1308-51374.jpg?t=st=1733897724~exp=1733901324~hmac=0d834a13d5313fc21db8b3c9df1a8ecc8cb7f8c284d2922390556923db405203&w=740`}
                  alt="Delivery Image"
                  style={{ width: '100%' }}
                  className='del-Img' />
              </div>

              <br></br>

              <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
                <img src={product.image} alt={product.title} />
                <h6> {product.title}</h6>

              </div>

        
              <p>Quantity : {product.Quantity}</p>
               <p > Cash on delivery: <b style={{ color: '#1586b4' }}>  ${product.price * product.Quantity} </b> </p>

              <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>






              </div>
              <button className='btn btn-danger' onClick={() => CancelOrder(product.orderid)} style={{ fontSize: '12px' }}> Cancel Order </button>


            </div>



          )) : <diV style={{margin:'0 auto'}}>
              <h4 style={{textAlign:'center'}}> No Orders</h4>  <br></br>
              <img src="https://img.freepik.com/free-photo/little-girl-t-shirt-apron-looking-into-cardboard-box-looking-puzzled_176474-39999.jpg?t=st=1733920669~exp=1733924269~hmac=bb40a0aca6519f85b294453e5188d550296b53aa2227efe4b624a5e585a9173f&w=996"  style={{width:'350px',height:'300px'}} />
          </diV>
        }

      </div>

    </div>
  )
}

export default Orders
