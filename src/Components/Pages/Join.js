import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {JoinToGroupAxios} from "../../store/reducer/User/axios";
import {useNavigate} from "react-router-dom";

const Join = () => {
    const [groupName, setGroupName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useNavigate()
    const JoinToGroup = () => {
        let data = {
            'group_title' :  groupName,
            'group_password' :  password,
        }
        dispatch(JoinToGroupAxios(data, history))
    }


    return (
        <div>
            <h2>Join to Todo</h2>
            <form action="" className={'createfrom'}>
                <label htmlFor={'TodoName'}>
                    <h6>Todo name:</h6>
                    <input type="text" id={'tableName'} value={groupName} onChange={(e)=> setGroupName(e.target.value)}/>
                </label>
                <label htmlFor={'TodoPassword'}>
                    <h6>Todo password:</h6>
                    <input type="password" id={'tablePassword'} value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </label>
            </form>
            <button onClick={JoinToGroup}>Join</button>
        </div>
    );
};

export default Join;