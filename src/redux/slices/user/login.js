import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const {VITE_SERVER_URL} = process.env;

export const signin = createAsyncThunk('users/signin', async (data) => {
  try {
    const response = await axios.post(`${VITE_SERVER_URL}/users/signin`, data);
    if (response.status === 200) {
      const {token} = response.data;
      localStorage.setItem('token', token);
      window.location.href = '/';
    }
    return response.data;
  } catch (err) {
    const error = err.response.data;
    toast.error(`Signin failed: ${  error.message}`);
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
