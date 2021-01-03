import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface IProps {
  price: number;
}

const StripeCheckoutButton: React.FC<IProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBKEY;

  const onToken = (token: Token) => {
    console.log(token);
    alert('Payment processed successfully');
  };
  return (
    <StripeCheckout
      label="Checkout"
      name="ECOM"
      billingAddress
      shippingAddress
      image="https://www.flaticon.com/svg/static/icons/svg/3983/3983423.svg"
      description={`Total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay"
      token={onToken}
      stripeKey={publishableKey!}
    />
  );
};

export default StripeCheckoutButton;
