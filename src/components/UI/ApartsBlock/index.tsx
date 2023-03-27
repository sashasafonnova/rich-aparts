import React from "react";
import CatalogItem from "../CatalogItem";
import styles from "./styles.module.css";



type ApartBlockProps = {
   title: string | null,
   text: string | null,
}


const ApartsBlock: React.FC<ApartBlockProps> = ({ title, text }) => {

   return (
      <section className={styles.block}>
         <div className="container">
            <div>
               <h2 className={styles.title}>{title}</h2>
               <p className={styles.text}>{text}</p>
               <div className={styles.items}>
                  <CatalogItem />
                  <CatalogItem />
                  <CatalogItem />
               </div>
            </div>
         </div>
      </section>
   );
}

export default ApartsBlock;


