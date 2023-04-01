import React, { useEffect } from "react";

import ApartsBlock from "../../components/ProductsBlock";
import ArrowBack from "../../components/UI/ArrowBack";
import styles from "./styles.module.css";




const CatalogPage: React.FC = () => {

   useEffect(() => {
         window.scrollTo(0, 0);
      }, []);

   return (
      <>
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
               <ArrowBack />
               <h2 className={styles.title}>Поиск по каталогу</h2>
               <form className={styles.form}>
                  <div className={styles.formItem}>
                     <label className={styles.label} htmlFor="city">Город</label>
                     <select id="city" className={styles.input}>
                        <option value="Москва">Москва</option>
                        <option value="Санкт-Петербург">Санкт-Петербург</option>
                     </select>
                  </div>
                  <div className={styles.formItem}>
                     <label className={styles.label} htmlFor="rooms">Кол-во комнат</label>
                     <select id="rooms" className={styles.input}>
                        <option value="1">1 комната</option>
                        <option value="2">2 комнаты</option>
                     </select>
                  </div>
                  <div className={styles.formItem}>
                     <label className={styles.label} htmlFor="date">Дата заезда</label>
                     <input className={styles.input} type="date" />
                  </div>

                  <button className={styles.btn}>Подобрать</button>
               </form>
            </div>
         </div>
      </section>
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Найдено (3)</h2>
         </div>
         <ApartsBlock title="" text="" />
      </section>
      
      
      </>
   );
}

export default CatalogPage;