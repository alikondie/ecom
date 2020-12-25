import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../types';
import CartItem from '../CartItem/CartItem.component';

import CustomButton from '../CustomButton/CustomButton.component';
import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const cartItems = useSelector((state: IRootState) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
