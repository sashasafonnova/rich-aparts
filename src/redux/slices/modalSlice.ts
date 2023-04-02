import { createSlice } from '@reduxjs/toolkit';


type ModalSliceState = {
   type: string | null,
   content?: {
      message?: {
         title: string;
         subtitle: string;
      },
      location?: {
         name: string;
      };
   },
   timeOut?: number,
   
}


const initialState: ModalSliceState = {
   type: null,
}


export const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      changeTypeModal: (state: ModalSliceState, action) => {
         state.type = action.payload;
      },

      changeContentModal: (state: ModalSliceState, action) => {
         state.content = action.payload;
      },

      changeTimeOutModal: (state: ModalSliceState, action) => {
         state.timeOut = action.payload;
      },
   }
})


export const { changeTypeModal, changeContentModal, changeTimeOutModal } = modalSlice.actions;

export default modalSlice.reducer;