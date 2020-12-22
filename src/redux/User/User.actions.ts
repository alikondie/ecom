import * as constants from '../Constants';
export const setCurrentUser = (user: any) => ({
  type: constants.SET_CURRENT_USER,
  payload: user,
});
