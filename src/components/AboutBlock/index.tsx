import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";



import aboutImg from "./about.jpg";

type AboutBlockProps = {
   aboutRef: React.RefObject<HTMLElement>;
}


const AboutBlock: React.FC<AboutBlockProps> = React.forwardRef(( props, ref ) => {

   return (
      <section className={styles.block} ref={props.aboutRef}>
         <div className="container">
            <div className={styles.mainContent}>
               <div className={styles.textBlock}>
                  <h2 className={styles.title}>О нас</h2>
                  <p className={styles.description}>Удобство и комфорт важны, даже если вы находитесь на отдыхе или в командировке в другом городе. Именно поэтому мы создали свою собственную сеть премиальных квартир с посуточной арендой. Все наши апартеманты продумны до мелочей. Вам не нужно беспокоиться ни о чем. Просто наслаждайтесь отдыхом или сосредоточьтесь на рабочих вопросах..</p>
                  <Link to="/catalog" className={styles.btn}>Смотреть каталог</Link>
               </div>
               <div className={styles.aboutImg} >
                  <img src={aboutImg} alt="aboutImg" />
               </div>
            </div>
            <ul className={styles.details}>
               <li className={styles.detailsItem}>
                  <h3 className={styles.detailsNumber}>5</h3>
                  <p>городов</p>
               </li>
               <li className={styles.detailsItem}>
                  <h3 className={styles.detailsNumber}>50+</h3>
                  <p>локаций</p>
               </li>
               <li className={styles.detailsItem}>
                  <h3 className={styles.detailsNumber}>300+</h3>
                  <p>довольных клиентов</p>
               </li>
               <li className={styles.detailsItem}>
                  <h3 className={styles.detailsNumber}>3</h3>
                  <p>года на рынке</p>
               </li>
            </ul>
         </div>
      </section>
   );
})

export default AboutBlock;