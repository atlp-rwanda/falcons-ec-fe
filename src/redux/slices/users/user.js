import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const UserApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => ({
        url: '/users/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = UserApi;
