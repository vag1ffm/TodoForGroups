import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    groups: [],
    todos: [],
    members: [],
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
            state.error = false
            state.groups = payload
        },
        getTodos(state, {payload}) {
            state.isLoading = false
            state.error = false
            state.todos = payload
        },
        getGroupMembers(state, {payload}) {
            state.isLoading = false
            state.error = false
            state.members = payload
        },


        loading(state) {
            state.isLoading = true
            state.error = false

        },
        error(state) {
            state.isLoading = false
            state.error = true
        },
    },

})


export const {
    getTodoGroups,
    getTodos,
    loading,
    error,
    getGroupMembers
} = todoSlice.actions
export default todoSlice.reducer;