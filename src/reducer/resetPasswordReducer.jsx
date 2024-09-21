// resetPasswordSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlApi } from "../constants/api";

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
  },
  reducers: {
    clearData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetPasswordReducer.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(resetPasswordReducer.rejected, (state, action) => {
        state.data = null;
      });
  },
});

export const { clearData } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
