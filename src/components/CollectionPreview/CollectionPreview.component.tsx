import React from 'react';

import { IItem } from '../../types';
import CollectionItem from '../CollectionItem/CollectionItem.component';
import {
  CollectionPreviewContainer,
  CollectionPreviewPreview,
  CollectionPreviewTitle,
} from './CollectionPreview.styles';

interface IProps {
  title: string;
  items: IItem[];
}

const CollectionPreview: React.FC<IProps> = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
    <CollectionPreviewPreview className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewPreview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
