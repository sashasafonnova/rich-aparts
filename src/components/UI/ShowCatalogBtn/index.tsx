import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";


const ShowCataloBtn: React.FC = () => {



   return (
      <Link to="/catalog" className={styles.btnCatalog}>Смотреть каталог</Link>
   );
}

export default ShowCataloBtn; 
