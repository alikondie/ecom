import { TAction } from '../../types';
import { TOGGLE_CART_HIDDEN } from '../Constants';

const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
