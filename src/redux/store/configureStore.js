import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import cartReducer from '../reducers/cart';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            cart: cartReducer
        }),
        composeEnhancers(applyMiddleware(...middlewares))
    );
    return store;
};