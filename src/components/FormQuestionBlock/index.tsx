import React from "react";
import styles from "./styles.module.css";
import formImg from './formImg.jpg'

import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
   name: string,
   tel: string,
   textarea: string,
};


const FormQuestionBlock: React.FC = () => {

   const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ mode: "onBlur" });


   const onSubmit: SubmitHandler<Inputs> = () => {
      reset();
   }


   return (
      <section className={styles.block}>
         <div className="container">
            <h2 className={styles.title}>Связаться с нами</h2>
            <p className={styles.text}>Не нашли нужную информацию? Задайте нам любой вопрос, и мы ответим вам в течении 5 минут</p>
            <div className={styles.content}>
               <img className={styles.img} src={formImg} alt="formImg" />
               <div className={styles.formArea}>
                  <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                     <div className={styles.item}>
                        <label className={styles.label} htmlFor="name">Ваше имя</label>
                        <input
                           className={styles.input}
                           id="name"
                           type="text"
                           placeholder="Иван"
                           {...register("name", {
                              required: "*обязательное поле",
                              pattern: {
                                 value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                                 message: "*введите корректное имя",
                              }
                           })}
                        />
                        {errors?.name && <div className={styles.error}>{errors.name.message}</div>}
                     </div>
                     <div className={styles.item}>
                        <label className={styles.label} htmlFor="tel">Номер телефона</label>
                        <input
                           className={styles.input}
                           id="tel"
                           type="tel"
                           placeholder="+7 (900) 90-90"
                           {...register("tel", {
                              required: "*обязательное поле",
                              pattern: {
                                 value: /^((\+7|7|8)+([0-9]){10})$/,
                                 message: "*введите корректный номер телефона",
                              }
                           })}
                        />
                        {errors?.tel && <div className={styles.error}>{errors.tel.message}</div>}
                     </div>
                     <div className={styles.item}>
                        <label className={styles.label} htmlFor="textarea">Ваш вопрос</label>
                        <textarea
                           className={styles.input}
                           id="textarea"
                           placeholder="Текст..."
                           {...register("textarea", {
                              required: "*обязательное поле",
                              pattern: /\S/,
                           })}>
                        </textarea>
                        {errors?.textarea && <div className={styles.error}>{errors.textarea.message}</div>}
                     </div>

                     <button className={styles.btn} type="submit">Отправить</button>

                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}

export default FormQuestionBlock;