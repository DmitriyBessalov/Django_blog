import React from "react";
import {Switch, Route} from "react-router-dom";
import {RegisterUser} from "./components/RegisterUser"
import {Login} from "./components/Login"
import {Activation} from "./components/Activation"
import {ResendActivation} from "./components/ResendActivation"
import {ResetActivation} from "./components/ResetActivation"
import {Logout} from "./components/Logout"
import {Confirm} from "./components/Confirm";
import classes from './Auth.module.css'

export const Auth = (props) => {
  return (
      <div className={classes.container}>
          <Switch>
            {/* Авторизация */}
            <Route path="/auth/login" component={Login}/>

            {/* Регистрация пользователя */}
            <Route path="/auth/users" exact  component={RegisterUser}/>

            {/* Письмо успешно отправлено на емайл */}
            <Route path="/auth/users/confirm" component={Confirm}/>

            {/* Страница (успешного или нет) подтвержния активации email */}
            <Route path="/auth/users/activation/:uid/:token" component={Activation}/>

            {/* Повторная отправка на емайл */}
            <Route path="/auth/users/resend_activation" component={ResendActivation}/>

            {/* Сброс пароля */}
            <Route path="/auth/users/reset_password" component={ResetActivation}/>

            {/* Выход */}
            <Route path="/auth/logout" component={Logout}/>

          </Switch>
      </div>
  )
}