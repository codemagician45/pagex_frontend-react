import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './middleWare/PrivateRoute';

import Login from "./page/Login";
import Home from "./page/Home";
import Content from "./page/Content";
import Journals from "./page/Journals";
import Notifications from "./page/Notifications";
import Search from "./page/Search";
import SignUp from "./page/Signup/SignUp";
import TestRedux from './Test/Test.redux';

export default function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router forceRefresh={false}>
        <Switch>
          <Route push exact path="/" component={Login} />
          <Route push exact path="/test" component={TestRedux} />
          <Route push exact path="/signup/" component={SignUp} />
          <PrivateRoute push exact path="/home" component={Home} />
          <PrivateRoute push exact path="/content/:article" component={Content} />
          <PrivateRoute push exact path="/journals/" component={Journals} />
          <PrivateRoute push exact path="/notifications/" component={Notifications} />
          <PrivateRoute push exact path="/search/:data" component={Search} />
          <PrivateRoute push exact path="/search/" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}
