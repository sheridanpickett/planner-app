import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={''} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;