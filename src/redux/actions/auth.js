import Axios from 'axios';

import { userActionTypes } from '../types/auth';

// SIGNIN
export const signin = (_id) => ({
    type: userActionTypes.SIGNIN,
    _id
});

export const startUserSignin = (email, password) => {
    return (dispatch, getState) => {
        Axios({
            method: 'post',
            url: 'http://localhost:3001/users/signin',
            data: {
                email,
                password
            }
        }).then(({ data }) => {
            dispatch(signin(data.user._id));
            localStorage.setItem('uid', data.user._id);
            localStorage.setItem('token', data.token);
        }).catch(err => {
            console.log(err);
        }) 
    }
};

//SIGNUP
export const startUserSignup = (creds) => {
    return (dispatch, getState) => {
        Axios({
            method: 'post',
            url: 'http://localhost:3001/users/signup',
            data: creds
        })
        .then(({ data }) => {
            dispatch(signin(data.user._id));
            localStorage.setItem('uid', data.user._id);
            localStorage.setItem('token', data.token);
        }).catch(err => console.log(err));
    }
}

//SIGNOUT
export const signOut = () => ({
    type: userActionTypes.SIGNOUT
});

export const startUserSignOut = () => {
    return (dispatch, getState) => {
        Axios({
            method: 'post',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            url: 'http://localhost:3001/users/signout'
        })
        .then(() => {
            localStorage.removeItem('uid');
            localStorage.removeItem('token');
            dispatch(signOut());
        })
        .catch(err => console.log(err));
    }
};