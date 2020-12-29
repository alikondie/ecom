import React from 'react';
import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/Cart/Cart.actions';
import { IRootState } from '../../types';
import { selectCartItemsCount } from '../../redux/Cart/Cart.selectors';

const CartIcon = () => {
  const dispatch = useDispatch();

  const itemCount = useSelector((state: IRootState) =>
    selectCartItemsCount(state)
  );

  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-icon" onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
