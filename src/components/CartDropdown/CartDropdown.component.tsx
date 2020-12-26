import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/Cart/Cart.actions';
import { selectCartItems } from '../../redux/Cart/Cart.selectors';
import { IRootState } from '../../types';
import CartItem from '../CartItem/CartItem.component';

import CustomButton from '../CustomButton/CustomButton.component';
import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const cartItems = useSelector((state: IRootState) => selectCartItems(state));
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
