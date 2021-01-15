import { takeLatest, call, put, all } from 'redux-saga/effects';
import { UPDATE_COLLECTIONS_REQUEST } from '../Constants';
import { mapCollections } from '../../firebase/firebase.utils';
import {
  updateCollectionsError,
  updateCollectionsSuccess,
} from './shops.actions';
import { ICollectionData } from '../../types';

export function* updateCollectionAsync() {
  yield console.log("let's go!");

  try {
    const collectionsMap: ICollectionData = yield call(mapCollections);
    yield put(updateCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(updateCollectionsError(error.toString()));
  }
}

export function* updateCollectionRequest() {
  yield takeLatest(UPDATE_COLLECTIONS_REQUEST, updateCollectionAsync);
}

export function* shopSagas() {
  yield all([call(updateCollectionRequest)]);
}
