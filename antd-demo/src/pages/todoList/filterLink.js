import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibility } from '../../actions/todoList'

@connect(
	state => ({
		setVisibility: state.setVisibility
	})
)
export default class FilterLink extends Component{

	onClick = (e) => {
		this.props.dispatch(setVisibility({
			filter: this.props.filter
		}))
	}

	render() {
		const {filter, name} = this.props
		const active = this.props.setVisibility.filter == filter

		return (
			<div className="todo-tab_item">
        		<a style={{ color: active? '#f01414' : '#4d555d' }} onClick={this.onClick}>{name}</a>
      		</div>
		)
	}
}