import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from '../reducer'
import deskReducer from "../desk/reducer/deskReducer";
import mobReducer from "../mob/reducer/mobReducer";


const centralReducer = combineReducers({rootReducer,deskReducer,mobReducer});
const store = createStore(centralReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;