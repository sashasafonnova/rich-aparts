import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";


type PaginationpProps = {
   pageNumber: number;
   changePage: (pageNumber: number) => void;
}



const Pagination: React.FC<PaginationpProps> = ( { pageNumber, changePage}) => {

   const dispatch = useDispatch<AppDispatch>();
   




   return (
      <div className={styles.pagination}>
         {/* {pageNumber > 1 && <button className={styles.prevBtn} onClick={() => dispatch(changePage(pageNumber))}>Предыдущая стр.</button>}
         <span className={styles.count}>{pageNumber}</span>
         {<button className={styles.nextBtn} onClick={() => dispatch(changePage(pageNumber + 1))}>Следующая стр.</button>} */}
      </div>
   );
}

export default Pagination; 

