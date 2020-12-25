import React from 'react';

import './CollectionPreview.styles.scss';
import { IItem } from '../../types';
import CollectionItem from '../CollectionItem/CollectionItem.component';

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
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
