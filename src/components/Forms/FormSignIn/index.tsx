import React from "react";
import styles from "./styles.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeTypeModal } from "../../../redux/slices/modalSlice";




type FormSignInProps = {
   setFormShowing: (formShowing: string) => void;
}

interface Inputs {
   login: string,
   password: string,
};


const FormSignIn: React.FC<FormSignInProps> = ({ setFormShowing } ) => {

   const dispatch = useDispatch();

   const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ mode: "onBlur" });
   const onSubmit: SubmitHandler<Inputs> = () => {
      reset();
      dispatch(changeTypeModal(null));
   }


   return (   
      <div className={styles.formBlock}>
         <h2 className={styles.title}>Вход в личный кабинет</h2>
         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
               <label className={styles.label} htmlFor="login">Логин</label>
               <input 
                  className={styles.input} 
                  id="login" 
                  type="text"
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
               <label className={styles.label} htmlFor="password">Пароль</label>
               <input 
                  className={styles.input} 
                  id="password" 
                  type="password"
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
            <button className={styles.btnSend}>Войти</button>
         </form>
         <button className={styles.btn} onClick={() => setFormShowing("Регистрация")}>Зарегистрироваться</button>   
      </div>
   );
}

export default FormSignIn;