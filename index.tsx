import React, { Component } from "react";
import { render } from "react-dom";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import WithInputParameters from "./components/WithInputParameters";
import Forms from "./components/Forms";
import ConditionalRendering from "./components/ConditionalRendering";
import Lists from "./components/Lists";
import "./style.css";

const routing = (
  <Router>
    <ul className="examples">
      <li>
        <NavLink to="/wip">WithInputParameters</NavLink>
      </li>
      <li>
        <NavLink to="/forms">Forms</NavLink>
      </li>
      <li>
        <NavLink to="/cr">ConditionalRendering</NavLink>
      </li>
      <li>
        <NavLink to="/lists">Lists</NavLink>
      </li>
    </ul>
    <hr />
    <Route path="/" component={Lists} />
    <Route path="/wip" component={WithInputParameters} />
    <Route path="/forms" component={Forms} />
    <Route path="/cr" component={ConditionalRendering} />
    <Route path="/lists" component={Lists} />
  </Router>
);

render(routing, document.getElementById("root"));
