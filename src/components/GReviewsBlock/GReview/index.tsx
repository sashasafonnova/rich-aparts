import React from "react";
import styles from "./styles.module.css";

import avatar from "./avatar.png"



interface GReviewProps {
   element: {
      id: number;
      name: string;
      profession: string;
      text: string;
   }
}



const GReview: React.FC<GReviewProps> = ({ element }) => {




   return (
      <div className={styles.review}>
         <img className={styles.avatar} src={avatar} alt="/" />
         <p className={styles.name}>{element.name}</p>
         <p className={styles.prof}>{element.profession}</p>
         <blockquote className={styles.text}>{element.text}</blockquote>
      </div>
   );
}

export default GReview;