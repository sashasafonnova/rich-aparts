import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductsItem } from "./productsSlice";


interface ProductReview {
   id: string;
   date: string;
   name: string;
   text: string;
   raiting: number;
}


export interface ProductReviewsItem {
   id: string;
   reviews: ProductReview[];
}



interface ProductPageState {
   product: {
      fetchStatus: string,
      data: null | ProductsItem,
   },
   reviews: {
      fetchStatus: string,
      data: null | ProductReviewsItem,
   }
}




type FetchProductParams = {
   id: string;
}
type FetchReviewsParams = {
   id: string;
}



export const fetchProduct = createAsyncThunk<ProductsItem, FetchProductParams>('aparts/fetchProduct', async (params: FetchProductParams) => {
   const { id } = params;
   const idQuery = id ? id : '';

   const { data } = await axios.get<ProductsItem>(`https://642701f3d24d7e0de47dc021.mockapi.io/api/rich-aparts/aparts/${idQuery}`);
   console.log(data)
   return data;
})



export const fetchProductReviews = createAsyncThunk<ProductReviewsItem, FetchReviewsParams>('aparts/fetchProductReviews', async (params: FetchReviewsParams) => {
   const { id } = params;
   const idQuery = id ? id : '';

   const { data } = await axios.get<ProductReviewsItem>(`https://642701f3d24d7e0de47dc021.mockapi.io/api/rich-aparts/product-reviews/${idQuery}`);
   return data;
})





export const productPageSlice = createSlice({
   name: 'productPage',
   initialState: {
      product: {
         fetchStatus: 'loading',
         data: null,
      },
      reviews: {
         fetchStatus: 'loading',
         data: null,
      }
   } as ProductPageState,
   reducers: {},


   extraReducers: (builder) => {

      builder.addCase(fetchProduct.fulfilled, (state, action) => {
         state.product.data = action.payload;
         state.product.fetchStatus = "success";
      })
      builder.addCase(fetchProduct.pending, (state) => {
         state.reviews.data = null;
         state.product.fetchStatus = "loading";
      })
      builder.addCase(fetchProduct.rejected, (state) => {
         state.product.fetchStatus = "error";
      })



      builder.addCase(fetchProductReviews.fulfilled, (state, action) => {
         state.reviews.data = action.payload;
         state.reviews.fetchStatus = "success";
      })
      builder.addCase(fetchProductReviews.pending, (state) => {
         state.reviews.fetchStatus = "loading";
      })
      builder.addCase(fetchProductReviews.rejected, (state) => {
         state.reviews.fetchStatus = "error";
      })
   },

})


export default productPageSlice.reducer;

