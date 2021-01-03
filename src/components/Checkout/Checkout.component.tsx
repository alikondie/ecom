import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/Cart/Cart.selectors';
import { IRootState } from '../../types';
import CheckoutItem from '../CheckoutItem/CheckoutItem.component';
import StripeCheckoutButton from '../StripeButton/StripeButton.component';
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
      <StripeCheckoutButton price={totalPrice} />
      <div className="test-warning">
        USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENTS
        <br />
        4242 4242 4242 4242 EXPDATE- 01/22 - CVV: 123
      </div>
    </div>
  );
};

export default CheckoutPage;
