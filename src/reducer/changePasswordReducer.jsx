// changePasswordSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlApi } from "../constants/ApiService";
import { AuthHeader } from "../constants/AuthHeader";

export const changePasswordReducer = createAsyncThunk(
  "changePassword/changePasswordReducer",
  async (data, { rejectWithValue }) => {
    try {
      const url = UrlApi.changePassword;
      const token = localStorage.getItem("authToken");
      const headers = AuthHeader(token);
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState: {
    data: null,
    isLoading: false, // Tambahkan isLoading ke state
    error: null, // Tambahkan error ke state untuk menangani error
  },
  reducers: {
    clearDataChangePassword: (state) => {
      state.data = null;
      state.error = null; // Reset error saat data dibersihkan
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePasswordReducer.pending, (state) => {
        state.isLoading = true; // Set isLoading ke true saat request dimulai
        state.error = null; // Reset error saat request baru dimulai
      })
      .addCase(changePasswordReducer.fulfilled, (state, action) => {
        state.isLoading = false; // Set isLoading ke false saat request selesai
        state.data = action.payload;
      })
      .addCase(changePasswordReducer.rejected, (state, action) => {
        state.isLoading = false; // Set isLoading ke false jika request gagal
        state.error = action.payload; // Simpan error yang diterima
        state.data = null;
      });
  },
});

export const { clearDataChangePassword } = changePasswordSlice.actions;
export default changePasswordSlice.reducer;
