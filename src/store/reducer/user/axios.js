import {createAsyncThunk} from "@reduxjs/toolkit";
import httpClient from "../../../server/httpClient";
import {getUserData} from "./userSlice";


export const GetUserDataAxios = createAsyncThunk(
    "user/GetUserData",
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
    "user/JoinToGroup",
    (payload, {dispatch, rejectWithValue}) => {
        try {
            let parameters = {
                url: '/api/groups-member/',
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

