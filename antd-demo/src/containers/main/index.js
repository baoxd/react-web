import React , { Component } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './index.less'
import Index from '../../pages/index'
import Music from '../../pages/music'

const { Content } = Layout

class Main extends Component {

	render() {
		return (
			<Content className="content">
				<Route path="/index" component={Index}></Route>
				<Route path="/music" component={Music}></Route>
			</Content>
		)
	}
}

export default Main