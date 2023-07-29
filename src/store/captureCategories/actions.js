import { createAction } from "@reduxjs/toolkit";

const captureCategories = createAction(
  "captureCategories",
  ({ categories }) => {
    return {
      payload: {
        category: categories,
      },
    };
  }
);

const actions = { captureCategories };
export default actions;
