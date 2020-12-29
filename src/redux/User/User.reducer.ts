import { ICurrentUser, TAction } from '../../types';
import * as constants from '../Constants';
const initialState: ICurrentUser = {
  currentUser: null,
};

const userReducer = (state = initialState, action: TAction): ICurrentUser => {
  switch (action.type) {
    case constants.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
