import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
    friendsReducer, loginReducer
  });