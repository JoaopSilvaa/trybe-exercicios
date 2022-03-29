import { combineReducers, createStore } from 'redux';
import listReducer from '../reducers';

const rootReducers = combineReducers({ listReducer})

const store = createStore(rootReducers);

export default store;