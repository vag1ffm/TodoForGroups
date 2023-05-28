import React, {useEffect} from 'react';
import {checkAuth} from "../../server/checkAuth";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = () => {
    let { authToken } = useSelector(state => state.userSlice)
    console.log(authToken)
    let isAuth = checkAuth()
    const history = useNavigate()

    useEffect(()=> {
        if (!isAuth) {
            history('/welcome')
        }
    }, [isAuth])


    return (
        <>

        </>
    );
};

export default PrivateRoute;
