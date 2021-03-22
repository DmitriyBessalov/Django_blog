import React from 'react';
import style from '../Aunf.module.css'
import {Link} from "react-router-dom";

export const Login = () => {
   return (
       <form>
            <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Авторизация</h1>
            </div>

            <div className={style.form_label_group}>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email адрес" required
                       autoFocus/>
                    <label htmlFor="inputEmail">Email адрес</label>
            </div>

            <div className={style.form_label_group}>
                <input type="password" id="inputPassword" className="form-control" placeholder="Пароль" required/>
                    <label htmlFor="inputPassword">Пароль</label>
            </div>


           <div className="d-flex justify-content-between bd-highlight mb-3">
               <div className="checkbox bd-highlight">
                   <label>
                        <input type="checkbox" value="remember-me" /> Запомнить пароль
                    </label>
               </div>
               <div className="bd-highlight">
                   <Link to="/aunf/users/reset_password">Забыли пароль</Link>

               </div>
           </div>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
        </form>
  )
}
