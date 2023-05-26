import React, {useEffect, useRef} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from './Components/Header';
import TodoList from './Components/Pages/Todolist';
import Join from './Components/Pages/Join';
import Login from './Components/Pages/Registrate/login';
import Home from './Components/Pages/home/Home';
import Create from './Components/Pages/Create';
import Registration from './Components/Pages/Registrate/Registrate';
import './App.css';
import {useDispatch} from "react-redux";
import {GetUserDataAxios} from "./store/reducer/User/axios";

const App = () => {
    const location = useLocation();
    const nodeRef = useRef(null);
    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(()=> {
        if (localStorage.getItem('app_token')) {
            dispatch(GetUserDataAxios());
        } else {

        }
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={location.key}
                        nodeRef={nodeRef}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                    >
                        {(state) => (
                            <div ref={nodeRef} className="page">
                                <Routes location={location}>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/create" element={<Create />} />
                                    <Route path="/join" element={<Join />} />
                                    <Route path="/register" element={<Registration />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/group/:group_id" element={<TodoList />} />
                                </Routes>
                            </div>
                        )}
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </>
    );
};

export default App;
