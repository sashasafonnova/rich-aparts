import React from "react";
import styles from "./styles.module.css";

import { useDispatch } from "react-redux";
import { showModalWindow } from "../../redux/slices/singInSlice";
import FormSignIn from "../FormSignIn";
import FormSignUp from "../FormSignUp";





const ModalSignIn: React.FC = () => {

   const dispatch = useDispatch();
   const [formShowing, setFormShowing] = React.useState<string>("Вход");


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
               {formShowing === "Вход" ? <FormSignIn setFormShowing={setFormShowing} /> : <FormSignUp setFormShowing={setFormShowing} />} 
            </div>
         </div>
      </section>
   );
}

export default ModalSignIn;