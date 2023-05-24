/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import { getProfileReducer, updateProfileReducer } from './slices/profile/updateProfile';
import { ProductApi } from './slices/products.js';
import productsReducer from './slices/sellerProducts';
import LandingPageProductsReducer from './slices/LandingPage';

import productAddSlice from './slices/product/productAdd';
import sidebarSlice from './slices/sidebar';
import categoriesSlice from './slices/product/categories';
import signupSlice from './slices/user/signup';
import passwordReducer from "./slices/user/updatePassword";

const reducers = {
  [ProductApi.reducerPath]: ProductApi.reducer,
};
const store = configureStore({
  reducer: {
    ...reducers,
    product: productsReducer,
    products: LandingPageProductsReducer,
    productAdd: productAddSlice.reducer,
    sidebar: sidebarSlice.reducer,
    category: categoriesSlice.reducer,
    signup: signupSlice.reducer,
    profile: getProfileReducer,
    profileUpdate: updateProfileReducer,
    passwordUpdate: passwordReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
})
  

export default store ;
