import { createSlice } from "@reduxjs/toolkit";

export const toggleHandler = createSlice({
  name: "toggleHandler",
  initialState: false,
  reducers: {
    openHandler: (state) => {
      return (state = true);
    },
    closeHandler: (state) => {
      return (state = false);
    },
  },
});
export const { reducer, actions } = toggleHandler;
