import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: [],
    todoItems: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserData(state, {payload}){
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

})
export const {

} = userSlice.actions
export default userSlice.reducer;