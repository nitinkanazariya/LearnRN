import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
const initialState = {
  cart: []
}
const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    AddToCart: (state, action) => {
      if (!state.cart.some((item) => item.trayNo == action.payload.trayNo))
        state.cart.push(action.payload)
    },
    RemoveToCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.trayNo !== action.payload.trayNo)
    },
    itemCountIncrease: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.trayNo === action.payload) {
          return { ...item, itemCount: item.itemCount + 1 };

        }
        return item;
      });
    },
    itemCountDecrease: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.trayNo == action.payload) {
          return { ...item, itemCount: item.itemCount == 1 ? 1 : item.itemCount - 1 }
        }
        return item;
      })

    }
  }
})

export const { AddToCart, RemoveToCart, itemCountIncrease, itemCountDecrease } = CartSlice.actions
export default CartSlice.reducer