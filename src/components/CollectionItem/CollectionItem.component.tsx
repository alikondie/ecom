import React from 'react';

import './CollectionItem.styles.scss';

interface IProps {
  name: string;
  imageUrl: string;
  price: number;
}

const CollectionItem: React.FC<IProps> = ({ name, imageUrl, price }) => (
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
  </div>
);

export default CollectionItem;
