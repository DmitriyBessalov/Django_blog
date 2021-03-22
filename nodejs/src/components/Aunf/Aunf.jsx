import React from 'react';
import style from './Aunf.module.css'
import {Switch, Route} from "react-router-dom";
import {RegisterUser} from "./components/RegisterUser"
import {Login} from "./components/Login"
import {Confirm} from "./components/Confirm"
import {Activation} from "./components/Activation"
import {ResendActivation} from "./components/ResendActivation"
import {ResetActivation} from "./components/ResetActivation"
import {Logout} from "./components/Logout"


export const Aunf = () => {

  const state = {
         login: {
             email: {
                 input:'text',
                 label:'Email',
                 validateText:'',
                 error:null,
                 value:''
             },
             password:{
                 input:'text',
                 label:'Пароль',
                 validateText:'',
                 error:null,
                 value:''
             }
         }
  }



  return (
      <div className={style.block}>
          <Switch>
            {/* Авторизация */}
            <Route path="/aunf/login" component={Login}/>

            {/* Регистрация пользователя */}
            <Route path="/aunf/users" exact  component={RegisterUser}/>

            {/* Письмо успешно отправлено на емайл */}
            <Route path="/aunf/users/confirm" component={Confirm}/>

            {/* Страница (успешного или нет) подтвержния активации email */}
            <Route path="/aunf/users/activation" component={Activation}/>

            {/* Повторная отправка на емайл */}
            <Route path="/aunf/users/resend_activation" component={ResendActivation}/>

            {/* Сброс пароля */}
            <Route path="/aunf/users/reset_password" component={ResetActivation}/>

            {/* Выход */}
            <Route path="/aunf/logout" component={Logout}/>

          </Switch>
      </div>
  )
}