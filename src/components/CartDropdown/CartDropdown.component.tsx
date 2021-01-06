import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/Cart/Cart.actions';
import { selectCartItems } from '../../redux/Cart/Cart.selectors';
import { IRootState } from '../../types';
import CartItem from '../CartItem/CartItem.component';

import CustomButton from '../CustomButton/CustomButton.component';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from './CartDropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector((state: IRootState) => selectCartItems(state));
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty!</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
