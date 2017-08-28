import React , { Component } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './index.less'
import Index from '../../pages/index'

const { Content } = Layout

class Main extends Component {

	render() {
		return (
			<Content className="content">
				<Route path="/index" component={Index}></Route>
			</Content>
		)
	}
}

export default Main