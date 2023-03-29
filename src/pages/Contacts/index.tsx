import React, { useEffect } from "react";
import ArrowBack from "../../components/UI/ArrowBack";
import styles from "./styles.module.css";


const ContactsPage: React.FC = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);


   return (
      <section>
         <div className="container">
            <ArrowBack />
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.text}>
               <p>Мы всегда на связи!</p>
               <p className={styles.writeUs}>Напишите нам на почту: rich-aparts@mail.ru</p>
               <p>Или воcпользуйтесь формой обратной связи ниже.</p>
            </div>
         </div>
      </section>
      
   );
}

export default ContactsPage;