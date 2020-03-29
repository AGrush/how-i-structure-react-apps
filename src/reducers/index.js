import { combineReducers } from 'redux';
import MyReducer from './MyReducer.reducer';
// import AnotherReducer from '../';

export default combineReducers({
    myReducer: MyReducer
    //, anotherReducer: AnotherReducer
});