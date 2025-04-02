import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import CartReducer from "./CartSlice"



const Store = configureStore({
  reducer: {
    user: userReducer,
    cart: CartReducer
  }
})

export default Store;