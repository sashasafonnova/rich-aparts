import React, { useEffect } from "react";
import styles from "./styles.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, ProductsItem } from "../../redux/slices/productsSlice";
import { AppDispatch, RootState } from "../../redux/store";


import ArrowBack from "../../components/UI/ArrowBack";
import ProductCard from "../../components/UI/ProductCard";
import CatalogFilter from "../../components/CatalogFilter";



const CatalogPage: React.FC = () => {


   const dispatch = useDispatch<AppDispatch>();


   const pagination = useSelector((state: RootState) => state.catalogSlice.pagination);
   const filter = useSelector((state: RootState) => state.catalogSlice.filter);



   const fetchParams = {
         limit: pagination.limit,
         page: pagination.page,
         city: filter.city,
         rooms: filter.rooms,
   }


   useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(fetchProducts(fetchParams));
   }, [pagination, filter]);


   const products: null | ProductsItem | ProductsItem[] = useSelector((state: RootState) => state.productsSlice.products);



   return (
      <>
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
               <ArrowBack />
               <h2 className={styles.title}>Поиск по каталогу</h2>
               <CatalogFilter />   
            </div>
         </div>
      </section>
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Результаты по запросу:</h2>
            <div className={styles.products}>
                  {Array.isArray(products) && products.map((product: ProductsItem) => <ProductCard key={product.id} product={product} />)}
            </div>
         </div>
       
      </section>
      </>
   );
}

export default CatalogPage;