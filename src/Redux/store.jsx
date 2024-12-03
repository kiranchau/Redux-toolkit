import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Cartslice';  // Ensure the file is named correctly (cartSlice.js)
import productSlice from './ProductSlice';  // Ensure the file is named correctly (ProductSlice.js)

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;
