import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {checkAuth} from "../../server/checkAuth";
import {useDispatch, useSelector} from "react-redux";
import {GetUserDataAxios} from "../../store/reducer/user/axios";
import Header from "../header";
import {GetTodoGroupsAxios} from "../../store/reducer/todo/axios";

const PrivateRoute = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {status} = useSelector(state => state.authSlice)

    let isAuth = checkAuth(dispatch)

    console.log(isAuth)

    useEffect(() => {
        console.log('isAuth', isAuth)
        if (!isAuth) {
            return navigate('/welcome')
        } else {
            dispatch(GetUserDataAxios())
            dispatch(GetTodoGroupsAxios())
        }


    }, [status])

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default PrivateRoute;
