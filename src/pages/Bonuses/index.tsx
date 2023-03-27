import React, { useEffect } from "react";
import styles from "./styles.module.css";


const Bonuses: React.FC = () => {


   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <section>
         <div className="container">
            <button className={styles.goBack}>← Назад</button>
            <h1 className={styles.title}>Бонусная программа</h1>
            <p className={styles.text}>Здесь будет описание бонусов</p>
         </div>
      </section>
      
   );
}

export default Bonuses;