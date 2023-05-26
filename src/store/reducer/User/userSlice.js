import {createSlice} from "@reduxjs/toolkit";



let initialState = {
    user: {},
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserData(state, action) {
            state.user = action.payload
        },
    }
})

export default userSlice.reducer