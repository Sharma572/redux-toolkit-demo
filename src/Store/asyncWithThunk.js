// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const STATUES = Object.freeze({
//     IDLE:'Idle',
//     ERROR:'Error',
//     LOADING:'Loading',
// })

// const  asyncSlice =createSlice({
//     name:'product',
//     initialState:{
//         data: [],
//         Status: STATUES.IDLE,
//     },
//     extraReducers: (builder)=>{
//       builder
//       .addCase(fetchProduct.pending,(state,action)=>{
//           state.Status =STATUES.LOADING;
//       })
//       .addCase(fetchProduct.fulfilled,(state,action)=>{
//           state.data = action.payload;
//           state.Status =STATUES.IDLE;
//       })
//       .addCase(fetchProduct.rejected,(state,action)=>{
//           state.Status =STATUES.ERROR;
//       })
//     },
// })

// export const{setProduct,setStatus} =  asyncSlice.actions;
// export default  asyncSlice.reducer;



// export const fetchProduct=  createAsyncThunk('product/fetch', async ()=>{
//     const res = await fetch('https://fakestoreapi.com/products')
//     const data = await res.json();
//     // console.log(data);
//     return data;
// })