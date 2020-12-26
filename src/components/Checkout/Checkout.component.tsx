import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/Cart/Cart.selectors';
import { IRootState } from '../../types';
import CheckoutItem from '../CheckoutItem/CheckoutItem.component';
import './Checkout.styles.scss';

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: IRootState) => selectCartItems(state));
  const totalPrice = useSelector((state: IRootState) =>
    selectCartTotalPrice(state)
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className="total">
        <span>TOTAL: {totalPrice}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
