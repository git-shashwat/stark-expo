import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import './index.css';
import AppRouter, { history } from './routers/AppRouter';
import { signOut, signin } from './redux/actions/auth';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      jsx,
      document.getElementById('root')
    );
    hasRendered = !hasRendered;
  }
};

if (!!sessionStorage.uid && !!sessionStorage.token) {
  store.dispatch(signin(sessionStorage.uid));
  renderApp();
  if (history.location.pathname === '/signin') {
    history.push('/shop');
  }
} else {
  store.dispatch(signOut());
  renderApp();
  history.push('/');
}