import { all, call } from 'redux-saga/effects';
import { updateCollectionStart } from './Shop/Shop.sagas';

export default function* rootSaga() {
  yield all([call(updateCollectionStart)]);
}
