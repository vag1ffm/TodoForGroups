import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./reducer/user/userSlice";


const rootReducer = combineReducers({
    userSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}