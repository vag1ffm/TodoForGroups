import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserData(state, {payload}) {
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

        logoutUser: () => initialState,
    },

})


export const {
    getUserData,
    error,
    logoutUser
} = userSlice.actions
export default userSlice.reducer;