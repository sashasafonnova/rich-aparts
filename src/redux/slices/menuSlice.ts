import { createSlice } from '@reduxjs/toolkit';


type menuSliceState = {
   burgerOpen: boolean;
}


const initialState: menuSliceState = {
   burgerOpen: false,
}


export const menuSlice = createSlice({
   name: 'menu',
   initialState,
   reducers: {
      showMenuBurger: (state: menuSliceState, action) => {
         state.burgerOpen = action.payload;
      },
   }
})


export const { showMenuBurger } = menuSlice.actions;

export default menuSlice.reducer;