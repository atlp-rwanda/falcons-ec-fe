import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Register all reducers here
  },
});
export default store;
