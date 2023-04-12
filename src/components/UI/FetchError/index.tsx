import React from "react";
import styles from "./styles.module.css";


const FetchError: React.FC = () => {



   return (
      <div className={styles.fetchError}>Ошибка...Пожалуйста, повторите попотку позже</div>
   );
}

export default FetchError; 

