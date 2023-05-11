import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';

const reducers = {
  counter: counterReducer
}
const store = configureStore({
  reducer: {
    ...reducers
  },
});


export  {store, reducers};
