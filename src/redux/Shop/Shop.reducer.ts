import { IShop, TAction } from '../../types';
import {
  UPDATE_COLLECTIONS_ERROR,
  UPDATE_COLLECTIONS_REQUEST,
  UPDATE_COLLECTIONS_SUCCESS,
} from '../Constants';

const initialState: IShop = {
  collections: {},
  error: null,
  isLoading: false,
};

const shopReducer = (state = initialState, action: TAction): IShop => {
  switch (action.type) {
    case UPDATE_COLLECTIONS_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_COLLECTIONS_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case UPDATE_COLLECTIONS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default shopReducer;
