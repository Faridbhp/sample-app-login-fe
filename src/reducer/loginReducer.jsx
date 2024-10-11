// loginSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlApi } from "../constants/api";

// Thunk untuk pendaftaran
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(UrlApi.login, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: null,
    isLoading: false, // Tambahkan isLoading ke state
    error: null, // Tambahkan error ke state untuk menangani error
  },
  reducers: {
    clearData: (state) => {
      state.data = null;
      state.error = null; // Reset error saat data dibersihkan
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true; // Set isLoading ke true saat request dimulai
        state.error = null; // Reset error saat request baru dimulai
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false; // Set isLoading ke false saat request selesai
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false; // Set isLoading ke false jika request gagal
        state.error = action.payload; // Simpan error yang diterima
        state.data = null;
      });
  },
});

export const { clearData } = loginSlice.actions;
export default loginSlice.reducer;
