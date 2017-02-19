import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './Components/Layout.jsx';
import Home from './Scenes/Home/Home.jsx';
ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path='/' component={Layout}>
	    	<IndexRoute component={Home} />
	    </Route>
  	</Router>,
	document.querySelector('[app-root]')
);
