import { combineReducers } from 'redux';
import { IRootState, TAction } from '../types';
import cartReducer from './Cart/Cart.reducer';
import userReducer from './User/User.reducer';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './Directory/Directory.reducer';
import shopReducer from './Shop/Shop.reducer';

const persistConfig: PersistConfig<IRootState> = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers<IRootState, TAction>({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
