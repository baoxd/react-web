import React, {Component} from 'react'
import {
	Input,
	Row,
	Col,
	message
} from 'antd'

let handleonce = true

class Salary extends Component {
	constructor(props){
		super(props)
		this.state = {
			// 养老保险
			old:'',
			// 医疗保险
			medical:'',
			// 失业保险
			offwork:'',
			// 住房公积金
			house:'',
			// 税前工资
          	pretax:'',
          	// 个人所得税
          	tax:'',
          	// 税后工资
          	output:''
		}
	}

	handleChange = (e) => {
		let input = e.target.value
		if(handleonce && input > 10000){
			message.success('呦！不错哦，工资上万了')
			handleonce = false
		}
		const old = input * 8 / 100
		const medical = input * 2 / 100
		const offwork = input * 2 / 100
		const house = input * 12 / 100
		const pretax = input - old - medical - offwork - house
		const taxBase = input - 3500
		const tax = taxBase * 10 / 100
		const output = pretax - tax
		this.setState({
			old,
			medical,
			offwork,
			house,
			pretax,
			tax,
			output
		})
	}

	render(){
		return (
			<div style={{marginTop:80}}>
				<Row type="flex" justify="center" className="rowItem">
					<Col span={10}>
						<Input type="number" addonBefore="应发工资：" addonAfter="￥" onChange={this.handleChange} className="rowInput"/>
					</Col>
				</Row>
				<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<Input addonBefore="养老保险：" addonAfter="￥" value={this.state.old} />
	  	  			</Col>
	  	  		</Row>
				<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<Input addonBefore="医疗保险：" addonAfter="￥" value={this.state.medical} />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<Input addonBefore="失业保险：" addonAfter="￥" value={this.state.offwork} />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<Input addonBefore="住房公积：" addonAfter="￥" value={this.state.house} />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<Input addonBefore="税前工资：" addonAfter="￥" value={this.state.pretax} id="red"/>
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<Input addonBefore="个人税收：" addonAfter="￥" value={this.state.tax} />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<Input addonBefore="税后工资：" addonAfter="￥" value={this.state.output} id="blue"/>
	  	  			</Col>
	  	  		</Row>

			</div>
		)
	}
}

export default Salary