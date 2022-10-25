import { createSlice } from "@reduxjs/toolkit";

export const STATUES = Object.freeze({
    IDLE:'Idle',
    ERROR:'Error',
    LOADING:'Loading',
})

const  productSlice =createSlice({
    name:'product',
    initialState:{
        data: [],
        Status: STATUES.IDLE,
    },
    reducers:{
       setProduct(state,action){
          state.data= action.payload;
       },
       setStatus(state,action){
         state.Status = action.payload;
       }
    }
})

export const{setProduct,setStatus} =  productSlice.actions;
export default  productSlice.reducer;


export function fetchProduct(){
    return async function asyncThunk(dispatch,getState){
        dispatch(setStatus(STATUES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            dispatch(setProduct(data))
        dispatch(setStatus(STATUES.IDLE))

        } catch (error) {
            console.log(error);
        dispatch(setStatus(STATUES.ERROR))
            
        }
    }
} 