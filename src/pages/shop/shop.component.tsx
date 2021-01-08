import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import { updateCollections } from '../../redux/Shop/shops.actions';
import CollectionPage from '../Collection/Collection.component';

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCollections());
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
