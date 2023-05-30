import {createAsyncThunk} from "@reduxjs/toolkit";
import httpClient from "../../../server/httpClient";
import {getUserData, loading} from "./userSlice";


export const LoginAxios = createAsyncThunk(
    "user/loginSlice",
    (payload, {dispatch, rejectWithValue}) => {
        try {
            dispatch(loading())

            let parameters = {
                url: '/auth/token/login/',
                payload,
            }

            httpClient.post(parameters).then(res => {
                localStorage.setItem('authToken', res.data.auth_token)
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const RegisterationAxios = createAsyncThunk(
    "user/loginSlice",
    (payload, {dispatch, rejectWithValue}) => {
        try {

            let parameters = {
                url: '/api/auth/users/',
                payload,
            }
            httpClient.post(parameters).then(res => {
                LoginAxios(res)
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const GetUserDataAxios = createAsyncThunk(
    "user/loginSlice",
    (payload, {dispatch, rejectWithValue}) => {
        try {
            let parameters = {
                url: '/api/auth/users/me/',
                payload,
            }
            httpClient.generalGet(parameters).then(res => {
                dispatch(getUserData(res.data))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const JoinToGroupAxios = createAsyncThunk(
    "user/loginSlice",
    (payload, {dispatch, rejectWithValue}) => {
        try {
            let parameters = {
                url: '/api/group_member/',
                payload,
            }
            httpClient.generalPost(parameters).then(res => {
                console.log(res)
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);
