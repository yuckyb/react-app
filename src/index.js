import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Root from './router/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
    <Root />
</BrowserRouter>, 
document.getElementById('root'));
serviceWorker.unregister();

 
