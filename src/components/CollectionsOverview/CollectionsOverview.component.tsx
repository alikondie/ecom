import React from 'react';
import { useSelector } from 'react-redux';
import { selectioCollectionsForPreview } from '../../redux/Shop/Shop.selector';
import { IRootState } from '../../types';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import './CollectionsOverview.styles.scss';

const CollectionsOverview = () => {
  const collections = useSelector((state: IRootState) =>
    selectioCollectionsForPreview(state)
  );
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
