import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ProductsItem } from "../../redux/slices/productsSlice";
import ProductCard from "../UI/ProductCard";



type ProductsSliderProps = {
   products: ProductsItem[];
   sliderLength: number[];
}

const ProductsSlider: React.FC<ProductsSliderProps> = ({ products, sliderLength } ) => {

   const [slideIndex, setSlideIndex] = useState<number[]>(sliderLength);
   

   const nextSlide = () => {
      if (!slideIndex.includes(products.length - 1)) {
         const updateSlideIndex = slideIndex.map(number => number + slideIndex.length)
         setSlideIndex(updateSlideIndex)
      } else {
         setSlideIndex(sliderLength)
      }
   }


   const moveDot = (index: number) => {
      if (slideIndex.length === 1){
         setSlideIndex([index])
      } else if (slideIndex.length === 2){
         setSlideIndex([index * slideIndex.length, index * slideIndex.length+1])
      } else {
         setSlideIndex([index * slideIndex.length, index * slideIndex.length + 1, index * slideIndex.length + 2] );
      }
      
   }



   useEffect(() => {
      const timeout = setTimeout(nextSlide, 2500);
      return () => clearTimeout(timeout);
   }, [slideIndex]);


   const dotsLength = Math.ceil(products.length / slideIndex.length);


   
   return (
      <div className={styles.slider}>
         {products.map((product, index) => {
            if (slideIndex.includes(index)) {
               return <ProductCard product={product} />
            }
         })}


         <div className={styles.dots}>
            {[...new Array(dotsLength)].map((item, index) => (
               <div key={index}
                  onClick={() => moveDot(index)}
                  className={slideIndex.includes(index * slideIndex.length) ? styles.dot + " " + styles.dotActive : styles.dot}
               ></div>))}

         </div>
      </div>   
   );
}

export default ProductsSlider; 

