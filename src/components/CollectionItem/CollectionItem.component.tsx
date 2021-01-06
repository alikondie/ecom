import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/Cart/Cart.actions';
import { IItem } from '../../types';

import {
  CollectionItemContainer,
  CollectionItemFooter,
  CollectionItemImage,
  CollectionItemName,
  CollectionItemPrice,
  CollectionItemButton,
} from './CollectionItem.styles';

interface IProps {
  item: IItem;
}

const CollectionItem: React.FC<IProps> = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <CollectionItemImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionItemFooter className="collection-footer">
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </CollectionItemFooter>
      <CollectionItemButton inverted onClick={() => dispatch(addItem(item))}>
        {' '}
        Add to Cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
