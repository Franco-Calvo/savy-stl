import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const captureCards = createAsyncThunk(
  "captureCards",
  async ({ captureCategories, captureText }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/aws/files" +
          "?name=" +
          captureText +
          "&category=" +
          captureCategories
      );
      return {
        cards: response.data,
      };
    } catch (error) {
      console.log(error);
      return {
        cards: [],
      };
    }
  }
);

const actions = { captureCards };

export default actions;
