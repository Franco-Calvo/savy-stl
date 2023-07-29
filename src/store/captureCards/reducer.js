import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const { captureCards } = actions;

const initialState = {
  cards: [],
};

const reducer = createReducer(initialState, (builder) =>
  builder.addCase(captureCards.fulfilled, (state, action) => {
    const newState = {
      ...state,
      cards: action.payload.cards,
    };
    return newState;
  })
);

export default reducer;
