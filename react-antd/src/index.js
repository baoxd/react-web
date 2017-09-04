import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import './style/lib/animate.css';
import { Provider } from 'react-redux'
import CRouter from './routes'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'


const store = createStore(reducer); 
console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<CRouter />
	</Provider>,
	document.getElementById('root')
)
