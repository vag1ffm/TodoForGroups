import React, {useRef} from 'react';
import Header from "../../header";
import './../../../index.css';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {Route, Routes, useLocation} from "react-router-dom";
import {routes} from "../../../urls/urls";
import Landing from "../landing/Landing";


const Dashboard = () => {

    const location = useLocation();
    const nodeRef = useRef(null);


    return (
        <div>

            <Header/>
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

                                </Routes>
                            </div>
                        )}
                    </CSSTransition>
                </SwitchTransition>
            </div>

        </div>
    );
};

export default Dashboard;