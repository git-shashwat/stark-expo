import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore  } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);