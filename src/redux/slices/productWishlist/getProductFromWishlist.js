import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const { VITE_SERVER_URL } = process.env;
const token = localStorage.getItem('token');

export const getAllProductWishes = createAsyncThunk('xproductWishes', async () => {
  try {
    const response = await axios.get(`${VITE_SERVER_URL}/productWishes`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    const error = err.response.data;
    throw error;
  }
});

const getAllProductWishesSlice = createSlice({
  name: 'getAllProductWishes',
  initialState: {
    wishlist: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductWishes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProductWishes.fulfilled, (state, action) => {
      state.loading = false;
      state.wishlist = action.payload;
      state.error = null;
    });
    builder.addCase(getAllProductWishes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { clearWishlist } = getAllProductWishesSlice.actions;
export default getAllProductWishesSlice;
