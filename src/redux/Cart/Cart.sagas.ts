import { all, call, takeLatest, put as dispatch } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../Constants';
import { clearCart } from './Cart.actions';

export function* clearCartOnSignOut() {
  yield dispatch(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
