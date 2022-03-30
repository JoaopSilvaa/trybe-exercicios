// src/store/index.js
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';
//Store
const store = createStore(reducer,  applyMiddleware(thunk))

export default store;