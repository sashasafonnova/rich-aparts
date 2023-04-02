import React from "react";
import styles from "./styles.module.css";


import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeContentModal, changeTypeModal, changeTimeOutModal } from "../../redux/slices/modalSlice";


type Inputs = {
   email: string,
};


const SubscribeBlock: React.FC = () => {
   
   const dispatch = useDispatch();
   const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ mode: "onBlur" });

   const onSubmit: SubmitHandler<Inputs> = () => {
      reset();


      const modalContent = {
         message: {
            title: "Рады, что вы с нами!",
            subtitle: "Остался всего 1 шаг. На ваш электроннный адрес направлено письмо с ссылкой на подтверждение. Пожалуйста, подтвердите подписку",
         }
      }
      dispatch(changeContentModal(modalContent));
      dispatch(changeTypeModal("formSuccess"));
      dispatch(changeTimeOutModal(5000));
   }

   return (
      <section className={styles.block}>
         <div className="container">
            <div className={styles.content}>
               <p className={styles.subtitle}>Оставайтесь с нами!</p>
               <h2 className={styles.title}>Подписывайтесь на еженедельные новости и акции</h2>
               <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formContent}>
                     <label className={styles.label} htmlFor="email">Email</label>
                     <input
                        className={styles.input}
                        type="email"
                        placeholder="email@mail.ru"
                        id="email"
                        {...register('email', {
                           required: "*обязательное поле",
                           pattern: {
                              value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                              message: "*введите корректный e-mail",
                           }
                        })}
                     />
                     {errors?.email && <div className={styles.error}>{errors.email.message}</div>}
                     <button className={styles.btn} type="submit">Подписаться</button>
                  </div>

               </form>
            </div>
         </div>
      </section>
   );
}

export default SubscribeBlock;