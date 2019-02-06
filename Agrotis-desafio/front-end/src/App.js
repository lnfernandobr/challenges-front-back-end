import React from "react";
import "./App.css";
import { Home } from "./home/Home";
import { AddDoc } from "./addDoc/AddDoc";
import { Route, Switch } from "react-router-dom";

const Error = () => <h1>Ops, rota não existe!</h1>;
export const App = () => {
  return (
    <div className="root">
      <div className="nav-logo">
        <img src="./images/agrotis-developers.png" alt="Logo" width="350px" />
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddDoc} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
};
