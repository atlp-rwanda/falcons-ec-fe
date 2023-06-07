import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const { VITE_SERVER_URL } = process.env;
const token = localStorage.getItem('token');

export const addProductToWishlist = createAsyncThunk('productWish/add', async (product_id) => {
  try {
    const response = await axios.post(
      `${VITE_SERVER_URL}/productWish`,
      { product_id: product_id.id },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (response.data.message === 'Product added to wishlist successfully!') {
      toast.success('Product added to wishlist successfully!');
    } else if (response.data.message === 'Stock is not availabble') {
      toast.warn('Stock is not availabble');
    }
    return null;
  } catch (err) {
    const error = err.response.data;
    toast.error(`Failed to add to wishlist: ${error.message}`);
    throw error;
  }
});

const addProductToWishlistSlice = createSlice({
  name: 'addProductToWishlist',
  initialState: {
    loading: false,
    error: null,
    wishlist: null,
  },
  extraReducers: (builder) => {
    builder.addCase(addProductToWishlist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addProductToWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.wishlist = action.payload;

    });
    builder.addCase(addProductToWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const addToWishlistActions = addProductToWishlistSlice.actions;
export default addProductToWishlistSlice;