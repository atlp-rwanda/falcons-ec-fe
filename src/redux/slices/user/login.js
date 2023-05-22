import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const signin = createAsyncThunk('users/signin', async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signin`, data);
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('token', token);
      window.location.href = '/';
    }
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    let error = err.response.data;
    toast.error('Signin failed: ' + error.message);
  }
});

const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    response: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.loading = false;
      state.response = { ...action.payload };
      state.error = null;
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const signinActions = signinSlice.actions;
export default signinSlice;
