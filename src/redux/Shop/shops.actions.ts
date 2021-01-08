import { mapCollections } from '../../firebase/firebase.utils';
import { ICollectionData, TAction, TDispatch } from '../../types';
import {
  UPDATE_COLLECTIONS_ERROR,
  UPDATE_COLLECTIONS_REQUEST,
  UPDATE_COLLECTIONS_SUCCESS,
} from '../Constants';

export const updateCollectionsRequest = (): TAction => ({
  type: UPDATE_COLLECTIONS_REQUEST,
});

export const updateCollectionsSuccess = (
  collectionsMap: ICollectionData
): TAction => ({
  type: UPDATE_COLLECTIONS_SUCCESS,
  payload: { collections: collectionsMap, isLoading: false },
});

export const updateCollectionsError = (error: string): TAction => ({
  type: UPDATE_COLLECTIONS_ERROR,
  payload: error,
});

export const updateCollections = () => (dispatch: TDispatch) => {
  dispatch(updateCollectionsRequest());
  return mapCollections().then((payload) =>
    dispatch(updateCollectionsSuccess(payload))
  );
};
