import React from "react";
import styles from "./styles.module.css";
import bgImg from './bg.png';


import ShowCataloBtn from "../UI/ShowCatalogBtn";


type PromoBlockProps = {
   aboutScroll: () => void;
}


const PromoBlock: React.FC<PromoBlockProps> = ( {aboutScroll} ) => {

   return (
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
               <div className={styles.textBlock}>
                  <h1 className={styles.title}>Премиальные квартиры <br/>с посуточной арендой</h1>
                  <p className={styles.text}>Сеть премиальных аппартментов по всей России с возможностью аренды посуточно </p>
                  <div className={styles.buttons}>
                     <ShowCataloBtn/>
                     <button className={styles.btnInfo} onClick={aboutScroll}>Подробнее</button>
                  </div>
               </div>
               <div className={styles.bgImg}>
                  <img src={bgImg} alt="" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default PromoBlock;