import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../../urls/urls";
import PublicRoute from "../publicRoute";
import Landing from "../pages/landing/Landing";
import PrivateRoute from "../privateRoute";
import Home from "../home";
import NotFound from "../pages/notFound";
import FindGroup from "../findGroup";
import CreateGroup from "../createGroup";
import Group from "../Group";

const RoutesComp = () => {
    return (
        <Routes>
            <Route path={routes.welcome} element={<PublicRoute/>}>
                <Route path="" element={<Landing />} />
            </Route>


            <Route path={routes.home} element={<PrivateRoute />}>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.findGroup} element={<FindGroup />} />
                <Route path={routes.createGroup} element={<CreateGroup />} />
                <Route path={routes.group} element={<Group />} />

            </Route>


            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RoutesComp;