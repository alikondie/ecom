import { IShop, TAction } from '../../types';
import SHOP_DATA from './shop.data';

const initialState: IShop = {
  collections: SHOP_DATA,
};

const shopReducer = (state = initialState, action: TAction): IShop => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
