import { all, call } from 'redux-saga/effects';
import { cartSagas } from './Cart/Cart.sagas';
import { shopSagas } from './Shop/Shop.sagas';
import { userSagas } from './User/User.sagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
