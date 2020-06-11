import { all, call, takeLatest, put } from 'redux-saga/effects';

import { userActionTypes } from '../types/auth';
import { clearCart } from '../actions/cart';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ]);
}