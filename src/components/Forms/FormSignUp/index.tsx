import React from "react";
import styles from "./styles.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeTypeModal } from "../../../redux/slices/modalSlice";



type FormSignUpProps = {
   setFormShowing: (formShowing: string) => void;
}


type Inputs = {
   login: string,
   email: string;
   password: string,
};


const FormSignUp: React.FC<FormSignUpProps> = ({ setFormShowing } ) => {

   const dispatch = useDispatch();

   const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ mode: "onBlur" });

   const onSubmit: SubmitHandler<Inputs> = () => {
      reset();
      dispatch(changeTypeModal(null));
   }

   return (
   
      <div className = { styles.formBlock } > 
         <h2 className={styles.title}>Введите данные, чтобы получить доступ</h2>
         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
               <label className={styles.label} htmlFor="login">Логин</label>
               <input
                  className={styles.input}
                  id="login"
                  type="text"
                  placeholder="латинские буквы и цифры"
                  {...register("login", {
                     required: "*обязательное поле",
                     pattern: {
                        value: /^[a-zA-Z0-9]+$/,
                        message: "*некорректный login",
                     }
                  })}
               />
               {errors?.login && <div className={styles.error}>{errors.login.message}</div>}
            </div>
            <div className={styles.item}>
               <label className={styles.label} htmlFor="email">E-mail</label>
               <input
                  className={styles.input}
                  type="email"
                  id="email"
                  placeholder="mail@mail.ru"
                  {...register('email', {
                     required: "*обязательное поле",
                     pattern: {
                        value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                        message: "*введите корректный e-mail",
                     }
                  })}
               />
               {errors?.email && <div className={styles.error}>{errors.email.message}</div>}
            </div>
            <div className={styles.item}>
               <label className={styles.label} htmlFor="password">Пароль</label>
               <input
                  className={styles.input}
                  id="password"
                  type="text"
                  placeholder="латинские буквы и цифры"
                  {...register("password", {
                     required: "*обязательное поле",
                     pattern: {
                        value: /^[a-zA-Z0-9]+$/,
                        message: "*только латинские буквы и цифры",
                     }
                  })}
               />
               {errors?.password && <div className={styles.error}>{errors.password.message}</div>}
            </div>
            <button className={styles.btnSend}>Зарегистрироваться</button>
         </form>
         <button className={styles.btn} onClick={() => setFormShowing("Вход")}>Войти</button>   
      </div >
   );
}

export default FormSignUp;