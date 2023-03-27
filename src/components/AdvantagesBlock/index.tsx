import React from "react";
import styles from "./styles.module.css";


import transferSVG from "./icons/transfer.svg";
import carsSVG from "./icons/cars.svg";
import foodSVG from "./icons/foods.svg";
import facilitiesSVG from "./icons/facilities.svg";
import wifiSVG from "./icons/wifi.svg";
import toursSVG from "./icons/tours.svg";


const AdvantagesBlock: React.FC = () => {

   return (
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Наши преимущества</h2>
            <p className={styles.description}>Мы предоставляем сервис самого высокого качества.</p>
            <div className={styles.items}>
               <div className={styles.item}>
                  <img src={facilitiesSVG} alt="/" />
                  <h3>Удобства</h3>
                  <p>Каждая наша локация оснащена всеми необходимыми удобствами: от стиральной машины до беспроводных наушников.</p>
               </div>
               <div className={styles.item}>
                  <img src={transferSVG} alt="/" />
                  <h3>Трансфер</h3>
                  <p>Мы встретим вас где-угодно и доставим до конечного места назначения.</p>
               </div>
               <div className={styles.item}>
                  <img src={wifiSVG} alt="/" />
                  <h3>Wi-fi</h3>
                  <p>Высокоскоростной интернет на всей территории жилого комплекса</p>
               </div>
               <div className={styles.item}>
                  <img src={foodSVG} alt="/" />
                  <h3>Доставка еды</h3>
                  <p>Наши курьеры доставят продукты или готовые блюда в любое время. Вы можете воспользоваться нашим меню или сделать индивидуальный заказ</p>
               </div>
               <div className={styles.item}>
                  <img src={toursSVG} alt="/" />
                  <h3>Экскурсии</h3>
                  <p>Первый раз в городе? Мы поможем в составлении маршрута, чтобы вы успели увидеть все местные достопримечательности.</p>
               </div>
               <div className={styles.item}>
                  <img src={carsSVG} alt="/" />
                  <h3>Прокат машин</h3>
                  <p>Для тех кто любит свободу передвижения у нас имеется собственный автопарк машин класса люкс.</p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default AdvantagesBlock;