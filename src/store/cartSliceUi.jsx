import { createSlice } from "@reduxjs/toolkit";

const cartSliceUi = createSlice({
  name: "cartSliceUi",
  initialState: { carIsVisible: false },
  reducers: {
    toggleCartVisibility(state) {
      state.carIsVisible = !state.carIsVisible;
    },
  },
});

export const cartSliceUiActions = cartSliceUi.actions;

export default cartSliceUi;