import React from "react";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";

const FooterBottom: React.FC = () => {

   return (
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
               <h3 className={styles.copyright}>© Copyright 2022</h3>
               <ul className={styles.documents}>
                  <Link to="police-conf" className={styles.document}>Политика конфиденциальности</Link>
                  <Link to="police-cookies" className={styles.document}>Cookies</Link>
                  <Link to="terminology" className={styles.document}>Терминология</Link>
               </ul>
            
            </div>
         </div>
      </section>
   );
}

export default FooterBottom;