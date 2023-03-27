import React from "react";
import styles from "./styles.module.css";
import formImg from './formImg.jpg'


const FormQuestionBlock: React.FC = () => {


   return (
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Связаться с нами</h2>
            <p className={styles.text}>Не нашли нужную информацию? Задайте нам любой вопрос, и мы ответим вам в течении 5 минут</p>
            <div className={styles.content}>
               <img className={styles.img} src={formImg} alt="formImg" />
               <div className={styles.formArea}>
                  <form className={styles.form}>
                  <div className={styles.item}>   
                     <label className={styles.label} htmlFor="name">Ваше имя</label>
                     <input 
                        className={styles.input}
                        id="name" 
                        type="text" 
                        placeholder="Иван" 
                        />
                  </div>
                  <div className={styles.item}>
                     <label className={styles.label}  htmlFor="tel">Номер телефона</label>
                     <input 
                        className={styles.input}
                        id="tel" 
                        type="tel" 
                        placeholder="+7 (900) 90-90" />
                  </div>
                  <div className={styles.item}>
                     <label className={styles.label} htmlFor="textarea">Ваш вопрос</label>
                     <textarea 
                        className={styles.input}
                        id="textarea" 
                        placeholder="Текст...">
                     </textarea>
                  </div>
                  
                  <button className={styles.btn}type="submit">Отправить</button>
                     
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}

export default FormQuestionBlock;