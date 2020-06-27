import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import Axios from 'axios';

import { userActionTypes } from '../types/auth';
import { signInFailure, signInSuccess, signOutSuccess, signOutFailure, signUpFailure } from '../actions/auth';
import { selectAuthToken } from '../selectors/auth';

export function* checkUserAuth() {
    try {
        const uid = yield localStorage.uid;
        const token = yield localStorage.token;
        if (!token) return;
        yield put(signInSuccess({
            uid,
            token
        }))
    } catch (err) {
        yield put(signInFailure(err));
    }
};

export function* checkUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUserAuth);
};

export function* signUp ({ payload: { email, password, displayName } }) {
    try {
        const { data: { user: { _id }, token } } = yield Axios({
            method: 'post',
            url: '/users/signup',
            data: {
                email,
                password,
                displayName
            }
        });
        yield localStorage.setItem('uid', _id);
        yield localStorage.setItem('token', token);
        yield put(signInSuccess({
            uid: _id,
            token
        }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
};

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.START_SIGNUP, signUp);
}

export function* signIn ({ payload: { email, password }}) {
    try {
        const { data: { user: { _id }, token } } = yield Axios({
            method: 'post',
            url: '/users/signin',
            data: {
                email,
                password
            }
        });
        yield localStorage.setItem('uid', _id);
        yield localStorage.setItem('token', token);
        yield put(signInSuccess({
            uid: _id,
            token
        }));
    } catch (err) {
        yield put(signInFailure(err.message));
    }
};

export function* onSignInStart() {
    yield takeLatest(userActionTypes.START_SIGNIN, signIn)
};

export function* signOut () {
    try {
        const authToken = yield select(selectAuthToken);
        yield Axios({
            method: 'post',
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            url: '/users/signout'
        });   
        yield localStorage.removeItem('uid');
        yield localStorage.removeItem('token');
        yield put(signOutSuccess());  
    } catch (err) {
        yield put(signOutFailure());
    }
};

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.START_SIGNOUT, signOut)
}

export function* authSagas() {
    yield all([
            call(onSignUpStart),
            call(onSignInStart),
            call(onSignOutStart),
            call(checkUserSession)
        ]);
}