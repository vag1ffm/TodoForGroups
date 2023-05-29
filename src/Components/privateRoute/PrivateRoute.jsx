import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {checkAuth} from "../../server/checkAuth";
import {useDispatch} from "react-redux";
import {GetUserDataAxios} from "../../store/reducer/user/axios";
import Header from "../header";

const PrivateRoute = () => {

    const history = useNavigate()
    const dispatch = useDispatch()

    const isAuthorizated = checkAuth()

    useEffect(() => {

        if (!isAuthorizated) {
            return history('/welcome')
        }

        dispatch(GetUserDataAxios())
    }, [isAuthorizated])



    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default PrivateRoute;
