import React from "react";
import styles from "./styles.module.css";



const ProductReviews: React.FC = () => {

   return (
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Отзывы (3)</h2>
            <ul className={styles.reviews}>
               <li className={styles.review}>
                  <p className={styles.date}>22.02.2023</p>
                  <div className={styles.data}>
                     <h3 className={styles.name}>Андрей</h3>
                     <p className={styles.text}>Отдыхали семьей 3 дня, очень понравилось! Спасибо, что все классно организовали</p>
                     <div className={styles.stars}>★★★★★</div>
                  </div>
               </li>
               <li className={styles.review}>
                  <p className={styles.date}>22.02.2023</p>
                  <div className={styles.data}>
                     <h3 className={styles.name}>Андрей</h3>
                     <p className={styles.text}>Отдыхали семьей 3 дня, очень понравилось! Спасибо, что все классно организовали</p>
                     <div className={styles.stars}>★★★★★</div>
                  </div>
               </li>
               <li className={styles.review}>
                  <p className={styles.date}>22.02.2023</p>
                  <div className={styles.data}>
                     <h3 className={styles.name}>Андрей</h3>
                     <p className={styles.text}>Отдыхали семьей 3 дня, очень понравилось! Спасибо, что все классно организовали</p>
                     <div className={styles.stars}>★★★★★</div>
                  </div>
               </li>
            </ul>
         </div>
      </section>
   );
}

export default ProductReviews;