import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

import './style.css';

const rootReducer = combineReducers({
	form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers()
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
