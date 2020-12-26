import { IItem } from '../../types';
import {
  ADD_ITEM,
  CLEAR_ITEM,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from '../Constants';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItem) => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItem = (item: IItem) => ({
  type: CLEAR_ITEM,
  payload: item,
});

export const removeItem = (item: IItem) => ({
  type: REMOVE_ITEM,
  payload: item,
});
