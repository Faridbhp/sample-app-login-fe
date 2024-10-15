// resetPasswordSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlApi } from "../constants/ApiService";

// Thunk untuk pendaftaran
export const resetPasswordReducer = createAsyncThunk(
  "resetPassword/resetPasswordReducer",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(UrlApi.resetPassword, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "resetPassword",
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
      .addCase(resetPasswordReducer.pending, (state, action) => {
        state.data = null;
        state.error = null;
        state.isLoading = true;
      })
      .addCase(resetPasswordReducer.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(resetPasswordReducer.rejected, (state, action) => {
        state.data = null;
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { clearData } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
