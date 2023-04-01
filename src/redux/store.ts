import { configureStore } from "@reduxjs/toolkit";

import bookingSlice from "./slices/bookingSlice";
import menuSlice from "./slices/menuSlice";
import signInSlice from "./slices/singInSlice";
import productsSlice from "./slices/productsSlice";



export const store = configureStore({
   reducer: {
      menuSlice,
      signInSlice,
      bookingSlice,
      productsSlice,
   },
}) 


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;