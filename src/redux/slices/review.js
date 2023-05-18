import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://e-commerce-falcons.onrender.com/api/v1';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (id) => ({ url: `/products/${id}/reviews`, method: 'GET' }),
    }),
  }),
});

export const { useGetReviewsQuery } = reviewApi;



