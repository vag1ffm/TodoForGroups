import React, {useRef} from 'react';
import {
    Route,
    Routes,
    useLocation,
    Navigate
} from 'react-router-dom';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import Home from './components/home';
import GroupList from './components/groupList';
import FindGroup from './components/findGroup';
import CreateGroup from './components/createGroup';
import Login from './components/login';
import Registration from './components/registration';
import NotFound from './components/notFound';
import PrivateRoute from './components/privateRoute';
import './App.css';
import Header from "./components/header";
import {routes} from "./urls/urls";
import {checkAuth} from "./server/checkAuth";
import Landing from "./components/landing/Landing";


const App = () => {
    const location = useLocation();
    const nodeRef = useRef(null);
    const isAuthenticated = checkAuth();


    return (
        <>
            <div ref={nodeRef} className="page">
                <Routes location={location}>
                    <Route path={routes.home} element={<Landing/>}/>
                </Routes>
            </div>
        </>
    );
};

export default App;
