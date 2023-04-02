import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { changeTypeModal, changeContentModal } from "../../../redux/slices/modalSlice";


import CardSlider from "../CardSlider";
import { ProductsItem } from "../../../redux/slices/productsSlice";


import iconSize from '../../../assets/img/card/icons/iconSize.svg';
import iconRoom from '../../../assets/img/card/icons/iconRoom.svg';
import iconBathroom from '../../../assets/img/card/icons/iconBathroom.svg';



type ProductFullCardProps = {
   product: ProductsItem;
}



const ProductFullCard: React.FC<ProductFullCardProps> = ( {product} ) => {


   const [openFacilities, setOpenFacilities] = React.useState(false);
   const dispatch = useDispatch();


   const onClickBtn = (name: string) => {
      dispatch(changeTypeModal("booking"));


      const contentModal = {
         location: {
            name,
         }
      }
      dispatch(changeContentModal(contentModal))
      
   }


   return (
      <div className={styles.card}>
         <CardSlider imgUrls={product.imgUrl} />
         <div className={styles.info}>
            <p className={styles.city}>{`г. ${product.city}`}</p>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.subtitle}>{`${product.rooms}-комнатная студия`}</p>
            <ul className={styles.details}>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconSize} alt="iconSize" />
                  <span>{`${product.details.square} кв.м`}</span>
               </li>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconRoom} alt="/" />
                  <span>{`Комнат: ${product.details.badrooms}`}</span>
               </li>
               <li className={styles.detailsItem}>
                  <img className={styles.detailsImg} src={iconBathroom} alt="/" />
                  <span>{`Ванных: ${product.details.bathrooms}`}</span>
               </li>
            </ul>
            <p className={styles.description}>{product.description}</p>
            <div>
               <button onClick={() => setOpenFacilities(!openFacilities)} className={styles.facilities}>Удобства
                  <div className={styles.facilitiesIcon}>?</div>
               </button>

               {openFacilities && (

                  <ul className={styles.facilitiesList}>
                     {product.faciliies.map((el: string) => (
                        <li key={el}>{el}</li>
                     ))}
                  </ul>
               )}
            </div>
            <p className={styles.price}><span>{`${product.price} `}</span>руб./сутки</p>
            <button className={styles.btnBooking} onClick={() => onClickBtn(product.name)}>Забронировать</button>
         </div>
      </div>
   );
}

export default ProductFullCard;