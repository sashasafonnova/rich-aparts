import React from "react";
import styles from "./styles.module.css";



const FooterBottom: React.FC = () => {

   return (
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
               <h3 className={styles.copyright}>© Copyright 2022</h3>
               <ul className={styles.documents}>
                  <li className={styles.document}>Политика конфиденциальности</li>
                  <li className={styles.document}>Cookies</li>
                  <li className={styles.document}>Терминология</li>
               </ul>
            
            </div>
         </div>
      </section>
   );
}

export default FooterBottom;