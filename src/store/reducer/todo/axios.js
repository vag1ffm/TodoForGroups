import {createAsyncThunk} from "@reduxjs/toolkit";
import httpClient from "../../../server/httpClient";
import { loading} from "./todoSlice";


export const CreateTodoGroupAxios = createAsyncThunk(
    "user/loginSlice",
    (payload, {dispatch, rejectWithValue}) => {
        try {
            dispatch(loading())

            let parameters = {
                url: '/api/group/',
                payload,
            }

            httpClient.generelPost(parameters).then(res => {
                console.log(res)
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const GetTodoGroupsAxios = createAsyncThunk(
    "user/loginSlice",
    (payload, {dispatch, rejectWithValue}) => {
        try {
            dispatch(loading())

            let parameters = {
                url: '/api/group/',
                payload,
            }
            httpClient.generelGet(parameters).then(res => {
                console.log(res)
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

