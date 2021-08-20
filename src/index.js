import React from 'react';
import ReactDOM from 'react-dom';
import './utils/DateUtils.js'
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// window.serverUrl = "http://10.160.200.132:8005"
window.serverUrl = 'http://127.0.0.1:8000'


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
