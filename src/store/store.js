import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { salasSlice } from './salas';
import { uiSlice } from './ui';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    salasSlice: salasSlice.reducer,
    ui: uiSlice.reducer,
  },
});

