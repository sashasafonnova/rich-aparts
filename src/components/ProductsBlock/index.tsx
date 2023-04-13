import React, { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.css";
import debounce from 'lodash.debounce';


import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, ProductsItem } from "../../redux/slices/productsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import ProductsSlider from "./ProductsSlider";
import FetchError from "../UI/FetchError";
import Loader from "../UI/Loader";



interface ProductsBlockProps {
   title: string | null,
   text: string | null,
   children?: ReactNode,
}



const ProductsBlock: React.FC<ProductsBlockProps> = ( {title, text, children}) => {

   const dispatch = useDispatch<AppDispatch>();
   const [windowSize, setWindowSize] = useState(window.innerWidth);
   const products: null | ProductsItem | ProductsItem[] = useSelector((state: RootState) => state.productsSlice.products);


   const fetchStatus: string = useSelector((state: RootState) => state.productsSlice.fetchStatus);


   const getFetchResult = () => {
      if (fetchStatus === "error") {
         return <FetchError />
      } else if (fetchStatus === "loading") {
         return <Loader />;
      } else if (fetchStatus === "success" && Array.isArray(products)) {
         return (
            <div className={styles.items}>
               {windowSize <= 520 && <ProductsSlider products={products} sliderLength={[0]} />}
               {windowSize > 520 && windowSize <= 780 && <ProductsSlider products={products} sliderLength={[0, 1]} />}
               {windowSize > 780 && <ProductsSlider products={products} sliderLength={[0, 1, 2]} />}
            </div>
         )
   }
}

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





   return (
      <section className={styles.block}>
         <div className="container">
            <div>
               <h2 className={styles.title}>{title}</h2>
               <p className={styles.text}>{text}</p>
               {getFetchResult()}
               <div className={styles.catalogBtn}>{children}
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProductsBlock;


