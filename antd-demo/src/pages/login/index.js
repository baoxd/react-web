import React, { Component } from 'react'
import { Form, Input, Button, notification, Icon } from 'antd'
import createHistory from 'history/createHashHistory'

import './index.less'

const history = createHistory()
const FormItem = Form.Item 

class LoginPage extends Component {

	// 表单提交
	handleSubmit = (e) => {
		e.preventDefault()
		let name = this.props.form.getFieldsValue().username
		let password = this.props.form.getFieldsValue().password

		if(name == '123' && password == '123'){
			history.push('/index')
		}else{
			this.openNotificationWithIcon('info')
		}
	}

	// 提示弹框
	openNotificationWithIcon = (type) => {
		notification[type]({
			message: '用户名&密码',
			description: '都是123',
			duration: 6,
			icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
		})
	}

	componentDidMount() {
		this.openNotificationWithIcon('info');
	}

	render() {
		const { getFieldDecorator } = this.props.form

		return (
			<div className="loginpagewrap">
				<div className="box">
					<p>欢迎来到antd-demo</p>
					<div className="loginWrap">
						<Form onSubmit={ this.handleSubmit }>
							<FormItem>
								{
									getFieldDecorator('username', {
										rules: [{required: true, message: '请输入用户名'}]
									})(<Input placeholder="用户名" />)
								}
							</FormItem>
							<FormItem>
								{
									getFieldDecorator('password', {
										rules: [{required: true, message: '请输入密码'}]
									})(<Input type="password" placeholder="Password" />)
								}
							</FormItem>
							<Button type="primary" htmlType="submit" className="loginBtn">登录</Button>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}

let Login = Form.create()(LoginPage)
export default Login