import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {NavMenu} from './components/Navbar';
import {Article} from './components/Article/Article';
import {Auth} from './components/Auth/Auth'
import {Container} from "@material-ui/core";
import { StylesProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
   <StylesProvider injectFirst>
    <BrowserRouter>
      <NavMenu />
      <Container>
        <Switch>
            <Route path="/auth" component={Auth}/>
            <Route path="/article/:slug" component={Article}/>
            <Route path="/" component={Article}/>
        </Switch>
      </Container>
    </BrowserRouter>
   </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
