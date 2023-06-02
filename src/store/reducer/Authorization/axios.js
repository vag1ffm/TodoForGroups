import {createAsyncThunk} from "@reduxjs/toolkit";
import httpClient from "../../../server/httpClient";
import {logoutUser} from "../user/userSlice";
import {logoutAuth} from "./authSlice";

export const LoginAxios = createAsyncThunk(
    "auth/loginSlice",
    async (payload, {dispatch, rejectWithValue}) => {
        try {
            let parameters = {
                url: '/api/auth/token/login/',
                payload,
            }
            let res = await httpClient.post(parameters)
            localStorage.setItem('authToken', res.data.auth_token)

        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const RegisterationAxios = createAsyncThunk(
    "auth/Registration",
    (payload, {dispatch, rejectWithValue}) => {
        try {

            let parameters = {
                url: '/api/auth/users/',
                payload,
            }
            httpClient.post(parameters).then(res => {
                dispatch(LoginAxios(payload))

            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);
export const LogoutAxios = createAsyncThunk(
    "auth/Logout",
    async (payload, {dispatch, rejectWithValue}) => {
        try {
            let parameters = {
                url: '/api/auth/token/logout/',
            }
            await httpClient.LogoutPost(parameters).then(() => {
                localStorage.removeItem('authToken')
                // dispatch(statusReset())
                dispatch(logoutUser())
                dispatch(logoutAuth())

            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);