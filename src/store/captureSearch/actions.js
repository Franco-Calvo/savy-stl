import { createAction } from "@reduxjs/toolkit";

const captureText = createAction("captureText", ({ inputText }) => {
  return { payload: { text: inputText } };
});

const actions = { captureText };
export default actions;
