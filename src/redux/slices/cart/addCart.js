import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const { VITE_SERVER_URL } = process.env;
const token = localStorage.getItem('token');

export const addCart = createAsyncThunk('cart/add', async (product_id) => {
  try {
    const response = await axios.post(
      `${VITE_SERVER_URL}/cart`,
      { product_id, quantity: 1 },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (response.status === 200) {
      toast.success('Successfully Added To Cart.');
    } else if (response.status === 400) {
      toast.warn('Stock is not available');
    }
    return null;
  } catch (err) {
    const error = err.response.data;
    toast.error(`Add to cart failed: ${error.message}`);
    throw error;
  }
});

const addCartSlice = createSlice({
  name: 'addCart',
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(addCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCart.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const addCartActions = addCartSlice.actions;
export default addCartSlice;
