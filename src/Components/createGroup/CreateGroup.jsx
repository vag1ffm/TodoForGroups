import React from 'react';
import { Container } from 'react-bootstrap';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import {CreateTodoGroupAxios} from "../../store/reducer/todo/axios";


const CreateGroup = () => {

    const schema = yup.object().shape({
        group_title: yup.string().required('Group name is required'),
        group_description: yup.string().required('Description name is required'),
        group_password: yup.string()
    })

    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(CreateTodoGroupAxios(data))
    }

    return (
        <Container>
            <h1 className={'mt-3'}>Create a group</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={'col-9'}>
                <div className="form-group">
                    <label>Group password</label>
                    <input type="text" className="form-control" {...register('group_title')} />
                    {errors.group_title && <p>{errors.group_title.message}</p>}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" {...register('group_description')} />
                    {errors.group_description && <p>{errors.group_description.message}</p>}
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input type="password" className="form-control" {...register('group_password')} />
                    {errors.group_password && <p>{errors.group_password.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary mt-2" /*disabled={isLoading}*/>
                    {/*{isLoading ? (*/}
                    {/*    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>*/}
                    {/*) : (*/}
                    Join
                    {/*)}*/}
                </button>
            </form>
        </Container>
    );
};

export default CreateGroup;
