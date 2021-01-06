import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/Cart/Cart.selectors';
import { IRootState } from '../../types';
import CheckoutItem from '../CheckoutItem/CheckoutItem.component';
import StripeCheckoutButton from '../StripeButton/StripeButton.component';
import {
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  TestWarning,
  TotalPrice,
} from './Checkout.styles';

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: IRootState) => selectCartItems(state));
  const totalPrice = useSelector((state: IRootState) =>
    selectCartTotalPrice(state)
  );
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <TotalPrice>
        <span>TOTAL: {totalPrice}</span>
      </TotalPrice>
      <StripeCheckoutButton price={totalPrice} />
      <TestWarning>
        USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENTS
        <br />
        4242 4242 4242 4242 EXPDATE- 01/22 - CVV: 123
      </TestWarning>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
