
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { useState } from "react"

export const fetchProducts = createAsyncThunk("productSlice/fetchProducts",async()=>
  {const res = await fetch("https://api.escuelajs.co/api/v1/products")
  const data = await res.json()
  return data}
)
 
export const productSlice= createSlice({
  name:"productSlice",
  initialState:[],
  reducers:{},
  extraReducers:(builder)=>{
  builder.addCase(fetchProducts.fulfilled,(state,action)=>{
  return action.payload
  })
  }
}  
  
 )


 export default productSlice.reducer