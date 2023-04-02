import React from "react";
import styles from "./styles.module.css";

import { useDispatch } from "react-redux";
import { changeTypeModal } from "../../../redux/slices/modalSlice";
import FormSignIn from "../../Forms/FormSignIn";
import FormSignUp from "../../Forms/FormSignUp";





const ModalSignIn: React.FC = () => {

   const dispatch = useDispatch();
   const [formShowing, setFormShowing] = React.useState<string>("Вход");


   const onClickModal = () => {
      dispatch(changeTypeModal(null));
      }
   const onClickModalWindow = (event: any) => {
      event.stopPropagation();
   }



   return (
      <section className={styles.block} onClick={onClickModal}>
         <div className={styles.window}>
            <div className={styles.content} onClick={event => onClickModalWindow(event)}>
               <button className={styles.close} onClick={() => { dispatch(changeTypeModal(null))}}>X</button>
               {formShowing === "Вход" ? <FormSignIn setFormShowing={setFormShowing} /> : <FormSignUp setFormShowing={setFormShowing} />} 
            </div>
         </div>
      </section>
   );
}

export default ModalSignIn;