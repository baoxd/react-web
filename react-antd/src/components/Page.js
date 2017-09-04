import React, { Component } from 'react'

class Page extends Component {
	render() {
		return (
			<div style={{height: '100%'}}>
				{this.props.children}
			</div>
		)	
	}
}

export default Page