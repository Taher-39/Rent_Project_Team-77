import { combineReducers, createStore } from "redux";
import dataReducer from './Reducers/dataReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const combineReducer = combineReducers({
    data: dataReducer
})

export const store = createStore(combineReducer, composeWithDevTools())