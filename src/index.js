import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

import AppRouter, { history } from './routers/AppRouter';
import { signInSuccess, startSignOut } from './redux/actions/auth';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { selectCurrentUser, selectAuthToken } from './redux/selectors/auth';

const jsx = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);

ReactDOM.render(
  jsx,
  document.getElementById('root')
);