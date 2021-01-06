import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearItem, removeItem } from '../../redux/Cart/Cart.actions';
import { IItem } from '../../types';
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  QuantityArrow,
  QuantityValue,
  RemoveButton,
} from './CheckoutItem.styles';

// import './CheckoutItem.styles.scss';

interface IProps {
  cartItem: IItem;
}
const CheckoutItem: React.FC<IProps> = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <QuantityArrow
          onClick={() => {
            console.log('clicked');
            dispatch(removeItem(cartItem));
          }}
        >
          &#10094;
        </QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </QuantityArrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton
        onClick={() => {
          dispatch(clearItem(cartItem));
        }}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
