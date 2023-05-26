import axios from "axios";
import {userSlice} from "./userSlice";
import {HEADER} from "../../../Components/const/Const";

export const GetUserDataAxios = (history) => dispatch => {
    let response = axios.get(`http://127.0.0.1:8000/api/auth/users/me/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem('app_token')}`
        }
    }).then(res => {
        dispatch(userSlice.actions.getUserData(res.data))
    }).catch((e) => {
        dispatch()
    })
};

export const JoinToGroupAxios = (data, history) => (dispatch) => {
    let response = axios.post(`http://127.0.0.1:8000/api/group_member/`,
        data, HEADER())
        .then(res => {
            console.log('we have done')
            history('/')
    }).catch((e) => {
        console.log(e)
    })
};
