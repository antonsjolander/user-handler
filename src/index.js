import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {  init } from '@rematch/core';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { routerReducer } from 'react-router-redux';
import logger from 'redux-logger';
import models from './models';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = init({
    models, 
    redux: {
        reducers: {
            router: routerReducer
        },
        middlewares: [logger]
    }
})



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>           
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
