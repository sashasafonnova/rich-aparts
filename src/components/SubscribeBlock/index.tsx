import React from "react";
import styles from "./styles.module.css";




const SubscribeBlock: React.FC = () => {

   return (
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
               <p className={styles.subtitle}>Оставайтесь с нами!</p>
               <h2 className={styles.title}>Подписывайтесь на еженедельные новости и акции</h2>
               <form className={styles.form}>
                  <div className={styles.formContent}>
                     <label className={styles.label} htmlFor="email">Email</label>
                     <input 
                        className={styles.input} 
                        type="email" 
                        placeholder="email@mail.ru" 
                        id="email"/>
                  <button className={styles.btn} type="submit">Подписаться</button>
                  </div>
                  
               </form>
            </div>
         </div>
      </section>
   );
}

export default SubscribeBlock;