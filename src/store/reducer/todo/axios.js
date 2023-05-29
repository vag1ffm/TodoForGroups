import {createAsyncThunk} from "@reduxjs/toolkit";
import httpClient from "../../../server/httpClient";
import {getTodoGroups, getTodos, loading} from "./todoSlice";


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
                dispatch(getTodoGroups({
                    others: res.data.groups[0],
                    mine: res.data.groups[1],
                }))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const GetTodosAxios = createAsyncThunk(
    "user/loginSlice",
    (payload, {dispatch, rejectWithValue}) => {
        try {
            dispatch(loading())
            let parameters = {
                url: `/api/todo/${payload}`,
            }
            httpClient.generelGet(parameters).then(res => {
                console.log(res.data.todos)
                dispatch(getTodos(res.data.todos))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const AddTodosAxios = createAsyncThunk(
    "user/loginSlice",
    ({id, payload}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(loading())
            let parameters = {
                url: `/api/todo/${id}/`,
                payload
            }
            console.log(payload)

            httpClient.generelPost(parameters).then(res => {
                console.log(res)
                dispatch(GetTodosAxios(id))
                // dispatch(getTodos(res.data.todos))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const ChangeTodosAxios = createAsyncThunk(
    "user/loginSlice",
    ({payload, id}, {dispatch, rejectWithValue}) => {
        try {

            let parameters = {
                url: `/api/todo/${payload.id}/`,
                payload
            }
            console.log(payload)

            httpClient.generelPut(parameters).then(res => {
                console.log(res)
                dispatch(GetTodosAxios(id))
                // dispatch(getTodos(res.data.todos))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);
