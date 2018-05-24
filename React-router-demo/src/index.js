import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './router/MainRouter';

ReactDOM.render((
    <MainRouter />
), document.getElementById('root'));
registerServiceWorker();
