import { createSelector } from 'reselect';
import { ICurrentUser, IRootState } from '../../types';

const selectUser = (state: IRootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: ICurrentUser) => user.currentUser
);
