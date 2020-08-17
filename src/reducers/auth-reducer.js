import { ActionTypes } from '../actions/index';

const initialState = {
    authenticated: false,
    username: '',
};

// AUTH_USER: authenticated: true
// DEAUTH_USER: authenticated: false
// AUTH_ERROR: authenticated: false
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_USER:
            return { ...state, authenticated: true, username: action.payload };
        case ActionTypes.DEAUTH_USER:
            return { ...state, authenticated: false, username: '' };
        case ActionTypes.AUTH_ERROR:
            return { ...state, authenticated: false };
        default:
            return state;
    }
};

export default AuthReducer;
