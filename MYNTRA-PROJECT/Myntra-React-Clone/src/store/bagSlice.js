import { createSlice } from "@reduxjs/toolkit";

const BagSlice=createSlice({
  name:"BagSlice",
  initialState:[],
  reducers:{
    addBag:(state,action)=>{
      state.push(action.payload);
    },
    removetoBag:(state,action)=>{
      return state.filter(itemId=>itemId!==action.payload);
    }

  }
})
export const BagSliceAction= BagSlice.actions;
export default BagSlice;