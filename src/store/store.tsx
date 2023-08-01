import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./captureCards/reducer";
import searchReducer from "./captureSearch/reducer";

interface CardsState {}

interface SearchState {}

interface RootState {
  cardsReducer: CardsState;
  searchReducer: SearchState;
}

export const store = configureStore({
  reducer: {
    cardsReducer: cardsReducer,
    searchReducer: searchReducer,
  },
} as any);
