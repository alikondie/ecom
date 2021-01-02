import { createSelector } from 'reselect';
import { ICollection, ICollectionData, IRootState, IShop } from '../../types';
import memoize from 'lodash.memoize';

const selectShop = (state: IRootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: IShop) => shop.collections
);

export const selectioCollectionsForPreview = createSelector(
  [selectCollections],
  (collections: ICollectionData) =>
    Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize(
  (collectionUrlId: keyof ICollectionData) =>
    createSelector(
      [selectCollections],
      (collections: ICollectionData) => collections[collectionUrlId]
    )
);