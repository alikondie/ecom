import { TAction } from '../../types';
import * as constants from '../Constants';
export const setCurrentUser = (user: any): TAction => ({
  type: constants.SET_CURRENT_USER,
  payload: user,
});
