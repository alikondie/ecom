import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/Cart/Cart.actions';
import { IRootState } from '../../types';
import { selectCartItemsCount } from '../../redux/Cart/Cart.selectors';
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon,
} from './CartIcon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const itemCount = useSelector((state: IRootState) =>
    selectCartItemsCount(state)
  );

  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <CartIconContainer onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
