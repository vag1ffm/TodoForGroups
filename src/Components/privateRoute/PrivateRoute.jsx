import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {checkAuth} from "../../server/checkAuth";
import {useDispatch} from "react-redux";
import {GetUserDataAxios} from "../../store/reducer/user/axios";
import Header from "../header";
import {statusReset} from "../../store/reducer/user/userSlice";
import {GetTodoGroupsAxios} from "../../store/reducer/todo/axios";

const PrivateRoute = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()



    let isAuthorizated = checkAuth(dispatch)


    useEffect(() => {
        if (!isAuthorizated) {
            console.log('isAuthorizated', isAuthorizated)
            return navigate('/welcome')
        }

        dispatch(GetUserDataAxios())
        dispatch(GetTodoGroupsAxios())
    }, [isAuthorizated])



    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default PrivateRoute;
