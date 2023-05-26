import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AddTodoInGroupAxios, GetTodoItemsFromGroupAxios} from "../../store/reducer/todos/axios";
import TodoContainer from "./TodoContainer";

const Todolist = () => {
    const {group_id} = useParams();
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState('');
    const {MyTodoGroups, todoItems} = useSelector(state => state.todoSlice);

    const titleOfGroup = MyTodoGroups.map(groupName => {
        if (groupName.id === group_id) {
            return groupName.group_title;
        };
    });

    useEffect(()=> {
        dispatch(GetTodoItemsFromGroupAxios(group_id))
    }, []);

    const handlerKeyDown = (e) => {
        if (e.key === 'Enter' && todoName) {
            let data = {
                'title' : todoName
            };
            dispatch(AddTodoInGroupAxios(data, group_id));
        }
    }
    let notComplitedTodoList = []
    let ComplitedTodoList = []

    console.log(todoItems)

    return (
        <div>
            <>
                <h2>Todo List {titleOfGroup}</h2>
                <div>
                    <div className="input-field">
                        <input id={'todos-label'} type="text" value={todoName} onChange={e=> setTodoName(e.target.value)} onKeyDown={handlerKeyDown} />
                        <label htmlFor={'todos-label'}>Todo name</label>

                    </div>
                </div>
                <div>
                    {todoItems.map((item) => {
                        if (item.completed === false) {
                            notComplitedTodoList.push(item)
                        } else {
                            ComplitedTodoList.push(item)
                        }
                    })}

                    <ul className={'do'}>
                        <h3>Do</h3>
                        {notComplitedTodoList.map((item, index) =>  <TodoContainer
                            key={index}
                            item={item}
                        />)}
                    </ul>
                    {/*<ul className={'done'}>*/}
                    {/*    <h3>Done</h3>*/}
                    {/*    {done.map((item, index) => <TodoItem*/}
                    {/*        key={index}*/}
                    {/*        id={item.id}*/}
                    {/*        mainId={id}*/}
                    {/*        person={item['person_name']}*/}
                    {/*        item={item}*/}
                    {/*        index={index}*/}
                    {/*        delTodo={props.delTodo}*/}
                    {/*        doneHandler={props.toggleTodo}*/}
                    {/*        delete={props.deleteTodo}*/}
                    {/*    />)}*/}
                    {/*</ul>*/}
                </div>
            </>
        </div>
    );
};

export default Todolist;