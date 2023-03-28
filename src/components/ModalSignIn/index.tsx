import React from "react";
import styles from "./styles.module.css";

import { useDispatch } from "react-redux";
import { showModalWindow } from "../../redux/slices/singInSlice";




const ModalSignIn: React.FC = () => {

   const dispatch = useDispatch();
   const [formShowing, setFormShowing] = React.useState("Вход");


   const onClickModal = () => {
         dispatch(showModalWindow(false));
      }

   const onClickModalWindow = (event: any) => {
      event.stopPropagation();
   }

   return (
      <section className={styles.block} onClick={onClickModal}>
         <div className={styles.window}>
            <div className={styles.content} onClick={event => onClickModalWindow(event)}>
               <button className={styles.close} onClick={() => {dispatch(showModalWindow(false))}}>X</button>
               {formShowing === "Вход" ? (
               <div className={styles.formBlock}>
                  <h2 className={styles.title}>Вход в личный кабинет</h2>
                     <form className={styles.form}>
                     <label className={styles.label} htmlFor="login">Логин</label>
                     <input className={styles.input} id="login" type="text"/>

                     <label className={styles.label} htmlFor="password">Пароль</label>
                     <input className={styles.input} id="password" type="text"/>

                     <button className={styles.btnSend}>Войти</button>
                  </form>
                  <button className={styles.btn} onClick={() => setFormShowing("Регистрация")}>Зарегистрироваться</button>   
               </div>) : ( 
                  
               <div className={styles.formBlock}> 
                  <h2 className={styles.title}>Введите ваши данные</h2>
                  <form className={styles.form}>
                     <label className={styles.label} htmlFor="login">Логин</label>
                     <input className={styles.input} id="login" type="text" />

                     <label className={styles.label} htmlFor="email">E-mail</label>
                     <input className={styles.input} id="email" type="email" />

                     <label className={styles.label} htmlFor="password">Пароль</label>
                     <input className={styles.input} id="password" type="text" />

                     <button className={styles.btnSend}>Зарегистрироваться</button>
                  </form>
                  <button className={styles.btn} onClick={() => setFormShowing("Вход")}>Войти</button>   
               </div>
               )} 
            </div>
         </div>
      </section>
   );
}

export default ModalSignIn;