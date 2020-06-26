import { combineReducers } from 'redux';
import reducer from './reducer';
// import localeReducer from './localeReducer';

export default combineReducers({
    data: reducer,
});