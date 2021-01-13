import { createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './RootReducer';
import { IRootState, TAction } from '../types';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore<
  IRootState & PersistPartial,
  TAction,
  any,
  any
>(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
