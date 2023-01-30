import { configureStore } from "@reduxjs/toolkit";
import interactionsReducer from "../features/interactions/interactionsSlice";
import selectorReducer from "../features/selector/selectorSlice";
export default configureStore({
  reducer: {
    selection: selectorReducer,
    interactions: interactionsReducer,
  },
});
