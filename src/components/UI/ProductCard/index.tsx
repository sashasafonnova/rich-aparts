import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";



import iconSize from '../../../assets/img/card/icons/iconSize.svg';
import iconRoom from '../../../assets/img/card/icons/iconRoom.svg';
import iconBathroom from '../../../assets/img/card/icons/iconBathroom.svg';

import { useDispatch } from "react-redux";
import { changeContentModal, changeTypeModal } from "../../../redux/slices/modalSlice";



type ProductCardProps = {
   product: {
      id: string;
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
      imgUrl: string[];
      price: number;
   }
}


const ProductCard: React.FC<ProductCardProps> = ( {product} ) => {

   const onClickBooking = (name: string) => {
      dispatch(changeTypeModal("booking"));

      const contentModal = {
         location: {
            name,
         }
      }
      dispatch(changeContentModal(contentModal))
      
   }

   console.log(product)
   const dispatch = useDispatch();

   return (
      <div className={styles.item}>
         <Link to={`/catalog/${product.id}`} className={styles.img}>
            <img src={product.imgUrl[0]} alt="img" />
         </Link>
         <div className={styles.main}>
            <p className={styles.city}>{`г. ${product.city}`}</p>
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.subtitle}>{`${product.rooms}-комнатная студия`}</p>
            <ul className={styles.details}>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconSize} alt="iconSize" />
                  <span>{`${product.details.square} кв.м`}</span>
               </li>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconRoom} alt="/" />
                  <span>{product.details.badrooms}</span>
               </li>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconBathroom} alt="/" />
                  <span>{product.details.bathrooms}</span>
               </li>
            </ul>
            <p className={styles.price}><span>{`${product.price} р.`}</span> / сутки</p>
            <div className={styles.btns}>
               <button className={styles.btnBooking} onClick={() => onClickBooking(product.name)}>Забронировать</button>
               <Link to={`/catalog/${product.id}`} className={styles.btnInfo}>Подробнее</Link>
            </div>
         </div>
      </div>
   );
}

export default ProductCard;