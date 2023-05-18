import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { ProductApi } from './slices/products';
import { reviewApi } from './slices/review';

const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (g) => g().concat(ProductApi.middleware),
});

setupListeners(store.dispatch);
export default store;
