import { combineReducers } from 'redux';
import userReducer from './User/User.reducer';

export default combineReducers({
  user: userReducer,
});
