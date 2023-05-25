import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const ResetPassword = createAsyncThunk(
  'users/reset-password',
  async (data, token) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/${token}/password-reset`,
        data
      );
      if (response.status === 200) {
        toast.success('Password Reset Successfully.');
      }
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      let error = err.response.data;
      toast.error('Reset Password Failed: ' + error.error);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState: {
    response: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(ResetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ResetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.response = { ...action.payload };
      state.error = null;
    });
    builder.addCase(ResetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const resetPasswordActions = resetPasswordSlice.actions;
export default resetPasswordSlice;
