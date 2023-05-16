import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import counterReducer from './slices/counter';
import { UserApi } from './slices/users/user';

const reducers = {
  counter: counterReducer,
  [UserApi.reducerPath]: UserApi.reducer,
};
const store = configureStore({
  reducer: {
    ...reducers,
  },
  middleware: (g) => g().concat(UserApi.middleware),
});
setupListeners(store.dispatch);
export { store, reducers };
