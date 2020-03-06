import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import decode from 'jwt-decode';
require('dotenv').config();


const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }

    try {
        // { exp: 12903819203 }
        const { exp } = decode(token);

        if (exp < new Date().getTime() / 1000) {
            return false;
        }

    } catch (e) {
        return false;
    }

    return true;
}

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        checkAuth() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/' }} />
            )
    )} />
)

export default AuthRoute;