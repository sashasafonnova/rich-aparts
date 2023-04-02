import React, { useEffect } from "react";
import CatalogItem from "../UI/ProductCard";
import styles from "./styles.module.css";


import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, ProductsItem } from "../../redux/slices/productsSlice";
import { AppDispatch, RootState } from "../../redux/store";



type ProductsBlockProps = {
   title: string | null,
   text: string | null,
}



const ProductsBlock: React.FC<ProductsBlockProps> = ( {title, text}) => {

   const dispatch = useDispatch<AppDispatch>();


   useEffect(() => {
      const params = {
         limit: 3,
         page: 1,
      }
      dispatch(fetchProducts(params));
   }, []);


   const products: [] | ProductsItem | ProductsItem[] = useSelector((state: RootState) => state.productsSlice.products);



   return (
      <section className={styles.block}>
         <div className="container">
            <div>
               <h2 className={styles.title}>{title}</h2>
               <p className={styles.text}>{text}</p>
               <div className={styles.items}>
                  {products && products.map((product: ProductsItem) => <CatalogItem key={product.id} product={product} />)}
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProductsBlock;


