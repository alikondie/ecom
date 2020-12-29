import React from 'react';
import './Directory.styles.scss';

import MenuItem from '../MenuItem/MenuItem.component';
import { useSelector } from 'react-redux';
import { IRootState } from '../../types';
import { selectDirectorySections } from '../../redux/Directory/Directory.selector';

const Directory: React.FC = () => {
  const sections = useSelector((state: IRootState) =>
    selectDirectorySections(state)
  );

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...section }) => (
        <MenuItem key={id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
