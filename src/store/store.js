import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducer/user/userSlice";
import todoSlice from "./reducer/todo/todoSlice";


const rootReducer = combineReducers({
    userSlice,
    todoSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}