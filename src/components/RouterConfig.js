import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Products } from "./Products";
import { ProductShowCase } from "./ProductShowCase";
import '../App.css'


export const RouterConfig = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Products">Our Products</Link>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/About"><About /></Route>
        <Route exact path="/Products"><Products /></Route>
        <Route path="/Product/:id"><ProductShowCase /></Route>
      </Switch>
    </Router>
  );
};
