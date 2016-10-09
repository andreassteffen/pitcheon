import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Redirect } from 'react-router'
import App from './components/App';
import Portfolio from './components/Portfolio';
import Agenda from './components/Agenda';
import Archive from './components/Archive';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/agenda" component={Agenda}/>
      <Route path="/archive" component={Archive}/>
    </Route>
  </Router>
), document.getElementById('root'))