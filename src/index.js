import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import './reset.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>
    , document.getElementById('root'));


