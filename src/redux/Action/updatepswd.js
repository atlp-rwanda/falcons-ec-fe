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
     
      setTimeout(() =>{
        window.location.href ="/profile";
      }, 10000);
      return response.data
    }catch(error){
     return rejectWithValue(error.response.data)   
    }
})

