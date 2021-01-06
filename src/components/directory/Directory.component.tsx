import React from 'react';
import MenuItem from '../MenuItem/MenuItem.component';
import { useSelector } from 'react-redux';
import { IRootState } from '../../types';
import { selectDirectorySections } from '../../redux/Directory/Directory.selector';
import { DirectoryMenuContainer } from './Directory.styles';

const Directory: React.FC = () => {
  const sections = useSelector((state: IRootState) =>
    selectDirectorySections(state)
  );

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...section }) => (
        <MenuItem key={id} {...section} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
