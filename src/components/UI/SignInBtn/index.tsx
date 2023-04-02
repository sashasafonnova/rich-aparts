import React from "react";
import styles from "./styles.module.css";
import iconEnterSVG from "./iconEnter.svg";

import { useDispatch } from "react-redux";
import { changeTypeModal } from "../../../redux/slices/modalSlice";
import { showMenuBurger } from "../../../redux/slices/menuSlice";


const SignInBtn: React.FC = () => {

   const dispatch = useDispatch();

   const onCLick = () => {
      dispatch(changeTypeModal("signInUp"));
      dispatch(showMenuBurger(false));
   }


   return (
      <button className={styles.enter} onClick={onCLick}>
         <span>Войти</span>
         <img src={iconEnterSVG} alt="iconEnter" />
      </button>
   );
}

export default SignInBtn;