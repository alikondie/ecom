import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.component';
import { updateCollectionsRequest } from '../../redux/Shop/shops.actions';
import { IRootState } from '../../types';
import CollectionPage from '../Collection/Collection.component';

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCollectionsRequest());
  }, []);

  const shop = useSelector((state: IRootState) => state.shop);

  return (
    <LoadingSpinner isError={shop.error} isLoading={shop.isLoading}>
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    </LoadingSpinner>
  );
};

export default ShopPage;
