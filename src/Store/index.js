import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import Menus from '../Store/Menus/Menus.reducer';


let middleware = applyMiddleware(thunk, logger);
let rootReducer = combineReducers({ Menus });
const store = createStore(rootReducer, compose(middleware));
export default store;

