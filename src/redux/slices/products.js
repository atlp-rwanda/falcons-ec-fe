import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://e-commerce-falcons.onrender.com/api/v1';

export const ProductApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: '/products', method: 'GET' }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({ url: `/products/${id}`, method: 'GET' }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = ProductApi;
