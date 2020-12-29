import { createSelector } from 'reselect';
import { IDirectory, IRootState } from '../../types';

export const selectDirectory = (state: IRootState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory: IDirectory) => directory.sections
);
