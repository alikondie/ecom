import { ICurrentUser, IEmailAndPassword, TAction } from '../../types';
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
