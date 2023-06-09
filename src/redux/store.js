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
import AdminDashboardUsersReducer from './slices/user/getUsers';
import productAddSlice from './slices/product/productAdd';
import sidebarSlice from './slices/sidebar';
import categoriesSlice from './slices/product/categories';
import signupSlice from './slices/user/signup';
import signinSlice from './slices/user/login';
import googleAuthSlice from './slices/googleAuthSlice';
import twoFactorAuthSlice from './slices/user/twoFactorAuth';
import forgotPasswordSlice from './slices/user/forgotpassword';
import resetPasswordSlice from './slices/user/resetpassword';
import { searchReducer } from './slices/product/searchProduct';
import getCartSlice from './slices/cart/getCart';
import deleteItemCartSlice from './slices/cart/deleteItemCart';
import clearCartSlice from './slices/cart/clearCart';
import updateCartSlice from './slices/cart/updateCart';
import addCartSlice from './slices/cart/addCart';
import ChangeStatusSlice, {
  FetchStatusSlice,
} from './slices/user/changestatus.js';
import ChangeRoleSlice from './slices/user/changerole.js';

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
    googleAuth: googleAuthSlice,
    twoFactorAuth: twoFactorAuthSlice.reducer,
    getCart: getCartSlice.reducer,
    deleteItemCart: deleteItemCartSlice.reducer,
    clearCart: clearCartSlice.reducer,
    addCart: addCartSlice.reducer,
    update: updateCartSlice.reducer,
    users: AdminDashboardUsersReducer,
    status: ChangeStatusSlice.reducer,
    userstatus: FetchStatusSlice.reducer,
    role: ChangeRoleSlice.reducer,
    search: searchReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});

export default store;
