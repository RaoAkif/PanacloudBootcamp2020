import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import Projects from "./Projects";
import { ProjectShowCase } from "./ProjectShowCase";
import '../pages/App.css'


export const RouterConfig = () => {
  return (
    <Router>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/About">About Me</NavLink>
        <NavLink to="/Projects">My Projects</NavLink>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/About"><About /></Route>
        <Route exact path="/Projects"><Projects /></Route>
        <Route path="/Project/:id"><ProjectShowCase /></Route>
      </Switch>
    </Router>
  );
};