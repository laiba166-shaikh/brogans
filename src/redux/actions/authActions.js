import client from "../client";

export const AUTH_START_LOAD = "AUTH_START_LOAD";
export const USER_SIGN_IN = "USER_SIGN_IN";
export const REGISTER_USER = "REGISTER_USER"
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGOUT = "LOGOUT";

export const createUser = (user, addToast) => async (dispatch) => {
    try {
        const { data } = await client.post(`/user/create`, { ...user });
        dispatch({
            type:REGISTER_USER,
            payload:{user:data.user}
        })

        if (addToast) {
            addToast("User Created", {
                appearance: "success",
                autoDismiss: true
            });
        }
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: { errorMessage: error.response.data.payload.message } })
        console.log(error.response,error.response.data.payload.message)
        if (addToast) {
            addToast("Username or Email Already Taken", {
                appearance: "error",
                autoDismiss: true
            });
        }
    }
}

export const login = (cred, addToast) => async (dispatch) => {
    try {
        const { data } = await client.post(`/user/login`, { ...cred });
        dispatch({
            type:USER_SIGN_IN,
            payload:{user:data.user}
        })

        if (addToast) {
            addToast("User Logged In", {
                appearance: "success",
                autoDismiss: true
            });
        }
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: { errorMessage: error.response.data.payload.message } })
        console.log(error.response,error.response.data.payload.message)
        if (addToast) {
            addToast( error.response.data.payload.message, {
                appearance: "error",
                autoDismiss: true
            });
        }
    }
}
