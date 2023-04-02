import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";


type CardSliderProps = {
   imgUrls: string[];
}

const CardSlider: React.FC<CardSliderProps> = ( {imgUrls} ) => {

   const [slideIndex, setSlideIndex] = useState<number>(0);

   

   const nextSlide = () => {
      if (slideIndex !== imgUrls.length - 1) {
         setSlideIndex(slideIndex + 1)
      }
      else if (slideIndex === imgUrls.length - 1) {
         setSlideIndex(0)
      }
   }


   const prevSlide = () => {
      if (slideIndex !== 0) {
         setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 0) {
         setSlideIndex(imgUrls.length - 1)
      }
   }



   const moveDot = (index: number) => {
      setSlideIndex(index);
   }



   useEffect(() => {
      const timeout = setTimeout(nextSlide, 2500);
      return () => clearTimeout(timeout);
   }, [slideIndex]);




   return (
      <div className={styles.slider}>
         <img src={imgUrls[slideIndex]} className={styles.bgImg} alt="img" />
         <img src={imgUrls[slideIndex]} className={styles.img} alt="img" />
         <button className={styles.btnNext} onClick={nextSlide}>→</button>
         <button className={styles.btnPrev} onClick={prevSlide}>←</button>
         <div className={styles.dots}>
            {[...new Array(imgUrls.length)].map((item, index) => (
            <div key={index}
               onClick={() => moveDot(index)}
               className={slideIndex === index ? styles.dot + " " + styles.dotActive : styles.dot}
            ></div>))}
         </div>
      </div>
   );
}

export default CardSlider; 

