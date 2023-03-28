import React from "react";
import styles from "./styles.module.css";

import itemIMG from '../../../assets/img/card/itemImg.jpg';

import iconSize from '../../../assets/img/card/icons/iconSize.svg';
import iconRoom from '../../../assets/img/card/icons/iconRoom.svg';
import iconBathroom from '../../../assets/img/card/icons/iconBathroom.svg';

import { useDispatch } from "react-redux";
import { showModalBooking, chooseLocation } from "../../../redux/slices/bookingSlice";



export type CatalogItemProps = {
   item: {
      id: number;
      city: string;
      name: string;
      rooms: number;
      details: {
         square: number;
         bathrooms: number;
         badrooms: number;
      };
      description: string;
      faciliies: string[];
      imgUrl: string;
      price: number;
   }
}


const CatalogItem: React.FC<CatalogItemProps> = ( {item} ) => {

   const onClickBooking = (name: string) => {
      dispatch(showModalBooking(true));
      dispatch(chooseLocation(name))
      
   }


   const dispatch = useDispatch();

   return (
      <div className={styles.item}>
         <div className={styles.img}>
            <img src={item.imgUrl} alt="img" />
         </div>
         <div className={styles.main}>
            <p className={styles.city}>{`г. ${item.city}`}</p>
            <h3 className={styles.title}>{item.name}</h3>
            <p className={styles.subtitle}>{`${item.rooms}-комнатная студия`}</p>
            <ul className={styles.details}>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconSize} alt="iconSize" />
                  <span>{`${item.details.square} кв.м`}</span>
               </li>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconRoom} alt="/" />
                  <span>{item.details.badrooms}</span>
               </li>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconBathroom} alt="/" />
                  <span>{item.details.bathrooms}</span>
               </li>
            </ul>
            <p className={styles.price}><span>{`${item.price} р.`}</span> / сутки</p>
            <div className={styles.btns}>
               <button className={styles.btnBooking} onClick={() => onClickBooking(item.name)}>Забронировать</button>
               <button className={styles.btnInfo}>Подробнее</button>
            </div>
         </div>
      </div>
   );
}

export default CatalogItem;