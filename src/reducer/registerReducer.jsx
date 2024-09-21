// registerSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlApi } from "../constants/api";

// Thunk untuk pendaftaran
export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(UrlApi.register, userData);
      return response.data;
    } catch (error) {
      console.log('response error', error.response.data)
      // return rejectWithValue(error.response.data);
      return error.response.data;
    }
  }
);

const registerSlice = createSlice({
  name: "register",
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
      .addCase(registerUser.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.data = null;
      });
  },
});

export const { clearData } = registerSlice.actions;
export default registerSlice.reducer;
