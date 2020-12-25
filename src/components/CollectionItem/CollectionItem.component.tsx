import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/Cart/Cart.actions';
import { IItem } from '../../types';
import CustomButton from '../CustomButton/CustomButton.component';

import './CollectionItem.styles.scss';

interface IProps {
  item: IItem;
}

const CollectionItem: React.FC<IProps> = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        {' '}
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
