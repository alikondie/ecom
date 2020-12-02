import React, { useState } from 'react';
import { IItem } from '../../types';
import SHOP_DATA from '../../assets/shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';
interface ICollections {
  title: string;
  id: number;
  routeName?: string;
  items: IItem[];
}

const ShopPage: React.FC = () => {
  const [collections] = useState<ICollections[]>(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};

export default ShopPage;
