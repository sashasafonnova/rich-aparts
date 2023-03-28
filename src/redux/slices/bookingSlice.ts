import { createSlice } from '@reduxjs/toolkit';


type bookingSliceState = {
   modalOpen: boolean;
   chosenLocation: string;
}


const initialState: bookingSliceState = {
   modalOpen: false,
   chosenLocation: "",
}


export const bookingSlice = createSlice({
   name: 'booking',
   initialState,
   reducers: {
      showModalBooking: (state: bookingSliceState, action) => {
         state.modalOpen = action.payload;
         
      },

      chooseLocation: (state: bookingSliceState, action) => {
         state.chosenLocation = action.payload;
      }
   }
})


export const { showModalBooking, chooseLocation } = bookingSlice.actions;

export default bookingSlice.reducer;