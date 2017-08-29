import React, {Component} from 'react';
import {render} from 'react-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Tab from "./components/Tab/Tab";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import Run from "./components/Run/Run";
import News from "./components/News/News";
import Shopping from "./components/Shopping/Shopping";
import User from "./components/User/User";


render(
  <Router>
    <Switch>
      <App>
        <Tab/>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/run"} exact component={Run}/>
        <Route path={"/news"} exact component={News}/>
        <Route path={"/shopping"} exact component={Shopping}/>
        <Route path={"/user"} exact component={User}/>
      </App>
    </Switch>

  </Router>, document.getElementById('root'));
