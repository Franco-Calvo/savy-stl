import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const { captureText } = actions;

const initialState = {
  text: "",
};

const reducer = createReducer(initialState, (builder) =>
  builder.addCase(captureText, (state, action) => {
    const newState = {
      ...state,
      text: action.payload.text.trim(),
    };
    return newState;
  })
);

export default reducer;
