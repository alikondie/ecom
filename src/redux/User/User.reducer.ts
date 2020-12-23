import { TAction } from '../../types';
import * as constants from '../Constants';
const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action: TAction) => {
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
