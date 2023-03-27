import React from "react";
import styles from "./styles.module.css";

import itemIMG from '../../../assets/img/card/itemImg.jpg';

import iconSize from '../../../assets/img/card/icons/iconSize.svg';
import iconRoom from '../../../assets/img/card/icons/iconRoom.svg';
import iconBathroom from '../../../assets/img/card/icons/iconBathroom.svg';




const CatalogItem: React.FC = () => {


   return (
      <div className={styles.item}>
         <div className={styles.img}>
            <img src={itemIMG} alt="img" />
         </div>
         <div className={styles.main}>
            <p className={styles.city}>г. Москва</p>
            <h3 className={styles.title}>Ocean eyes</h3>
            <p className={styles.subtitle}>1-комнатная студия</p>
            <ul className={styles.details}>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconSize} alt="iconSize" />
                  <span>52 кв.м</span>
               </li>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconRoom} alt="/" />
                  <span>52 кв.м</span>
               </li>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconBathroom} alt="/" />
                  <span>52 кв.м</span>
               </li>
            </ul>
            <p className={styles.price}><span>5600р</span> / сутки</p>
            <div className={styles.btns}>
               <button className={styles.btnBooking}>Забронировать</button>
               <button className={styles.btnInfo}>Подробнее</button>
            </div>
         </div>
      </div>
   );
}

export default CatalogItem;