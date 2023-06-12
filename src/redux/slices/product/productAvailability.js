import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
const tokenStr = localStorage.getItem('token');

export const updateAvailability = createAsyncThunk(
  'product/updateAvailability',
  async (id) => {
    try {
      const response = await axios({
        method: 'patch',
        url: `${import.meta.env.VITE_SERVER_URL}/products/${id}/availability`,
        headers: { Authorization: `Bearer ${tokenStr}` },
      });
      if (response.status == 200) {
        toast.success('Product availability updated!');
      } else {
        throw new Error('error');
      }
    } catch (error) {
      toast.error('Product availability not updated');
    }
  }
);

const productAvailabilitySlice = createSlice({
  name: 'productAvailability',
  initialState: {
    loading: false,
    error: null,
    response: null,
    serverResponded: false,
  },
  extraReducers: (builder) => {
    builder.addCase(updateAvailability.pending, (state) => {
      state.loading = true;
      state.serverResponded = false;
      state.error = null;
      state.response = null;
    });
    builder.addCase(updateAvailability.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.serverResponded = true;
    });
    builder.addCase(updateAvailability.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.serverResponded = true;
    });
  },
});

export const productAvailabilityActions = productAvailabilitySlice.actions;
export default productAvailabilitySlice;