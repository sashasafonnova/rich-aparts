import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTypeModal, changeContentModal, changeTimeOutModal } from "../../../redux/slices/modalSlice";

import styles from "./styles.module.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { RootState } from "../../../redux/store";





interface Inputs {
   name: string,
   tel: string,
   email: string,
};


const ModalBooking: React.FC =  () => {


   const dispatch = useDispatch();
   const locationModal = useSelector((state: RootState) => state.modalSlice?.content?.location)



   const stopClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
   }


   const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ mode: "onBlur" });
   
   const onSubmit: SubmitHandler<Inputs> = () => {
      reset();

      const modalContent = {
         message: {
            title: "Ваши данные успешно отправлены",
            subtitle: "Наш менеджер свяжется с вами в ближайшее время.",
         }
      }
      dispatch(changeContentModal(modalContent));
      dispatch(changeTypeModal("formSuccess"));
      dispatch(changeTimeOutModal(3000));
   }


   return (
      <section className={styles.block} onClick={() => dispatch(changeTypeModal(null))}>
         <div className={styles.window}>
            <div className={styles.content} onClick={event => stopClick(event)}>
               <button className={styles.close} onClick={() => dispatch(changeTypeModal(null))}>X</button>
               <h2 className={styles.title}>Забронировать</h2>
               <p className={styles.location}>Выбранная локация: <span>{locationModal?.name}</span></p>
               <p className={styles.subtitle}>Оставьте заявку на бронирование, <br/> и мы свяжемся с вами в течении 5 минут.</p>
               <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                  
                  <div className={styles.item}>
                     <label className={styles.label} htmlFor="name">Имя</label>
                     <input 
                        className={styles.input} 
                        id="name" 
                        type="text" 
                        {...register("name", {
                           required: "*обязательное поле",
                           pattern: {
                              value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                              message: "*введите корректное имя",
                           }
                        })}
                        />
                     {errors?.name && <div className={styles.error}>{errors.name.message}</div>}
                  </div>
                  <div className={styles.item}>
                     <label className={styles.label} htmlFor="tel">Телефон</label>
                     <input 
                        className={styles.input} 
                        id="tel" 
                        type="tel" 
                        {...register("tel", {
                           required: "*обязательное поле",
                           pattern: {
                              value: /^((\+7|7|8)+([0-9]){10})$/,
                              message: "*введите корректный номер телефона",
                           }
                        })}
                        />
                     {errors?.tel && <div className={styles.error}>{errors.tel.message}</div>}
                  </div>
                  <div className={styles.item}>
                     <label className={styles.label} htmlFor="email">E-mail</label>
                     <input 
                        className={styles.input} 
                        id="email" 
                        type="email" 
                        {...register('email', {
                           required: "*обязательное поле",
                           pattern: {
                              value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                              message: "*введите корректный e-mail",
                           }
                        })}
                     />
                     {errors?.email && <div className={styles.error}>{errors.email.message}</div>}
                  </div>
                  <button className={styles.btnSend}>Отправить</button>
               </form>
            </div>
         </div>
      </section>
   );
}

export default ModalBooking;