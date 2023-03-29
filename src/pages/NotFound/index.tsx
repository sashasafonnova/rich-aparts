import React, { useEffect } from "react";
import ArrowBack from "../../components/UI/ArrowBack";
import styles from "./styles.module.css";



const NotFound: React.FC = () => {


   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <section>
         <div className="container">
            <ArrowBack />
            <h1 className={styles.title}>Ошибка 404</h1>
            <p className={styles.text}>Страница, которую вы запрашиваете не найдена.</p>    
         </div>
      </section>
      
   );
}

export default NotFound;