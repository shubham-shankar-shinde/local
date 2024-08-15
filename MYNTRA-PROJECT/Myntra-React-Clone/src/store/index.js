import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import BagSlice from "./bagSlice";
 
 
const MyntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    bag:BagSlice.reducer,
     
  },
});
export default MyntraStore;
