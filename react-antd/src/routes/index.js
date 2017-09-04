import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import Page from '../components/Page'
import NotFound from '../components/pages/NotFound'

export default class CRouter extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Page}>
					<IndexRedirect to="/404" />
					<Route path={'404'} component={NotFound}></Route>
				</Route>
			</Router>
		)
	}
}