import { createSelector } from 'reselect';
import { ICart, IItem, IRootState } from '../../types';

const selectCart = (state: IRootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart: ICart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: IItem[]) =>
    cartItems.reduce(
      (count, item) => count + (item.quantity ? item.quantity : 0),
      0
    )
);
