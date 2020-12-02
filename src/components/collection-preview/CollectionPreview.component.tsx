import React from 'react';

import './CollectionPreview.styles.scss';
import { IItem } from '../../types';
import CollectionItem from '../collection-item/CollectionItem.component';

interface IProps {
  title: string;
  items: IItem[];
}

const CollectionPreview: React.FC<IProps> = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...item }) => (
          <CollectionItem key={id} {...item}>
            {item.name}
          </CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
