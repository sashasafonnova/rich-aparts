import React, { useState } from "react";
import styles from "./styles.module.css";
import { filterCityList, filterRoomsCity} from "../../assets/lists/filter";



import iconArrow from "../../assets/img/filter/icon-arrow-down.svg";
import { useDispatch} from "react-redux";
import { changeCity, changeRooms } from "../../redux/slices/catalogSlice";
import { AppDispatch} from "../../redux/store";


type IOptionValues = {
   filterCity: string;
   filterRooms: number;
}


const CatalogFilter: React.FC = () => {

   const [visible, setVisible] = useState({
      filterCity: false,
      filterRooms: false,
   });

   const [optionValues, setOptionValues] = useState <IOptionValues>  ({
      filterCity: "Все",
      filterRooms: 0,
   });



   
   const dispatch = useDispatch<AppDispatch>();


   const clickCityOptions = (value: string) => {
      closeAllOptions();
      const newOptionValues = {
         filterRooms: 0,
         filterCity: value,
      }
      setOptionValues(newOptionValues)
   }


   const clickRoomsOptions = (value: number) => {
      closeAllOptions();
      const newOptionValues = {
         filterCity: "Все",
         filterRooms: value,
      } 
      setOptionValues(newOptionValues)
   }


   const closeAllOptions = () => {
      setVisible({
         filterCity: false,
         filterRooms: false,
      })
   }


   const clickSelectCity = () => {
      setVisible({
         filterCity: !visible.filterCity,
         filterRooms: false,
      })
   }


   const clickSelectRooms = () => {
      setVisible({
         filterCity: false,
         filterRooms: !visible.filterRooms,
      })
   }


   const sendState = () => {
      dispatch(changeCity(optionValues.filterCity));
      dispatch(changeRooms(optionValues.filterRooms));
   }


   const styleCityItem = (name: string) => {
      if (name === optionValues.filterCity){
         return `${styles.cityItem} ${styles.activeItem}`
      } else {
         return styles.cityItem
      }
   }


   const styleRoomsItem = (rooms: number) => {
      if (rooms === optionValues.filterRooms) {
         return `${styles.roomsItem} ${styles.activeItem}`
      } else {
         return styles.roomsItem
      }
   }



   return (
      <div className={styles.form}>
         <div className={styles.formItem}>
            <h3 className={styles.label}>Город</h3>
            <div className={styles.cityWrapper}> 
               <button className={styles.cityBtn} onClick={clickSelectCity}>
                  {optionValues.filterCity === "" ? "Все" : optionValues.filterCity}
                  <img src={iconArrow} className={styles.btnArrow} alt="icon-arrow" />
               </button>
               {visible.filterCity && (
                  <div className={styles.cityContent}>
                     <ul >
                     {filterCityList.map(item => (
                        <li className={styleCityItem(item.value)} onClick={() => clickCityOptions(item.value)}>{item.name}</li>
                     ))}
                  </ul>
               </div>)}
            </div>
         </div>
         <div className={styles.formItem}>
            <h3 className={styles.label}>Кол-во комнат</h3>
            <div className={styles.roomsWrapper}>
               <button className={styles.roomsBtn} onClick={clickSelectRooms}>
                  {optionValues.filterRooms === 0 ? "Любое" : optionValues.filterRooms}
                  <img src={iconArrow} className={styles.btnArrow} alt="icon-arrow" />
               </button>
               {visible.filterRooms && (
                  <div className={styles.roomsContent}>
                     <ul >
                        {filterRoomsCity.map(item => (
                           <li className={styleRoomsItem(item.value)} onClick={() => clickRoomsOptions(item.value)}>{item.name}</li>
                        ))}    
                     </ul>
                  </div>)}
            </div>
         </div>
         <button className={styles.btn} onClick={sendState}>Подобрать</button>
      </div>
   );
}

export default CatalogFilter;