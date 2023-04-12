import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export interface ProductsItem {
   id: string;
   city: string;
   name: string;
   rooms: number;
   details: {
      square: number;
      bathrooms: number;
      badrooms: number;
   };
   description: string;
   faciliies: string[];
   imgUrl: string[];
   price: number;
}



interface ProductsState {
   products: null | ProductsItem | ProductsItem[];
   fetchStatus: 'loading' | 'success' | 'error'
}




interface FetchProductsParams {
   limit?: number;
   page?: number;
   sorting?: string;
   city?: string;
   rooms?: number;
   date?: string;
}


const initialState: ProductsState = {
   fetchStatus: 'loading',
   products: null,
}






export const fetchProducts = createAsyncThunk<ProductsItem[], FetchProductsParams>('aparts/fetchProducts', async (params: FetchProductsParams) => {

   const { limit, page, city, rooms } = params;

   const pageQuery = page ? `page=${page}` : '';
   const limitQuery = limit ? `limit=${limit}` : '';
   const cityQuery = city && city !== "Все" ? `city=${city}` : "";
   const roomsQuery = rooms ? `rooms=${rooms}` : '';

   console.log(cityQuery)


   const { data } = await axios.get<ProductsItem[]>(`https://642701f3d24d7e0de47dc021.mockapi.io/api/rich-aparts/aparts?${cityQuery}&${roomsQuery}&${limitQuery}&${pageQuery}`);
   return data;

})





export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},


   extraReducers: (builder) => {

      builder.addCase(fetchProducts.fulfilled, (state, action) => {
         state.products = action.payload;
         state.fetchStatus = "success";
      })

      builder.addCase(fetchProducts.pending, (state) => {
         state.fetchStatus = "loading";
      })

      builder.addCase(fetchProducts.rejected, (state) => {
         state.fetchStatus = "error";
         state.products = null;
      })
   },

})


export default productsSlice.reducer;

