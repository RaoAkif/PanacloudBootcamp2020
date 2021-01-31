import React, {Fragment} from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import {RootState} from "./store/rootReducer"
import {PublicRoute, PrivateRoute} from "./components/Route";
import { BrowserRouter, Routes } from 'react-router-dom';
import Login from "./components/Login"
import Home from './components/Home';
import Signup from './components/Signup';
import Entries from './components/Entries';
import Header from './components/Header';

const App = () => {
  const {authenticated} = useSelector((state : RootState) => state.auth);


  return (
    <Fragment>
      <BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
              <PrivateRoute path="/:id/entries" authenticated={authenticated} component={Entries}></PrivateRoute>
              <PrivateRoute path="/" authenticated={authenticated} component={Home}></PrivateRoute>
              <PublicRoute path="/signup" authenticated={authenticated} component={Signup}></PublicRoute>
              <PublicRoute path="/login" authenticated={authenticated} component={Login}></PublicRoute>
            </Routes>

        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;