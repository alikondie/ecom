import { combineReducers } from 'redux';
import cartReducer from './Cart/Cart.reducer';
import userReducer from './User/User.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
