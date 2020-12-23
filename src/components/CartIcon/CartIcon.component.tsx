import React from 'react';
import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/Cart/Cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-icon" onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
