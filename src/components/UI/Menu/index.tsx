import React, { useEffect } from "react";
import styles from "./styles.module.css";

import { NavLink } from "react-router-dom";


const Menu: React.FC = () => {

   

   return (
      <ul className={styles.list}>
         <li> 
            <NavLink to="/" className={({ isActive }) => isActive ? styles.itemActive : styles.item}>Главная
            </ NavLink>
         </li>
         <li>
            < NavLink to="/catalog" className={({ isActive }) => isActive ? styles.itemActive : styles.item}>Каталог
            </ NavLink>
         </li>
         <li>
            <NavLink to="/bonuses" className={({ isActive }) => isActive ? styles.itemActive : styles.item}>Бонусная программа
            </ NavLink>
         </li>
         <li>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.itemActive : styles.item}>Контакты
            </ NavLink>
         </li>
      </ul>
   );
}

export default Menu;