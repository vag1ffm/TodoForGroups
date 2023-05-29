import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    groups: [],
    isLoading: false,
    error: '',
    status: 0,

}

export const todoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getTodoGroups(state, {payload}){
            state.isLoading = false
            state.groups = payload
        },

        loading(state) {
            state.isLoading = true
        },
        error(state) {
            state.isLoading = false
            state.error = 'Ошибка'
        },
    },

    // extraReducers: (reducerChanger) => {
    //     reducerChanger.addCase(LoginAxios.pending, (state) => {
    //         state.status = 0;
    //     });
    //     reducerChanger.addCase(LoginAxios.fulfilled, (state) => {
    //             state.status = 1;
    //     });
    //     reducerChanger.addCase(LoginAxios.rejected, (state) => {
    //         state.status = 0;
    //     });
    // }
})


export const {

    loading,
    error
} = todoSlice.actions
export default todoSlice.reducer;