import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import productAddSlice from './slices/product/productAdd';
import sidebarSlice from './slices/sidebar';
import categoriesSlice from './slices/product/categories';

const reducers = {
  counter: counterReducer
}
const store = configureStore({
  reducer: {
    ...reducers,
    counter: counterReducer,
    productAdd: productAddSlice.reducer,
    sidebar: sidebarSlice.reducer,
    category: categoriesSlice.reducer,
    // Register all reducers here
  },
});


export  {store, reducers};
