import React, { useEffect } from "react";
import styles from "./styles.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, ProductsItem } from "../../redux/slices/productsSlice";
import { AppDispatch, RootState } from "../../redux/store";


import ArrowBack from "../../components/UI/ArrowBack";
import ProductCard from "../../components/UI/ProductCard";



const CatalogPage: React.FC = () => {

   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
         window.scrollTo(0, 0);
         const params = {
            limit: 10,
            page: 1,
         }
         dispatch(fetchProducts(params));
      }, []);


   const products: [] | ProductsItem | ProductsItem[] = useSelector((state: RootState) => state.productsSlice.products);


   return (
      <>
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
               <ArrowBack />
               <h2 className={styles.title}>Поиск по каталогу</h2>
               <form className={styles.form}>
                  <div className={styles.formItem}>
                     <label className={styles.label} htmlFor="city">Город</label>
                     <select id="city" className={styles.input}>
                        <option value="Москва">Москва</option>
                        <option value="Санкт-Петербург">Санкт-Петербург</option>
                     </select>
                  </div>
                  <div className={styles.formItem}>
                     <label className={styles.label} htmlFor="rooms">Кол-во комнат</label>
                     <select id="rooms" className={styles.input}>
                        <option value="1">1 комната</option>
                        <option value="2">2 комнаты</option>
                     </select>
                  </div>
                  <div className={styles.formItem}>
                     <label className={styles.label} htmlFor="date">Дата заезда</label>
                     <input className={styles.input} type="date" />
                  </div>

                  <button className={styles.btn}>Подобрать</button>
               </form>
            </div>
         </div>
      </section>
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>{`Найдено (${products.length})`}</h2>
            <div className={styles.products}>
                  {products && products.map((product: ProductsItem) => <ProductCard key={product.id} product={product} />)}
            </div>
         </div>
        
      </section>
      
      
      </>
   );
}

export default CatalogPage;