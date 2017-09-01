import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addTodo,toggleTodo,delTodo } from '../../actions/todoList'
import FilterLink from './filterLink'
import './index.less'

let nextTodoId = 1

@connect(
	(state) => ({
		todoList: state.todoList,
		setVisibility: state.setVisibility
	})
)
class todoList extends Component {

	handleSubmit = (e) => {
		e.preventDefault()
		if(!this.input.value.trim()){
			return;
		}

		this.props.dispatch(addTodo({
			id: nextTodoId++,
			text: this.input.value,
			type: 'ADD_TODO'
		}))
		this.input.value = ''
	}

	render() {
		const { todoList, setVisibility } = this.props
		let todos = todoList

		console.log(todos)

		if(setVisibility.filter == 'SHOW_COMPLETED'){
			todos = todoList.filter(t => t.completed)
		}
		if(setVisibility.filter == 'SHOW_ACTIVE'){
			todos = todoList.filter(t => !t.completed)
		}

		return (
			<div className="todo-box">
				<div className="todo-innerBox">
					<div className="todo-tab">
						<FilterLink filter="SHOW_ALL" name="全部任务"/>
						<FilterLink filter="SHOW_ACTIVE" name="代办任务"/>
						<FilterLink filter="SHOW_COMPLETED" name="已完成任务"/>
					</div>
					<ul className="list-group">
						{
							todos.map(todo => (
	                            <li key={todo.id} className="todo-list_li" style={{textDecoration: todo.completed ? "line-through" : "none"}}>
	                            	<input type="checkbox" className="check-box" checked={todo.completed} onChange={e => this.props.dispatch(toggleTodo({
	                            		id: todo.id,
	                            		type: "TOGGLE_TODO"
	                            	}))}/>
	                            	{todo.text}
	                            	<button className="todo-list_del" onClick={e => this.props.dispatch({
	                            		id: todo.id,
	                            		type:  "DEL_TODO"
	                            	})}>删除</button>
	                            </li>
							))
						}
					</ul>
					<form onSubmit={this.handleSubmit} className="todo-add">
                        <input placeholder="添加todo" ref={r => this.input = r} className="todo-input" />
                        <button type="submit" className="todo-btn">添加任务</button>
					</form>
				</div>
			</div>
		)
	}
}

export default todoList