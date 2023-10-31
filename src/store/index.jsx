import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import forgetPasswordSlice from "./forgetPasswordSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    forgetPassword: forgetPasswordSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
