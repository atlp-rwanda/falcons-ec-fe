import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { VITE_SERVER_URL } = process.env;
const tokenStr = localStorage.getItem('token');

export const fetchSellerProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page, limit }) => {
    try {
      const response = await axios.get(
        `${VITE_SERVER_URL}/products?page=${page}&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${tokenStr}` },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export const fetchSingleProduct = createAsyncThunk(
  'user/fetchSingleProduct',
  async ({ id }) => {
    const response = await axios.get(`${VITE_SERVER_URL}/products/${id}`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    });
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: [],
    totalPages: null,
    currentPage: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteProduct(state, action) {
      const deletedProductId = action.payload;
      return state.products.filter(
        (product) => product.id !== deletedProductId
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSellerProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.Products;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
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
