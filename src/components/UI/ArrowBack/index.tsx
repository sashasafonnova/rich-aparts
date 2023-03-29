import React from "react";
import styles from "./styles.module.css";

import { useNavigate } from "react-router-dom";


const ArrowBack: React.FC = () => {

   const navigate = useNavigate();

   return (
      <button className={styles.goBack} onClick={() => navigate(-1)}>← Назад</button>
   );
}

export default ArrowBack; 

