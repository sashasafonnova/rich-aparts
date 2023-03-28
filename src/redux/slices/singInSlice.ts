import { createSlice } from '@reduxjs/toolkit';


type signInState = {
   modalOpen: boolean;
}


const initialState: signInState = {
   modalOpen: false,
}


export const signInSlice = createSlice({
   name: 'signIn',
   initialState,
   reducers: {
      showModalWindow: (state: signInState, action) => {
         state.modalOpen = action.payload;
      },
   }
})


export const { showModalWindow } = signInSlice.actions;

export default signInSlice.reducer;