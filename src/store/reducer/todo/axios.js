import {createAsyncThunk} from "@reduxjs/toolkit";
import httpClient from "../../../server/httpClient";
import {error, getGroupMembers, getTodoGroups, getTodos, loading} from "./todoSlice";


export const CreateTodoGroupAxios = createAsyncThunk(
    "user/amirSoska",
    (payload, {dispatch, rejectWithValue}) => {
        try {

            let parameters = {
                url: '/api/groups/',
                payload,
            }

            httpClient.generalPost(parameters).then(res => {
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
                url: '/api/groups/',
                payload,
            }
            httpClient.generalGet(parameters).then(res => {
                dispatch(getTodoGroups(res.data))
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
                url: `/api/todos/?group_id=${payload}`,
            }

            httpClient.generalGet(parameters).then(res => {
                if (res.data !== undefined) {
                    dispatch(getTodos(res.data))
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
    (payload, {dispatch, rejectWithValue}) => {
        try {
            let parameters = {
                url: `/api/todos/`,
                payload
            }

            httpClient.generalPost(parameters).then(res => {

                dispatch(GetTodosAxios(payload.todo_group_id))
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
                url: `/api/todos/${payload.id}/`,
                payload
            }

            httpClient.generalPut(parameters).then(res => {
                dispatch(GetTodosAxios(group_id))
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
                url: `/api/todos/${payload}/`,
            }

            httpClient.generalDelete(parameters).then(res => {
                dispatch(GetTodosAxios(group_id))
                // dispatch(getTodos(res.data.todos))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);
export const GetTodoMembersAxios = createAsyncThunk(
    "user/loginSlice",
    (group_id, {dispatch, rejectWithValue}) => {
        try {

            let parameters = {
                url: `/api/groups-member/?group_id=${group_id}`,
            }

            httpClient.generalGet(parameters).then(res => {
                dispatch(getGroupMembers(res.data.group_members))
            })
        } catch (e) {
            console.log(rejectWithValue)
        }
    }
);

