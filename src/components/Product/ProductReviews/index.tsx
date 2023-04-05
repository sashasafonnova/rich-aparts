import React, { useState } from "react";
import styles from "./styles.module.css";
import { ProductReviewsItem } from "../../../redux/slices/productPageSlice";



type ProductReviewsProps = {
   reviews: ProductReviewsItem | null;
}



const ProductReviews: React.FC<ProductReviewsProps> = ( { reviews } ) => {

   const dataReviews = reviews?.reviews;
   const [reviewsPages, setReviewsPages] = useState<number[]>([0, 1, 2]);


   const nextPageReviews = () => {
      const incrementedIndex = reviewsPages.map(number => number + 3);
      setReviewsPages(incrementedIndex);
   }

   const prevPageReviews = () => {
         const decrementedIndex = reviewsPages.map(number => number - 3);
         setReviewsPages(decrementedIndex);
      }


   
   return (
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Отзывы ({dataReviews && dataReviews.length})</h2>               

            <ul className={styles.reviews}>
               {dataReviews && dataReviews.map((el, index) => {
                  if (reviewsPages.includes(index)){
                     return (
                        <li className={styles.review} key={el.id}>
                           <p className={styles.date}>{el.date}</p>
                           <div className={styles.data}>
                              <h3 className={styles.name}>{el.name}</h3>
                              <p className={styles.text}>{el.text}</p>
                              <div className={styles.raiting}>
                                 {[...new Array(el.raiting)].map(el => (
                                    <span>★</span>
                                 ))}
                              </div>
                           </div>
                        </li>
                     )
                  }
                  
               })}
            </ul>

            <div className={styles.btns}>
               {!reviewsPages.includes(0) && (
                  <button className={styles.btnPrev} onClick={prevPageReviews}>{"<"}</button>)}

               {dataReviews && !reviewsPages.includes(dataReviews.length - 1) && (
                  <button className={styles.btnNext} onClick={nextPageReviews}>{">"}</button>)}
            </div>
         </div>
      </section>
   );
}

export default ProductReviews;