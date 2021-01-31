import React, { Component } from "react";
import { render } from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import WithInputParameters from "./components/WithInputParameters";
import Forms from "./components/Forms";
import ConditionalRendering from "./components/ConditionalRendering";
import Lists from "./components/Lists";
import "./style.css";

const routing = (
  <Router>
    <Route exact path="/" component={Lists} />
    <Route path="/wip" component={WithInputParameters} />
    <Route path="/forms" component={Forms} />
    <Route path="/cr" component={ConditionalRendering} />
    <Route path="/lists" component={Lists} />
  </Router>
);

render(routing, document.getElementById("root"));
