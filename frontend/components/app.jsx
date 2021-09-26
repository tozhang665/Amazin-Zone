import React from 'react';
import Home from './home/home';
import HomeContainer from "./home/home_container"
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../utils/route_utils';


export default () => (
  <div>
    <AuthRoute exact path="/login" component={LoginContainer} />
    <Route exact path="/" component={HomeContainer} />
  </div>
);