import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./slices/menuSlice";
import productsSlice from "./slices/productsSlice";
import modalSlice from "./slices/modalSlice";
import catalogSlice from "./slices/catalogSlice";
import productPageSlice from "./slices/productPageSlice";




export const store = configureStore({
   reducer: {
      menuSlice,
      productsSlice,
      modalSlice,
      catalogSlice,
      productPageSlice,
   },
}) 


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;