import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Redirect } from 'react-router'
import App from './components/App';
import Portfolio from './components/Portfolio';
import Agenda from './components/Agenda';
import Archive from './components/Archive';
import Login from './components/Login';
import Notification from './components/Notification';



render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/agenda" component={Agenda}/>
      <Route path="/archive" component={Archive}/>
      <Route path="/notification" component={Notification}/>
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
), document.getElementById('root'))