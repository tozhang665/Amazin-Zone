import React from 'react';

import NavContainer from "./nav/nav_container"
import LoginContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../utils/route_utils';
import { Switch } from 'react-router';
import SplashContainer from "./splash/splash_container";
import ProductShowContainer from "./show/product_show_container";
import CreateReviewContainer from './reviews/create_review_container';
import EditReviewContainer from './reviews/edit_review_container';

import CartContainer from './cart/cart_container';

export default () => (
  <div>
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <ProtectedRoute exact path="/createReview/:product_id" component={CreateReviewContainer}/>
      <ProtectedRoute exact path="/editReview/:review_id" component={EditReviewContainer}/>
      <ProtectedRoute exact path="/cart" component={CartContainer}/>
      <Route exact path ="/products/:id" component={ProductShowContainer}/>
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);




