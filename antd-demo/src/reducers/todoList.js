import { handleActions } from 'redux-actions';

const todoListInit = [{
	id: -3,
	text: 'coding',
	completed: false
}, {
	id: -2,
	text: '打篮球',
	completed: false
}, {
	id: -1,
	text: 'reading',
	completed: true
}];

const todo = (state, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if(state.id !== action.id){
				return state;
			}
			return Object.assign({}, state, {
				completed: !completed
			});
		default:
			return state;
	}
}

export const todoList = handleActions({
	'ADD_TODO'(state, action) {
		return [
			...state,
			todo(undefined, action.payload)
		]
	},
	'TOGGLE_TODO'(state, action) {
		return state.map(t => todo(t, action.payload))
	},
	'DEL_TODO'(state, action) {
		return state.filter(t => t.id !== action.payload.id)
	}
}, todoListInit)

const setVisibilityInit = {
	filter: 'SHOW_ALL',
}

export const setVisibility = handleActions({
	'SET_VISIBILITY'(state, action) {
		return { ...state, ...action.payload }
	}
}, setVisibilityInit)