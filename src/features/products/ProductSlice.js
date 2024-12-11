import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
   
    return response.data
})




const ProductSlice = createSlice({

    name : 'products',
    initialState : {
        items:[],
        status:'idle',
        error : 'null'

    },
    reducers:{},
    extraReducers : (builder) =>{
    
    builder 
    .addCase(fetchProducts.pending,(state)=>{
        state.status = 'loading'
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.status = 'succeed'
        state.items = action.payload
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
        state.status = 'failure'
        state.error = action.error.message

    })
   



    } 





});


export default ProductSlice.reducer
