import { IItem, TAction } from '../../types';
import {
  ADD_ITEM,
  CLEAR_CART,
  CLEAR_ITEM,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from '../Constants';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItem): TAction => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItem = (item: IItem): TAction => ({
  type: CLEAR_ITEM,
  payload: item,
});

export const removeItem = (item: IItem): TAction => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearCart = (): TAction => ({
  type: CLEAR_CART,
});
