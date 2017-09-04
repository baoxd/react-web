import * as type from '../actions/type'

const initState = {
	isFetching: true,
	data: {}
}

const userInfo = (state = initState, action) => {
	switch(action.type) {
		case type.REQUEST_DATA: 
			return { ...state , isFetching: true }
		case type.RECEIVE_DATA:
			return { ...state , isFetching: false, data:action.data}
		default:
			return { ...state }
	}
}

export default userInfo