import React, {useEffect} from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RegisterationAxios} from "../../store/reducer/Authorization/axios";

const Registration = () => {

    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(RegisterationAxios(data))
    };

    const {status} = useSelector(state => state.userSlice)
    const navigate = useNavigate()
    
    useEffect(()=>{
        status === 1 && navigate('/')
    }, [status])

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Sign up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" {...register('username')} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label>Email</label>
                        <input type="text" className="form-control" {...register('email')} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label>Password</label>
                        <input type="password" className="form-control" {...register('password')} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Sign up</button>
                </form>
            </Modal.Body>
        </>
    );
};

export default Registration;