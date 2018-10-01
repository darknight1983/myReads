import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();


ReactDOM.render(<BrowserRouter history={history}><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
