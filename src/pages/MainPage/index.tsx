import React, { useEffect } from "react";

import AboutBlock from "../../components/AboutBlock";
import AdvantagesBlock from "../../components/AdvantagesBlock";
import ApartamentsBlock from "../../components/ProductsBlock";
import PromoBlock from "../../components/PromoBlock";
import ReviewsBlock from "../../components/ReviewsBlock";





const MainPage: React.FC = () => {

   const aboutRef = React.useRef<HTMLElement>(null);

   const aboutScroll = () => {
      aboutRef.current && aboutRef?.current.scrollIntoView(); 
   }


   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   
   return (
      <>
         <PromoBlock aboutScroll={aboutScroll}/>
         <ApartamentsBlock title={"Cейчас свободны"} text="Забронируйте понравившуюся квартиру в один клик."/>
         <AboutBlock aboutRef={aboutRef}/>
         <AdvantagesBlock />
         <ReviewsBlock />
      </>
   );
}

export default MainPage;