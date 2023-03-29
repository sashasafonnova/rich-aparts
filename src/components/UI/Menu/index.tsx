import React from "react";
import styles from "./styles.module.css";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showMenuBurger } from "../../../redux/slices/menuSlice";


const Menu: React.FC = () => {

   const dispatch = useDispatch();


   return (
      <ul className={styles.list}>
         <li>
            <NavLink to="/" onClick={() => dispatch(showMenuBurger(false))} className={({ isActive }) =>
               isActive ? styles.itemActive : styles.item}>Главная
            </ NavLink>
         </li>
         <li>
            < NavLink to="/catalog" onClick={() => dispatch(showMenuBurger(false))} className={({ isActive }) =>
               isActive ? styles.itemActive : styles.item}>Каталог
            </ NavLink>
         </li>
         <li>
            <NavLink to="/bonuses" onClick={() => dispatch(showMenuBurger(false))} className={({ isActive }) =>
               isActive ? styles.itemActive : styles.item}>Бонусная программа
            </ NavLink>
         </li>
         <li>
            <NavLink to="/contacts" onClick={() => dispatch(showMenuBurger(false))} className={({ isActive }) =>
               isActive ? styles.itemActive : styles.item}>Контакты
            </ NavLink>
         </li>
      </ul>
   );
}

export default Menu;