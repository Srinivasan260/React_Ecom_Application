import { configureStore } from '@reduxjs/toolkit';

import CartReducer from '../features/cart/CartSlice';
import OrderReducer from '../features/Orders/OrdersSlice';
import productsReducer from '../features/products/ProductSlice';
import UserReducer from '../features/User/UserSlice';

export const Store = configureStore({
  reducer: {
    products: productsReducer,
    cart: CartReducer,
    users: UserReducer,
    orders : OrderReducer
  },
});