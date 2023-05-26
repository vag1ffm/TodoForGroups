import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducer/User/userSlice";
import todoSlice from "./reducer/todos/todoSlice";


const rootReducer = combineReducers({
    userSlice,
    todoSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}