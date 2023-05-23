/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import { getProfileReducer, updateProfileReducer } from './slices/profile/updateProfile';
import productAddSlice from './slices/product/productAdd';
import sidebarSlice from './slices/sidebar';
import categoriesSlice from './slices/product/categories';
import signupSlice from './slices/user/signup';

const store = configureStore({
  reducer: {
    productAdd: productAddSlice.reducer,
    sidebar: sidebarSlice.reducer,
    category: categoriesSlice.reducer,
    signup: signupSlice.reducer,
    profile: getProfileReducer,
    profileUpdate: updateProfileReducer
  },
})

export default store ;
