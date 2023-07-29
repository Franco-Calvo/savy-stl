import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const { captureCategories } = actions;

const initialState = {
  category: "",
};

const reducer = createReducer(initialState, (builder) =>
  builder.addCase(captureCategories, (state, action) => {
    const newState = {
      ...state,
      category: action.payload.category.split(","),
    };
    return newState;
  })
);

export default reducer;
