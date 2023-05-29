import { createSlice} from "@reduxjs/toolkit";
import {LoginAxios} from "./axios";

const initialState = {
    user: {},
    isLoading: false,
    error: '',
    status: 0,

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserData(state, {payload}){
            state.isLoading = false

            state.user = payload
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
    getUserData,
    loading,
    error
} = userSlice.actions
export default userSlice.reducer;