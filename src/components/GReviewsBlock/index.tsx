import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";


import { generalReviews } from "../../assets/gerenalReviews";
import debounce from "lodash.debounce";
import GReviewsSlider from "./GReviewsSlider";



const GReviewsBlock: React.FC = () => {


   const [windowSize, setWindowSize] = useState(window.innerWidth);


   

   const onChangeWindowSize = React.useCallback(
      debounce(() => {
         setWindowSize(window.innerWidth);
      }, 100),
      []
   )


   useEffect(() => {
      window.addEventListener('resize', onChangeWindowSize)
      return () => window.removeEventListener('resize', onChangeWindowSize)
   }, []);



   return (
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Отзывы</h2>
            <p className={styles.subtitle}>Вот что о нас говорят наши гости</p>


            {windowSize <= 560 && <GReviewsSlider reviews={generalReviews} indexNumbers={[0]} />}
            {windowSize > 560 && windowSize <= 850 && <GReviewsSlider reviews={generalReviews} indexNumbers={[0, 1]} />}
            {windowSize > 850 && <GReviewsSlider reviews={generalReviews} indexNumbers={[0, 1, 2]} />}
         
         </div>
      </section>
   );
}

export default GReviewsBlock;