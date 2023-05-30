import {createAsyncThunk} from "@reduxjs/toolkit";
import httpClient from "../../../server/httpClient";
import {error, getTodoGroups, getTodos, loading} from "./todoSlice";


export const CreateTodoGroupAxios = createAsyncThunk(
    "user/loginSlice",
    (payload, {dispatch, rejectWithValue}) => {
        try {

            let parameters = {
                url: '/api/group/',
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

export const GetTodoGroupsAxios = createAsyncThunk(
    "user/loginSlice",
    (payload, {dispatch, rejectWithValue}) => {
        try {
            let parameters = {
                url: '/api/group/',
                payload,
            }
            httpClient.generalGet(parameters).then(res => {
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
            let parameters = {
                url: `/api/todo/${payload}`,
            }
            httpClient.generalGet(parameters).then(res => {
                if (res.data.todos !== undefined) {
                    console.log(res.data.todos)
                    dispatch(getTodos(res.data.todos))
                } else {
                    dispatch(error())
                }
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const AddTodosAxios = createAsyncThunk(
    "user/loginSlice",
    ({group_id, payload}, {dispatch, rejectWithValue}) => {
        try {
            let parameters = {
                url: `/api/todo/${group_id}/`,
                payload
            }
            console.log(payload)

            httpClient.generalPost(parameters).then(res => {
                console.log(res)
                dispatch(GetTodosAxios(group_id))
                // dispatch(getTodos(res.data.todos))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const ChangeTodosAxios = createAsyncThunk(
    "user/loginSlice",
    ({payload, group_id}, {dispatch, rejectWithValue}) => {
        try {

            let parameters = {
                url: `/api/todo/${payload.id}/`,
                payload
            }
            console.log(parameters)

            httpClient.generalPut(parameters).then(res => {
                console.log(res)
                dispatch(GetTodosAxios(group_id))
                // dispatch(getTodos(res.data.todos))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

export const DeleteTodosAxios = createAsyncThunk(
    "user/loginSlice",
    ({payload, group_id}, {dispatch, rejectWithValue}) => {
        try {

            let parameters = {
                url: `/api/todo/${payload}/`,
            }
            console.log(payload)

            httpClient.generalDelete(parameters).then(res => {
                console.log(res)
                dispatch(GetTodosAxios(group_id))
                // dispatch(getTodos(res.data.todos))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

