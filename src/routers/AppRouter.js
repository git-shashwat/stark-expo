import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';

import Header from '../components/header/header.component';
import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import AuthenticationPage from '../pages/authentication/authentication.component';

import '../App.css';
import '../reduction.styles.scss';
import { connect } from 'react-redux';

export const history = createBrowserHistory();

function AppRouter({ uid }) {
  let redirectToLogin, redirectToShop;
  if(!uid && history.location.pathname !== '/') {
    redirectToLogin = <Redirect to="/signin" />
  } else {
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
        </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
    uid: state.auth.uid
});

export default connect(mapStateToProps)(AppRouter);
