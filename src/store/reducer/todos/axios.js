import axios from "axios";
import {HEADER, URL} from "../../../Components/const/Const";
import TodoSlice, {
    AddTodoInGroup,
    DeleteMyTodoGroups,
    GetMyTodoGroups,
    GetOthersTodoGroups,
    showTodoItemsFromGroup
} from "./todoSlice";

export const CreateTodoGroupAxios = (data) => (dispatch) => {
    let response = axios.post(`${URL}/api/group/`,
        data, HEADER())
        .then(res=> console.log(res))

};

export const GetTodoGroupAxios = () => (dispatch) => {
    axios.get(`${URL}/api/group/`,
        HEADER()).then(res=> {
            console.log(res)
        dispatch(GetMyTodoGroups(res.data.groups[1]))
        dispatch(GetMyTodoGroups(res.data.groups[2]))
        // dispatch(GetOthersTodoGroups(res.data.groups[2]))
    })
};

export const DeleteTodoGroupAxios = (id) => (dispatch) => {
    axios.delete(`${URL}/api/group/${id}`,
        HEADER()).then(res=> {
        console.log(res)
        // dispatch()
        dispatch(DeleteMyTodoGroups(id))

    })
};
export const GetTodoItemsFromGroupAxios = (id) => (dispatch) => {
    let response = axios.get(`${URL}/api/todo/${id}/`,
        HEADER()).then(res=> {
        dispatch(showTodoItemsFromGroup(res.data.todos))
    })
};

export const AddTodoInGroupAxios = (data, group_id) => (dispatch) => {
    let response = axios.post(`${URL}/api/todo/${group_id}/`,
        data, HEADER()).then(()=> {
        dispatch(GetTodoItemsFromGroupAxios(group_id));
    });
};

// export const getTodos = (id) => dispatch => {
//     axios.get(`${url}api/todo/${id}`, {
//         headers: {
//             Authorization : `Token ${localStorage.getItem('token')}`
//         }
//     })
//         .then(result => {
//             dispatch({
//                 type: GET_TODO_LIST,
//                 payload: result.data.todos
//             });
//         }).catch(error => console.log(error));
// };