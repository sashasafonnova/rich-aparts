import React from "react";
import styles from "./styles.module.css";

import avatar from "./avatar.jpg"



const ReviewsBlock: React.FC = () => {

   return (
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Отзывы</h2>
            <p className={styles.subtitle}>Вот что о нас говорят наши гости</p>
            <div className={styles.reviews}>
               <div className={styles.review}>
                  <img className={styles.avatar}src={avatar} alt="/" />
                  <p className={styles.name}>Иван</p>
                  <p className={styles.prof}>Предприниматель</p>
                  <blockquote className={styles.text}>Классные ребята, все организовали как надо. Я остался доволен поездкой</blockquote>
               </div>
               <div className={styles.reviewActive}>
                  <img className={styles.avatar}src={avatar} alt="/" />
                  <p className={styles.name}>Иван</p>
                  <p className={styles.prof}>Предприниматель</p>
                  <blockquote className={styles.text}>Классные ребята, все организовали как надо. Я остался доволен поездкой</blockquote>
               </div>
               <div className={styles.review}>
                  <img className={styles.avatar}src={avatar} alt="/" />
                  <p className={styles.name}>Иван</p>
                  <p className={styles.prof}>Предприниматель</p>
                  <blockquote className={styles.text}>Классные ребята, все организовали как надо. Я остался доволен поездкой</blockquote>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ReviewsBlock;