import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import routes from './routes';
import './index.less';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		{ routes }
	</Provider>,
	document.getElementById('root')
);

