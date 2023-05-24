import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const tokenStr =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNjA0MDlkMTItZGRhZC00OTM4LWEzN2EtYzE3YmMzM2FhNGJhIiwiZW1haWwiOiJraXJlbmdhYm9yaXM1QGdtYWlsLmNvbSIsInJvbGUiOiJzZWxsZXIiLCJzdGF0dXMiOnRydWV9LCJpYXQiOjE2ODQ0ODY2MDUsImV4cCI6MTY4NTA5MTQwNX0.L4lKg5SaOgeTc2r1-yBxiIPCqym5Xpk5-hTOARaqek0';

export const fetchSellerProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({page,limit}) => {
    try {
      const response = await axios.get(
        `https://e-commerce-falcons.onrender.com/api/v1/products?page=${page}&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${tokenStr}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export const fetchSingleProduct = createAsyncThunk(
  'user/fetchSingleProduct',
  async ({ id }) => {
    const response = await axios.get(
      `https://e-commerce-falcons.onrender.com/api/v1/products/${id}`,
      {
        headers: { Authorization: `Bearer ${tokenStr}` },
      }
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSellerProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchSellerProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = null;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const productActions = productsSlice.actions;
export default productsSlice.reducer;
