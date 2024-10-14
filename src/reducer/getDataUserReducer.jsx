// getDataUserSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UrlApi } from "../constants/ApiService";
import { AuthHeader } from "../constants/AuthHeader";

export const getDataUserReducer = createAsyncThunk(
  "getDataUser/getDataUserReducer",
  async (_, { rejectWithValue }) => {
    try {
      const url = UrlApi.getDataUser;
      const token = localStorage.getItem("authToken");
      const headers = AuthHeader(token);
      const response = await axios.post(url, {}, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getDataUserSlice = createSlice({
  name: "getDataUser",
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
      .addCase(getDataUserReducer.pending, (state) => {
        state.isLoading = true; // Set isLoading ke true saat request dimulai
        state.error = null; // Reset error saat request baru dimulai
      })
      .addCase(getDataUserReducer.fulfilled, (state, action) => {
        state.isLoading = false; // Set isLoading ke false saat request selesai
        state.data = action.payload;
      })
      .addCase(getDataUserReducer.rejected, (state, action) => {
        state.isLoading = false; // Set isLoading ke false jika request gagal
        state.error = action.payload; // Simpan error yang diterima
        state.data = null;
      });
  },
});

export const { clearData } = getDataUserSlice.actions;
export default getDataUserSlice.reducer;
