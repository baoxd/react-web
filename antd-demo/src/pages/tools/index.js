import React, { Component } from 'react'
import {Tabs} from 'antd'
import './index.less'

const TabPane = Tabs.TabPane

class Tools extends Component {
	render(){
		return (
			<div>
				<Tabs defaultActiveKey="1">
					<TabPane tab="tab1" key="1">tab1</TabPane>
				</Tabs>
			</div>
		)
	}
}

export default Tools

