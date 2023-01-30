import { createSlice } from "@reduxjs/toolkit";

export const interactionsSlice = createSlice({
  name: "interactions",
  initialState: {
    interactions: null,
    sectors: [],
    loading: true,
    error: null,
  },
  reducers: {
    setInteractions: (state, action) => {
      state.interactions = action.payload;
    },
    setSectors: (state, action) => {
      state.sectors = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { setInteractions, setSectors, setLoading, setError } =
  interactionsSlice.actions;

export default interactionsSlice.reducer;
