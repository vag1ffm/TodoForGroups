import React from 'react';
import './App.css';
import {checkAuth} from "./server/checkAuth";
import RoutesComp from "./components/route";


const App = () => {
    let isAuthenticated = checkAuth()

    return (
        <>
          <RoutesComp/>
        </>
    );
};

export default App;
