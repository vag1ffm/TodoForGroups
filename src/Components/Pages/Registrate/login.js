import React, {useState} from 'react';
import {LoginAxios} from "../../../store/reducer/authentification/axios";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {isLoading} = useSelector(state => state.userSlice);

    // console.log(isLoading)

    let history = useNavigate();
    let dispatch = useDispatch();
    function handleLogin() {
        if (userName && password) {
            let data = {
                "username" : userName,
                "password" : password
            }
            dispatch(LoginAxios(data, history))

        };

    };

    return (
        <div>
            <h2>Autorization to Todo</h2>

            <form className={'createfrom'}>
                <label htmlFor={'Name'}>
                    <h6>User name:</h6>
                    <input type="text" value={userName} id={'Name'} onChange={(e) => {setUserName(e.target.value)}}/>
                </label>
                <label htmlFor={'Password'}>
                    <h6>Password:</h6>
                    <input type="password" value={password} id={'Password'} onChange={(e) => {setPassword(e.target.value)}}/>
                </label>
            </form>

            <button onClick={handleLogin} /*disabled={isLoading}*/>
                {/*{isLoading ? (*/}
                {/*    // <FontAwesomeIcon icon={faSpinner} spin />*/}
                {/*) : (*/}
                {/*    'Log In'*/}
                {/*)}*/}
                Log In
            </button>
        </div>
    );
};

export default Login;