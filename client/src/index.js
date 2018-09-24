import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();





ReactDOM.render(<BrowserRouter history={history}><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
