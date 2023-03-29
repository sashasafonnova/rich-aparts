import React, { useEffect } from "react";
import styles from "./styles.module.css";

import itemIMG from '../../assets/img/card/itemImg.jpg';

import iconSize from '../../assets/img/card/icons/iconSize.svg';
import iconRoom from '../../assets/img/card/icons/iconRoom.svg';
import iconBathroom from '../../assets/img/card/icons/iconBathroom.svg';
import CardReviews from "../../components/UI/CardReviews";
import ApartsBlock from "../../components/UI/ApartsBlock";
import ArrowBack from "../../components/UI/ArrowBack";

const CardPage: React.FC = () => {


   const [openFacilities, setOpenFacilities] = React.useState(false);


   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   

   return (
      <section>
         <div className="container">
            <ArrowBack />
            <div className={styles.card}>
               <div className={styles.img}>
                  <img src={itemIMG} alt="itemImg" />
               </div>
               <div className={styles.info}>
                  <p className={styles.city}>г. Москва</p>
                  <h1 className={styles.title}>Ocean eyes</h1>
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
                  <p className={styles.description}>Светлая, просторная уютная студия с видом на Москва-реку.</p>
                  <div>
                     <button onClick={()=> setOpenFacilities(!openFacilities)}className={styles.facilities}>Удобства
                        <div className={styles.facilitiesIcon}>?</div>
                     </button>
                     
                     {openFacilities && (
                     
                     <ul className={styles.facilitiesList}>
                        <li>Холодильник</li>
                        <li>Стиральная машина</li>
                        <li>Wi-Fi</li>
                        <li>Телевизор</li> 
                     </ul>
                     )}

                  </div>
                  <p className={styles.price}><span>5600р</span> / сутки</p>
                  <button className={styles.btnBooking}>Забронировать</button>
               </div>
            </div>
         </div>
        <CardReviews />
        <ApartsBlock title="Похожие локации" text="Забронируйте понравившуюся квартиру в один клик"/>
      </section>
      
   );
}

export default CardPage;