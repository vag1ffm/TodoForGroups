import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducer/user/userSlice";
import todoSlice from "./reducer/todo/todoSlice";
import authSlice from "./reducer/Authorization/authSlice";


const rootReducer = combineReducers({
    userSlice,
    todoSlice,
    authSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}