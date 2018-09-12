import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import About from './About.jsx'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Root} />
        <Route exact path='/about' component={About} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;