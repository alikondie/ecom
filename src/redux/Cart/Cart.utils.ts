import { IItem } from '../../types';

export const addItemToCart = (cartItems: IItem[], cartItemToAdd: IItem) => {
  const cartItemExists = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (cartItemExists) {
    return cartItems.map((item: IItem) =>
      item.id === cartItemToAdd.id && item.quantity
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
