import { createSlice} from "@reduxjs/toolkit";
import {LoginAxios, loginSlice} from "./axios";

const initialState = {
    user: [],
    isLoading: false,
    error: '',
    authToken: '',
    status: 0,

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getAuthToken(state, {payload}){
            state.authToken = payload
            console.log(payload)
        },
        loading(state) {
            state.isLoading = true
        },
        error(state) {
            state.isLoading = false
            state.error = 'Ошибка'
        },
    },

    extraReducers: (reducerChanger) => {
        reducerChanger.addCase(LoginAxios.pending, (state) => {
            state.status = 0;
        });
        reducerChanger.addCase(LoginAxios.fulfilled, (state) => {
            state.status = 1;
        });
        reducerChanger.addCase(LoginAxios.rejected, (state) => {
            state.status = 0;
        });
    }
})


export const {
    getAuthToken
} = userSlice.actions
export default userSlice.reducer;