import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTypeModal } from "../../../redux/slices/modalSlice";
import styles from "./styles.module.css";
import { RootState } from "../../../redux/store";





const ModalSubmited: React.FC =  () => {

   const dispatch = useDispatch();
   const modalMessage = useSelector((state: RootState) => state.modalSlice.content?.message)
   const modalTimeOut = useSelector((state: RootState) => state.modalSlice.timeOut);



   const stopClick = (event: any) => {
      event.stopPropagation();
   }
   
   
   React.useEffect(() => {
      const timeOut = setTimeout(() => {
         dispatch(changeTypeModal(null));
      }, modalTimeOut);

      return () => clearTimeout(timeOut);
   }, [])

   


   return (
      <section className={styles.block} onClick={() => dispatch(changeTypeModal(null))}>
         <div className={styles.window}>
            <div className={styles.content} onClick={event => stopClick(event)}>
               <button className={styles.close} onClick={() => {dispatch(changeTypeModal(null))}}>X</button>
               <h2 className={styles.title}>{modalMessage?.title}</h2>
               <p className={styles.subtitle}>{modalMessage?.subtitle}</p>
            </div>
         </div>
      </section>
   );
}

export default ModalSubmited;
