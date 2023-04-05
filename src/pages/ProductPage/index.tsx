import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


import ProductReviews from "../../components/Product/ProductReviews";
import ProductsBlock from "../../components/ProductsBlock";
import ArrowBack from "../../components/UI/ArrowBack";
import ProductFullCard from "../../components/Product/ProductFullCard";

import { fetchProduct, fetchProductReviews } from "../../redux/slices/productPageSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";




const ProductPage: React.FC = () => {

   const dispatch = useDispatch < AppDispatch>();
   const { apartId } = useParams();



   const fetchData = async () => {
      if (apartId){
         const params = {
            id: apartId,
         }
         
         const res = await dispatch(fetchProduct(params));
         
         if (res.meta.requestStatus === "fulfilled")
         dispatch(fetchProductReviews(params));
      }
   }  



   useEffect(() => {
      window.scrollTo(0, 0);
      fetchData();
   }, [apartId]);



   
   const product = useSelector((state: RootState) => state.productPageSlice.product.data);
   const reviews = useSelector((state: RootState) => state.productPageSlice.reviews.data);

   const fetchStatusProduct = useSelector((state: RootState) => state.productPageSlice.product.fetchStatus);
   const fetchStatusReviews = useSelector((state: RootState) => state.productPageSlice.reviews.fetchStatus);



   
   const getFetchResult = () => {
      if (fetchStatusProduct === "error") {
         return "Ошибка";
      } else if (fetchStatusProduct === "loading") {
         return "Идет загрузка";
      } else if (fetchStatusProduct === "success" && product) {
         return <ProductFullCard product={product} />
      }
   }

   

   const getFetchReviews = () => {
      if ( fetchStatusReviews === "error") {
         return "Ошибка";
      } else if ( fetchStatusReviews === "loading") {
         return "Идет загрузка отзывов";
      } else if (fetchStatusReviews === "success" && reviews) {
         return <ProductReviews reviews={reviews} />
      }
   }
  



   return (
      <section>
         <div className="container">
            <ArrowBack />
            {getFetchResult()}
         </div>
         {reviews && getFetchReviews()}
         {/* <ProductsBlock title="Похожие локации" text="Забронируйте понравившуюся квартиру в один клик"/> */}
      </section>
      
   );
}

export default ProductPage;