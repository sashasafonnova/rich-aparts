import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./slices/bookingSlice";
import menuSlice from "./slices/menuSlice";
import signInSlice from "./slices/singInSlice";



export const store = configureStore({
   reducer: {
      menuSlice,
      signInSlice,
      bookingSlice,
   },
}) 


export type RootState = ReturnType<typeof store.getState>;