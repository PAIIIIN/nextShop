import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "@/app/interface/data.interface";

const initialState: any = [];

export const CartItems = createSlice({
  name: "CartItems",
  initialState,
  reducers: {
    addToCart: (state, { payload: product }) => {
      const { quantity, id, title, price, image } = product;
      const isExists = state.find((p: IProducts) => product.id === p.id);
      if (isExists) {
        isExists.quantity += quantity;
      } else state.push({ id, title, price, quantity, image });
    },
    deleteFromCart: (state, { payload: product }) => {
      return state.filter((cartItem: IProducts) => cartItem.id !== product.id);
    },
    increaseQuantity: (state, { payload: product }) => {
      const isExists = state.find((p: IProducts) => product.id === p.id);
      isExists.quantity++;
    },
    decreaseQuantity: (state, { payload: product }) => {
      const isExists = state.find((p: IProducts) => product.id === p.id);
      if (isExists.quantity < 2) {
        return state.filter(
          (cartItem: IProducts) => cartItem.id !== product.id
        );
      } else isExists.quantity--;
    },
  },
});

export const { reducer, actions } = CartItems;
