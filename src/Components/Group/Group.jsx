import React, {useEffect} from 'react';
import { Col, Container, Form} from 'react-bootstrap';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
    AddTodosAxios,
    ChangeTodosAxios,
    DeleteTodosAxios,
    GetTodoMembersAxios,
    GetTodosAxios
} from "../../store/reducer/todo/axios";
import './Group.css'
const Group = () => {
    const {group_id, group_name} = useParams();
    const {todos, error, members} = useSelector(state => state.todoSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const schema = yup.object().shape({
        todo_title: yup.string()
    })

    const {handleSubmit, register, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        const payload = {
            ...data,
            todo_group_id: group_id,
        }
        dispatch(AddTodosAxios(payload))
        reset()
    }

    useEffect(() => {
        error && navigate('/error')
    }, [error])

    useEffect(() => {
        dispatch(GetTodosAxios(group_id))
        dispatch(GetTodoMembersAxios(group_id))

    }, [])


    const handleTodoCompletion = (todo) => {
        let payload = {
            ...todo,
            todo_is_complete: !todo.todo_is_complete
        }
        dispatch(ChangeTodosAxios({payload, group_id}))
    }


    const todosCopy = todos.slice();

    // Функция сортировки туду
    const sortTodos = (a, b) => {
        if (a.todo_is_complete && !b.todo_is_complete) {
            return 1;
        } else if (!a.todo_is_complete && b.todo_is_complete) {
            return -1;
        } else {
            return a.index - b.index;
        }
    };

    const handleTodoDeletion = (payload) => {
        dispatch(DeleteTodosAxios({payload, group_id}))
    }

    // Применяем сортировку к копии массива todos
    const sortedTodos = todosCopy.sort(sortTodos);



    return (
        <Container>
            <h1 className={'mt-3 d-flex justify-content-between align-items-center'}>
                <span>{group_name}</span>
                <Link to="/" className="btn btn-secondary ">
                    Back
                </Link>
            </h1>

            <div className="row">
                <div className="col-lg-9">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Форма добавления туду */}
                        <div className="form-group">
                            <label>Todo name</label>
                            <input type="text" className="form-control" {...register('todo_title')} />
                            {errors.todo_title && <p>{errors.todo_title.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">
                            Add
                        </button>
                    </form>

                    <ol className="list-group list-group-numbered mt-3">
                        {sortedTodos?.map((todo, index) => {
                            const todoStyle = todo.todo_is_complete ? { background: '#27ff0069' } : {};

                            return (
                                <li key={index} style={todoStyle} className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{todo.todo_title}</div>
                                        {todo.todo_owner_name}
                                    </div>
                                    <div className={'d-flex mt-2 align-items-center'}>
                                        <Form.Check
                                            type="checkbox"
                                            checked={todo.todo_is_complete}
                                            onChange={() => handleTodoCompletion(todo)}
                                        />
                                        <button className="btn btn-danger btn-sm ms-2" onClick={() => handleTodoDeletion(todo.id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>

                <Col lg={3} className="mt-lg-0 mt-3">
                    <h4>Participants</h4>
                    <ul className="list-group">
                        {members?.map((member, index) => (
                            <li key={index} className="list-group-item">
                                {member}
                            </li>
                        ))}
                    </ul>
                </Col>
            </div>
        </Container>
    );
};

export default Group;
