import { createSlice} from "@reduxjs/toolkit";
import {LoginAxios} from "./axios";

const initialState = {
    isLoading: false,
    error: '',
    status: 0,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        haveAuthorizated(state) {
            state.status = 1
        },
        logoutAuth: () => initialState,

    },
    extraReducers: (reducerChanger) => {
        reducerChanger.addCase(LoginAxios.pending, (state) => {
            state.status = 0;
            state.isLoading= true;
        });
        reducerChanger.addCase(LoginAxios.fulfilled, (state) => {
            state.status = 1;
            state.isLoading= false;
        });
        reducerChanger.addCase(LoginAxios.rejected, (state) => {
            state.status = 0;
        });
    }

})


export const {
    logoutAuth,
    haveAuthorizated
} = authSlice.actions
export default authSlice.reducer;