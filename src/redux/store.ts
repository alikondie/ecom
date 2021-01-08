import { createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import { default as thunk } from 'redux-thunk';
import rootReducer from './RootReducer';
import { IRootState, TAction } from '../types';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore<
  IRootState & PersistPartial,
  TAction,
  any,
  any
>(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
