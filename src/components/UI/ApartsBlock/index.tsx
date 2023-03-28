import React from "react";
import CatalogItem from "../CatalogItem";
import styles from "./styles.module.css";

import backend from "../../../assets/backend.js";
import type { CatalogItemProps } from "../CatalogItem";



type ApartBlockProps = {
   title: string | null,
   text: string | null,
}

// type CatalogLocation = {
//    id?: number;
//    city?: string;
//    name?: string;
//    rooms?: number;
//    details?: {
//       square?: number;
//       bathrooms?: number;
//       badrooms?: number;
//    };
//    description?: string;
//    faciliies?: string[];
//    imgUrl?: string;
//    price?: number;

// }


const ApartsBlock: React.FC<ApartBlockProps> = ( {title, text}) => {


   console.log(backend)

   return (
      <section className={styles.block}>
         <div className="container">
            <div>
               <h2 className={styles.title}>{title}</h2>
               <p className={styles.text}>{text}</p>
               <div className={styles.items}>
                  {backend.map(elem => <CatalogItem item={elem} />)}
               </div>
            </div>
         </div>
      </section>
   );
}

export default ApartsBlock;


