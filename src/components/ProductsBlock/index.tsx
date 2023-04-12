import React, { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.css";
import debounce from 'lodash.debounce';


import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, ProductsItem } from "../../redux/slices/productsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import ProductsSlider from "../ProductsSlider";



type ProductsBlockProps = {
   title: string | null,
   text: string | null,
   children?: ReactNode,
}



const ProductsBlock: React.FC<ProductsBlockProps> = ( {title, text, children}) => {

   const dispatch = useDispatch<AppDispatch>();
   const [windowSize, setWindowSize] = useState(window.innerWidth);


   const onChangeWindowSize = React.useCallback(
      debounce(() => {
         setWindowSize(window.innerWidth);
      }, 100),
      []
   )


   useEffect(() => {
      window.addEventListener('resize', onChangeWindowSize)
      return () => window.removeEventListener('resize', onChangeWindowSize)
   }, []);


   useEffect(() => {
      const params = {
         limit: 6,
         page: 1,
      }
      dispatch(fetchProducts(params));
   }, []);


   const products: null | ProductsItem | ProductsItem[] = useSelector((state: RootState) => state.productsSlice.products);
   const isArray = Array.isArray(products);



   return (
      <section className={styles.block}>
         <div className="container">
            <div>
               <h2 className={styles.title}>{title}</h2>
               <p className={styles.text}>{text}</p>
               <div className={styles.items}>
                  {isArray && windowSize <= 520 && <ProductsSlider products={products} sliderLength={[0]} />}
                  {isArray && windowSize > 520 && windowSize <= 780 && <ProductsSlider products={products} sliderLength={[0, 1]} />}
                  {isArray && windowSize > 780 && <ProductsSlider products={products} sliderLength={[0,1,2]}/>}
               </div>
               <div className={styles.catalogBtn}>{children}
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProductsBlock;


