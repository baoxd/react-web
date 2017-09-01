import React, { Component } from 'react'
import {Tabs} from 'antd'
import Salary from './components/salary'
import House from './components/house'
import './index.less'

const TabPane = Tabs.TabPane

class Tools extends Component {
	render(){
		return (
			<div>
				<Tabs defaultActiveKey="1">
					<TabPane tab="工资帽" key="1"><Salary /></TabPane>
					<TabPane tab="房租" key="2"><House /></TabPane>
					<TabPane tab="tab3" key="3">tab3</TabPane>
					<TabPane tab="tab4" key="4">tab4</TabPane>
				</Tabs>
			</div>
		)
	}
}

export default Tools

