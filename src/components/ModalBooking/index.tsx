import React from "react";
import { useDispatch } from "react-redux";
import { showModalBooking } from "../../redux/slices/bookingSlice";
import styles from "./styles.module.css";


type ModalBookingProps = {
   location: string,
}



const ModalBooking: React.FC<ModalBookingProps> =  ( {location} ) => {



   const dispatch = useDispatch();

   const onClickModal = () => {
      dispatch(showModalBooking(false));
   }

   const onClickModalWindow = (event: any) => {
      event.stopPropagation();
   }

   return (
      <section className={styles.block} onClick={onClickModal}>
         <div className={styles.window}>
            <div className={styles.content} onClick={event => onClickModalWindow(event)}>
               <button className={styles.close} onClick={() => {dispatch(showModalBooking(false))}}>X</button>
               <h2 className={styles.title}>Забронировать</h2>
               <p className={styles.location}>Выбранная локация: <span>{location}</span></p>
               <p className={styles.subtitle}>Оставьте заявку на бронирование, <br/> и мы свяжемся с вами в течении 5 минут.</p>
               <form className={styles.form}>
                  <label className={styles.label} htmlFor="name">Имя</label>
                  <input className={styles.input} id="name" type="text" />

                  <label className={styles.label} htmlFor="tel">Телефон</label>
                  <input className={styles.input} id="tel" type="tel" />

                  <label className={styles.label} htmlFor="email">E-mail</label>
                  <input className={styles.input} id="email" type="email" />

                  <button className={styles.btnSend}>Отправить</button>
               </form>
            </div>
         </div>
      </section>
   );
}

export default ModalBooking;