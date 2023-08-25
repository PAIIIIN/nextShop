import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart/cart.slice";
import { reducer as toggleHandler } from "./cart/togleHandler.slice";

const reducers = combineReducers({
  CartItems: cartReducer,
  toggleHandler: toggleHandler,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
