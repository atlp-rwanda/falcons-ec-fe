import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { ProductApi } from './slices/products';

const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (g) => g().concat(ProductApi.middleware),
});

setupListeners(store.dispatch);
export default store;
