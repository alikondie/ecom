import {
  ICurrentUser,
  IEmailAndPassword,
  ISignupForm,
  TAction,
} from '../../types';
import * as constants from '../Constants';
export const setCurrentUser = (user: any): TAction => ({
  type: constants.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInRequest = (): TAction => ({
  type: constants.GOOGLE_SIGNIN_REQUEST,
});

export const emailSignInRequest = (
  EmailAndPassword: IEmailAndPassword
): TAction => ({
  type: constants.EMAIL_SIGNIN_REQUEST,
  payload: EmailAndPassword,
});

export const signInSuccess = (user: ICurrentUser): TAction => ({
  type: constants.SIGNIN_SUCCESS,
  payload: user,
});

export const signInError = (error: string): TAction => ({
  type: constants.SIGNIN_ERROR,
  payload: error,
});

export const checkUserSession = (): TAction => ({
  type: constants.CHECK_USER_SESSION,
});

export const signOutRequest = (): TAction => ({
  type: constants.SIGN_OUT_REQUEST,
});

export const signOutSuccess = (): TAction => ({
  type: constants.SIGN_OUT_SUCCESS,
});

export const signOutError = (error: string): TAction => ({
  type: constants.SIGN_OUT_ERROR,
  payload: error,
});

export const signUpRequest = (user: ISignupForm): TAction => ({
  type: constants.SIGNUP_REQUEST,
  payload: user,
});

export const signUpSuccess = (): TAction => ({
  type: constants.SIGNUP_SUCCESS,
});

export const signUpError = (error: string): TAction => ({
  type: constants.SIGNUP_ERROR,
  payload: error,
});
