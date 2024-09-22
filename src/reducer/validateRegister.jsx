// validateRegisterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlApi } from "../constants/api";

// Thunk untuk pendaftaran
export const validateRegisterReducer = createAsyncThunk(
  "validateRegister/validateRegisterReducer",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(UrlApi.validateRegister, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const validateRegisterSlice = createSlice({
  name: "validateRegister",
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
      .addCase(validateRegisterReducer.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(validateRegisterReducer.rejected, (state, action) => {
        state.data = null;
      });
  },
});

export const { clearData } = validateRegisterSlice.actions;
export default validateRegisterSlice.reducer;
