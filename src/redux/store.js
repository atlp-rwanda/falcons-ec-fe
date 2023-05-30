/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import {
  getProfileReducer,
  updateProfileReducer,
} from './slices/profile/updateProfile';
import { ProductApi } from './slices/products.js';
import productsReducer from './slices/sellerProducts';
import LandingPageProductsReducer from './slices/LandingPage';

import productAddSlice from './slices/product/productAdd';
import sidebarSlice from './slices/sidebar';
import categoriesSlice from './slices/product/categories';
import signupSlice from './slices/user/signup';
import signinSlice from './slices/user/login';
import googleAuthSlice from './slices/googleAuthSlice';
import forgotPasswordSlice from './slices/user/forgotpassword';
import resetPasswordSlice from './slices/user/resetpassword';

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
    forgotPassword: forgotPasswordSlice.reducer,
    resetPassword: resetPasswordSlice.reducer,
    signin: signinSlice.reducer,
    profile: getProfileReducer,
    profileUpdate: updateProfileReducer,
    signin: signinSlice.reducer,
    googleAuth: googleAuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});

export default store;
