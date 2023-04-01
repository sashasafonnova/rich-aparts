import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


import ProductReviews from "../../components/ProductReviews";
import ProductsBlock from "../../components/ProductsBlock";
import ArrowBack from "../../components/UI/ArrowBack";
import ProductFullCard from "../../components/ProductFullCard";
import axios from "axios";



const ApartamentPage: React.FC = () => {

   const [fetchStatus, setfetchStatus] = React.useState("loading");
   
   const [productInfo, setProductInfo] = React.useState({
      id: " ",
      city: " ",
      name: " ",
      rooms: 0,
      details: {
         square: 0,
         bathrooms: 0,
         badrooms: 0,
      },
      description: " ",
      faciliies: [" "],
      imgUrl: [" "],
      price: 0
   });
   

   const { apartId } = useParams();


   const fetchCardInfo = async () => {

      try {
         const { data } = await axios.get(`https://642701f3d24d7e0de47dc021.mockapi.io/api/rich-aparts/aparts/${apartId}`);
         setProductInfo(data);
         setfetchStatus("success")
      } catch (error) {
         setfetchStatus("error")
      }
      
   }
     


   useEffect(() => {
      window.scrollTo(0, 0);
      fetchCardInfo();
   }, [apartId]);

   

   
   const getFetchResult = () => {
      if (fetchStatus === "error") {
         return "Ошибка";
      } else if (fetchStatus === "loading") {
         return "Идет загрузка";
      } else if (fetchStatus === "success") {
         return <ProductFullCard product={productInfo} />
      }
   }
  



   return (
      <section>
         <div className="container">
            <ArrowBack />
            {getFetchResult()}
         </div>
         <ProductReviews />
         <ProductsBlock title="Похожие локации" text="Забронируйте понравившуюся квартиру в один клик"/>
      </section>
      
   );
}

export default ApartamentPage;