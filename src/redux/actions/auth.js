import Axios from 'axios';

import { userActionTypes } from '../types/auth';

// SIGNIN

export const startSignIn = ({ email, password }) => {
    return ({
        type: userActionTypes.START_SIGNIN,
        payload: {
            email,
            password
        }
    })
};

export const signInSuccess = ({ uid, token }) => ({
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: {
        uid,
        token
    }
});

export const signInFailure = error => ({
    type: userActionTypes.SIGNIN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})

//SIGNUP
export const startSignUp = ({ email, password, displayName }) => {
    return ({
        type: userActionTypes.START_SIGNUP,
        payload: {
            email,
            password,
            displayName
        }
    })
};

export const signUpFailure = error => ({
    type: userActionTypes.SIGNUP_FAILURE,
    payload: error
});

//SIGNOUT

export const startSignOut = () => ({
    type: userActionTypes.START_SIGNOUT
});

export const signOutSuccess = () => ({
    type: userActionTypes.SIGNOUT_SUCCESS
});

export const signOutFailure = () => ({
    type: userActionTypes.SIGNOUT_FAILURE
});