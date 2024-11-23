// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
