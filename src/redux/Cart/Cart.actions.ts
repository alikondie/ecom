import { IItem } from '../../types';
import { ADD_ITEM, TOGGLE_CART_HIDDEN } from '../Constants';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItem) => ({
  type: ADD_ITEM,
  payload: item,
});
