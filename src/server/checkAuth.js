import {useSelector} from "react-redux";
import {authStatus} from "../store/reducer/user/userSlice";

export const checkAuth = (dispatch) => {

    const authToken= localStorage.getItem('authToken');
    !!authToken && dispatch(authStatus())
    return !!authToken; // Возвращает true, если токен существует, иначе false
};
