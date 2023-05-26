import axios from "axios";
import {HEADER} from "../../../Components/const/Const";
import {GetUserDataAxios} from "../User/axios";

export const LoginAxios = (data, history) => async (dispatch) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8000/auth/token/login/`,
            data
        )
        localStorage.setItem('app_token', response.data.auth_token)
        console.log('токен записан')
        history('/')
        dispatch(GetUserDataAxios())

    } catch (e) {
        console.log(e)
    }
}


export const RegistrationAxios = (data, history) => async (dispatch) => {
    try {
        console.log(88)
        const response = await axios.post(`http://127.0.0.1:8000/api/auth/users/`,
            data
        )
        console.log(response)
        dispatch(LoginAxios(data, history))

        history('/')

    } catch (e) {
        console.log(e)
    }
}

export const LogoutAxios = () => () => {
    try {
        axios.post(`http://127.0.0.1:8000/auth/token/logout/`,{},
            HEADER())
        localStorage.removeItem('app_token')
    } catch (e) {
        console.log(e)
    }
};

