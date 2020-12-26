import { IItem, TAction } from '../../types';
import {
  ADD_ITEM,
  CLEAR_ITEM,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from '../Constants';
import { addItemToCart, removeItemFromCart } from './Cart.utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: IItem) => cartItem.id !== action.payload.id
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
