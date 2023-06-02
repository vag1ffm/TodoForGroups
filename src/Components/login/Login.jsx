import React, {useEffect} from 'react';
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {Modal} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {LoginAxios} from "../../store/reducer/Authorization/axios";

const Login = () => {

    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    });

    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const {isLoading, status} = useSelector(state => state.authSlice)



    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        status === 1 && navigate('/')
    }, [status])


    const onSubmit = (data) => {
        dispatch(LoginAxios(data))
        // Здесь можно выполнить логику отправки данных на сервер или другие действия
    };


    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" {...register('username')} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label>Password</label>
                        <input type="password" className="form-control" {...register('password')} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>
                        {isLoading ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                            'Log In'
                        )}
                    </button>
                </form>
            </Modal.Body>

        </>
    );
};

export default Login;