import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore  } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/root';

import rootSaga from '../sagas/root';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
