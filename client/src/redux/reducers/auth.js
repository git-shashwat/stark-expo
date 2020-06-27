import { userActionTypes } from "../types/auth";

const INITIAL_STATE = {
    uid: null,
    token: null,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case userActionTypes.SIGNIN_SUCCESS: 
            return {
                ...state,
                uid: action.payload.uid,
                token: action.payload.token, 
                error: null
            }

        case userActionTypes.SIGNOUT_SUCCESS:
            return {
                ...state,
                uid: null,
                token: null,
                error: null
              };

        case userActionTypes.SIGNUP_FAILURE:
        case userActionTypes.SIGNIN_FAILURE:
        case userActionTypes.SIGNOUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
};