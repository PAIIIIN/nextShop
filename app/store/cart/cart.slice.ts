import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "@/app/interface/data.interface";

const initialState: any = [];
export const CartItems = createSlice({
  name: "CartItems",
  initialState,
  reducers: {
    addToCart: (state, { payload: product }) => {
      const isExists = state.some((p: IProducts) => product.id === p.id);
      if (isExists) {
        return;
      }
      state.push(product);
    },
    deleteFromCart: (state, { payload: product }) => {
      state = state.filter((p: IProducts) => product.id !== p.id);
    },
  },
});

export const { reducer, actions } = CartItems;
