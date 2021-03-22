import React from 'react';
import {Container, AppBar, Popover, Toolbar, IconButton, Button, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

    if (useMediaQuery('(min-width:1024px)')){
    return (
    <Container>
        <Link to="/">
            <Button variant="contained" style={{"margin": "10px"}}>Home</Button>
        </Link>
        <Button variant="contained" style={{"margin": "10px"}}>Раздел</Button>
        <Button aria-describedby={id} variant="contained" style={{"margin": "10px"}} onClick={handleClick}>
            Меню авторизации
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'center'}}
        >
            <Link to="/aunf/login">
                <MenuItem>Login</MenuItem>
            </Link>
            <Link to="/aunf/reset_password">
                <MenuItem>ResetPassword</MenuItem>
            </Link>
            <Link to="/aunf/users">
                <MenuItem>RegisterUser</MenuItem>
            </Link>
            <Link to="/aunf/users/activation">
                <MenuItem>Activation</MenuItem>
            </Link>
            <Link to="/aunf/users/resend_activation">
                <MenuItem>ResendActivation</MenuItem>
            </Link>
            <Link to="aunf/users/reset_password">
                <MenuItem>ResetActivation</MenuItem>
            </Link>
            <Link to="/aunf/logout">
                <MenuItem>Logout</MenuItem>
            </Link>

        </Popover>
    </Container>
    )
    }else{
        return (
          <AppBar>
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
               <MenuIcon />
            </IconButton>
            </Toolbar>
          </AppBar>
        )
    }
}

