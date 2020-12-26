import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from "./reducers";

import {
	BrowserRouter as Router,
} from 'react-router-dom'

import storeEnhancer from './functions/storeEnhancer'

import './style.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(storeEnhancer),
);

render(
	<Provider store={store}>
		<Router basename={process.env.PUBLIC_URL}>
				<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
