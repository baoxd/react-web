import React , { Component } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './index.less'
import Index from '../../pages/index'
import Music from '../../pages/music'
import Tools from '../../pages/tools'
import Editor from '../../pages/editor'
import TodoList from '../../pages/todoList'

const { Content } = Layout

class Main extends Component {

	render() {
		return (
			<Content className="content">
				<Route path="/index" component={Index}></Route>
				<Route path="/music" component={Music}></Route>
				<Route path="/tools" component={Tools}></Route>
				<Route path="/editor" component={Editor}></Route>
				<Route path="/todoList" component={TodoList}></Route>
 			</Content>
		)
	}
}

export default Main