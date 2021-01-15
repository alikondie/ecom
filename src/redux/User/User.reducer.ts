import { ICurrentUser, TAction } from '../../types';
import * as constants from '../Constants';
const initialState: ICurrentUser = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action: TAction): ICurrentUser => {
  switch (action.type) {
    case constants.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case constants.SIGNIN_ERROR:
    case constants.SIGN_OUT_ERROR:
      return { ...state, error: action.payload };
    case constants.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    default:
      return state;
  }
};

export default userReducer;
