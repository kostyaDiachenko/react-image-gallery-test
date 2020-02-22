import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { List, NotFound } from '../';

const Main = () => (
  <Switch>
    <Redirect exact from="/" to="/list" />
    <Route path="/list" component={List} />
    <Route component={NotFound} />
  </Switch>
);

export default Main;
