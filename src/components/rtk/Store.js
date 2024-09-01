
import { configureStore } from "@reduxjs/toolkit";
import productSlice  from "./slices/ProductsSlice"; 
import  cartSlice  from "./slices/CartSlice";

export const store = configureStore({
  reducer:{
    Products:productSlice,
    cart:cartSlice
  }
})