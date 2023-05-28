import React, {useEffect} from 'react';
import {checkAuth} from "../../server/checkAuth";
import {useNavigate} from "react-router-dom";

const PrivateRoute = () => {
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
