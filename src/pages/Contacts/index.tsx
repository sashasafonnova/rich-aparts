import React, { useEffect } from "react";
import styles from "./styles.module.css";


const ContactsPage: React.FC = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);


   return (
      <section>
         <div className="container">
            <button className={styles.goBack}>← Назад</button>
            <h1 className={styles.title}>Контакты</h1>
            <p className={styles.text}>Здесь будут контакты</p>
         </div>
      </section>
      
   );
}

export default ContactsPage;