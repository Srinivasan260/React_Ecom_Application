import { createSlice } from "@reduxjs/toolkit";



const OrderSlice = createSlice({

    name: 'Orders',
    initialState:{
        items:[],
        status:'idle',
        error:'null'
    },
    reducers:{
        addOrders :(state,action) =>{
         
            state.items.push({...action.payload,orderid : Math.floor(Math.random() * 1000000) })
            alert('Successfully Order is placed')
            
        },
        removeOrders : (state,action) =>{
          
           state.items = state.items.filter((item)=>item.orderid !== action.payload)
           alert("Your Order is Cancelled ")
        }
    }





})


export default OrderSlice.reducer
export const {addOrders,removeOrders} = OrderSlice.actions