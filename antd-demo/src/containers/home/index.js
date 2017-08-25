import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import { allMenu } from '../../utils/menu'
import Top from '../top'
import Main from '../main'
import Bottom from '../bottom'
import './index.less'

const SubMenu = Menu.SubMenu
const { Sider } = Layout

class Home extends Component {
	state = {
		theme: 'dark',
		current: 'index',
		collapsed: false,
		mode: 'inline'  // 水平垂直展现
	}
	// 点击菜单
	handleClick = (e, special) => {
		this.setState({
			current: e.key || special
		})
	}
	// 修改主题色
	changeTheme = (value) => {
		this.setState({
			theme: value ? 'dark': 'light'
		})
	}
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
			mode: this.state.collapsed ? 'inline':'vertical'
		})
	}
	clear = () => {
		this.setState({
			current: 'index'
		})
	}

	componentDidMount() {
		this.handleClick({}, 'index')
	}

	render() {
		let theme = this.state.theme,
			githubImg = null,
			author = null;

		if(theme == 'light'){
			githubImg = <a href="https://github.com/baoxd/react-web" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a>
			author = <span className="author">baoxd</span>
		}else{
			githubImg = <a href="https://github.com/baoxd/react-web" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a>
			author = <span className="author white">baoxd</span>
		}

		return (
			<Layout className="containAll">
				<Sider 
					collapsible
					collapsed={this.state.collapsed}
					className="leftMenu">
					{ githubImg } { author }
					<Menu
						theme={this.state.theme}
						onClick={this.handleClick}
						defaultOpenKeys={['']}
						selectedKeys={[this.state.current]}
						className="menu"
						mode={this.state.mode}>
						{
							allMenu.map((subMenu) => {
								if(subMenu.children && subMenu.children.length){
									return (
										<SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
											{
												subMenu.children.map((menu) => {
													return <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
												})									
											}
										</SubMenu>
									)
								}else{
									return (
										<Menu.Item key={subMenu.url}>
											<Link to={`/${subMenu.url}`}>
												<Icon type={subMenu.icon}></Icon><span className="nav-text">{subMenu.name}</span>
											</Link>
										</Menu.Item>
									)
								}
							})
						}
					</Menu>
					<div className="switch">
						<Switch 
							checked={this.state.theme == 'dark'}
							onChange={this.changeTheme}
							checkedChildren="Dark"
							unCheckedChildren="Light" />
					</div>
				</Sider>
				<Layout>
					<Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear}></Top>
					<Main />
					<Bottom />
				</Layout>
			</Layout>
		)
	}

}

export default Home

