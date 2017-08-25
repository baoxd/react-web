import React, { Component } from 'react'
import { Layout } from 'antd'
import './index.less'

const { Footer } = Layout

class Bottom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			timer: 0
		}
	}

	tick = () => {
		this.setState({
			timer: this.state.timer + 1
		})
	}

	componentDidMount() {
		this.interval = setInterval(this.tick, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render(){
		return (
			<Footer className="bottom animated bounceInLeft">
				<div className="text">
					<div>
						<span className="me">© 2017 baoxd</span>
                        <span className="stay">您已在小窝里逗留了 <span className="time">{this.state.timer}</span> 秒</span>
                    </div>
				</div>
			</Footer>
		)
	}
}
	
export default Bottom