import React from 'react';
import style from "../Aunf.module.css";

export const ResetActivation = () => {
   return (
       <form>
            <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Сброс пароля</h1>
            </div>

            <div className={style.form_label_group}>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email адрес" required
                       autoFocus/>
                    <label htmlFor="inputEmail">Email адрес</label>
            </div>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Сбросить</button>
        </form>
  )
}