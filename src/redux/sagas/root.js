import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop';
import { authSagas } from './auth';
import { cartSagas } from './cart';

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(authSagas),
        call(cartSagas)
    ]);
}