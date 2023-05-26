import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {todoSlice} from "../../store/reducer/todos/todoSlice";
import {CreateTodoGroupAxios} from "../../store/reducer/todos/axios";

const Create = () => {
    const [todoName, setTodoName] = useState('')
    const [todoPassword, setTodoPassword] = useState('')
    const dispathc= useDispatch();

    const {CreateTodoSlice} = todoSlice.actions


    function CreacteTodo() {
        let data = {
            "group_title": todoName,
            "group_password" : todoPassword
        };

        dispathc(CreateTodoGroupAxios(data));
    };


    return (
        <div>
            <h2>Create a Todo</h2>
            <form action="" className={'createfrom'}>
                <label htmlFor={'TodoName'}>
                    <h6>Todo name:</h6>
                    <input type="text" id={'tableName'} value={todoName} onChange={(e)=> setTodoName(e.target.value)}/>
                </label>
                <label htmlFor={'TodoPassword'}>
                    <h6>Todo password:</h6>
                    <input type="password" id={'tablePassword'} value={todoPassword} onChange={(e)=> setTodoPassword(e.target.value)}/>
                </label>
            </form>
            <button type={'submit'} onClick={CreacteTodo}>Create</button>
        </div>
    );
};

export default Create;