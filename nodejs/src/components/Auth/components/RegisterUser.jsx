import React from 'react';
import {Link} from "react-router-dom";
import {Typography, TextField, Grid, Button} from '@material-ui/core';
import classes from '../Auth.module.css'

export const RegisterUser = () => {
    const [email, setEmail] = React.useState(localStorage.getItem('email'))
    const [password, setPassword] = React.useState(localStorage.getItem('password'))

    const [emailError, setEmailError] = React.useState(null)
    const [passwordError, setPasswordError] = React.useState(null)
    const [emailHelperText, setEmailHelperText] = React.useState(null)
    const [passwordHelperText, setPasswordHelperText] = React.useState(null)

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }

    const onChangePassword = event => {
        setPassword(event.target.value)
    }

    const FormSubmit = (event) => {
        const _json = '{"email":"' + email + '","username":"' + email + '","password":"' + password + '"}'
        fetch('http://127.0.0.1:8000/api/auth/users/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: _json
        }).then(response => response.json().then(
                data => ({
                    status: response.status,
                    data: data,
                })
            ).then(res => {
                console.log(res.data)
                if (res.status === 201){
                    console.log('Зарегистрировались')
                    setEmailHelperText(null)
                    setEmailError(false)
                    setPasswordHelperText(null)
                    setPasswordError(false)
                    document.location.href='/auth/users/confirm'

                } else if (res.status === 400){
                    if (res.data.email !== undefined){
                        setEmailHelperText(res.data.email)
                        setEmailError(true)
                    }else{
                        setEmailError(false)
                    }
                    if (res.data.password !== undefined){
                        setPasswordHelperText(res.data.password)
                        setPasswordError(true)
                    }else{
                        setPasswordError(false)
                    }
                }
            })
        )
    }

    return (
       <form noValidate>
            <Typography variant="h1" className={classes.h1}>
               Регистрация
            </Typography>

            <TextField label="Email адрес" variant="outlined" className={classes.input} required
                onChange={onChangeEmail}
                value={email}
                error={emailError}
                helperText={emailHelperText}
            />

            <TextField label="Пароль" variant="outlined" className={classes.input} type="password" required
                onChange={onChangePassword}
                value={password}
                error={passwordError}
                helperText={passwordHelperText}
            />

            <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.grid}>
                <Link to="/aunf/login">Уже зарегистрированны</Link>
            </Grid>

            <Button className={classes.buttonW100} variant="contained" onClick={FormSubmit}>Зарегистрироваться</Button>
        </form>
    )
}
