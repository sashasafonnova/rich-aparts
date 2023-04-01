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
   products: ProductsItem[];
   fetchStatus: 'loading' | 'success' | 'error'
}



type FetchProductsParams = {
   limit: number;
   page: number;
}


const initialState = {
   fetchStatus: 'loading',
   products: [],
} as ProductsState



export const fetchProducts = createAsyncThunk<ProductsItem[], FetchProductsParams>('aparts/fetchAparts', async (params: FetchProductsParams) => {

   const { limit, page } = params;

   const pageQuery = page ? `page=${page}` : '';
   const limitQuery = limit ? `limit=${limit}` : '';


   const { data } = await axios.get<ProductsItem[]>(`https://642701f3d24d7e0de47dc021.mockapi.io/api/rich-aparts/aparts?${limitQuery}&${pageQuery}`);
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
      })
   },

})





export const { } = productsSlice.actions;

export default productsSlice.reducer;

