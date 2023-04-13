import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";


import { generalReviews } from "../../assets/gerenalReviews";
import debounce from "lodash.debounce";
import GeneralReview from "../GReviewsBlock/GReview";



const ReviewsBlock: React.FC = () => {


   const [slideIndex, setSlideIndex] = useState<number[]>([0, 1, 2]);
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


   const nextSlide = () => {
      if (!slideIndex.includes(generalReviews.length - 1)) {
         const updateSlideIndex = slideIndex.map(number => number + slideIndex.length)
         setSlideIndex(updateSlideIndex)
      } else {
         setSlideIndex([0, 1, 2])
      }
   }



   const prevSlide = () => {
      const decrementedIndex = slideIndex.map(number => number - slideIndex.length);
      setSlideIndex(decrementedIndex);
   }




   return (
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Отзывы</h2>
            <p className={styles.subtitle}>Вот что о нас говорят наши гости</p>
            <div className={styles.reviews}>

               {/* {isArray && windowSize <= 520 && <ProductsSlider products={products} sliderLength={[0]} />}
               {isArray && windowSize > 520 && windowSize <= 780 && <ProductsSlider products={products} sliderLength={[0, 1]} />}
               {isArray && windowSize > 780 && <ProductsSlider products={products} sliderLength={[0, 1, 2]} />} */}
               
               {generalReviews.map((review, index) => {
                  if(slideIndex.includes(index)) {
                  return <GeneralReview element={review}/>
               }})}
            </div>
            <div className={styles.btns}>
               <button disabled={slideIndex.includes(0)} className={styles.btn + " " + styles.btnPrev} onClick={prevSlide}>{"<"}</button>
               <button disabled={slideIndex.includes(slideIndex.length)} className={styles.btn} onClick={nextSlide}>{">"}</button>
            </div>
         </div>
      </section>
   );
}

export default ReviewsBlock;