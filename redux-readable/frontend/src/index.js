import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reducer from './reducers';
import { routerReducer } from 'react-router-redux'
 import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
 reducer,
 composeEnhancers(
   applyMiddleware(thunk)
 )
)


ReactDOM.render(
    <Provider store={store}>
      <Router>
            <App/>
      </Router>
    </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
