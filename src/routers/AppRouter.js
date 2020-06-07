import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';

import Header from '../components/header/header.component';
import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import CheckoutPage from '../pages/checkout/checkout.component';
import AuthenticationPage from '../pages/authentication/authentication.component';

import '../App.css';
import '../reduction.styles.scss';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../redux/selectors/auth';

export const history = createBrowserHistory();

function AppRouter({ uid }) {
  let redirectToLogin, redirectToShop;
  if(!uid && history.location.pathname !== '/') {
    redirectToLogin = <Redirect to="/signin" />
  } else if (uid && (history.location.pathname === '/signin')) {
    redirectToShop = <Redirect to="/shop" />
  }
  return (
    <Router history={history}>
        <Header />
        {redirectToLogin}
        {redirectToShop}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" component={AuthenticationPage} />
          <PrivateRoute path="/shop" component={ShopPage} />
          <PrivateRoute exact path="/checkout" component={CheckoutPage} />
        </Switch>
    </Router>
  );
}

const mapStateToProps = createStructuredSelector({
    uid: selectCurrentUser
});

export default connect(mapStateToProps)(AppRouter);
