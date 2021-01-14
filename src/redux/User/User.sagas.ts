import { takeLatest, put as dispatch, all, call } from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from '../../firebase/firebase.utils';
import { IEmailAndPassword } from '../../types';
import { EMAIL_SIGNIN_REQUEST, GOOGLE_SIGNIN_REQUEST } from '../Constants';
import { signInError, signInSuccess } from './User.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield createUserProfileDocument(user, undefined);
    const userSnapshot = yield userRef.get();
    yield dispatch(
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield dispatch(signInError(error.toString()));
  }
}

export function* onGoogleSinginRequest() {
  yield takeLatest(GOOGLE_SIGNIN_REQUEST, signInWithGoogle);
}

export function* signInWithEmailAndPassword({
  payload,
}: TSigninWithEmailParams) {
  try {
    const { email, password } = payload;
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield createUserProfileDocument(user, undefined);
    const userSnapshot = yield userRef.get();
    yield dispatch(
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    if (error.message && typeof error.message === 'string') {
      yield dispatch(signInError(error.message));
    } else yield dispatch(signInError('Error signing in'));
  }
}

type TSigninWithEmailParams = {
  type: string;
  payload: IEmailAndPassword;
};

export function* onEmailSignInRequest() {
  yield takeLatest(EMAIL_SIGNIN_REQUEST, signInWithEmailAndPassword);
}

export function* userSagas() {
  yield all([call(onGoogleSinginRequest), call(onEmailSignInRequest)]);
}
