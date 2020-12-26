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

export const removeItemFromCart = (
  cartItems: IItem[],
  cartItemToRemove: IItem
) => {
  const cartItemExists = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (cartItemExists?.quantity === 1) {
    return cartItems.filter((item: IItem) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((item: IItem) =>
    item.id === cartItemToRemove.id && item.quantity
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
