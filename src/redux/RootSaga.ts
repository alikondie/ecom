import { all, call } from 'redux-saga/effects';
import { updateCollectionRequest } from './Shop/Shop.sagas';
import { userSagas } from './User/User.sagas';

export default function* rootSaga() {
  yield all([call(updateCollectionRequest), call(userSagas)]);
}
