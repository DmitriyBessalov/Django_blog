import React from 'react';
import {
    Container,
//    AppBar,
    Popover,
//    Toolbar,
//    IconButton,
    Button,
    MenuItem
} from '@material-ui/core';

//import MenuIcon from '@material-ui/icons/Menu';
//import useMediaQuery from '@material-ui/core/useMediaQuery';

import {Link} from "react-router-dom";

export const NavMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
         setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    //if (useMediaQuery('(min-width:1024px)')){
    return (
    <Container>
        <Link to="/">
            <Button variant="contained" style={{"margin": "10px"}}>Правила игры</Button>
        </Link>
        <Button variant="contained" style={{"margin": "10px"}}>Онлайн игра</Button>
        <Button aria-describedby={id} variant="contained" style={{"margin": "10px"}} onClick={handleClick}>
            Меню авторизаци
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'center'}}
        >
            <Link to="/auth/users">
                <MenuItem>+ Регистрация</MenuItem>
            </Link>
            <Link to="/auth/users/activation/{uuid}/{token}">
                <MenuItem>+ Активация </MenuItem>
            </Link>
            <Link to="/auth/users/resend_activation">
                <MenuItem>+ Повторить активацию</MenuItem>
            </Link>
            <Link to="/auth/login">
                <MenuItem>- Авторизация</MenuItem>
            </Link>
            <Link to="/auth/reset_password">
                <MenuItem>- Сбросить пароль</MenuItem>
            </Link>
            <Link to="/auth/logout">
                <MenuItem>- Выход</MenuItem>
            </Link>
        </Popover>
    </Container>
    )
    // }else{
    //     return (
    //       <AppBar>
    //         <Toolbar>
    //         <IconButton edge="start" color="inherit" aria-label="menu">
    //            <MenuIcon />
    //         </IconButton>
    //         </Toolbar>
    //       </AppBar>
    //     )
    //}
}

