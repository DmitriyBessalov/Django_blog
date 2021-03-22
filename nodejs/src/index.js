import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {NavMenu} from './components/Navbar';
import {Article} from './components/Article/Article';
import {Aunf} from './components/Aunf/Aunf'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavMenu />
      <div className="container">
        <Switch>
            <Route path="/aunf" component={Aunf}/>
            <Route path="/article/:slug" component={Article}/>
            <Route path="/" component={Article}/>
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
