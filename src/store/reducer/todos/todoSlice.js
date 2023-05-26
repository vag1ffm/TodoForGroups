import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    MyTodoGroups: [],
    OthersTodoGroup: [],
    todoItems: [],
    isLoading: false,
    error: '',
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        GetMyTodoGroups(state, action) {
            state.isLoading = false
            state.MyTodoGroups = action.payload
        },
        DeleteMyTodoGroups(state, action) {
            let idDelete = action.payload
            state.MyTodoGroups = state.MyTodoGroups.filter(group => group.id !== idDelete)
        },
        showTodoItemsFromGroup(state, action) {
            state.todoItems = action.payload
        },
        GetOthersTodoGroups(state, action) {
            state.isLoading = false
            state.OthersTodoGroup = action.payload
        },



        CreateTodoSlice(state, action) {
            state.isLoading = false


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
    GetMyTodoGroups,
    GetOthersTodoGroups,
    CreateTodoSlice,
    DeleteMyTodoGroups,
    showTodoItemsFromGroup  ,

} = todoSlice.actions
export default todoSlice.reducer;