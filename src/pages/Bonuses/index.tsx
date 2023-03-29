import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";

import { showModalWindow } from "../../redux/slices/singInSlice";
import ArrowBack from "../../components/UI/ArrowBack";


const Bonuses: React.FC = () => {

   const dispatch = useDispatch();


   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <section>
         <div className="container">
            <ArrowBack />
            <h1 className={styles.title}>Бонусная программа</h1>
            <div className={styles.text}>
               <p className={styles.item}>Для наших постоянных гостей мы разработали специальную бонусную программу.</p>
               <p className={styles.item}>Бронируйте любые наши апартаменты, копите бонусы и обменивайте их <span className={styles.itemSpan}>на скидку до 50%</span> на всю последующую стоимость проживания.</p>
               <p className={styles.item}>Размер бонусов зависит от стоимости аренды. С каждой оплаченной суммы вам будет <span className={styles.itemSpan}>начислено 3% бонусами.</span></p>
               <p className={styles.item}>{`С текущим балансом и всеми деталями вы можете ознакомиться в своем `}  
                  <span className={styles.itemLink} onClick={() => dispatch(showModalWindow(true))}>
                     личном кабинете
                  </span>
               </p>
               <p className={styles.item}>До встречи!</p>
            </div>    
         </div>
      </section>
      
   );
}

export default Bonuses;