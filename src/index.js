import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

import AppRouter, { history } from './routers/AppRouter';
import { signOut, signin } from './redux/actions/auth';

import './index.css';

const jsx = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
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

if (!!localStorage.uid && !!localStorage.token) {
  store.dispatch(signin(localStorage.uid));
  renderApp();
  if (history.location.pathname === '/signin') {
    history.push('/shop');
  }
} else {
  store.dispatch(signOut());
  renderApp();
  history.push('/');
}