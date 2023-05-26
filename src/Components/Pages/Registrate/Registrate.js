import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {RegistrationAxios} from "../../../store/reducer/authentification/axios";
import {useNavigate} from "react-router-dom";

const Registrate = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    let dispatch = useDispatch()
    let history = useNavigate()

    function checkAuth() {
        if (localStorage.getItem('app_token') === null) {

        }
    }

    function Register() {
        let data = {
            "username" : userName ,
            "email" : email,
            "password" : password,
        }
        dispatch(RegistrationAxios(data, history))
    }

    return (
        <div>
            <div>
                <h2>Register to Todo</h2>
                <form className={'createfrom'}>
                    <label htmlFor={'Name'}>
                        <h6>User name:</h6>
                        <input type="text" value={userName} id={'Name'} onChange={(e) => {setUserName(e.target.value)}}/>
                    </label>
                    <label htmlFor={'email'}>
                        <h6>Email:</h6>
                        <input type="email" value={email} id={'email'} onChange={(e) => {setEmail(e.target.value)}}/>
                    </label>
                    <label htmlFor={'Password'}>
                        <h6>Password:</h6>
                        <input type="password" value={password} id={'Password'} onChange={(e) => {setPassword(e.target.value)}}/>
                    </label>
                </form>
                <button onClick={Register}>Register</button>


            </div>
        </div>
    );
};

export default Registrate;