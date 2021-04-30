import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from '../reducer'


const centralReducer = combineReducers({rootReducer});
const store = createStore(centralReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;