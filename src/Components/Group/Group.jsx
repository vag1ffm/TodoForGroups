import React, {useEffect, useState} from 'react';
import {Accordion, Badge, Button, Card, Collapse, Container, Form, ListGroup, Row} from 'react-bootstrap';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {AddTodosAxios, ChangeTodosAxios, GetTodosAxios} from "../../store/reducer/todo/axios";
import styles from "../home/Home.module.css";

const Group = () => {
    const {id} = useParams()

    const schema = yup.object().shape({
        title: yup.string()
    })
    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
        const payload = data
        dispatch(AddTodosAxios({id, payload}))
    }

    const {todos} = useSelector(state => state.todoSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetTodosAxios(id))
    }, [])

    const handleTodoCompletion = (todo) => {
        let payload = {
            ...todo,
            completed: !todo.completed
        }
        dispatch(ChangeTodosAxios({payload, id}))
    }


    const todosCopy = todos.slice();

    // Функция сортировки туду
    const sortTodos = (a, b) => {
        if (a.completed && !b.completed) {
            return 1;
        } else if (!a.completed && b.completed) {
            return -1;
        } else {
            return a.index - b.index;
        }
    };

    // Применяем сортировку к копии массива todos
    const sortedTodos = todosCopy.sort(sortTodos);


    return (
        <Container>
            <h1 className={'mt-3'}>Find a group</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={'col-9'}>
                <div className="form-group ">
                    <label>Todo name</label>
                    <input type="text" className="form-control" {...register('title')} />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>


                <button type="submit" className="btn btn-primary mt-2" /*disabled={isLoading}*/>
                    Add
                </button>
            </form>


            {/*<ol className="list-group list-group-numbered mt-3">*/}
            {/*    {todos?.map((todo, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index} className="list-group-item d-flex justify-content-between align-items-start">*/}
            {/*                <div className="ms-2 me-auto">*/}
            {/*                    <div className="fw-bold">{todo.title}</div>*/}
            {/*                    {todo.person_name}*/}
            {/*                </div>*/}
            {/*                <Form.Check*/}
            {/*                    type="checkbox"*/}
            {/*                    checked={todo.completed}*/}
            {/*                    onChange={() => handleTodoCompletion(todo)}*/}
            {/*                />*/}
            {/*            </li>*/}
            {/*        );*/}
            {/*    })}*/}
            {/*</ol>*/}

            <ol className="list-group list-group-numbered mt-3">
                {sortedTodos?.map((todo, index) => {

                    const todoStyle = todo.completed ? { textDecoration: 'line-through' } : {};

                    return (
                        <li key={index} className={'list-group-item d-flex justify-content-between align-items-start'}>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold" style={todoStyle} >
                                    {todo.title}
                                </div>
                                {todo.person_name}
                            </div>
                            <Form.Check
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleTodoCompletion(todo)}
                            />
                        </li>
                    );
                })}
            </ol>


        </Container>
    );
};

export default Group;
