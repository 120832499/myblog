import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route} from 'react-router-dom';
require('./css/index.css');
ReactDOM.render(
		<Router>
			<Route path="/" component={App}/>
		</Router>
	, document.getElementById('root'));
registerServiceWorker();
