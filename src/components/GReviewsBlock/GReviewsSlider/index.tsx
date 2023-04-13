import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";


import GReview from "../GReview";
import { IGeneralReview } from "../../../assets/gerenalReviews";


interface GReviewsSliderProps {
   reviews: IGeneralReview[];
   indexNumbers: number[];
}


const GReviewsSlider: React.FC<GReviewsSliderProps> = ({reviews, indexNumbers}) => {


   const [slideIndex, setSlideIndex] = useState<number[]>(indexNumbers);



   const nextSlide = () => {
      if (!slideIndex.includes(reviews.length - 1)) {
         const updateSlideIndex = slideIndex.map(number => number + slideIndex.length)
         setSlideIndex(updateSlideIndex)
      } else {
         setSlideIndex(indexNumbers)
      }
   }



   const prevSlide = () => {
      const decrementedIndex = slideIndex.map(number => number - slideIndex.length);
      setSlideIndex(decrementedIndex);
   }




   return (
      <>
         <div className={styles.reviews}>
            {reviews.map((review, index) => {
               if (slideIndex.includes(index)) {
                  return <GReview element={review} />
               }
            })}
         </div>


         <div className={styles.btns}>
            <button disabled={slideIndex.includes(0)} className={styles.btn + " " + styles.btnPrev} onClick={prevSlide}>{"<"}</button>
            <button disabled={slideIndex.includes(reviews.length - 1)} className={styles.btn} onClick={nextSlide}>{">"}</button>
         </div>   
      </>
   )
}

export default GReviewsSlider;