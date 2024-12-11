import { createSlice } from "@reduxjs/toolkit"


const CartSlice = createSlice({
  name:'cart',
  initialState:{
    items:[{
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "Quantity" : 1,
      "rating": {
        "rate": 3.9,
        "count": 120
      }} ],
    status:'idle',
    error :'null',
    
  },
  reducers:{
   
    addCart: (state,action)=>{
      const item = state.items.find((item)=> item.id == action.payload.id)
      if(item){
        item.Quantity +=1
      }else{
        state.items.push({...action.payload,Quantity :1})

      }

        
    },
    RemoveCart: (state,action)=>{
       state.items = state.items.filter((item) => item.id !== action.payload.id)
    },

    AddQuantity : (state,action)=>{
     
    const item = state.items.find((item)=> item.id == action.payload)

    if (item) {
     
     item.Quantity += 1; // Increment the Quantity of the found item
    }
    },

    RemoveQuantity : (state,action)=>{
    
    const item = state.items.find((item)=> item.id == action.payload)
  
    if (item) {
     if(item.Quantity > 0){
      item.Quantity -= 1; // Increment the Quantity of the found item

     }
    
    }
    }

  }


})


export const {addCart,RemoveCart,AddQuantity,RemoveQuantity} = CartSlice.actions
export default CartSlice.reducer


