import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/Shop/Shop.selector';
import { IRootState } from '../../types';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import { CollectionsOverviewContainer } from './CollectionOverview.styles';

const CollectionsOverview = () => {
  const collections = useSelector((state: IRootState) =>
    selectCollectionsForPreview(state)
  );
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
