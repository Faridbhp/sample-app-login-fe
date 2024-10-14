// forgotPasswordSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlApi } from "../constants/ApiService";

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
    isLoading: false,
    error: null,
  },
  reducers: {
    clearData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPasswordReducer.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(forgotPasswordReducer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(forgotPasswordReducer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data = null;
      });
  },
});

export const { clearData } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
