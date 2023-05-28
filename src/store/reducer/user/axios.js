import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import HttpClient from "../../../server/httpClient";
import httpClient from "../../../server/httpClient";
import {getAuthToken} from "./userSlice";


export const LoginAxios = createAsyncThunk(
    "user/loginSlice",
    (payload,  { dispatch, rejectWithValue }) => {
        try {
            let parameters = {
                url: '/auth/token/login/',
                payload,
            }
            httpClient.post(parameters).then(res=> {
                dispatch(getAuthToken(res.data.auth_token))
            })

        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);