// forgotPasswordSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlApi } from "../constants/api";

export const forgotPasswordReducer = createAsyncThunk(
  "forgotPassword/forgotPasswordReducer",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(UrlApi.forgotPassword, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    data: null,
  },
  reducers: {
    clearData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPasswordReducer.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(forgotPasswordReducer.rejected, (state, action) => {
        state.data = null;
      });
  },
});

export const { clearData } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
