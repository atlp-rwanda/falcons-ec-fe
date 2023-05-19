import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

const tokenStr =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNTc0MDlkMTItZGRhZC00OTM4LWEzN2EtYzE3YmMzM2FhNGJhIiwiZW1haWwiOiJnYXRldGVAZ21haWwuY29tIiwicm9sZSI6InNlbGxlciIsInN0YXR1cyI6dHJ1ZX0sImlhdCI6MTY4NDA3MjUyMywiZXhwIjoxNjg0Njc3MzIzfQ.el5AG0iBJpLi4nZ-yHK8_mTCEefg8WCmgGyqeiQXoyo';

export const saveProduct = createAsyncThunk(
  'product/productAdd',
  async (data) => {
    await axios({
      method: 'post',
      url: `${import.meta.env.VITE_SERVER_URL}/products`,
      data,
      headers: { Authorization: `Bearer ${tokenStr}` },
    })
      .then((res) => {
        if (res.status == 201) {
          console.log(res.data);
          Swal.fire({
            icon: 'success',
            title: 'Product added succesfully!',
            text: `${res.data.productName} has been added.`,
            confirmButtonColor: '#64B937',
          });
        }
      })
      .catch((err) => {
        console.log(err.response.data)
        let error =
          typeof err.response.data === 'object'
            ? err.response.data.error
            : err.response.data;
        Swal.fire({
          icon: 'error',
          title: 'Product not added',
          text: error,
          confirmButtonColor: '#64B937',
        });
      });
  }
);

const productAddSlice = createSlice({
  name: 'productAdd',
  initialState: {
    response: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.response = { ...action.payload };
      state.error = null;
    });
    builder.addCase(saveProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const productAddActions = productAddSlice.actions;
export default productAddSlice;
