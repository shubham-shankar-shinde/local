import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitItems: (state, action) => {
      return action.payload;
    },
  },
});
export const itemAction = itemSlice.actions;
export default itemSlice;
