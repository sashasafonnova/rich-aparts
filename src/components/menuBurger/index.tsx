import React from "react";
import Menu from "../UI/Menu";
import SignInBtn from "../UI/SignInBtn";
import styles from "./styles.module.css";


const MenuBurger: React.FC = () => {

   return (
      <div className={styles.menu}>
         <SignInBtn />
         <Menu />
      </div>   
   );
}

export default MenuBurger;


