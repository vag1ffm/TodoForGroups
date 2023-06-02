import {authStatus} from "../store/reducer/user/userSlice";
import {haveAuthorizated} from "../store/reducer/Authorization/authSlice";

export const checkAuth = (dispatch) => {

    const authToken = localStorage.getItem('authToken');
    !!authToken===true && dispatch(haveAuthorizated())
    return !!authToken; // Возвращает true, если токен существует, иначе false
};
