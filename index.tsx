import React, { Component } from "react";
import { render } from "react-dom";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import WithInputParameters from "./components/WithInputParameters";
import Forms from "./components/Forms";
import ConditionalRendering from "./components/ConditionalRendering";
import Lists from "./components/Lists";
import "./style.css";

const NotFound = () => <h1>Not Found </h1>;

const routing = (
  <Router>
    <ul className="examples">
      <li>
        <NavLink to="/" exact activeStyle={{ color: "red" }}>
          Main
        </NavLink>
      </li>
      <li>
        <NavLink to="/wip" exact activeStyle={{ color: "red" }}>
          WithInputParameters
        </NavLink>
      </li>
      <li>
        <NavLink to="/forms" exact activeStyle={{ color: "red" }}>
          Forms
        </NavLink>
      </li>
      <li>
        <NavLink to="/cr" exact activeStyle={{ color: "red" }}>
          ConditionalRendering
        </NavLink>
      </li>
      <li>
        <NavLink to="/lists" exact activeStyle={{ color: "red" }}>
          Lists
        </NavLink>
      </li>
    </ul>
    <hr />
    {/*<Route exact path="/" component={Lists} />
    <Route path="/wip" component={WithInputParameters} />
    <Route path="/forms" component={Forms} />
    <Route path="/cr" component={ConditionalRendering} />
    <Route path="/lists" component={Lists} />
    <Route component={NotFound} />*/}
    <Switch>
      <Route exact path="/" component={Lists} />
      <Route path="/wip" component={WithInputParameters} />
      <Route path="/forms" component={Forms} />
      <Route path="/cr" component={ConditionalRendering} />
      <Route path="/lists" component={Lists} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

render(routing, document.getElementById("root"));
