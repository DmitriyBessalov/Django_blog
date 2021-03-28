import React from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import classes from "../Auth.module.css";

export const ResendActivation = () => {
   return (
        <form noValidate>

            <Typography variant="h1" className={classes.h1}>
               Повторное подтверждение Email
            </Typography>

            <TextField label="Email адрес" variant="outlined" className={classes.input}/>

            <Button className={classes.buttonW100} variant="contained">Отправить</Button>

        </form>
  )
}