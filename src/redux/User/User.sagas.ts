import { takeLatest, put as dispatch, all, call } from 'redux-saga/effects';
import firebase, {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from '../../firebase/firebase.utils';
import { IEmailAndPassword, ISignupForm } from '../../types';
import {
  CHECK_USER_SESSION,
  EMAIL_SIGNIN_REQUEST,
  GOOGLE_SIGNIN_REQUEST,
  SIGNUP_REQUEST,
  SIGN_OUT_REQUEST,
} from '../Constants';
import {
  emailSignInRequest,
  signInError,
  signInSuccess,
  signOutError,
  signOutSuccess,
  signUpError,
  signUpSuccess,
} from './User.actions';

type TSigninWithEmailParams = {
  type: string;
  payload: IEmailAndPassword;
};

type TSignUpParams = {
  type: string;
  payload: ISignupForm;
};

export function* getSnapshotFromUserAuth(
  userCred: firebase.auth.UserCredential
) {
  try {
    const { user } = userCred;
    // console.log('user', userCred);
    const userRef = yield createUserProfileDocument(user!, undefined);
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

export function* signInWithGoogle() {
  try {
    const userCred: firebase.auth.UserCredential = yield auth.signInWithPopup(
      googleProvider
    );
    yield getSnapshotFromUserAuth(userCred);
  } catch (error) {
    if (error.message && typeof error.message === 'string') {
      yield dispatch(signInError(error.message));
    } else yield dispatch(signInError('Error signing in'));
  }
}

export function* signInWithEmailAndPassword({
  payload,
}: TSigninWithEmailParams) {
  try {
    const { email, password } = payload;
    const userCred: firebase.auth.UserCredential = yield auth.signInWithEmailAndPassword(
      email,
      password
    );
    yield getSnapshotFromUserAuth(userCred);
  } catch (error) {
    if (error.message && typeof error.message === 'string') {
      yield dispatch(signInError(error.message));
    } else yield dispatch(signInError('Error signing in'));
  }
}

export function* isUserAuthenticated() {
  try {
    const user: firebase.User = yield getCurrentUser();
    if (!user) return;
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

export function* onGoogleSinginRequest() {
  yield takeLatest(GOOGLE_SIGNIN_REQUEST, signInWithGoogle);
}

export function* onEmailSignInRequest() {
  yield takeLatest(EMAIL_SIGNIN_REQUEST, signInWithEmailAndPassword);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield dispatch(signOutSuccess());
  } catch (error) {
    if (error.message && typeof error.message === 'string') {
      yield dispatch(signOutError(error.message));
    } else yield dispatch(signOutError('Error signing out'));
  }
}

export function* onSignoutRequest() {
  yield takeLatest(SIGN_OUT_REQUEST, signOut);
}

export function* signUp({
  payload: { email, password, displayName },
}: TSignUpParams) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    if (user) {
      yield createUserProfileDocument(user, {
        displayName: displayName,
      });
      yield dispatch(signUpSuccess());
      yield dispatch(emailSignInRequest({ email, password }));
    }
  } catch (error) {
    if (error.message && typeof error.message === 'string') {
      yield dispatch(signUpError(error.message));
    } else yield dispatch(signUpError('Error signing out'));
  }
}

export function* onSignupRequest() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSinginRequest),
    call(onEmailSignInRequest),
    call(onCheckUserSession),
    call(onSignoutRequest),
    call(onSignupRequest),
  ]);
}
