import React, { useEffect } from "react";
import styles from "./styles.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, ProductsItem } from "../../redux/slices/productsSlice";
import { changeCity, changeRooms, changePage } from "../../redux/slices/catalogSlice";

import { AppDispatch, RootState } from "../../redux/store";


import ArrowBack from "../../components/UI/ArrowBack";
import ProductCard from "../../components/UI/ProductCard";
import { useForm } from "react-hook-form";
// import Pagination from "../../components/Product/Pagination";



const CatalogPage: React.FC = () => {

   const { handleSubmit, reset } = useForm();

   const dispatch = useDispatch<AppDispatch>();
   

   const pagination = useSelector((state: RootState) => state.catalogSlice.pagination);
   const filter = useSelector((state: RootState) => state.catalogSlice.filter);
   const pageNumber = pagination.page;

   


   const fetchParams = {
         limit: pagination.limit,
         page: pagination.page,
         city: filter.city,
         rooms: filter.rooms,
   }

   console.log(fetchParams)
   


   const onSubmit = () => {
      reset();
      dispatch(fetchProducts(fetchParams));
   }



   useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(fetchProducts(fetchParams));
   }, [pagination]);



   const products: null | ProductsItem | ProductsItem[] = useSelector((state: RootState) => state.productsSlice.products);




   if (!products) {
      return (
         <div>Ничего не найдено</div>
      )
   }

   return (
      <>
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
               <ArrowBack />
               <h2 className={styles.title}>Поиск по каталогу</h2>
                  <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formItem}>
                     <label className={styles.label} htmlFor="city">Город</label>
                        <select id="city" className={styles.input} onChange={(event) => dispatch(changeCity(event.target.value))}>
                        <option value="Москва">Москва</option>
                        <option value="Санкт-Петербург">Санкт-Петербург</option>
                        <option value="Новосибирск">Новосибирск</option>

                     </select>
                  </div>
                  <div className={styles.formItem}>
                     <label className={styles.label} htmlFor="rooms">Кол-во комнат</label>
                        <select id="rooms" className={styles.input} onChange={(event) => dispatch(changeRooms(event.target.value))}>
                        <option value="2">2 комнаты</option>
                        <option value="3">3 комнаты</option>

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
               <h2 className={styles.title}>{`Найдено (${Array.isArray(products) && products.length})`}</h2>
            <div className={styles.products}>
                  {Array.isArray(products) && products.map((product: ProductsItem) => <ProductCard key={product.id} product={product} />)}
            </div>
             <div className={styles.pagination}>
                  {pageNumber > 1 && <button className={styles.prevBtn} onClick={() => dispatch(changePage(pageNumber - 1))}>Предыдущая стр.</button>}
                  <span className={styles.count}>{pageNumber}</span>
                  {<button className={styles.nextBtn} onClick={() => dispatch(changePage(pageNumber + 1))}>Следующая стр.</button>}
            </div>
         </div>
       
      </section>
      
      
      </>
   );
}

export default CatalogPage;