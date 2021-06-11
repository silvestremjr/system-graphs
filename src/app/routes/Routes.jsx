import { BrowserRouter, Switch, Route } from "react-router-dom";

import React from "react";
import Index from "../pages/Index";
import Users from "../pages/Users";
import Login from "../pages/Login";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/users" component={Users} />
      <PublicRoute exact path="/" component={Index} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
