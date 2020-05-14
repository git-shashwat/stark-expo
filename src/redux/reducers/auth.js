const INITIAL_STATE = {
    _id: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case 'SIGNIN': 
            return {
                ...state,
                uid: action._id
            }

        case 'SIGNOUT':
            return {
                ...state,
                uid: null,
                profile: null
            }

        default:
            return state;
    }
};