/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import instance from "../axiosinstance";


export const updatePasswordThunk = createAsyncThunk("user/update-password",
async(password,{rejectWithValue})=>{
    try{
      const response = await instance.patch(
        '/users/password',
        password
      );
      toast.success("Password updated successfully");
      setTimeout(() =>{
        window.location.href ="/";
      }, 50000);
      return response.data
    }catch(err){
      const error = err.response.data;
      toast.error('Update password failed:'+ error.message);
      
     return rejectWithValue(err.response.data)   
    }
})

