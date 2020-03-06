import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import reducers from './store/configureStore';
const createHistory = require("history").createBrowserHistory;
const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, promiseMiddleware, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
