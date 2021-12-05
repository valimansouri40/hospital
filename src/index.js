import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createStore , combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import postreducer from './store/reducer/post';
import getreducer from './store/reducer/get';

import thunk from 'redux-thunk';


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    post:postreducer,
    get: getreducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store} >
    <App /> 
    </Provider>
    </BrowserRouter> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
