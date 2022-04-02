import { actionTypes } from "../constants/actionTypes";

export const login_user = (user) => ({
    type: actionTypes.LOGIN_USER,
    payload: user
})

export const logout_user = () => ({
    type: actionTypes.LOGOUT_USER
})