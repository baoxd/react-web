import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Home from './containers/home';
import Login from './pages/login';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

const routes = (
	<HashRouter history={customHistory} >
		<div>
			<Route path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Redirect from='*' to='/login' />
		</div>
	</HashRouter>
)

export default routes;