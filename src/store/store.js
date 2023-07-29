import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./captureCards/reducer";
import searchReducer from "./captureSearch/reducer";

export const store = configureStore({
  reducer: {
    cardsReducer: cardsReducer,
    searchReducer: searchReducer,
  },
});
