import React from 'react';
import { IItem } from '../../types';
import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemName,
} from './CartItem.styles';

interface IProps {
  item: IItem;
}

const CartItem: React.FC<IProps> = ({
  item: { imageUrl, price, name, quantity },
}) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemName>{name}</ItemName>
      <span className="price">
        {quantity} x {price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
