import React, { useEffect } from "react";
import AboutBlock from "../../components/AboutBlock";
import AdvantagesBlock from "../../components/AdvantagesBlock";
import ApartsBlock from "../../components/UI/ApartsBlock";
import PromoBlock from "../../components/PromoBlock";
import ReviewsBlock from "../../components/ReviewsBlock";




const MainPage: React.FC = () => {


   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <PromoBlock />
         <ApartsBlock title={"Cейчас свободны"} text="Забронируйте понравившуюся квартиру в один клик"/>
         <AboutBlock />
         <AdvantagesBlock />
         <ReviewsBlock />
      </>
   );
}

export default MainPage;