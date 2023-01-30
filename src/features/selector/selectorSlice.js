import { createSlice } from "@reduxjs/toolkit";

export const selectorSlice = createSlice({
  name: "selector",
  initialState: {
    selection: "All",
  },
  reducers: {
    alter: (state, action) => {
      state.selection = action.payload;
    },
  },
});
export const { alter } = selectorSlice.actions;

export default selectorSlice.reducer;
