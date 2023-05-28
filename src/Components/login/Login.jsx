import React from 'react';
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, Button } from 'react-bootstrap';
import HttpClient from "../../server/httpClient";
const Login = () => {

    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    });

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);

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
                    <button type="submit" className="btn btn-primary mt-2">Log In</button>
                </form>
            </Modal.Body>

        </>
    );
};

export default Login;