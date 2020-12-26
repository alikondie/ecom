import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearItem, removeItem } from '../../redux/Cart/Cart.actions';
import { IItem } from '../../types';

import './CheckoutItem.styles.scss';

interface IProps {
  cartItem: IItem;
}

const CheckoutItem: React.FC<IProps> = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            console.log('clicked');
            dispatch(removeItem(cartItem));
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() => {
          dispatch(clearItem(cartItem));
        }}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
