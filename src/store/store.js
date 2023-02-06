import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { liderSlice } from './lideres';
import { recolectorSlice } from './recolectores';
import { registraduriaSlice } from './registraduria';
import { uiSlice } from './ui';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    lideres: liderSlice.reducer,
    registraduria: registraduriaSlice.reducer,
    recolectores:recolectorSlice.reducer,
  },
});

