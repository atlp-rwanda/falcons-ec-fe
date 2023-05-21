import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signup = createAsyncThunk('users/register', async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/register`, data);
    if (response.status === 201) {
      toast.success('User created. Please verify your email.');
      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
    }
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    let error = err.response.data;
    toast.error('Signup failed: ' + error.message);
  }
});

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    response: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.response = { ...action.payload };
      state.error = null;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const signupActions = signupSlice.actions;
export default signupSlice;
