import React from "react";
import styles from "./styles.module.css";
import iconEnterSVG from "./iconEnter.svg";



const SignInBtn: React.FC = () => {


   return (
      <button className={styles.enter}>
         <span>Войти</span>
         <img src={iconEnterSVG} alt="iconEnter" />
      </button>
   );
}

export default SignInBtn;