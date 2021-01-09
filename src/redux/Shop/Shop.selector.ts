import { createSelector } from 'reselect';
import { ICollectionData, IRootState, IShop } from '../../types';
import memoize from 'lodash.memoize';

const selectShop = (state: IRootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: IShop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections: ICollectionData) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize(
  (collectionUrlId: keyof ICollectionData) =>
    createSelector([selectCollections], (collections: ICollectionData) =>
      collections ? collections[collectionUrlId] : null
    )
);
