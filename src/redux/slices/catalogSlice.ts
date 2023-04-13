import { createSlice } from '@reduxjs/toolkit';


interface CatalogState {
   filter: {
      city: string,
      rooms: number,
      date: string,
   },
   sorting: string,
   pagination: {
      page: number,
      limit: number,
   }
}


const initialState: CatalogState = {
   filter: {
      city: "",
      rooms: 0,
      date: "",
   },
   sorting: "price",
   pagination: {
      page: 1,
      limit: 10,
   }
}


export const catalogSlice = createSlice({
   name: 'catalog',
   initialState,
   reducers: {

      changeCity: (state, action) => {
         state.filter.city = action.payload;
      },

      changeRooms: (state, action) => {
         state.filter.rooms = action.payload;
      },

      changeSorting: (state, action) => {
         state.sorting = action.payload;
      },

      changePage: (state, action) => {
         state.pagination.page = action.payload;
      },

      changeLimit: (state, action) => {
         state.pagination.limit = action.payload;
         state.pagination.page = 1;
      },
   }
})


export const { changeCity, changeRooms, changeSorting, changePage, changeLimit } = catalogSlice.actions;

export default catalogSlice.reducer;