import { AUTH_START_LOAD, AUTH_ERROR, USER_SIGN_IN, LOGOUT, REGISTER_USER } from "../actions/authActions";


const initialState = {
    user:{},
    authLoading: false,
    error: ""
}

const AuthReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case AUTH_START_LOAD:
            return { ...state, authLoading: true, error: "" }
        case AUTH_ERROR:
            return { ...state, authLoading: false, error: payload.errorMessage }
        case USER_SIGN_IN:
            return {
                ...state,
                authLoading: false,
                user:payload.user
            }
        case REGISTER_USER:
            return {
                ...state,
                authLoading: false,
                user:payload.user
            }
        case LOGOUT:
            return {
                ...state,
                user:{}
            }
        default:
            return state;
    }
}

export default AuthReducer;
